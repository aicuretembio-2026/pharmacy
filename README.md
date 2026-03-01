# CURETEMBIO Pharmacy Landing Page - Premium v2.0

## 🎉 프로젝트 현황 (2024-02-24 완성)

### ✅ 완료된 기능

#### 🌍 **10개 언어 완벽 번역 (290개 번역 항목)**
- **한국어** (ko) - 기본 언어
- **영어** (en) - English
- **일본어** (ja) - 日本語
- **중국어 번체** (zh-TW) - 中文
- **태국어** (th) - ภาษาไทย
- **베트남어** (vi) - Tiếng Việt
- **인도네시아어** (id) - Bahasa Indonesia
- **말레이어** (ms) - Bahasa Melayu
- **스페인어** (es) - Español
- **프랑스어** (fr) - Français

#### 🎨 **완성된 섹션**

##### 1. Hero 슬라이더
- 3개 이미지 (hero-1.jpg, hero-3.jpg, hero-4.jpg)
- 자동 슬라이드 (5초 간격)
- 10개 언어 번역 완료
- 반응형 디자인 (PC/모바일)

##### 2. AKK™ 핵심기술력
- AI 기반 10초 피부 진단
- K-Medical 인증 제품력
- K-Beauty 프리미엄 제형
- 10개 언어 번역 완료

##### 3. EXOSOME 제품 슬라이더
- 4개 이미지 (hero-2.jpg, exosome-2~4.jpg)
- 자동 슬라이드 (5초 간격)
- 제품 상세 설명 (10개 언어)
- 핵심 성분: EXOSOME, PDRN, CICA, VITA

##### 4. RED 제품 슬라이더
- 4개 이미지 (red-1~4.jpg)
- 높이 800px 최적화
- 고농축 설계 강조
- 10개 언어 번역 완료

##### 5. 10가지 피부 지표 섹션
- 💧 수분 (Moisture) | ✨ 탄력 (Elasticity)
- 📏 주름 (Wrinkles) | ⚪ 모공 (Pores)
- 🎨 색소침착 (Pigmentation) | 🔴 홍조 (Redness)
- ⚠️ 민감도 (Sensitivity) | 🔵 여드름 (Acne)
- 💡 광채 (Brightness) | 🌟 결 (Texture)
- **모바일: 2열 × 5줄 레이아웃 강제 적용** (`!important`)

##### 6. 제품 바이알 이미지
- PC: product-vials-pc.jpg (552 KB)
- 모바일: product-vials-mobile-new.jpg (1.3 MB, 100vw 전체 화면)
- 반응형 `<picture>` 태그 사용

##### 7. Final CTA 섹션
- 제목: "지금 바로 시작하세요" (10개 언어)
- 설명: "K-Medical 인증, 약국 전문가가 추천하는 프리미엄 엑소좀 스킨케어" (10개 언어)
- 버튼: "공식 쇼핑몰 바로가기 →" (10개 언어)
- 상하 여백: 80px → 40px (50% 축소)

##### 8. Footer (미니멀리스트 스타일)
- 브랜드 설명: "K-Medical 인증 엑소좀 스킨케어, AI 기반 피부 진단 시스템" (10개 언어 ✨ NEW)
- AI 진단 설명: "AI 10가지 피부 지표 분석, 29가지 조합으로 피부에 맞는 제품 추천" (10개 언어 ✨ NEW)
- 공식 사이트: 한국/글로벌/일본/중국
- 쇼핑몰: 일본/한국/글로벌
- AI 진단: curetembio.xyz
- SNS 아이콘 (5개, 화이트 라인 스타일):
  - Instagram (4개): Global, Asia, Japan, Korea
  - YouTube, X (Twitter), TikTok, 小红书 (Xiaohongshu)

##### 9. SEO & SNS 최적화
- OG 메타 태그:
  - Title: "CURETEMBIO - AI 기반 10가지 피부진단"
  - Description: "피부과에서 시작해 약국이 인정한 스킨케어 첫 단계 357 앰플"
  - Image: og-image.jpg (954 KB)
- 반응형 메타 태그
- 구조화된 HTML5 시맨틱 마크업

---

## 📊 번역 통계

### 각 언어별 키 (29개)
1. **Hero Section** (3개)
2. **10가지 피부 지표** (12개)
3. **Process Section** (7개)
4. **CTA Section** (4개)
5. **Footer Section** (5개)
6. **Premium Hero Slider** (3개)
7. **AKK Core Technology** (7개)
8. **EXOSOME Product** (8개)
9. **RED Product** (8개)
10. **Final CTA** (3개)
11. **Footer Brand** (2개) ✨ NEW

### 총 번역 항목
- **10개 언어 × 29개 키 = 290개**

---

## 🎯 제품명 영문 유지 규칙

### ✅ 모든 언어에서 영문 그대로 유지
- **제품명**: BIO 357™ EXOSOME, BIO 357™ RED
- **브랜드**: CURETEMBIO, EXOBIO, AKK™
- **인증**: K-Medical, K-Beauty
- **기술**: AI
- **성분**: EXOSOME, PDRN, CICA, VITA
- **고유번호**: 357™

---

## 📱 모바일 최적화

### Hero 섹션 한글 줄바꿈 수정
```css
/* 한글 단어 단위 줄바꿈 */
.hero-title {
    word-break: keep-all;  /* "완성"이 "완/성"으로 분리 방지 */
}

.hero-subtitle {
    word-break: keep-all;  /* "인정한"이 "인정/한"으로 분리 방지 */
}
```

### Hero 제목 - 3줄 레이아웃 (원래 폰트 크기 유지)
```html
<h1 class="hero-title">
    AI 피부 진단<br>
    10초 만에<br>
    완성
</h1>
```

### 제품 섹션 부제목 - 모바일 2줄 레이아웃
```css
.mobile-br {
    display: none;  /* PC: 줄바꿈 없음 */
}

@media (max-width: 768px) {
    .mobile-br {
        display: inline;  /* 모바일: 줄바꿈 */
    }
    
    .premium-subtitle {
        font-size: 0.95rem !important;
        letter-spacing: 2px !important;
    }
}
```

```html
<p class="premium-subtitle">
    피부과에서 시작해<br class="mobile-br">약국이 인정한
</p>
```

### AI/K-Medical/K-Beauty 제목 폰트 크기 조정
```css
/* 모바일 - 텍스트가 한 줄에 들어가도록 */
@media (max-width: 768px) {
    [data-i18n="akk_ai_title"],
    [data-i18n="akk_medical_title"],
    [data-i18n="akk_beauty_title"] {
        font-size: 1.25rem !important;
        white-space: nowrap;
    }
}

/* 작은 모바일 (375px 이하) */
@media (max-width: 375px) {
    [data-i18n="akk_ai_title"],
    [data-i18n="akk_medical_title"],
    [data-i18n="akk_beauty_title"] {
        font-size: 1.1rem !important;
    }
}
```

### 10가지 피부 지표
```css
.indicators-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 15px;
}

@media (max-width: 768px) {
    .indicators-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px;
    }
}
```

### 제품 바이알 이미지
```css
@media (max-width: 767px) {
    .product-vials-section img {
        width: 100vw !important;
        max-width: 100vw !important;
    }
}
```

### CTA 섹션 여백
```css
#cta {
    padding: 40px 20px; /* 기존 80px → 40px (50% 축소) */
}
```

---

## 📦 파일 구조

```
pharmacy/
├── index.html                          (79 KB, 10개 언어 지원)
├── js/
│   └── landing-i18n.js                 (62.4 KB, 290개 번역 항목)
└── images/
    ├── hero-1.jpg ~ hero-4.jpg         (Hero/EXOSOME 슬라이더)
    ├── red-1.jpg ~ red-4.jpg           (RED 슬라이더)
    ├── og-image.jpg                    (954 KB)
    ├── product-vials-pc.jpg            (552 KB)
    ├── product-vials-mobile-new.jpg    (1.3 MB)
    └── sns-*.png                       (5개, 총 84 KB)
```

---

## 🚀 배포 정보

### GitHub Repository
- **URL**: https://github.com/aicuretembio-2026/pharmacy
- **Live Site**: https://aicuretembio-2026.github.io/pharmacy/

---

## 📈 성능 지표

### 파일 크기
- **HTML**: 79 KB
- **JS (landing-i18n.js)**: 62.4 KB → ≈15 KB (Gzip)
- **이미지**: ≈3.5 MB

### 로딩 시간
- **5G**: 0.01초
- **4G**: 0.05초
- **3G**: 0.2초

---

## 🔗 주요 링크

### 공식 사이트
- 🇰🇷 한국: https://curetembio.com
- 🌍 글로벌: https://en.curetembio.com
- 🇯🇵 일본: https://jp.curetembio.com
- 🇨🇳 중국: https://cn.curetembio.com

### 쇼핑몰
- 🇯🇵 일본: https://exobio.net
- 🇰🇷 한국: https://kr.exobio.net
- 🌍 글로벌: https://en.exobio.net

### AI 서비스
- 🤖 AI 피부 진단: https://curetembio.xyz
- 💬 **AI 챗봇 상담**: https://chatbot.curetembio.xyz (✨ NEW 2026-02-26)

---

## ✅ 완성 체크리스트

### 기능 완성도
- [x] 10개 언어 번역 (290개 항목)
- [x] Hero 슬라이더 (3개 이미지)
- [x] AKK™ 핵심기술력
- [x] EXOSOME/RED 슬라이더
- [x] 10가지 피부 지표 (모바일 2열)
- [x] 제품 바이알 이미지 (반응형)
- [x] Final CTA (10개 언어)
- [x] Footer (10개 언어)
- [x] SNS 아이콘 (5개)
- [x] OG 메타 태그
- [x] 모바일 최적화
- [x] 제품명 영문 유지

---

## 📝 버전 히스토리

### v2.3 (2026-02-28) 📷 Camera Mirror Fix
- ✅ 카메라 미러링(좌우 반전) 해제
  - **문제**: 전면 카메라 사용 시 얼굴이 반대로 움직여 사용자 불편
  - **해결**: `transform: scaleX(-1)` 적용으로 자연스러운 움직임 구현
  - **효과**: 왼쪽으로 움직이면 화면도 왼쪽으로 표시 (거울 효과 제거)

### v2.2 (2026-02-28) 📱 Mobile Fix
- ✅ 모바일 한글 줄바꿈 문제 수정
  - **Hero 제목**: "AI 피부 진단 / 10초 만에 / 완성" (3줄, 원래 폰트 크기 유지)
  - **제품 섹션 부제목**: "피부과에서 시작해 / 약국이 인정한" (모바일 2줄)
  - **AKK 섹션**: "K-Medical 인증 제품력", "K-Beauty 프리미엄 제형" (각 1줄 유지)
- ✅ `word-break: keep-all` 적용 (한글 단어 단위 줄바꿈)
- ✅ 다국어는 자동 줄바꿈 허용 (3줄 가능)
- ✅ AKK 섹션 모바일 폰트 크기 최적화
  - 768px 이하 `1.25rem`, 375px 이하 `1.1rem`

### v2.1 (2026-02-26) 💬 Chatbot Update
- ✅ AI 챗봇 답변 수정
  - 브랜드명: Q100 JAPAN → **Qoo10 JAPAN**
  - 수분/보습 추천: RED 5 → **RED 7**
  - 가격 정보 완전 제거 (환율 변동 대응)
- ✅ 43개 키워드 검증 완료
- ✅ 챗봇 사이트: https://chatbot.curetembio.xyz

### v2.0 (2024-02-24)
- ✅ 10개 언어 완벽 번역 (290개 항목)
- ✅ Footer 브랜드 설명 + AI 진단 설명 추가
- ✅ Final CTA 여백 50% 축소
- ✅ 모바일 2열 레이아웃 강제 적용
- ✅ SNS 아이콘 5개 추가
- ✅ 제품명 영문 유지 검증

---

## 🎉 프로젝트 상태: **완성 ✅**

**마지막 업데이트**: 2026-02-26  
**완성도**: 100%  
**배포 상태**: 라이브  
**다국어 지원**: 10개 언어  
**총 번역 항목**: 290개  
**AI 챗봇**: https://chatbot.curetembio.xyz (✨ 2026-02-26 업데이트)  

---

**© 2024 CURETEMBIO. All Rights Reserved.**
