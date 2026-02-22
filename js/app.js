// ===========================
// 메인 애플리케이션 로직
// ===========================

// 전역 변수 (window 객체에 명시적으로 할당)
let currentPage = 'home';
window.capturedImage = null;  // 전역으로 명시적 선언
let analysisData = null;

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    loadHistoryData();
    setupEventListeners();
});

// 앱 초기화
function initializeApp() {
    console.log('큐어템바이오 앱 시작');
    
    // 🆕 [v3.3.3] 첫 방문 팝업 제거 - 사용자 요청
    // const firstVisit = !localStorage.getItem('visited');
    // if (firstVisit) {
    //     localStorage.setItem('visited', 'true');
    //     showWelcomeMessage();
    // }
}

// 환영 메시지
function showWelcomeMessage() {
    alert(window.t ? window.t('alert_welcome') : '🎉 큐어템바이오에 오신 것을 환영합니다!\n\nAI 기반 피부 진단 시스템으로 당신의 피부를 케어하세요.');
}

// 페이지 네비게이션
function navigateTo(pageName) {
    console.log('🚀 navigateTo:', pageName);
    
    // 모든 페이지 숨기기
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 선택된 페이지 표시
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // 네비게이션 아이템 활성화
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeNavItem = Array.from(document.querySelectorAll('.nav-item')).find(item => {
            return item.getAttribute('onclick')?.includes(pageName);
        });
        
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
        
        // 페이지별 초기화
        if (pageName === 'capture') {
            initCamera();
        } else if (pageName === 'history') {
            loadHistoryData();
        } else if (pageName === 'survey') {
            checkSurveyStatus();
        }
        
        // 스크롤을 맨 위로
        window.scrollTo(0, 0);
    }
}

// 설문조사 상태 확인
function checkSurveyStatus() {
    const surveyData = localStorage.getItem('surveyData');
    const surveyForm = document.getElementById('survey-form');
    const surveyNotice = document.getElementById('survey-completed-notice');
    
    if (surveyData) {
        // 설문조사 완료됨
        console.log('✅ 설문조사 데이터 있음');
        surveyForm.style.display = 'none';
        surveyNotice.style.display = 'block';
        
        // 설문 요약 표시
        displaySurveySummary(JSON.parse(surveyData));
    } else {
        // 설문조사 미완료
        console.log('❌ 설문조사 데이터 없음');
        surveyForm.style.display = 'block';
        surveyNotice.style.display = 'none';
    }
}

// 설문 요약 표시
function displaySurveySummary(data) {
    const summaryContent = document.getElementById('survey-summary-content');
    
    const labels = {
        gender: '성별',
        age: '연령대',
        country: '거주 국가',
        climate: '기후',
        season: '계절',
        skinType: '피부 타입',
        mainConcern: '주요 고민',
        sunExposure: '자외선 노출',
        sleep: '수면 시간',
        skincare: '스킨케어 루틴'
    };
    
    let html = '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">';
    
    for (const [key, value] of Object.entries(data)) {
        if (labels[key]) {
            html += `
                <div style="padding: 8px; background: rgba(220, 20, 60, 0.1); border-radius: 8px;">
                    <strong style="color: var(--red-primary);">${labels[key]}:</strong>
                    <span style="color: var(--white-primary);">${value}</span>
                </div>
            `;
        }
    }
    
    html += '</div>';
    summaryContent.innerHTML = html;
}

// 설문 다시 작성
function editSurvey() {
    console.log('📝 설문 다시 작성');
    
    const surveyForm = document.getElementById('survey-form');
    const surveyNotice = document.getElementById('survey-completed-notice');
    
    // 기존 데이터 불러오기
    const surveyData = localStorage.getItem('surveyData');
    if (surveyData) {
        const data = JSON.parse(surveyData);
        
        // 폼에 기존 값 채우기
        for (const [key, value] of Object.entries(data)) {
            const input = surveyForm.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = value;
            }
        }
    }
    
    // UI 전환
    surveyNotice.style.display = 'none';
    surveyForm.style.display = 'block';
    
    // 스크롤을 폼으로
    surveyForm.scrollIntoView({ behavior: 'smooth' });
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 설문조사 제출
    const surveyForm = document.getElementById('survey-form');
    if (surveyForm) {
        surveyForm.addEventListener('submit', handleSurveySubmit);
    }
    
    // 상담 요청 제출
    const consultForm = document.getElementById('consult-form');
    if (consultForm) {
        consultForm.addEventListener('submit', handleConsultSubmit);
    }
    
    // 챗봇 입력
    const chatInput = document.getElementById('chatbot-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendChatMessage();
            }
        });
    }
}

// 설문조사 제출 처리
function handleSurveySubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const surveyData = {};
    
    formData.forEach((value, key) => {
        surveyData[key] = value;
    });
    
    // LocalStorage에 저장
    localStorage.setItem('surveyData', JSON.stringify(surveyData));
    localStorage.setItem('surveyDate', new Date().toISOString());
    
    // 폼 숨기고 완료 메시지 표시
    document.getElementById('survey-form').style.display = 'none';
    document.getElementById('survey-result').style.display = 'block';
    
    // 2초 후 촬영 페이지로 자동 이동
    setTimeout(() => {
        document.getElementById('survey-form').style.display = 'block';
        document.getElementById('survey-result').style.display = 'none';
        navigateTo('capture'); // 촬영 페이지로 바로 이동
    }, 2000);
}

// 상담 요청 제출 처리 (🆕 v3.3.6 Web3Forms 연동)
async function handleConsultSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const t = window.t || ((key) => key);
    
    // 버튼 비활성화 및 로딩 표시
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span data-i18n="sending">' + t('sending') + '</span>';
    submitBtn.disabled = true;
    
    try {
        // Web3Forms API로 전송
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
            console.log('✅ [v3.3.6] 이메일 전송 성공!');
            
            // 로컬 저장 (백업)
            const consultData = {
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            };
            
            const consultHistory = JSON.parse(localStorage.getItem('consultHistory') || '[]');
            consultHistory.push({
                ...consultData,
                date: new Date().toISOString(),
                status: 'sent'
            });
            localStorage.setItem('consultHistory', JSON.stringify(consultHistory));
            
            // 폼 숨기고 완료 메시지 표시
            form.style.display = 'none';
            document.getElementById('consult-result').style.display = 'block';
            
            // 폼 초기화
            form.reset();
            
            // 5초 후 폼 다시 표시
            setTimeout(() => {
                form.style.display = 'block';
                document.getElementById('consult-result').style.display = 'none';
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
            }, 5000);
            
        } else {
            throw new Error(data.message || 'Unknown error');
        }
        
    } catch (error) {
        console.error('❌ [v3.3.6] 이메일 전송 실패:', error);
        alert(t('email_send_error') || '이메일 전송에 실패했습니다. 다시 시도해주세요.');
        
        // 버튼 복원
        submitBtn.innerHTML = originalHTML;
        submitBtn.disabled = false;
    }
}

// 기록 데이터 로드
function loadHistoryData() {
    console.log('📂 [History] 기록 로드 시작...');
    
    const history = JSON.parse(localStorage.getItem('skinHistory') || '[]');
    const historyGallery = document.getElementById('history-gallery');
    const historyCount = document.getElementById('history-count');
    
    console.log('📊 [History] 로드된 기록 개수:', history.length);
    
    if (!historyGallery) {
        console.error('❌ [History] history-gallery 요소를 찾을 수 없습니다');
        return;
    }
    
    historyCount.textContent = history.length;
    
    if (history.length === 0) {
        console.log('ℹ️ [History] 기록이 없습니다');
        const t = window.t || ((key) => key);
        historyGallery.innerHTML = `<p class="text-center text-white" style="grid-column: 1/-1; padding: 40px;">${t('history_no_records')}<br>${t('history_start_first')} 📸</p>`;
        return;
    }
    
    // 최신 순으로 정렬
    history.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    console.log('✅ [History] 기록 표시 완료:', history.map(h => new Date(h.date).toLocaleString('ko-KR')));
    
    historyGallery.innerHTML = history.map((item, index) => {
        const date = new Date(item.date);
        const dateStr = `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        
        return `
            <div class="gallery-item" onclick="viewAnalysis(${index})">
                <img src="${item.image}" alt="피부 사진">
                <div class="gallery-item-date">${dateStr}</div>
            </div>
        `;
    }).join('');
    
    // 비교 기능 (2개 이상일 때)
    if (history.length >= 2) {
        document.getElementById('comparison-section').style.display = 'block';
        document.getElementById('compare-img-1').src = history[history.length - 1].image;
        document.getElementById('compare-img-2').src = history[0].image;
    }
}

// 분석 결과 보기
function viewAnalysis(index) {
    const history = JSON.parse(localStorage.getItem('skinHistory') || '[]');
    history.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const item = history[index];
    if (!item) return;
    
    // 분석 페이지로 이동하여 해당 데이터 표시
    displayAnalysisResult(item.image, item.analysis);
    navigateTo('analysis');
}

// 기록 전체 삭제
function clearHistory() {
    if (confirm(window.t ? window.t('alert_delete_confirm') : '모든 촬영 기록을 삭제하시겠습니까?\n이 작업은 되돌릴 수 없습니다.')) {
        localStorage.removeItem('skinHistory');
        loadHistoryData();
        alert(window.t ? window.t('alert_deleted') : '✅ 모든 기록이 삭제되었습니다.');
    }
}

// 모든 데이터 삭제
function clearAllData() {
    if (confirm(window.t ? window.t('alert_clear_all_data') : '⚠️ 모든 데이터를 삭제하시겠습니까?\n\n삭제 항목:\n- 촬영 기록\n- 분석 결과\n- 설문조사 답변\n- 상담 기록\n\n이 작업은 되돌릴 수 없습니다!')) {
        localStorage.clear();
        alert(window.t ? window.t('alert_all_data_cleared') : '✅ 모든 데이터가 삭제되었습니다.');
        location.reload();
    }
}

// 챗봇 토글
function toggleChatbot() {
    const container = document.getElementById('chatbot-container');
    container.classList.toggle('active');
}

// 챗봇 버튼 클릭
document.getElementById('chatbot-toggle')?.addEventListener('click', toggleChatbot);

// 유틸리티: 날짜 포맷
function formatDate(date) {
    const d = new Date(date);
    return `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일 ${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// 유틸리티: 점수 색상
function getScoreColor(score) {
    if (score >= 80) return '#7ED321'; // 초록
    if (score >= 60) return '#F5A623'; // 주황
    return '#DC143C'; // 빨강
}

// 유틸리티: 피부 고민 설명
function getConcernDescription(concernType) {
    const descriptions = {
        'moisture': '수분 부족',
        'wrinkles': '주름',
        'elasticity': '탄력 저하',
        'pores': '모공',
        'pigmentation': '색소 침착',
        'redness': '홍조',
        'acne': '여드름',
        'oiliness': '피지 과다',
        'texture': '피부결',
        'sensitivity': '민감성'
    };
    return descriptions[concernType] || '피부 개선';
}

// 페이지 가시성 변경 감지
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 페이지가 숨겨졌을 때 카메라 정지
        if (currentPage === 'capture') {
            stopCamera();
        }
    }
});

console.log('✅ 앱 초기화 완료');
