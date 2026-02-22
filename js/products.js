/* ===========================
   EXOBIO 357 제품 데이터베이스
   공식 제품 정보 (2026-01-21 업데이트)
   =========================== */

// 제품 라인 정보
const PRODUCT_LINE_INFO = {
    premium: {
        name: 'EXOBIO EXOSOME 라인',
        fullName: 'EXOSOME 엑소좀 357 앰플',
        description: '스킨케어 효과를 한 단계 끌어올리는 업그레이드 EXOSOME 엑소좀 357 앰플',
        usage: '주 3~4회 또는 필요시',
        usageDetail: '집중 케어가 필요할 때 사용하는 EXOSOME 앰플입니다.',
        volume: '5ML × 5EA'
    },
    red: {
        name: 'EXOBIO RED 라인',
        fullName: '레드 357 앰플',
        description: '매일 쓰기 좋게 설계된 데일리 레드 357 앰플',
        usage: '매일',
        usageDetail: '매일 부담 없이 사용할 수 있는 데일리 케어 앰플입니다.',
        volume: '15ML × 2EA'
    }
};

// 사용 순서 가이드
const USAGE_GUIDE = {
    steps: [
        { step: 1, name: '클렌징', description: '깨끗하게 세안합니다' },
        { step: 2, name: '추천제품사용', description: 'EXOBIO 앰플을 첫 단계로 사용합니다', highlight: true },
        { step: 3, name: '기존 사용제품', description: '평소 사용하시던 제품으로 마무리합니다' }
    ],
    frequency: {
        premium: '주 3~4회 또는 필요시',
        red: '매일 사용 권장'
    },
    contact: {
        title: '상담 문의',
        name: '큐어템바이오 피부연구소',
        email: 'curetembio@gmail.com',
        website: 'www.curetembio.com',
        shop: 'www.exobio.net',
        hours: '평일 10:00~17:00',
        description: '전문가 상담이 필요하시면 이메일로 연락주세요'
    }
};

// ⭐ EXOBIO EXOSOME 357 제품 라인
const EXOBIO_PREMIUM = [
    {
        id: 'premium-3',
        number: 3,
        name: 'EXOBIO EXOSOME 3번',
        fullName: '엑소좀 비타 미백앰플',
        koreanName: '엑소좀 비타 미백앰플',
        japaneseName: 'エクソームビタブライトニングアンプル',
        chineseName: '外泌体VITA美白精华',
        englishName: 'EXOSOME VITA AMPOULE 5ML×5EA',
        category: '미백/잡티/기미',
        keyFeature: '첫단계 엑소좀 UP',
        mainIngredients: [
            { name: 'VITA', amount: '620,000PPM', english: 'VITA 620,000PPM', badge: 'VITA+EXOSOME 620,000PPM' },
            { name: '나이아신아마이드', amount: '50,000PPM', english: 'Niacinamide 50,000PPM' }
        ],
        benefits: ['미백', '잡티', '기미', 'Whitening', 'Blemishes and freckles'],
        benefitsKorean: '미백/잡티/기미',
        benefitsJapanese: '美白/黄褐斑/斑痕',
        benefitsChinese: '美白/色斑/雀斑',
        benefitsEnglish: 'Whitening/Blemishes and freckles',
        skinTypes: ['모든 피부', '칙칙한 피부', '색소침착'],
        concerns: ['색소침착', '칙칙함', '잡티', '기미', '피부톤 불균일'],
        description: '맑고 환한 피부를 위한 브라이트닝 집중 케어 (피부과 약국 전용)',
        volume: '5ML × 5EA',
        usage: '주 3~4회 또는 필요시',
        image: 'images/premium-3-vita.jpg',
        detailImage: 'images/premium-3-vita.jpg',
        productGuide: 'images/exobio-premium-product-guide.jpg',
        labelColor: '노란색/금색 배경',
        backgroundColor: 'yellow-gold',
        position: 'right',
        certifications: ['Only at Dermatology Pharmacy', 'DM DERMATOLOGY', 'Official', 'EXOSOME'],
        score: { brightness: 95, pigmentation: 90, tone: 88 },
        // AI 분석 지표 매칭
        matchMetrics: ['색소침착', '톤 균일도', '모공']
    },
    {
        id: 'premium-5',
        number: 5,
        name: 'EXOBIO EXOSOME 5번',
        fullName: '엑소좀 피디알엔 탄력앰플',
        koreanName: '엑소좀 피디알엔 탄력앰플',
        japaneseName: 'エクソソームPDRN弾力アンプル',
        chineseName: '外泌体PDRN膨力精华',
        englishName: 'EXOSOME PDRN AMPOULE 5ML×5EA',
        category: '탄력/노화/리프팅',
        keyFeature: '첫단계 엑소좀 UP',
        mainIngredients: [
            { name: 'PDRN', amount: '50,000PPM', english: 'PDRN 50,000PPM', badge: 'PDRN+EXOSOME 50,000PPM' },
            { name: 'CICA-EXO', amount: '5,000PPM', english: 'CICA-EXO 5,000PPM' }
        ],
        benefits: ['탄력', '노화', '리프팅', 'Elasticity', 'Lifting', 'Anti-aging'],
        benefitsKorean: '탄력/노화/리프팅',
        benefitsJapanese: '弾力/アンチエイジング/リフティング',
        benefitsChinese: '弹性/抗衰老/提升',
        benefitsEnglish: 'Elasticity/Lifting/Anti-aging',
        skinTypes: ['성숙 피부', '탄력 저하', '주름 피부', '모든 피부'],
        concerns: ['주름', '처짐', '탄력 상실', '노화 징후'],
        description: '눈에 띄는 주름 개선과 탄력 강화를 위한 안티에이징 솔루션 (피부과 약국 전용)',
        volume: '5ML × 5EA',
        usage: '주 3~4회 또는 필요시',
        image: 'images/premium-5-pdrn.jpg',
        detailImage: 'images/premium-5-pdrn.jpg',
        productGuide: 'images/exobio-premium-product-guide.jpg',
        labelColor: '빨간색 배경',
        backgroundColor: 'red',
        position: 'center',
        certifications: ['Only at Dermatology Pharmacy', 'DM DERMATOLOGY', 'EXOSOME'],
        score: { wrinkles: 92, elasticity: 90, firmness: 88 },
        // AI 분석 지표 매칭
        matchMetrics: ['주름', '탄력', '피부결']
    },
    {
        id: 'premium-7',
        number: 7,
        name: 'EXOBIO EXOSOME 7번',
        fullName: '엑소좀 EXOSOME 토탈앰플',
        koreanName: '엑소좀 EXOSOME 토탈앰플',
        japaneseName: 'エクソソームプレミアムトータルアンプル',
        chineseName: '外泌体高端全效精华',
        englishName: 'EXOSOME PREMIUM TOTAL AMPOULE 5ML×5EA',
        category: '보습/진정/피부방벽',
        keyFeature: '첫단계 엑소좀 UP',
        mainIngredients: [
            { name: 'CICA', amount: '760,000PPM', english: 'CICA 760,000PPM', badge: 'CICA+EXOSOME 760,000PPM' }
        ],
        benefits: ['보습', '진정', '피부방벽', 'Moisturizing', 'Soothing', 'supports barrier repair'],
        benefitsKorean: '보습/진정/피부방벽',
        benefitsJapanese: '水分/鎮静/壁の屏障',
        benefitsChinese: '保湿/镇静/障碍强化',
        benefitsEnglish: 'Moisturizing/Soothing/supports barrier repair',
        skinTypes: ['민감성', '건조 피부', '손상 피부', '모든 피부'],
        concerns: ['건조함', '민감', '홍조', '피부 장벽 손상', '자극'],
        description: '민감하고 손상된 피부 장벽을 복구하고 강화하는 토탈 케어 (피부과 약국 전용)',
        volume: '5ML × 5EA',
        usage: '주 3~4회 또는 필요시',
        image: 'images/premium-7-cica.jpg',
        detailImage: 'images/premium-7-cica.jpg',
        productGuide: 'images/exobio-premium-product-guide.jpg',
        labelColor: '초록색/청록색 배경',
        backgroundColor: 'green-teal',
        position: 'left',
        certifications: ['Only at Dermatology Pharmacy', 'DM DERMATOLOGY', 'EXOSOME'],
        score: { moisture: 94, sensitivity: 93, barrier: 95 },
        // AI 분석 지표 매칭
        matchMetrics: ['수분', '민감도', '홍조', '여드름']
    }
];

// 🔴 EXOBIO RED 357 제품 라인
const EXOBIO_RED = [
    {
        id: 'red-3',
        number: 3,
        name: 'EXOBIO RED 3번',
        fullName: '비타 미백앰플 (VITA美白精华)',
        koreanName: '비타 미백앰플',
        japaneseName: 'ビタブライトニングアンプル',
        chineseName: 'VITA美白精华',
        englishName: 'VITA AMPOULE 15ML×2EA',
        category: '미백/잡티/기미',
        mainIngredients: [
            { name: 'VITA', amount: '620,000PPM', english: 'VITA 620,000PPM', badge: true }
        ],
        benefits: ['미백', '잡티', '기미', 'Whitening', 'Blemishes and freckles'],
        benefitsKorean: '미백/잡티/기미',
        benefitsJapanese: '美白/黄褐斑/斑痕',
        benefitsChinese: '美白/色斑/雀斑',
        benefitsEnglish: 'Whitening/Blemishes and freckles',
        skinTypes: ['색소침착', '칙칙한 피부', '기미 피부', '모든 피부'],
        concerns: ['기미', '잡티', '어두운 피부톤', '심한 색소침착', '색소 침착'],
        description: '완고한 색소 침착을 집중 개선하는 강력 미백 케어 (피부과 약국 전용)',
        volume: '15ML × 2EA',
        usage: '매일 사용 권장',
        image: 'images/red-3-vita.jpg',
        detailImage: 'images/red-3-vita.jpg',
        productGuide: 'images/exobio-red-product-guide.jpg',
        labelColor: '노란색 배경 (62+ VITA)',
        backgroundColor: 'yellow',
        position: 'left',
        certifications: ['Only at Dermatology Pharmacy', 'DM DERMATOLOGY'],
        score: { whitening: 96, pigmentation: 94, brightness: 92 },
        // AI 분석 지표 매칭
        matchMetrics: ['색소침착', '톤 균일도']
    },
    {
        id: 'red-5',
        number: 5,
        name: 'EXOBIO RED 5번',
        fullName: '피디알엔 탄력앰플 (PDRN膨力精华)',
        koreanName: '피디알엔 탄력앰플',
        japaneseName: 'PDRN膨力アンプル',
        chineseName: 'PDRN膨力精华',
        englishName: 'PDRN AMPOULE 15ML×2EA',
        category: '재생/보습',
        mainIngredients: [
            { name: 'PDRN', amount: '10,000PPM', english: 'PDRN 10,000PPM', badge: true },
            { name: 'HYALURON (히알루론산)', amount: '고함량', english: 'HYALURON' }
        ],
        benefits: ['재생', '보습', 'Regenerative', 'Moisture'],
        benefitsKorean: '재생/보습',
        benefitsJapanese: '再生/保湿',
        benefitsChinese: '再生/保湿',
        benefitsEnglish: 'Regenerative/Moisture',
        skinTypes: ['손상 피부', '회복기 피부', '탄력 저하', '모든 피부'],
        concerns: ['피부 손상', '회복 지연', '탄력 상실', '수분 부족', '주름'],
        description: '손상된 피부의 빠른 재생과 보습을 돕는 집중 케어 (피부과 약국 전용)',
        volume: '15ML × 2EA',
        usage: '매일 사용 권장',
        image: 'images/red-5-pdrn.jpg',
        detailImage: 'images/red-5-pdrn.jpg',
        productGuide: 'images/exobio-red-product-guide.jpg',
        labelColor: '빨간색 배경 (10000+ PDRN)',
        backgroundColor: 'red',
        position: 'center',
        certifications: ['Only at Dermatology Pharmacy', 'DM DERMATOLOGY'],
        score: { regeneration: 97, moisture: 95, elasticity: 93 },
        // AI 분석 지표 매칭
        matchMetrics: ['주름', '탄력', '수분', '피부결']
    },
    {
        id: 'red-7',
        number: 7,
        name: 'EXOBIO RED 7번',
        fullName: '모이스처 수딩앰플 (保湿镇静精华)',
        koreanName: '모이스처 수딩앰플',
        japaneseName: 'スージングモイスチャー アンプル',
        chineseName: '保湿镇静精华',
        englishName: 'MOISTURE SOOTHING AMPOULE 15ML×2EA',
        category: '보습/진정',
        mainIngredients: [
            { name: 'CICA', amount: '7,600PPM', english: 'CICA 7,600PPM', badge: true },
            { name: 'Aquatide', amount: '고함량', english: 'Aquatide' }
        ],
        benefits: ['보습', '진정', 'Moisturizing', 'Soothing'],
        benefitsKorean: '보습/진정',
        benefitsJapanese: '鎮静/水分',
        benefitsChinese: '保湿/镇静',
        benefitsEnglish: 'Moisturizing/Soothing',
        skinTypes: ['민감성', '극건성', '아토피', '손상 피부', '모든 피부'],
        concerns: ['극심한 건조', '장벽 손상', '만성 민감', '심한 홍조', '반복 자극'],
        description: '극도로 민감하고 건조한 피부를 집중 진정시키는 강력 케어 (피부과 약국 전용)',
        volume: '15ML × 2EA',
        usage: '매일 사용 권장',
        image: 'images/red-7-cica.jpg',
        detailImage: 'images/red-7-cica.jpg',
        productGuide: 'images/exobio-red-product-guide.jpg',
        labelColor: '초록색 배경 (7600+ CICA)',
        backgroundColor: 'green',
        position: 'right',
        certifications: ['Only at Dermatology Pharmacy', 'DM DERMATOLOGY', 'Official'],
        score: { moisture: 98, sensitivity: 96, barrier: 97 },
        // AI 분석 지표 매칭
        matchMetrics: ['수분', '민감도', '홍조', '여드름']
    }
];

// 📊 AI 분석 지표 → 제품 추천 매칭 테이블
const AI_METRIC_TO_PRODUCT_MATCHING = {
    '색소침착': {
        priority1: 'red-3',     // RED 3번 (강력 미백 62+)
        priority2: 'premium-3', // EXOSOME 3번 (VITA 미백)
        threshold: 75           // 75점 미만 시 추천
    },
    '톤 균일도': {
        priority1: 'premium-3', // EXOSOME 3번 (VITA 미백)
        priority2: 'red-3',     // RED 3번 (강력 미백)
        threshold: 75
    },
    '주름': {
        priority1: 'premium-5', // EXOSOME 5번 (PDRN 탄력)
        priority2: 'red-5',     // RED 5번 (PDRN 10000+)
        threshold: 75
    },
    '탄력': {
        priority1: 'premium-5', // EXOSOME 5번 (PDRN 탄력)
        priority2: 'red-5',     // RED 5번 (PDRN 10000+)
        threshold: 75
    },
    '수분': {
        priority1: 'red-7',     // RED 7번 (CICA 7600+)
        priority2: 'premium-7', // EXOSOME 7번 (CICA 토탈)
        threshold: 75
    },
    '민감도': {
        priority1: 'premium-7', // EXOSOME 7번 (CICA 진정)
        priority2: 'red-7',     // RED 7번 (CICA 7600+)
        threshold: 70,          // 70점 초과 시 추천 (민감함)
        isHigherBad: true       // 점수가 높을수록 안 좋음
    },
    '홍조': {
        priority1: 'premium-7', // EXOSOME 7번 (진정)
        priority2: 'red-7',     // RED 7번 (CICA 진정)
        threshold: 70,
        isHigherBad: true
    },
    '여드름': {
        priority1: 'premium-7', // EXOSOME 7번 (진정+장벽)
        priority2: 'red-7',     // RED 7번 (진정 강화)
        threshold: 75
    },
    '모공': {
        priority1: 'premium-3', // EXOSOME 3번 (피부결)
        priority2: 'red-3',     // RED 3번 (피부 개선)
        threshold: 75
    },
    '피부결': {
        priority1: 'premium-5', // EXOSOME 5번 (탄력)
        priority2: 'red-5',     // RED 5번 (재생)
        threshold: 75
    }
};

// 📝 기본 예방 관리 추천 (건강한 피부용)
const DEFAULT_PREVENTIVE_RECOMMENDATIONS = [
    'premium-3', // EXOSOME 3번 (미백) - 피부 톤 유지 & 예방
    'premium-7'  // EXOSOME 7번 (토탈) - 피부 건강 유지
];

// 🎯 제품 추천 로직 함수 (설문 데이터 기반 강화!)
// ⚠️ [v21.0] getProductRecommendations 함수는 js/recommendation-v21.js로 이동됨
// 이 함수는 더 이상 사용되지 않습니다. recommendation-v21.js가 대체합니다.

// 제품 ID로 제품 찾기
function findProductById(productId) {
    const allProducts = [...EXOBIO_PREMIUM, ...EXOBIO_RED];
    return allProducts.find(p => p.id === productId);
}

// 매칭 점수 계산
function calculateMatchScore(score, threshold, isHigherBad = false) {
    if (isHigherBad) {
        // 민감도/홍조: 점수가 높을수록 매칭도 높음
        return Math.min(95, 70 + (score - threshold));
    } else {
        // 일반: 점수가 낮을수록 매칭도 높음
        const gap = threshold - score;
        return Math.min(95, 70 + gap);
    }
}

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PRODUCT_LINE_INFO,
        USAGE_GUIDE,
        EXOBIO_PREMIUM,
        EXOBIO_RED,
        AI_METRIC_TO_PRODUCT_MATCHING,
        DEFAULT_PREVENTIVE_RECOMMENDATIONS,
        // getProductRecommendations는 recommendation-v21.js에서 제공
        findProductById
    };
}
