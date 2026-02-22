// 🌍 10개 언어 지원 시스템 (v6.0 Perfect 10 - French Added!)
// 한국어, English, 日本語, 中文, ภาษาไทย, Tiếng Việt, Bahasa Indonesia, Bahasa Melayu, Español, Français

const SUPPORTED_LANGUAGES = ['ko', 'en', 'ja', 'zh-TW', 'th', 'vi', 'id', 'ms', 'es', 'fr'];
let currentLang;

let translations = {};

// JSON 파일에서 번역 로드
async function loadTranslations(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.warn(`⚠️ 지원하지 않는 언어: ${lang}`);
        lang = 'ko';
    }
    
    try {
        console.log(`🌍 ${lang} 번역 파일 로드 시작...`);
        const response = await fetch(`translations/${lang}.json?v=${Date.now()}`);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        translations = await response.json();
        console.log(`✅ ${lang} 번역 로드 완료: ${Object.keys(translations).length}개 키`);
        return true;
    } catch (error) {
        console.error(`❌ 번역 로드 실패 (${lang}):`, error.message);
        return false;
    }
}

// 중첩된 키 처리 (예: "chatbot.title")
function getNestedTranslation(key) {
    // 점(.)으로 구분된 키를 배열로 분리
    const keys = key.split('.');
    let value = translations;
    
    // 중첩된 객체 탐색
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

// 페이지 텍스트 업데이트
function updatePageText() {
    let count = 0;
    
    // data-i18n 속성을 가진 모든 요소 찾기
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedTranslation(key);
        
        if (value) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = value;
            } else {
                element.textContent = value;
            }
            count++;
        }
    });
    
    // data-i18n-html 속성 처리 (HTML 렌더링 지원)
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        const value = getNestedTranslation(key);
        
        if (value) {
            element.innerHTML = value;
            count++;
        }
    });
    
    // data-i18n-placeholder 속성 처리
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const value = getNestedTranslation(key);
        
        if (value) {
            element.placeholder = value;
            count++;
        }
    });
    
    console.log(`📝 ${count}개 요소 번역 완료`);
}

// 번역 키 가져오기
function t(key) {
    return getNestedTranslation(key) || key;
}

// 언어 변경
async function changeLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
        console.warn(`⚠️ 지원하지 않는 언어: ${lang}`);
        return;
    }
    
    console.log(`🔄 언어 변경: ${currentLang} → ${lang}`);
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    const success = await loadTranslations(lang);
    if (success) {
        updatePageText();
        
        // 언어 선택기 업데이트
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = lang;
        }
        
        console.log(`✅ 언어 변경 완료: ${lang}`);
    } else {
        console.error(`❌ 언어 변경 실패: ${lang}`);
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 i18n 시스템 초기화...');
    
    // URL 파라미터 또는 localStorage에서 언어 읽기
    currentLang = localStorage.getItem('language') || 'ko';
    console.log(`📌 현재 언어: ${currentLang}`);
    
    const success = await loadTranslations(currentLang);
    if (success) {
        updatePageText();
        
        // 언어 선택기 초기화
        const selector = document.getElementById('language-selector');
        if (selector) {
            selector.value = currentLang;
        }
    }
});

// 전역 함수로 노출
window.t = t;
window.changeLanguage = changeLanguage;
window.updatePageText = updatePageText; // 🔥 중국어 진단 결과 번역을 위한 노출
window.updatePageText = updatePageText; // 🔥 CRITICAL FIX: updatePageText 노출
