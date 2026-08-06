const express = require('express');
const cors = require('cors');
const { Low, JSONFile } = require('lowdb');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database setup
const dbPath = path.join(__dirname, 'data', 'results.json');
const adapter = new JSONFile(dbPath);
const db = new Low(adapter);

// Init database
async function initDB() {
    await db.read();
    db.data ||= { results: [], adminPassword: 'admin123' };
    await db.write();
}
initDB();

// ============ API USER ============

// Lưu kết quả
app.post('/api/submit', async (req, res) => {
    try {
        const { name, D, I, S, C } = req.body;
        
        if (!name || D === undefined) {
            return res.status(400).json({ error: 'Thiếu thông tin' });
        }

        await db.read();
        
        const existingIndex = db.data.results.findIndex(r => r.name === name);
        const result = {
            name,
            D, I, S, C,
            timestamp: new Date().toLocaleString('vi-VN'),
            id: existingIndex !== -1 ? db.data.results[existingIndex].id : uuidv4()
        };

        if (existingIndex !== -1) {
            db.data.results[existingIndex] = result;
        } else {
            db.data.results.push(result);
        }

        await db.write();
        
        res.json({ success: true, message: 'Đã lưu kết quả', result });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Lấy kết quả của 1 người
app.get('/api/user/:name', async (req, res) => {
    try {
        await db.read();
        const name = decodeURIComponent(req.params.name);
        const result = db.data.results.find(r => r.name === name);
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
app.post('/api/admin/login', async (req, res) => {
    try {
        const { password } = req.body;
        await db.read();
        if (password === db.data.adminPassword) {
            res.json({ success: true });
        } else {
            res.status(401).json({ error: 'Sai mật khẩu' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Lấy tất cả kết quả
app.get('/api/admin/results', async (req, res) => {
    try {
        await db.read();
        res.json(db.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Xóa kết quả
app.delete('/api/admin/results/:id', async (req, res) => {
    try {
        await db.read();
        db.data.results = db.data.results.filter(r => r.id !== req.params.id);
        await db.write();
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Lỗi server' });
    }
});

// Thống kê
app.get('/api/admin/stats', async (req, res) => {
    try {
        await db.read();
        const results = db.data.results;
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

app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại: http://localhost:${PORT}`);
});