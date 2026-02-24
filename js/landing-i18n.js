// 랜딩 페이지 다국어 지원
const landingTranslations = {
    ko: {
        // Hero Section
        hero_title: "AI 피부 진단<br>10초 만에 완성",
        hero_subtitle: "피부과에서 시작해 약국이 인정한<br><strong style='color: var(--neon-pink);'>엑소좀 메디컬 357 앰플</strong>",
        btn_start: "지금 시작하기",
        
        // Section 2: Indicators
        indicators_title: "10가지 피부 지표 분석",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>스킨케어 효과 UP, 첫 단계</strong><br>피부과 효과를 집까지 데려오는<br>첫 단계 케어",
        
        // Indicators
        moisture: "수분",
        elasticity: "탄력",
        wrinkles: "주름",
        pores: "모공",
        pigmentation: "색소침착",
        redness: "홍조",
        sensitivity: "민감도",
        acne: "여드름",
        brightness: "광채",
        texture: "결",
        
        // Section 3: Process
        process_title: "EXOBIO 357™ 앰플",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>29가지 피부 개선 조합을 추천</strong><br>간단한 3단계로 전문가 수준의<br>맞춤 솔루션을 경험하세요",
        
        step1_title: "언어 선택",
        step1_desc: "10개 언어 중 편한 언어를 선택하세요<br>한국어, 영어, 일본어, 중국어 등",
        step2_title: "얼굴 인식",
        step2_desc: "스마트폰으로 셀카를 촬영하면<br>AI가 자동으로 얼굴을 감지합니다",
        step3_title: "맞춤 결과",
        step3_desc: "10가지 지표 분석 결과와<br>EXOBIO 맞춤 제품 추천을 받으세요",
        
        // Section 4: CTA
        cta_title: "지금 바로 시작하세요",
        cta_subtitle: "버튼을 클릭하여<br>무료 AI 피부 진단을 시작하세요",
        cta_button: "무료 피부 진단 시작 →",
        cta_note: "✓ 100% 무료<br>✓ 10초 완성<br>✓ 10개 언어 지원",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO 공식 INFO",
        info_subtitle: "CURETEMBIO의 공식 SNS 팔로워를 해주세요.<br>정보를 꾸준하게 받을 수 있으며 AI 피부진단 시스템 운영에 도움이 됩니다.",
        info_official_channels: "공식 채널",
        info_official_sites: "공식 사이트",
        info_shopping: "쇼핑몰",
        info_contact: "문의",
        info_copyright: "© 2024 CURETEMBIO. All Rights Reserved.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "AI 피부진단 공식 사이트",
        info_diagnosis_desc: "AI 기반 10가지 피부 지표 분석 시스템",
        
        // Contact 섹션
        info_contact_title: "연락처",
        info_contact_email_label: "공식 이메일:",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "피부과에서 시작해 약국이 인정한",
        premium_hero_title: "엑소좀 메디컬 357™",
        premium_hero_desc: "약국 전용으로 시작된 엑소좀 앰플, 이제 고객님께 직접 전합니다.",
        
        // Premium Section: AKK Core Technology
        akk_title: "AKK™ 핵심기술력",
        akk_ai_title: "AI 기반 10초 피부 진단",
        akk_ai_desc: "10가지 피부 지표를 인공지능이 빠르게 분석",
        akk_medical_title: "K-Medical 인증 제품력",
        akk_medical_desc: "대한민국 식약처 인증, 안전한 의료급 품질",
        akk_beauty_title: "K-Beauty 프리미엄 제형",
        akk_beauty_desc: "세계가 인정한 한국 뷰티 기술력",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 첫 단계 케어를 매일 편안하게 이어가는 데일리 라인",
        exosome_product_subtitle: "피부과 효과를 집까지",
        exosome_product_desc: "약국 전문가가 추천하는 첫 단계 집중 케어 앰플입니다. 피부 장벽 강화와 수분 공급에 집중한 29가지 맞춤 조합으로 피부 본연의 힘을 키웁니다.",
        exosome_features_title: "핵심 성분",
        exosome_feature_1: "EXOSOME: 피부 재생 신호 전달",
        exosome_feature_2: "PDRN: 손상 피부 회복",
        exosome_feature_3: "CICA: 진정 & 보호",
        exosome_feature_4: "VITA: 브라이트닝",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 관리 강도를 높이고 싶을 때 선택하는 업그레이드 라인",
        red_product_subtitle: "집중 케어가 필요할 때",
        red_product_desc: "EXOSOME 라인으로 기초를 다진 후, 더 강력한 효과가 필요할 때 선택하는 프리미엄 라인입니다. 고농축 성분으로 빠른 개선 효과를 경험할 수 있습니다.",
        red_features_title: "고농축 설계",
        red_feature_1: "7,600 PPM 고농축 EXOSOME",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "고농도 VITA-C",
        
        // Premium Section: Final CTA
        final_cta_title: "지금 바로 시작하세요",
        final_cta_desc: "K-Medical 인증, 약국 전문가가 추천하는 프리미엄 엑소좀 스킨케어",
        final_cta_button: "공식 쇼핑몰 바로가기 →",
        
        // Footer Brand Description
        footer_brand_desc: "K-Medical 인증 엑소좀 스킨케어<br>AI 기반 피부 진단 시스템",
        footer_diagnosis_desc: "AI 10가지 피부 지표 분석, 29가지 조합으로 피부에 맞는 제품 추천"
    },
    
    en: {
        hero_title: "AI Skin Diagnosis<br>Complete in 10 Seconds",
        hero_subtitle: "Trusted by Dermatologists and Pharmacies<br><strong style='color: var(--neon-pink);'>Exosome Medical 357 Ampoule</strong>",
        btn_start: "Start Now",
        
        indicators_title: "10 Skin Indicators Analysis",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>Skincare Effect UP, First Step</strong><br>Bring Dermatology Effects<br>Home with First Step Care",
        
        moisture: "Moisture",
        elasticity: "Elasticity",
        wrinkles: "Wrinkles",
        pores: "Pores",
        pigmentation: "Pigmentation",
        redness: "Redness",
        sensitivity: "Sensitivity",
        acne: "Acne",
        brightness: "Brightness",
        texture: "Texture",
        
        process_title: "EXOBIO 357™ Ampoule",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>29 Skin Improvement Combinations</strong><br>Experience Professional-Level<br>Personalized Solutions in 3 Steps",
        
        step1_title: "Select Language",
        step1_desc: "Choose from 10 languages<br>Korean, English, Japanese, Chinese, etc.",
        step2_title: "Face Recognition",
        step2_desc: "Take a selfie with your smartphone<br>AI automatically detects your face",
        step3_title: "Personalized Results",
        step3_desc: "Get 10 indicator analysis results<br>and EXOBIO product recommendations",
        
        cta_title: "Start Now",
        cta_subtitle: "Click the button to<br>start your free AI skin diagnosis",
        cta_button: "Start Free Skin Diagnosis →",
        cta_note: "✓ 100% Free<br>✓ Complete in 10 seconds<br>✓ 10 Language Support",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO Official INFO",
        info_subtitle: "Follow our official SNS channels.<br>Stay updated and help us improve the AI skin diagnosis system.",
        info_official_channels: "Official Channels",
        info_official_sites: "Official Sites",
        info_shopping: "Shopping",
        info_contact: "Contact",
        info_copyright: "© 2024 CURETEMBIO. All Rights Reserved.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "Official AI Skin Diagnosis Site",
        info_diagnosis_desc: "AI-Based 10 Skin Indicator Analysis System",
        
        // Contact 섹션
        info_contact_title: "Contact",
        info_contact_email_label: "Official Email:",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "Started in Dermatology, Trusted by Pharmacies",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "Premium exosome ampoule exclusively for pharmacies, now directly to you.",
        
        // Premium Section: AKK Core Technology
        akk_title: "AKK™ Core Technology",
        akk_ai_title: "AI-Based 10-Second Skin Diagnosis",
        akk_ai_desc: "AI rapidly analyzes 10 skin indicators",
        akk_medical_title: "K-Medical Certified Product Quality",
        akk_medical_desc: "Korean FDA certified, safe medical-grade quality",
        akk_beauty_title: "K-Beauty Premium Formulation",
        akk_beauty_desc: "World-renowned Korean beauty technology",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 Daily line for comfortable first-step care every day",
        exosome_product_subtitle: "Bring Dermatology Effects Home",
        exosome_product_desc: "First-step intensive care ampoule recommended by pharmacy experts. 29 customized combinations focused on strengthening skin barrier and hydration to enhance your skin's natural power.",
        exosome_features_title: "Key Ingredients",
        exosome_feature_1: "EXOSOME: Skin regeneration signaling",
        exosome_feature_2: "PDRN: Damaged skin recovery",
        exosome_feature_3: "CICA: Soothing & protection",
        exosome_feature_4: "VITA: Brightening",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 Upgrade line chosen when you want to increase care intensity",
        red_product_subtitle: "When Intensive Care is Needed",
        red_product_desc: "Premium line chosen when stronger effects are needed after building foundation with EXOSOME line. Experience rapid improvement with highly concentrated ingredients.",
        red_features_title: "High Concentration Design",
        red_feature_1: "7,600 PPM High-Concentration EXOSOME",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "High-Concentration VITA-C",
        
        // Premium Section: Final CTA
        final_cta_title: "Start Now",
        final_cta_desc: "K-Medical Certified, Recommended by Pharmacy Experts<br>Premium EXOSOME Skincare",
        final_cta_button: "Go to Official Shop →",
        
        // Footer Brand Description
        footer_brand_desc: "K-Medical Certified EXOSOME Skincare<br>AI-Based Skin Diagnosis System",
        footer_diagnosis_desc: "AI 10 Skin Indicator Analysis, 29 Combinations for Personalized Product Recommendations"
    },
    
    ja: {
        hero_title: "AI肌診断<br>10秒で完成",
        hero_subtitle: "皮膚科から始まり薬局が認めた<br><strong style='color: var(--neon-pink);'>エクソソームメディカル357アンプル</strong>",
        btn_start: "今すぐ始める",
        
        indicators_title: "10項目の肌指標分析",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>スキンケア効果UP、第一歩</strong><br>皮膚科の効果を家まで<br>届ける第一歩ケア",
        
        moisture: "水分",
        elasticity: "弾力",
        wrinkles: "しわ",
        pores: "毛穴",
        pigmentation: "色素沈着",
        redness: "赤み",
        sensitivity: "敏感度",
        acne: "ニキビ",
        brightness: "明るさ",
        texture: "質感",
        
        process_title: "EXOBIO 357™ アンプル",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>29種類の肌改善組み合わせ</strong><br>簡単な3ステップで専門家レベルの<br>カスタムソリューション",
        
        step1_title: "言語選択",
        step1_desc: "10言語から選択<br>韓国語、英語、日本語、中国語など",
        step2_title: "顔認識",
        step2_desc: "スマートフォンで自撮りすると<br>AIが自動的に顔を検出します",
        step3_title: "カスタム結果",
        step3_desc: "10項目の分析結果と<br>EXOBIOカスタム製品推奨",
        
        cta_title: "今すぐ始める",
        cta_subtitle: "ボタンをクリックして<br>無料AI肌診断を開始",
        cta_button: "無料肌診断を始める →",
        cta_note: "✓ 100%無料<br>✓ 10秒で完成<br>✓ 10言語対応",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO 公式INFO",
        info_subtitle: "公式SNSをフォローしてください。<br>最新情報を受け取り、AI肌診断システムの運営をサポートします。",
        info_official_channels: "公式チャンネル",
        info_official_sites: "公式サイト",
        info_shopping: "ショッピング",
        info_contact: "お問い合わせ",
        info_copyright: "© 2024 CURETEMBIO. All Rights Reserved.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "AI肌診断公式サイト",
        info_diagnosis_desc: "AIベース10項目の肌指標分析システム",
        
        // Contact 섹션
        info_contact_title: "お問い合わせ",
        info_contact_email_label: "公式メール:",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "皮膚科から始まり、薬局が認めた",
        premium_hero_title: "エクソソームメディカル 357™",
        premium_hero_desc: "薬局専用として始まったエクソソームアンプル、今お客様に直接お届けします。",
        
        // Premium Section: AKK Core Technology
        akk_title: "AKK™ コア技術",
        akk_ai_title: "AI ベース10秒肌診断",
        akk_ai_desc: "AIが10項目の肌指標を迅速に分析",
        akk_medical_title: "K-Medical 認証製品力",
        akk_medical_desc: "韓国食薬処認証、安全な医療グレード品質",
        akk_beauty_title: "K-Beauty プレミアム処方",
        akk_beauty_desc: "世界が認めた韓国ビューティー技術力",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 第一歩ケアを毎日快適に続けるデイリーライン",
        exosome_product_subtitle: "皮膚科の効果を家まで",
        exosome_product_desc: "薬局専門家が推奨する第一歩集中ケアアンプルです。皮膚バリア強化と水分供給に集中した29種類のカスタム組み合わせで肌本来の力を育てます。",
        exosome_features_title: "主要成分",
        exosome_feature_1: "EXOSOME: 肌再生シグナル伝達",
        exosome_feature_2: "PDRN: 損傷肌回復",
        exosome_feature_3: "CICA: 鎮静＆保護",
        exosome_feature_4: "VITA: ブライトニング",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 ケア強度を高めたい時に選ぶアップグレードライン",
        red_product_subtitle: "集中ケアが必要な時",
        red_product_desc: "EXOSOMEラインで基礎を固めた後、より強力な効果が必要な時に選ぶプレミアムラインです。高濃縮成分で早い改善効果を体験できます。",
        red_features_title: "高濃縮設計",
        red_feature_1: "7,600 PPM 高濃縮 EXOSOME",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "高濃度 VITA-C",
        
        // Premium Section: Final CTA
        final_cta_title: "今すぐ始めましょう",
        final_cta_desc: "K-Medical 認証、薬局専門家が推奨する<br>プレミアムエクソソームスキンケア",
        final_cta_button: "公式ショップへ →",
        
        // Footer Brand Description
        footer_brand_desc: "K-Medical 認証エクソソームスキンケア<br>AIベース肌診断システム",
        footer_diagnosis_desc: "AI 10項目肌指標分析、29種類の組み合わせで肌に合った製品推奨"
    },
    
    "zh-TW": {
        hero_title: "AI皮膚診斷<br>10秒完成",
        hero_subtitle: "皮膚科起源，藥房認證<br><strong style='color: var(--neon-pink);'>外泌體醫學357安瓶</strong>",
        btn_start: "立即開始",
        
        indicators_title: "10項皮膚指標分析",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>護膚效果UP，第一步</strong><br>將皮膚科效果<br>帶回家的第一步護理",
        
        moisture: "水分",
        elasticity: "彈性",
        wrinkles: "皺紋",
        pores: "毛孔",
        pigmentation: "色素沉著",
        redness: "紅血絲",
        sensitivity: "敏感度",
        acne: "痘痘",
        brightness: "光澤",
        texture: "紋理",
        
        process_title: "EXOBIO 357™ 安瓶",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>29種皮膚改善組合推薦</strong><br>簡單3步即可獲得<br>專業級客製化方案",
        
        step1_title: "選擇語言",
        step1_desc: "從10種語言中選擇<br>韓語、英語、日語、中文等",
        step2_title: "面部識別",
        step2_desc: "用智能手機自拍<br>AI自動檢測面部",
        step3_title: "客製化結果",
        step3_desc: "獲取10項指標分析結果<br>和EXOBIO客製化產品推薦",
        
        cta_title: "立即開始",
        cta_subtitle: "點擊按鈕<br>開始免費AI皮膚診斷",
        cta_button: "開始免費皮膚診斷 →",
        cta_note: "✓ 100%免費<br>✓ 10秒完成<br>✓ 支援10種語言",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO 官方INFO",
        info_subtitle: "請關注我們的官方SNS。<br>獲取最新信息並幫助我們改進AI皮膚診斷系統。",
        info_official_channels: "官方頻道",
        info_official_sites: "官方網站",
        info_shopping: "購物",
        info_contact: "聯絡我們",
        info_copyright: "© 2024 CURETEMBIO. All Rights Reserved.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "AI皮膚診断官方網站",
        info_diagnosis_desc: "基於AI的10項皮膚指標分析系統",
        
        // Contact 섹션
        info_contact_title: "聯絡我們",
        info_contact_email_label: "官方電郵：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "始於皮膚科，藥房認可",
        premium_hero_title: "外泌體醫療 357™",
        premium_hero_desc: "藥房專用外泌體安瓶，現在直接提供給您。",
        
        // Premium Section: AKK Core Technology
        akk_title: "AKK™ 核心技術",
        akk_ai_title: "AI 驅動10秒皮膚診斷",
        akk_ai_desc: "AI快速分析10項皮膚指標",
        akk_medical_title: "K-Medical 認證產品力",
        akk_medical_desc: "韓國食藥署認證，安全醫療級品質",
        akk_beauty_title: "K-Beauty 高端配方",
        akk_beauty_desc: "世界認可的韓國美容技術力",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 每天舒適延續第一步護理的日常系列",
        exosome_product_subtitle: "將皮膚科效果帶回家",
        exosome_product_desc: "藥房專家推薦的第一步集中護理安瓶。專注於強化皮膚屏障和補水的29種客製化組合，增強肌膚本來的力量。",
        exosome_features_title: "核心成分",
        exosome_feature_1: "EXOSOME: 皮膚再生信號傳遞",
        exosome_feature_2: "PDRN: 受損皮膚修復",
        exosome_feature_3: "CICA: 鎮靜與保護",
        exosome_feature_4: "VITA: 亮白",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 想提高護理強度時選擇的升級系列",
        red_product_subtitle: "需要集中護理時",
        red_product_desc: "用EXOSOME系列打好基礎後，需要更強效果時選擇的高端系列。以高濃縮成分體驗快速改善效果。",
        red_features_title: "高濃縮設計",
        red_feature_1: "7,600 PPM 高濃縮 EXOSOME",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "高濃度 VITA-C",
        
        // Premium Section: Final CTA
        final_cta_title: "立即開始",
        final_cta_desc: "K-Medical 認證，藥房專家推薦的<br>高端外泌體護膚品",
        final_cta_button: "前往官方商城 →",
        
        // Footer Brand Description
        footer_brand_desc: "K-Medical 認證外泌體護膚品<br>基於AI的皮膚診斷系統",
        footer_diagnosis_desc: "AI 10項皮膚指標分析，29種組合推薦適合肌膚的產品"
    },
    
    th: {
        hero_title: "การวินิจฉัยผิว AI<br>เสร็จใน 10 วินาที",
        hero_subtitle: "เริ่มจากคลินิกผิวหนัง รับรองโดยร้านขายยา<br><strong style='color: var(--neon-pink);'>เอ็กโซโซม เมดิคัล 357 แอมพูล</strong>",
        btn_start: "เริ่มตอนนี้",
        
        indicators_title: "วิเคราะห์ 10 ตัวชี้วัดผิว",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>เพิ่มประสิทธิภาพการดูแลผิว ขั้นแรก</strong><br>นำผลลัพธ์จากคลินิกผิวหนัง<br>มาสู่บ้านคุณด้วยการดูแลขั้นแรก",
        
        moisture: "ความชุ่มชื้น",
        elasticity: "ความยืดหยุ่น",
        wrinkles: "ริ้วรอย",
        pores: "รูขุมขน",
        pigmentation: "จุดด่างดำ",
        redness: "ผิวแดง",
        sensitivity: "ความไวต่อแสง",
        acne: "สิว",
        brightness: "ความสว่าง",
        texture: "พื้นผิว",
        
        process_title: "EXOBIO 357™ แอมพูล",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>แนะนำ 29 การผสมผสานปรับปรุงผิว</strong><br>สัมผัสโซลูชันระดับมืออาชีพ<br>ใน 3 ขั้นตอนง่ายๆ",
        
        step1_title: "เลือกภาษา",
        step1_desc: "เลือกจาก 10 ภาษา<br>เกาหลี อังกฤษ ญี่ปุ่น จีน ฯลฯ",
        step2_title: "การจดจำใบหน้า",
        step2_desc: "ถ่ายเซลฟี่ด้วยสมาร์ทโฟน<br>AI จะตรวจจับใบหน้าโดยอัตโนมัติ",
        step3_title: "ผลลัพธ์ที่ปรับแต่ง",
        step3_desc: "รับผลการวิเคราะห์ 10 ตัวชี้วัด<br>และคำแนะนำผลิตภัณฑ์ EXOBIO",
        
        cta_title: "เริ่มตอนนี้เลย",
        cta_subtitle: "คลิกปุ่ม<br>เพื่อเริ่มการวินิจฉัยผิวด้วย AI ฟรี",
        cta_button: "เริ่มการวินิจฉัยผิวฟรี →",
        cta_note: "✓ ฟรี 100%<br>✓ เสร็จใน 10 วินาที<br>✓ รองรับ 10 ภาษา",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO อย่างเป็นทางการ",
        info_subtitle: "กรุณาติดตาม SNS อย่างเป็นทางการของเรา<br>รับข้อมูลอัปเดตและช่วยเราปรับปรุงระบบวินิจฉัยผิว AI",
        info_official_channels: "ช่องทางอย่างเป็นทางการ",
        info_official_sites: "เว็บไซต์อย่างเป็นทางการ",
        info_shopping: "ช้อปปิ้ง",
        info_contact: "ติดต่อเรา",
        info_copyright: "© 2024 CURETEMBIO. สงวนลิขสิทธิ์",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "เว็บไซต์วินิจฉัยผิว AI อย่างเป็นทางการ",
        info_diagnosis_desc: "ระบบวิเคราะห์ 10 ตัวชี้วัดผิวโดย AI",
        
        // Contact 섹션
        info_contact_title: "ติดต่อเรา",
        info_contact_email_label: "อีเมลอย่างเป็นทางการ：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "เริ่มจากคลินิกผิวหนัง รับรองโดยร้านขายยา",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "แอมพูลเอ็กโซโซมสำหรับร้านขายยาโดยเฉพาะ ตอนนี้ส่งตรงถึงคุณ",
        
        // Premium Section: AKK Core Technology
        akk_title: "AKK™ เทคโนโลยีหลัก",
        akk_ai_title: "การวินิจฉัยผิวโดย AI ใน 10 วินาที",
        akk_ai_desc: "AI วิเคราะห์ 10 ตัวชี้วัดผิวอย่างรวดเร็ว",
        akk_medical_title: "คุณภาพผลิตภัณฑ์ที่ได้รับการรับรอง K-Medical",
        akk_medical_desc: "รับรองโดย Korean FDA คุณภาพระดับการแพทย์ที่ปลอดภัย",
        akk_beauty_title: "สูตรพรีเมียม K-Beauty",
        akk_beauty_desc: "เทคโนโลยีความงามเกาหลีที่ได้รับการยอมรับทั่วโลก",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 สายผลิตภัณฑ์รายวันสำหรับการดูแลขั้นแรกที่สบายทุกวัน",
        exosome_product_subtitle: "นำผลจากคลินิกผิวหนังมาสู่บ้าน",
        exosome_product_desc: "แอมพูลดูแลเข้มข้นขั้นแรกที่ผู้เชี่ยวชาญร้านขายยาแนะนำ ผสมผสานที่กำหนดเอง 29 แบบที่เน้นการเสริมสร้างเกราะป้องกันผิวและความชุ่มชื้นเพื่อเพิ่มพลังตามธรรมชาติของผิว",
        exosome_features_title: "ส่วนผสมหลัก",
        exosome_feature_1: "EXOSOME: การส่งสัญญาณการฟื้นฟูผิว",
        exosome_feature_2: "PDRN: การฟื้นฟูผิวที่เสียหาย",
        exosome_feature_3: "CICA: ผ่อนคลายและปกป้อง",
        exosome_feature_4: "VITA: ทำให้สว่างขึ้น",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 สายผลิตภัณฑ์อัปเกรดที่เลือกเมื่อต้องการเพิ่มความเข้มข้นในการดูแล",
        red_product_subtitle: "เมื่อต้องการการดูแลเข้มข้น",
        red_product_desc: "สายผลิตภัณฑ์พรีเมียมที่เลือกเมื่อต้องการผลที่แรงขึ้นหลังจากสร้างพื้นฐานด้วยสาย EXOSOME สัมผัสการปรับปรุงอย่างรวดเร็วด้วยส่วนผสมเข้มข้นสูง",
        red_features_title: "การออกแบบเข้มข้นสูง",
        red_feature_1: "7,600 PPM EXOSOME เข้มข้นสูง",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "VITA-C เข้มข้นสูง",
        
        // Premium Section: Final CTA
        final_cta_title: "เริ่มตอนนี้",
        final_cta_desc: "ได้รับการรับรอง K-Medical แนะนำโดยผู้เชี่ยวชาญร้านขายยา<br>การดูแลผิวด้วย EXOSOME พรีเมียม",
        final_cta_button: "ไปที่ร้านค้าอย่างเป็นทางการ →",
        
        // Footer Brand Description
        footer_brand_desc: "การดูแลผิวด้วย EXOSOME ที่ได้รับการรับรอง K-Medical<br>ระบบการวินิจฉัยผิวด้วย AI",
        footer_diagnosis_desc: "การวิเคราะห์ตัวชี้วัดผิว 10 รายการด้วย AI, 29 สูตรเพื่อแนะนำผลิตภัณฑ์ที่เหมาะกับผิว"
    },
    
    vi: {
        hero_title: "Chẩn đoán da AI<br>Hoàn thành trong 10 giây",
        hero_subtitle: "Bắt đầu từ phòng khám da liễu, được nhà thuốc công nhận<br><strong style='color: var(--neon-pink);'>Exosome Medical 357 Ampoule</strong>",
        btn_start: "Bắt đầu ngay",
        
        indicators_title: "Phân tích 10 chỉ số da",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>Hiệu quả chăm sóc da UP, Bước đầu tiên</strong><br>Đem hiệu quả da liễu<br>về nhà với liệu trình bước đầu",
        
        moisture: "Độ ẩm",
        elasticity: "Độ đàn hồi",
        wrinkles: "Nếp nhăn",
        pores: "Lỗ chân lông",
        pigmentation: "Sắc tố",
        redness: "Đỏ da",
        sensitivity: "Độ nhạy cảm",
        acne: "Mụn",
        brightness: "Độ sáng",
        texture: "Kết cấu",
        
        process_title: "EXOBIO 357™ Ampoule",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>Đề xuất 29 tổ hợp cải thiện da</strong><br>Trải nghiệm giải pháp<br>chuyên nghiệp trong 3 bước",
        
        step1_title: "Chọn ngôn ngữ",
        step1_desc: "Chọn từ 10 ngôn ngữ<br>Hàn, Anh, Nhật, Trung, v.v.",
        step2_title: "Nhận diện khuôn mặt",
        step2_desc: "Chụp selfie bằng điện thoại<br>AI tự động phát hiện khuôn mặt",
        step3_title: "Kết quả cá nhân hóa",
        step3_desc: "Nhận kết quả phân tích 10 chỉ số<br>và đề xuất sản phẩm EXOBIO",
        
        cta_title: "Bắt đầu ngay bây giờ",
        cta_subtitle: "Nhấp vào nút<br>để bắt đầu chẩn đoán da AI miễn phí",
        cta_button: "Bắt đầu chẩn đoán da miễn phí →",
        cta_note: "✓ Miễn phí 100%<br>✓ Hoàn thành trong 10 giây<br>✓ Hỗ trợ 10 ngôn ngữ",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Chính thức",
        info_subtitle: "Vui lòng theo dõi các kênh SNS chính thức của chúng tôi.<br>Nhận thông tin cập nhật và giúp chúng tôi cải thiện hệ thống chẩn đoán da AI.",
        info_official_channels: "Kênh chính thức",
        info_official_sites: "Website chính thức",
        info_shopping: "Mua sắm",
        info_contact: "Liên hệ",
        info_copyright: "© 2024 CURETEMBIO. Bản quyền đã được bảo hộ.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "Website Chẩn đoán Da AI Chính thức",
        info_diagnosis_desc: "Hệ thống Phân tích 10 Chỉ số Da Dựa trên AI",
        
        // Contact 섹션
        info_contact_title: "Liên hệ",
        info_contact_email_label: "Email chính thức：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "Bắt đầu từ phòng khám da liễu, được nhà thuốc công nhận",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "Serum exosome cao cấp dành riêng cho nhà thuốc, giờ đây giao trực tiếp đến bạn.",
        
        // Premium Section: AKK Core Technology
        akk_title: "Công nghệ cốt lõi AKK™",
        akk_ai_title: "Chẩn đoán da bằng AI trong 10 giây",
        akk_ai_desc: "AI phân tích nhanh chóng 10 chỉ số da",
        akk_medical_title: "Chất lượng sản phẩm được chứng nhận K-Medical",
        akk_medical_desc: "Được chứng nhận bởi Cục quản lý thực phẩm và dược phẩm Hàn Quốc, chất lượng y tế an toàn",
        akk_beauty_title: "Công thức cao cấp K-Beauty",
        akk_beauty_desc: "Công nghệ làm đẹp Hàn Quốc được thế giới công nhận",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 Dòng sản phẩm hàng ngày cho bước chăm sóc đầu tiên thoải mái mỗi ngày",
        exosome_product_subtitle: "Mang hiệu quả phòng khám da liễu về nhà",
        exosome_product_desc: "Serum chăm sóc tập trung bước đầu tiên được các chuyên gia nhà thuốc khuyên dùng. 29 công thức tùy chỉnh tập trung vào tăng cường hàng rào da và cung cấp độ ẩm để nâng cao sức mạnh tự nhiên của làn da.",
        exosome_features_title: "Thành phần chính",
        exosome_feature_1: "EXOSOME: Truyền tín hiệu tái tạo da",
        exosome_feature_2: "PDRN: Phục hồi da bị tổn thương",
        exosome_feature_3: "CICA: Làm dịu & bảo vệ",
        exosome_feature_4: "VITA: Làm sáng da",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 Dòng nâng cấp được chọn khi muốn tăng cường độ chăm sóc",
        red_product_subtitle: "Khi cần chăm sóc tập trung",
        red_product_desc: "Dòng cao cấp được chọn khi cần hiệu quả mạnh hơn sau khi xây dựng nền tảng với dòng EXOSOME. Trải nghiệm hiệu quả cải thiện nhanh chóng với các thành phần c农độ cao.",
        red_features_title: "Thiết kế nồng độ cao",
        red_feature_1: "7,600 PPM EXOSOME nồng độ cao",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "VITA-C nồng độ cao",
        
        // Premium Section: Final CTA
        final_cta_title: "Bắt đầu ngay bây giờ",
        final_cta_desc: "Được chứng nhận K-Medical, được các chuyên gia nhà thuốc khuyên dùng<br>Chăm sóc da EXOSOME cao cấp",
        final_cta_button: "Đến cửa hàng chính thức →",
        
        // Footer Brand Description
        footer_brand_desc: "Chăm sóc da EXOSOME được chứng nhận K-Medical<br>Hệ thống chẩn đoán da dựa trên AI",
        footer_diagnosis_desc: "Phân tích 10 chỉ số da bằng AI, 29 công thức để đề xuất sản phẩm phù hợp với làn da của bạn"
    },
    
    id: {
        hero_title: "Diagnosis Kulit AI<br>Selesai dalam 10 Detik",
        hero_subtitle: "Dimulai dari klinik kulit, diakui oleh apotek<br><strong style='color: var(--neon-pink);'>Exosome Medical 357 Ampoule</strong>",
        btn_start: "Mulai Sekarang",
        
        indicators_title: "Analisis 10 Indikator Kulit",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>Efek Perawatan Kulit UP, Langkah Pertama</strong><br>Bawa efek dermatologi<br>ke rumah dengan perawatan langkah pertama",
        
        moisture: "Kelembaban",
        elasticity: "Elastisitas",
        wrinkles: "Kerutan",
        pores: "Pori-pori",
        pigmentation: "Pigmentasi",
        redness: "Kemerahan",
        sensitivity: "Sensitivitas",
        acne: "Jerawat",
        brightness: "Kecerahan",
        texture: "Tekstur",
        
        process_title: "EXOBIO 357™ Ampoule",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>Merekomendasikan 29 kombinasi perbaikan kulit</strong><br>Rasakan solusi tingkat profesional<br>dalam 3 langkah sederhana",
        
        step1_title: "Pilih Bahasa",
        step1_desc: "Pilih dari 10 bahasa<br>Korea, Inggris, Jepang, Cina, dll.",
        step2_title: "Pengenalan Wajah",
        step2_desc: "Ambil selfie dengan smartphone<br>AI secara otomatis mendeteksi wajah",
        step3_title: "Hasil Kustom",
        step3_desc: "Dapatkan hasil analisis 10 indikator<br>dan rekomendasi produk EXOBIO",
        
        cta_title: "Mulai Sekarang",
        cta_subtitle: "Klik tombol<br>untuk memulai diagnosis kulit AI gratis",
        cta_button: "Mulai Diagnosis Kulit Gratis →",
        cta_note: "✓ 100% Gratis<br>✓ Selesai dalam 10 detik<br>✓ Dukungan 10 bahasa",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Resmi",
        info_subtitle: "Ikuti channel SNS resmi kami.<br>Dapatkan informasi terbaru dan bantu kami meningkatkan sistem diagnosis kulit AI.",
        info_official_channels: "Channel Resmi",
        info_official_sites: "Situs Resmi",
        info_shopping: "Belanja",
        info_contact: "Hubungi Kami",
        info_copyright: "© 2024 CURETEMBIO. Hak Cipta Dilindungi.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "Situs Diagnosis Kulit AI Resmi",
        info_diagnosis_desc: "Sistem Analisis 10 Indikator Kulit Berbasis AI",
        
        // Contact 섹션
        info_contact_title: "Hubungi Kami",
        info_contact_email_label: "Email Resmi：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "Dimulai dari klinik kulit, diakui oleh apotek",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "Ampul exosome premium khusus apotek, sekarang langsung untuk Anda.",
        
        // Premium Section: AKK Core Technology
        akk_title: "Teknologi Inti AKK™",
        akk_ai_title: "Diagnosis Kulit Berbasis AI 10 Detik",
        akk_ai_desc: "AI menganalisis 10 indikator kulit dengan cepat",
        akk_medical_title: "Kualitas Produk Bersertifikat K-Medical",
        akk_medical_desc: "Bersertifikat BPOM Korea, kualitas medical-grade yang aman",
        akk_beauty_title: "Formulasi Premium K-Beauty",
        akk_beauty_desc: "Teknologi kecantikan Korea yang diakui dunia",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 Lini harian untuk perawatan langkah pertama yang nyaman setiap hari",
        exosome_product_subtitle: "Bawa Efek Dermatologi ke Rumah",
        exosome_product_desc: "Ampul perawatan intensif langkah pertama yang direkomendasikan ahli apotek. 29 kombinasi khusus yang fokus pada penguatan skin barrier dan hidrasi untuk meningkatkan kekuatan alami kulit Anda.",
        exosome_features_title: "Bahan Utama",
        exosome_feature_1: "EXOSOME: Sinyal regenerasi kulit",
        exosome_feature_2: "PDRN: Pemulihan kulit rusak",
        exosome_feature_3: "CICA: Menenangkan & melindungi",
        exosome_feature_4: "VITA: Mencerahkan",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 Lini upgrade yang dipilih saat ingin meningkatkan intensitas perawatan",
        red_product_subtitle: "Saat Perawatan Intensif Diperlukan",
        red_product_desc: "Lini premium yang dipilih saat membutuhkan efek lebih kuat setelah membangun fondasi dengan lini EXOSOME. Rasakan peningkatan cepat dengan bahan berkonsentrasi tinggi.",
        red_features_title: "Desain Konsentrasi Tinggi",
        red_feature_1: "7,600 PPM EXOSOME Konsentrasi Tinggi",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "VITA-C Konsentrasi Tinggi",
        
        // Premium Section: Final CTA
        final_cta_title: "Mulai Sekarang",
        final_cta_desc: "Bersertifikat K-Medical, Direkomendasikan Ahli Apotek<br>Perawatan Kulit EXOSOME Premium",
        final_cta_button: "Ke Toko Resmi →",
        
        // Footer Brand Description
        footer_brand_desc: "Perawatan Kulit EXOSOME Bersertifikat K-Medical<br>Sistem Diagnosis Kulit Berbasis AI",
        footer_diagnosis_desc: "Analisis 10 Indikator Kulit AI, 29 Kombinasi untuk Rekomendasi Produk yang Sesuai"
    },
    
    ms: {
        hero_title: "Diagnosis Kulit AI<br>Selesai dalam 10 Saat",
        hero_subtitle: "Bermula dari klinik kulit, diiktiraf oleh farmasi<br><strong style='color: var(--neon-pink);'>Exosome Medical 357 Ampoule</strong>",
        btn_start: "Mula Sekarang",
        
        indicators_title: "Analisis 10 Penunjuk Kulit",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>Kesan Penjagaan Kulit UP, Langkah Pertama</strong><br>Bawa kesan dermatologi<br>ke rumah dengan penjagaan langkah pertama",
        
        moisture: "Kelembapan",
        elasticity: "Keanjalan",
        wrinkles: "Kedutan",
        pores: "Liang Roma",
        pigmentation: "Pigmentasi",
        redness: "Kemerahan",
        sensitivity: "Kepekaan",
        acne: "Jerawat",
        brightness: "Kecerahan",
        texture: "Tekstur",
        
        process_title: "EXOBIO 357™ Ampoule",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>Mengesyorkan 29 kombinasi penambahbaikan kulit</strong><br>Alami penyelesaian peringkat profesional<br>dalam 3 langkah mudah",
        
        step1_title: "Pilih Bahasa",
        step1_desc: "Pilih dari 10 bahasa<br>Korea, Inggeris, Jepun, Cina, dll.",
        step2_title: "Pengiktirafan Wajah",
        step2_desc: "Ambil swafoto dengan telefon pintar<br>AI mengesan wajah secara automatik",
        step3_title: "Keputusan Tersuai",
        step3_desc: "Dapatkan hasil analisis 10 penunjuk<br>dan cadangan produk EXOBIO",
        
        cta_title: "Mula Sekarang",
        cta_subtitle: "Klik butang<br>untuk memulakan diagnosis kulit AI percuma",
        cta_button: "Mula Diagnosis Kulit Percuma →",
        cta_note: "✓ 100% Percuma<br>✓ Selesai dalam 10 saat<br>✓ Sokongan 10 bahasa",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Rasmi",
        info_subtitle: "Ikuti saluran SNS rasmi kami.<br>Dapatkan kemas kini dan bantu kami meningkatkan sistem diagnosis kulit AI.",
        info_official_channels: "Saluran Rasmi",
        info_official_sites: "Laman Web Rasmi",
        info_shopping: "Beli-belah",
        info_contact: "Hubungi Kami",
        info_copyright: "© 2024 CURETEMBIO. Hak Cipta Terpelihara.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "Laman Web Diagnosis Kulit AI Rasmi",
        info_diagnosis_desc: "Sistem Analisis 10 Penunjuk Kulit Berasaskan AI",
        
        // Contact 섹션
        info_contact_title: "Hubungi Kami",
        info_contact_email_label: "E-mel Rasmi：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "Bermula dari klinik kulit, diiktiraf oleh farmasi",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "Ampul exosome premium khas farmasi, kini terus kepada anda.",
        
        // Premium Section: AKK Core Technology
        akk_title: "Teknologi Teras AKK™",
        akk_ai_title: "Diagnosis Kulit Berasaskan AI 10 Saat",
        akk_ai_desc: "AI menganalisis 10 penunjuk kulit dengan pantas",
        akk_medical_title: "Kualiti Produk Bertauliah K-Medical",
        akk_medical_desc: "Bertauliah FDA Korea, kualiti gred perubatan yang selamat",
        akk_beauty_title: "Formulasi Premium K-Beauty",
        akk_beauty_desc: "Teknologi kecantikan Korea yang diiktiraf dunia",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 Barisan harian untuk penjagaan langkah pertama yang selesa setiap hari",
        exosome_product_subtitle: "Bawa Kesan Dermatologi ke Rumah",
        exosome_product_desc: "Ampul penjagaan intensif langkah pertama yang disyorkan pakar farmasi. 29 kombinasi tersuai yang fokus pada pengukuhan penghalang kulit dan penghidratan untuk meningkatkan kuasa semula jadi kulit anda.",
        exosome_features_title: "Bahan Utama",
        exosome_feature_1: "EXOSOME: Isyarat penjanaan semula kulit",
        exosome_feature_2: "PDRN: Pemulihan kulit rosak",
        exosome_feature_3: "CICA: Menenangkan & melindungi",
        exosome_feature_4: "VITA: Mencerahkan",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 Barisan naik taraf yang dipilih apabila ingin meningkatkan keamatan penjagaan",
        red_product_subtitle: "Apabila Penjagaan Intensif Diperlukan",
        red_product_desc: "Barisan premium yang dipilih apabila memerlukan kesan lebih kuat selepas membina asas dengan barisan EXOSOME. Alami peningkatan pantas dengan ramuan berkepekatan tinggi.",
        red_features_title: "Reka Bentuk Kepekatan Tinggi",
        red_feature_1: "7,600 PPM EXOSOME Kepekatan Tinggi",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "VITA-C Kepekatan Tinggi",
        
        // Premium Section: Final CTA
        final_cta_title: "Mula Sekarang",
        final_cta_desc: "Bertauliah K-Medical, Disyorkan Pakar Farmasi<br>Penjagaan Kulit EXOSOME Premium",
        final_cta_button: "Ke Kedai Rasmi →",
        
        // Footer Brand Description
        footer_brand_desc: "Penjagaan Kulit EXOSOME Bertauliah K-Medical<br>Sistem Diagnosis Kulit Berasaskan AI",
        footer_diagnosis_desc: "Analisis 10 Penunjuk Kulit AI, 29 Kombinasi untuk Cadangan Produk yang Sesuai"
    },
    
    es: {
        hero_title: "Diagnóstico de piel AI<br>Completo en 10 segundos",
        hero_subtitle: "Comenzó en clínicas dermatológicas, aprobado por farmacias<br><strong style='color: var(--neon-pink);'>Exosome Medical 357 Ampoule</strong>",
        btn_start: "Comenzar ahora",
        
        indicators_title: "Análisis de 10 indicadores de piel",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>Efecto de cuidado de la piel UP, Primer paso</strong><br>Trae los efectos dermatológicos<br>a casa con el cuidado del primer paso",
        
        moisture: "Hidratación",
        elasticity: "Elasticidad",
        wrinkles: "Arrugas",
        pores: "Poros",
        pigmentation: "Pigmentación",
        redness: "Enrojecimiento",
        sensitivity: "Sensibilidad",
        acne: "Acné",
        brightness: "Brillo",
        texture: "Textura",
        
        process_title: "EXOBIO 357™ Ampoule",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>Recomienda 29 combinaciones de mejora de la piel</strong><br>Experimenta soluciones de nivel profesional<br>en 3 pasos simples",
        
        step1_title: "Seleccionar idioma",
        step1_desc: "Elige entre 10 idiomas<br>Coreano, Inglés, Japonés, Chino, etc.",
        step2_title: "Reconocimiento facial",
        step2_desc: "Toma una selfie con tu smartphone<br>AI detecta automáticamente tu rostro",
        step3_title: "Resultados personalizados",
        step3_desc: "Obtén resultados de análisis de 10 indicadores<br>y recomendaciones de productos EXOBIO",
        
        cta_title: "Comienza ahora",
        cta_subtitle: "Haz clic en el botón<br>para iniciar el diagnóstico de piel AI gratuito",
        cta_button: "Iniciar diagnóstico de piel gratis →",
        cta_note: "✓ 100% gratis<br>✓ Completo en 10 segundos<br>✓ Soporte de 10 idiomas",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Oficial",
        info_subtitle: "Sigue nuestros canales SNS oficiales.<br>Manténte actualizado y ayúdanos a mejorar el sistema de diagnóstico de piel AI.",
        info_official_channels: "Canales Oficiales",
        info_official_sites: "Sitios Oficiales",
        info_shopping: "Compras",
        info_contact: "Contacto",
        info_copyright: "© 2024 CURETEMBIO. Todos los derechos reservados.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "Sitio Oficial de Diagnóstico de Piel AI",
        info_diagnosis_desc: "Sistema de Análisis de 10 Indicadores de Piel Basado en AI",
        
        // Contact 섹션
        info_contact_title: "Contacto",
        info_contact_email_label: "Correo electrónico oficial：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "Comenzó en dermatología, aprobado por farmacias",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "Ampolla de exosomas premium exclusiva para farmacias, ahora directamente para ti.",
        
        // Premium Section: AKK Core Technology
        akk_title: "Tecnología Central AKK™",
        akk_ai_title: "Diagnóstico Cutáneo con IA en 10 Segundos",
        akk_ai_desc: "IA analiza rápidamente 10 indicadores cutáneos",
        akk_medical_title: "Calidad de Producto Certificada K-Medical",
        akk_medical_desc: "Certificado por la FDA de Corea, calidad de grado médico segura",
        akk_beauty_title: "Formulación Premium K-Beauty",
        akk_beauty_desc: "Tecnología de belleza coreana reconocida mundialmente",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 Línea diaria para un cuidado cómodo del primer paso cada día",
        exosome_product_subtitle: "Trae los Efectos Dermatológicos a Casa",
        exosome_product_desc: "Ampolla de cuidado intensivo del primer paso recomendada por expertos farmacéuticos. 29 combinaciones personalizadas enfocadas en fortalecer la barrera cutánea y la hidratación para potenciar el poder natural de tu piel.",
        exosome_features_title: "Ingredientes Clave",
        exosome_feature_1: "EXOSOME: Señalización de regeneración cutánea",
        exosome_feature_2: "PDRN: Recuperación de piel dañada",
        exosome_feature_3: "CICA: Calmante y protección",
        exosome_feature_4: "VITA: Iluminación",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 Línea mejorada elegida cuando se desea aumentar la intensidad del cuidado",
        red_product_subtitle: "Cuando se Necesita Cuidado Intensivo",
        red_product_desc: "Línea premium elegida cuando se necesitan efectos más fuertes después de construir una base con la línea EXOSOME. Experimenta mejoras rápidas con ingredientes de alta concentración.",
        red_features_title: "Diseño de Alta Concentración",
        red_feature_1: "7,600 PPM EXOSOME de Alta Concentración",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "VITA-C de Alta Concentración",
        
        // Premium Section: Final CTA
        final_cta_title: "Comienza Ahora",
        final_cta_desc: "Certificado K-Medical, Recomendado por Expertos Farmacéuticos<br>Cuidado de la Piel EXOSOME Premium",
        final_cta_button: "Ir a la Tienda Oficial →",
        
        // Footer Brand Description
        footer_brand_desc: "Cuidado de la Piel EXOSOME Certificado K-Medical<br>Sistema de Diagnóstico de Piel Basado en AI",
        footer_diagnosis_desc: "Análisis de 10 Indicadores de Piel con AI, 29 Combinaciones para Recomendaciones de Productos Personalizados"
    },
    
    fr: {
        hero_title: "Diagnostic Cutané IA<br>Complet en 10 Secondes",
        hero_subtitle: "Commencé dans les cliniques dermatologiques, approuvé par les pharmacies<br><strong style='color: var(--neon-pink);'>Exosome Medical 357 Ampoule</strong>",
        btn_start: "Commencer maintenant",
        
        indicators_title: "Analyse de 10 Indicateurs Cutanés",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>Effet de Soins UP, Première Étape</strong><br>Apportez les effets dermatologiques<br>chez vous avec le soin de première étape",
        
        moisture: "Hydratation",
        elasticity: "Élasticité",
        wrinkles: "Rides",
        pores: "Pores",
        pigmentation: "Pigmentation",
        redness: "Rougeurs",
        sensitivity: "Sensibilité",
        acne: "Acné",
        brightness: "Luminosité",
        texture: "Texture",
        
        process_title: "EXOBIO 357™ Ampoule",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>29 Combinaisons d'Amélioration Cutanée</strong><br>Expérimentez des solutions de niveau professionnel<br>en 3 étapes simples",
        
        step1_title: "Sélectionner la Langue",
        step1_desc: "Choisissez parmi 10 langues<br>Coréen, Anglais, Japonais, Chinois, etc.",
        step2_title: "Reconnaissance Faciale",
        step2_desc: "Prenez un selfie avec votre smartphone<br>L'IA détecte automatiquement votre visage",
        step3_title: "Résultats Personnalisés",
        step3_desc: "Obtenez les résultats d'analyse de 10 indicateurs<br>et les recommandations de produits EXOBIO",
        
        cta_title: "Commencez maintenant",
        cta_subtitle: "Cliquez sur le bouton<br>pour démarrer votre diagnostic cutané IA gratuit",
        cta_button: "Démarrer le Diagnostic Cutané Gratuit →",
        cta_note: "✓ 100% Gratuit<br>✓ Complet en 10 secondes<br>✓ Support de 10 Langues",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Officiel",
        info_subtitle: "Suivez nos canaux SNS officiels.<br>Restez informé et aidez-nous à améliorer le système de diagnostic cutané IA.",
        info_official_channels: "Canaux Officiels",
        info_official_sites: "Sites Officiels",
        info_shopping: "Boutique",
        info_contact: "Contact",
        info_copyright: "© 2024 CURETEMBIO. Tous droits réservés.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "Site Officiel de Diagnostic Cutané IA",
        info_diagnosis_desc: "Système d'Analyse de 10 Indicateurs Cutanés Basé sur l'IA",
        
        // Contact 섹션
        info_contact_title: "Contact",
        info_contact_email_label: "E-mail officiel：",
        
        // Premium Section: Hero Slider
        premium_hero_subtitle: "Commencé en dermatologie, approuvé par les pharmacies",
        premium_hero_title: "EXOSOME Medical 357™",
        premium_hero_desc: "Ampoule d'exosomes premium exclusive aux pharmacies, maintenant directement pour vous.",
        
        // Premium Section: AKK Core Technology
        akk_title: "Technologie de Base AKK™",
        akk_ai_title: "Diagnostic Cutané IA en 10 Secondes",
        akk_ai_desc: "L'IA analyse rapidement 10 indicateurs cutanés",
        akk_medical_title: "Qualité de Produit Certifiée K-Medical",
        akk_medical_desc: "Certifié par la FDA coréenne, qualité médicale sûre",
        akk_beauty_title: "Formulation Premium K-Beauty",
        akk_beauty_desc: "Technologie de beauté coréenne reconnue mondialement",
        
        // Premium Section: EXOSOME Product
        exosome_product_title: "BIO 357™ EXOSOME",
        exosome_product_highlight: "👉 Gamme quotidienne pour un soin confortable de première étape chaque jour",
        exosome_product_subtitle: "Apportez les Effets Dermatologiques chez Vous",
        exosome_product_desc: "Ampoule de soin intensif de première étape recommandée par les experts pharmaceutiques. 29 combinaisons personnalisées axées sur le renforcement de la barrière cutanée et l'hydratation pour améliorer la puissance naturelle de votre peau.",
        exosome_features_title: "Ingrédients Clés",
        exosome_feature_1: "EXOSOME: Signalisation de régénération cutanée",
        exosome_feature_2: "PDRN: Récupération de la peau endommagée",
        exosome_feature_3: "CICA: Apaisant et protection",
        exosome_feature_4: "VITA: Éclaircissement",
        
        // Premium Section: RED Product
        red_product_title: "BIO 357™ RED",
        red_product_highlight: "👉 Gamme améliorée choisie lorsque vous souhaitez augmenter l'intensité des soins",
        red_product_subtitle: "Quand les Soins Intensifs sont Nécessaires",
        red_product_desc: "Gamme premium choisie lorsque des effets plus forts sont nécessaires après avoir construit une base avec la gamme EXOSOME. Vivez des améliorations rapides avec des ingrédients hautement concentrés.",
        red_features_title: "Conception Haute Concentration",
        red_feature_1: "7,600 PPM EXOSOME Haute Concentration",
        red_feature_2: "10,000 PPM PDRN",
        red_feature_3: "Triple CICA Complex",
        red_feature_4: "VITA-C Haute Concentration",
        
        // Premium Section: Final CTA
        final_cta_title: "Commencez Maintenant",
        final_cta_desc: "Certifié K-Medical, Recommandé par les Experts Pharmaceutiques<br>Soin de la Peau EXOSOME Premium",
        final_cta_button: "Aller à la Boutique Officielle →",
        
        // Footer Brand Description
        footer_brand_desc: "Soin de la Peau EXOSOME Certifié K-Medical<br>Système de Diagnostic Cutané Basé sur l'IA",
        footer_diagnosis_desc: "Analyse de 10 Indicateurs Cutanés par IA, 29 Combinaisons pour des Recommandations de Produits Personnalisés"
    }
};

// 언어별 플래그 (국기 제거)
const languageFlags = {
    ko: '',
    en: '',
    ja: '',
    'zh-TW': '',
    th: '',
    vi: '',
    id: '',
    ms: '',
    es: '',
    fr: ''
};

// 언어별 이름
const languageNames = {
    ko: '한국어',
    en: 'English',
    ja: '日本語',
    'zh-TW': '中文',
    th: 'ภาษาไทย',
    vi: 'Tiếng Việt',
    id: 'Bahasa Indonesia',
    ms: 'Bahasa Melayu',
    es: 'Español',
    fr: 'Français'
};

// 현재 언어 가져오기
// 현재 언어 가져오기
function getCurrentLanguage() {
    return localStorage.getItem('language') || localStorage.getItem('landingLanguage') || 'ko';
}

// 언어 저장
function saveLanguage(lang) {
    localStorage.setItem('language', lang);
    localStorage.setItem('landingLanguage', lang);
    localStorage.setItem('preferred_language', lang);
}

// 텍스트 번역
function translatePage(lang) {
    const translations = landingTranslations[lang] || landingTranslations.ko;
    
    // 모든 data-i18n 요소 번역
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.innerHTML = translations[key];
        }
    });
    
    // HTML lang 속성 변경
    document.documentElement.lang = lang;
    
    // 언어 선택기 업데이트
    const selector = document.getElementById('language-selector-landing');
    if (selector) {
        selector.textContent = `${languageFlags[lang]} ${languageNames[lang]}`;
    }
}

// 언어 변경
function changeLandingLanguage(lang) {
    saveLanguage(lang);
    translatePage(lang);
    
    // 드롭다운 닫기
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    translatePage(currentLang);
    
    // 언어 선택기 드롭다운 토글
    const selector = document.getElementById('language-selector-landing');
    const dropdown = document.querySelector('.language-dropdown');
    
    if (selector && dropdown) {
        selector.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        // 바깥 클릭 시 닫기
        document.addEventListener('click', function() {
            dropdown.classList.remove('active');
        });
        
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});
