# 🧪 CURETEMBIO v11.0 + v22.0 통합 테스트 가이드

## 📋 테스트 체크리스트

### ✅ Phase 1: 파일 설치 확인

#### 1.1 필수 파일 존재 확인
```bash
✓ js/analysis-v11.js          (15KB)
✓ js/recommendation-v22.js    (14KB)
✓ README-v11-v22.md           (6KB)
```

#### 1.2 기존 파일 백업 (선택)
```bash
✓ js/analysis-v10.js → js/analysis-v10-backup.js
✓ js/recommendation-v21.js → js/recommendation-v21-backup.js
```

---

## 🚀 Phase 2: HTML 통합

### 2.1 `diagnosis.html` 스크립트 순서

**기존 구조 확인**:
```html
<!-- 얼굴 감지 라이브러리 -->
<script src="https://cdn.jsdelivr.net/npm/@vladmandic/face-api/dist/face-api.min.js"></script>

<!-- 기존 파일들 -->
<script src="js/products.js"></script>
<script src="js/image-analyzer.js"></script>
<script src="js/analysis-v10.js"></script>
<script src="js/recommendation-v21.js"></script>
<script src="js/app.js"></script>
```

**신규 v11.0 + v22.0 적용**:
```html
<!-- 얼굴 감지 라이브러리 -->
<script src="https://cdn.jsdelivr.net/npm/@vladmandic/face-api/dist/face-api.min.js"></script>

<!-- 제품 데이터베이스 -->
<script src="js/products.js"></script>

<!-- 이미지 분석 (기존) -->
<script src="js/image-analyzer.js"></script>

<!-- 🆕 신규 분석 시스템 v11.0 -->
<script src="js/analysis-v11.js"></script>

<!-- 🆕 신규 추천 시스템 v22.0 -->
<script src="js/recommendation-v22.js"></script>

<!-- 🔒 기존 시스템 (백업용, 비활성화 가능) -->
<!-- <script src="js/analysis-v10.js"></script> -->
<!-- <script src="js/recommendation-v21.js"></script> -->

<!-- 앱 메인 -->
<script src="js/app.js"></script>
```

### 2.2 `app.js` 또는 `analysis-v10.js` 수정

**기존 코드 찾기**:
```javascript
// analysis-v10.js 내부 (약 104번 라인)
const analysis = await performSimpleAnalysis(window.capturedImage);
```

**v11.0으로 교체**:
```javascript
// 🆕 v11.0 분석 시스템 사용
let analysis;
if (typeof performAdvancedAnalysis_v11 === 'function') {
    console.log('✅ v11.0 신규 분석 시스템 사용');
    analysis = await performAdvancedAnalysis_v11(window.capturedImage);
} else {
    console.warn('⚠️ v11.0 분석 시스템 없음, v10.0 폴백');
    analysis = await performSimpleAnalysis(window.capturedImage);
}
```

---

## 🧪 Phase 3: 기능 테스트

### 3.1 Face-API 모델 로드 확인

**테스트 절차**:
1. 브라우저 개발자 도구 열기 (F12)
2. Console 탭 확인
3. 다음 로그 확인:

```
✅ 정상:
📦 [v11.0] Face-API 모델 로드 시작...
✅ [v11.0] Face-API 모델 로드 완료 (나이+성별 감지)
✅ [v11.0] 과학적 피부 분석 시스템 로드 완료
✅ [v22.0] 제품 추천 시스템 로드 완료

❌ 오류:
❌ [v11.0] Face-API 모델 로드 실패: ...
→ 해결: CDN 연결 확인, 네트워크 상태 확인
```

### 3.2 나이 감지 테스트

**테스트 케이스**:

| 테스트 케이스 | 예상 나이 | 예상 성별 | 예상 총점 |
|--------------|----------|----------|----------|
| 15세 청소년 (트러블) | 15-18세 | 여성 | 60-70점 |
| 25세 여성 (건강) | 23-28세 | 여성 | 75-85점 |
| 35세 여성 (주름 시작) | 33-38세 | 여성 | 55-65점 |
| 50세 여성 (노화) | 48-53세 | 여성 | 40-50점 |
| 70세 여성 (고령) | 68-75세 | 여성 | 30-40점 |

**수동 테스트 방법**:
```javascript
// Console에서 실행
const testImage = 'data:image/jpeg;base64,...'; // 테스트 이미지
const result = await performAdvancedAnalysis_v11(testImage);

console.log('감지된 나이:', result.detectedAge);
console.log('스킨 에이지:', result.skinAge);
console.log('성별:', result.gender);
console.log('총점:', result.totalScore);
console.log('콜라겐 비율:', result.collagenPercentage + '%');
```

### 3.3 제품 추천 테스트

**케이스 1: 청소년 트러블**
```javascript
예상 입력:
- age: 17
- totalScore: 62
- 낮은 지표: 트러블(35점), 홍조(42점)

예상 출력:
- RED 7번 (진정 케어)
- RED 3번 (색소침착 예방)

검증:
✓ 2개 제품 추천됨
✓ 모두 RED 라인
✓ 이유: "청소년 피부 저자극 케어"
```

**케이스 2: 35세 주름 시작**
```javascript
예상 입력:
- age: 35
- totalScore: 58
- 낮은 지표: 주름(52점), 탄력(48점)

예상 출력:
- EXOSOME 5번 (집중 탄력 케어)
- RED 5번 (일상 탄력 관리)

검증:
✓ 2개 제품 추천됨
✓ 같은 번호(5번) → EXOSOME + RED 조합
✓ 사용 가이드 포함
```

**케이스 3: 70세 전반적 노화**
```javascript
예상 입력:
- age: 72
- totalScore: 35
- 낮은 지표: 주름(28점), 탄력(30점), 수분(40점)

예상 출력:
- EXOSOME 5번 (탄력 집중)
- EXOSOME 7번 (수분+진정)

검증:
✓ 2개 제품 추천됨
✓ 다른 번호 → EXOSOME + EXOSOME 조합
✓ 주의사항: "12주 이상 소요"
```

### 3.4 점수 분포 테스트

**목표**: 다양한 나이대에서 점수 분포 확인

```
10대: 70-90점 (건강)
20대: 65-85점 (양호)
30대: 55-75점 (보통)
40대: 45-65점 (관리 필요)
50대: 35-55점 (집중 관리)
60대: 30-50점 (적극 관리)
70대: 25-45점 (전문 케어)
```

**테스트 방법**:
```javascript
// 10명 이상 다양한 나이대 이미지로 테스트
const results = [];
for (const image of testImages) {
    const result = await performAdvancedAnalysis_v11(image);
    results.push({
        age: result.detectedAge,
        score: result.totalScore
    });
}

// 분포 확인
console.table(results);
```

---

## 🐛 Phase 4: 디버깅

### 4.1 일반적인 문제

**문제 1: "performAdvancedAnalysis_v11 is not a function"**
```
원인: analysis-v11.js 로드 실패

해결:
1. HTML에서 스크립트 순서 확인
2. Console에서 확인:
   console.log(typeof performAdvancedAnalysis_v11);
   → "function"이 나와야 함
3. 캐시 삭제 후 재로드 (Ctrl+Shift+R)
```

**문제 2: "얼굴을 감지할 수 없습니다"**
```
원인: 
- Face-API 모델 미로드
- 이미지 품질 문제
- 얼굴이 정면이 아님

해결:
1. faceApiReady 확인:
   console.log('faceApiReady:', faceApiReady);
2. 모델 재로드:
   await loadFaceDetectionModels();
3. 테스트 이미지 변경 (밝은 조명, 정면)
```

**문제 3: "점수가 모두 비슷함"**
```
원인: 
- 이미지 분석 시스템 미작동
- 랜덤 점수 사용 중

해결:
1. Console 로그 확인:
   "⚠️ 랜덤 점수 사용 (이미지 분석 미지원)"
   → 정상 (이미지 분석은 추후 연동)
2. performConsistentAnalysis 함수 연동 필요
```

**문제 4: "제품이 1개만 추천됨"**
```
원인: 
- recommendation-v22.js 미로드
- 문제 지표 0개

해결:
1. Console 확인:
   console.log(typeof getProductRecommendations_v22);
   → "function"
2. 문제 지표 확인:
   console.log('problems:', problems);
   → 최소 1개 이상 있어야 함
```

### 4.2 디버그 모드

**디버그 로그 활성화**:
```javascript
// Console에서 실행
window.DEBUG_MODE = true;

// 분석 실행 시 상세 로그 출력
const result = await performAdvancedAnalysis_v11(testImage);
```

**예상 로그**:
```
🧬 [v11.0] 과학적 피부 분석 시작
👤 감지된 나이: 35세, 성별: female, 신뢰도: 92.3%
✅ 이미지 기반 분석 성공: {...}
🧪 스킨 에이지: 37세 (실제 35세)
📊 나이별 기준 점수: {wrinkles:85, elasticity:82, ...}
📈 개인 편차 적용 점수: {wrinkles:90, elasticity:85, ...}
⚧️ 성별 보정 점수: {wrinkles:99, elasticity:81, ...}
🌦️ 계절 보정 점수: {moisture:99, ...}
🔗 상관관계 보정 점수: {...}
🎯 최종 총점: 58점
✅ [v22.0] 신규 추천 함수 사용
📊 문제 지표 2개: 주름(52점), 탄력(48점)
📦 제품 번호: 5, 5
💪 케어 강도: moderate
✅ 제품 조합: [{line:"EXOSOME",number:5}, {line:"RED",number:5}]
✅ [v22.0] 추천 완료: EXOSOME 5번 + RED 5번
```

---

## 📊 Phase 5: 성능 테스트

### 5.1 분석 속도 측정

```javascript
// 성능 테스트 함수
async function performanceTest(imageData, iterations = 5) {
    const times = [];
    
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        await performAdvancedAnalysis_v11(imageData);
        const end = performance.now();
        times.push(end - start);
    }
    
    const avg = times.reduce((a,b) => a+b) / times.length;
    console.log(`평균 분석 시간: ${avg.toFixed(0)}ms (${iterations}회)`);
    console.log(`최소: ${Math.min(...times).toFixed(0)}ms`);
    console.log(`최대: ${Math.max(...times).toFixed(0)}ms`);
}

// 실행
await performanceTest(testImage, 10);
```

**목표 성능**:
- Face-API 모델 로드: < 3초 (최초 1회)
- 얼굴 감지: < 500ms
- 점수 계산: < 100ms
- 제품 추천: < 50ms
- **총 분석 시간: < 1초** (모델 로드 후)

### 5.2 메모리 사용량 확인

```javascript
// Chrome DevTools → Memory → Take snapshot
// 분석 전후 메모리 비교

// 예상:
// - analysis-v10.js: ~2MB
// - analysis-v11.js: ~3MB (Face-API 모델 포함)
```

---

## ✅ Phase 6: 최종 체크리스트

### 6.1 기능 완성도

- [ ] Face-API 나이 감지 정상 작동
- [ ] 성별 감지 정상 작동
- [ ] 나이별 점수 차별화 확인 (10대 vs 70대)
- [ ] 2개 제품 추천 정상 작동
- [ ] 같은 번호 → EXOSOME + RED 조합 확인
- [ ] 청소년 → RED 라인 강제 확인
- [ ] 민감성 → RED 라인 강제 확인
- [ ] 사용 가이드 생성 확인
- [ ] 예상 결과 생성 확인
- [ ] 주의사항 생성 확인

### 6.2 UI/UX 통합

- [ ] 분석 결과 페이지에 나이 표시
- [ ] 성별 표시 (남성/여성)
- [ ] 스킨 에이지 vs 실제 나이 비교
- [ ] 콜라겐 비율 표시
- [ ] 2개 제품 카드 표시
- [ ] 시너지 효과 표시
- [ ] 사용 가이드 표시
- [ ] 주의사항 표시

### 6.3 다국어 지원

- [ ] 한국어 (ko)
- [ ] 영어 (en)
- [ ] 일본어 (ja)
- [ ] 중국어 (zh-TW)
- [ ] 기타 7개 언어

---

## 🚀 배포 전 최종 점검

### 1. 파일 압축 확인
```bash
✓ js/analysis-v11.js (15KB → 8KB gzipped)
✓ js/recommendation-v22.js (14KB → 7KB gzipped)
```

### 2. CDN 연결 확인
```html
✓ Face-API CDN 정상 작동
✓ Font Awesome 정상 작동
✓ Google Fonts 정상 작동
```

### 3. 브라우저 호환성
```
✓ Chrome 90+ (권장)
✓ Edge 90+
✓ Safari 14+
✓ Firefox 88+
✓ Mobile Safari (iOS 14+)
✓ Chrome Mobile (Android 11+)
```

### 4. 보안 점검
```
✓ HTTPS 사용
✓ CSP (Content Security Policy) 설정
✓ 이미지 데이터 클라이언트 처리만 (서버 전송 없음)
```

---

## 📝 배포 후 모니터링

### 1. 에러 로그 수집
```javascript
// Global error handler
window.addEventListener('error', (event) => {
    console.error('[Global Error]', event.error);
    // 에러 리포팅 서비스로 전송 (선택)
});
```

### 2. 분석 성공률 추적
```javascript
// 분석 성공/실패 카운트
let successCount = 0;
let failCount = 0;

// 분석 후
if (result) {
    successCount++;
} else {
    failCount++;
}

console.log(`성공률: ${(successCount/(successCount+failCount)*100).toFixed(1)}%`);
```

### 3. 사용자 피드백 수집
```html
<!-- 분석 결과 페이지에 추가 -->
<div class="feedback">
    <p>분석 결과가 정확했나요?</p>
    <button onclick="sendFeedback('accurate')">👍 정확함</button>
    <button onclick="sendFeedback('inaccurate')">👎 부정확함</button>
</div>
```

---

**테스트 완료 후 GitHub에 푸시하고 배포하세요!** 🎉
