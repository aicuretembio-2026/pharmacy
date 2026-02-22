/**
 * 기존 기록 초기화 스크립트
 * v3.5.1: 번역 키 저장 방식 변경으로 기존 기록 호환성 해결
 * 
 * 이 스크립트는 한 번만 실행되며, 기존 기록을 초기화합니다.
 * 향후 새로 생성되는 기록은 번역 키(key)만 저장하여 다국어 지원이 완벽하게 작동합니다.
 */

(function() {
    const CLEAR_FLAG = 'history_cleared_v3.5.1';
    
    // 이미 초기화했는지 확인
    if (localStorage.getItem(CLEAR_FLAG)) {
        console.log('[ClearHistory] 이미 기록이 초기화되었습니다.');
        return;
    }
    
    try {
        // 기존 기록 확인
        const history = JSON.parse(localStorage.getItem('skinHistory') || '[]');
        
        if (history.length > 0) {
            console.log(`[ClearHistory] 기존 기록 ${history.length}개 발견`);
            
            // 기존 기록 삭제
            localStorage.removeItem('skinHistory');
            console.log('[ClearHistory] ✅ 기존 기록 삭제 완료');
            
            // 초기화 플래그 설정
            localStorage.setItem(CLEAR_FLAG, 'true');
            
            // 사용자에게 안내 (다국어 지원)
            const t = window.t || ((key) => key);
            const messages = {
                ko: '🔄 시스템 업데이트\n\n다국어 지원 개선을 위해 기존 촬영 기록이 초기화되었습니다.\n\n새로운 촬영부터는 모든 언어에서 정상적으로 표시됩니다. ✨',
                en: '🔄 System Update\n\nPrevious records have been cleared to improve multilingual support.\n\nNew captures will be displayed correctly in all languages. ✨',
                ja: '🔄 システムアップデート\n\n多言語サポートの改善のため、既存の撮影記録が初期化されました。\n\n新しい撮影から、すべての言語で正常に表示されます。✨'
            };
            
            const lang = localStorage.getItem('preferredLanguage') || 'ko';
            const message = messages[lang] || messages.ko;
            
            // 알림 표시 (페이지 로딩 후)
            window.addEventListener('load', () => {
                setTimeout(() => {
                    alert(message);
                }, 500);
            });
        } else {
            console.log('[ClearHistory] 기존 기록 없음');
            // 초기화 플래그 설정
            localStorage.setItem(CLEAR_FLAG, 'true');
        }
    } catch (error) {
        console.error('[ClearHistory] 오류:', error);
    }
})();

console.log('[ClearHistory] 모듈 로드 완료 ✓');
