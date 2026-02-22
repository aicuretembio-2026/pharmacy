/**
 * CURETEMBIO - Product Loader
 * 제품 데이터 로드 및 추천 시스템
 * Version: 10.0
 * Date: 2026-01-28
 */

console.log('🛍️ [v10.0] Product Loader 초기화 완료');

class ProductLoader {
    constructor() {
        this.products = null;
        this.currentLanguage = 'ko';
    }

    /**
     * 제품 데이터 로드
     */
    async loadProducts() {
        if (this.products) {
            return this.products;
        }

        try {
            const response = await fetch('data/exobio-products-final-v8-complete.json');
            if (!response.ok) {
                throw new Error('Failed to load product data');
            }
            
            const data = await response.json();
            this.products = data.products;
            return this.products;
        } catch (error) {
            console.error('Error loading products:', error);
            return null;
        }
    }

    /**
     * 언어 설정
     */
    setLanguage(lang) {
        this.currentLanguage = lang;
    }

    /**
     * 제품 ID로 제품 찾기
     */
    getProductById(productId) {
        if (!this.products) return null;
        return this.products.find(p => p.id === productId);
    }

    /**
     * 제품 이름 가져오기 (현재 언어)
     */
    getProductName(product) {
        if (!product) return '';
        const langKey = this.currentLanguage.replace('-', '_');
        return product[`name_${langKey}`] || product.name_en;
    }

    /**
     * 제품 카드 HTML 생성
     */
    renderProductCard(product) {
        if (!product) return '';

        const name = this.getProductName(product);
        const benefits = product.main_benefits.slice(0, 3).join(' · ');
        const tier = product.line_tier === 'premium' ? '프리미엄 라인' : '대중 라인';
        const tierClass = product.line_tier === 'premium' ? 'premium' : 'standard';

        return `
            <div class="product-card ${tierClass}" data-product-id="${product.id}">
                <div class="product-tier">${tier}</div>
                <div class="product-line">${product.line}</div>
                <h3 class="product-name">${name}</h3>
                <p class="product-benefits">${benefits}</p>
                <div class="product-features">
                    ${product.special_features.map(feature => 
                        `<span class="feature-tag">${feature}</span>`
                    ).join('')}
                </div>
                <div class="product-indicators">
                    <i class="fas fa-check-circle"></i> 
                    ${this.getIndicatorLabels(product.related_indicators)}
                </div>
            </div>
        `;
    }

    /**
     * 지표 라벨 가져오기
     */
    getIndicatorLabels(indicators) {
        const labels = {
            'ko': {
                'tone_evenness': '톤균일도',
                'tone_uniformity': '톤균일도',
                'pigmentation': '색소침착',
                'brightness': '피부밝기',
                'skin_brightness': '피부밝기',
                'wrinkles': '주름',
                'elasticity': '탄력',
                'firmness': '탄력',
                'moisture': '수분',
                'hydration': '수분',
                'sensitivity': '민감도',
                'redness': '홍조',
                'acne': '여드름',
                'pores': '모공',
                'overall': '종합케어',
                'barrier': '피부장벽',
                'regeneration': '재생',
                'soothing': '진정'
            },
            'en': {
                'tone_evenness': 'Tone',
                'tone_uniformity': 'Tone',
                'pigmentation': 'Pigmentation',
                'brightness': 'Brightness',
                'skin_brightness': 'Brightness',
                'wrinkles': 'Wrinkles',
                'elasticity': 'Elasticity',
                'firmness': 'Firmness',
                'moisture': 'Moisture',
                'hydration': 'Hydration',
                'sensitivity': 'Sensitivity',
                'redness': 'Redness',
                'acne': 'Acne',
                'pores': 'Pores',
                'overall': 'Overall',
                'barrier': 'Barrier',
                'regeneration': 'Regeneration',
                'soothing': 'Soothing'
            }
        };

        const langLabels = labels[this.currentLanguage] || labels['en'];
        return indicators
            .slice(0, 3)
            .map(ind => langLabels[ind] || ind)
            .join(', ');
    }

    /**
     * 여러 제품 렌더링
     */
    async renderProducts(productIds, containerId) {
        await this.loadProducts();
        
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container not found: ${containerId}`);
            return;
        }

        if (!this.products || productIds.length === 0) {
            container.innerHTML = '<p class="no-products">추천 제품이 없습니다.</p>';
            return;
        }

        const html = productIds
            .map(id => {
                const product = this.getProductById(id);
                return this.renderProductCard(product);
            })
            .filter(html => html !== '')
            .join('');

        container.innerHTML = html;

        // 제품 클릭 시 하이라이트 효과
        this.attachCardClickEvents(container);
    }

    /**
     * 카드 클릭 이벤트 추가
     */
    attachCardClickEvents(container) {
        const cards = container.querySelectorAll('.product-card');
        cards.forEach(card => {
            card.addEventListener('click', () => {
                // 모든 카드의 active 클래스 제거
                cards.forEach(c => c.classList.remove('active'));
                // 클릭한 카드에 active 클래스 추가
                card.classList.add('active');
            });
        });
    }

    /**
     * 피부 상태 기반 제품 추천
     */
    getRecommendedProducts(skinScores) {
        if (!this.products) return [];

        const recommendations = [];
        const scores = Object.entries(skinScores).sort((a, b) => a[1] - b[1]);
        
        // 점수가 낮은 상위 3개 지표
        const topConcerns = scores.slice(0, 3).map(([key]) => key);

        // 각 지표에 맞는 제품 찾기
        for (const concern of topConcerns) {
            const matchingProduct = this.products.find(product => {
                const indicators = product.related_indicators || [];
                return indicators.some(ind => 
                    ind === concern || 
                    ind.replace('_', '') === concern.replace('_', '')
                );
            });

            if (matchingProduct && !recommendations.includes(matchingProduct.id)) {
                recommendations.push(matchingProduct.id);
            }
        }

        // 추천 제품이 부족하면 토탈케어 제품 추가
        if (recommendations.length < 3) {
            const totalCareProduct = this.products.find(p => p.category === 'total-care');
            if (totalCareProduct && !recommendations.includes(totalCareProduct.id)) {
                recommendations.push(totalCareProduct.id);
            }
        }

        return recommendations.slice(0, 4);
    }
}

// 전역 인스턴스 생성
const productLoader = new ProductLoader();

// 내보내기
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProductLoader;
}
