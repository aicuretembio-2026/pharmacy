/* ===========================
   카메라 모듈 v3.0 (완전 재작성)
   2026-01-23 - 초간단 버전
   =========================== */

console.log('📷 [v3.0] 카메라 모듈 로드');

let stream = null;

// 카메라 초기화
async function initCamera() {
    console.log('📷 카메라 초기화 시작');
    
    // 🆕 [v3.5.0] 인터넷 연결 필수 체크
    if (window.onlineChecker) {
        const canStart = await window.onlineChecker.canStartDiagnosis();
        if (!canStart) {
            console.log('❌ 오프라인 상태로 AI 진단 불가');
            return;
        }
    }
    
    const video = document.getElementById('video');
    if (!video) {
        console.error('비디오 요소 없음');
        return;
    }
    
    // 🆕 [v3.3.5] 카메라 권한 요청 안내 메시지
    const t = window.t || ((key) => key);
    const confirmMessage = t('camera_permission_request') || '카메라 접근 권한이 필요합니다.\n\n다음 단계에서 "허용"을 눌러주세요.';
    
    // 사용자에게 안내
    if (!confirm(confirmMessage)) {
        console.log('❌ 사용자가 카메라 권한 요청을 취소함');
        return;
    }
    
    try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
            video: { 
                facingMode: 'user',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        });
        
        stream = mediaStream;
        video.srcObject = stream;
        video.play();
        console.log('✅ 카메라 시작 성공');
    } catch (error) {
        console.error('❌ 카메라 오류:', error);
        alert(window.t ? window.t('alert_camera_error') : '카메라 접근 권한이 필요합니다.');
    }
}

// 카메라 중지
function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
        console.log('✅ 카메라 중지');
    }
}

// 사진 촬영
function capturePhoto() {
    console.log('📸 사진 촬영 시작');
    
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    
    if (!video || !canvas) {
        console.error('비디오/캔버스 요소 없음');
        return;
    }
    
    // 캔버스에 그리기
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    // 이미지 데이터 저장 (품질 0.7로 압축하여 용량 절감)
    window.capturedImage = canvas.toDataURL('image/jpeg', 0.7);
    console.log('✅ 이미지 저장 완료:', window.capturedImage.length, 'bytes');
    
    // UI 업데이트
    document.getElementById('video').style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('capture-btn-container').style.display = 'none';
    document.getElementById('capture-result').style.display = 'block';
    
    // 카메라 중지
    stopCamera();
    
    console.log('✅ 촬영 완료');
}

// 다시 촬영
function retakePhoto() {
    console.log('🔄 다시 촬영');
    
    window.capturedImage = null;
    
    document.getElementById('video').style.display = 'block';
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('capture-btn-container').style.display = 'block';
    document.getElementById('capture-result').style.display = 'none';
    
    initCamera();
}

// 페이지 언로드 시 카메라 정리
window.addEventListener('beforeunload', stopCamera);

console.log('✅ [v3.0] 카메라 모듈 로드 완료');
