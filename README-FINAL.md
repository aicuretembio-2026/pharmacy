# 🚀 CURETEMBIO - AI 기반 피부 진단 시스템

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://curetembio.xyz/)
[![License](https://img.shields.io/badge/License-Proprietary-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-v10.0%20FINAL-orange)](https://github.com/aicuretembio-2026)

**피부과에서 시작해 약국이 인정한 스킨케어 첫 단계 357 앰플**

---

## 🌐 프로젝트 구조

| 저장소 | 도메인 | 역할 | 상태 |
|--------|--------|------|------|
| **[chatbot](https://github.com/aicuretembio-2026/chatbot)** | [chatbot.curetembio.xyz](https://chatbot.curetembio.xyz/) | 챗봇 사이트 | ✅ 운영 |
| **[pharmacy](https://github.com/aicuretembio-2026/pharmacy)** | [curetembio.xyz](https://curetembio.xyz/) | **공식 사이트** | ✅ 운영 |
| **[EXOBIO-AI](https://github.com/aicuretembio-2026/EXOBIO-AI)** | [ai.curetembio.xyz](https://ai.curetembio.xyz/) | 개발 사이트 | 🔧 개발 |
| **[EXOBIO](https://github.com/aicuretembio-2026/EXOBIO)** | (연결 해제) | 백업 사이트 | 💾 보관 |

---

## 🎯 주요 기능

### ✨ **AI 피부 진단**
- 10초 만에 10가지 피부 지표 분석
- 카메라 기반 실시간 진단
- 29가지 조합 맞춤형 제품 추천

### 🌍 **다국어 지원**
- 10개 언어 완벽 지원
- 한국어, English, 日本語, 中文, ภาษาไทย
- Tiếng Việt, Bahasa Indonesia, Bahasa Melayu, Español, Français

### 🤖 **AI 챗봇**
- 100개 Q&A 데이터베이스
- 키워드 기반 자동 응답
- 제품 추천 시스템

### 📱 **반응형 디자인**
- 모바일 최적화
- 태블릿/PC 지원
- PWA 지원

---

## 🔗 주요 URL

### **공식 서비스**
- 🏠 **메인 페이지**: https://curetembio.xyz/
- 🔬 **AI 피부 진단**: https://curetembio.xyz/diagnosis.html
- 💬 **AI 챗봇**: https://chatbot.curetembio.xyz/

### **브랜드 사이트**
- 🇰🇷 한국: https://curetembio.com/
- 🌏 글로벌: https://en.curetembio.com/
- 🇯🇵 일본: https://jp.curetembio.com/
- 🇨🇳 중국: https://cn.curetembio.com/

### **쇼핑몰**
- 🛒 일본 쇼핑몰: https://exobio.net/
- 🛒 한국 쇼핑몰: https://kr.exobio.net/
- 🛒 글로벌 쇼핑몰: https://en.exobio.net/

---

## 📊 버전 정보

### **현재 버전: v10.0 FINAL**
- **Build ID**: 20260129-FIX-5000
- **Build Date**: 2026-01-29
- **최종 업데이트**: 2026-03-01

### **주요 변경 사항**
- ✅ 공식 도메인 `curetembio.xyz` 전환 완료
- ✅ Open Graph 태그 최적화 (카카오톡 미리보기)
- ✅ 카메라 미러링 해제 (좌우 반전 문제 해결)
- ✅ 10개 언어 완벽 지원
- ✅ SEO 최적화 완료

---

## 🛠️ 기술 스택

### **Frontend**
- HTML5 (시맨틱 마크업)
- CSS3 (반응형 디자인)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0
- Google Fonts (Noto Sans KR)

### **Deployment**
- GitHub Pages
- Custom Domain (가비아)
- HTTPS (Let's Encrypt)
- DNS: A 레코드

### **SEO & SNS**
- Open Graph 완벽 적용
- Twitter Card
- Schema.org 구조화 데이터
- Sitemap.xml
- Robots.txt

---

## 📁 파일 구조

```
pharmacy/
├── index.html              # 메인 랜딩 페이지 (83 KB)
├── diagnosis.html          # AI 피부 진단 페이지 (103 KB)
├── CNAME                   # curetembio.xyz
├── manifest.json           # PWA 설정
├── sitemap.xml            # 사이트맵
├── robots.txt             # 검색 엔진 설정
├── css/
│   ├── style.css                    # 메인 스타일
│   ├── tech-cards.css               # 기술 카드
│   ├── lang-optimization.css        # 언어 최적화
│   ├── premium-v2.css               # 프리미엄 디자인
│   └── chatbot-integration.css      # 챗봇 통합
├── js/
│   ├── landing-i18n.js              # 다국어 시스템 (62.4 KB)
│   ├── analysis.js                  # AI 분석 엔진
│   └── camera.js                    # 카메라 제어
├── images/
│   ├── landing/                     # 랜딩 페이지 이미지
│   ├── premium/                     # 프리미엄 제품
│   ├── og-image.jpg                 # OG 이미지 (1200x630)
│   └── logo-main.png                # 메인 로고
└── translations/
    ├── ko.json                      # 한국어
    ├── en.json                      # English
    ├── ja.json                      # 日本語
    ├── zh-CN.json                   # 中文
    ├── th.json                      # ภาษาไทย
    ├── vi.json                      # Tiếng Việt
    ├── id.json                      # Bahasa Indonesia
    ├── ms.json                      # Bahasa Melayu
    ├── es.json                      # Español
    └── fr.json                      # Français
```

---

## 🚀 배포 프로세스

### **신규 기능 개발**
```
1. EXOBIO-AI에서 개발
   ↓
2. ai.curetembio.xyz에서 테스트
   ↓
3. pharmacy로 복사
   ↓
4. curetembio.xyz 자동 배포 (5-10분)
```

### **긴급 수정**
```
1. pharmacy에서 직접 수정
   ↓
2. 커밋 & 푸시
   ↓
3. GitHub Actions 자동 배포
```

---

## 📈 성능 지표

### **로딩 속도**
- 5G: 0.01초
- 4G: 0.05초
- 3G: 0.2초

### **파일 크기**
- HTML: 83 KB
- JS: 62.4 KB (~15 KB gzipped)
- CSS: ~50 KB
- 이미지: ~3.5 MB (최적화)

### **SEO**
- Google PageSpeed: 95+
- Mobile Friendly: ✅
- HTTPS: ✅
- Structured Data: ✅

---

## 🔐 보안

- ✅ HTTPS 강제 적용
- ✅ CSP (Content Security Policy)
- ✅ X-Frame-Options: DENY
- ✅ Referrer-Policy: strict-origin
- ✅ 민감 정보 제외

---

## 📱 지원 브라우저

| 브라우저 | 버전 | 상태 |
|---------|------|------|
| Chrome | 90+ | ✅ 완벽 지원 |
| Safari | 14+ | ✅ 완벽 지원 |
| Firefox | 88+ | ✅ 완벽 지원 |
| Edge | 90+ | ✅ 완벽 지원 |
| Samsung Internet | 14+ | ✅ 완벽 지원 |

---

## 🐛 문제 해결

### **카카오톡 미리보기 안 나올 때**
1. [카카오 디버거](https://developers.kakao.com/tool/debugger/sharing) 접속
2. URL 입력: `https://curetembio.xyz/`
3. "초기화" 버튼 클릭

### **GitHub Pages 배포 안 될 때**
1. [Actions 탭](https://github.com/aicuretembio-2026/pharmacy/actions) 확인
2. CNAME 파일 확인
3. Custom domain 재설정

### **DNS 문제**
1. 명령어: `nslookup curetembio.xyz`
2. [DNS Checker](https://dnschecker.org/) 확인
3. 가비아 설정 재확인

---

## 📞 연락처

- **이메일**: curetembio@gmail.com
- **GitHub**: [@aicuretembio-2026](https://github.com/aicuretembio-2026)
- **공식 사이트**: https://curetembio.xyz/

---

## 📚 관련 문서

- [프로젝트 구조](PROJECT-STRUCTURE.md)
- [URL 변경 가이드](pharmacy-index-URL-변경-가이드.md)
- [배포 가이드](DEPLOYMENT.md)
- [다국어 시스템](I18N-GUIDE.md)

---

## 📄 라이선스

Copyright © 2026 CURETEMBIO. All rights reserved.

---

## 🎯 로드맵

### **2026 Q1**
- [x] 공식 도메인 전환
- [x] 카카오톡 미리보기 최적화
- [x] 10개 언어 지원 완료
- [ ] SEO 최적화 완료

### **2026 Q2**
- [ ] 모바일 앱 출시
- [ ] 추가 언어 지원 (독일어, 러시아어)
- [ ] AI 분석 정확도 향상

---

**⭐ Star this repo if you find it useful!**

**Made with ❤️ by CURETEMBIO Team**
