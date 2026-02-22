/* ===========================
   CURETEMBIO 제품 추천 시스템 v22.0
   2026-02-17 - 2개 제품 추천 + 나이 기반 로직
   
   핵심 규칙:
   1. 항상 정확히 2개 제품 추천
   2. 같은 번호 허용 조건: EXOSOME + RED 조합만
   3. 다른 번호는 자유롭게 조합 가능
   4. 청소년/임신/민감성: RED 라인 우선
   =========================== */

console.log('🚀 [v22.0] 제품 추천 시스템 로드 시작');

// ========================================
// 1. 지표 → 제품 번호 매핑
// ========================================

/**
 * AI 분석 지표를 제품 번호(3/5/7)로 매핑
 */
function mapMetricToProductNumber(metricKey) {
    const mapping = {
        // 3번: 브라이트닝 (색소/톤)
        'metric_3': 3,         // 색소침착
        'metric_1': 3,         // 톤 균일도
        'metric_brightness': 3, // 밝기
        
        // 5번: 안티에이징 (주름/탄력)
        'metric_4': 5,         // 주름
        'metric_5': 5,         // 탄력
        
        // 7번: 진정/수분/장벽 (수분/민감/홍조/트러블/모공)
        'metric_6': 7,         // 수분
        'metric_7': 7,         // 민감도
        'metric_8': 7,         // 홍조
        'metric_9': 7,         // 트러블
        'metric_10': 7,        // 모공
        'metric_texture': 7    // 텍스처
    };
    
    return mapping[metricKey] || 7; // 기본값: 7번
}

// ========================================
// 2. 케어 강도 결정
// ========================================

/**
 * 총점 + 나이를 기반으로 케어 강도 결정
 */
function getCareIntensity(totalScore, age) {
    // 나이별 기준점 조정
    let thresholds = {
        extreme: 35,
        intensive: 50,
        moderate: 65,
        light: 75
    };
    
    // 젊을수록 기준 높게, 나이 들수록 낮게
    if (age < 30) {
        thresholds = {
            extreme: 30,
            intensive: 45,
            moderate: 60,
            light: 75
        };
    } else if (age >= 60) {
        thresholds = {
            extreme: 45,
            intensive: 60,
            moderate: 75,
            light: 85
        };
    }
    
    if (totalScore < thresholds.extreme) return "extreme";
    if (totalScore < thresholds.intensive) return "intensive";
    if (totalScore < thresholds.moderate) return "moderate";
    if (totalScore < thresholds.light) return "light";
    return "prevention";
}

// ========================================
// 3. 문제 지표 추출
// ========================================

/**
 * 가장 낮은 점수 2-3개 지표 추출
 */
function findProblemMetrics(metrics) {
    return [...metrics]
        .filter(m => m.score < 70)  // 70점 미만만
        .sort((a, b) => a.score - b.score)
        .slice(0, 3);  // 최대 3개
}

// ========================================
// 4. 제품 조합 결정 (핵심 로직)
// ========================================

/**
 * 🎯 2개 제품 조합 결정 함수
 * 
 * 규칙:
 * - 같은 번호: EXOSOME + RED 조합만 허용
 * - 다른 번호: 자유롭게 조합
 * - 청소년/민감성: RED 라인 강제
 */
function decideTwoProductCombo(num1, num2, intensity, age, gender, problems) {
    const sameNumber = (num1 === num2);
    
    // 🚨 특수 케이스 1: 청소년 (20세 미만)
    if (age < 20) {
        console.log('🧒 청소년 감지 → RED 라인 우선');
        return [
            { line: "RED", number: num1, reason: "청소년 피부 저자극 케어" },
            { line: "RED", number: num2 || (num1 === 7 ? 3 : 7), reason: "일상 보조 케어" }
        ];
    }
    
    // 🚨 특수 케이스 2: 민감성 피부 (민감도 점수 60 미만)
    const sensitiveMetric = problems.find(p => p.key === 'metric_7' && p.score < 60);
    if (sensitiveMetric) {
        console.log('🛡️ 민감성 피부 감지 → RED 라인 우선');
        return [
            { line: "RED", number: num1, reason: "민감 피부 저자극 케어" },
            { line: "RED", number: num2 || 7, reason: "피부 진정 케어" }
        ];
    }
    
    // ========== 일반 케이스 ==========
    
    // 같은 번호인 경우 → EXOSOME + RED 조합
    if (sameNumber) {
        if (intensity === "extreme" || intensity === "intensive") {
            // 집중 케어: EXOSOME + RED (같은 번호)
            return [
                { line: "EXOSOME", number: num1, reason: "집중 케어 (엑소좀 5%)" },
                { line: "RED", number: num1, reason: "일상 케어 병행" }
            ];
        } else {
            // 일상 케어: RED + RED (다른 번호)
            const altNumber = num1 === 3 ? 7 : (num1 === 5 ? 3 : 5);
            return [
                { line: "RED", number: num1, reason: "메인 일상 케어" },
                { line: "RED", number: altNumber, reason: "보조 케어" }
            ];
        }
    }
    
    // 다른 번호인 경우 → 강도별 조합
    if (intensity === "extreme") {
        // 극도 집중: EXOSOME + EXOSOME (다른 번호)
        return [
            { line: "EXOSOME", number: num1, reason: "1차 집중 케어" },
            { line: "EXOSOME", number: num2, reason: "2차 집중 케어" }
        ];
    } else if (intensity === "intensive") {
        // 집중 케어: EXOSOME + RED (다른 번호)
        return [
            { line: "EXOSOME", number: num1, reason: "주 집중 케어" },
            { line: "RED", number: num2, reason: "보조 일상 케어" }
        ];
    } else if (intensity === "moderate") {
        // 복합 케어: EXOSOME + RED 또는 RED + RED
        if (age >= 40) {
            return [
                { line: "EXOSOME", number: num1, reason: "주중 집중 케어" },
                { line: "RED", number: num2, reason: "주말 유지 케어" }
            ];
        } else {
            return [
                { line: "RED", number: num1, reason: "메인 케어" },
                { line: "RED", number: num2, reason: "보조 케어" }
            ];
        }
    } else {
        // 예방 케어: RED + RED
        return [
            { line: "RED", number: num1, reason: "일상 예방 케어" },
            { line: "RED", number: num2, reason: "피부 건강 유지" }
        ];
    }
}

// ========================================
// 5. 제품 ID 찾기
// ========================================

/**
 * line + number로 제품 ID 생성
 */
function getProductId(line, number) {
    const prefix = line === "EXOSOME" ? "premium" : "red";
    return `${prefix}-${number}`;
}

/**
 * 제품 ID로 제품 객체 찾기
 */
function findProductById(productId) {
    const allProducts = [...EXOBIO_PREMIUM, ...EXOBIO_RED];
    return allProducts.find(p => p.id === productId);
}

// ========================================
// 6. 시너지 계산
// ========================================

/**
 * 2개 제품 조합의 시너지 효과 계산
 */
function calculateSynergy(product1, product2) {
    const combo = [product1, product2];
    
    // 같은 번호 + EXOSOME & RED → 최고 시너지
    if (product1.number === product2.number && 
        product1.line !== product2.line) {
        return {
            score: 1.5,
            effect: "집중 케어 + 일상 관리 이중 효과",
            description: "EXOSOME(엑소좀 5%)으로 집중 개선 후, RED 라인으로 효과 유지"
        };
    }
    
    // 다른 번호 조합 시너지
    const synergyMatrix = {
        "3-5": { score: 0.75, effect: "브라이트닝 + 탄력 상호보완" },
        "3-7": { score: 0.70, effect: "색소 + 진정 균형 케어" },
        "5-7": { score: 0.80, effect: "탄력 + 수분 최적 조합" }
    };
    
    const key = [
        Math.min(product1.number, product2.number),
        Math.max(product1.number, product2.number)
    ].join('-');
    
    return synergyMatrix[key] || { score: 0.5, effect: "기본 병행 케어" };
}

// ========================================
// 7. 사용 가이드 생성
// ========================================

/**
 * 제품 사용 가이드 생성
 */
function generateUsageGuide(combo, intensity, age) {
    const hasExosome = combo.some(p => p.line === "EXOSOME");
    
    if (hasExosome) {
        const exoProd = combo.find(p => p.line === "EXOSOME");
        const redProd = combo.find(p => p.line === "RED") || exoProd;
        
        if (intensity === "extreme" || intensity === "intensive") {
            return {
                morning: `RED ${redProd.number}번 (가벼운 일상 케어)`,
                evening: `EXOSOME ${exoProd.number}번 (집중 케어)`,
                frequency: "매일",
                duration: "8-12주 집중 사용",
                note: "EXOSOME은 피부 턴오버 시간(28-45일) 고려 시 8주 이상 사용 권장"
            };
        } else {
            return {
                weekday: `EXOSOME ${exoProd.number}번 (월/수/금 저녁)`,
                weekend: `RED ${redProd.number}번 (화/목/토/일 저녁)`,
                morning: "가벼운 수분 크림 또는 자외선 차단제",
                frequency: "주 3-4회 (EXOSOME), 매일 (RED)",
                duration: "12주 이상 장기 관리"
            };
        }
    } else {
        // RED only
        return {
            morning: `RED ${combo[0].number}번`,
            evening: `RED ${combo[1].number}번`,
            frequency: "매일 아침/저녁",
            duration: "지속적 일상 케어",
            note: "저자극 성분으로 장기 사용 안전"
        };
    }
}

// ========================================
// 8. 예상 결과 생성
// ========================================

/**
 * 제품 사용 후 예상 개선 효과
 */
function getExpectedResult(combo, problems, age) {
    const hasExosome = combo.some(p => p.line === "EXOSOME");
    
    const improvements = problems.map(problem => {
        const targetProduct = combo.find(p => 
            mapMetricToProductNumber(problem.key) === p.number
        );
        
        let expectedImprovement = 0;
        
        if (targetProduct) {
            if (targetProduct.line === "EXOSOME") {
                expectedImprovement = 15 + (100 - problem.score) * 0.3; // 최대 30점
            } else {
                expectedImprovement = 8 + (100 - problem.score) * 0.15; // 최대 15점
            }
            
            // 나이 보정
            if (age < 30) expectedImprovement *= 1.2;
            else if (age > 60) expectedImprovement *= 0.7;
        }
        
        return {
            metric: problem.name,
            current: problem.score,
            expected: Math.min(95, problem.score + expectedImprovement),
            weeks: hasExosome ? "8-12주" : "12-16주"
        };
    });
    
    return {
        improvements,
        totalScoreDelta: improvements.reduce((sum, i) => 
            sum + (i.expected - i.current), 0
        ) / (problems.length || 1),
        timeline: hasExosome ? "2-3개월" : "3-4개월",
        confidence: calculateConfidence(combo, problems, age)
    };
}

/**
 * 예상 효과 신뢰도 계산
 */
function calculateConfidence(combo, problems, age) {
    let confidence = 0.75;
    
    if (combo.some(p => p.line === "EXOSOME")) confidence += 0.10;
    if (age < 40) confidence += 0.05;
    else if (age > 65) confidence -= 0.10;
    
    const avgProblemScore = problems.reduce((sum, p) => sum + p.score, 0) / (problems.length || 1);
    if (avgProblemScore < 40) confidence -= 0.15;
    else if (avgProblemScore > 60) confidence += 0.10;
    
    return Math.min(0.95, Math.max(0.50, confidence));
}

// ========================================
// 9. 주의사항 생성
// ========================================

/**
 * 사용 시 주의사항 생성
 */
function generateCautions(age, gender) {
    const cautions = [];
    
    if (age < 20) {
        cautions.push("⚠️ 청소년 피부: 과도한 고농도 제품보다 저자극 일상 케어가 중요합니다.");
        cautions.push("💡 RED 라인을 우선 권장합니다.");
    }
    
    if (age >= 25 && age <= 45 && gender === "female") {
        cautions.push("⚠️ 임신/수유 중이라면 RED 라인 사용을 권장합니다.");
    }
    
    if (age >= 65) {
        cautions.push("💡 피부 턴오버 속도가 느려 개선 효과가 나타나기까지 12주 이상 소요될 수 있습니다.");
        cautions.push("⚠️ 처음 사용 시 소량 테스트 후 점진적으로 양을 늘려주세요.");
    }
    
    const month = new Date().getMonth() + 1;
    if (month >= 6 && month <= 8) {
        cautions.push("☀️ 여름철: 아침 사용 후 반드시 자외선 차단제(SPF 30 이상)를 발라주세요.");
    } else if (month === 12 || month <= 2) {
        cautions.push("❄️ 겨울철: 건조 방지를 위해 수분 크림을 추가로 사용하시는 것을 권장합니다.");
    }
    
    cautions.push("📌 효과는 개인차가 있으며, 지속적인 사용이 중요합니다.");
    cautions.push("📌 피부 트러블 발생 시 즉시 사용을 중단하고 전문의와 상담하세요.");
    
    return cautions;
}

// ========================================
// 10. 메인 추천 함수
// ========================================

/**
 * 🎯 v22.0 메인 제품 추천 함수
 */
function getProductRecommendations_v22(analysisData) {
    console.log('🎯 [v22.0] 2개 제품 추천 시작');
    
    const { metrics, totalScore, age, gender, detectedAge } = analysisData;
    
    // STEP 1: 문제 지표 찾기
    const problems = findProblemMetrics(metrics);
    console.log(`📊 문제 지표 ${problems.length}개:`, problems.map(p => `${p.name}(${p.score}점)`).join(', '));
    
    if (problems.length === 0) {
        console.log('✨ 건강한 피부 → 예방 관리 추천');
        const product1 = findProductById('red-7');
        const product2 = findProductById('red-3');
        
        return {
            products: [
                { ...product1, line: "RED", recommendReason: "건강한 피부 유지 관리" },
                { ...product2, line: "RED", recommendReason: "예방 케어" }
            ],
            synergy: { score: 0.7, effect: "건강 유지" },
            usageGuide: generateUsageGuide([{line:"RED",number:7},{line:"RED",number:3}], "light", age),
            expectedResult: null,
            cautions: generateCautions(age, gender)
        };
    }
    
    // STEP 2: 제품 번호 매핑
    const num1 = mapMetricToProductNumber(problems[0].key);
    const num2 = problems[1] 
        ? mapMetricToProductNumber(problems[1].key)
        : (num1 === 3 ? 5 : (num1 === 5 ? 7 : 3)); // 보조 번호
    
    console.log(`📦 제품 번호: ${num1}, ${num2}`);
    
    // STEP 3: 케어 강도 결정
    const intensity = getCareIntensity(totalScore, age);
    console.log(`💪 케어 강도: ${intensity}`);
    
    // STEP 4: 2개 제품 조합 결정
    const combo = decideTwoProductCombo(num1, num2, intensity, age, gender, problems);
    console.log('✅ 제품 조합:', combo);
    
    // STEP 5: 제품 객체 가져오기
    const products = combo.map(c => {
        const productId = getProductId(c.line, c.number);
        const product = findProductById(productId);
        return {
            ...product,
            line: c.line,
            recommendReason: c.reason
        };
    });
    
    // STEP 6: 시너지 계산
    const synergy = calculateSynergy(products[0], products[1]);
    
    // STEP 7: 사용 가이드 생성
    const usageGuide = generateUsageGuide(combo, intensity, age);
    
    // STEP 8: 예상 결과 생성
    const expectedResult = getExpectedResult(combo, problems, age);
    
    // STEP 9: 주의사항 생성
    const cautions = generateCautions(age, gender);
    
    console.log('✅ [v22.0] 추천 완료:', products.map(p => `${p.line} ${p.number}번`).join(' + '));
    
    // STEP 10: 결과 반환 (v10 호환 형식)
    return convertToLegacyFormat(products, synergy, usageGuide, expectedResult, cautions);
}

/**
 * v10 호환 형식으로 변환
 */
function convertToLegacyFormat(products, synergy, usageGuide, expectedResult, cautions) {
    const premium = products.find(p => p.line === "EXOSOME") || findProductById('premium-3');
    const red = products.find(p => p.line === "RED") || findProductById('red-7');
    
    return {
        premium: {
            ...premium,
            synergy,
            usageGuide,
            expectedResult
        },
        red: {
            ...red,
            synergy,
            usageGuide,
            expectedResult
        },
        metadata: {
            version: "22.0",
            productCount: products.length,
            cautions
        }
    };
}

// ========================================
// 11. 전역 등록
// ========================================

window.getProductRecommendations_v22 = getProductRecommendations_v22;

console.log('✅ [v22.0] 제품 추천 시스템 로드 완료');
