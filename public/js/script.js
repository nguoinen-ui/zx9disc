// ===== DỮ LIỆU CÂU HỎI (28 câu) =====
const questions = [
    { id: 1, traits: [
        { word: 'Enthusiastic: hăng hái, nhiệt tình, say mê', code: 'A' },
        { word: 'Daring: táo bạo, cả gan', code: 'O' },
        { word: 'Diplomatic: có tài ngoại giao', code: 'P' },
        { word: 'Satisfied: dễ thỏa mãn', code: 'B' }
    ]},
    { id: 2, traits: [
        { word: 'Poised: đình đạc, tự chủ, bình tĩnh', code: 'A' },
        { word: 'Observant: hay quan sát, tinh ý', code: 'P' },
        { word: 'Modest: khiêm tốn, nhún nhường', code: 'B' },
        { word: 'Impatient: không có kiên nhẫn', code: 'O' }
    ]},
    { id: 3, traits: [
        { word: 'Cautious: thận trọng, cẩn trọng', code: 'P' },
        { word: 'Determined: quả quyết, kiên quyết', code: 'O' },
        { word: 'Tactful: khéo ứng xử, lịch thiệp', code: 'P' },
        { word: 'Agreeable: sẵn sàng tán thành, đồng ý', code: 'B' }
    ]},
    { id: 4, traits: [
        { word: 'Convincing: có sức thuyết phục', code: 'A' },
        { word: 'Good natured: có tính thiện, bản chất tốt', code: 'B' },
        { word: 'Magnetic: có sức hấp dẫn, lôi cuốn', code: 'A' },
        { word: 'Insistent: cương quyết', code: 'O' }
    ]},
    { id: 5, traits: [
        { word: 'Friendly: thân thiện', code: 'A' },
        { word: 'Accurate: chính đáng, xác đáng', code: 'P' },
        { word: 'Brave: can đảm', code: 'O' },
        { word: 'Inspiring: gây cảm hứng', code: 'A' }
    ]},
    { id: 6, traits: [
        { word: 'Outspoken: nói thẳng, trực tính', code: 'O' },
        { word: 'Calm: diễm tĩnh', code: 'N' },
        { word: 'Submissive: dễ phục tùng', code: 'B' },
        { word: 'Timid: nhút nhát', code: 'N' }
    ]},
    { id: 7, traits: [
        { word: 'Talkative: nói nhiều', code: 'A' },
        { word: 'Controlled: có kiểm soát, tiết chế', code: 'P' },
        { word: 'Reserved: kín đáo, dè dặt', code: 'P' },
        { word: 'Obliging: sẵn lòng giúp đỡ', code: 'B' }
    ]},
    { id: 8, traits: [
        { word: 'Conventional: nói theo thói quen', code: 'B' },
        { word: 'Decisive: kiên quyết, quả quyết, dứt khoát', code: 'O' },
        { word: 'Strong-willed: cứng còi, kiên quyết', code: 'O' },
        { word: 'Cheerful: vui vẻ, tươi cười', code: 'A' }
    ]},
    { id: 9, traits: [
        { word: 'Adventurous: liều lĩnh, thích phiêu lưu, mạo hiểm', code: 'O' },
        { word: 'Insightful: sâu sắc, sáng suốt', code: 'P' },
        { word: 'Stimulating: kích thích, khuyến khích', code: 'A' },
        { word: 'Kind: từ tế', code: 'B' }
    ]},
    { id: 10, traits: [
        { word: 'Out-going: dễ gần, thoải mái, chan hòa', code: 'A' },
        { word: 'Moderate: ôn hòa', code: 'B' },
        { word: 'Perceptive: dễ cảm thụ', code: 'P' },
        { word: 'Independent: độc lập', code: 'O' }
    ]},
    { id: 11, traits: [
        { word: 'Gentle: hòa nhã, nhẹ nhàng, lịch sự', code: 'B' },
        { word: 'Persuasive: có tài thuyết phục', code: 'A' },
        { word: 'Competitive: cạnh tranh', code: 'O' },
        { word: 'Considerate: ân cần, chu đáo', code: 'B' }
    ]},
    { id: 12, traits: [
        { word: 'Humble: khiêm nhường', code: 'N' },
        { word: 'Original: độc đáo, lập dị', code: 'N' },
        { word: 'Joyful: mang lại niềm vui', code: 'A' },
        { word: 'Private: ấn dật, cách biệt', code: 'P' }
    ]},
    { id: 13, traits: [
        { word: 'Expressive: diễn cảm', code: 'A' },
        { word: 'Conscientious: tận tâm, chu đáo, tỉ mỉ', code: 'P' },
        { word: 'Fussy: nhắng nhít, cầu kỳ, kiều cách', code: 'P' },
        { word: 'Obedient: vâng lời, dễ bảo', code: 'B' }
    ]},
    { id: 14, traits: [
        { word: 'Dominant: lấn át, thống trị', code: 'O' },
        { word: 'Responsive: đáp ứng nhiệt tình, phản ứng nhanh', code: 'N' },
        { word: 'Firm: kiên quyết', code: 'O' },
        { word: 'Playful: hay nghịch', code: 'A' }
    ]},
    { id: 15, traits: [
        { word: 'Attractive: cuốn hút', code: 'A' },
        { word: 'Introspective: nội tâm', code: 'N' },
        { word: 'Impulsive: bốc đồng', code: 'A' },
        { word: 'Introverted: hướng nội', code: 'P' }
    ]},
    { id: 16, traits: [
        { word: 'Stubborn: cứng đầu', code: 'O' },
        { word: 'Predictable: dễ đoán', code: 'B' },
        { word: 'Forceful: mạnh mẽ, sinh động, đầy sức thuyết phục', code: 'O' },
        { word: 'Easy-going: dễ dài', code: 'B' }
    ]},
    { id: 17, traits: [
        { word: 'Logical: suy nghĩ theo logic', code: 'P' },
        { word: 'Bold: táo bạo, dũng cảm', code: 'O' },
        { word: 'Good mixer: giao thiệp tốt', code: 'A' },
        { word: 'Refined: lịch sự, tao nhã', code: 'P' }
    ]},
    { id: 18, traits: [
        { word: 'Loyal: trung thành', code: 'B' },
        { word: 'Charming: duyên dáng, quyến rũ', code: 'A' },
        { word: 'Vigorous: mãnh liệt', code: 'O' },
        { word: 'Lenient: hiền hậu, khoan dung', code: 'B' }
    ]},
    { id: 19, traits: [
        { word: 'Sociable: dễ gần, chan hòa', code: 'A' },
        { word: 'Patient: kiên nhẫn', code: 'B' },
        { word: 'Captivating: hấp dẫn, quyến rũ', code: 'A' },
        { word: 'Contented: dễ chấp nhận, dễ hài lòng, thỏa mãn', code: 'B' }
    ]},
    { id: 20, traits: [
        { word: 'Self-reliant: tự lực', code: 'O' },
        { word: 'Soft spoken: nói năng nhẹ nhàng', code: 'P' },
        { word: 'Demanding: đòi hỏi khắt khe', code: 'O' },
        { word: 'Compliant: hay phục tùng', code: 'P' }
    ]},
    { id: 21, traits: [
        { word: 'Willing: có thiện ý, hay giúp đỡ', code: 'B' },
        { word: 'Eager: hãm hở, nhiệt tình', code: 'O' },
        { word: 'Argumentative: hay tranh cãi', code: 'O' },
        { word: 'Systematic: làm việc có phương pháp, có hệ thống', code: 'P' }
    ]},
    { id: 22, traits: [
        { word: 'Thorough: cẩn thận, tỉ mỉ', code: 'P' },
        { word: 'High-spirited: cao thượng', code: 'A' },
        { word: 'Cooperative: thiên về hướng hợp tác', code: 'B' },
        { word: 'Light-hearted: vô tư lự, thư thái', code: 'A' }
    ]},
    { id: 23, traits: [
        { word: 'Aggressive: xông xáo, năng nổ', code: 'O' },
        { word: 'Extroverted: dễ gần, chan hòa', code: 'A' },
        { word: 'Jovial: vui vẻ, vui tính', code: 'A' },
        { word: 'Precise: đòi hỏi chính xác', code: 'P' }
    ]},
    { id: 24, traits: [
        { word: 'Amiable: dễ kết bạn', code: 'B' },
        { word: 'Fearful: e ngại', code: 'N' },
        { word: 'Direct: thẳng thắn, đích thân làm', code: 'O' },
        { word: 'Even-tempered: điền đạm, bình thản', code: 'B' }
    ]},
    { id: 25, traits: [
        { word: 'Confident: tự tin', code: 'A' },
        { word: 'Sympathetic: dễ cảm thông', code: 'B' },
        { word: 'Restless: luôn không yên, hiểu động', code: 'O' },
        { word: 'Neighborly: thuận hòa với bạn bè, mọi người', code: 'B' }
    ]},
    { id: 26, traits: [
        { word: 'Impartial: công bằng, không thiên vị', code: 'N' },
        { word: 'Assertive: quả quyết, quyết đoán', code: 'O' },
        { word: 'Appealing: lôi cuốn, quyến rũ', code: 'A' },
        { word: 'Careful: quan tâm, lo lắng đến người khác', code: 'P' }
    ]},
    { id: 27, traits: [
        { word: 'Well-disciplined: có kỉ luật tốt', code: 'P' },
        { word: 'Generous: rộng lượng, hào phóng', code: 'B' },
        { word: 'Respectful: luôn tôn trọng người khác', code: 'P' },
        { word: 'Pioneering: đảm nhiệm vai trò tiên phong', code: 'O' }
    ]},
    { id: 28, traits: [
        { word: 'Animated: sôi nổi, đầy sinh khí', code: 'A' },
        { word: 'Persistent: bền bỉ', code: 'O' },
        { word: 'Optimistic: luôn lạc quan', code: 'A' },
        { word: 'Helpful: hay giúp đỡ', code: 'B' }
    ]}
];

const API_URL = window.location.origin + '/api';
let currentUser = '';
let currentResult = null;

// Toast
function showToast(msg, type = 'info') {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast ' + type + ' show';
    clearTimeout(t._timeout);
    t._timeout = setTimeout(() => t.classList.remove('show'), 3500);
}

// Render câu hỏi
function renderQuestions() {
    const wrapper = document.getElementById('quizWrapper');
    wrapper.innerHTML = '';
    questions.forEach((q, idx) => {
        let html = `<div class="question-block"><span class="question-number">Câu ${idx + 1}</span>`;
        q.traits.forEach((t, ti) => {
            const name = `q${idx}_${ti}`;
            html += `
                <div class="trait-item">
                    <div class="trait-word"><span class="code">${t.code}</span> ${t.word}</div>
                    <div class="trait-options">
                        <label class="nhiều"><input type="radio" name="${name}" value="nhiều" data-code="${t.code}" onchange="updateProgress()"> Nhiều</label>
                        <label class="ít"><input type="radio" name="${name}" value="ít" data-code="${t.code}" onchange="updateProgress()"> Ít</label>
                    </div>
                </div>
            `;
        });
        html += '</div>';
        wrapper.innerHTML += html;
    });
}

// Cập nhật tiến trình
function updateProgress() {
    const total = document.querySelectorAll('input[type="radio"]').length;
    const done = document.querySelectorAll('input[type="radio"]:checked').length;
    const pct = Math.round((done / total) * 100);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = done + '/' + total;
}

// Gửi kết quả lên server
async function submitResult(result) {
    try {
        const res = await fetch(`${API_URL}/submit`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(result)
        });
        const data = await res.json();
        if (data.success) {
            document.getElementById('submitStatus').innerHTML = '<div class="submit-status success">✅ Đã gửi kết quả cho Admin!</div>';
            showToast('✅ Đã gửi kết quả thành công!', 'success');
        } else {
            document.getElementById('submitStatus').innerHTML = '<div class="submit-status error">❌ Lỗi: ' + data.error + '</div>';
        }
    } catch (e) {
        document.getElementById('submitStatus').innerHTML = '<div class="submit-status error">❌ Không thể kết nối server</div>';
        showToast('❌ Lỗi kết nối server', 'error');
    }
}

// Tính điểm
function calculateScores() {
    const radios = document.querySelectorAll('input[type="radio"]');
    const selected = {};
    let totalSelected = 0;
    radios.forEach(r => {
        if (r.checked) {
            const name = r.name;
            if (!selected[name]) selected[name] = [];
            selected[name].push({ code: r.dataset.code, label: r.value });
            totalSelected++;
        }
    });

    const totalTraits = questions.length * 4;
    if (totalSelected < totalTraits) {
        showToast(`⚠️ Bạn mới chọn ${totalSelected}/${totalTraits}`, 'error');
        return null;
    }

    const nhiều = { O: 0, A: 0, B: 0, P: 0, N: 0 };
    const ít = { O: 0, A: 0, B: 0, P: 0, N: 0 };
    for (const key in selected) {
        const items = selected[key];
        if (items.length === 1) {
            const item = items[0];
            if (item.label === 'nhiều') nhiều[item.code] = (nhiều[item.code] || 0) + 1;
            else ít[item.code] = (ít[item.code] || 0) + 1;
        }
    }

    return {
        name: currentUser,
        D: nhiều.O - ít.O,
        I: nhiều.A - ít.A,
        S: nhiều.B - ít.B,
        C: nhiều.P - ít.P
    };
}

// Hiển thị kết quả
function displayResult(r) {
    document.getElementById('resultArea').style.display = 'block';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('userResultName').textContent = '👤 ' + r.name;

    const maxVal = Math.max(r.D, r.I, r.S, r.C, 5);
    const hf = 160 / maxVal;
    ['D', 'I', 'S', 'C'].forEach(k => {
        const bar = document.getElementById('bar' + k);
        const h = Math.max(40, r[k] * hf + 20);
        bar.style.height = h + 'px';
        bar.textContent = r[k];
    });

    document.getElementById('scoreDetail').innerHTML = `
        <div class="score-item"><span class="dot" style="background:#ef4444;"></span> D: ${r.D}</div>
        <div class="score-item"><span class="dot" style="background:#f59e0b;"></span> I: ${r.I}</div>
        <div class="score-item"><span class="dot" style="background:#22c55e;"></span> S: ${r.S}</div>
        <div class="score-item"><span class="dot" style="background:#3b82f6;"></span> C: ${r.C}</div>
    `;
}

// Reset
function resetQuiz() {
    if (confirm('Làm lại?')) {
        document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
        document.getElementById('resultArea').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
        document.getElementById('submitStatus').innerHTML = '';
        updateProgress();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ===== KHỞI TẠO =====
document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();
    updateProgress();

    document.getElementById('startQuizBtn').addEventListener('click', () => {
        const name = document.getElementById('userName').value.trim();
        if (!name) { showToast('⚠️ Vui lòng nhập họ tên', 'error'); return; }
        currentUser = name;
        document.getElementById('nameForm').style.display = 'none';
        document.getElementById('quizSection').style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('userName').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('startQuizBtn').click();
    });

    document.getElementById('calculateBtn').addEventListener('click', async () => {
        const result = calculateScores();
        if (!result) return;
        currentResult = result;
        displayResult(result);
        await submitResult(result);
    });

    document.getElementById('resetBtn').addEventListener('click', resetQuiz);
});