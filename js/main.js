/**
 * SeaLandX Premium JavaScript Interactions
 * Core Logic for:
 * 1. Bilingual Translation Switcher (EN / AR) & RTL Support
 * 2. Mobile Drawer Menu Navigation
 * 3. Hero Services Split Dashboard Switcher & Bilingual Console Logger
 * 4. Interactive 7-Point Blueprint Checkpoints (Bilingual)
 * 5. Animated Statistics Counters
 * 6. Sleek Form Validation & Submission Feedback
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       1. Bilingual Translation Database (EN / AR) & Swapper
       ========================================================== */
    const translations = {
        en: {
            page_title: "SeaLandX | Your Partner for Endless Solutions",
            logo_subtitle: "Integrated Logistics Services",
            nav_home: "Home",
            nav_services: "Services",
            nav_guide: "7-Point Guide",
            nav_about: "About Us",
            nav_certifications: "Certifications",
            nav_articles: "Articles",
            nav_contact: "Contact Us",
            nav_title: "Navigation",
            btn_request: "Request Inspection",
            hero_tag: "Marine Security Terminal",
            hero_title: "Precision Container & Cargo <br><span class=\"text-gradient\">Logistics</span>",
            hero_desc: "Streamlining supply chains and delivering value at every step with reliable, efficient, and tailored logistics solutions.",
            srv_psi_title: "Container Inspection & Survey",
            srv_psi_desc: "IICL standard container inspection and damage assessment.",
            srv_reefer_title: "Cargo Inspection & Survey",
            srv_reefer_desc: "Quality control, condition monitoring, and risk assessment.",
            srv_dry_title: "Cargo Stuffing",
            srv_dry_desc: "Efficient, secure, and expert loading solutions for all cargo.",
            srv_tank_title: "Cargo Lashing",
            srv_tank_desc: "Expert lashing and securing solutions for sea, land, or air.",
            srv_lashing_title: "Cargo Disposal",
            srv_lashing_desc: "Safe, compliant, and eco-friendly surplus/damaged cargo disposal.",
            srv_empty_title: "Container Cleaning",
            srv_empty_desc: "IICL standard freight container cleaning and hygiene assurance.",
            term_hud_title: "TERMINAL LIVE HUD - FEED #042",
            term_scanner_active: "SCANNER ACTIVE",
            term_widget_port: "PORT AUTHORITY AREA",
            term_widget_port_val: "SEALAND-X DOCKS",
            term_widget_coords: "LAT / LONG",
            term_widget_level: "INSPECTION LEVEL",
            term_widget_level_val: "STAGE-1 GLOBAL SECURITY",
            term_widget_conf: "SCAN CONFIDENCE",
            services_tag: "Inspection Standard",
            services_title: "Professional Verification Services",
            services_desc: "Our technical experts utilize industry-leading safety protocols, smart logs, and cargo security measures at every gateway.",
            card_psi_desc: "Providing detailed inspection and assessment of containers to ensure compliance with IICL standards, customer requirements, and safety rules & regulations.",
            card_psi_point1: "IICL Standards Compliance",
            card_psi_point2: "Damage & Wear Assessment",
            card_psi_point3: "Safety Rules & Regulations",
            card_reefer_desc: "Comprehensive cargo surveys designed to ensure safe, efficient, and accurate handling of goods, focusing on quality control, compliance, and risk management.",
            card_reefer_point1: "Pre-Shipment & Post-Arrival",
            card_reefer_point2: "Damage & Loss Assessment",
            card_reefer_point3: "Condition Monitoring & Compliance",
            card_dry_desc: "Providing secure and expert loading solutions to pack all types of cargo with care, maximizing space utilization while minimizing damage risks during transit.",
            card_dry_point1: "Optimal Loading Solutions",
            card_dry_point2: "Secure Cargo Handling",
            card_dry_point3: "Customized Stuffing Plans",
            card_tank_desc: "Providing expert cargo securing using high-quality lashing techniques tailored to weight, fragility, and dimensions to prevent movement during transit.",
            card_tank_point1: "Secure & Safe Tension Lashing",
            card_tank_point2: "Customized Lashing Plans",
            card_tank_point3: "Compliance with Global Standards",
            card_lashing_desc: "Reliable and environmentally responsible solutions for managing and disposing of unwanted, expired, damaged, or surplus cargo in compliance with regulations.",
            card_lashing_point1: "Perishables & Hazmat Disposal",
            card_lashing_point2: "Eco-friendly Recycling & Waste",
            card_lashing_point3: "Real-time Tracking & Reporting",
            card_empty_desc: "Delivering professional freight container cleaning and hygiene assurance to meet IICL rules, optimizing container usability and protecting goods.",
            card_empty_point1: "Comprehensive Debris & Odor Sweep",
            card_empty_point2: "Steam & Chemical Treatments",
            card_empty_point3: "Hygiene Certification Reports",
            guide_tag: "Interactive Standard",
            guide_title: "The 7-Point Container Inspection",
            guide_desc: "Click or hover over the highlighted checkpoints on the container blueprint to explore the standard maritime inspection points.",
            bp_status_secure: "SECURE ELEMENT",
            bp_checklist_header: "Inspection Checklist:",
            about_tag: "Global Network",
            about_title: "Securing International Shipping Channels",
            about_lead: "At SeaLandx, we specialize in providing reliable, efficient, and tailored logistics solutions to meet the diverse needs of businesses across industries.",
            about_body: "With our integrated services, we ensure your goods are transported safely, on time, and cost-effectively. Backed by advanced technology and a dedicated team of experts, Sealandx is equipped to handle the complexities of modern logistics, so you can focus on what matters most – growing your business.",
            about_feat1_title: "Certified Surveys",
            about_feat1_desc: "Surveys conducted under international ISO & IICL guidelines.",
            about_feat2_title: "Instant Reports",
            about_feat2_desc: "Cloud inspection logs and digital photos delivered in real-time.",
            partners_tag: "Trusted Partners",
            partners_title: "Our Partners",
            partners_desc: "We work with the world's leading shipping lines, port authorities, and logistics networks.",
            stat_containers: "Containers Inspected",
            stat_hours: "Hour Support Coverage",
            stat_compliance: "% Safety Compliance",
            stat_ports: "Major Ports Covered",
            cert_tag: "Compliance & Quality",
            cert_title: "ISO Certified Logistics Services",
            cert_desc: "SeaLandX operates under strict international standards to ensure quality, environmental safety, and occupational health across all logistics channels.",
            cert_click_view: "Click to View Certificate",
            cert_9001_title: "Quality Management System (QMS)",
            cert_9001_desc: "Standardizes processes to consistently deliver services that meet customer expectations and regulatory requirements.",
            cert_14001_title: "Environmental Management System (EMS)",
            cert_14001_desc: "Helps manage environmental impact, reduce waste, and demonstrate commitment to sustainability.",
            cert_45001_title: "Occupational Health & Safety (OHSMS)",
            cert_45001_desc: "Ensures safety standards to reduce occupational injuries, illnesses, and promote a secure workspace.",
            articles_tag: "Maritime Insights",
            articles_title: "Container Safety & Standards",
            articles_desc: "Read the latest container security standards, logistics bulletins, and regulatory maritime updates.",
            art1_tag: "Regulations",
            art1_date: "June 14, 2026",
            art1_title: "Understanding the ISO Container Standards",
            art1_desc: "An in-depth review of ISO 668 dimensions, testing criteria, and load parameters to prevent terminal accidents.",
            art2_tag: "Reefer Tech",
            art2_date: "May 28, 2026",
            art2_title: "Preventing Cold Chain Breakage in Reefers",
            art2_desc: "Key guidelines for checking refrigerated container machinery, compressor integrity, and diagnostic log data before export.",
            art3_tag: "Security",
            art3_date: "April 10, 2026",
            art3_title: "7-Point Container Security Seals Demystified",
            art3_desc: "How strict structural inspection at port entry blocks illicit cargo entry and guarantees seal security compliance.",
            art_read_more: "Read Article",
            form_tag: "Get in Touch",
            form_title: "Request Diagnostic Survey",
            form_desc: "Submit the details of your container fleet, and our certified cargo surveyors will contact you within 2 hours.",
            form_lbl_name: "Full Name",
            form_lbl_email: "Email Address",
            form_lbl_phone: "Phone Number",
            form_lbl_port: "Target Port / Location",
            form_lbl_type: "Survey Type",
            form_lbl_msg: "Survey Details / Container Numbers",
            form_ph_name: "John Doe",
            form_ph_email: "john@company.com",
            form_ph_phone: "+1 (555) 019-2834",
            form_ph_port: "Port of Alexandria, EG",
            form_ph_msg: "Describe cargo volume, specific dates, or container prefixes...",
            opt_psi: "Container Inspection & Survey",
            opt_reefer: "Cargo Inspection & Survey",
            opt_dry: "Cargo Stuffing",
            opt_tank: "Cargo Lashing",
            opt_lashing: "Cargo Disposal",
            opt_empty: "Container Cleaning",
            opt_custom: "Multiple / Fleet Inspection",
            btn_submit: "Submit Survey Request",
            feedback_title: "Request Submitted Successfully!",
            feedback_desc: "Thank you. A logistics surveyor will review your ticket and contact you shortly.",
            btn_send_another: "Send Another Request",
            info_title: "Corporate Head Office",
            info_desc: "SeaLandX operates global survey hubs at major trade nodes. Contact us directly for urgent vessel surveyor dispatch.",
            lbl_email: "Email Survey Desk",
            lbl_phone: "Urgent Hotlines",
            lbl_office: "Main Terminal Office",
            lbl_office_val: "10 Sizostris & El Thalathing Street, Port Said, Egypt",
            map_hq: "HQ: Port Said",
            footer_brand_desc: "Globally trusted marine cargo surveys, container seal audits, and logistics security assessments.",
            footer_col1_header: "Quick Links",
            footer_col2_header: "Certifications",
            footer_col3_header: "Logistics Bulletins",
            footer_news_desc: "Subscribe to receive regulatory safety updates directly in your inbox.",
            footer_news_ph: "email@company.com",
            footer_news_btn: "Join",
            footer_copyright: "All rights reserved. Designed for international safety compliance.",
            footer_privacy: "Privacy Policy",
            footer_terms: "Terms of Service",
            cert_iicl: "IICL Container Inspections",
            cert_iso: "ISO 668 & 1496 Audits",
            cert_psi: "Pre-Shipment Inspections",
            cert_reefer: "Reefer Cold Chain Logs",
            cert_lashing: "Cargo Lashing & Tie-downs",
            cert_empty: "Empty Container Sweeps",
            clean_sec_tag: "CONTAINER CLEANING",
            clean_sec_title: "EMPTY CONTAINER PEST & CLEAN AUDITS",
            clean_sec_desc: "Before cargo stuffing, empty containers must be clean, odorless, and free from pests. We perform sanitization verification, pest scans, and cleaning certificate audits.",
            clean_point1: "Agricultural pest and insect scanning",
            clean_point2: "Chemical odor testing and venting",
            clean_point3: "Sanitary wash verification reports",
            clean_btn: "Request Inspection",
            clean_label_std: "STANDARDS",
            clean_val_std: "Pest Free",
            clean_label_time: "AUDIT TIME",
            clean_val_time: "~1.0 Hours"
        },
        ar: {
            page_title: "سي لاند إكس | شريكك لحلول لا حصر لها",
            logo_subtitle: "الخدمات اللوجستية المتكاملة",
            nav_home: "الرئيسية",
            nav_services: "الخدمات",
            nav_guide: "دليل الـ 7 نقاط",
            nav_about: "من نحن",
            nav_certifications: "الشهادات والاعتمادات",
            nav_articles: "المقالات",
            nav_contact: "اتصل بنا",
            nav_title: "قائمة التصفح",
            btn_request: "طلب معاينة وفحص",
            hero_tag: "بوابة الفحص والتدقيق الأمني البحري",
            hero_title: "معاينة وفحص دقيق <br><span class=\"text-gradient\">للحاويات</span>",
            hero_desc: "تبسيط سلاسل التوريد وتقديم القيمة في كل خطوة من خلال حلول لوجستية موثوقة وفعالة ومخصصة.",
            srv_psi_title: "فحص ومعاينة الحاويات",
            srv_psi_desc: "فحص قياسي للحاويات طبقاً لمعايير IICL وتقييم التلف.",
            srv_reefer_title: "فحص ومعاينة الشحنات",
            srv_reefer_desc: "مراقبة الجودة، وتقييم المخاطر، وفحص حالة البضائع.",
            srv_dry_title: "شحن وتعبئة البضائع",
            srv_dry_desc: "حلول تحميل فعالة وآمنة ومتخصصة لجميع أنواع البضائع.",
            srv_tank_title: "تربيط وتأمين البضائع",
            srv_tank_desc: "حلول تربيط وتثبيت متخصصة للنقل البحري أو البري أو الجوي.",
            srv_lashing_title: "التخلص من الشحنات التالفة",
            srv_lashing_desc: "تخلص آمن ومتوافق جمركياً وبيئياً من الشحنات التالفة والفائضة.",
            srv_empty_title: "تنظيف حاويات الشحن",
            srv_empty_desc: "حلول تنظيف وتطهير الحاويات للامتثال لقواعد IICL.",
            term_hud_title: "شاشة عرض الميناء المباشرة - بث رقم 042",
            term_scanner_active: "الماسح الضوئي نشط",
            term_widget_port: "منطقة هيئة الميناء",
            term_widget_port_val: "أرصفة سي لاند إكس",
            term_widget_coords: "خطوط الطول / العرض",
            term_widget_level: "مستوى المعاينة",
            term_widget_level_val: "المرحلة الأولى: حماية عالمية",
            term_widget_conf: "دقة الفحص الفعلي",
            services_tag: "معايير المعاينة والتدقيق",
            services_title: "خدمات فحص ومعاينة متخصصة",
            services_desc: "يستخدم خبراؤنا التقنيون بروتوكولات الأمان الرائدة في الصناعة، والسجلات الذكية، وتدابير حماية الشحنات في كل منفذ بحري.",
            card_psi_desc: "تقديم فحص وتقييم تفصيلي للحاويات لضمان امتثالها لمعايير IICL العالمية، متطلبات العملاء، وقواعد ولوائح السلامة والأمان.",
            card_psi_point1: "الامتثال الكامل لمعايير IICL",
            card_psi_point2: "تقييم الأضرار الهيكلية والتلف",
            card_psi_point3: "لوائح السلامة والأمان الدولية",
            card_reefer_desc: "خدمات مسح ومعاينة البضائع الشاملة لضمان المناولة الآمنة والفعالة والدقيقة للسلع أثناء النقل، والتركيز على مراقبة الجودة والامتثال وإدارة المخاطر.",
            card_reefer_point1: "معاينات ما قبل الشحن وما بعد الوصول",
            card_reefer_point2: "تقييم الأضرار والخسائر أثناء النقل",
            card_reefer_point3: "مراقبة حالة الشحنات والامتثال للأنظمة",
            card_dry_desc: "توفير حلول تحميل وتعبئة متخصصة وآمنة لجميع أنواع البضائع مع تعبئتها بأعلى رعاية، مما يزيد استغلال المساحة ويقلل مخاطر التلف أثناء العبور.",
            card_dry_point1: "حلول تحميل مثالية لاستغلال المساحات",
            card_dry_point2: "مناولة آمنة للبضائع لضمان الاستقرار",
            card_dry_point3: "خطط تعبئة مخصصة للشحنات الثقيلة والحساسة",
            card_tank_desc: "توفير خدمات لربط وتأمين الشحنات باستخدام مواد عالية الجودة وتقنيات تربيط مخصصة للوزن والأبعاد لمنع حركتها أثناء النقل.",
            card_tank_point1: "تربيط وتأمين عالي الشد للبضائع",
            card_tank_point2: "خطط تربيط وتثبيت مخصصة لأبعاد الشحنة",
            card_tank_point3: "الالتزام التام بمعايير السلامة الدولية",
            card_lashing_desc: "حلول فعالة وموثوقة ومسؤولة بيئياً لإدارة والتخلص من الشحنات غير المرغوب فيها، منتهية الصلاحية، التالفة، أو الفائضة بالتوافق مع القوانين.",
            card_lashing_point1: "التخلص من المواد الخطرة والتالفة",
            card_lashing_point2: "إعادة تدوير وفرز النفايات بيئياً",
            card_lashing_point3: "تتبع حي للعملية وتقارير تفصيلية موثوقة",
            card_empty_desc: "تقديم حلول تنظيف وتطهير احترافية وفعالة وصديقة للبيئة لضمان تلبية الحاويات لقواعد معهد مستأجري الحاويات الدولي IICL وقواعد النظافة.",
            card_empty_point1: "إزالة شاملة للأوساخ والترسبات والروائح",
            card_empty_point2: "غسيل بالبخار ومعالجات كيميائية متخصصة",
            card_empty_point3: "شهادات وتقارير ضمان النظافة والصحة",
            guide_tag: "معايير السلامة التفاعلية",
            guide_title: "الفحص القياسي للحاوية ذو الـ 7 نقاط",
            guide_desc: "انقر أو مرر مؤشر الماوس فوق نقاط الفحص المحددة على مخطط الحاوية لاستكشاف المعايير البحرية الدولية.",
            bp_status_secure: "عنصر آمن ومفحوص",
            bp_checklist_header: "قائمة مراجعة الفحص والتأكيد:",
            about_tag: "الشبكة العالمية",
            about_title: "تأمين قنوات الشحن والتجارة الدولية",
            about_lead: "في سي لاند إكس، نحن متخصصون في تقديم حلول لوجستية موثوقة وفعالة ومخصصة لتلبية الاحتياجات المتنوعة للشركات عبر مختلف القطاعات والمجالات.",
            about_body: "من خلال خدماتنا المتكاملة، نضمن نقل بضائعك بأمان وفي الوقت المحدد وبتكلفة فعالة. بدعم من التكنولوجيا المتقدمة وفريق متخصص من الخبراء، سي لاند إكس مجهزة تماماً للتعامل مع تعقيدات الخدمات اللوجستية الحديثة، مما يتيح لك التركيز على تنمية أعمالك.",
            about_feat1_title: "مسوحات وفحوصات معتمدة",
            about_feat1_desc: "تُجرى الفحوصات وفقاً للإرشادات والمعايير الدولية لـ ISO و IICL.",
            about_feat2_title: "تقارير رقمية فورية",
            about_feat2_desc: "تسليم سجلات فحص سحابية وصور عالية الدقة في الوقت الفعلي للعملاء.",
            partners_tag: "شركاء موثوقون",
            partners_title: "شركاؤنا",
            partners_desc: "نحن نعمل مع خطوط الشحن الرائدة وهيئات الموانئ والشبكات اللوجستية العالمية.",
            stat_containers: "حاوية تم فحصها ومعاينتها",
            stat_hours: "ساعة تغطية الدعم الفني",
            stat_compliance: "نسبة الامتثال للأمان والسلامة",
            stat_ports: "ميناء تجاري مغطى بخدماتنا",
            cert_tag: "الامتثال والجودة",
            cert_title: "خدمات لوجستية معتمدة من ISO",
            cert_desc: "تعمل سي لاند إكس وفقاً لمعايير دولية صارمة لضمان الجودة، والسلامة البيئية، والصحة المهنية عبر جميع القنوات اللوجستية.",
            cert_click_view: "انقر لعرض الشهادة",
            cert_9001_title: "نظام إدارة الجودة (QMS)",
            cert_9001_desc: "يقوم بتوحيد العمليات لتقديم خدمات تلبي توقعات العملاء والمتطلبات التنظيمية باستمرار.",
            cert_14001_title: "نظام الإدارة البيئية (EMS)",
            cert_14001_desc: "يساعد في إدارة الأثر البيئي، وتقليل النفايات، وإثبات الالتزام بالاستدامة البيئية.",
            cert_45001_title: "السلامة والصحة المهنية (OHSMS)",
            cert_45001_desc: "يضمن معايير السلامة للحد من حوادث العمل والأمراض المهنية وتعزيز بيئة عمل آمنة.",
            articles_tag: "معلومات وإضاءات بحرية",
            articles_title: "معايير الحاويات وسلامة النقل",
            articles_desc: "اقرأ أحدث معايير أمان الحاويات، النشرات اللوجستية والتحديثات التنظيمية البحرية.",
            art1_tag: "اللوائح البحرية",
            art1_date: "١٤ يونيو ٢٠٢٦",
            art1_title: "فهم المعايير الدولية للحاويات (ISO)",
            art1_desc: "مراجعة تفصيلية لأبعاد ومعايير الاختبار والوزن القياسي للحاويات لتجنب الحوادث في أرصفة الشحن.",
            art2_tag: "تقنيات التبريد",
            art2_date: "٢٨ مايو ٢٠٢٦",
            art2_title: "تجنب انقطاع سلسلة التبريد في الحاويات المبردة",
            art2_desc: "إرشادات هامة لفحص آلات حاويات التبريد، وسلامة الضاغط، وقراءة بيانات السجل الرقمي قبل التصدير.",
            art3_tag: "الأمن الجمركي",
            art3_date: "١٠ أبريل ٢٠٢٦",
            art3_title: "الأختام الأمنية للحاويات وفحوصات السلامة",
            art3_desc: "كيف يساهم الفحص الهيكلي الصارم عند بوابات الموانئ في منع الشحنات غير القانونية وضمان سلامة أختام الشحن.",
            art_read_more: "اقرأ المقال بالكامل",
            form_tag: "تواصل معنا الآن",
            form_title: "طلب معاينة تشخيصية",
            form_desc: "أرسل تفاصيل أسطول حاوياتك، وسيقوم مساحونا المعتمدون بالتواصل معك في غضون ساعتين فقط.",
            form_lbl_name: "الاسم الكامل للعميل",
            form_lbl_email: "البريد الإلكتروني للشركة",
            form_lbl_phone: "رقم الهاتف / الجوال",
            form_lbl_port: "الميناء / الموقع المستهدف للفحص",
            form_lbl_type: "نوع مسح المعاينة المطلوبة",
            form_lbl_msg: "تفاصيل المعاينة / أرقام الحاويات المستهدفة",
            form_ph_name: "مثال: أحمد محمد",
            form_ph_email: "name@company.com",
            form_ph_phone: "+20 (12) 3456-7890",
            form_ph_port: "مثال: ميناء الإسكندرية، محطة الحاويات",
            form_ph_msg: "يرجى كتابة عدد الحاويات، الرموز، مواعيد الفحص المحددة...",
            opt_psi: "فحص ومعاينة الحاويات",
            opt_reefer: "فحص ومعاينة الشحنات",
            opt_dry: "شحن وتعبئة البضائع",
            opt_tank: "تربيط وتأمين البضائع",
            opt_lashing: "التخلص من الشحنات التالفة",
            opt_empty: "تنظيف حاويات الشحن",
            opt_custom: "معاينة متعددة / فحص كامل للأسطول",
            btn_submit: "إرسال طلب مسح المعاينة",
            feedback_title: "تم إرسال طلبك بنجاح!",
            feedback_desc: "شكراً لك. سيقوم مساح لوجستي معتمد بمراجعة التذكرة والتواصل معك في أقرب وقت.",
            btn_send_another: "إرسال طلب آخر",
            info_title: "المكتب الرئيسي للشركة",
            info_desc: "تدير سي لاند إكس مراكز فحص ومعاينة عالمية في الموانئ الرئيسية. اتصل بنا مباشرة لإيفاد مساح بحري عاجل.",
            lbl_email: "مكتب استلام طلبات المعاينة",
            lbl_phone: "الخطوط الساخنة العاجلة",
            lbl_office: "مكتب المحطة الرئيسي للشركة",
            lbl_office_val: "١٠ شارع سيزوستريس والثلاثيني، بورسعيد، مصر",
            map_hq: "المقر الرئيسي: بورسعيد",
            footer_brand_desc: "مسوحات شحن بحري موثوقة عالمياً، تدقيق أختام الحاويات، وتقييم أمن سلاسل التوريد والخدمات اللوجستية.",
            footer_col1_header: "روابط سريعة",
            footer_col2_header: "الشهادات والاعتمادات",
            footer_col3_header: "النشرات والتقارير البحرية",
            footer_news_desc: "اشترك معنا لتلقي تحديثات السلامة واللوائح اللوجستية مباشرة في بريدك.",
            footer_news_ph: "email@company.com",
            footer_news_btn: "اشترك",
            footer_copyright: "جميع الحقوق محفوظة. تم التصميم للامتثال لمعايير السلامة الدولية.",
            footer_privacy: "سياسة الخصوصية",
            footer_terms: "شروط الخدمة",
            cert_iicl: "معاينات الحاويات طبقاً لـ IICL",
            cert_iso: "تدقيق معايير ISO 668 و 1496",
            cert_psi: "فحوصات الشحنات قبل التصدير",
            cert_reefer: "سجلات التحكم في الحاويات المبردة",
            cert_lashing: "تربيط وتأمين البضائع",
            cert_empty: "تنظيف وتطهير الحاويات فارغة",
            clean_sec_tag: "تنظيف الحاويات",
            clean_sec_title: "تدقيق ونظافة الحاويات الفارغة ومكافحة الآفات",
            clean_sec_desc: "قبل شحن وتعبئة البضائع، يجب أن تكون الحاويات الفارغة نظيفة تماماً، خالية من الروائح والآفات. نقوم بالتحقق من التعقيم، ومسح الآفات، وتدقيق شهادات التنظيف.",
            clean_point1: "فحص ومسح الآفات والحشرات الزراعية",
            clean_point2: "اختبار التهوية والروائح الكيميائية",
            clean_point3: "تقارير واعتمادات الغسيل والتطهير الصحي",
            clean_btn: "طلب معاينة وفحص",
            clean_label_std: "المعايير",
            clean_val_std: "خالية من الآفات",
            clean_label_time: "زمن المعاينة",
            clean_val_time: "~١.٠ ساعة"
        }
    };

    const showcaseCaption = document.getElementById('showcase-caption');
    const serviceTitleKeys = {
        'pre-shipment': 'srv_psi_title',
        'reefer': 'srv_reefer_title',
        'dry-van': 'srv_dry_title',
        'iso-tank': 'srv_tank_title',
        'lashing': 'srv_lashing_title',
        'empty-container': 'srv_empty_title'
    };

    let currentLang = localStorage.getItem('sealandx_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('sealandx_lang', lang);

        // Update document attributes
        document.documentElement.setAttribute('lang', lang);
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.setAttribute('dir', dir);

        // Update Toggle Button Text
        const langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.textContent = lang === 'en' ? 'العربية' : 'English';
        }

        // Apply translations to all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[lang][key];
            if (translation) {
                // If translation contains HTML tags (like <span class="text-gradient">), use innerHTML
                element.style.opacity = 0;
                setTimeout(() => {
                    if (translation.includes('<')) {
                        element.innerHTML = translation;
                    } else {
                        element.textContent = translation;
                    }
                    element.style.transition = 'opacity 0.3s ease';
                    element.style.opacity = 1;
                }, 150);
            }
        });

        // Apply translations to placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = translations[lang][key];
            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });

        // Update the active blueprint info immediately if one is loaded
        const activeHotspot = document.querySelector('.blueprint-hotspot.active');
        if (activeHotspot) {
            const pointId = activeHotspot.getAttribute('data-point');
            triggerHotspotUpdate(pointId, activeHotspot);
        }

        // Update active service showcase caption text immediately
        const activeServiceItem = document.querySelector('.service-menu-item.active');
        if (activeServiceItem && showcaseCaption) {
            const serviceKey = activeServiceItem.getAttribute('data-service');
            const titleKey = serviceTitleKeys[serviceKey];
            showcaseCaption.textContent = translations[lang][titleKey] || '';
        }
    }

    // Language switcher click handler
    const langToggleBtn = document.getElementById('lang-toggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            setLanguage(currentLang === 'en' ? 'ar' : 'en');
        });
    }


    /* ==========================================================
       2. Mobile Navigation Drawer Controls
       ========================================================== */
    const menuToggle = document.getElementById('menu-toggle');
    const closeDrawer = document.getElementById('close-drawer');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle && mobileDrawer) {
        menuToggle.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
            menuToggle.classList.add('active');
        });
    }

    function closeDrawerMenu() {
        if (mobileDrawer) {
            mobileDrawer.classList.remove('active');
        }
        if (menuToggle) {
            menuToggle.classList.remove('active');
        }
    }

    if (closeDrawer) {
        closeDrawer.addEventListener('click', closeDrawerMenu);
    }

    // Close drawer when clicking links
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeDrawerMenu);
    });

    // Close drawer when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDrawerMenu();
        }
    });


    /* ==========================================================
       3. Services Image Showcase Switcher
       ========================================================== */
    const serviceItems = document.querySelectorAll('.service-menu-item');
    const showcaseImages = document.querySelectorAll('.showcase-image');

    serviceItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetService = item.getAttribute('data-service');

            // 1. Toggle active class in left menu
            serviceItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // 2. Cross-fade showcase images
            showcaseImages.forEach(img => {
                img.classList.remove('active');
                if (img.id === `bg-${targetService}`) {
                    img.classList.add('active');
                }
            });

            // 3. Update caption text
            if (showcaseCaption) {
                const titleKey = serviceTitleKeys[targetService];
                showcaseCaption.textContent = translations[currentLang][titleKey] || '';
            }
        });
    });


    /* ==========================================================
       4. Interactive 7-Point Blueprint Checkpoints (Bilingual)
       ========================================================== */
    const hotspots = document.querySelectorAll('.blueprint-hotspot');
    const infoNum = document.getElementById('info-point-num');
    const infoTitle = document.getElementById('info-point-title');
    const infoDesc = document.getElementById('info-point-desc');
    const infoChecklist = document.getElementById('info-point-checklist');
    const infoBox = document.getElementById('blueprint-content-box');

    const blueprintData = {
        1: {
            en: {
                num: '01',
                title: 'Inside / Outside Doors',
                desc: 'Inspect locking rods, handles, gaskets, and door hinges. Check for damage, warping, and light leakage from the inside. Verify the physical high-security seal matches the paperwork exactly.',
                checklist: [
                    'Verify locking rods rotate fully and lock securely',
                    'Inspect door gaskets for tears, holes, or gaps',
                    'Examine door hinges for structural welds/cracks',
                    'Crosscheck shipping seal serial number'
                ]
            },
            ar: {
                num: '٠١',
                title: 'الأبواب الداخلية والخارجية',
                desc: 'افحص قضبان القفل والمقابض وحوافظ القفل لضمان الإغلاق الآمن. ابحث عن أي مسامير مفكوكة أو لحامات تالفة. افحص حواف الأبواب المطاطية (الجوانات) لمنع تسرب المياه، وتحقق من تطابق رقم ختم الأمان مع السجلات الجمركية تماماً.',
                checklist: [
                    'تأكد من دوران قضبان القفل وإغلاقها بإحكام',
                    'افحص جوانات الباب بحثاً عن تشققات أو ثقوب',
                    'افحص مفصلات الأبواب للتأكد من سلامة اللحامات',
                    'طابق الرقم التسلسلي لختم الشحن الفعلي'
                ]
            }
        },
        2: {
            en: {
                num: '02',
                title: 'Left Side Wall',
                desc: 'Examine the exterior metal panels for holes, signs of structural fatigue, deep rust, or improper repairs (e.g. patches not welded correctly). From inside, verify there are no structural bows or protrusions.',
                checklist: [
                    'Look for fresh weld marks indicating hidden panels',
                    'Check corrugated grooves for metal fatigue/dents',
                    'Verify internal tie-down rings are secure',
                    'Inspect for light leaks along the side seam'
                ]
            },
            ar: {
                num: '٠٢',
                title: 'الجدار الجانبي الأيسر',
                desc: 'افحص الألواح المعدنية الخارجية بحثاً عن ثقوب، أو علامات إجهاد هيكلي، أو صدأ عميق، أو إصلاحات غير صحيحة (مثل الرقع غير الملحومة جيداً). من الداخل، تأكد من عدم وجود انبعاجات أو نتوءات هيكلية.',
                checklist: [
                    'ابحث عن علامات لحام جديدة تشير لجدران وهمية',
                    'افحص تجاعيد المعدن للتأكد من خلوها من الانبعاجات الحادة',
                    'تأكد من إحكام حلقات تثبيت البضائع الداخلية',
                    'افحص تسريب الضوء على طول اللحام الجانبي'
                ]
            }
        },
        3: {
            en: {
                num: '03',
                title: 'Right Side Wall',
                desc: 'Verify the right side wall panel is structurally symmetric. Inspect any decals or container markings to ensure they match container registration codes. Check for patches that might hide illegal modifications.',
                checklist: [
                    'Confirm external decals match registration sheets',
                    'Inspect structural integrity of wall side posts',
                    'Perform hammer testing for hollow sounds (double walls)',
                    'Scan panel coatings for rust protection integrity'
                ]
            },
            ar: {
                num: '٠٣',
                title: 'الجدار الجانبي الأيمن',
                desc: 'تحقق من أن لوح الجدار الجانبي الأيمن متماثل هيكلياً. افحص أي ملصقات أو علامات على الحاوية للتأكد من مطابقتها لأكواد تسجيل الحاوية. افحص الرقع التي قد تخفي تعديلات غير قانونية.',
                checklist: [
                    'تأكد من مطابقة الرموز الخارجية لملف التسجيل بالكامل',
                    'افحص السلامة الهيكلية للقوائم الجانبية للجدار',
                    'أجرِ اختبار الصوت بالمطرقة (للكشف عن جدران مزدوجة)',
                    'تحقق من سلامة طلاء الألواح ومقاومته للرطوبة والصدأ'
                ]
            }
        },
        4: {
            en: {
                num: '04',
                title: 'Front Wall (End Wall)',
                desc: 'The front wall is a high-risk area for hidden compartments. Measure the interior length to ensure it aligns with container dimensions. Look for false walls, blocks, or newly painted spots.',
                checklist: [
                    'Measure interior length with laser tape tool',
                    'Check front corner posts for stress fractures',
                    'Examine internal panel paint consistency',
                    'Verify cleanliness and absence of pesticide residue'
                ]
            },
            ar: {
                num: '٠٤',
                title: 'الجدار الأمامي (النهائي)',
                desc: 'يعد الجدار الأمامي منطقة عالية المخاطر لوجود مقصورات خفية. قم بقياس الطول الداخلي للتأكد من توافقه مع الأبعاد القياسية للحاوية. ابحث عن جدران وهمية، أو كتل، أو بقع مطلية حديثاً.',
                checklist: [
                    'قس الطول الداخلي للحاوية بدقة باستخدام شريط ليزري',
                    'افحص أعمدة الزوايا الأمامية للكشف عن تصدعات الإجهاد',
                    'افحص تناسق طلاء الجدار الداخلي وتماثه',
                    'تأكد من نظافة الجدار تماماً وخلوه من رواسب المبيدات الحشرية'
                ]
            }
        },
        5: {
            en: {
                num: '05',
                title: 'Ceiling / Roof',
                desc: 'Check the container roof for physical dents that hold water, leading to rust and leaks. Inside, inspect the roof bows and roof panels for rust holes, ceiling patches, or structural bends.',
                checklist: [
                    'Scan ceiling panels for overhead water staining',
                    'Inspect roof bow supports for structural bends',
                    'Check external corner castings for lift capability',
                    'Confirm integrity of top sealing weld seams'
                ]
            },
            ar: {
                num: '٠٥',
                title: 'السقف / السطح',
                desc: 'افحص سقف الحاوية بحثاً عن انبعاجات قد تجمع المياه وتؤدي للصدأ والتسريب. من الداخل، افحص دعامات السقف والألواح بحثاً عن ثقوب الصدأ، أو رقع السقف، أو الانحناءات الهيكلية.',
                checklist: [
                    'افحص السقف من الداخل بحثاً عن آثار بقع أو تسريب مائي',
                    'افحص دعامات السقف المنحنية للتأكد من استقامتها الهيكلية',
                    'تحقق من سلامة قطع صب الزوايا العلوية المخصصة للرفع',
                    'تأكد من سلامة لحامات سد الفراغات في السقف الخارجي'
                ]
            }
        },
        6: {
            en: {
                num: '06',
                title: 'Floor (Internal)',
                desc: 'Verify that the floorboards are flat, clean, and dry. Floorboards should be uniform. Check for agriculture pests, strong chemical odors, stains, and look for signs of false floors raised to hide cargo.',
                checklist: [
                    'Inspect floor planks for heavy wood decay or stains',
                    'Verify floor frame is flat and free of cargo bulges',
                    'Scan floor screws for signs of recent removal',
                    'Smell test for strong chemical or organic odors'
                ]
            },
            ar: {
                num: '٠٦',
                title: 'الأرضية (الداخلية)',
                desc: 'تحقق من أن ألواح الأرضية مسطحة ونظيفة وجافة، ويجب أن تكون موحدة. افحص وجود آفات زراعية، أو روائح كيميائية قوية، أو بقع، وابحث عن أي علامات تشير لرفع الأرضية لإخفاء البضائع.',
                checklist: [
                    'افحص ألواح الخشب بحثاً عن تعفن أو تآكل أو تلطخ زيتي',
                    'تحقق من استواء إطار الأرضية وخلوه من الانتفاخات الضارة',
                    'افحص مسامير الأرضية بحثاً عن علامات فك وتركيب حديثة',
                    'شم الأرضية للتأكد من خلوها من الروائح الكيميائية أو العضوية'
                ]
            }
        },
        7: {
            en: {
                num: '07',
                title: 'Undercarriage & Frame',
                desc: 'Inspect underneath the container before lifting. Look at bottom crossmembers, tunnel recesses, and gooseneck structures. Ensure no foreign packages are welded or magnetic-attached to the frame.',
                checklist: [
                    'Inspect all crossmembers for bends or missing beams',
                    'Verify gooseneck tunnel recess structure is clear',
                    'Check bottom side rails for structural integrity',
                    'Verify forklift pockets are clear and undamaged'
                ]
            },
            ar: {
                num: '٠٧',
                title: 'الهيكل السفلي وقاعدة الحاوية',
                desc: 'افحص الجزء السفلي للحاوية قبل الرفع. انظر إلى العوارض المتقاطعة السفلية، وتجاويف النفق، وهياكل عنق الإوزة. تأكد من عدم وجود طرود غريبة ملحومة أو مثبتة مغناطيسياً بالهيكل السفلي.',
                checklist: [
                    'افحص جميع العوارض المتقاطعة للتأكد من عدم التوائها أو فقدانها',
                    'تحقق من خلو تجويف نفق شاحنة (عنق الإوزة) بالكامل',
                    'افحص القضبان الجانبية السفلية للتأكد من استقامتها الهيكلية',
                    'تحقق من سلامة فتحات شوك الرافعة الشوكية وخلوها من الاعوجاج'
                ]
            }
        }
    };

    function triggerHotspotUpdate(pointId, hotspot) {
        // 1. Toggle active class
        hotspots.forEach(h => h.classList.remove('active'));
        hotspot.classList.add('active');

        // 2. Animate details panel update
        infoBox.style.opacity = 0;
        infoBox.style.transform = 'translateY(10px)';
        infoBox.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            const data = blueprintData[pointId][currentLang];
            if (data) {
                infoNum.textContent = blueprintData[pointId]['en'].num; // maintain clean numerical format
                infoTitle.textContent = data.title;
                infoDesc.textContent = data.desc;
                
                // Clear and rebuild checklist items
                infoChecklist.innerHTML = '';
                data.checklist.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `<span></span>${item}`;
                    infoChecklist.appendChild(li);
                });
            }

            // Fade back in
            infoBox.style.opacity = 1;
            infoBox.style.transform = 'translateY(0)';
        }, 300);
    }

    hotspots.forEach(hotspot => {
        // Click handler
        hotspot.addEventListener('click', () => {
            const pointId = hotspot.getAttribute('data-point');
            triggerHotspotUpdate(pointId, hotspot);
        });

        // Keyboard handler for accessibility
        hotspot.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                hotspot.click();
            }
        });
    });


    /* ==========================================================
       5. Animated Statistics Counters
       ========================================================== */
    const statsSection = document.getElementById('about');
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersStarted = false;

    function startCounters() {
        statNumbers.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            const duration = 1500; // 1.5 seconds animation
            const stepTime = 15;
            const steps = duration / stepTime;
            const stepValue = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += stepValue;
                if (current >= target) {
                    clearInterval(timer);
                    // Formatting (e.g. adding '+' sign for containers and ports)
                    if (target === 15240) {
                        counter.textContent = currentLang === 'ar' ? '١٥,٢٤٠+' : '15,240+';
                    } else if (target === 35) {
                        counter.textContent = currentLang === 'ar' ? '٣٥+' : '35+';
                    } else if (target === 100) {
                        counter.textContent = currentLang === 'ar' ? '١٠٠٪' : '100%';
                    } else {
                        counter.textContent = currentLang === 'ar' ? '٢٤' : '24';
                    }
                } else {
                    const val = Math.floor(current);
                    counter.textContent = currentLang === 'ar' ? val.toLocaleString('ar-EG') : val.toLocaleString('en-US');
                }
            }, stepTime);
        });
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersStarted) {
                countersStarted = true;
                startCounters();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (statsSection) {
        statsObserver.observe(statsSection);
    }


    /* ==========================================================
       6. Sleek Form Validation & Submission Feedback
       ========================================================== */
    const contactForm = document.getElementById('inspection-request-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = document.getElementById('btn-submit');
            const originalText = submitBtn.textContent;

            // Simple button feedback state
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'ar' ? 'جاري إرسال الطلب...' : 'Submitting Request...';
            submitBtn.style.opacity = '0.7';

            // Simulate server network request delay
            setTimeout(() => {
                // Fade out form
                contactForm.style.opacity = '0';
                contactForm.style.transform = 'translateY(-10px)';
                contactForm.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

                setTimeout(() => {
                    contactForm.classList.add('hidden');
                    formFeedback.classList.remove('hidden');
                    
                    // Reset button
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                    submitBtn.style.opacity = '1';
                }, 400);

            }, 1500);
        });
    }

    // Reset Form logic to allow user to submit again without reloading
    const resetFormBtn = document.getElementById('btn-reset-form');
    if (resetFormBtn && contactForm && formFeedback) {
        resetFormBtn.addEventListener('click', () => {
            // Reset input values
            contactForm.reset();

            // Fade out feedback message
            formFeedback.style.opacity = '0';
            formFeedback.style.transform = 'translateY(-10px)';
            formFeedback.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

            setTimeout(() => {
                formFeedback.classList.add('hidden');
                
                // Show form again with transitions
                contactForm.classList.remove('hidden');
                
                // Trigger a slight delay to allow display change before transition
                setTimeout(() => {
                    contactForm.style.opacity = '1';
                    contactForm.style.transform = 'translateY(0)';
                }, 50);

                // Reset feedback styles for next time
                formFeedback.style.opacity = '1';
                formFeedback.style.transform = 'translateY(0)';
            }, 400);
        });
    }

    /* ==========================================================
       7. Dynamic Navigation Active State Tracker
       ========================================================== */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const navObserverOptions = {
        root: null,
        rootMargin: '-50px 0px -60% 0px',
        threshold: 0
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeId = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${activeId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });

    // Logo click smooth scroll to top
    const navLogo = document.getElementById('nav-logo');
    if (navLogo) {
        navLogo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[0].classList.add('active');
        });
    }

    /* ==========================================================
       8. Lightbox Modal for Certificate Preview
       ========================================================== */
    window.openCertModal = function(imgSrc) {
        const modal = document.getElementById('cert-modal');
        const modalImg = document.getElementById('cert-modal-img');
        if (modal && modalImg) {
            modalImg.src = imgSrc;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    window.closeCertModal = function() {
        const modal = document.getElementById('cert-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    };

    /* ==========================================================
       9. Article Reader Modal
       ========================================================== */
    const articleModal = document.getElementById('article-modal');
    const artModalTag = document.getElementById('art-modal-tag');
    const artModalDate = document.getElementById('art-modal-date');
    const artModalTitle = document.getElementById('art-modal-title');
    const artModalText = document.getElementById('art-modal-text');

    const articlesData = {
        1: {
            en: {
                tag: "Regulations",
                date: "June 14, 2026",
                title: "Understanding the ISO Container Standards",
                content: `
                    <p>International shipping relies on standard dimensions and testing requirements to transport trillions of dollars of goods annually. The ISO (International Organization for Standardization) established standard 668 to define the classifications, dimensions, and ratings of freight containers.</p>
                    <h4>Why Standardization Matters</h4>
                    <p>Without ISO 668, containers would not stack securely on container ships, nor would they fit onto standard railcars or truck chassis. By standardizing structural dimensions, ports worldwide can construct container cranes and terminal bays with automated lock systems that secure cargo efficiently.</p>
                    <h4>Key Testing Requirements (ISO 1496)</h4>
                    <p>ISO 1496 defines structural testing parameters for general cargo containers. This includes testing for stacking capacity (often up to 9 containers high on ships), transverse rigidity, longitudinal strength, and floor load rating. Our cargo surveyors verify that each unit possesses a valid CSC safety plate representing compliance with these ISO tests before custom clearance.</p>
                `
            },
            ar: {
                tag: "اللوائح البحرية",
                date: "١٤ يونيو ٢٠٢٦",
                title: "فهم المعايير الدولية للحاويات (ISO)",
                content: `
                    <p>يعتمد الشحن الدولي على أبعاد موحدة ومتطلبات اختبار صارمة لنقل بضائع تبلغ قيمتها تريليونات الدولارات سنوياً. وضعت منظمة الأيزو الدولية (ISO) المعيار القياسي رقم 668 لتحديد تصنيفات وأبعاد وأوزان حاويات الشحن.</p>
                    <h4>لماذا التوحيد القياسي ضروري؟</h4>
                    <p>بدون معيار ISO 668، لن تتمكن الحاويات من التراكم بشكل آمن على متن سفن الحاويات، ولن تتناسب مع عربات السكك الحديدية أو مقطورات الشاحنات القياسية. من خلال توحيد الأبعاد الهيكلية، يمكن للموانئ حول العالم بناء روافع وأرصفة آلية تعتمد على أنظمة إغلاق موحدة لتأمين البضائع بكفاءة عالية.</p>
                    <h4>متطلبات الاختبار الرئيسية (ISO 1496)</h4>
                    <p>يحدد معيار ISO 1496 معايير الاختبار الهيكلي للحاويات العامة. يشمل ذلك اختبارات قدرة التراكم الرأسي (غالباً ما تصل إلى 9 حاويات فوق بعضها)، والصلابة العرضية، والقوة الطولية، وقدرة تحمل الأرضية. يقوم خبراؤنا بالتحقق من وجود لوحة أمان CSC سارية المفعول تؤكد امتثال الحاوية لهذه الاختبارات قبل السماح بالتخليص الجمركي.</p>
                `
            }
        },
        2: {
            en: {
                tag: "Reefer Tech",
                date: "May 28, 2026",
                title: "Preventing Cold Chain Breakage in Reefers",
                content: `
                    <p>Refrigerated containers (Reefers) are the lifelines of global agriculture and pharmaceutical logistics. A single hour of power loss or temperature drift can spoil a cargo worth millions of dollars.</p>
                    <h4>Pre-Trip Inspections (PTI)</h4>
                    <p>The PTI is a rigorous protocol executed before releasing an empty reefer to the shipper. Our inspectors verify machinery functions, check refrigerant charge level, inspect defrost drain holes for blockages, and clean evaporator coils. Any mechanical error triggers immediate repair to guarantee operational continuity.</p>
                    <h4>Digital Log Auditing & Sensor Calibration</h4>
                    <p>Reefers record temperature and humidity history through digital sensors. We download and analyze these logs to ensure the temperature remained steady within the strict cargo parameters (e.g. -20°C for frozen meat or +3°C for fresh produce). Additionally, we calibrate the temperature sensors to prevent sensor drift, ensuring the refrigeration unit maintains correct air supply circulation.</p>
                `
            },
            ar: {
                tag: "تقنيات التبريد",
                date: "٢٨ مايو ٢٠٢٦",
                title: "تجنب انقطاع سلسلة التبريد في الحاويات المبردة",
                content: `
                    <p>تعتبر الحاويات المبردة بمثابة الشريان الحيوي للخدمات اللوجستية للأدوية والمواد الزراعية الطازجة عالمياً. إن انقطاع الطاقة أو انحراف درجة الحرارة لساعة واحدة فقط قد يؤدي إلى تلف شحنات تقدر بملايين الدولارات.</p>
                    <h4>فحوصات ما قبل الرحلة (PTI)</h4>
                    <p>فحص PTI هو بروتوكول صارم يتم إجراؤه قبل تسليم الحاوية المبردة الفارغة للشاحن. يقوم مفتشونا بفحص وظائف الآلات، ومستوى غاز التبريد، وفتحات تصريف التكثيف، وتنظيف ملفات المبخر. أي خلل ميكانيكي يستدعي الإصلاح الفوري لضمان استمرارية التشغيل طوال الرحلة البحرية.</p>
                    <h4>تدقيق السجلات الرقمية ومعايرة الحساسات</h4>
                    <p>تسجل الحاويات المبردة تاريخ درجات الحرارة والرطوبة عبر سجلات رقمية مدمجة. نقوم بتحميل هذه السجلات وتحليلها لضمان استقرار درجات الحرارة ضمن نطاق الشحن المحدد (مثل -20 درجة مئوية للحوم المجمدة أو +3 درجات مئوية للفواكه الطازجة). بالإضافة إلى ذلك، نقوم بمعايرة الحساسات لمنع انحراف القياسات لضمان توزيع الهواء البارد بشكل متساوٍ.</p>
                `
            }
        },
        3: {
            en: {
                tag: "Security",
                date: "April 10, 2026",
                title: "7-Point Container Security Seals Demystified",
                content: `
                    <p>Under the C-TPAT (Customs-Trade Partnership Against Terrorism) initiative, shipping companies must enforce systematic structural inspections to block illicit cargo insertion and human smuggling.</p>
                    <h4>The 7-Point Inspection Process</h4>
                    <p>Our surveyors execute a strict 7-point visual and mechanical check list:</p>
                    <ul>
                        <li><strong>1. Front Wall:</strong> Checks for false walls, cavities, or fresh welding lines.</li>
                        <li><strong>2. Left Side Wall:</strong> Inspects metal rib symmetry and scans for patch welds.</li>
                        <li><strong>3. Right Side Wall:</strong> Confirms container decals and identifiers match cargo sheets.</li>
                        <li><strong>4. Floor:</strong> Scans for flat floorboards, looking for double floor structures.</li>
                        <li><strong>5. Ceiling / Roof:</strong> Checks for structural bows, water leak holes, or ceiling compartments.</li>
                        <li><strong>6. Inside & Outside Doors:</strong> Audits gaskets, handles, lock rods, and security bolt seals.</li>
                        <li><strong>7. Undercarriage:</strong> Inspects cross members, forklift pockets, and the bottom structure.</li>
                    </ul>
                    <h4>High-Security ISO 17712 Bolt Seals</h4>
                    <p>The final step of our security survey is sealing the container with a certified ISO 17712 high-security bolt seal. We verify the seal serial number, log it into the customs digital portal, and check the lock tightness to ensure it cannot be opened without heavy cutting tools.</p>
                `
            },
            ar: {
                tag: "الأمن الجمركي",
                date: "١٠ أبريل ٢٠٢٦",
                title: "الأختام الأمنية للحاويات وفحوصات السلامة",
                content: `
                    <p>بموجب مبادرة الشراكة التجارية الجمركية ضد الإرهاب (C-TPAT)، يجب على شركات الشحن تطبيق فحص هيكلي صارم لمنع تهريب الشحنات غير القانونية أو التلاعب بالحاويات.</p>
                    <h4>خطوات الفحص ذو الـ 7 نقاط</h4>
                    <p>يقوم مساحونا بإجراء فحص بصري وميكانيكي دقيق يشمل سبع نقاط أساسية في الحاوية:</p>
                    <ul>
                        <li><strong>١. الجدار الأمامي:</strong> الكشف عن وجود جدران وهمية أو تجاويف مخفية أو لحامات جديدة.</li>
                        <li><strong>٢. الجدار الأيسر:</strong> فحص انتظام وثبات الألواح المعدنية ورقع اللحام.</li>
                        <li><strong>٣. الجدار الأيمن:</strong> مطابقة الأرقام والرموز الخارجية المدونة على الحاوية مع أوراق الشحن.</li>
                        <li><strong>٤. الأرضية:</strong> فحص ألواح الأرضية الخشبية والتأكد من عدم وجود أرضيات مزدوجة.</li>
                        <li><strong>٥. السقف:</strong> التأكد من خلوه من الثقوب التي قد تسبب تسريب المياه أو تجاويف وهمية.</li>
                        <li><strong>٦. الأبواب الداخلية والخارجية:</strong> فحص القضبان والمفصلات وحلقات الإغلاق وجوانات الباب المطاطية.</li>
                        <li><strong>٧. الهيكل السفلي:</strong> فحص العوارض المتقاطعة للعلب الحديدية وقاعدة الحاوية السفلى.</li>
                    </ul>
                    <h4>أختام الحماية عالية الأمان ISO 17712</h4>
                    <p>الخطوة النهائية في مسح الأمان هي إغلاق الحاوية بختم أمان معتمد دولياً بموجب مواصفات ISO 17712. نقوم بمطابقة الرقم التسلسلي للختم، وإدخاله في النظام الرقمي الجمركي، والتأكد من إغلاقه بإحكام لمنع فتحه إلا باستخدام قواطع الحديد الثقيلة.</p>
                `
            }
        }
    };

    window.openArticleModal = function(articleId) {
        if (!articleModal) return;
        const data = articlesData[articleId][currentLang];
        if (data) {
            if (artModalTag) artModalTag.textContent = data.tag;
            if (artModalDate) artModalDate.textContent = data.date;
            if (artModalTitle) artModalTitle.textContent = data.title;
            if (artModalText) artModalText.innerHTML = data.content;
            
            articleModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Disable background scrolling
        }
    };

    window.closeArticleModal = function() {
        if (articleModal) {
            articleModal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    };

    // Close modals on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCertModal();
            closeArticleModal();
        }
    });

    // INITIALIZATION: Populate blueprint panel with default hotspot (point 1)
    const defaultHotspot = document.querySelector('.blueprint-hotspot[data-point="1"]');
    if (defaultHotspot && infoChecklist) {
        triggerHotspotUpdate('1', defaultHotspot);
    }

    // INITIALIZATION: Trigger default language setting
    setLanguage(currentLang);

});
