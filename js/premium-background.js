// 프리미엄 배경 이미지 관리
const premiumBackgrounds = {
    'home': '../images/premium/3-iphone-analysis.jpg',
    'capture': '../images/premium/face-grid.jpg',
    'analysis': '../images/premium/hologram-ui.jpg',
    'result': '../images/premium/result-display.jpg'
};

// 페이지 전환 시 배경 이미지 변경
function updatePremiumBackground(pageName) {
    const backgroundElement = document.querySelector('.premium-background-image');
    if (backgroundElement && premiumBackgrounds[pageName]) {
        // 페이드 아웃
        backgroundElement.style.opacity = '0';
        
        // 배경 이미지 변경
        setTimeout(() => {
            backgroundElement.style.backgroundImage = `url(${premiumBackgrounds[pageName]})`;
            // 페이드 인
            setTimeout(() => {
                backgroundElement.style.opacity = '1';
            }, 50);
        }, 300);
    }
}

// 기존 navigateTo 함수 확장
const originalNavigateTo = window.navigateTo;
window.navigateTo = function(pageName) {
    // 기존 페이지 전환 로직 실행
    if (typeof originalNavigateTo === 'function') {
        originalNavigateTo(pageName);
    }
    
    // 배경 이미지 업데이트
    updatePremiumBackground(pageName);
};

// 페이지 로드 시 초기 배경 설정
document.addEventListener('DOMContentLoaded', function() {
    // 현재 활성 페이지 확인
    const activePage = document.querySelector('.page.active');
    if (activePage) {
        const pageName = activePage.id.replace('page-', '');
        updatePremiumBackground(pageName);
    }
});
