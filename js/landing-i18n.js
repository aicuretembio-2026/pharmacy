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
        info_contact_email_label: "공식 이메일:"
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
        info_contact_email_label: "Official Email:"
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
        info_contact_email_label: "公式メール:"
    },
    
    "zh-CN": {
        hero_title: "AI皮肤诊断<br>10秒完成",
        hero_subtitle: "皮肤科起源，药房认证<br><strong style='color: var(--neon-pink);'>外泌体医学357安瓶</strong>",
        btn_start: "立即开始",
        
        indicators_title: "10项皮肤指标分析",
        indicators_subtitle: "<strong style='color: var(--neon-pink);'>护肤效果UP，第一步</strong><br>将皮肤科效果<br>带回家的第一步护理",
        
        moisture: "水分",
        elasticity: "弹性",
        wrinkles: "皱纹",
        pores: "毛孔",
        pigmentation: "色素沉着",
        redness: "红血丝",
        sensitivity: "敏感度",
        acne: "痘痘",
        brightness: "光泽",
        texture: "纹理",
        
        process_title: "EXOBIO 357™ 安瓶",
        process_subtitle: "<strong style='color: var(--neon-turquoise);'>29种皮肤改善组合推荐</strong><br>简单3步即可获得<br>专业级定制方案",
        
        step1_title: "选择语言",
        step1_desc: "从10种语言中选择<br>韩语、英语、日语、中文等",
        step2_title: "面部识别",
        step2_desc: "用智能手机自拍<br>AI自动检测面部",
        step3_title: "定制结果",
        step3_desc: "获取10项指标分析结果<br>和EXOBIO定制产品推荐",
        
        cta_title: "立即开始",
        cta_subtitle: "点击按钮<br>开始免费AI皮肤诊断",
        cta_button: "开始免费皮肤诊断 →",
        cta_note: "✓ 100%免费<br>✓ 10秒完成<br>✓ 支持10种语言",
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO 官方INFO",
        info_subtitle: "请关注我们的官方SNS。<br>获取最新信息并帮助我们改进AI皮肤诊断系统。",
        info_official_channels: "官方渠道",
        info_official_sites: "官方网站",
        info_shopping: "购物",
        info_contact: "联系我们",
        info_copyright: "© 2024 CURETEMBIO. All Rights Reserved.",
        
        // AI 피부진단 공식 사이트 섹션
        info_diagnosis_title: "AI皮肤诊断官方网站",
        info_diagnosis_desc: "基于AI的10项皮肤指标分析系统",
        
        // Contact 섹션
        info_contact_title: "联系我们",
        info_contact_email_label: "官方邮箱："
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
        info_contact_email_label: "官方電郵："
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
        info_contact_email_label: "อีเมลอย่างเป็นทางการ："
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
        info_contact_email_label: "Email chính thức："
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
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Resmi",
        info_subtitle: "Ikuti channel SNS resmi kami.<br>Dapatkan informasi terbaru dan bantu kami meningkatkan sistem diagnosis kulit AI.",
        info_official_channels: "Channel Resmi",
        info_official_sites: "Situs Resmi",
        info_shopping: "Belanja",
        info_contact: "Hubungi Kami",
        info_copyright: "© 2024 CURETEMBIO. Hak Cipta Dilindungi."
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
        
        // Footer: CURETEMBIO INFO Section
        info_title: "CURETEMBIO INFO Rasmi",
        info_subtitle: "Ikuti saluran SNS rasmi kami.<br>Dapatkan kemas kini dan bantu kami meningkatkan sistem diagnosis kulit AI.",
        info_official_channels: "Saluran Rasmi",
        info_official_sites: "Laman Web Rasmi",
        info_shopping: "Beli-belah",
        info_contact: "Hubungi Kami",
        info_copyright: "© 2024 CURETEMBIO. Hak Cipta Terpelihara."
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
        info_contact_email_label: "Correo electrónico oficial："
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
        info_contact_email_label: "E-mail officiel："
    }
};

// 언어별 플래그
const languageFlags = {
    ko: '🇰🇷',
    en: '🇺🇸',
    ja: '🇯🇵',
    'zh-CN': '🇨🇳',
    'zh-TW': '🇹🇼',
    th: '🇹🇭',
    vi: '🇻🇳',
    id: '🇮🇩',
    ms: '🇲🇾',
    es: '🇪🇸',
    fr: '🇫🇷'
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
function getCurrentLanguage() {
    return localStorage.getItem('landingLanguage') || 'ko';
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
