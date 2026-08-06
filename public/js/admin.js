const API_URL = window.location.origin + '/api';
let allResults = [];

// Login
async function login() {
    const pwd = document.getElementById('adminPassword').value;
    if (!pwd) { alert('Vui lòng nhập mật khẩu'); return; }
    try {
        const res = await fetch(`${API_URL}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: pwd })
        });
        if (res.ok) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('dashboard').style.display = 'block';
            refreshData();
        } else {
            alert('❌ Sai mật khẩu');
        }
    } catch (e) {
        alert('❌ Lỗi kết nối server');
    }
}

// Refresh
async function refreshData() {
    try {
        const statsRes = await fetch(`${API_URL}/admin/stats`);
        const stats = await statsRes.json();
        document.getElementById('totalUsers').textContent = stats.total || 0;
        document.getElementById('avgD').textContent = stats.avgD || 0;
        document.getElementById('avgI').textContent = stats.avgI || 0;
        document.getElementById('avgS').textContent = stats.avgS || 0;
        document.getElementById('avgC').textContent = stats.avgC || 0;

        const resultsRes = await fetch(`${API_URL}/admin/results`);
        allResults = await resultsRes.json();
        renderResults(allResults);
    } catch (e) {
        alert('❌ Lỗi tải dữ liệu');
    }
}

// Render
function renderResults(results) {
    const container = document.getElementById('resultsList');
    if (results.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:20px;">Chưa có kết quả</p>';
        return;
    }
    container.innerHTML = results.map(r => `
        <div class="result-item">
            <div class="info">
                <div class="name">👤 ${r.name}</div>
                <div class="scores">
                    <span style="color:#ef4444;">D:${r.D}</span>
                    <span style="color:#f59e0b;">I:${r.I}</span>
                    <span style="color:#22c55e;">S:${r.S}</span>
                    <span style="color:#3b82f6;">C:${r.C}</span>
                </div>
                <div class="time">📅 ${r.timestamp}</div>
            </div>
            <button onclick="deleteResult('${r.id}')" class="delete-btn">🗑</button>
        </div>
    `).join('');
}

// Filter
function filterResults() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    renderResults(allResults.filter(r => r.name.toLowerCase().includes(keyword)));
}

// Delete
async function deleteResult(id) {
    if (!confirm('Xóa kết quả này?')) return;
    try {
        await fetch(`${API_URL}/admin/results/${id}`, { method: 'DELETE' });
        refreshData();
    } catch (e) {
        alert('❌ Lỗi xóa');
    }
}

// Export CSV
function exportCSV() {
    if (allResults.length === 0) { alert('Không có dữ liệu'); return; }
    const headers = ['Tên', 'D', 'I', 'S', 'C', 'Thời gian'];
    const rows = allResults.map(r => [r.name, r.D, r.I, r.S, r.C, r.timestamp]);
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `DISC_${new Date().toISOString().slice(0,10)}.csv`;
    link.click();
}

// Logout
function logout() {
    if (confirm('Đăng xuất?')) {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('adminPassword').value = '';
    }
}