# 🏗️ CURETEMBIO 프로젝트 구조

## 📅 업데이트: 2026-03-01

---

## 🎯 저장소 구조 및 역할

| 저장소 | 도메인 | 역할 | 상태 | 용도 |
|--------|--------|------|------|------|
| **aicuretembio-2026/chatbot** | chatbot.curetembio.xyz | **챗봇 사이트** | ✅ 운영 | AI 상담 챗봇 서비스 |
| **aicuretembio-2026/pharmacy** | curetembio.xyz | **공식 사이트** | ✅ 운영 | 메인 랜딩 페이지 + AI 진단 |
| **aicuretembio-2026/EXOBIO-AI** | ai.curetembio.xyz | **개발 사이트** | 🔧 개발 | 신규 기능 개발 및 테스트 |
| **aicuretembio-2026/EXOBIO** | (연결 해제) | **백업 사이트** | 💾 보관 | 이전 버전 보관용 |

---

## 🌐 도메인 매핑

### **1. 챗봇 사이트 (chatbot)**
```
저장소: https://github.com/aicuretembio-2026/chatbot
도메인: https://chatbot.curetembio.xyz/
```

**주요 기능:**
- ✅ AI 피부 상담 챗봇
- ✅ 10개 언어 지원
- ✅ 키워드 기반 Q&A
- ✅ 제품 추천 링크

---

### **2. 공식 사이트 (pharmacy) ⭐**
```
저장소: https://github.com/aicuretembio-2026/pharmacy
도메인: https://curetembio.xyz/
```

**주요 페이지:**
- 📄 **index.html**: 메인 랜딩 페이지
  - 10가지 피부 지표 소개
  - AKK™ 기술 설명
  - EXOSOME/RED 제품 슬라이더
  - 다국어 지원 (10개 언어)
  
- 📄 **diagnosis.html**: AI 피부 진단 페이지
  - 카메라 촬영 기능 (미러링 해제)
  - AI 10가지 피부 분석
  - 맞춤형 제품 추천
  - 진단 결과 저장

**버전 정보:**
- v10.0 FINAL
- Build ID: 20260129-FIX-5000
- Build Date: 2026-01-29

**주요 기능:**
- ✅ 카카오톡 링크 미리보기 최적화
- ✅ Open Graph 태그 완벽 적용
- ✅ Schema.org 구조화 데이터
- ✅ SEO 최적화
- ✅ 10개 언어 지원
- ✅ 반응형 디자인

---

### **3. 개발 사이트 (EXOBIO-AI)**
```
저장소: https://github.com/aicuretembio-2026/EXOBIO-AI
도메인: https://ai.curetembio.xyz/
```

**용도:**
- 🔧 신규 기능 개발
- 🧪 A/B 테스트
- 🐛 버그 수정 테스트
- 📊 실험적 기능 검증

**워크플로우:**
```
개발 (EXOBIO-AI) → 테스트 → 안정화 → 공식 사이트 (pharmacy) 배포
```

---

### **4. 백업 사이트 (EXOBIO)**
```
저장소: https://github.com/aicuretembio-2026/EXOBIO
도메인: (연결 해제)
상태: 아카이브
```

**용도:**
- 💾 이전 버전 보관
- 🔙 긴급 롤백용
- 📚 히스토리 참조

---

## 🔄 배포 프로세스

### **신규 기능 개발 시**

```
1. EXOBIO-AI에서 개발
   ↓
2. ai.curetembio.xyz에서 테스트
   ↓
3. 문제 없으면 pharmacy로 복사
   ↓
4. curetembio.xyz에 자동 배포
   ↓
5. 최종 검증 (카카오톡 미리보기 등)
```

### **긴급 수정 시**

```
1. pharmacy에서 직접 수정
   ↓
2. 커밋 & 푸시
   ↓
3. curetembio.xyz 자동 배포 (5-10분)
   ↓
4. 검증 완료
```

---

## 📊 현재 버전 정보

### **공식 사이트 (pharmacy)**
- **버전**: v10.0 FINAL
- **최종 수정**: 2026-03-01
- **주요 변경**:
  - ✅ 도메인 curetembio.xyz로 전환
  - ✅ Open Graph 최적화
  - ✅ 카카오톡 미리보기 완벽 작동
  - ✅ 이미지 캐시 무효화 (v=20260301)

### **챗봇 사이트 (chatbot)**
- **버전**: v3.2.5
- **최종 수정**: 2026-02-26
- **주요 기능**:
  - ✅ 10개 언어 다국어 지원
  - ✅ 100개 Q&A 데이터베이스
  - ✅ 제품 추천 시스템
  - ✅ Qoo10 JAPAN 구매 링크

---

## 🔗 주요 URL 목록

### **공식 사이트**
- 메인: https://curetembio.xyz/
- AI 진단: https://curetembio.xyz/diagnosis.html

### **챗봇**
- AI 챗봇: https://chatbot.curetembio.xyz/

### **테스트 사이트**
- 개발: https://ai.curetembio.xyz/

### **브랜드 사이트**
- 한국: https://curetembio.com/
- 글로벌: https://en.curetembio.com/
- 일본: https://jp.curetembio.com/
- 중국: https://cn.curetembio.com/

### **쇼핑몰**
- 일본: https://exobio.net/
- 한국: https://kr.exobio.net/
- 글로벌: https://en.exobio.net/

---

## 🛠️ 기술 스택

### **프론트엔드**
- HTML5
- CSS3 (반응형)
- Vanilla JavaScript
- Font Awesome
- Google Fonts (Noto Sans KR)

### **배포**
- GitHub Pages
- Custom Domain (가비아)
- HTTPS 강제 적용
- DNS: A 레코드 (GitHub Pages IPs)

### **다국어**
- 10개 언어 지원
- i18n 시스템
- localStorage 언어 저장
- URL 파라미터 언어 전환

### **SEO**
- Open Graph 태그
- Twitter Card
- Schema.org 구조화 데이터
- Canonical URL
- Hreflang 태그

---

## 📝 파일 구조

### **공식 사이트 (pharmacy)**
```
pharmacy/
├── index.html              # 메인 랜딩 페이지
├── diagnosis.html          # AI 피부 진단 페이지
├── CNAME                   # curetembio.xyz
├── manifest.json           # PWA 설정
├── sitemap.xml            # 사이트맵
├── robots.txt             # 검색 엔진 설정
├── css/
│   ├── style.css
│   ├── tech-cards.css
│   ├── lang-optimization.css
│   ├── premium-v2.css
│   └── chatbot-integration.css
├── js/
│   ├── landing-i18n.js    # 다국어 시스템
│   ├── analysis.js        # AI 분석 엔진
│   └── camera.js          # 카메라 제어
├── images/
│   ├── landing/           # 랜딩 페이지 이미지
│   ├── premium/           # 프리미엄 제품 이미지
│   ├── og-image.jpg       # OG 이미지 (1200x630)
│   └── logo-main.png      # 메인 로고
└── translations/
    ├── ko.json
    ├── en.json
    ├── ja.json
    ├── zh-CN.json
    ├── th.json
    ├── vi.json
    ├── id.json
    ├── ms.json
    ├── es.json
    └── fr.json
```

---

## 🔐 보안 설정

- ✅ HTTPS 강제 적용
- ✅ CSP (Content Security Policy)
- ✅ X-Frame-Options
- ✅ Referrer-Policy
- ✅ 민감 정보 제외 (API 키 없음)

---

## 📈 성능 최적화

### **로딩 속도**
- HTML: 83 KB
- JS (landing-i18n.js): 62.4 KB (~15 KB gzipped)
- CSS: ~50 KB (압축)
- 이미지: WebP 형식 권장

### **캐시 전략**
- HTML: no-cache
- CSS/JS: 버전 파라미터 (?v=YYYYMMDD)
- 이미지: 1년 캐시

### **CDN**
- Google Fonts
- Font Awesome CDN
- jsDelivr (라이브러리)

---

## 🐛 문제 해결 가이드

### **카카오톡 미리보기 안 나올 때**
1. 카카오 디버거: https://developers.kakao.com/tool/debugger/sharing
2. URL 입력 후 "초기화" 클릭
3. 이미지 URL에 `?v=YYYYMMDD` 파라미터 추가

### **GitHub Pages 배포 안 될 때**
1. Actions 탭에서 배포 상태 확인
2. CNAME 파일 존재 확인
3. Custom domain 설정 재확인
4. 5-10분 대기 후 재시도

### **DNS 문제**
1. `nslookup curetembio.xyz` 명령어 확인
2. DNS 전파 확인: https://dnschecker.org/
3. 가비아 설정 확인 (A 레코드)

---

## 📞 연락처

- **이메일**: curetembio@gmail.com
- **GitHub**: https://github.com/aicuretembio-2026
- **공식 사이트**: https://curetembio.xyz/

---

## 📚 관련 문서

- [URL 변경 가이드](pharmacy-index-URL-변경-가이드.md)
- [카메라 미러링 수정 가이드](diagnosis-camera-fix-guide.md)
- [다국어 시스템 가이드](i18n-system-guide.md)
- [배포 가이드](deployment-guide.md)

---

## 🎯 다음 작업 계획

### **우선순위 높음**
- [ ] 카카오톡 미리보기 최종 테스트
- [ ] SEO 검색 엔진 등록 (Google, Naver)
- [ ] 성능 모니터링 설정

### **우선순위 중간**
- [ ] A/B 테스트 (EXOBIO-AI)
- [ ] 사용자 피드백 수집
- [ ] 분석 데이터 검토

### **우선순위 낮음**
- [ ] PWA 기능 강화
- [ ] 다크 모드 추가
- [ ] 추가 언어 지원 검토

---

**마지막 업데이트**: 2026-03-01  
**작성자**: AI Assistant  
**버전**: 1.0
