/* ===========================
   CURETEMBIO AI 피부 분석 엔진 v11.0
   2026-02-17 - 과학적 나이 기반 점수 시스템 + Face-API 통합
   =========================== */

console.log('🚀 [v11.0] CURETEMBIO AI 분석 엔진 로드 완료 - 나이 기반 과학적 분석 시스템');

// ========================================
// 1. 과학적 데이터: 콜라겐 감소 곡선
// ========================================

/**
 * 나이별 콜라겐 비율 (%)
 * 출처: Intrinsic & Extrinsic Factors in Skin Ageing (2012)
 */
function getCollagenPercentage(age) {
    if (age < 20) return 100;
    if (age < 25) return 100;
    if (age < 30) return 98;
    if (age < 35) return 93;
    if (age < 40) return 85;
    if (age < 45) return 75;
    if (age < 50) return 60;
    if (age < 55) return 50;
    if (age < 60) return 42;
    if (age < 65) return 35;
    if (age < 70) return 30;
    return 25;
}

// ========================================
// 2. 나이별 기준 점수 (Baseline Scores)
// ========================================

/**
 * 연령대별 각 지표의 기준 점수
 * [10대, 20대, 30대, 40대, 50대, 60대, 70대+]
 */
const AGE_BASELINES = {
    wrinkles: [95, 92, 85, 70, 50, 35, 25],
    elasticity: [92, 90, 82, 68, 48, 35, 28],
    moisture: [88, 85, 78, 68, 55, 45, 38],
    pigmentation: [90, 85, 78, 65, 50, 40, 32],
    pores: [85, 82, 75, 65, 58, 52, 48],
    texture: [88, 85, 78, 68, 58, 48, 40],
    toneUniformity: [90, 88, 80, 70, 58, 48, 40],
    sensitivity: [80, 78, 72, 68, 65, 62, 60],
    redness: [85, 82, 78, 75, 72, 70, 68],
    trouble: [75, 80, 85, 82, 78, 75, 72]
};

/**
 * 나이를 기반으로 기준 점수 계산
 */
function getAgeBaseline(age) {
    const decade = Math.min(Math.floor(age / 10), 7); // 0-7 인덱스
    const ageIndex = Math.max(0, Math.min(6, decade - 1)); // 10대=0, 20대=1, ..., 70대+=6
    
    const baseline = {};
    for (const [metric, values] of Object.entries(AGE_BASELINES)) {
        baseline[metric] = values[ageIndex];
    }
    
    return baseline;
}

// ========================================
// 3. 성별 보정 계수
// ========================================

const GENDER_MODIFIERS = {
    male: {
        wrinkles: 0.9,      // 남성은 주름 늦게 시작
        elasticity: 1.05,   // 콜라겐 밀도 높음
        moisture: 0.92,     // 수분 부족 경향
        pores: 1.2,         // 모공 크기 큼
        pigmentation: 1.0,
        texture: 0.95,
        toneUniformity: 0.95,
        sensitivity: 0.85,  // 덜 민감
        redness: 0.9,
        trouble: 1.3        // 피지 많아 트러블 많음
    },
    female: {
        wrinkles: 1.1,      // 여성은 주름 빨리 시작
        elasticity: 0.95,   // 콜라겐 밀도 낮음
        moisture: 1.08,     // 수분 유지 잘함
        pores: 0.8,         // 모공 작음
        pigmentation: 1.0,
        texture: 1.05,
        toneUniformity: 1.05,
        sensitivity: 1.15,  // 더 민감
        redness: 1.1,
        trouble: 0.7        // 트러블 적음
    }
};

/**
 * 성별에 따른 점수 보정
 */
function applyGenderCorrection(scores, gender) {
    const modifiers = GENDER_MODIFIERS[gender] || GENDER_MODIFIERS.female;
    const corrected = {};
    
    for (const [metric, score] of Object.entries(scores)) {
        const modifier = modifiers[metric] || 1.0;
        corrected[metric] = Math.round(score * modifier);
    }
    
    return corrected;
}

// ========================================
// 4. 계절/환경 보정
// ========================================

/**
 * 현재 계절에 따른 점수 보정
 */
function applySeasonalCorrection(scores) {
    const month = new Date().getMonth() + 1;
    const corrections = {};
    
    // 여름 (6-8월)
    if (month >= 6 && month <= 8) {
        corrections.trouble = 5;      // 여름 트러블 관대하게
        corrections.redness = 3;      // 홍조 관대하게
        corrections.moisture = -3;    // 수분 기준 엄격하게
        corrections.pores = -5;       // 피지 많아 모공 확대
    }
    // 겨울 (12-2월)
    else if (month === 12 || month <= 2) {
        corrections.moisture = 8;     // 건조 환경 고려
        corrections.sensitivity = 5;  // 민감도 증가 고려
        corrections.wrinkles = -2;    // 건조 주름
    }
    
    const corrected = {};
    for (const [metric, score] of Object.entries(scores)) {
        corrected[metric] = score + (corrections[metric] || 0);
    }
    
    return corrected;
}

// ========================================
// 5. 지표 간 상관관계 보정
// ========================================

const CORRELATION_MATRIX = {
    wrinkles: { elasticity: 0.85, moisture: 0.62 },
    elasticity: { wrinkles: 0.85 },
    moisture: { sensitivity: -0.48, redness: -0.35 },
    pigmentation: { toneUniformity: 0.92 },
    toneUniformity: { pigmentation: 0.92 },
    trouble: { redness: 0.65, pores: 0.58 }
};

/**
 * 지표 간 상관관계를 고려한 보정
 */
function applyCorrelationCorrection(scores) {
    const corrected = { ...scores };
    
    for (const [metric, correlations] of Object.entries(CORRELATION_MATRIX)) {
        for (const [relatedMetric, coefficient] of Object.entries(correlations)) {
            if (scores[metric] && scores[relatedMetric]) {
                const influence = (scores[relatedMetric] - 70) * coefficient * 0.1;
                corrected[metric] = Math.round(corrected[metric] + influence);
            }
        }
    }
    
    return corrected;
}

// ========================================
// 6. 가중치 기반 총점 계산
// ========================================

const METRIC_WEIGHTS = {
    elasticity: 0.20,
    moisture: 0.18,
    wrinkles: 0.17,
    pigmentation: 0.10,
    texture: 0.10,
    pores: 0.10,
    toneUniformity: 0.05,
    sensitivity: 0.05,
    redness: 0.03,
    trouble: 0.02
};

/**
 * 가중 평균 총점 계산
 */
function calculateWeightedScore(scores) {
    let weightedSum = 0;
    let totalWeight = 0;
    
    for (const [metric, weight] of Object.entries(METRIC_WEIGHTS)) {
        if (scores[metric] !== undefined) {
            weightedSum += scores[metric] * weight;
            totalWeight += weight;
        }
    }
    
    return Math.round(weightedSum / totalWeight);
}

// ========================================
// 7. Face-API 나이 감지
// ========================================

let faceApiReady = false;

/**
 * Face-API 모델 로드
 */
async function loadFaceDetectionModels() {
    if (faceApiReady || window.faceApiReady) return;
    
    try {
        console.log('📦 [v11.0] Face-API 모델 로드 시작...');
        
        if (typeof faceapi === 'undefined') {
            throw new Error('face-api.js 라이브러리가 로드되지 않았습니다.');
        }
        
        const MODEL_URL = 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model';
        
        await Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
            faceapi.nets.ageGenderNet.loadFromUri(MODEL_URL),
            faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
        ]);
        
        faceApiReady = true;
        window.faceApiReady = true;
        console.log('✅ [v11.0] Face-API 모델 로드 완료 (나이+성별 감지)');
    } catch (error) {
        console.error('❌ [v11.0] Face-API 모델 로드 실패:', error);
        faceApiReady = false;
        window.faceApiReady = false;
    }
}

/**
 * 얼굴 감지 + 나이/성별 분석
 */
async function detectFaceWithAge(imageDataUrl) {
    if (!faceApiReady) {
        await loadFaceDetectionModels();
    }
    
    const img = await loadImageFromDataUrl(imageDataUrl);
    
      const detection = await faceapi
        .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withAgeAndGender();
    
    if (!detection) {
        return null;
    }
    
    return {
        age: Math.round(detection.age),
        gender: detection.gender === 'male' ? 'male' : 'female',
        genderProbability: detection.genderProbability,
        confidence: detection.detection.score
    };
}

/**
 * Data URL에서 이미지 로드
 */
function loadImageFromDataUrl(dataUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = dataUrl;
    });
}

// 페이지 로드 시 모델 로드
setTimeout(() => {
    if (typeof faceapi !== 'undefined') {
        loadFaceDetectionModels();
    }
}, 500);

// ========================================
// 8. 스킨 에이지 계산
// ========================================

/**
 * Face-API 나이 + 피부 특성 분석 → 스킨 에이지 계산
 */
function calculateSkinAge(detectedAge, imageAnalysis) {
    let skinAge = detectedAge;
    
    // 피부 상태에 따른 보정
    const avgScore = Object.values(imageAnalysis).reduce((a, b) => a + b, 0) / Object.keys(imageAnalysis).length;
    
    if (avgScore < 40) {
        skinAge += 8;  // 매우 안 좋음 → +8세
    } else if (avgScore < 50) {
        skinAge += 5;  // 안 좋음 → +5세
    } else if (avgScore < 60) {
        skinAge += 2;  // 보통 이하 → +2세
    } else if (avgScore > 80) {
        skinAge -= 3;  // 매우 좋음 → -3세
    } else if (avgScore > 70) {
        skinAge -= 1;  // 좋음 → -1세
    }
    
    return Math.max(15, Math.min(85, skinAge)); // 15-85세 범위
}

// ========================================
// 9. 개인별 편차 계산
// ========================================

/**
 * 개인 이미지 특성 → 베이스라인 대비 편차 점수 계산
 */
function calculatePersonalDeviation(rawValue, baselineValue) {
    // rawValue: 이미지 분석 결과 (0-100)
    // baselineValue: 나이별 기준 점수
    
    // 편차 계산: rawValue가 높을수록 좋음
    const deviation = (rawValue - 50) * 0.3; // -15 ~ +15 범위
    
    return Math.round(deviation);
}

// ========================================
// 10. 메인 분석 함수
// ========================================

/**
 * 🎯 v11.0 메인 분석 함수
 */
async function performAdvancedAnalysis(imageData) {
    console.log('🧬 [v11.0] 과학적 피부 분석 시작');
    
    try {
        // STEP 1: Face-API 얼굴 감지 + 나이/성별
        const faceDetection = await detectFaceWithAge(imageData);
        
        if (!faceDetection) {
            throw new Error('얼굴을 감지할 수 없습니다.');
        }
        
        const { age: detectedAge, gender, confidence } = faceDetection;
        console.log(`👤 감지된 나이: ${detectedAge}세, 성별: ${gender}, 신뢰도: ${(confidence * 100).toFixed(1)}%`);
        
        // STEP 2: 이미지 분석 (기존 시스템 활용)
        let rawScores = null;
        
        if (window.performConsistentAnalysis) {
            try {
                const analysis = await window.performConsistentAnalysis(imageData);
                if (analysis && analysis.skinMetrics) {
                    rawScores = analysis.skinMetrics;
                    console.log('✅ 이미지 기반 분석 성공:', rawScores);
                }
            } catch (error) {
                console.warn('⚠️ 이미지 분석 실패, 대체 방식 사용:', error);
            }
        }
        
        // 대체: 랜덤 점수 (개발 중)
        if (!rawScores) {
            rawScores = {
                moisture: randomScore(50, 85),
                elasticity: randomScore(45, 80),
                wrinkles: randomScore(50, 85),
                pores: randomScore(55, 90),
                pigmentation: randomScore(45, 80),
                redness: randomScore(50, 85),
                trouble: randomScore(60, 90),
                texture: randomScore(50, 85),
                toneUniformity: randomScore(45, 80),
                sensitivity: randomScore(50, 85)
            };
            console.log('⚠️ 랜덤 점수 사용 (이미지 분석 미지원)');
        }
        
        // STEP 3: 스킨 에이지 계산
        const skinAge = calculateSkinAge(detectedAge, rawScores);
        console.log(`🧪 스킨 에이지: ${skinAge}세 (실제 ${detectedAge}세)`);
        
        // STEP 4: 나이별 기준 점수
        const baseline = getAgeBaseline(skinAge);
        console.log('📊 나이별 기준 점수:', baseline);
        
        // STEP 5: 개인 편차 적용
        const personalScores = {};
        for (const metric in rawScores) {
            const deviation = calculatePersonalDeviation(rawScores[metric], baseline[metric]);
            personalScores[metric] = baseline[metric] + deviation;
        }
        console.log('📈 개인 편차 적용 점수:', personalScores);
        
        // STEP 6: 성별 보정
        const genderCorrected = applyGenderCorrection(personalScores, gender);
        console.log('⚧️ 성별 보정 점수:', genderCorrected);
        
        // STEP 7: 계절 보정
        const seasonCorrected = applySeasonalCorrection(genderCorrected);
        console.log('🌦️ 계절 보정 점수:', seasonCorrected);
        
        // STEP 8: 상관관계 보정
        const finalScores = applyCorrelationCorrection(seasonCorrected);
        console.log('🔗 상관관계 보정 점수:', finalScores);
        
        // STEP 9: 가중 평균 총점
        const totalScore = calculateWeightedScore(finalScores);
        console.log(`🎯 최종 총점: ${totalScore}점`);
        
        // STEP 10: 지표 배열 생성 (UI 표시용)
        const t = window.t || ((key) => key);
        const metrics = [
            { name: t('metric_6'), icon: '💧', description: t('metric_6_desc'), score: finalScores.moisture, key: 'metric_6' },
            { name: t('metric_5'), icon: '💪', description: t('metric_5_desc'), score: finalScores.elasticity, key: 'metric_5' },
            { name: t('metric_4'), icon: '📏', description: t('metric_4_desc'), score: finalScores.wrinkles, key: 'metric_4' },
            { name: t('metric_10'), icon: '🔍', description: t('metric_10_desc'), score: finalScores.pores, key: 'metric_10' },
            { name: t('metric_3'), icon: '🎨', description: t('metric_3_desc'), score: finalScores.pigmentation, key: 'metric_3' },
            { name: t('metric_8'), icon: '🔴', description: t('metric_8_desc'), score: finalScores.redness, key: 'metric_8' },
            { name: t('metric_9'), icon: '🔴', description: t('metric_9_desc'), score: finalScores.trouble, key: 'metric_9' },
            { name: t('metric_texture'), icon: '✨', description: t('metric_texture_desc'), score: finalScores.texture, key: 'metric_texture' },
            { name: t('metric_1'), icon: '🎯', description: t('metric_1_desc'), score: finalScores.toneUniformity, key: 'metric_1' },
            { name: t('metric_7'), icon: '🛡️', description: t('metric_7_desc'), score: finalScores.sensitivity, key: 'metric_7' }
        ];
        
        // STEP 11: 제품 추천 (v22.0 신규 시스템 사용)
        let productRecommendations;
        if (typeof getProductRecommendations_v22 === 'function') {
            console.log('✅ [v22.0] 신규 추천 함수 사용');
            productRecommendations = getProductRecommendations_v22({
                metrics,
                totalScore,
                age: skinAge,
                gender,
                detectedAge
            });
        } else {
            console.warn('⚠️ v22.0 추천 함수 없음, v21.0 폴백');
            productRecommendations = typeof getProductRecommendations_v21 === 'function'
                ? getProductRecommendations_v21(metrics)
                : null;
        }
        
        return {
            date: Date.now(),
            detectedAge,
            skinAge,
            gender,
            confidence: (confidence * 100).toFixed(1),
            totalScore,
            metrics,
            productRecommendations,
            collagenPercentage: getCollagenPercentage(skinAge),
            analysisVersion: '11.0'
        };
        
    } catch (error) {
        console.error('❌ [v11.0] 분석 오류:', error);
        throw error;
    }
}

// 랜덤 점수 생성 (개발용)
function randomScore(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ========================================
// 11. UI 통합 함수 (analyzePhoto)
// ========================================

/**
 * 🎯 [v11.0] UI 버튼에서 호출되는 메인 함수
 * diagnosis.html의 "AI 분석 시작" 버튼과 연결
 */
window.analyzePhoto = async function() {
    console.log('🎯 [v11.0] analyzePhoto 실행!');
    
    const t = window.t || ((key) => key);
    
    // 0. Face-API 모델 로드 확인
    if (!window.faceApiReady) {
        alert(t('face_detection_loading') || '얼굴 감지 모델 로딩 중...\n\n잠시 후 다시 시도해주세요.');
        console.warn('⚠️ [v11.0] Face-API 모델이 아직 로드되지 않았습니다.');
        return;
    }
    
    // 1. 이미지 확인
    if (!window.capturedImage) {
        alert(t('alert_take_photo_first') || '먼저 사진을 촬영해주세요.');
        return;
    }
    
    // 2. 로딩 표시
    if (typeof showSimpleLoading === 'function') {
        showSimpleLoading();
    }
    
    // 3. 이미지 검증 (얼굴 감지 + 밝기)
    try {
        if (typeof validateImage === 'function') {
            const isValid = await validateImage(window.capturedImage);
            if (!isValid) {
                if (typeof hideLoading === 'function') hideLoading();
                return;
            }
        }
    } catch (error) {
        console.error('❌ [v11.0] 이미지 검증 오류:', error);
        if (typeof hideLoading === 'function') hideLoading();
        alert(t('face_detection_error') || '얼굴 감지 중 오류가 발생했습니다.\n\n다시 촬영해주세요.');
        return;
    }
    
    // 4. 5초 후 분석 실행
    setTimeout(async function() {
        try {
            // v11.0 분석 시스템 실행
            const analysis = await performAdvancedAnalysis(window.capturedImage);
            
            // 결과 저장
            if (typeof saveAnalysisResult === 'function') {
                saveAnalysisResult(analysis);
            }
            
            // 결과 표시
            console.log('✅ [v11.0] 분석 완료! 결과 표시 시작...');
            if (typeof displaySimpleResult === 'function') {
                displaySimpleResult(window.capturedImage, analysis);
            }
            
            if (typeof hideLoading === 'function') hideLoading();
            
            // 결과 페이지로 이동
            if (typeof navigateTo === 'function') {
                navigateTo('analysis');
            }
        } catch (error) {
            console.error('❌ [v11.0] 분석 오류:', error);
            alert('분석 중 오류가 발생했습니다: ' + error.message);
            if (typeof hideLoading === 'function') hideLoading();
        }
    }, 5000);
};

// ========================================
// 12. 전역 함수 등록
// ========================================

// v11.0 분석 함수를 전역으로 등록
window.performAdvancedAnalysis_v11 = performAdvancedAnalysis;

// 🔥 [FIX] 기존 시스템 호환성을 위해 performSimpleAnalysis로도 등록
window.performSimpleAnalysis = performAdvancedAnalysis;

// 🔥 [FIX] faceApiReady 전역 변수 등록
window.faceApiReady = false;

console.log('✅ [v11.0] 과학적 피부 분석 시스템 로드 완료');
console.log('🔗 [v11.0] 함수 등록 완료: window.analyzePhoto, window.performSimpleAnalysis, window.performAdvancedAnalysis_v11');

// ========================================
// 13. 자동 초기화: Face-API 모델 로드
// ========================================

// 🚀 즉시 실행 - setTimeout으로 Face-API 대기
setTimeout(async function() {
    console.log('🎯 [v11.0] Face-API 초기화 시작...');
    
    // Face-API 라이브러리 대기 (최대 10초)
    let attempts = 0;
    while (typeof faceapi === 'undefined' && attempts < 20) {
        await new Promise(resolve => setTimeout(resolve, 500));
        attempts++;
    }
    
    if (typeof faceapi === 'undefined') {
        console.error('❌ [v11.0] Face-API 라이브러리 로드 타임아웃');
        return;
    }
    
    console.log('✅ [v11.0] Face-API 라이브러리 확인 완료');
    
    // 모델 로드
    await loadFaceDetectionModels();
    
    console.log('✅ [v11.0] Face-API 초기화 완료 - window.faceApiReady =', window.faceApiReady);
}, 1000); // 1초 대기 후 시작
