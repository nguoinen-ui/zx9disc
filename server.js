const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Đường dẫn file database
const DB_FILE = path.join(__dirname, 'data', 'results.json');

// Hàm đọc database
function readDB() {
    try {
        if (!fs.existsSync(DB_FILE)) {
            // Tạo file nếu chưa có
            const defaultData = {
                results: [],
                adminPassword: 'admin123'
            };
            fs.writeFileSync(DB_FILE, JSON.stringify(defaultData, null, 2));
            return defaultData;
        }
        const data = fs.readFileSync(DB_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Lỗi đọc DB:', error);
        return { results: [], adminPassword: 'admin123' };
    }
}

// Hàm ghi database
function writeDB(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Lỗi ghi DB:', error);
        return false;
    }
}

// Khởi tạo database
function initDB() {
    const db = readDB();
    if (!db.results) db.results = [];
    if (!db.adminPassword) db.adminPassword = 'admin123';
    writeDB(db);
    console.log('✅ Database initialized!');
}
initDB();

// ============ API USER ============

// Lưu kết quả
app.post('/api/submit', (req, res) => {
    try {
        const { name, D, I, S, C } = req.body;
        
        if (!name || D === undefined) {
            return res.status(400).json({ error: 'Thiếu thông tin' });
        }

        let db = readDB();
        
        const existingIndex = db.results.findIndex(r => r.name === name);
        const result = {
            name,
            D, I, S, C,
            timestamp: new Date().toLocaleString('vi-VN'),
            id: existingIndex !== -1 ? db.results[existingIndex].id : uuidv4()
        };

        if (existingIndex !== -1) {
            db.results[existingIndex] = result;
        } else {
            db.results.push(result);
        }

        writeDB(db);
        
        res.json({ success: true, message: 'Đã lưu kết quả', result });
    } catch (error) {
        console.error('Submit error:', error);
        res.status(500).json({ error: 'Lỗi server: ' + error.message });
    }
});

// Lấy kết quả của 1 người
app.get('/api/user/:name', (req, res) => {
    try {
        const db = readDB();
        const name = decodeURIComponent(req.params.name);
        const result = db.results.find(r => r.name === name);
        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ error: 'Không tìm thấy' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// ============ API ADMIN ============

// Đăng nhập admin
app.post('/api/admin/login', (req, res) => {
    try {
        const { password } = req.body;
        const db = readDB();
        if (password === db.adminPassword) {
            res.json({ success: true });
        } else {
            res.status(401).json({ error: 'Sai mật khẩu' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Lấy tất cả kết quả
app.get('/api/admin/results', (req, res) => {
    try {
        const db = readDB();
        res.json(db.results);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Xóa kết quả
app.delete('/api/admin/results/:id', (req, res) => {
    try {
        let db = readDB();
        db.results = db.results.filter(r => r.id !== req.params.id);
        writeDB(db);
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Thống kê
app.get('/api/admin/stats', (req, res) => {
    try {
        const db = readDB();
        const results = db.results;
        if (results.length === 0) {
            return res.json({ total: 0, avgD: 0, avgI: 0, avgS: 0, avgC: 0 });
        }
        const total = results.length;
        const sumD = results.reduce((acc, r) => acc + r.D, 0);
        const sumI = results.reduce((acc, r) => acc + r.I, 0);
        const sumS = results.reduce((acc, r) => acc + r.S, 0);
        const sumC = results.reduce((acc, r) => acc + r.C, 0);
        res.json({
            total,
            avgD: (sumD / total).toFixed(1),
            avgI: (sumI / total).toFixed(1),
            avgS: (sumS / total).toFixed(1),
            avgC: (sumC / total).toFixed(1)
        });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Khởi động server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server đang chạy tại port ${PORT}`);
    console.log(`📱 User: http://localhost:${PORT}`);
    console.log(`🔐 Admin: http://localhost:${PORT}/admin.html`);
});