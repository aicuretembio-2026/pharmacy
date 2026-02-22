/**
 * 온라인 상태 체크 시스템
 * 인터넷 연결이 필수인 AI 진단 시스템을 위한 온라인 상태 검증
 * 
 * 주요 기능:
 * 1. 앱 로딩 시 온라인 상태 확인
 * 2. AI 진단 시작 전 필수 체크
 * 3. 실시간 온라인/오프라인 상태 모니터링
 * 4. 다국어 안내 메시지 지원 (ko/en/ja)
 * 
 * @version 3.5.0
 * @date 2026-01-25
 */

class OnlineChecker {
    constructor() {
        this.isOnline = navigator.onLine;
        this.checkInterval = null;
        this.listeners = [];
        
        // 이벤트 리스너 등록
        window.addEventListener('online', () => this.handleOnline());
        window.addEventListener('offline', () => this.handleOffline());
        
        // 초기 상태 로깅
        console.log(`[OnlineChecker] 초기 상태: ${this.isOnline ? '온라인' : '오프라인'}`);
    }
    
    /**
     * 온라인 상태로 전환
     */
    handleOnline() {
        console.log('[OnlineChecker] 온라인 연결됨');
        this.isOnline = true;
        this.notifyListeners(true);
        this.hideOfflineWarning();
    }
    
    /**
     * 오프라인 상태로 전환
     */
    handleOffline() {
        console.log('[OnlineChecker] 오프라인 전환됨');
        this.isOnline = false;
        this.notifyListeners(false);
        this.showOfflineWarning();
    }
    
    /**
     * 온라인 상태 확인 (실제 네트워크 요청)
     * navigator.onLine은 신뢰도가 낮으므로 실제 요청으로 재확인
     */
    async checkOnlineStatus() {
        try {
            // HEAD 요청으로 빠르게 확인 (캐시 방지)
            const response = await fetch('https://www.google.com/favicon.ico', {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-cache'
            });
            
            this.isOnline = true;
            console.log('[OnlineChecker] 실제 온라인 확인: 성공');
            return true;
        } catch (error) {
            this.isOnline = false;
            console.log('[OnlineChecker] 실제 온라인 확인: 실패', error.message);
            return false;
        }
    }
    
    /**
     * AI 진단 시작 가능 여부 확인
     * @returns {Promise<boolean>} 온라인 상태 여부
     */
    async canStartDiagnosis() {
        // 1. navigator.onLine 1차 체크
        if (!navigator.onLine) {
            console.log('[OnlineChecker] AI 진단 불가: 오프라인 상태');
            this.showDiagnosisBlockedAlert();
            return false;
        }
        
        // 2. 실제 네트워크 요청으로 2차 확인
        const isOnline = await this.checkOnlineStatus();
        if (!isOnline) {
            console.log('[OnlineChecker] AI 진단 불가: 네트워크 연결 실패');
            this.showDiagnosisBlockedAlert();
            return false;
        }
        
        console.log('[OnlineChecker] AI 진단 가능: 온라인 확인 완료');
        return true;
    }
    
    /**
     * 오프라인 경고 표시
     */
    showOfflineWarning() {
        // 기존 경고 제거
        this.hideOfflineWarning();
        
        // 다국어 메시지
        const messages = {
            ko: '⚠️ 인터넷 연결이 끊겼습니다. AI 진단을 사용하려면 인터넷 연결이 필요합니다.',
            en: '⚠️ Internet connection lost. Internet connection is required to use AI diagnosis.',
            ja: '⚠️ インターネット接続が切断されました。AI診断を使用するにはインターネット接続が必要です。',
            'zh-CN': '⚠️ 网络连接已断开。使用AI诊断需要网络连接。',
            'zh-TW': '⚠️ 網路連接已中斷。使用AI診斷需要網路連接。'
        };
        
        const lang = localStorage.getItem('preferredLanguage') || 'ko';
        const message = messages[lang] || messages.ko;
        
        // 경고 배너 생성
        const banner = document.createElement('div');
        banner.id = 'offline-warning-banner';
        banner.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
            color: white;
            text-align: center;
            padding: 12px 20px;
            font-weight: 600;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            animation: slideDown 0.3s ease-out;
        `;
        banner.textContent = message;
        
        document.body.prepend(banner);
        
        // 애니메이션 추가
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from { transform: translateY(-100%); }
                to { transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    /**
     * 오프라인 경고 숨김
     */
    hideOfflineWarning() {
        const banner = document.getElementById('offline-warning-banner');
        if (banner) {
            banner.style.animation = 'slideUp 0.3s ease-out';
            setTimeout(() => banner.remove(), 300);
        }
    }
    
    /**
     * AI 진단 차단 알림 표시
     */
    showDiagnosisBlockedAlert() {
        const messages = {
            ko: {
                title: '인터넷 연결 필요',
                message: 'AI 피부 진단은 딥러닝 기반 분석으로 인터넷 연결이 필수입니다.\n\n인터넷에 연결한 후 다시 시도해 주세요.',
                button: '확인'
            },
            en: {
                title: 'Internet Required',
                message: 'AI skin diagnosis requires an internet connection for deep learning-based analysis.\n\nPlease connect to the internet and try again.',
                button: 'OK'
            },
            ja: {
                title: 'インターネット接続が必要',
                message: 'AI肌診断はディープラーニングベースの分析のため、インターネット接続が必須です。\n\nインターネットに接続してから再度お試しください。',
                button: '確認'
            },
            'zh-CN': {
                title: '需要网络连接',
                message: 'AI皮肤诊断基于深度学习分析，必须连接到互联网。\n\n请连接到互联网后重试。',
                button: '确认'
            },
            'zh-TW': {
                title: '需要網路連接',
                message: 'AI皮膚診斷基於深度學習分析，必須連接到網際網路。\n\n請連接到網際網路後重試。',
                button: '確認'
            }
        };
        
        const lang = localStorage.getItem('preferredLanguage') || 'ko';
        const msg = messages[lang] || messages.ko;
        
        // 커스텀 모달 생성
        const modal = document.createElement('div');
        modal.id = 'offline-diagnosis-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            animation: fadeIn 0.2s ease-out;
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 20px;
                padding: 30px;
                max-width: 400px;
                width: 90%;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                animation: scaleIn 0.3s ease-out;
            ">
                <div style="
                    font-size: 48px;
                    text-align: center;
                    margin-bottom: 20px;
                ">📡</div>
                <h3 style="
                    font-size: 22px;
                    font-weight: bold;
                    text-align: center;
                    margin-bottom: 15px;
                    color: #2c3e50;
                ">${msg.title}</h3>
                <p style="
                    font-size: 15px;
                    line-height: 1.6;
                    text-align: center;
                    color: #555;
                    white-space: pre-line;
                    margin-bottom: 25px;
                ">${msg.message}</p>
                <button id="offline-modal-close" style="
                    width: 100%;
                    padding: 14px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: transform 0.2s;
                ">${msg.button}</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 애니메이션 추가
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes scaleIn {
                from { transform: scale(0.9); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            #offline-modal-close:hover {
                transform: scale(1.05);
            }
        `;
        document.head.appendChild(style);
        
        // 닫기 버튼
        document.getElementById('offline-modal-close').addEventListener('click', () => {
            modal.style.animation = 'fadeOut 0.2s ease-out';
            setTimeout(() => modal.remove(), 200);
        });
        
        // 배경 클릭으로 닫기
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.animation = 'fadeOut 0.2s ease-out';
                setTimeout(() => modal.remove(), 200);
            }
        });
    }
    
    /**
     * 상태 변경 리스너 등록
     */
    addListener(callback) {
        this.listeners.push(callback);
    }
    
    /**
     * 리스너에게 상태 변경 알림
     */
    notifyListeners(isOnline) {
        this.listeners.forEach(callback => callback(isOnline));
    }
    
    /**
     * 주기적 온라인 체크 시작 (선택 사항)
     */
    startPeriodicCheck(intervalMs = 30000) {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
        }
        
        this.checkInterval = setInterval(async () => {
            await this.checkOnlineStatus();
        }, intervalMs);
        
        console.log(`[OnlineChecker] 주기적 체크 시작: ${intervalMs}ms`);
    }
    
    /**
     * 주기적 체크 중지
     */
    stopPeriodicCheck() {
        if (this.checkInterval) {
            clearInterval(this.checkInterval);
            this.checkInterval = null;
            console.log('[OnlineChecker] 주기적 체크 중지');
        }
    }
}

// 전역 인스턴스 생성
window.onlineChecker = new OnlineChecker();

// 초기 로딩 시 온라인 상태 확인
window.addEventListener('DOMContentLoaded', async () => {
    console.log('[OnlineChecker] 초기 온라인 상태 확인 시작');
    const isOnline = await window.onlineChecker.checkOnlineStatus();
    
    if (!isOnline) {
        window.onlineChecker.showOfflineWarning();
    }
});

console.log('[OnlineChecker] 모듈 로드 완료 ✓');
