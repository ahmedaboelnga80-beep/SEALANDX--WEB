/**
 * SeaLandX — Optimized Core Interactions
 * =========================================
 * Architecture: Zero CDN dependencies, pure browser APIs
 * - IntersectionObserver  → video autoplay & scroll reveals
 * - CSS transitions       → all animations (no GSAP)
 * - Native scroll events  → nav active tracking
 * - Canvas API            → Rupture molecular scan
 *
 * GoDaddy Shared Hosting ready:
 * - No Node.js, no build tools
 * - All paths are relative
 * - Deferred via <script defer>
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ================================================================
       TRANSLATION DATABASE (EN / AR) — unchanged business data
       ================================================================ */
    const translations = {
        en: {
            page_title: "SeaLandX | Your Partner for Endless Solutions",
            logo_subtitle: "Integrated Logistics Services",
            nav_home: "Home", nav_services: "Services",
            nav_guide: "7-Point Guide", nav_about: "About Us",
            nav_certifications: "Certifications", nav_articles: "Articles",
            nav_contact: "Contact Us", nav_title: "Navigation",
            btn_request: "Request Inspection",
            hero_tag: "Marine Security Terminal",
            hero_title: 'Precision Container & Cargo <br><span class="text-gradient">Logistics</span>',
            hero_desc: "Streamlining supply chains and delivering value at every step with reliable, efficient, and tailored logistics solutions.",
            srv_psi_title: "Container Inspection & Survey",
            srv_psi_desc: "Comprehensive pre-loading verification and container sealing.",
            srv_reefer_title: "Cargo Inspection & Survey",
            srv_reefer_desc: "Cold chain analysis, machinery test, and sensor logs.",
            srv_dry_title: "Cargo Stuffing",
            srv_dry_desc: "Full 7-point structural evaluation and wall integrity tests.",
            srv_tank_title: "Cargo Lashing",
            srv_tank_desc: "Valve tests, clean certifications, and safety seals.",
            srv_lashing_title: "Cargo Disposal",
            srv_lashing_desc: "Securing heavy cargo on containers, flat racks, and vessel bays.",
            srv_empty_title: "Container Cleaning",
            srv_empty_desc: "Inspection for agricultural pests, odors, leaks, and structural compliance.",
            title_services: "SeaLandX | Inspection & Logistics Services",
            title_guide: "SeaLandX | 7-Point Container Inspection Guide",
            title_about: "SeaLandX | About Us",
            title_certifications: "SeaLandX | ISO Certifications",
            title_articles: "SeaLandX | Maritime Insights & Articles",
            title_contact: "SeaLandX | Contact Us & Request Inspection",
            track_tag: "Live Cargo Tracking",
            track_title: "Port Said Terminal Tracking & Verification",
            track_desc: "Trace container status directly from Port Said Terminal (PSCCHC) database, synchronized with SeaLandX structural safety inspections.",
            tab_container: "Container Tracking",
            tab_booking: "Booking Trace",
            tab_bol: "BOL Trace",
            btn_trace: "Trace",
            placeholder_container: "Enter Container ID (e.g., MSCU9284716)",
            placeholder_booking: "Enter Booking Number (e.g., BK-9876251)",
            placeholder_bol: "Enter Bill of Lading Number (e.g., EGY8719284)",
            lbl_container_id: "Container ID",
            lbl_booking_no: "Booking Number",
            lbl_bol_no: "BOL Number",
            lbl_terminal: "Terminal",
            val_terminal_west: "Port Said West Terminal (PSCCHC)",
            lbl_size_type: "Size & Type",
            lbl_vessel_voyage: "Vessel & Voyage",
            lbl_current_status: "Current Status",
            status_discharged: "DISCHARGED / YARD STORAGE",
            status_loaded: "LOADED ON VESSEL",
            status_gate_out: "GATE-OUT / DELIVERED",
            badge_verified: "SeaLandX Verified",
            badge_verified_sub: "Structural Scan Passed",
            lbl_inspection_date: "Inspection Date",
            lbl_seal_status: "Seal Status",
            status_compliant: "COMPLIANT (BOL MATCHED)",
            lbl_checklist: "7-Point Checklist Verification",
            chk_front: "Front Wall",
            chk_left: "Left Side",
            chk_right: "Right Side",
            chk_floor: "Floor / Under",
            chk_roof: "Roof / Ceiling",
            chk_doors: "Inside/Outside Doors",
            chk_under: "Undercarriage",
            term_hud_title: "TERMINAL LIVE HUD - FEED #042",
            term_scanner_active: "SCANNER ACTIVE",
            term_widget_port: "PORT AUTHORITY AREA", term_widget_port_val: "SEALAND-X DOCKS",
            term_widget_coords: "LAT / LONG",
            term_widget_level: "INSPECTION LEVEL", term_widget_level_val: "STAGE-1 GLOBAL SECURITY",
            term_widget_conf: "SCAN CONFIDENCE",
            lbl_det_std: "Standards",
            lbl_det_time: "Audit Time",
            det_psi_title: "Pre-Shipment Inspection (PSI) in Detail",
            det_psi_text: "Pre-Shipment Inspection ensures that cargo matches packing lists and conforms to safety regulations before gate-in. Our surveyors perform seal auditing, photo logging, and load tallying.",
            det_psi_point1: "ISO 17712 Bolt Seal integrity checks",
            det_psi_point2: "Cargo quantity tally and weight audits",
            det_psi_point3: "Detailed photologs of loading process",
            det_reefer_title: "Reefer Temperature & Machinery Audits",
            det_reefer_text: "Refrigerated cargo requires continuous power and strict climate control. We audit digital temperature logs, run pre-trip inspections (PTI) on compressors, and calibrate humidity sensors.",
            det_reefer_point1: "Pre-Trip Machinery check (PTI)",
            det_reefer_point2: "Continuous logging of temp history logs",
            det_reefer_point3: "Evaporator and compressor tests",
            det_dry_title: "Dry Van Structural Integrity Check",
            det_dry_text: "Dry container structures must protect cargo from moisture and physical shocks. We perform light-leak tests, roof bow inspections, and complete IICL-6 structural checks.",
            det_dry_point1: "Full IICL-6 structural compliance review",
            det_dry_point2: "Water ingress and light leak scanning",
            det_dry_point3: "Floorboard stress testing",
            det_tank_title: "ISO Tank Integrity Verification",
            det_tank_text: "ISO Tanks carrying gases or liquid chemicals require extreme containment security. We perform pressure valve inspections, clean certifications, and seal checks.",
            det_tank_point1: "Valve seal pressure ratings test",
            det_tank_point2: "Accredited cleanliness certificates review",
            det_tank_point3: "Exterior frame integrity surveys",
            det_lashing_title: "Cargo Lashing & Securing Systems",
            det_lashing_text: "Cargo shift during heavy sea transit is a major maritime risk. We calculate load tension, inspect steel tie-downs, and verify twistlock locking systems on flat racks.",
            det_lashing_point1: "Steel chain and wire tension testing",
            det_lashing_point2: "Heavy lift load weight calculations",
            det_lashing_point3: "Flat rack twistlock checks",
            det_cleaning_title: "Empty Container Pest & Clean Audits",
            det_cleaning_text: "Before cargo stuffing, empty containers must be clean, odorless, and free from pests. We perform sanitization verification, pest scans, and cleaning certificate audits.",
            det_cleaning_point1: "Agricultural pest and insect scanning",
            det_cleaning_point2: "Chemical odor testing and venting",
            det_cleaning_point3: "Sanitary wash verification reports",
            services_tag: "Inspection Standard",
            services_title: "Professional Verification Services",
            services_desc: "Our technical experts utilize industry-leading safety protocols, smart logs, and cargo security measures at every gateway.",
            card_psi_desc: "Providing detailed inspection and assessment of containers to ensure compliance with IICL standards, customer requirements, and safety rules & regulations.",
            card_psi_point1: "IICL Standards Compliance", card_psi_point2: "Damage & Wear Assessment", card_psi_point3: "Safety Rules & Regulations",
            card_reefer_desc: "Comprehensive cargo surveys designed to ensure safe, efficient, and accurate handling of goods, focusing on quality control, compliance, and risk management.",
            card_reefer_point1: "Pre-Shipment & Post-Arrival", card_reefer_point2: "Damage & Loss Assessment", card_reefer_point3: "Condition Monitoring & Compliance",
            card_dry_desc: "Providing secure and expert loading solutions to pack all types of cargo with care, maximizing space utilization while minimizing damage risks during transit.",
            card_dry_point1: "Optimal Loading Solutions", card_dry_point2: "Secure Cargo Handling", card_dry_point3: "Customized Stuffing Plans",
            card_tank_desc: "Providing expert cargo securing using high-quality lashing techniques tailored to weight, fragility, and dimensions to prevent movement during transit.",
            card_tank_point1: "Secure & Safe Tension Lashing", card_tank_point2: "Customized Lashing Plans", card_tank_point3: "Compliance with Global Standards",
            card_lashing_desc: "Reliable and environmentally responsible solutions for managing and disposing of unwanted, expired, damaged, or surplus cargo in compliance with regulations.",
            card_lashing_point1: "Perishables & Hazmat Disposal", card_lashing_point2: "Eco-friendly Recycling & Waste", card_lashing_point3: "Real-time Tracking & Reporting",
            card_empty_desc: "Delivering professional freight container cleaning and hygiene assurance to meet IICL rules, optimizing container usability and protecting goods.",
            card_empty_point1: "Comprehensive Debris & Odor Sweep", card_empty_point2: "Steam & Chemical Treatments", card_empty_point3: "Hygiene Certification Reports",
            guide_tag: "Interactive Standard", guide_title: "The 7-Point Container Inspection",
            guide_desc: "Click or hover over the highlighted checkpoints on the container blueprint to explore the standard maritime inspection points.",
            bp_status_secure: "SECURE ELEMENT", bp_checklist_header: "Inspection Checklist:",
            about_tag: "Global Network", about_title: "Securing International Shipping Channels",
            about_lead: "At SeaLandx, we specialize in providing reliable, efficient, and tailored logistics solutions to meet the diverse needs of businesses across industries.",
            about_body: "With our integrated services, we ensure your goods are transported safely, on time, and cost-effectively. Backed by advanced technology and a dedicated team of experts, Sealandx is equipped to handle the complexities of modern logistics.",
            about_feat1_title: "Certified Surveys", about_feat1_desc: "Surveys conducted under international ISO & IICL guidelines.",
            about_feat2_title: "Instant Reports", about_feat2_desc: "Cloud inspection logs and digital photos delivered in real-time.",
            partners_tag: "Trusted Partners", partners_title: "Our Partners",
            partners_desc: "We work with the world's leading shipping lines, port authorities, and logistics networks.",
            stat_containers: "Containers Inspected", stat_hours: "Hour Support Coverage",
            stat_compliance: "% Safety Compliance", stat_ports: "Major Ports Covered",
            cert_tag: "Compliance & Quality", cert_title: "ISO Certified Logistics Services",
            cert_desc: "SeaLandX operates under strict international standards to ensure quality, environmental safety, and occupational health across all logistics channels.",
            cert_click_view: "Click to View Certificate",
            cert_9001_title: "Quality Management System (QMS)", cert_9001_desc: "Standardizes processes to consistently deliver services that meet customer expectations and regulatory requirements.",
            cert_14001_title: "Environmental Management System (EMS)", cert_14001_desc: "Helps manage environmental impact, reduce waste, and demonstrate commitment to sustainability.",
            cert_45001_title: "Occupational Health & Safety (OHSMS)", cert_45001_desc: "Ensures safety standards to reduce occupational injuries, illnesses, and promote a secure workspace.",
            articles_tag: "Maritime Insights", articles_title: "Container Safety & Standards",
            articles_desc: "Read the latest container security standards, logistics bulletins, and regulatory maritime updates.",
            art1_tag: "Regulations", art1_date: "June 14, 2026",
            art1_title: "Understanding the ISO Container Standards",
            art1_desc: "An in-depth review of ISO 668 dimensions, testing criteria, and load parameters to prevent terminal accidents.",
            art2_tag: "Reefer Tech", art2_date: "May 28, 2026",
            art2_title: "Preventing Cold Chain Breakage in Reefers",
            art2_desc: "Key guidelines for checking refrigerated container machinery, compressor integrity, and diagnostic log data before export.",
            art3_tag: "Security", art3_date: "April 10, 2026",
            art3_title: "7-Point Container Security Seals Demystified",
            art3_desc: "How strict structural inspection at port entry blocks illicit cargo entry and guarantees seal security compliance.",
            art_read_more: "Read Article",
            form_tag: "Get in Touch", form_title: "Request Diagnostic Survey",
            form_desc: "Submit the details of your container fleet, and our certified cargo surveyors will contact you within 2 hours.",
            form_lbl_name: "Full Name", form_lbl_email: "Email Address",
            form_lbl_phone: "Phone Number", form_lbl_port: "Target Port / Location",
            form_lbl_type: "Survey Type", form_lbl_msg: "Survey Details / Container Numbers",
            form_ph_name: "John Doe", form_ph_email: "john@company.com",
            form_ph_phone: "+1 (555) 019-2834", form_ph_port: "Port of Alexandria, EG",
            form_ph_msg: "Describe cargo volume, specific dates, or container prefixes...",
            opt_psi: "Container Inspection & Survey", opt_reefer: "Cargo Inspection & Survey",
            opt_dry: "Cargo Stuffing", opt_tank: "Cargo Lashing",
            opt_lashing: "Cargo Disposal", opt_empty: "Container Cleaning",
            opt_custom: "Multiple / Fleet Inspection",
            btn_submit: "Submit Survey Request",
            feedback_title: "Request Submitted Successfully!",
            feedback_desc: "Thank you. A logistics surveyor will review your ticket and contact you shortly.",
            btn_send_another: "Send Another Request",
            info_title: "Corporate Head Office",
            info_desc: "SeaLandX operates global survey hubs at major trade nodes. Contact us directly for urgent vessel surveyor dispatch.",
            lbl_email: "Email Survey Desk", lbl_phone: "Urgent Hotlines",
            lbl_office: "Main Terminal Office",
            lbl_office_val: "10 Sizostris & El Thalathing Street, Port Said, Egypt",
            map_hq: "HQ: Port Said",
            footer_brand_desc: "Globally trusted marine cargo surveys, container seal audits, and logistics security assessments.",
            footer_col1_header: "Quick Links", footer_col2_header: "Certifications",
            footer_col3_header: "Logistics Bulletins",
            footer_news_desc: "Subscribe to receive regulatory safety updates directly in your inbox.",
            footer_news_ph: "email@company.com", footer_news_btn: "Join",
            footer_copyright: "All rights reserved. Designed for international safety compliance.",
            footer_privacy: "Privacy Policy", footer_terms: "Terms of Service",
            cert_iicl: "IICL Container Inspections", cert_iso: "ISO 668 & 1496 Audits",
            cert_psi: "Pre-Shipment Inspections", cert_reefer: "Reefer Cold Chain Logs",
            cert_lashing: "Cargo Lashing & Tie-downs", cert_empty: "Empty Container Sweeps",
            rupture_tag: "X-Ray Scan System", rupture_title: "Molecular Integrity Scan",
            rupture_desc: "Interactive molecular scan of high-security container steel. The particle array shows structural deformation and integrity confidence. Hover to disturb the particle field."
        },
        ar: {
            page_title: "سي لاند إكس | شريكك لحلول لا حصر لها",
            logo_subtitle: "الخدمات اللوجستية المتكاملة",
            nav_home: "الرئيسية", nav_services: "الخدمات",
            nav_guide: "دليل الـ 7 نقاط", nav_about: "من نحن",
            nav_certifications: "الشهادات والاعتمادات", nav_articles: "المقالات",
            nav_contact: "اتصل بنا", nav_title: "قائمة التصفح",
            btn_request: "طلب معاينة وفحص",
            hero_tag: "بوابة الفحص والتدقيق الأمني البحري",
            hero_title: 'معاينة وفحص دقيق <br><span class="text-gradient">للحاويات</span>',
            hero_desc: "تبسيط سلاسل التوريد وتقديم القيمة في كل خطوة من خلال حلول لوجستية موثوقة وفعالة ومخصصة.",
            srv_psi_title: "فحص ومعاينة الحاويات",
            srv_psi_desc: "تحقق شامل قبل التحميل وإحكام إغلاق الحاويات.",
            srv_reefer_title: "فحص ومعاينة الشحنات",
            srv_reefer_desc: "تحليل سلسلة التبريد، واختبار الآلات، وسجلات أجهزة الاستشعار.",
            srv_dry_title: "شحن وتعبئة البضائع",
            srv_dry_desc: "تقييم هيكلي كامل من 7 نقاط واختبارات سلامة الجدران.",
            srv_tank_title: "تربيط وتأمين البضائع",
            srv_tank_desc: "اختبارات الصمامات، وشهادات النظافة، وأختام السلامة والأمان.",
            srv_lashing_title: "التخلص من الشحنات التالفة",
            srv_lashing_desc: "تأمين البضائع الثقيلة على الحاويات والرفوف المسطحة وعنابر السفن.",
            srv_empty_title: "تنظيف حاويات الشحن",
            srv_empty_desc: "فحص الحاويات للكشف عن الآفات الزراعية والروائح والتسريبات والامتثال الهيكلي.",
            title_services: "سي لاند إكس | خدمات الفحص والمعاينة والخدمات اللوجستية",
            title_guide: "سي لاند إكس | دليل فحص الحاويات ذو الـ 7 نقاط",
            title_about: "سي لاند إكس | من نحن",
            title_certifications: "سي لاند إكس | شهادات الأيزو والاعتمادات",
            title_articles: "سي لاند إكس | المقالات والنشرات البحرية",
            title_contact: "سي لاند إكس | اتصل بنا وطلب معاينة",
            track_tag: "تتبع الشحنات المباشر",
            track_title: "مركز تتبع وتدقيق حاويات ميناء بورسعيد",
            track_desc: "تتبع حالة الحاوية مباشرة من قاعدة بيانات شركة بورسعيد لتداول الحاويات (PSCCHC)، متزامنة مع فحوصات السلامة الهيكلية لـ SeaLandX.",
            tab_container: "تتبع الحاويات",
            tab_booking: "تتبع الحجز",
            tab_bol: "تتبع بوليصة الشحن",
            btn_trace: "تتبع",
            placeholder_container: "أدخل رقم الحاوية (مثال: MSCU9284716)",
            placeholder_booking: "أدخل رقم الحجز (مثال: BK-9876251)",
            placeholder_bol: "أدخل رقم بوليصة الشحن (مثال: EGY8719284)",
            lbl_container_id: "رقم الحاوية",
            lbl_booking_no: "رقم الحجز",
            lbl_bol_no: "رقم بوليصة الشحن",
            lbl_terminal: "المحطة",
            val_terminal_west: "محطة غرب بورسعيد للحاويات (PSCCHC)",
            lbl_size_type: "الحجم والنوع",
            lbl_vessel_voyage: "اسم السفينة والرحلة",
            lbl_current_status: "الحالة الحالية",
            status_discharged: "تم التفريغ / التخزين بساحة الميناء",
            status_loaded: "تم الشحن على السفينة",
            status_gate_out: "خرجت من البوابة / تم التسليم",
            badge_verified: "تم الفحص والتدقيق من SeaLandX",
            badge_verified_sub: "اجتاز فحص السلامة الهيكلية",
            lbl_inspection_date: "تاريخ وقت الفحص",
            lbl_seal_status: "حالة ختم الأمان",
            status_compliant: "مطابق ومغلق (مطابق للبوليصة)",
            lbl_checklist: "نتائج الفحص ذو الـ 7 نقاط",
            chk_front: "الجدار الأمامي",
            chk_left: "الجانب الأيسر",
            chk_right: "الجانب الأيمن",
            chk_floor: "الأرضية والقاعدة",
            chk_roof: "السقف والسطح",
            chk_doors: "الأبواب الداخلية والخارجية",
            chk_under: "الهيكل السفلي",
            term_hud_title: "شاشة عرض الميناء المباشرة - بث رقم 042",
            term_scanner_active: "الماسح الضوئي نشط",
            term_widget_port: "منطقة هيئة الميناء", term_widget_port_val: "أرصفة سي لاند إكس",
            term_widget_coords: "خطوط الطول / العرض",
            term_widget_level: "مستوى المعاينة", term_widget_level_val: "المرحلة الأولى: حماية عالمية",
            term_widget_conf: "دقة الفحص الفعلي",
            lbl_det_std: "المعايير المعتمدة",
            lbl_det_time: "وقت المعاينة",
            det_psi_title: "فحص ما قبل الشحن بالتفصيل",
            det_psi_text: "يضمن فحص ما قبل الشحن مطابقة الشحنة لقوائم التعبئة ولوائح السلامة قبل دخولها الميناء. يقوم مفتشونا بمراجعة أختام الأمان، والتوثيق الفوتوغرافي، ومطابقة الأعداد.",
            det_psi_point1: "فحص سلامة أختام البراغي ISO 17712",
            det_psi_point2: "مطابقة كمية البضائع وتدقيق أوزانها",
            det_psi_point3: "سجلات صور مفصلة لعمليات تعبئة البضائع",
            det_reefer_title: "تدقيق سجلات الحاويات المبردة PTI",
            det_reefer_text: "تتطلب الشحنات المبردة طاقة مستمرة وتحكماً مناخياً صارماً. نحن ندقق السجلات الرقمية للحرارة، ونجري فحوصات ما قبل الرحلة (PTI) على الضواغط، ونعاير حساسات الرطوبة.",
            det_reefer_point1: "فحص الآلات والضواغط قبل الرحلة (PTI)",
            det_reefer_point2: "تدقيق مستمر لسجلات درجات الحرارة",
            det_reefer_point3: "اختبارات كفاءة المبخر والضاغط",
            det_dry_title: "فحص سلامة هيكل الحاوية الجافة",
            det_dry_text: "يجب أن تحمي هياكل الحاويات الجافة البضائع من الرطوبة والصدمات. نحن نجري اختبارات تسرب الضوء، وفحص انحناء السقف، وفحوصات هيكلية كاملة طبقاً لمعايير IICL-6.",
            det_dry_point1: "مراجعة هيكلية كاملة للامتثال لـ IICL-6",
            det_dry_point2: "فحص تسرب المياه والضوء إلى داخل الحاوية",
            det_dry_point3: "اختبارات إجهاد وتحمل ألواح الأرضية",
            det_tank_title: "التحقق من سلامة الأيزو تانك (ISO Tank)",
            det_tank_text: "تتطلب حاويات الأيزو تانك التي تنقل الغازات أو الكيماويات السائلة حماية قصوى. نحن نقوم بفحص صمامات الضغط، وشهادات خلو الخزان من الرواسب، ومطابقة الأختام.",
            det_tank_point1: "اختبار معدلات ضغط صمام الغلق والتنفيس",
            det_tank_point2: "مراجعة شهادات النظافة والتطهير الرسمية",
            det_tank_point3: "فحص السلامة الهيكلية للإطار الخارجي للحاوية",
            det_lashing_title: "أنظمة تربيط وتأمين البضائع والآليات",
            det_lashing_text: "تعتبر حركة البضائع أثناء الإبحار في الأمواج العالية خطراً بحرياً كبيراً. نحن نحسب قوة الشد للأربطة، ونفحص السلاسل الفولاذية، ونتحقق من أقفال التثبيت على الحاويات المسطحة.",
            det_lashing_point1: "اختبار قوة شد السلاسل والأسلاك الفولاذية",
            det_lashing_point2: "حسابات الوزن وتوزيع الأحمال الثقيلة للشحنة",
            det_lashing_point3: "فحص أقفال الـ Twistlocks للحاويات المسطحة",
            det_cleaning_title: "فحوصات تعقيم وتجهيز الحاويات الفارغة",
            det_cleaning_text: "قبل تعبئة البضائع، يجب أن تكون الحاويات الفارغة نظيفة تماماً، خالية من الروائح، والآفات الزراعية. نحن نجري فحوصات الكشف عن الآفات وتدقيق شهادات التعقيم والنظافة.",
            det_cleaning_point1: "فحص الكشف عن الحشرات والآفات الزراعية",
            det_cleaning_point2: "اختبار الروائح الكيميائية والتهوية الجيدة",
            det_cleaning_point3: "مراجعة تقارير غسيل وتطهير الحاوية المعتمدة",
            services_tag: "معايير المعاينة والتدقيق",
            services_title: "خدمات فحص ومعاينة متخصصة",
            services_desc: "يستخدم خبراؤنا التقنيون بروتوكولات الأمان الرائدة في الصناعة، والسجلات الذكية، وتدابير حماية الشحنات في كل منفذ بحري.",
            card_psi_desc: "تقديم فحص وتقييم تفصيلي للحاويات لضمان امتثالها لمعايير IICL العالمية، متطلبات العملاء، وقواعد ولوائح السلامة والأمان.",
            card_psi_point1: "الامتثال الكامل لمعايير IICL", card_psi_point2: "تقييم الأضرار الهيكلية والتلف", card_psi_point3: "لوائح السلامة والأمان الدولية",
            card_reefer_desc: "خدمات مسح ومعاينة البضائع الشاملة لضمان المناولة الآمنة والفعالة والدقيقة للسلع أثناء النقل.",
            card_reefer_point1: "معاينات ما قبل الشحن وما بعد الوصول", card_reefer_point2: "تقييم الأضرار والخسائر أثناء النقل", card_reefer_point3: "مراقبة حالة الشحنات والامتثال للأنظمة",
            card_dry_desc: "توفير حلول تحميل وتعبئة متخصصة وآمنة لجميع أنواع البضائع مع تعبئتها بأعلى رعاية.",
            card_dry_point1: "حلول تحميل مثالية لاستغلال المساحات", card_dry_point2: "مناولة آمنة للبضائع لضمان الاستقرار", card_dry_point3: "خطط تعبئة مخصصة للشحنات الثقيلة",
            card_tank_desc: "توفير خدمات لربط وتأمين الشحنات باستخدام مواد عالية الجودة وتقنيات تربيط مخصصة.",
            card_tank_point1: "تربيط وتأمين عالي الشد للبضائع", card_tank_point2: "خطط تربيط وتثبيت مخصصة لأبعاد الشحنة", card_tank_point3: "الالتزام التام بمعايير السلامة الدولية",
            card_lashing_desc: "حلول فعالة وموثوقة ومسؤولة بيئياً لإدارة والتخلص من الشحنات غير المرغوب فيها أو التالفة.",
            card_lashing_point1: "التخلص من المواد الخطرة والتالفة", card_lashing_point2: "إعادة تدوير وفرز النفايات بيئياً", card_lashing_point3: "تتبع حي للعملية وتقارير تفصيلية موثوقة",
            card_empty_desc: "تقديم حلول تنظيف وتطهير احترافية وفعالة للحاويات للامتثال لقواعد IICL.",
            card_empty_point1: "إزالة شاملة للأوساخ والترسبات والروائح", card_empty_point2: "غسيل بالبخار ومعالجات كيميائية متخصصة", card_empty_point3: "شهادات وتقارير ضمان النظافة والصحة",
            guide_tag: "معايير السلامة التفاعلية", guide_title: "الفحص القياسي للحاوية ذو الـ 7 نقاط",
            guide_desc: "انقر أو مرر مؤشر الماوس فوق نقاط الفحص المحددة على مخطط الحاوية لاستكشاف المعايير البحرية الدولية.",
            bp_status_secure: "عنصر آمن ومفحوص", bp_checklist_header: "قائمة مراجعة الفحص والتأكيد:",
            about_tag: "الشبكة العالمية", about_title: "تأمين قنوات الشحن والتجارة الدولية",
            about_lead: "في سي لاند إكس، نحن متخصصون في تقديم حلول لوجستية موثوقة وفعالة ومخصصة لتلبية الاحتياجات المتنوعة للشركات.",
            about_body: "من خلال خدماتنا المتكاملة، نضمن نقل بضائعك بأمان وفي الوقت المحدد وبتكلفة فعالة، مما يتيح لك التركيز على تنمية أعمالك.",
            about_feat1_title: "مسوحات وفحوصات معتمدة", about_feat1_desc: "تُجرى الفحوصات وفقاً للإرشادات والمعايير الدولية لـ ISO و IICL.",
            about_feat2_title: "تقارير رقمية فورية", about_feat2_desc: "تسليم سجلات فحص سحابية وصور عالية الدقة في الوقت الفعلي للعملاء.",
            partners_tag: "شركاء موثوقون", partners_title: "شركاؤنا",
            partners_desc: "نحن نعمل مع خطوط الشحن الرائدة وهيئات الموانئ والشبكات اللوجستية العالمية.",
            stat_containers: "حاوية تم فحصها ومعاينتها", stat_hours: "ساعة تغطية الدعم الفني",
            stat_compliance: "نسبة الامتثال للأمان والسلامة", stat_ports: "ميناء تجاري مغطى بخدماتنا",
            cert_tag: "الامتثال والجودة", cert_title: "خدمات لوجستية معتمدة من ISO",
            cert_desc: "تعمل سي لاند إكس وفقاً لمعايير دولية صارمة لضمان الجودة، والسلامة البيئية، والصحة المهنية عبر جميع القنوات اللوجستية.",
            cert_click_view: "انقر لعرض الشهادة",
            cert_9001_title: "نظام إدارة الجودة (QMS)", cert_9001_desc: "يقوم بتوحيد العمليات لتقديم خدمات تلبي توقعات العملاء والمتطلبات التنظيمية باستمرار.",
            cert_14001_title: "نظام الإدارة البيئية (EMS)", cert_14001_desc: "يساعد في إدارة الأثر البيئي، وتقليل النفايات، وإثبات الالتزام بالاستدامة البيئية.",
            cert_45001_title: "السلامة والصحة المهنية (OHSMS)", cert_45001_desc: "يضمن معايير السلامة للحد من حوادث العمل والأمراض المهنية وتعزيز بيئة عمل آمنة.",
            articles_tag: "معلومات وإضاءات بحرية", articles_title: "معايير الحاويات وسلامة النقل",
            articles_desc: "اقرأ أحدث معايير أمان الحاويات، النشرات اللوجستية والتحديثات التنظيمية البحرية.",
            art1_tag: "اللوائح البحرية", art1_date: "١٤ يونيو ٢٠٢٦",
            art1_title: "فهم المعايير الدولية للحاويات (ISO)",
            art1_desc: "مراجعة تفصيلية لأبعاد ومعايير الاختبار والوزن القياسي للحاويات لتجنب الحوادث في أرصفة الشحن.",
            art2_tag: "تقنيات التبريد", art2_date: "٢٨ مايو ٢٠٢٦",
            art2_title: "تجنب انقطاع سلسلة التبريد في الحاويات المبردة",
            art2_desc: "إرشادات هامة لفحص آلات حاويات التبريد، وسلامة الضاغط، وقراءة بيانات السجل الرقمي قبل التصدير.",
            art3_tag: "الأمن الجمركي", art3_date: "١٠ أبريل ٢٠٢٦",
            art3_title: "الأختام الأمنية للحاويات وفحوصات السلامة",
            art3_desc: "كيف يساهم الفحص الهيكلي الصارم عند بوابات الموانئ في منع الشحنات غير القانونية وضمان سلامة أختام الشحن.",
            art_read_more: "اقرأ المقال بالكامل",
            form_tag: "تواصل معنا الآن", form_title: "طلب معاينة تشخيصية",
            form_desc: "أرسل تفاصيل أسطول حاوياتك، وسيقوم مساحونا المعتمدون بالتواصل معك في غضون ساعتين فقط.",
            form_lbl_name: "الاسم الكامل للعميل", form_lbl_email: "البريد الإلكتروني للشركة",
            form_lbl_phone: "رقم الهاتف / الجوال", form_lbl_port: "الميناء / الموقع المستهدف للفحص",
            form_lbl_type: "نوع مسح المعاينة المطلوبة", form_lbl_msg: "تفاصيل المعاينة / أرقام الحاويات المستهدفة",
            form_ph_name: "مثال: أحمد محمد", form_ph_email: "name@company.com",
            form_ph_phone: "+20 (12) 3456-7890", form_ph_port: "مثال: ميناء الإسكندرية، محطة الحاويات",
            form_ph_msg: "يرجى كتابة عدد الحاويات، الرموز، مواعيد الفحص المحددة...",
            opt_psi: "فحص ومعاينة الحاويات", opt_reefer: "فحص ومعاينة الشحنات",
            opt_dry: "شحن وتعبئة البضائع", opt_tank: "تربيط وتأمين البضائع",
            opt_lashing: "التخلص من الشحنات التالفة", opt_empty: "تنظيف حاويات الشحن",
            opt_custom: "معاينة متعددة / فحص كامل للأسطول",
            btn_submit: "إرسال طلب مسح المعاينة",
            feedback_title: "تم إرسال طلبك بنجاح!",
            feedback_desc: "شكراً لك. سيقوم مساح لوجستي معتمد بمراجعة التذكرة والتواصل معك في أقرب وقت.",
            btn_send_another: "إرسال طلب آخر",
            info_title: "المكتب الرئيسي للشركة",
            info_desc: "تدير سي لاند إكس مراكز فحص ومعاينة عالمية في الموانئ الرئيسية. اتصل بنا مباشرة لإيفاد مساح بحري عاجل.",
            lbl_email: "مكتب استلام طلبات المعاينة", lbl_phone: "الخطوط الساخنة العاجلة",
            lbl_office: "مكتب المحطة الرئيسي للشركة",
            lbl_office_val: "١٠ شارع سيزوستريس والثلاثيني، بورسعيد، مصر",
            map_hq: "المقر الرئيسي: بورسعيد",
            footer_brand_desc: "مسوحات شحن بحري موثوقة عالمياً، تدقيق أختام الحاويات، وتقييم أمن سلاسل التوريد والخدمات اللوجستية.",
            footer_col1_header: "روابط سريعة", footer_col2_header: "الشهادات والاعتمادات",
            footer_col3_header: "النشرات والتقارير البحرية",
            footer_news_desc: "اشترك معنا لتلقي تحديثات السلامة واللوائح اللوجستية مباشرة في بريدك.",
            footer_news_ph: "email@company.com", footer_news_btn: "اشترك",
            footer_copyright: "جميع الحقوق محفوظة. تم التصميم للامتثال لمعايير السلامة الدولية.",
            footer_privacy: "سياسة الخصوصية", footer_terms: "شروط الخدمة",
            cert_iicl: "معاينات الحاويات طبقاً لـ IICL", cert_iso: "تدقيق معايير ISO 668 و 1496",
            cert_psi: "فحوصات الشحنات قبل التصدير", cert_reefer: "سجلات التحكم في الحاويات المبردة",
            cert_lashing: "تربيط وتأمين البضائع", cert_empty: "تنظيف وتطهير الحاويات فارغة",
            rupture_tag: "نظام مسح الأشعة السينية", rupture_title: "مسح السلامة الجزيئية",
            rupture_desc: "مسح جزيئي تفاعلي لصلب الحاويات عالية الأمان. مرر الماوس للتفاعل مع حقل الجزيئات."
        }
    };

    /* ================================================================
       1. LANGUAGE SWITCHER
       ================================================================ */
    let currentLang = localStorage.getItem('sealandx_lang') || 'en';
    const showcaseCaption = document.getElementById('showcase-caption');
    const serviceTitleKeys = {
        'pre-shipment': 'srv_psi_title', 'reefer': 'srv_reefer_title',
        'dry-van': 'srv_dry_title', 'iso-tank': 'srv_tank_title',
        'lashing': 'srv_lashing_title', 'empty-container': 'srv_empty_title'
    };

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('sealandx_lang', lang);
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) langToggle.textContent = lang === 'en' ? 'العربية' : 'English';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = translations[lang][key];
            if (!val) return;
            el.style.opacity = '0';
            setTimeout(() => {
                if (val.includes('<')) el.innerHTML = val; else el.textContent = val;
                el.style.transition = 'opacity 0.2s ease';
                el.style.opacity = '1';
            }, 80);
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const val = translations[lang][key];
            if (val) el.setAttribute('placeholder', val);
        });

        const activeHotspot = document.querySelector('.blueprint-hotspot.active');
        if (activeHotspot) triggerHotspotUpdate(activeHotspot.getAttribute('data-point'), activeHotspot);

        const activeService = document.querySelector('.service-menu-item.active');
        if (activeService && showcaseCaption) {
            const key = serviceTitleKeys[activeService.getAttribute('data-service')];
            showcaseCaption.textContent = translations[lang][key] || '';
        }
    }

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.addEventListener('click', () => setLanguage(currentLang === 'en' ? 'ar' : 'en'));

    /* ================================================================
       2. INTERSECTION OBSERVER — Video Autoplay on Viewport Entry
          (replaces GSAP ScrollTrigger — ~0 CPU vs ~30% CPU)
       ================================================================ */
    const videoSections = document.querySelectorAll('video, .section-video-bg');

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const vid = entry.target;
            if (entry.isIntersecting) {
                // Load and play the video when section enters viewport
                if (vid.readyState === 0) vid.load();
                vid.play().then(() => {
                    vid.classList.add('is-playing');
                }).catch(() => {
                    // Autoplay blocked — show poster image gracefully
                    vid.classList.add('is-playing');
                });
            } else {
                // Pause when out of view to save CPU/battery
                vid.pause();
                // Optional: keep class so it doesn't flicker on re-entry
            }
        });
    }, {
        threshold: 0.1,       // Start loading when 10% visible
        rootMargin: '100px'   // Pre-load 100px before entering viewport
    });

    videoSections.forEach(vid => videoObserver.observe(vid));

    /* ================================================================
       3. INTERSECTION OBSERVER — Scroll Reveal Animations
          (replaces GSAP animations — pure CSS transitions)
       ================================================================ */
    const revealElements = document.querySelectorAll('.reveal-layer, .reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target); // fire once, then stop
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* ================================================================
       4. CANVAS — Molecular Particle Scan (Chapter 5 / Rupture)
          Lightweight: only animates when section is visible
       ================================================================ */
    const canvas = document.getElementById('rupture-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animId = null;
        let isActive = false;
        let mouse = { x: -9999, y: -9999 };

        function resizeCanvas() {
            const rect = canvas.parentElement.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap at 2x for perf
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            ctx.scale(dpr, dpr);
            buildParticles(rect.width, rect.height);
        }

        function buildParticles(w, h) {
            particles = [];
            const cols = 26, rows = 16;
            const gx = w / (cols + 1), gy = h / (rows + 1);
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const ox = gx * (c + 1) + (gy * r - h / 2) * 0.12;
                    const oy = gy * (r + 1);
                    particles.push({ ox, oy, x: ox, y: oy, vx: 0, vy: 0 });
                }
            }
        }

        function drawFrame() {
            const w = canvas.width / (Math.min(window.devicePixelRatio, 2));
            const h = canvas.height / (Math.min(window.devicePixelRatio, 2));
            ctx.clearRect(0, 0, w, h);

            // Draw connecting grid lines
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(0, 153, 184, 0.1)';
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                if (i % 26 !== 25) { const n = particles[i + 1]; ctx.moveTo(p.x, p.y); ctx.lineTo(n.x, n.y); }
                if (i < particles.length - 26) { const n = particles[i + 26]; ctx.moveTo(p.x, p.y); ctx.lineTo(n.x, n.y); }
            }
            ctx.stroke();

            // Update and draw particles
            particles.forEach(p => {
                // Spring back to origin
                p.vx += (p.ox - p.x) * 0.12;
                p.vy += (p.oy - p.y) * 0.12;

                // Mouse repulsion
                const dx = mouse.x - p.x, dy = mouse.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 75 && dist > 0) {
                    const f = ((75 - dist) / 75) * 8;
                    p.vx -= (dx / dist) * f;
                    p.vy -= (dy / dist) * f;
                }

                p.vx *= 0.78; p.vy *= 0.78;
                p.x += p.vx; p.y += p.vy;

                // Color based on displacement
                const disp = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2);
                const alpha = 0.5 + Math.min(disp / 30, 0.4);
                ctx.beginPath();
                ctx.arc(p.x, p.y, disp > 8 ? 2.5 : 2, 0, Math.PI * 2);
                ctx.fillStyle = disp > 8
                    ? `rgba(0, 169, 110, ${alpha})`
                    : `rgba(0, 153, 184, ${alpha})`;
                ctx.fill();
            });

            if (isActive) animId = requestAnimationFrame(drawFrame);
        }

        canvas.addEventListener('mousemove', e => {
            const r = canvas.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
        });
        canvas.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
        canvas.addEventListener('touchmove', e => {
            const r = canvas.getBoundingClientRect();
            const t = e.touches[0];
            mouse.x = t.clientX - r.left;
            mouse.y = t.clientY - r.top;
        }, { passive: true });

        window.addEventListener('resize', () => {
            clearTimeout(window._canvasResizeTimer);
            window._canvasResizeTimer = setTimeout(resizeCanvas, 200);
        });
        resizeCanvas();

        // Start/stop animation with IntersectionObserver
        const ruptureObs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                isActive = entry.isIntersecting;
                if (isActive) {
                    cancelAnimationFrame(animId);
                    animId = requestAnimationFrame(drawFrame);
                } else {
                    cancelAnimationFrame(animId);
                }
            });
        }, { threshold: 0.1 });

        const ruptureSection = document.getElementById('rupture-section-wrap');
        if (ruptureSection) ruptureObs.observe(ruptureSection);
    }

    /* ================================================================
       5. HERO VIDEO — ensure it plays (autoplay sometimes blocked)
       ================================================================ */
    const heroVideo = document.getElementById('hero-video-bg');
    if (heroVideo) {
        heroVideo.play().then(() => {
            heroVideo.style.opacity = '1';
        }).catch(() => {
            heroVideo.style.opacity = '1'; // show poster if blocked
        });
    }

    /* ================================================================
       6. SERVICES SPLIT SWITCHER (Hero section)
       ================================================================ */
    const serviceItems = document.querySelectorAll('.service-menu-item');
    const showcaseImages = document.querySelectorAll('.showcase-image');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-service');
            serviceItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            showcaseImages.forEach(img => {
                img.classList.remove('active');
                if (img.id === `bg-${target}`) img.classList.add('active');
            });
            if (showcaseCaption) {
                showcaseCaption.textContent = translations[currentLang][serviceTitleKeys[target]] || '';
            }
        });
    });

    /* ================================================================
       7. 7-POINT BLUEPRINT HOTSPOT INTERACTIONS
       ================================================================ */
    const hotspots = document.querySelectorAll('.blueprint-hotspot');
    const infoNum = document.getElementById('info-point-num');
    const infoTitle = document.getElementById('info-point-title');
    const infoDesc = document.getElementById('info-point-desc');
    const infoChecklist = document.getElementById('info-point-checklist');
    const infoBox = document.getElementById('blueprint-content-box');

    const blueprintData = {
        1: { en: { num: '01', title: 'Inside / Outside Doors', desc: 'Inspect locking rods, handles, gaskets, and door hinges. Check for damage, warping, and light leakage from the inside. Verify the physical high-security seal matches the paperwork exactly.', checklist: ['Verify locking rods rotate fully and lock securely', 'Inspect door gaskets for tears, holes, or gaps', 'Examine door hinges for structural welds/cracks', 'Crosscheck shipping seal serial number'] }, ar: { num: '٠١', title: 'الأبواب الداخلية والخارجية', desc: 'افحص قضبان القفل والمقابض وحوافظ القفل لضمان الإغلاق الآمن. تحقق من تطابق رقم ختم الأمان مع السجلات الجمركية تماماً.', checklist: ['تأكد من دوران قضبان القفل وإغلاقها بإحكام', 'افحص جوانات الباب بحثاً عن تشققات أو ثقوب', 'افحص مفصلات الأبواب للتأكد من سلامة اللحامات', 'طابق الرقم التسلسلي لختم الشحن الفعلي'] } },
        2: { en: { num: '02', title: 'Left Side Wall', desc: 'Examine the exterior metal panels for holes, signs of structural fatigue, deep rust, or improper repairs. From inside, verify there are no structural bows or protrusions.', checklist: ['Look for fresh weld marks indicating hidden panels', 'Check corrugated grooves for metal fatigue/dents', 'Verify internal tie-down rings are secure', 'Inspect for light leaks along the side seam'] }, ar: { num: '٠٢', title: 'الجدار الجانبي الأيسر', desc: 'افحص الألواح المعدنية الخارجية بحثاً عن ثقوب أو علامات إجهاد هيكلي أو صدأ عميق أو إصلاحات غير صحيحة.', checklist: ['ابحث عن علامات لحام جديدة تشير لجدران وهمية', 'افحص تجاعيد المعدن للتأكد من خلوها من الانبعاجات', 'تأكد من إحكام حلقات تثبيت البضائع الداخلية', 'افحص تسريب الضوء على طول اللحام الجانبي'] } },
        3: { en: { num: '03', title: 'Right Side Wall', desc: 'Verify the right side wall panel is structurally symmetric. Inspect any decals or container markings to ensure they match container registration codes.', checklist: ['Confirm external decals match registration sheets', 'Inspect structural integrity of wall side posts', 'Perform hammer testing for hollow sounds (double walls)', 'Scan panel coatings for rust protection integrity'] }, ar: { num: '٠٣', title: 'الجدار الجانبي الأيمن', desc: 'تحقق من أن لوح الجدار الجانبي الأيمن متماثل هيكلياً. افحص الرقع التي قد تخفي تعديلات غير قانونية.', checklist: ['تأكد من مطابقة الرموز الخارجية لملف التسجيل', 'افحص السلامة الهيكلية للقوائم الجانبية للجدار', 'أجرِ اختبار الصوت بالمطرقة للكشف عن جدران مزدوجة', 'تحقق من سلامة طلاء الألواح ومقاومته للصدأ'] } },
        4: { en: { num: '04', title: 'Front Wall (End Wall)', desc: 'The front wall is a high-risk area for hidden compartments. Measure the interior length to ensure it aligns with container dimensions. Look for false walls or newly painted spots.', checklist: ['Measure interior length with laser tape tool', 'Check front corner posts for stress fractures', 'Examine internal panel paint consistency', 'Verify cleanliness and absence of pesticide residue'] }, ar: { num: '٠٤', title: 'الجدار الأمامي (النهائي)', desc: 'يعد الجدار الأمامي منطقة عالية المخاطر لوجود مقصورات خفية. قم بقياس الطول الداخلي للتأكد من توافقه مع الأبعاد القياسية للحاوية.', checklist: ['قس الطول الداخلي للحاوية بدقة باستخدام شريط ليزري', 'افحص أعمدة الزوايا الأمامية للكشف عن تصدعات', 'افحص تناسق طلاء الجدار الداخلي وتماثله', 'تأكد من نظافة الجدار وخلوه من رواسب المبيدات'] } },
        5: { en: { num: '05', title: 'Ceiling / Roof', desc: 'Check the container roof for physical dents that hold water, leading to rust and leaks. Inside, inspect the roof bows and roof panels for rust holes or structural bends.', checklist: ['Scan ceiling panels for overhead water staining', 'Inspect roof bow supports for structural bends', 'Check external corner castings for lift capability', 'Confirm integrity of top sealing weld seams'] }, ar: { num: '٠٥', title: 'السقف / السطح', desc: 'افحص سقف الحاوية بحثاً عن انبعاجات قد تجمع المياه وتؤدي للصدأ والتسريب. من الداخل افحص دعامات السقف والألواح.', checklist: ['افحص السقف من الداخل بحثاً عن آثار تسريب مائي', 'افحص دعامات السقف المنحنية للتأكد من استقامتها', 'تحقق من سلامة قطع صب الزوايا العلوية للرفع', 'تأكد من سلامة لحامات سد الفراغات في السقف'] } },
        6: { en: { num: '06', title: 'Floor (Internal)', desc: 'Verify that the floorboards are flat, clean, and dry. Check for agriculture pests, strong chemical odors, stains, and signs of false floors raised to hide cargo.', checklist: ['Inspect floor planks for heavy wood decay or stains', 'Verify floor frame is flat and free of cargo bulges', 'Scan floor screws for signs of recent removal', 'Smell test for strong chemical or organic odors'] }, ar: { num: '٠٦', title: 'الأرضية (الداخلية)', desc: 'تحقق من أن ألواح الأرضية مسطحة ونظيفة وجافة. افحص وجود آفات زراعية أو روائح كيميائية قوية أو علامات تشير لرفع الأرضية.', checklist: ['افحص ألواح الخشب بحثاً عن تعفن أو تلطخ زيتي', 'تحقق من استواء إطار الأرضية وخلوه من الانتفاخات', 'افحص مسامير الأرضية بحثاً عن علامات فك حديثة', 'شم الأرضية للتأكد من خلوها من الروائح الكيميائية'] } },
        7: { en: { num: '07', title: 'Undercarriage & Frame', desc: 'Inspect underneath the container before lifting. Look at bottom crossmembers, tunnel recesses, and gooseneck structures. Ensure no foreign packages are attached to the frame.', checklist: ['Inspect all crossmembers for bends or missing beams', 'Verify gooseneck tunnel recess structure is clear', 'Check bottom side rails for structural integrity', 'Verify forklift pockets are clear and undamaged'] }, ar: { num: '٠٧', title: 'الهيكل السفلي وقاعدة الحاوية', desc: 'افحص الجزء السفلي للحاوية قبل الرفع. انظر إلى العوارض المتقاطعة السفلية وتجاويف النفق وهياكل عنق الإوزة.', checklist: ['افحص جميع العوارض المتقاطعة للتأكد من عدم التوائها', 'تحقق من خلو تجويف نفق شاحنة عنق الإوزة بالكامل', 'افحص القضبان الجانبية السفلية للتأكد من استقامتها', 'تحقق من سلامة فتحات شوك الرافعة الشوكية'] } }
    };

    function triggerHotspotUpdate(pointId, hotspot) {
        hotspots.forEach(h => h.classList.remove('active'));
        hotspot.classList.add('active');
        if (!infoBox) return;
        infoBox.style.opacity = '0';
        infoBox.style.transform = 'translateY(8px)';
        infoBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        setTimeout(() => {
            const d = blueprintData[pointId][currentLang];
            if (d) {
                if (infoNum) infoNum.textContent = blueprintData[pointId].en.num;
                if (infoTitle) infoTitle.textContent = d.title;
                if (infoDesc) infoDesc.textContent = d.desc;
                if (infoChecklist) {
                    infoChecklist.innerHTML = '';
                    d.checklist.forEach(item => {
                        const li = document.createElement('li');
                        li.innerHTML = `<span></span>${item}`;
                        infoChecklist.appendChild(li);
                    });
                }
            }
            infoBox.style.opacity = '1';
            infoBox.style.transform = 'translateY(0)';
        }, 300);
    }

    hotspots.forEach(h => {
        h.addEventListener('click', () => triggerHotspotUpdate(h.getAttribute('data-point'), h));
        h.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); h.click(); } });
    });

    const defaultHotspot = document.querySelector('.blueprint-hotspot[data-point="1"]');
    if (defaultHotspot && infoChecklist) triggerHotspotUpdate('1', defaultHotspot);

    /* ================================================================
       8. STATS COUNTER ANIMATION
       ================================================================ */
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function runCounters() {
        statNumbers.forEach(el => {
            const target = parseInt(el.getAttribute('data-target'), 10);
            const dur = 1400, step = 16;
            const steps = dur / step;
            let cur = 0;
            const timer = setInterval(() => {
                cur += target / steps;
                if (cur >= target) {
                    clearInterval(timer);
                    const map = { 15240: ['15,240+', '١٥٬٢٤٠+'], 24: ['24', '٢٤'], 100: ['100%', '١٠٠٪'], 35: ['35+', '٣٥+'] };
                    el.textContent = (map[target] || [String(target), String(target)])[currentLang === 'ar' ? 1 : 0];
                } else {
                    el.textContent = Math.floor(cur).toLocaleString(currentLang === 'ar' ? 'ar-EG' : 'en-US');
                }
            }, step);
        });
    }

    const statsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                runCounters();
                statsObserver.disconnect();
            }
        });
    }, { threshold: 0.2 });

    const statsSection = document.getElementById('about');
    if (statsSection) statsObserver.observe(statsSection);

    /* ================================================================
       9. MOBILE DRAWER MENU
       ================================================================ */
    const menuToggle = document.getElementById('menu-toggle');
    const closeDrawerBtn = document.getElementById('close-drawer');
    const mobileDrawer = document.getElementById('mobile-drawer');

    function openDrawer() { mobileDrawer?.classList.add('active'); menuToggle?.classList.add('active'); }
    function closeDrawer() { mobileDrawer?.classList.remove('active'); menuToggle?.classList.remove('active'); }

    menuToggle?.addEventListener('click', openDrawer);
    closeDrawerBtn?.addEventListener('click', closeDrawer);
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeDrawer));

    /* ================================================================
       10. NAVIGATION ACTIVE STATE TRACKING
       ================================================================ */
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionMap = {
        'home': 'home', 'services-section-wrap': 'services',
        'guide-section-wrap': 'inspection-guide', 'about-section-wrap': 'about',
        'rupture-section-wrap': 'about', 'certifications-section-wrap': 'certifications',
        'articles': 'articles', 'contact': 'contact'
    };

    const navObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const sectionId = entry.target.id;
            const linkHref = '#' + (sectionMap[sectionId] || sectionId);
            navLinks.forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === linkHref);
            });
        });
    }, { rootMargin: '-40% 0px -40% 0px' });

    document.querySelectorAll('section[id]').forEach(s => navObserver.observe(s));

    // Logo click → scroll to top
    document.getElementById('nav-logo')?.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ================================================================
       11. CONTACT FORM SUBMISSION
       ================================================================ */
    const contactForm = document.getElementById('inspection-request-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm?.addEventListener('submit', e => {
        e.preventDefault();
        const btn = document.getElementById('btn-submit');
        btn.disabled = true;
        btn.textContent = currentLang === 'ar' ? 'جاري إرسال الطلب...' : 'Submitting...';

        setTimeout(() => {
            contactForm.style.transition = 'opacity 0.4s ease';
            contactForm.style.opacity = '0';
            setTimeout(() => {
                contactForm.classList.add('hidden');
                formFeedback?.classList.remove('hidden');
                btn.disabled = false;
                btn.textContent = translations[currentLang]['btn_submit'];
            }, 400);
        }, 1400);
    });

    document.getElementById('btn-reset-form')?.addEventListener('click', () => {
        contactForm?.reset();
        formFeedback?.classList.add('hidden');
        if (contactForm) {
            contactForm.classList.remove('hidden');
            contactForm.style.opacity = '0';
            setTimeout(() => { contactForm.style.opacity = '1'; }, 50);
        }
    });

    /* ================================================================
       12. CERTIFICATE MODAL & ARTICLE MODAL
       ================================================================ */
    window.openCertModal = function(imgSrc) {
        const modal = document.getElementById('cert-modal');
        const img = document.getElementById('cert-modal-img');
        if (modal && img) { img.src = imgSrc; modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
    };
    window.closeCertModal = function() {
        const modal = document.getElementById('cert-modal');
        if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
    };

    const articlesData = {
        1: {
            en: { tag: "Regulations", date: "June 14, 2026", title: "Understanding the ISO Container Standards", content: "<p>International shipping relies on standard dimensions and testing requirements to transport trillions of dollars of goods annually. The ISO established standard 668 to define the classifications, dimensions, and ratings of freight containers.</p><h4>Why Standardization Matters</h4><p>Without ISO 668, containers would not stack securely on container ships, nor would they fit onto standard railcars or truck chassis. By standardizing structural dimensions, ports worldwide can construct container cranes and terminal bays with automated lock systems.</p><h4>Key Testing Requirements (ISO 1496)</h4><p>ISO 1496 defines structural testing parameters including stacking capacity, transverse rigidity, longitudinal strength, and floor load rating. Our cargo surveyors verify that each unit possesses a valid CSC safety plate before custom clearance.</p>" },
            ar: { tag: "اللوائح البحرية", date: "١٤ يونيو ٢٠٢٦", title: "فهم المعايير الدولية للحاويات (ISO)", content: "<p>يعتمد الشحن الدولي على أبعاد موحدة ومتطلبات اختبار صارمة لنقل بضائع تبلغ قيمتها تريليونات الدولارات سنوياً. وضعت منظمة الأيزو الدولية المعيار القياسي رقم 668 لتحديد تصنيفات وأبعاد حاويات الشحن.</p><h4>لماذا التوحيد القياسي ضروري؟</h4><p>بدون معيار ISO 668، لن تتمكن الحاويات من التراكم بشكل آمن على متن سفن الحاويات. من خلال توحيد الأبعاد الهيكلية، يمكن للموانئ حول العالم بناء روافع وأرصفة آلية بكفاءة عالية.</p><h4>متطلبات الاختبار الرئيسية (ISO 1496)</h4><p>يحدد معيار ISO 1496 معايير الاختبار الهيكلي للحاويات العامة بما في ذلك قدرة التراكم والصلابة العرضية والقوة الطولية. يقوم خبراؤنا بالتحقق من وجود لوحة أمان CSC سارية المفعول قبل التخليص الجمركي.</p>" }
        },
        2: {
            en: { tag: "Reefer Tech", date: "May 28, 2026", title: "Preventing Cold Chain Breakage in Reefers", content: "<p>Refrigerated containers are the lifelines of global agriculture and pharmaceutical logistics. A single hour of power loss or temperature drift can spoil a cargo worth millions of dollars.</p><h4>Pre-Trip Inspections (PTI)</h4><p>The PTI is a rigorous protocol executed before releasing an empty reefer to the shipper. Our inspectors verify machinery functions, check refrigerant charge level, inspect defrost drain holes for blockages, and clean evaporator coils.</p><h4>Digital Log Auditing & Sensor Calibration</h4><p>Reefers record temperature and humidity history through digital sensors. We download and analyze these logs to ensure the temperature remained steady within the strict cargo parameters (e.g. -20°C for frozen meat or +3°C for fresh produce).</p>" },
            ar: { tag: "تقنيات التبريد", date: "٢٨ مايو ٢٠٢٦", title: "تجنب انقطاع سلسلة التبريد في الحاويات المبردة", content: "<p>تعتبر الحاويات المبردة بمثابة الشريان الحيوي للخدمات اللوجستية للأدوية والمواد الزراعية الطازجة عالمياً. انقطاع الطاقة لساعة واحدة قد يؤدي إلى تلف شحنات بملايين الدولارات.</p><h4>فحوصات ما قبل الرحلة (PTI)</h4><p>فحص PTI بروتوكول صارم يتم إجراؤه قبل تسليم الحاوية المبردة الفارغة للشاحن. يقوم مفتشونا بفحص وظائف الآلات ومستوى غاز التبريد وفتحات تصريف التكثيف.</p><h4>تدقيق السجلات الرقمية ومعايرة الحساسات</h4><p>تسجل الحاويات المبردة درجات الحرارة عبر سجلات رقمية مدمجة. نقوم بتحميل هذه السجلات وتحليلها لضمان استقرار درجات الحرارة ضمن نطاق الشحن المحدد.</p>" }
        },
        3: {
            en: { tag: "Security", date: "April 10, 2026", title: "7-Point Container Security Seals Demystified", content: "<p>Under the C-TPAT initiative, shipping companies must enforce systematic structural inspections to block illicit cargo insertion and human smuggling.</p><h4>The 7-Point Inspection Process</h4><ul><li><strong>1. Front Wall:</strong> Checks for false walls, cavities, or fresh welding lines.</li><li><strong>2. Left Side Wall:</strong> Inspects metal rib symmetry and scans for patch welds.</li><li><strong>3. Right Side Wall:</strong> Confirms container decals and identifiers match cargo sheets.</li><li><strong>4. Floor:</strong> Scans for flat floorboards, looking for double floor structures.</li><li><strong>5. Ceiling / Roof:</strong> Checks for structural bows, water leak holes, or ceiling compartments.</li><li><strong>6. Inside & Outside Doors:</strong> Audits gaskets, handles, lock rods, and security bolt seals.</li><li><strong>7. Undercarriage:</strong> Inspects cross members, forklift pockets, and the bottom structure.</li></ul><h4>High-Security ISO 17712 Bolt Seals</h4><p>The final step of our security survey is sealing the container with a certified ISO 17712 high-security bolt seal and logging the serial number into the customs digital portal.</p>" },
            ar: { tag: "الأمن الجمركي", date: "١٠ أبريل ٢٠٢٦", title: "الأختام الأمنية للحاويات وفحوصات السلامة", content: "<p>بموجب مبادرة الشراكة التجارية الجمركية ضد الإرهاب (C-TPAT)، يجب على شركات الشحن تطبيق فحص هيكلي صارم لمنع تهريب الشحنات غير القانونية.</p><h4>خطوات الفحص ذو الـ 7 نقاط</h4><ul><li><strong>١. الجدار الأمامي:</strong> الكشف عن وجود جدران وهمية أو تجاويف مخفية.</li><li><strong>٢. الجدار الأيسر:</strong> فحص انتظام وثبات الألواح المعدنية.</li><li><strong>٣. الجدار الأيمن:</strong> مطابقة الأرقام الخارجية مع أوراق الشحن.</li><li><strong>٤. الأرضية:</strong> فحص ألواح الأرضية والتأكد من عدم وجود أرضيات مزدوجة.</li><li><strong>٥. السقف:</strong> التأكد من خلوه من الثقوب أو تجاويف وهمية.</li><li><strong>٦. الأبواب:</strong> فحص القضبان والمفصلات وجوانات الباب المطاطية.</li><li><strong>٧. الهيكل السفلي:</strong> فحص العوارض المتقاطعة وقاعدة الحاوية.</li></ul><h4>أختام الحماية عالية الأمان ISO 17712</h4><p>الخطوة النهائية هي إغلاق الحاوية بختم أمان معتمد دولياً بموجب مواصفات ISO 17712 وإدخاله في النظام الرقمي الجمركي.</p>" }
        }
    };

    window.openArticleModal = function(id) {
        const modal = document.getElementById('article-modal');
        if (!modal) return;
        const d = articlesData[id]?.[currentLang];
        if (d) {
            document.getElementById('art-modal-tag').textContent = d.tag;
            document.getElementById('art-modal-date').textContent = d.date;
            document.getElementById('art-modal-title').textContent = d.title;
            document.getElementById('art-modal-text').innerHTML = d.content;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    };
    window.closeArticleModal = function() {
        const modal = document.getElementById('article-modal');
        if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; }
    };

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeCertModal(); closeArticleModal(); }
    });

    /* ================================================================
       13. DEMO MODE (?demo=1) — lightweight auto-scroll
       ================================================================ */
    if (new URLSearchParams(location.search).get('demo') === '1') {
        const indicator = document.getElementById('demo-indicator');
        const badge = document.getElementById('demo-badge');
        if (indicator) indicator.style.display = 'block';
        if (badge) badge.style.display = 'block';

        let running = true, pos = 0;
        const speed = (document.documentElement.scrollHeight - window.innerHeight) / (60 * 18); // 18s

        function tick() {
            if (!running) return requestAnimationFrame(tick);
            pos += speed;
            if (pos >= document.documentElement.scrollHeight - window.innerHeight) pos = 0;
            window.scrollTo(0, pos);
            if (indicator) indicator.style.width = (pos / (document.documentElement.scrollHeight - window.innerHeight) * 100) + '%';
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);

        document.addEventListener('keydown', e => {
            if (e.code === 'Space') { e.preventDefault(); running = !running; }
            if (e.code === 'KeyR') { e.preventDefault(); pos = 0; window.scrollTo(0, 0); running = true; }
        });
        const stop = () => { running = false; };
        window.addEventListener('wheel', stop, { passive: true });
        window.addEventListener('mousedown', stop);
        window.addEventListener('touchstart', stop, { passive: true });
    }

    /* ================================================================
       12.5 LIVE CARGO TRACKING AND VERIFICATION
       ================================================================ */
    const trackTabs = document.querySelectorAll('.track-tab');
    const trackInput = document.getElementById('track-input');
    const btnTrace = document.getElementById('btn-trace');
    const consoleLoader = document.getElementById('tracking-console-loader');
    const consoleLogLines = document.getElementById('console-log-lines');
    const resultPanel = document.getElementById('tracking-result-panel');
    let activeTrackTab = 'container';

    // Tab switcher
    trackTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            trackTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeTrackTab = tab.getAttribute('data-tab');

            // Update input placeholder and label
            if (activeTrackTab === 'container') {
                trackInput.setAttribute('data-i18n-placeholder', 'placeholder_container');
                trackInput.placeholder = translations[currentLang]['placeholder_container'];
            } else if (activeTrackTab === 'booking') {
                trackInput.setAttribute('data-i18n-placeholder', 'placeholder_booking');
                trackInput.placeholder = translations[currentLang]['placeholder_booking'];
            } else if (activeTrackTab === 'bol') {
                trackInput.setAttribute('data-i18n-placeholder', 'placeholder_bol');
                trackInput.placeholder = translations[currentLang]['placeholder_bol'];
            }

            // Hide previous results
            resultPanel.style.display = 'none';
            consoleLoader.style.display = 'none';
        });
    });

    // Mock search database helper
    function getTrackingMockData(searchId, type) {
        const id = searchId.trim().toUpperCase();
        
        // Dynamic dates
        const now = new Date();
        const date2DaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000);
        const formatInspectDate = date2DaysAgo.toISOString().replace('T', ' ').substring(0, 16) + ' UTC';

        // Specific test container search: MNBU3744524
        if (id === 'MNBU3744524' || id.includes('MNB')) {
            return {
                id: id || 'MNBU3744524',
                vesselVoyage: 'MAERSK HANOI / 2405E',
                sizeType: "40' High Cube Dry Van",
                statusKey: 'status_discharged',
                inspectDate: formatInspectDate,
                sealStatusKey: 'status_compliant'
            };
        }

        // Prefix based logic
        let vessel = 'MSC AMBRA';
        let voyage = '2403E';
        let sizeType = "40' High Cube Dry Van";
        let statusKey = 'status_discharged';

        if (id.startsWith('MSC')) {
            vessel = 'MSC AMBRA';
            voyage = '2403E';
        } else if (id.startsWith('MAE') || id.startsWith('MSK')) {
            vessel = 'MAERSK MC-KINNEY MOLLER';
            voyage = '2404W';
        } else if (id.startsWith('CMA')) {
            vessel = 'CMA CGM JACQUES SAADE';
            voyage = '2401E';
        } else if (id.startsWith('EMC')) {
            vessel = 'EVER GIVEN';
            voyage = '2408S';
            sizeType = "40' Standard Dry Container";
        } else if (id.startsWith('HLC')) {
            vessel = 'HAPAG-LLOYD HAMBURG';
            voyage = '2412N';
        } else if (id.startsWith('SUD')) {
            vessel = 'SUD AMERIKA';
            voyage = '2402S';
            sizeType = "20' Standard Dry Van";
        }

        // Random status
        const statuses = ['status_discharged', 'status_loaded', 'status_gate_out'];
        const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
        statusKey = statuses[hash % statuses.length];

        return {
            id: id || (type === 'container' ? 'MSCU9284716' : type === 'booking' ? 'BK-9876251' : 'EGY8719284'),
            vesselVoyage: `${vessel} / ${voyage}`,
            sizeType: sizeType,
            statusKey: statusKey,
            inspectDate: formatInspectDate,
            sealStatusKey: 'status_compliant'
        };
    }

    function runConsoleTrace(searchVal, type) {
        consoleLoader.style.display = 'block';
        resultPanel.style.display = 'none';
        consoleLogLines.innerHTML = '';

        const logs = [
            `> [SYS] CONNECTING TO PORT SAID WEST TERMINAL (PSCCHC) GATEWAY...`,
            `> [SYS] AUTHORIZING API HANDSHAKE FEED FOR [${searchVal || (type === 'container' ? 'MSCU9284716' : type === 'booking' ? 'BK-9876251' : 'EGY8719284')}]...`,
            `> [SYS] PARSING ENCRYPTED LOGISTICS DATA SCHEMA...`,
            `> [SYS] RECORDS RETRIEVED. INTEGRATING SEALANDX 7-POINT INSPECTION DIALOG...`
        ];

        let index = 0;
        function printLine() {
            if (index < logs.length) {
                const line = document.createElement('div');
                line.className = 'console-log-line';
                line.textContent = logs[index];
                consoleLogLines.appendChild(line);
                index++;
                setTimeout(printLine, 450);
            } else {
                // Done loading
                setTimeout(() => {
                    consoleLoader.style.display = 'none';
                    showTrackingResult(searchVal, type);
                }, 500);
            }
        }
        printLine();
    }

    function showTrackingResult(searchVal, type) {
        const cleanedVal = searchVal.trim().toUpperCase() || (type === 'container' ? 'MSCU9284716' : type === 'booking' ? 'BK-9876251' : 'EGY8719284');
        const data = getTrackingMockData(cleanedVal, type);

        // Populate HTML
        const resCardTitle = document.getElementById('res-card-title');
        const resTypeLabel = document.getElementById('res-type-label');
        const resContainerId = document.getElementById('res-container-id');
        const resSizeType = document.getElementById('res-size-type');
        const resVesselVoyage = document.getElementById('res-vessel-voyage');
        const resStatus = document.getElementById('res-status');
        const resInspectDate = document.getElementById('res-inspect-date');

        if (resCardTitle) {
            resCardTitle.setAttribute('data-i18n', activeTrackTab === 'container' ? 'tab_container' : activeTrackTab === 'booking' ? 'tab_booking' : 'tab_bol');
            resCardTitle.textContent = translations[currentLang][resCardTitle.getAttribute('data-i18n')];
        }
        if (resTypeLabel) {
            resTypeLabel.setAttribute('data-i18n', activeTrackTab === 'container' ? 'lbl_container_id' : activeTrackTab === 'booking' ? 'lbl_booking_no' : 'lbl_bol_no');
            resTypeLabel.textContent = translations[currentLang][resTypeLabel.getAttribute('data-i18n')];
        }

        if (resContainerId) resContainerId.textContent = data.id;
        if (resSizeType) resSizeType.textContent = data.sizeType;
        if (resVesselVoyage) resVesselVoyage.textContent = data.vesselVoyage;
        if (resInspectDate) resInspectDate.textContent = data.inspectDate;

        if (resStatus) {
            resStatus.setAttribute('data-i18n', data.statusKey);
            resStatus.textContent = translations[currentLang][data.statusKey];
            resStatus.className = 'val badge-status green';
        }

        resultPanel.style.display = 'block';
    }

    // Bind event triggers
    btnTrace?.addEventListener('click', () => {
        const val = trackInput.value.trim();
        runConsoleTrace(val, activeTrackTab);
    });

    trackInput?.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            const val = trackInput.value.trim();
            runConsoleTrace(val, activeTrackTab);
        }
    });

    /* ================================================================
       INIT — apply starting language
       ================================================================ */
    setLanguage(currentLang);

}); // end DOMContentLoaded
