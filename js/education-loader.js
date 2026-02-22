/**
 * CURETEMBIO - 450개 교육 블록 로더 v10.0 FINAL
 * 10개 카테고리 × 5개 시나리오 × 9개 블록 = 450개
 * Version: 10.0 FINAL
 * Date: 2026-01-29
 */

console.log('📚 [v10.0 FINAL] Education Content Loader 초기화 - 450개 교육 블록 지원');

class EducationContentLoader {
    constructor() {
        this.currentLanguage = 'ko';
        this.contentCache = {};
        
        // 새로운 카테고리 매핑 (10개 카테고리)
        this.categoryFiles = {
            'tone_evenness': 'tone_evenness',
            'brightness': 'brightness',
            'pigmentation': 'pigmentation',
            'wrinkle_depth': 'wrinkle_depth',
            'elasticity': 'elasticity',
            'hydration': 'hydration',
            'sensitivity': 'sensitivity',
            'redness': 'redness',
            'acne': 'acne',
            'pores': 'pores'
        };
    }

    /**
     * 언어 설정
     */
    setLanguage(lang) {
        this.currentLanguage = lang;
        console.log(`🌐 언어 변경: ${lang}`);
    }

    /**
     * 카테고리 파일 경로 생성
     */
    getFilePath(category, language) {
        const fileName = this.categoryFiles[category];
        if (!fileName) {
            console.error(`❌ 알 수 없는 카테고리: ${category}`);
            return null;
        }
        return `data/education-blocks/${language}/${fileName}.json`;
    }

    /**
     * 교육 콘텐츠 로드 (전체 카테고리)
     */
    async loadContent(category, language = null) {
        const lang = language || this.currentLanguage;
        const cacheKey = `${category}_${lang}`;

        // 캐시 확인
        if (this.contentCache[cacheKey]) {
            console.log(`✅ [캐시] ${category} (${lang})`);
            return this.contentCache[cacheKey];
        }

        try {
            const filePath = this.getFilePath(category, lang);
            if (!filePath) {
                return null;
            }

            console.log(`📥 [로딩] ${filePath}`);
            const response = await fetch(filePath);
            
            if (!response.ok) {
                throw new Error(`Failed to load: ${filePath} (${response.status})`);
            }

            const data = await response.json();
            
            // 캐시에 저장
            this.contentCache[cacheKey] = data;
            
            console.log(`✅ [완료] ${category}: ${data.scenarios?.length || 0}개 시나리오`);
            return data;
        } catch (error) {
            console.error(`❌ [오류] ${category}:`, error);
            return null;
        }
    }

    /**
     * 점수에 따른 시나리오 선택
     */
    selectScenarioByScore(score) {
        if (score >= 90) return 'scenario_1';
        if (score >= 80) return 'scenario_2';
        if (score >= 70) return 'scenario_3';
        if (score >= 60) return 'scenario_4';
        return 'scenario_5';
    }

    /**
     * 특정 점수에 맞는 시나리오 블록 가져오기
     */
    async getBlocksForScore(category, score, language = null) {
        const content = await this.loadContent(category, language);
        
        if (!content || !content.scenarios) {
            console.warn(`⚠️ 콘텐츠 없음: ${category}`);
            return [];
        }

        const scenarioKey = this.selectScenarioByScore(score);
        const scenario = content.scenarios.find(s => s.scenario === scenarioKey);

        if (!scenario) {
            console.warn(`⚠️ 시나리오 없음: ${category} - ${scenarioKey}`);
            return [];
        }

        console.log(`📌 ${category} (${score}점) → ${scenario.statusLabel} (${scenario.blocks.length}개 블록)`);
        return scenario.blocks;
    }

    /**
     * 여러 카테고리 동시 로드
     */
    async preloadCategories(categories, language = null) {
        const promises = categories.map(category => 
            this.loadContent(category, language)
        );

        try {
            await Promise.all(promises);
            console.log(`✅ [프리로드 완료] ${categories.length}개 카테고리`);
        } catch (error) {
            console.error('❌ [프리로드 오류]:', error);
        }
    }

    /**
     * 캐시 초기화
     */
    clearCache() {
        this.contentCache = {};
        console.log('🗑️ 캐시 초기화 완료');
    }

    /**
     * 통계 정보
     */
    getStats() {
        const cachedCategories = Object.keys(this.contentCache).length;
        return {
            cachedCategories,
            totalCategories: Object.keys(this.categoryFiles).length,
            expectedBlocks: 450,
            currentLanguage: this.currentLanguage
        };
    }
}

// 전역 인스턴스 생성
const educationLoader = new EducationContentLoader();

console.log('🎉 [v10.0 FINAL] 450개 교육 블록 로더 준비 완료!');

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EducationContentLoader;
}
