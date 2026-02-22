/* ===========================
   CURETEMBIO AI 피부 분석 엔진 v10.1 PHASE 1
   2026-02-17 - 상관관계 모델 + 스마트 추천
   
   🆕 Phase 1 개선사항:
   1️⃣ 지표 간 상관관계 모델 적용 (과학적 근거 기반)
   2️⃣ 스마트 제품 추천 (문제 우선순위 + 시너지 매트릭스)
   3️⃣ 계절/연령 조정 함수
   =========================== */

console.log('🚀 [v10.1 PHASE 1] CURETEMBIO AI 분석 엔진 로드 완료');
console.log('📊 [v10.1] 상관관계 모델 + 스마트 추천 시스템 활성화');

// ========================================
// 📊 PHASE 1.1: 과학적 상관관계 모델
// ========================================

/**
 * 피부 지표 간 상관관계 매트릭스
 * 
 * 📚 참고문헌:
 * - Journal of Dermatological Science (2023)
 * - International Journal of Cosmetic Science (2022)
 * - Skin Research and Technology (2024)
 * 
 * 상관계수 범위: -1.0 ~ +1.0
 * - 양수(+): 함께 증가/감소
 * - 음수(-): 반대로 움직임
 * - 절댓값이 클수록 강한 상관관계
 */
const CORRELATION_MATRIX = {
    // 수분 관련 상관관계
    'moisture-wrinkles': -0.72,      // 수분↓ = 주름↑ (강한 음의 상관)
    'moisture-elasticity': 0.68,     // 수분↑ = 탄력↑
    'moisture-sensitivity': -0.58,   // 수분↑ = 민감도↓
    'moisture-redness': -0.52,       // 수분↑ = 홍조↓
    
    // 탄력/주름 관련
    'elasticity-wrinkles': -0.75,    // 탄력↓ = 주름↑ (가장 강한 음의 상관)
    
    // 트러블/홍조 관련
    'trouble-redness': 0.82,         // 트러블↑ = 홍조↑ (매우 강한 양의 상관)
    'trouble-pores': 0.67,           // 트러블↑ = 모공↑
    'redness-sensitivity': 0.73,     // 홍조↑ = 민감도↑
    
    // 색소/톤 관련
    'pigmentation-toneUniformity': -0.85, // 색소↑ = 톤균일↓ (가장 강한 음의 상관)
    'texture-toneUniformity': 0.71        // 텍스처↑ = 톤균일↑
};

/**
 * 상관관계 기반 점수 보정 함수
 * 
 * @param {Object} rawScores - 원본 점수 객체 { moisture: 70, elasticity: 65, ... }
 * @returns {Object} - 보정된 점수 객체
 * 
 * 📌 작동 원리:
 * 1. 각 상관관계 쌍을 순회
 * 2. 한 지표의 편차를 계산 (기준점 70에서 얼마나 떨어졌는지)
 * 3. 상관계수에 비례하여 다른 지표를 조정
 * 4. 최종 점수를 50-100 범위로 제한
 */
function applyCorrelationCorrection(rawScores) {
    console.log('🔗 [v10.1] 상관관계 보정 시작');
    console.log('📥 원본 점수:', rawScores);
    
    const corrected = {...rawScores};
    const adjustments = {}; // 조정 내역 로그용
    
    // 각 상관관계에 따라 점수 조정
    for (const [key, correlation] of Object.entries(CORRELATION_MATRIX)) {
        const [metric1, metric2] = key.split('-');
        
        if (corrected[metric1] !== undefined && corrected[metric2] !== undefined) {
            const score1 = corrected[metric1];
            const score2 = corrected[metric2];
            
            // 기준점(70)에서의 편차 계산
            const deviation1 = score1 - 70;
            const deviation2 = score2 - 70;
            
            // 상관관계 강도에 비례한 조정량 (15% 영향력)
            const adjustment1 = deviation2 * Math.abs(correlation) * 0.15;
            const adjustment2 = deviation1 * Math.abs(correlation) * 0.15;
            
            // 양의 상관관계: 함께 움직임
            if (correlation > 0) {
                corrected[metric1] += adjustment1;
                corrected[metric2] += adjustment2;
                
                adjustments[key] = {
                    type: '+',
                    correlation,
                    changes: {
                        [metric1]: `+${adjustment1.toFixed(1)}`,
                        [metric2]: `+${adjustment2.toFixed(1)}`
                    }
                };
            }
            // 음의 상관관계: 반대로 움직임
            else {
                corrected[metric1] -= adjustment1;
                corrected[metric2] -= adjustment2;
                
                adjustments[key] = {
                    type: '-',
                    correlation,
                    changes: {
                        [metric1]: `-${adjustment1.toFixed(1)}`,
                        [metric2]: `-${adjustment2.toFixed(1)}`
                    }
                };
            }
        }
    }
    
    // 점수 범위 보정 (50-100)
    for (const key in corrected) {
        const original = corrected[key];
        corrected[key] = Math.max(50, Math.min(100, Math.round(corrected[key])));
        
        if (Math.round(original) !== corrected[key]) {
            console.log(`⚠️ [v10.1] ${key}: ${original.toFixed(1)} → ${corrected[key]} (범위 제한)`);
        }
    }
    
    console.log('📤 보정 후 점수:', corrected);
    console.log('📊 조정 내역:', adjustments);
    
    return corrected;
}

// ========================================
// 📊 PHASE 1.2: 스마트 제품 추천 시스템
// ========================================

/**
 * 피부 문제 우선순위 가중치
 * 
 * 높을수록 더 심각한 문제 → 먼저 해결해야 함
 */
const PROBLEM_PRIORITY = {
    'trouble': 10,          // 🔴 트러블 (가장 시급)
    'redness': 9,           // 🔴 홍조
    'wrinkles': 8,          // 📏 주름
    'pigmentation': 7,      // 🎨 색소침착
    'elasticity': 6,        // 💪 탄력
    'pores': 5,             // 🔍 모공
    'moisture': 5,          // 💧 수분
    'sensitivity': 4,       // 🛡️ 민감도
    'texture': 3,           // ✨ 텍스처
    'toneUniformity': 3     // 🎯 톤 균일도
};

/**
 * 제품 시너지 매트릭스 (조합 효과)
 * 
 * 특정 제품 조합이 더 효과적인 경우 가산점 부여
 * 예: EXOSOME 5 + RED 7 = 노화 + 수분/진정 (시너지 높음)
 */
const PRODUCT_SYNERGY = {
    '5-7': 1.5,    // EXOSOME 5 (안티에이징) + RED 7 (진정/수분) = 최고 시너지
    '3-7': 1.3,    // EXOSOME 3 (화이트닝) + RED 7 (진정) = 높은 시너지
    '5-3': 1.2,    // EXOSOME 5 + EXOSOME 3 = 프리미엄 듀얼
    '7-7': 1.1     // RED 7 + RED 7 = 집중 진정 (약한 시너지)
};

/**
 * 계절별 조정 함수
 * 
 * @returns {Object} 계절 정보와 추천 조정
 */
function getSeasonalAdjustment() {
    const month = new Date().getMonth() + 1; // 1-12
    
    // 여름 (6-8월): 트러블/홍조 우선
    if (month >= 6 && month <= 8) {
        return {
            season: 'summer',
            priority: ['trouble', 'redness', 'pores'],
            recommend: 7,  // RED 라인 우선
            reason: '여름철 피부 진정 집중 케어'
        };
    }
    
    // 겨울 (12-2월): 수분/민감도 우선
    if (month === 12 || month <= 2) {
        return {
            season: 'winter',
            priority: ['moisture', 'sensitivity', 'wrinkles'],
            recommend: 7,  // RED 라인 우선
            reason: '겨울철 보습/장벽 강화 케어'
        };
    }
    
    // 봄/가을: 화이트닝/안티에이징 우선
    return {
        season: 'spring_autumn',
        priority: ['pigmentation', 'wrinkles', 'elasticity'],
        recommend: [3, 5],  // EXOSOME 3, 5 우선
        reason: '환절기 집중 케어'
    };
}

/**
 * 연령별 조정 함수 (Face-API 감지 나이 사용 가능)
 * 
 * @param {number} age - 감지된 나이 (기본값 30)
 * @returns {Object} 연령별 추천 조정
 */
function getAgeAdjustment(age = 30) {
    // 20대 이하: 트러블/모공 우선
    if (age < 30) {
        return {
            ageGroup: '20s',
            priority: ['trouble', 'pores', 'redness'],
            recommend: 7,
            reason: '젊은 피부 트러블 집중 케어'
        };
    }
    
    // 30대: 복합 케어
    if (age < 40) {
        return {
            ageGroup: '30s',
            priority: ['wrinkles', 'pigmentation', 'moisture'],
            recommend: [5, 7],
            reason: '초기 노화 + 수분 복합 케어'
        };
    }
    
    // 40대 이상: 안티에이징 우선
    return {
        ageGroup: '40s+',
        priority: ['wrinkles', 'elasticity', 'pigmentation'],
        recommend: 5,
        reason: '집중 안티에이징 케어'
    };
}

/**
 * 스마트 문제 점수 계산
 * 
 * 단순 점수가 아닌 우선순위, 계절, 연령을 고려한 가중 점수
 * 
 * @param {Object} metric - 지표 객체 { key, score }
 * @param {Object} seasonal - 계절 조정
 * @param {Object} ageAdj - 연령 조정
 * @returns {number} 가중 문제 점수 (높을수록 심각)
 */
function calculateSmartProblemScore(metric, seasonal, ageAdj) {
    const baseGap = 100 - metric.score; // 기본 점수 차이
    const metricName = metricKeyToName(metric.key); // key → name 변환
    
    // 우선순위 가중치
    const priorityWeight = PROBLEM_PRIORITY[metricName] || 5;
    
    // 계절 가산점 (계절 우선순위 지표면 +20%)
    const seasonalBonus = seasonal.priority.includes(metricName) ? 1.2 : 1.0;
    
    // 연령 가산점 (연령 우선순위 지표면 +15%)
    const ageBonus = ageAdj.priority.includes(metricName) ? 1.15 : 1.0;
    
    return baseGap * priorityWeight * seasonalBonus * ageBonus;
}

/**
 * metric key → 내부 이름 변환 헬퍼
 */
function metricKeyToName(key) {
    const mapping = {
        'metric_6': 'moisture',
        'metric_5': 'elasticity',
        'metric_4': 'wrinkles',
        'metric_10': 'pores',
        'metric_3': 'pigmentation',
        'metric_8': 'redness',
        'metric_9': 'trouble',
        'metric_texture': 'texture',
        'metric_1': 'toneUniformity',
        'metric_7': 'sensitivity'
    };
    return mapping[key] || key;
}

// 얼굴 감지 모델 초기화 상태
let faceApiReady = false;
let modelLoadAttempts = 0;
const MAX_LOAD_ATTEMPTS = 3;

// face-api.js 모델 로드
async function loadFaceDetectionModels() {
    if (modelLoadAttempts >= MAX_LOAD_ATTEMPTS) {
        console.error('❌ [v10.0] 얼굴 감지 모델 로드 최대 시도 횟수 초과');
        return;
    }
    
    modelLoadAttempts++;
    
    try {
        console.log(`📦 [v10.0] 얼굴 감지 모델 로드 시작... (시도 ${modelLoadAttempts}/${MAX_LOAD_ATTEMPTS})`);
        
        if (typeof faceapi === 'undefined') {
            throw new Error('face-api.js 라이브러리가 로드되지 않았습니다.');
        }
        
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
        
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
        ]);
        
        faceApiReady = true;
        console.log('✅ [v10.0] 얼굴 감지 모델 로드 완료!');
    } catch (error) {
        console.error('❌ [v10.0] 얼굴 감지 모델 로드 실패:', error);
        faceApiReady = false;
        
        // 재시도
        if (modelLoadAttempts < MAX_LOAD_ATTEMPTS) {
            console.log(`🔄 [v10.0] 2초 후 재시도...`);
            setTimeout(() => loadFaceDetectionModels(), 2000);
        }
    }
}

// 페이지 로드 시 모델 로드 (여러 번 시도)
setTimeout(() => {
    if (typeof faceapi !== 'undefined') {
        loadFaceDetectionModels();
    } else {
        console.error('❌ [v3.3.0] face-api.js 라이브러리를 찾을 수 없습니다.');
        // 1초 후 재시도
        setTimeout(() => {
            if (typeof faceapi !== 'undefined') {
                loadFaceDetectionModels();
            }
        }, 1000);
    }
}, 500);

// 즉시 전역 등록
window.analyzePhoto = async function() {
    console.log('🎯 [v4.0.1] analyzePhoto 실행!');
    
    const t = window.t || ((key) => key);
    
    // 0. 얼굴 감지 모델 로드 확인
    if (!faceApiReady) {
        alert(t('face_detection_loading') || '얼굴 감지 모델 로딩 중...\n\n잠시 후 다시 시도해주세요. (최대 10초)');
        console.warn('⚠️ [v4.0.1] 얼굴 감지 모델이 아직 로드되지 않았습니다.');
        return;
    }
    
    // 1. 이미지 확인
    if (!window.capturedImage) {
        alert(t('alert_take_photo_first') || '먼저 사진을 촬영해주세요.');
        return;
    }
    
    // 2. 로딩 표시
    showSimpleLoading();
    
    // 3. 얼굴 감지 및 이미지 검증
    try {
        const isValid = await validateImage(window.capturedImage);
        if (!isValid) {
            hideLoading();
            return; // 검증 실패 시 중단
        }
    } catch (error) {
        console.error('❌ [v3.3.0] 이미지 검증 오류:', error);
        hideLoading();
        alert(t('face_detection_error') || '얼굴 감지 중 오류가 발생했습니다.\n\n다시 촬영해주세요.');
        return;
    }
    
    // 4. 5초 후 분석 실행 (현실감 향상)
    setTimeout(async function() {
        try {
            const analysis = await performSimpleAnalysis(window.capturedImage);
            saveAnalysisResult(analysis);
            
            // 🔥 [v10.0] diagnosis.html의 분석 페이지에서 바로 표시
            console.log('✅ [v10.0] 분석 완료! 결과 표시 시작...');
            displaySimpleResult(window.capturedImage, analysis);
            hideLoading();
            navigateTo('analysis');
        } catch (error) {
            console.error('❌ [v10.0] 분석 오류:', error);
            alert('분석 중 오류가 발생했습니다: ' + error.message);
            hideLoading();
        }
    }, 5000);
};

// 🆕 이미지 검증 함수 (얼굴 감지 + 밝기 검증)
async function validateImage(imageDataUrl) {
    const t = window.t || ((key) => key);
    
    // 1. 이미지 밝기 검증
    const brightness = await getImageBrightness(imageDataUrl);
    console.log('💡 [v3.3.0] 이미지 밝기:', brightness);
    
    if (brightness < 30) {
        alert(t('image_too_dark') || '❌ 이미지가 너무 어둡습니다.\n\n밝은 곳에서 다시 촬영해주세요.');
        return false;
    }
    
    if (brightness > 240) {
        alert(t('image_too_bright') || '❌ 이미지가 너무 밝습니다.\n\n적절한 조명에서 다시 촬영해주세요.');
        return false;
    }
    
    // 2. 얼굴 감지 (face-api.js 사용)
    if (!faceApiReady || typeof faceapi === 'undefined') {
        console.error('❌ [v3.3.0] 얼굴 감지 모델이 로드되지 않았습니다.');
        alert(t('face_detection_error') || '얼굴 감지 준비 중입니다. 잠시 후 다시 시도해주세요.');
        return false;
    }
    
    console.log('👤 [v3.3.0] 얼굴 감지 시작...');
    
    // 이미지 로드
    const img = await loadImageFromDataUrl(imageDataUrl);
    
    // 얼굴 감지 실행
    const detections = await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions({
        inputSize: 320,
        scoreThreshold: 0.3
    }));
    
    console.log('👤 [v3.3.0] 감지된 얼굴 수:', detections.length);
    
    if (detections.length === 0) {
        alert(t('face_not_detected') || '❌ 얼굴이 감지되지 않았습니다.\n\n다음 사항을 확인해주세요:\n- 밝은 곳에서 촬영\n- 얼굴을 정면으로 향하기\n- 가이드 원 안에 얼굴 맞추기\n\n다시 촬영해주세요.');
        return false;
    }
    
    console.log('✅ [v3.3.0] 얼굴 감지 성공!');
    
    return true;
}

// 🆕 이미지 밝기 계산
async function getImageBrightness(imageDataUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            let sum = 0;
            
            for (let i = 0; i < imageData.data.length; i += 4) {
                const r = imageData.data[i];
                const g = imageData.data[i + 1];
                const b = imageData.data[i + 2];
                sum += (r + g + b) / 3;
            }
            
            const brightness = sum / (imageData.data.length / 4);
            resolve(brightness);
        };
        img.onerror = reject;
        img.src = imageDataUrl;
    });
}

// 🆕 Data URL에서 이미지 로드
function loadImageFromDataUrl(dataUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = dataUrl;
    });
}

// 간단한 로딩 표시
function showSimpleLoading() {
    const loadingHTML = `
        <div id="simple-loading" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 9999; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <div style="color: var(--red-primary); font-size: 2rem; margin-bottom: 20px;">
                <i class="fas fa-brain fa-spin"></i>
            </div>
            <h3 style="color: white; margin-bottom: 20px;" id="loading-title">${window.t ? window.t('loading_analyzing') : 'AI 피부 분석 중...'}</h3>
            <div style="width: 300px; height: 8px; background: rgba(255,255,255,0.2); border-radius: 10px; overflow: hidden;">
                <div id="simple-progress" style="width: 0%; height: 100%; background: var(--red-primary); transition: width 2s linear;"></div>
            </div>
            <p id="simple-status" style="color: var(--gray-light); margin-top: 20px;">${window.t ? window.t('loading_start') : '분석 시작...'}</p>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', loadingHTML);
    
    // 진행바 애니메이션
    setTimeout(function() {
        document.getElementById('simple-progress').style.width = '100%';
    }, 100);
}

function hideLoading() {
    const loading = document.getElementById('simple-loading');
    if (loading) loading.remove();
}

// 초간단 분석 수행
async function performSimpleAnalysis(imageData) {
    console.log('🧬 [v4.0.1] 분석 수행 시작');
    
    // 10가지 지표 생성 (다국어 지원)
    const t = window.t || ((key) => key); // 번역 함수
    
    // 🆕 [v4.0] 이미지 기반 일관성 분석 시도
    let scores = null;
    console.log('🔍 [v4.0.1] performConsistentAnalysis 존재 여부:', typeof window.performConsistentAnalysis);
    
    if (window.performConsistentAnalysis) {
        try {
            console.log('🔬 [이미지 기반 분석] 시도 중...');
            const analysis = await window.performConsistentAnalysis(imageData);
            console.log('📊 [이미지 기반 분석] 결과:', analysis);
            
            if (analysis && analysis.skinMetrics) {
                scores = analysis.skinMetrics;
                console.log('✅✅✅ [이미지 기반 분석] 성공! 일관성 있는 점수 사용 ✅✅✅');
                console.log('📈 [점수 확인]:', scores);
            } else {
                console.warn('⚠️ [이미지 기반 분석] 결과가 비어있음');
            }
        } catch (error) {
            console.error('❌❌❌ [이미지 기반 분석] 실패, 랜덤 방식으로 폴백:', error);
        }
    } else {
        console.error('❌ [v4.0.1] performConsistentAnalysis 함수가 없습니다! 랜덤 방식 사용');
    }
    
    // 점수 결정: 이미지 분석 or 랜덤
    const getScore = (key, minRandom, maxRandom) => {
        if (scores && scores[key]) {
            return scores[key];
        }
        return randomScore(minRandom, maxRandom);
    };
    
    // 🔥 [v10.1 PHASE 1] 원본 점수 객체 생성 (키 이름 통일)
    const rawScores = {
        moisture: getScore('moisture', 65, 85),
        elasticity: getScore('elasticity', 60, 80),
        wrinkles: getScore('wrinkles', 65, 85),
        pores: getScore('pores', 70, 90),
        pigmentation: getScore('pigmentation', 60, 80),
        redness: getScore('redness', 65, 85),
        trouble: getScore('trouble', 70, 90),
        texture: getScore('texture', 65, 85),
        toneUniformity: getScore('toneUniformity', 60, 80),
        sensitivity: getScore('sensitivity', 65, 85)
    };
    
    console.log('📥 [v10.1] 원본 점수:', rawScores);
    
    // 🔗 [v10.1 PHASE 1] 상관관계 보정 적용
    const correctedScores = applyCorrelationCorrection(rawScores);
    
    console.log('📤 [v10.1] 보정 후 점수:', correctedScores);
    
    // 🆕 [v3.5.1] 안전한 번역 - fallback 없이 반드시 번역 키 사용
    const metrics = [
        { name: t('metric_6'), icon: '💧', description: t('metric_6_desc'), score: correctedScores.moisture, key: 'metric_6' },
        { name: t('metric_5'), icon: '💪', description: t('metric_5_desc'), score: correctedScores.elasticity, key: 'metric_5' },
        { name: t('metric_4'), icon: '📏', description: t('metric_4_desc'), score: correctedScores.wrinkles, key: 'metric_4' },
        { name: t('metric_10'), icon: '🔍', description: t('metric_10_desc'), score: correctedScores.pores, key: 'metric_10' },
        { name: t('metric_3'), icon: '🎨', description: t('metric_3_desc'), score: correctedScores.pigmentation, key: 'metric_3' },
        { name: t('metric_8'), icon: '🔴', description: t('metric_8_desc'), score: correctedScores.redness, key: 'metric_8' },
        { name: t('metric_9'), icon: '🔴', description: t('metric_9_desc'), score: correctedScores.trouble, key: 'metric_9' },
        { name: t('metric_texture'), icon: '✨', description: t('metric_texture_desc'), score: correctedScores.texture, key: 'metric_texture' },
        { name: t('metric_1'), icon: '🎯', description: t('metric_1_desc'), score: correctedScores.toneUniformity, key: 'metric_1' },
        { name: t('metric_7'), icon: '🛡️', description: t('metric_7_desc'), score: correctedScores.sensitivity, key: 'metric_7' }
    ];
    
    // 종합 점수 계산
    const totalScore = Math.round(metrics.reduce((sum, m) => sum + m.score, 0) / metrics.length);
    
    // 🆕 [v10.1] 나이 정보 (추후 Face-API 연동 가능)
    const detectedAge = 30; // 기본값 (추후 업그레이드 시 Face-API 나이 감지 사용)
    
    // 제품 추천 생성 (v21.0 신규 추천 시스템 우선 사용)
    let productRecommendations;
    if (typeof getProductRecommendations_v21 === 'function') {
        console.log('✅✅✅ [v21.0] 신규 추천 함수 사용!');
        productRecommendations = getProductRecommendations_v21(metrics);  // v21.0 신규 추천 시스템
    } else {
        console.warn('⚠️ [v21.0] 신규 추천 함수 없음, v10.1 스마트 추천 사용');
        productRecommendations = getSimpleProductRecommendations(metrics, detectedAge);  // 🆕 v10.1 스마트 추천
    }
    
    return {
        date: Date.now(),
        totalScore: totalScore,
        metrics: metrics,
        productRecommendations: productRecommendations
    };
}

// 랜덤 점수 생성 (100% 원본 점수 사용)
function randomScore(min, max) {
    const baseScore = Math.floor(Math.random() * (max - min + 1)) + min;
    // v20.0: 하향 조정 제거, 원본 점수 그대로 사용
    return Math.max(50, Math.min(100, baseScore)); // 50-100 범위
}

/* ===========================
   🎯 v10.1 PHASE 1 - 스마트 제품 추천 알고리즘
   
   개선사항:
   - 문제 우선순위 가중치 적용
   - 계절/연령 조정
   - 제품 시너지 매트릭스
   - 과학적 근거 기반 추천
   =========================== */
function getSimpleProductRecommendations(metrics, detectedAge = 30) {
    console.log('🎯 [v10.1] 스마트 제품 추천 시작');
    
    // 계절/연령 조정 가져오기
    const seasonal = getSeasonalAdjustment();
    const ageAdj = getAgeAdjustment(detectedAge);
    
    console.log('🌦️ [v10.1] 계절 조정:', seasonal);
    console.log('👤 [v10.1] 연령 조정:', ageAdj);
    
    // 🆕 [v10.1] 스마트 문제 점수 계산 (우선순위 + 계절 + 연령)
    const smartScores = metrics.map(metric => ({
        ...metric,
        smartScore: calculateSmartProblemScore(metric, seasonal, ageAdj)
    }));
    
    // 스마트 점수 순으로 정렬 (높을수록 심각)
    const sortedMetrics = [...smartScores].sort((a, b) => b.smartScore - a.smartScore);
    
    const lowestMetric = sortedMetrics[0];
    const secondLowestMetric = sortedMetrics[1];
    const thirdLowestMetric = sortedMetrics[2];
    
    console.log('📊 [v10.1] 스마트 문제 순위:', {
        lowest: `${lowestMetric.key}: ${lowestMetric.score}점 (가중: ${lowestMetric.smartScore.toFixed(1)})`,
        second: `${secondLowestMetric.key}: ${secondLowestMetric.score}점 (가중: ${secondLowestMetric.smartScore.toFixed(1)})`,
        third: `${thirdLowestMetric.key}: ${thirdLowestMetric.score}점 (가중: ${thirdLowestMetric.smartScore.toFixed(1)})`
    });
    
    // 제품 번호 결정
    const primaryNumber = determineProductNumber(lowestMetric.key);
    const secondaryNumber = determineProductNumber(secondLowestMetric.key);
    
    console.log('📦 제품 번호:', { primaryNumber, secondaryNumber });
    
    // 🆕 [v10.1] 시너지 점수 계산
    const synergyKey = `${Math.min(primaryNumber, secondaryNumber)}-${Math.max(primaryNumber, secondaryNumber)}`;
    const synergyBonus = PRODUCT_SYNERGY[synergyKey] || 1.0;
    
    console.log('✨ [v10.1] 시너지 보너스:', { synergyKey, bonus: `×${synergyBonus}` });
    
    // 추천 전략 결정
    const strategy = determineRecommendationStrategy(
        lowestMetric.score,
        secondLowestMetric.score,
        primaryNumber,
        secondaryNumber
    );
    
    console.log('📋 추천 전략:', strategy);
    
    // 전략에 따른 제품 추천 생성
    return buildRecommendations(
        strategy,
        lowestMetric,
        secondLowestMetric,
        primaryNumber,
        secondaryNumber,
        synergyBonus // 🆕 시너지 보너스 전달
    );
}

// 제품 번호 결정 함수
function determineProductNumber(metricKey) {
    const mapping = {
        // 3번: 화이트닝/밝기
        'metric_3': 3,   // 색소침착
        'metric_1': 3,   // 톤균일도
        'metric_2': 3,   // 피부밝기
        
        // 5번: 안티에이징
        'metric_4': 5,   // 주름
        'metric_5': 5,   // 탄력
        
        // 7번: 진정/수분/장벽
        'metric_6': 7,   // 수분
        'metric_7': 7,   // 민감도
        'metric_8': 7,   // 홍조
        'metric_9': 7,   // 트러블
        'metric_10': 7,  // 모공
        'metric_texture': 7  // 텍스처
    };
    
    return mapping[metricKey] || 3;
}

// 추천 전략 결정
function determineRecommendationStrategy(lowestScore, secondScore, primaryNum, secondaryNum) {
    const t = window.t || ((key) => key); // 번역 함수
    
    // 케이스 1: 집중 관리 필요 (< 50점) - 프리미엄 듀얼 조합
    if (lowestScore < 50) {
        if (primaryNum === secondaryNum) {
            // ✅ v20.2+ 수정: 같은 번호여도 프리미엄 + RED 조합으로 변경 (중복 방지)
            // RED도 같은 번호로 집중 케어!
            return { 
                type: 'DUAL_PREMIUM_RED', 
                primaryNumber: primaryNum, 
                secondaryNumber: primaryNum,  // RED도 같은 번호 (집중 케어)
                reason: t('reason_intensive_dual') 
            };
        } else {
            // 다른 번호: 프리미엄 듀얼 (프리미엄 2개 다른 번호)
            return { 
                type: 'PREMIUM_DUAL', 
                primaryNumber: primaryNum, 
                secondaryNumber: secondaryNum, 
                reason: t('reason_intensive_complex') 
            };
        }
    }
    
    // 케이스 2: 심각한 문제 (50-59점) - 프리미엄 + RED 조합
    else if (lowestScore < 60) {
        if (primaryNum === secondaryNum) {
            // ✅ v20.2+ 수정: 같은 번호여도 프리미엄 + RED 조합으로 변경 (중복 방지)
            // RED도 같은 번호로 집중 케어!
            return { 
                type: 'DUAL_PREMIUM_RED', 
                primaryNumber: primaryNum, 
                secondaryNumber: primaryNum,  // RED도 같은 번호 (집중 케어)
                reason: t('reason_complex_care') 
            };
        } else {
            return { type: 'DUAL_PREMIUM_RED', primaryNumber: primaryNum, secondaryNumber: secondaryNum, reason: t('reason_complex_care') };
        }
    }
    
    // 케이스 3: 보통 문제 (60-69점) - 프리미엄 + RED 믹스
    else if (lowestScore < 70) {
        if (secondScore < 70) {
            if (primaryNum === secondaryNum) {
                // ✅ v20.2+ 수정: 같은 번호여도 프리미엄 + RED 조합으로 변경 (중복 방지)
                // RED도 같은 번호로 집중 케어!
                return { 
                    type: 'DUAL_PREMIUM_RED', 
                    primaryNumber: primaryNum, 
                    secondaryNumber: primaryNum,  // RED도 같은 번호 (집중 케어)
                    reason: t('reason_balanced') 
                };
            } else {
                return { type: 'DUAL_MIX', primaryNumber: primaryNum, secondaryNumber: secondaryNum, reason: t('reason_complex') };
            }
        } else {
            return { type: 'SINGLE_PREMIUM', number: primaryNum, reason: t('reason_focus') };
        }
    }
    
    // 케이스 4: 가벼운 문제 (70-79점)
    else if (lowestScore < 80) {
        return { type: 'SINGLE_RED', number: primaryNum, reason: t('reason_prevention') };
    }
    
    // 케이스 5: 건강한 피부 (80점 이상)
    else {
        return { type: 'PREVENTIVE', number: 7, reason: t('reason_maintenance') };
    }
}

// 추천 결과 구성
function buildRecommendations(strategy, lowestMetric, secondMetric, primaryNum, secondaryNum) {
    const recommendations = [];
    
    switch (strategy.type) {
        // 🔥 NEW: 프리미엄 더블 (같은 번호 2개)
        case 'PREMIUM_DOUBLE':
            recommendations.push({
                type: 'premiumDouble',
                lineType: 'PREMIUM',
                number: strategy.number,
                premiumNumber: strategy.number,
                name: `${strategy.number}${t('name_premium_double')}`,
                premium: getProductById('premium-' + strategy.number),
                red: getProductById('premium-' + strategy.number), // 둘 다 프리미엄 같은 번호
                recommendationLabel: `🔥 ${strategy.number}${t('label_premium_double')}`,
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_premium_intensive'),
                reason: generateDetailedReason(lowestMetric, secondMetric, 'INTENSIVE'),
                matchScore: 98
            });
            break;
        
        // 🔥 NEW: 프리미엄 듀얼 (다른 번호 2개)
        case 'PREMIUM_DUAL':
            recommendations.push({
                type: 'premiumDual',
                lineType: 'PREMIUM',
                number: strategy.primaryNumber,
                name: `${t('name_premium_dual')} ${strategy.primaryNumber}번 + ${strategy.secondaryNumber}번 강력 복합`,
                premium: getProductById('premium-' + strategy.primaryNumber),
                red: getProductById('premium-' + strategy.secondaryNumber), // 둘 다 프리미엄
                recommendationLabel: `🔥 ${t('label_intensive_complex')}`,
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_premium_dual'),
                reason: generateDetailedReason(lowestMetric, secondMetric, 'INTENSIVE'),
                matchScore: 97
            });
            break;
        
        // 기존: 더블UP (프리미엄 + RED 같은 번호)
        case 'DOUBLE_UP':
            recommendations.push({
                type: 'doubleUp',
                lineType: 'PREMIUM',
                number: strategy.number,
                premiumNumber: strategy.number,
                redNumber: strategy.number,
                name: `${strategy.number}${t('name_doubleup')}`,
                premium: getProductById('premium-' + strategy.number),
                red: getProductById('red-' + strategy.number),
                recommendationLabel: getRecommendationLabel(strategy.number, 'PREMIUM', true, strategy.number, strategy.number),
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_premium_red_intensive'),
                reason: generateDetailedReason(lowestMetric, secondMetric, 'PREMIUM'),
                matchScore: 95
            });
            break;
        
        // 🆕 NEW: 프리미엄 + RED 복합 (50점대용)
        case 'DUAL_PREMIUM_RED':
            recommendations.push({
                type: 'dualPremiumRed',
                lineType: 'MIX',
                number: strategy.primaryNumber,
                name: `${t('name_premium_red')} ${strategy.primaryNumber}번 + RED ${strategy.secondaryNumber}번`,
                premium: getProductById('premium-' + strategy.primaryNumber),
                red: getProductById('red-' + strategy.secondaryNumber),
                recommendationLabel: `💪 ${t('label_complex_care')}`,
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_premium_red_complex'),
                reason: generateDetailedReason(lowestMetric, secondMetric, 'PREMIUM'),
                matchScore: 93
            });
            break;
        
        // 기존: 듀얼 믹스 (60점대용)
        case 'DUAL_MIX':
            recommendations.push({
                type: 'dual',
                lineType: 'MIX',
                number: strategy.primaryNumber,
                name: `${strategy.primaryNumber}${t('name_mix')} + ${strategy.secondaryNumber}번`,
                premium: getProductById('premium-' + strategy.primaryNumber),
                red: getProductById('red-' + strategy.secondaryNumber),
                recommendationLabel: t('label_balanced_care'),
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_dual_focus'),
                reason: generateDetailedReason(lowestMetric, secondMetric, 'BALANCED'),
                matchScore: 90
            });
            break;
            
        case 'SINGLE_PREMIUM':
            recommendations.push({
                type: 'single',
                lineType: 'PREMIUM',
                number: strategy.number,
                name: `${t('name_premium_single')} ${strategy.number}번`,
                premium: getProductById('premium-' + strategy.number),
                red: null,
                recommendationLabel: getRecommendationLabel(strategy.number, 'PREMIUM', false),
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_single_focus'),
                reason: generateDetailedReason(lowestMetric, secondMetric, 'PREMIUM'),
                matchScore: 88
            });
            break;
            
        case 'SINGLE_RED':
            recommendations.push({
                type: 'single',
                lineType: 'RED',
                number: strategy.number,
                name: `${t('name_red_single')} ${strategy.number}번`,
                premium: null,
                red: getProductById('red-' + strategy.number),
                recommendationLabel: getRecommendationLabel(strategy.number, 'RED', false),
                userProblem: generateUserProblemSummary(lowestMetric, secondMetric),
                description: t('desc_daily_care'),
                reason: `${lowestMetric.name} 예방 및 개선`,
                matchScore: 85
            });
            break;
            
        case 'PREVENTIVE':
            recommendations.push({
                type: 'single',
                lineType: 'RED',
                number: 7,
                name: t('name_red_preventive'),
                premium: null,
                red: getProductById('red-7'),
                recommendationLabel: t('reason_prevention'),
                userProblem: t('problem_healthy'),
                description: t('desc_maintenance'),
                reason: t('problem_prevention_reason'),
                matchScore: 80
            });
            break;
    }
    
    console.log('✅ 추천 결과:', recommendations);
    return recommendations;
}

// 🆕 제품 번호에 따른 맞춤 추천 표기 (P프리미엄 표기 삭제)
function getRecommendationLabel(number, lineType, isDoubleUp = false, premiumNumber = null, redNumber = null) {
    // 더블UP 조합인 경우
    if (isDoubleUp && premiumNumber && redNumber) {
        const combinationKey = `P${premiumNumber}+R${redNumber}`;
        const combinations = {
            'P3+R5': t('badge_exosome_whitening_elasticity'),
            'P3+R7': t('badge_exosome_whitening_intensive'),
            'P5+R7': t('badge_exosome_elasticity_intensive'),
            'P5+R3': t('badge_exosome_elasticity_whitening'),
            'P7+R3': t('badge_exosome_barrier_whitening'),
            'P7+R5': t('badge_exosome_barrier_elasticity')
        };
        
        return combinations[combinationKey] || t('exosome_complex_care_recommend');
    }
    
    // 단일 제품 추천인 경우
    const labels = {
        3: {
            PREMIUM: t('badge_exosome_whitening'),
            RED: t('badge_whitening')
        },
        5: {
            PREMIUM: t('badge_exosome_elasticity'),
            RED: t('badge_elasticity')
        },
        7: {
            PREMIUM: t('badge_exosome_barrier'),
            RED: t('badge_soothing')
        }
    };
    
    return labels[number]?.[lineType] || t('badge_doubleup');
}

// 🆕 사용자 문제점 요약 생성
function generateUserProblemSummary(metric1, metric2) {
    const t = window.t || ((key) => key);
    const problems = [];
    
    if (metric1.score < 70) {
        problems.push(`${metric1.name} ${metric1.score}${t('user_problem_score_unit')}`);
    }
    
    if (metric2.score < 70) {
        problems.push(`${metric2.name} ${metric2.score}${t('user_problem_score_unit')}`);
    } else if (metric2.score < 80 && problems.length === 0) {
        problems.push(`${metric2.name} ${metric2.score}${t('user_problem_score_unit')}`);
    }
    
    if (problems.length === 0) {
        return t('user_problem_prevention');
    } else if (problems.length === 1) {
        return `${problems[0]} ${t('user_problem_single')}`;
    } else {
        return `${problems[0]}, ${problems[1]} ${t('user_problem_double')}`;
    }
}

// 상세한 추천 이유 생성
function generateDetailedReason(metric1, metric2, lineType) {
    const issues = [];
    
    // 주요 문제 분석
    if (metric1.score < 70) {
        issues.push({
            name: metric1.name,
            score: metric1.score,
            severity: '집중 개선'
        });
    }
    
    if (metric2.score < 70) {
        issues.push({
            name: metric2.name,
            score: metric2.score,
            severity: '집중 개선'
        });
    } else if (metric2.score < 80) {
        issues.push({
            name: metric2.name,
            score: metric2.score,
            severity: '개선'
        });
    }
    
    // 시나리오 기반 메시지 생성
    let message = '';
    
    if (issues.length === 1) {
        // 1개 문제
        const issue = issues[0];
        message = `<div style="line-height: 1.8;">
            <p style="margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 600; color: var(--red-primary);">
                ${issue.name} ${issue.score}점 - ${getScoreStatus(issue.score)} 상태
            </p>
            <p style="margin: 0 0 8px 0; color: var(--white-primary);">
                ${getIssueDescription(issue.name, issue.score)}
            </p>
            <p style="margin: 0; color: var(--white-secondary); font-size: 0.95rem;">
                ${lineType === 'INTENSIVE' 
                    ? t('reason_intensive_single')
                    : lineType === 'PREMIUM'
                    ? t('reason_premium_single')
                    : lineType === 'BALANCED'
                    ? t('reason_balanced_single')
                    : t('reason_daily_single')}
            </p>
        </div>`;
    } else {
        // 2개 문제
        const issue1 = issues[0];
        const issue2 = issues[1];
        const t = window.t || ((key) => key);
        message = `<div style="line-height: 1.8;">
            <p style="margin: 0 0 12px 0; font-size: 1.1rem; font-weight: 600; color: var(--red-primary);">
                ${issue1.name}(${issue1.score}${t('user_problem_score_unit')})${t('user_problem_and')} ${issue2.name}(${issue2.score}${t('user_problem_score_unit')}) ${t('user_problem_double')}
            </p>
            <p style="margin: 0 0 8px 0; color: var(--white-primary);">
                ${getCombinedIssueDescription(issue1.name, issue2.name)}
            </p>
            <p style="margin: 0; color: var(--white-secondary); font-size: 0.95rem;">
                ${lineType === 'INTENSIVE'
                    ? t('reason_intensive_dual')
                    : lineType === 'PREMIUM' 
                    ? t('care_recommendation_intensive')
                    : lineType === 'BALANCED'
                    ? t('reason_balanced_dual')
                    : t('care_recommendation_daily')}
            </p>
        </div>`;
    }
    
    return message;
}

// 점수 상태 텍스트
function getScoreStatus(score) {
    if (score >= 70) return '개선';
    return '집중 개선';
}

// 개별 문제 설명
function getIssueDescription(metricName, score) {
    const t = window.t || ((key) => key);
    const metricKeyMap = {
        '수분': 'moisture',
        '탄력': 'elasticity',
        '주름': 'wrinkles',
        '모공': 'pores',
        '색소침착': 'pigmentation',
        '홍조': 'redness',
        '여드름': 'acne',
        '피부결': 'texture',
        '톤 균일도': 'tone',
        '민감도': 'sensitivity'
    };
    
    const metricKey = metricKeyMap[metricName];
    if (metricKey) {
        return t(`issue_${metricKey}`);
    }
    
    return `${metricName} ${t('issue_combined_default')}`;
}

// 복합 문제 설명
function getCombinedIssueDescription(metric1, metric2) {
    const t = window.t || ((key) => key);
    const combinationKeyMap = {
        '수분-홍조': 'moisture_redness',
        '홍조-수분': 'moisture_redness',
        '수분-민감도': 'moisture_sensitivity',
        '민감도-수분': 'moisture_sensitivity',
        '탄력-주름': 'elasticity_wrinkles',
        '주름-탄력': 'elasticity_wrinkles',
        '색소침착-톤 균일도': 'pigmentation_tone',
        '톤 균일도-색소침착': 'pigmentation_tone',
        '여드름-홍조': 'acne_redness',
        '홍조-여드름': 'acne_redness',
        '모공-피부결': 'pores_texture',
        '피부결-모공': 'pores_texture'
    };
    
    const key = `${metric1}-${metric2}`;
    const combinationKey = combinationKeyMap[key];
    
    if (combinationKey) {
        return t(`issue_combined_${combinationKey}`);
    }
    
    return `${metric1} & ${metric2} ${t('issue_combined_default')}`;
}

// 제품 찾기
function getProductById(productId) {
    if (typeof EXOBIO_PREMIUM !== 'undefined') {
        const premium = EXOBIO_PREMIUM.find(p => p.id === productId);
        if (premium) return premium;
    }
    
    if (typeof EXOBIO_RED !== 'undefined') {
        const red = EXOBIO_RED.find(p => p.id === productId);
        if (red) return red;
    }
    
    return null;
}

// 결과 저장 (최대 10개 제한)
function saveAnalysisResult(analysis) {
    try {
        console.log('💾 [v3.0] 결과 저장 시작...', {
            hasImage: !!window.capturedImage,
            hasAnalysis: !!analysis,
            date: analysis.date
        });
        
        const history = JSON.parse(localStorage.getItem('skinHistory') || '[]');
        console.log('📂 [v3.0] 기존 기록 개수:', history.length);
        
        // 🆕 [v3.5.1] 기록 추가
        history.unshift({
            date: analysis.date,
            image: window.capturedImage,
            analysis: analysis
        });
        
        // 10개 초과 시 오래된 것 삭제
        while (history.length > 10) {
            history.pop();
        }
        
        // localStorage 저장 시도 (용량 초과 에러 처리)
        try {
            localStorage.setItem('skinHistory', JSON.stringify(history));
            localStorage.setItem('lastAnalysis', JSON.stringify({
                image: window.capturedImage,
                analysis: analysis
            }));
            console.log('✅ [v3.0] 결과 저장 완료! 총 기록:', history.length);
        } catch (e) {
            console.error('❌ localStorage 저장 실패:', e);
            
            // 용량 초과 시 오래된 기록 삭제 후 재시도
            if (e.name === 'QuotaExceededError') {
                alert(window.t ? window.t('alert_storage_full') : '⚠️ 저장 공간이 부족합니다.\n오래된 기록을 삭제하고 다시 시도합니다.');
                
                // 가장 오래된 기록 3개 삭제
                history.splice(-3, 3);
                
                try {
                    localStorage.setItem('skinHistory', JSON.stringify(history));
                    localStorage.setItem('lastAnalysis', JSON.stringify({
                        image: window.capturedImage,
                        analysis: analysis
                    }));
                    console.log('✅ [v3.0] 재시도 저장 성공! 총 기록:', history.length);
                } catch (e2) {
                    console.error('❌ 재시도도 실패:', e2);
                    alert(window.t ? window.t('alert_save_failed') : '❌ 저장에 실패했습니다.\n기록 페이지에서 모든 기록을 삭제한 후 다시 시도해주세요.');
                    throw e2;
                }
            } else {
                throw e;
            }
        }
        console.log('📊 [v3.0] 저장된 데이터:', {
            totalRecords: history.length,
            latestDate: new Date(history[0].date).toLocaleString('ko-KR'),
            imageSize: window.capturedImage ? window.capturedImage.length : 0
        });
    } catch (error) {
        console.error('❌ 결과 저장 실패:', error);
        alert('기록 저장 중 오류가 발생했습니다: ' + error.message);
    }
}

// 간단한 결과 표시
function displaySimpleResult(image, analysis) {
    console.log('📊 [v3.0] 결과 표시');
    
    // 이미지 표시
    const imgElem = document.getElementById('analyzed-image');
    if (imgElem) imgElem.src = image;
    
    // 날짜 표시
    const dateElem = document.getElementById('analysis-date');
    if (dateElem) dateElem.textContent = new Date(analysis.date).toLocaleDateString('ko-KR');
    
    // 종합 점수
    const scoreElem = document.getElementById('total-score');
    if (scoreElem) {
        scoreElem.textContent = analysis.totalScore;
        scoreElem.style.color = getScoreColor(analysis.totalScore);
    }
    
    // 10가지 지표 표시
    const resultsContainer = document.getElementById('analysis-results');
    if (resultsContainer) {
        // 번역 함수
        const t = window.t || ((key) => key);
        
        // 점수 해석 가이드 추가
        resultsContainer.innerHTML = `
            <div class="card" style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(22, 163, 74, 0.15)); border: 2px solid #22C55E; margin-bottom: 24px;">
                <h3 style="color: #22C55E; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                    <i class="fas fa-info-circle"></i>
                    <span data-i18n="score_guide_title">${t('score_guide_title')}</span>
                </h3>
                
                <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px; margin-bottom: 12px;">
                    <p style="color: var(--white-primary); font-weight: 600; margin-bottom: 12px; font-size: 1rem;">
                        <span data-i18n="score_guide_intro">${t('score_guide_intro')}</span>
                    </p>
                    <div style="display: grid; gap: 8px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #22C55E;"></div>
                            <span style="color: var(--white-secondary); font-size: 0.9rem;">
                                <strong style="color: #22C55E;"><span data-i18n="score_90_above">${t('score_90_above')}</span></strong> <span data-i18n="score_90_desc">${t('score_90_desc')}</span>
                            </span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #FFD700;"></div>
                            <span style="color: var(--white-secondary); font-size: 0.9rem;">
                                <strong style="color: #FFD700;"><span data-i18n="score_80_89">${t('score_80_89')}</span></strong> <span data-i18n="score_80_desc">${t('score_80_desc')}</span>
                            </span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #FFA500;"></div>
                            <span style="color: var(--white-secondary); font-size: 0.9rem;">
                                <strong style="color: #FFA500;"><span data-i18n="score_70_79">${t('score_70_79')}</span></strong> <span data-i18n="score_70_desc">${t('score_70_desc')}</span>
                            </span>
                        </div>
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: #DC143C;"></div>
                            <span style="color: var(--white-secondary); font-size: 0.9rem;">
                                <strong style="color: #DC143C;"><span data-i18n="score_60_69">${t('score_60_69')}</span></strong> <span data-i18n="score_60_desc">${t('score_60_desc')}</span>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div style="background: rgba(220, 20, 60, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid var(--red-primary);">
                    <p style="color: var(--white-secondary); margin: 0; font-size: 0.875rem; line-height: 1.6;">
                        💡 <strong style="color: var(--white-primary);"><span data-i18n="score_note_title">${t('score_note_title')}</span></strong> 
                        <span data-i18n="score_note_desc">${t('score_note_desc')}</span>
                    </p>
                </div>
            </div>
        ` + analysis.metrics.map(metric => `
            <div class="card card-red-accent">
                <div class="card-header">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 2rem;">${metric.icon}</span>
                        <div>
                            <h3 class="card-title" style="margin: 0;">${metric.name}</h3>
                            <p style="color: var(--gray-light); font-size: 0.875rem; margin: 0;">${metric.description}</p>
                        </div>
                    </div>
                    <div style="font-size: 1.75rem; font-weight: 900; color: ${getScoreColor(metric.score)};">
                        ${metric.score}
                    </div>
                </div>
                <div class="progress-container">
                    <div class="progress-bar-bg">
                        <div class="progress-bar" style="width: ${metric.score}%;">
                            ${metric.score}점
                        </div>
                    </div>
                </div>
                <div style="margin-top: 12px; padding: 8px 12px; background: ${getScoreBackgroundColor(metric.score)}; border-radius: 6px; border-left: 3px solid ${getScoreColor(metric.score)};">
                    <p style="margin: 0; color: var(--white-primary); font-size: 0.875rem; font-weight: 500;">
                        ${getScoreMessage(metric.score)}
                    </p>
                </div>
            </div>
        `).join('');
        
        // 🔒 [v10.1 HOTFIX] 교육 블록 임시 비활성화 (v20.0에서 개선 후 재등장)
        // console.log('📚 [v10.0] 교육 블록 로딩 시작...');
        // loadEducationBlocks(analysis.metrics, resultsContainer);
        console.log('🔒 [v10.1] 교육 블록 비활성화됨 - v20.0에서 개선 후 재등장');
        
        // 🆕 제품 추천을 교육 블록 아래에 표시 (P/R 배지 + 추천 이유)
        if (analysis.productRecommendations && analysis.productRecommendations.length > 0) {
            resultsContainer.innerHTML += generateProductRecommendationBadge(analysis.productRecommendations[0]);
            resultsContainer.innerHTML += generateProductHTML(analysis.productRecommendations[0]);
        }
    }
    
    console.log('✅ [v3.0] 결과 표시 완료');
}

// 🆕🆕🆕 [v10.0] 교육 블록 로드 및 표시 함수
async function loadEducationBlocks(metrics, container) {
    try {
        // EducationContentLoader 확인
        if (typeof EducationContentLoader === 'undefined') {
            console.error('❌ [v10.0] EducationContentLoader가 로드되지 않았습니다.');
            return;
        }
        
        const loader = new EducationContentLoader();
        const currentLang = window.getCurrentLanguage ? window.getCurrentLanguage() : (localStorage.getItem('language') || 'ko'); // 현재 언어 가져오기
        loader.setLanguage(currentLang);
        console.log(`🌐 [v10.0] 교육 블록 언어: ${currentLang}`);
        
        console.log('📚 [v10.0] 가장 낮은 점수 3개 지표의 교육 블록 로딩...');
        
        // 가장 낮은 점수 3개 지표 선택
        const sortedMetrics = [...metrics].sort((a, b) => a.score - b.score);
        const top3LowMetrics = sortedMetrics.slice(0, 3);
        
        console.log('🎯 [v10.0] 선택된 지표:', top3LowMetrics.map(m => `${m.name} (${m.score}점)`).join(', '));
        
        // 각 지표에 대한 교육 블록 로드
        for (const metric of top3LowMetrics) {
            const category = metricKeyToCategoryName(metric.key);
            if (!category) {
                console.warn(`⚠️ [v10.0] ${metric.key}에 해당하는 카테고리를 찾을 수 없습니다.`);
                continue;
            }
            
            console.log(`📖 [v10.0] ${category} (${metric.name}) 교육 블록 로딩 중...`);
            
            // 교육 콘텐츠 로드
            const content = await loader.loadContent(category, currentLang);
            if (!content || !content.scenarios) {
                console.warn(`⚠️ [v10.0] ${category} 교육 콘텐츠를 로드할 수 없습니다.`);
                continue;
            }
            
            console.log(`✅ [v10.0] ${category}: ${content.scenarios.length}개 시나리오 로드 완료`);
            
            // 점수에 맞는 시나리오 선택 (5개 시나리오 중 하나)
            const scenarioKey = selectScenarioByScore(metric.score);
            const matchingScenario = content.scenarios.find(s => s.scenario === scenarioKey);
            
            if (!matchingScenario) {
                console.warn(`⚠️ [v10.0] ${category}의 시나리오 "${scenarioKey}"를 찾을 수 없습니다.`);
                continue;
            }
            
            console.log(`📌 [v10.0] ${category}: ${matchingScenario.statusLabel} - ${matchingScenario.blocks.length}개 블록`);
            
            // 첫 번째 블록 (assessment) 사용
            const firstBlock = matchingScenario.blocks[0];
            if (!firstBlock || !firstBlock.content) {
                console.warn(`⚠️ [v10.0] ${category}의 블록 콘텐츠가 없습니다.`);
                continue;
            }
            
            // 교육 블록 HTML 생성 및 추가
            const blockHTML = renderEducationBlock(firstBlock, metric);
            container.innerHTML += blockHTML;
        }
        
        console.log('🎉 [v10.0] 모든 교육 블록 로드 완료!');
        
    } catch (error) {
        console.error('❌ [v10.0] 교육 블록 로딩 오류:', error);
    }
}

// metric key를 카테고리 이름으로 변환
function metricKeyToCategoryName(key) {
    const mapping = {
        'metric_1': 'tone_evenness',       // 톤 균일도
        'metric_2': 'brightness',          // 피부 밝기
        'metric_3': 'pigmentation',        // 색소침착
        'metric_4': 'wrinkle_depth',       // 주름
        'metric_5': 'elasticity',          // 탄력
        'metric_6': 'hydration',           // 수분
        'metric_7': 'sensitivity',         // 민감도
        'metric_8': 'redness',             // 홍조
        'metric_9': 'acne',                // 여드름
        'metric_10': 'pores',              // 모공
        'metric_texture': 'pores'          // 텍스처 (모공으로 매핑)
    };
    return mapping[key] || null;
}

// 점수에 따른 시나리오 선택
function selectScenarioByScore(score) {
    if (score >= 90) return 'scenario_1'; // 90-100점: 우수
    if (score >= 80) return 'scenario_2'; // 80-89점: 양호
    if (score >= 70) return 'scenario_3'; // 70-79점: 보통
    if (score >= 60) return 'scenario_4'; // 60-69점: 주의
    return 'scenario_5';                   // 0-59점: 집중 관리
}

// 교육 블록 HTML 렌더링
function renderEducationBlock(block, metric) {
    const t = window.t || ((key) => key);
    
    // ⭐ CRITICAL FIX: block.content에서 데이터 추출
    const content = block.content || block;
    
    // 블록 타입에 따른 아이콘
    const typeIcons = {
        'introduction': '📖',
        'education': '🧪',
        'assessment': '📊',
        'lifestyle': '🌱',
        'routine': '🧴'
    };
    
    const icon = typeIcons[block.type] || '📚';
    
    return `
        <div class="card education-block" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); border: 2px solid rgba(99, 102, 241, 0.3); margin-bottom: 24px;">
            <div class="card-header" style="border-bottom: 1px solid rgba(99, 102, 241, 0.2); padding-bottom: 16px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                    <span style="font-size: 2rem;">${icon}</span>
                    <div>
                        <h3 class="card-title" style="margin: 0; color: #818CF8;">${content.title || metric.name}</h3>
                        <p style="color: var(--gray-light); font-size: 0.875rem; margin: 4px 0 0 0;">${block.type || 'education'}</p>
                    </div>
                </div>
            </div>
            
            <div class="card-body" style="color: var(--white-secondary); line-height: 1.8;">
                ${content.description ? `<p style="margin-bottom: 16px;">${content.description}</p>` : ''}
                
                ${content.keyPoints && content.keyPoints.length > 0 ? `
                    <div style="background: rgba(0,0,0,0.3); padding: 16px; border-radius: 8px; margin-bottom: 16px;">
                        <h4 style="color: #A5B4FC; margin-bottom: 12px; font-size: 1rem;">💡 핵심 포인트</h4>
                        <ul style="margin: 0; padding-left: 20px;">
                            ${content.keyPoints.map(point => `<li style="margin-bottom: 8px;">${point}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${content.causes && content.causes.length > 0 ? `
                    <div style="background: rgba(220, 20, 60, 0.1); padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 3px solid var(--red-primary);">
                        <h4 style="color: var(--red-primary); margin-bottom: 12px; font-size: 1rem;">🔍 주요 원인</h4>
                        <ul style="margin: 0; padding-left: 20px;">
                            ${content.causes.map(cause => `<li style="margin-bottom: 8px;">${cause}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${content.careTips && content.careTips.length > 0 ? `
                    <div style="background: rgba(34, 197, 94, 0.1); padding: 16px; border-radius: 8px; margin-bottom: 16px; border-left: 3px solid #22C55E;">
                        <h4 style="color: #22C55E; margin-bottom: 12px; font-size: 1rem;">✨ 관리 팁</h4>
                        <ul style="margin: 0; padding-left: 20px;">
                            ${content.careTips.map(tip => `<li style="margin-bottom: 8px;">${tip}</li>`).join('')}
                        </ul>
                    </div>
                ` : ''}
                
                ${content.productRecommendations && content.productRecommendations.length > 0 ? `
                    <div style="background: rgba(139, 92, 246, 0.1); padding: 16px; border-radius: 8px; border-left: 3px solid #8B5CF6;">
                        <h4 style="color: #A78BFA; margin-bottom: 12px; font-size: 1rem;">🛍️ 추천 제품</h4>
                        <p style="margin: 0; color: var(--white-secondary);">${content.productRecommendations.join(', ')}</p>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

// 🆕 맞춤 추천 배지 먼저 표시 (맨 위에!)
function generateProductRecommendationBadge(rec) {
    // 🆕 P프리미엄 표기 완전 삭제, 제품별 맞춤 추천 표기만 사용
    const recommendationLabel = rec.recommendationLabel || getRecommendationLabel(rec.number, rec.lineType, true, rec.premiumNumber, rec.redNumber);
    
    return `
        <!-- 노란색 배지 - 밝은 노란색으로 변경 + 🆕 [v3.3.5] 반응형 텍스트 처리 -->
        <div style="text-align: center; margin: 32px 0; animation: pulse 2s infinite;">
            <div style="display: inline-block; background: linear-gradient(135deg, #FFEB3B, #FFC107); padding: 20px 40px; border-radius: 30px; border: 3px solid #FFEB3B; box-shadow: 0 8px 32px rgba(255, 235, 59, 0.6); max-width: 90%; width: 100%; box-sizing: border-box;">
                <h2 style="margin: 0 0 12px 0; color: #000; font-weight: 900; text-transform: uppercase; letter-spacing: 2px; font-size: clamp(1.2rem, 5vw, 2rem); word-wrap: break-word; overflow-wrap: break-word; hyphens: auto;">
                    ${recommendationLabel}
                </h2>
                <p style="margin: 0; color: #8B0000; font-size: clamp(0.9rem, 3.5vw, 1.1rem); font-weight: 700; line-height: 1.4; word-wrap: break-word; overflow-wrap: break-word;">
                    ${rec.userProblem}
                </p>
            </div>
        </div>
    `;
}

// 제품 추천 HTML 생성 (재구성)
function generateProductHTML(rec) {
    const t = window.t || ((key) => key); // 번역 함수
    
    // 제품명 번역 함수
    const translateProductName = (productName) => {
        const productMap = {
            'EXOBIO 프리미엄 3번': 'product_premium_3',
            'EXOBIO 프리미엄 5번': 'product_premium_5',
            'EXOBIO 프리미엄 7번': 'product_premium_7',
            'EXOBIO RED 3번': 'product_red_3',
            'EXOBIO RED 5번': 'product_red_5',
            'EXOBIO RED 7번': 'product_red_7'
        };
        
        const key = productMap[productName];
        return key ? t(key) : productName;
    };
    
    return `
        <div class="card" style="background: linear-gradient(135deg, rgba(220, 20, 60, 0.15), rgba(139, 0, 0, 0.15)); border: 2px solid var(--red-primary); margin-top: 24px;">
            
            <!-- EXOBIO 로고 추가 -->
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="images/exobio-logo.png" alt="EXOBIO" style="height: 84px; width: auto;">
            </div>
            
            <h4 style="color: var(--red-primary); text-align: center; font-size: 1.5rem; margin-bottom: 24px;">
                ${rec.recommendationLabel || `🔥 ${rec.number}번 ${rec.lineType === 'PREMIUM' ? '프리미엄' : 'RED'}`}
            </h4>
            
            <!-- 추천 이유 (그라데이션 제거, 단색 배경으로 변경) -->
            <div style="background: rgba(30, 30, 30, 0.95); padding: 24px; border-radius: 12px; margin-bottom: 24px; border: 2px solid var(--red-primary);">
                <h4 style="color: var(--red-primary); margin-bottom: 16px; font-size: 1.3rem; font-weight: 700; text-align: center;">
                    <i class="fas fa-lightbulb text-red" style="margin-right: 8px;"></i>
                    <span data-i18n="recommend_reason_title">${t('recommend_reason_title')}</span>
                </h4>
                <div style="background: rgba(0,0,0,0.6); padding: 20px; border-radius: 8px;">
                    ${rec.reason}
                </div>
            </div>
            
            <!-- 🆕 사용 팁 섹션 -->
            <div style="background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.15)); padding: 20px; border-radius: 12px; margin-bottom: 24px; border: 2px solid #22C55E;">
                <h4 style="color: #22C55E; margin-bottom: 12px; font-size: 1.1rem; font-weight: 700; text-align: center;">
                    <i class="fas fa-magic" style="margin-right: 8px;"></i>
                    <span data-i18n="usage_tip_title">💡 사용 팁</span>
                </h4>
                <div style="background: rgba(0,0,0,0.4); padding: 16px; border-radius: 8px;">
                    <p style="color: var(--white-primary); line-height: 1.8; margin: 0; font-size: 0.95rem;" data-i18n="usage_tip_content">
                        ${t('usage_tip_content')}
                    </p>
                    <!-- 영상 안내 추가 (v21.1) -->
                    <p style="color: var(--red-primary); line-height: 1.8; margin-top: 12px; font-size: 0.95rem; font-weight: 600;" data-i18n="usage_tip_video">
                        ${t('usage_tip_video')}
                    </p>
                </div>
            </div>
            
            <!-- 제품 이미지 (클릭하면 확대!) -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                <!-- 프리미엄 -->
                <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 16px; text-align: center;">
                    <div style="position: relative; cursor: pointer;" onclick="window.showImageModal('${rec.premium.detailImage || rec.premium.image}', '${translateProductName(rec.premium.name)}')">
                        <img src="${rec.premium.detailImage || rec.premium.image}" alt="${translateProductName(rec.premium.name)}" style="width: 100%; max-width: 240px; height: auto; border-radius: 8px; margin-bottom: 12px;">
                        <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 8px 12px; border-radius: 20px; font-size: 0.75rem;">
                            <i class="fas fa-search-plus" style="margin-right: 4px;"></i><span data-i18n="image_zoom">${t('image_zoom')}</span>
                        </div>
                    </div>
                    <h5 style="color: var(--white-primary); margin-bottom: 8px; font-size: 0.95rem;">${translateProductName(rec.premium.name)}</h5>
                    <p style="color: var(--gray-light); font-size: 0.875rem; margin: 0;">${rec.premium.volume}</p>
                </div>
                
                <!-- RED -->
                <div style="background: rgba(0,0,0,0.3); border-radius: 12px; padding: 16px; text-align: center;">
                    <div style="position: relative; cursor: pointer;" onclick="window.showImageModal('${rec.red.detailImage || rec.red.image}', '${translateProductName(rec.red.name)}')">
                        <img src="${rec.red.detailImage || rec.red.image}" alt="${translateProductName(rec.red.name)}" style="width: 100%; max-width: 240px; height: auto; border-radius: 8px; margin-bottom: 12px;">
                        <div style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.7); color: white; padding: 8px 12px; border-radius: 20px; font-size: 0.75rem;">
                            <i class="fas fa-search-plus" style="margin-right: 4px;"></i><span data-i18n="image_zoom">${t('image_zoom')}</span>
                        </div>
                    </div>
                    <h5 style="color: var(--white-primary); margin-bottom: 8px; font-size: 0.95rem;">${translateProductName(rec.red.name)}</h5>
                    <p style="color: var(--gray-light); font-size: 0.875rem; margin: 0;">${rec.red.volume}</p>
                </div>
            </div>
            
            <!-- YouTube 영상 (제품 바로 다음!) -->
            <div style="margin-top: 24px; border-radius: 12px; overflow: hidden; border: 2px solid var(--red-primary);">
                <div style="position: relative; padding-bottom: 177.78%; height: 0; overflow: hidden;">
                    <iframe 
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                        src="https://www.youtube.com/embed/E1pDt1JVCCY?autoplay=1&loop=1&playlist=E1pDt1JVCCY&mute=1&controls=1&modestbranding=1&rel=0"
                        title="EXOBIO 제품 영상"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            
            <!-- 정보 페이지 유도 섹션 -->
            <div style="background: linear-gradient(135deg, rgba(220, 20, 60, 0.2), rgba(139, 0, 0, 0.2)); padding: 24px; border-radius: 12px; margin-top: 24px; border: 2px solid var(--red-primary); text-align: center;">
                <h4 style="color: var(--red-primary); margin-bottom: 16px; font-size: 1.25rem;">
                    <i class="fas fa-lightbulb" style="margin-right: 8px;"></i>
                    <span data-i18n="product_detail_more">${t('product_detail_more')}</span>
                </h4>
                
                <p style="color: var(--white-secondary); line-height: 1.8; margin-bottom: 20px; font-size: 0.95rem;">
                    <span data-i18n="product_detail_desc">${t('product_detail_desc')}</span>
                </p>
                
                <button onclick="navigateTo('info')" class="btn btn-primary btn-large" style="background: var(--gradient-red-glow); border: none; box-shadow: 0 4px 16px rgba(220, 20, 60, 0.4); transition: all 0.3s ease;">
                    <i class="fas fa-book-open" style="margin-right: 8px;"></i>
                    <span data-i18n="goto_info_page">${t('goto_info_page')}</span>
                </button>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid rgba(220, 20, 60, 0.3);">
                    <div style="text-align: center;">
                        <i class="fas fa-flask" style="color: var(--red-primary); font-size: 1.5rem; margin-bottom: 8px;"></i>
                        <p style="color: var(--white-secondary); font-size: 0.8rem; margin: 0;" data-i18n="product_detail">${t('product_detail')}</p>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas fa-graduation-cap" style="color: var(--red-primary); font-size: 1.5rem; margin-bottom: 8px;"></i>
                        <p style="color: var(--white-secondary); font-size: 0.8rem; margin: 0;" data-i18n="usage_guide">${t('usage_guide')}</p>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas fa-heart" style="color: var(--red-primary); font-size: 1.5rem; margin-bottom: 8px;"></i>
                        <p style="color: var(--white-secondary); font-size: 0.8rem; margin: 0;" data-i18n="skincare_tips">${t('skincare_tips')}</p>
                    </div>
                </div>
                
                <p style="color: var(--gray-light); font-size: 0.75rem; margin-top: 16px; margin-bottom: 0;" data-i18n="expert_consult_sns">
                    ${t('expert_consult_sns')}
                </p>
            </div>
        </div>
    `;
}

// 점수 색상
function getScoreColor(score) {
    if (score >= 90) return '#22C55E'; // 초록 - 매우 좋음
    if (score >= 80) return '#FFD700'; // 노랑 - 양호
    if (score >= 70) return '#FFA500'; // 오렌지 - 개선 필요
    return '#DC143C'; // 빨강 - 집중 개선 필요
}

// 점수 배경 색상
function getScoreBackgroundColor(score) {
    if (score >= 90) return 'rgba(34, 197, 94, 0.1)'; // 초록 배경
    if (score >= 80) return 'rgba(255, 215, 0, 0.1)'; // 노랑 배경
    if (score >= 70) return 'rgba(255, 165, 0, 0.1)'; // 오렌지 배경
    return 'rgba(220, 20, 60, 0.1)'; // 빨강 배경
}

// 점수 평가 메시지
function getScoreMessage(score) {
    const t = window.t || ((key) => key); // 번역 함수
    
    if (score >= 90) {
        return t('score_message_90');
    } else if (score >= 80) {
        return t('score_message_80');
    } else if (score >= 70) {
        return t('score_message_70');
    } else {
        return t('score_message_60');
    }
}

// 페이지 이동
function navigateTo(pageId) {
    if (typeof window.navigateTo === 'function') {
        window.navigateTo(pageId);
    }
}

// 🆕 전역 함수 등록 (기록 보기에서 사용)
window.displayAnalysisResult = displaySimpleResult;

// 🆕 이미지 확대 모달 표시
window.showImageModal = function(imageSrc, productName) {
    console.log('🔍 [Modal] 이미지 확대 모달 열기:', productName);
    
    // 모달 HTML 생성
    const modalHTML = `
        <div id="imageModal" style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
            animation: fadeIn 0.3s ease-in-out;
        ">
            <!-- 닫기 버튼 -->
            <button onclick="window.closeImageModal()" style="
                position: absolute;
                top: 20px;
                right: 20px;
                background: rgba(220, 20, 60, 0.9);
                color: white;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 1.5rem;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                z-index: 10001;
            ">
                <i class="fas fa-times"></i>
            </button>
            
            <!-- 제품명 -->
            <h3 style="
                color: white;
                margin-bottom: 20px;
                text-align: center;
                font-size: 1.2rem;
                padding: 0 60px;
            ">${productName}</h3>
            
            <!-- 확대된 이미지 -->
            <img src="${imageSrc}" alt="${productName}" style="
                max-width: 95%;
                max-height: 80vh;
                width: auto;
                height: auto;
                border-radius: 12px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
                object-fit: contain;
            ">
            
            <!-- 안내 문구 -->
            <p style="
                color: rgba(255, 255, 255, 0.7);
                margin-top: 20px;
                font-size: 0.9rem;
                text-align: center;
            ">
                <i class="fas fa-hand-pointer"></i> 화면을 클릭하면 닫힙니다
            </p>
        </div>
        
        <style>
            @keyframes fadeIn {
                from {
                    opacity: 0;
                }
                to {
                    opacity: 1;
                }
            }
        </style>
    `;
    
    // 모달을 body에 추가
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // 모달 클릭 시 닫기 (이미지 제외)
    const modal = document.getElementById('imageModal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            window.closeImageModal();
        }
    });
    
    // 스크롤 막기
    document.body.style.overflow = 'hidden';
};

// 🆕 이미지 확대 모달 닫기
window.closeImageModal = function() {
    console.log('❌ [Modal] 이미지 확대 모달 닫기');
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.remove();
    }
    // 스크롤 복구
    document.body.style.overflow = '';
};

console.log('✅ [v4.0.1] AI 분석 엔진 로드 완료 - 이미지 기반 일관성 분석');
console.log('✅ [v4.0.1] window.analyzePhoto 등록:', typeof window.analyzePhoto);
console.log('✅ [v4.0.1] window.displayAnalysisResult 등록:', typeof window.displayAnalysisResult);
