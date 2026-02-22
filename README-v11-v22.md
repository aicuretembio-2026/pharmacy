# CURETEMBIO AI 피부 진단 시스템 v11.0 + v22.0

## 📋 업데이트 내역 (2026-02-17)

### ✨ 주요 개선사항

#### 1. **과학적 나이 기반 점수 시스템 (analysis-v11.js)**
- ✅ Face-API를 활용한 실제 나이 + 성별 자동 감지
- ✅ 비선형 콜라겐 감소 곡선 적용 (과학 논문 기반)
- ✅ 연령대별 기준 점수 (Baseline Scores) 적용
  - 10대: 높은 기준 (평균 88-95점)
  - 20-30대: 보통 기준 (평균 82-90점)
  - 40-50대: 낮은 기준 (평균 55-75점)
  - 60-70대: 매우 낮은 기준 (평균 35-60점)
  - 70대+: 현실적 기준 (평균 25-50점)
- ✅ 성별 보정 계수 적용 (남성/여성 피부 특성 반영)
- ✅ 계절/환경 보정 (여름 트러블, 겨울 건조)
- ✅ 지표 간 상관관계 보정 (주름↔탄력, 수분↔민감도)
- ✅ 가중치 기반 총점 계산 (중요 지표에 더 높은 가중치)

#### 2. **2개 제품 추천 시스템 (recommendation-v22.js)**
- ✅ 항상 정확히 2개 제품 추천
- ✅ 제품 조합 규칙:
  - **같은 번호**: EXOSOME + RED 조합만 허용 (이중 케어)
  - **다른 번호**: 자유롭게 조합 가능
- ✅ 특수 케이스 처리:
  - **청소년 (<20세)**: RED 라인 우선 추천
  - **임신/수유 (25-45세 여성)**: RED 라인 권장
  - **민감성 피부**: RED 라인 강제
- ✅ 케어 강도별 추천:
  - **Extreme (<35점)**: EXOSOME + EXOSOME
  - **Intensive (35-50점)**: EXOSOME + RED
  - **Moderate (50-65점)**: EXOSOME + RED or RED + RED
  - **Light (65-75점)**: RED + RED
  - **Prevention (75점+)**: RED + RED

---

## 🗂️ 파일 구조

```
js/
├── analysis-v11.js           [신규] 과학적 나이 기반 분석 시스템
│   ├── 콜라겐 감소 곡선
│   ├── 연령대별 기준 점수
│   ├── 성별/계절/상관관계 보정
│   └── Face-API 나이+성별 감지
│
├── recommendation-v22.js      [신규] 2개 제품 추천 시스템
│   ├── 2개 제품 조합 로직
│   ├── 특수 케이스 처리 (청소년/민감성)
│   ├── 시너지 계산
│   └── 사용 가이드 생성
│
├── analysis-v10.js           [기존] 기본 분석 시스템
├── recommendation-v21.js     [기존] 점수대별 추천 시스템
└── products.js               [기존] 제품 데이터베이스
```

---

## 🚀 사용 방법

### 1. HTML에 스크립트 추가

```html
<!-- Face-API (나이+성별 감지) -->
<script src="https://cdn.jsdelivr.net/npm/@vladmandic/face-api/dist/face-api.min.js"></script>

<!-- 제품 데이터베이스 -->
<script src="js/products.js"></script>

<!-- 신규 분석 시스템 v11.0 -->
<script src="js/analysis-v11.js"></script>

<!-- 신규 추천 시스템 v22.0 -->
<script src="js/recommendation-v22.js"></script>
```

### 2. 분석 실행

```javascript
// 이미지 촬영 후
const imageData = capturedImage; // base64 data URL

// v11.0 분석 실행
const result = await performAdvancedAnalysis_v11(imageData);

console.log('분석 결과:', result);
/*
{
  date: 1708153200000,
  detectedAge: 35,
  skinAge: 37,
  gender: "female",
  confidence: "92.3",
  totalScore: 58,
  metrics: [...],
  productRecommendations: {
    premium: {...},
    red: {...}
  },
  collagenPercentage: 85,
  analysisVersion: "11.0"
}
*/
```

---

## 📊 점수 산출 프로세스

### STEP 1: Face-API 나이 감지
```
입력: 이미지 (base64)
↓
Face-API 분석
↓
출력: 나이(35세), 성별(여성), 신뢰도(92%)
```

### STEP 2: 이미지 분석
```
입력: 이미지
↓
10가지 지표 분석 (수분, 탄력, 주름, 모공...)
↓
출력: Raw Scores (50-85 범위)
```

### STEP 3: 스킨 에이지 계산
```
입력: 감지된 나이(35세) + Raw Scores 평균(62점)
↓
피부 상태 보정: 62점 → +2세
↓
출력: 스킨 에이지(37세)
```

### STEP 4: 나이별 기준 점수 적용
```
스킨 에이지(37세) → 30대 기준 점수
↓
주름: 85점 (기준)
탄력: 82점 (기준)
수분: 78점 (기준)
...
```

### STEP 5: 개인 편차 적용
```
기준 점수 + (Raw Score - 50) * 0.3
↓
주름: 85 + (65-50)*0.3 = 85 + 4.5 = 89.5 → 90점
탄력: 82 + (60-50)*0.3 = 82 + 3 = 85점
수분: 78 + (70-50)*0.3 = 78 + 6 = 84점
```

### STEP 6: 성별 보정
```
여성 계수 적용
↓
주름: 90 * 1.1 = 99 → 99점
탄력: 85 * 0.95 = 81점
수분: 84 * 1.08 = 91점
```

### STEP 7: 계절 보정 (2월)
```
겨울 보정
↓
수분: 91 + 8 = 99점 (건조 환경 고려)
민감도: +5점
```

### STEP 8: 상관관계 보정
```
주름 ↔ 탄력 (상관계수 0.85)
수분 ↔ 민감도 (상관계수 -0.48)
↓
최종 점수 미세 조정
```

### STEP 9: 가중 평균 총점
```
탄력(0.20) * 81 = 16.2
수분(0.18) * 99 = 17.8
주름(0.17) * 99 = 16.8
...
↓
총점: 58점
```

---

## 🎯 제품 추천 예시

### 예시 1: 17세 청소년 (트러블 심함)
```
입력:
- 나이: 17세
- 총점: 62점
- 트러블: 35점 (심각)
- 홍조: 42점

처리:
→ 청소년 감지 → RED 라인 강제

출력:
- RED 7번 (진정 케어)
- RED 3번 (색소침착 예방)

이유: "청소년 피부는 저자극 일상 케어가 중요합니다. RED 라인을 우선 권장합니다."
```

### 예시 2: 35세 여성 (주름 시작)
```
입력:
- 나이: 35세
- 총점: 58점
- 주름: 52점
- 탄력: 48점

처리:
→ Moderate 케어 강도
→ 같은 번호(5번) → EXOSOME + RED

출력:
- EXOSOME 5번 (집중 탄력 케어)
- RED 5번 (일상 탄력 관리)

사용법:
- 아침: RED 5번
- 저녁: EXOSOME 5번
- 기간: 8-12주
```

### 예시 3: 72세 여성 (전반적 노화)
```
입력:
- 나이: 72세
- 총점: 35점
- 주름: 28점
- 탄력: 30점

처리:
→ Extreme 케어 강도
→ 다른 번호(5, 7) → EXOSOME + EXOSOME

출력:
- EXOSOME 5번 (탄력 집중)
- EXOSOME 7번 (수분+진정)

주의사항: "피부 턴오버 속도가 느려 12주 이상 소요될 수 있습니다."
```

---

## 🔬 과학적 근거

### 1. 콜라겐 감소 곡선
- 출처: "Intrinsic and Extrinsic Factors in Skin Ageing" (2012)
- 20대: 100% → 60대: 35% → 70대+: 25%

### 2. 성별 차이
- Dao & Kazin (2007): 남성 피부 두께 25% 더 두꺼움
- 콜라겐 밀도: 남성 20% 높음
- 피지 분비: 남성 40-70% 많음

### 3. 계절 영향
- Rawlings & Harding (2004): 겨울 TEWL 40-60% 증가
- 여름 피지 분비: 겨울 대비 50-70% 증가

---

## ⚙️ 설정 (필요 시 조정)

### 나이별 기준 점수 조정 (`analysis-v11.js`)

```javascript
const AGE_BASELINES = {
    wrinkles: [95, 92, 85, 70, 50, 35, 25],  // [10대, 20대, ..., 70대+]
    elasticity: [92, 90, 82, 68, 48, 35, 28],
    // ... 다른 지표들
};
```

### 가중치 조정 (`analysis-v11.js`)

```javascript
const METRIC_WEIGHTS = {
    elasticity: 0.20,    // 탄력 (가장 중요)
    moisture: 0.18,      // 수분
    wrinkles: 0.17,      // 주름
    pigmentation: 0.10,  // 색소침착
    // ...
};
```

### 케어 강도 기준점 조정 (`recommendation-v22.js`)

```javascript
function getCareIntensity(totalScore, age) {
    let thresholds = {
        extreme: 35,      // 35점 미만
        intensive: 50,    // 50점 미만
        moderate: 65,     // 65점 미만
        light: 75         // 75점 미만
    };
    // ...
}
```

---

## 🧪 테스트 시나리오

### 시나리오 1: 15세 청소년 (트러블)
- **예상 총점**: 65점
- **예상 추천**: RED 7번 + RED 3번
- **이유**: 청소년 감지 → RED 라인 강제

### 시나리오 2: 28세 여성 (건강)
- **예상 총점**: 78점
- **예상 추천**: RED 5번 + RED 7번
- **이유**: 예방 관리

### 시나리오 3: 50세 여성 (주름/색소)
- **예상 총점**: 48점
- **예상 추천**: EXOSOME 5번 + RED 3번
- **이유**: 집중 케어 (주름) + 보조 케어 (색소)

### 시나리오 4: 70세 여성 (전반적 노화)
- **예상 총점**: 38점
- **예상 추천**: EXOSOME 5번 + EXOSOME 7번
- **이유**: 극도 집중 케어

---

## 📝 다음 단계

### 1. 통합 테스트
- [ ] `diagnosis.html`에 v11.0 + v22.0 스크립트 추가
- [ ] 기존 `analysis-v10.js` 비활성화 (백업 유지)
- [ ] 다양한 나이대 이미지로 테스트

### 2. UI 개선
- [ ] 나이/성별 표시 UI 추가
- [ ] "스킨 에이지" vs "실제 나이" 비교 표시
- [ ] 콜라겐 비율 게이지 추가

### 3. 다국어 지원
- [ ] 추천 이유 다국어 번역 추가
- [ ] 사용 가이드 다국어 번역
- [ ] 주의사항 다국어 번역

### 4. 성능 최적화
- [ ] Face-API 모델 캐싱
- [ ] 분석 속도 개선 (목표: 5초 이내)

---

## 🛠️ 문제 해결

### Q1: Face-API 모델 로드 실패
**증상**: "Face-API 모델이 로드되지 않았습니다" 에러

**해결**:
```javascript
// 1. face-api.js CDN 확인
<script src="https://cdn.jsdelivr.net/npm/@vladmandic/face-api/dist/face-api.min.js"></script>

// 2. 모델 수동 재로드
loadFaceDetectionModels();

// 3. 콘솔 확인
console.log('faceApiReady:', faceApiReady);
```

### Q2: 점수가 너무 높거나 낮음
**해결**:
```javascript
// AGE_BASELINES 값 조정 (analysis-v11.js)
const AGE_BASELINES = {
    wrinkles: [95, 92, 85, 70, 50, 35, 25],  // 값 조정
    // ...
};
```

### Q3: 제품 추천이 1개만 나옴
**해결**:
```javascript
// recommendation-v22.js에서 로그 확인
console.log('문제 지표:', problems);
console.log('제품 조합:', combo);

// decideTwoProductCombo 함수 검토
```

---

## 📞 연락처

- **Email**: curetembio@gmail.com
- **운영 시간**: 평일 10:00-17:00
- **공식 사이트**: www.curetembio.com

---

**Version**: 11.0 + 22.0  
**Last Updated**: 2026-02-17  
**Author**: CURETEMBIO AI Research Team
