import {
  BarChart3,
  BookOpen,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Cloud,
  Code2,
  CreditCard,
  FileArchive,
  FileText,
  GraduationCap,
  Headphones,
  LayoutDashboard,
  LockKeyhole,
  MessageCircle,
  Moon,
  Package,
  Radio,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Store,
  Sun,
  Users,
  Video,
} from 'lucide-react';
import { useState } from 'react';

type Lang = 'ar' | 'en';
type IconType = React.ComponentType<{ className?: string }>;
type Localized = { ar: string; en: string };
type Feature = { title: Localized; text: Localized; icon: IconType };
type Stage = { number: string; title: Localized; price: string; duration: Localized; intro: Localized; points: Localized[]; deliverables: Localized[]; icon: IconType };
type PaymentMilestone = { title: Localized; detail: Localized; amount: string };

const l = (value: Localized, lang: Lang) => value[lang];

const ui = {
  ar: {
    offer: 'عرض فني ومالي متكامل',
    title: 'منصة غيم التعليمية والتدريبية',
    subtitle: 'منظومة رقمية متكاملة للتعليم، التدريب المهني، إدارة المدارس، التجارة والخدمات الرقمية.',
    prepared: 'إعداد عرض تطوير مخصص لمنصة غيم',
    timeline: 'مدة التنفيذ',
    timelineValue: '6 شهور',
    total: 'إجمالي المراحل',
    totalValue: '15,000 ريال',
    platforms: 'المنصات',
    platformsValue: 'Android + iOS',
    phases: 'مراحل التنفيذ',
    overview: 'فهم المشروع',
    overviewText: 'غيم ليست منصة كورسات فقط؛ بل بيئة رقمية موحدة تربط التعليم الإلكتروني، التدريب المهني، إدارة المدارس، السوق التعليمي، الشراكات والخدمات الرقمية داخل منظومة قابلة للتوسع.',
    audience: 'الفئات المستفيدة',
    audienceText: 'يتم تصميم الصلاحيات والواجهات حسب طبيعة كل فئة، مع إمكانية إضافة أدوار جديدة مستقبلًا دون إعادة بناء المنصة.',
    pillars: 'المكونات الرئيسية للمنصة',
    mvp: 'النسخة الأولى MVP',
    mvpText: 'الهدف من النسخة الأولى إطلاق الأساس التشغيلي للمنصة: التعليم والتدريب، المحتوى، الحسابات، الشات، الدفع الأساسي، ولوحة الإدارة، بحيث تصبح المراحل التالية إضافات مباشرة على نفس النظام.',
    mvpIncludes: 'ما سيتم تسليمه في أول MVP',
    technology: 'التقنيات والمعايير المستخدمة',
    architecture: 'البنية التشغيلية والاستضافة',
    payments: 'خطة الدفعات',
    paymentNote: 'تم اعتماد مقدم 25% من إجمالي المشروع. وبما أن قيمة المقدم لا تساوي نصف قيمة المرحلة الأولى، فسيتم ربط الدفعات التالية بمراحل التسليم، مع اعتماد الجدول النهائي في الاتفاق التنفيذي.',
    external: 'الخدمات والتكاليف الخارجية',
    externalNote: 'الخدمات الخارجية ورسوم الاستخدام أو الاشتراكات يتم تحديدها حسب حجم الاستخدام واختيار العميل، ولا تعتبر جزءًا من قيمة التطوير إلا إذا تم النص على ذلك صراحة.',
    validUntil: 'هذا العرض ساري حتى نهاية شهر أكتوبر فقط، وبعد ذلك يحتاج إلى إعادة اعتماد الأسعار والمدة.',
    scopeNote: 'كل مرحلة تضيف مميزات إلى نفس المنصة والتطبيقات الحالية، وليست مشروعًا منفصلًا أو إعادة بناء من البداية.',
    contact: 'للتواصل والاستفسار',
    thanks: 'شكرًا لثقتكم في Penta-k',
    website: 'زيارة موقع الشركة',
    arabic: 'العربية',
    english: 'English',
    dark: 'الوضع المظلم',
    light: 'الوضع الفاتح',
    included: 'يشمل التنفيذ',
    phasePrice: 'قيمة المرحلة',
    stageDelivery: 'مخرجات المرحلة',
    firstPayment: 'مقدم المشروع',
    firstPaymentDetail: '25% عند بدء المشروع',
    firstPaymentAmount: '3,750 ريال',
    remainingPayments: 'الدفعات المرحلية',
    remainingPaymentsDetail: 'بعد المقدم، يتم تقسيم المبلغ المتبقي على 7 دفعات؛ دفعة نهائية للمرحلة الأولى، ثم دفعتان لكل مرحلة من المراحل الثانية والثالثة والرابعة.',
    remainingPaymentsAmount: '11,250 ريال',
    overviewHeading: 'منصة واحدة للتعليم والتدريب والخدمات الرقمية',
    scalableHeading: 'منظومة قابلة للتوسع',
    audienceHeading: 'كل فئة تحصل على تجربة وصلاحيات مناسبة لطبيعة دورها.',
    pillarsHeading: 'المنصة تجمع التعليم، الإدارة، السوق والشراكات في تجربة رقمية موحدة.',
    mvpHeading: 'إطلاق الأساس التشغيلي قبل التوسع',
    architectureHeading: 'استضافة منفصلة وحماية للمحتوى',
    externalHeading: 'نطاقات تعتمد على تفاصيل خارجية',
    finalHeading: 'منصة غيم — تعليم وتدريب وشراكات قابلة للنمو',
  },
  en: {
    offer: 'Complete Technical & Commercial Proposal',
    title: 'Ghym Education & Training Platform',
    subtitle: 'A scalable digital ecosystem for education, professional training, school management, commerce and digital services.',
    prepared: 'A tailored development proposal for Ghym Platform',
    timeline: 'Delivery timeline',
    timelineValue: '6 months',
    total: 'Total project phases',
    totalValue: 'SAR 15,000',
    platforms: 'Platforms',
    platformsValue: 'Android + iOS',
    phases: 'Delivery phases',
    overview: 'Project understanding',
    overviewText: 'Ghym is more than a courses platform. It is a unified digital ecosystem connecting online education, professional training, school management, an education marketplace, partnerships and digital services in a scalable system.',
    audience: 'Target users',
    audienceText: 'The platform uses role-based experiences and permissions for each audience, while keeping the architecture ready for future roles.',
    pillars: 'Core platform components',
    mvp: 'Initial MVP',
    mvpText: 'The first MVP launches the operational foundation: education and training, content, accounts, chat, basic payments and administration. Later phases extend the same apps and platform.',
    mvpIncludes: 'Initial MVP deliverables',
    technology: 'Technology & engineering standards',
    architecture: 'Infrastructure & hosting',
    payments: 'Payment schedule',
    paymentNote: 'A 25% advance is applied to the total project. Since this advance does not equal half of Phase 1, the remaining payments will be tied to delivery milestones and finalized in the execution agreement.',
    external: 'External services & operating costs',
    externalNote: 'External service fees and usage-based subscriptions depend on the client’s selection and usage volume and are excluded from development unless explicitly stated.',
    validUntil: 'This proposal is valid until the end of October only; after that, the pricing and timeline require re-approval.',
    scopeNote: 'Each phase adds features to the same platform and existing applications. It is not a separate project or a rebuild from scratch.',
    contact: 'Contact & inquiries',
    thanks: 'Thank you for trusting Penta-k',
    website: 'Visit company website',
    arabic: 'العربية',
    english: 'English',
    dark: 'Dark mode',
    light: 'Light mode',
    included: 'Included in delivery',
    phasePrice: 'Phase price',
    stageDelivery: 'Phase deliverables',
    firstPayment: 'Project advance',
    firstPaymentDetail: '25% at project start',
    firstPaymentAmount: 'SAR 3,750',
    remainingPayments: 'Milestone payments',
    remainingPaymentsDetail: 'After the advance, the balance is divided into 7 payments: one final payment for Phase 1, then two payments for each of Phases 2, 3 and 4.',
    remainingPaymentsAmount: 'SAR 11,250',
    overviewHeading: 'One platform for education, training and digital services',
    scalableHeading: 'A scalable ecosystem',
    audienceHeading: 'Each audience receives an experience and permissions tailored to its role.',
    pillarsHeading: 'Education, administration, commerce and partnerships in one digital experience.',
    mvpHeading: 'Launch the operating foundation before expansion',
    architectureHeading: 'Separated hosting and protected content',
    externalHeading: 'Scopes that depend on external details',
    finalHeading: 'Ghym Platform — education, training and scalable partnerships',
  },
};

const audience: Feature[] = [
  { icon: GraduationCap, title: { ar: 'الطلاب والمتدربون', en: 'Students & trainees' }, text: { ar: 'حساب شخصي لمتابعة الكورسات، الدروس، التقدم، الاختبارات، الملفات والطلبات.', en: 'Personal accounts for courses, lessons, progress, assessments, files and requests.' } },
  { icon: Users, title: { ar: 'أولياء الأمور', en: 'Parents' }, text: { ar: 'متابعة أداء الأبناء، الحضور، التحصيل، الخطط والتقارير المدرسية.', en: 'Follow children’s performance, attendance, achievement, plans and school reports.' } },
  { icon: BookOpen, title: { ar: 'المعلمون والمدربون', en: 'Teachers & trainers' }, text: { ar: 'رفع المحتوى، إدارة الكورسات، متابعة الطلاب، التقييمات وإصدار الشهادات.', en: 'Upload content, manage courses, follow learners, reviews and certificates.' } },
  { icon: Building2, title: { ar: 'المدارس والمؤسسات', en: 'Schools & institutions' }, text: { ar: 'حسابات مؤسسية لمتابعة الطلاب، الموظفين، الخطط، النماذج والتقارير.', en: 'Institutional accounts for students, staff, plans, forms and reports.' } },
  { icon: Store, title: { ar: 'البائعون والمكتبات', en: 'Sellers & libraries' }, text: { ar: 'إدارة المنتجات والمخزون والطلبات والمدفوعات والعمولات من خلال حساب مستقل.', en: 'Independent accounts for products, inventory, orders, payments and commissions.' } },
  { icon: HandshakeIcon, title: { ar: 'الشركاء ومقدمو الخدمات', en: 'Partners & providers' }, text: { ar: 'إدارة الشراكات والعقود والخدمات والبرامج والمبادرات من خلال صلاحيات محددة.', en: 'Manage partnerships, contracts, services, programs and initiatives with defined permissions.' } },
];

const pillars: Feature[] = [
  { icon: BriefcaseIcon, title: { ar: 'غيم للأعمال والتطوير المهني', en: 'Ghym Business & professional growth' }, text: { ar: 'ربط العملاء بمقدمي الخدمات، الدورات المهنية، إعداد الوثائق والتقارير، وتطوير المهارات والكفاءات.', en: 'Connect clients with providers, offer professional courses, prepare documents and reports, and develop skills.' } },
  { icon: GraduationCap, title: { ar: 'التعليم والتدريب', en: 'Education & training' }, text: { ar: 'دورات وبرامج وحصص مسجلة أو مباشرة، فردية أو جماعية، مع اختبارات وشهادات وأنشطة تعليمية.', en: 'Recorded or live courses, programs and classes, with assessments, certificates and learning activities.' } },
  { icon: Building2, title: { ar: 'إدارة المدارس', en: 'School management' }, text: { ar: 'متابعة التحصيل والأداء، الحضور، الزيارات الصفية، الخطط العلاجية والإثرائية، النماذج والتقارير.', en: 'Achievement, performance, attendance, classroom visits, intervention plans, forms and reports.' } },
  { icon: FileArchive, title: { ar: 'مركز الملفات والخدمات', en: 'Files & services center' }, text: { ar: 'ملفات جاهزة أو مخصصة، بنوك أسئلة، خطط، تقارير، ملفات إنجاز وسير ذاتية وخدمات تصميم.', en: 'Ready-made or custom files, question banks, plans, reports, portfolios, CVs and design services.' } },
  { icon: ShoppingBag, title: { ar: 'غيم ماركت', en: 'Ghym Market' }, text: { ar: 'كتب وقرطاسية ومراجع ووسائل تعليمية، مع البائعين والمخزون والطلبات والعمولات والتقييمات.', en: 'Books, stationery, references and educational tools with sellers, inventory, orders, commissions and reviews.' } },
  { icon: Radio, title: { ar: 'غيم شراكات', en: 'Ghym Partnerships' }, text: { ar: 'برامج تدريب واختبارات، عقود واتفاقيات، مبادرات وملفات مؤسسية ولوحة خاصة لكل شريك.', en: 'Training and test programs, agreements, initiatives, institutional files and partner dashboards.' } },
  { icon: Sparkles, title: { ar: 'العروض والتطوير المهني', en: 'Offers & professional growth' }, text: { ar: 'عروض وكوبونات ومزايا حصرية، وربط العملاء بمقدمي الخدمات ودعم تطوير المهارات والسير الذاتية.', en: 'Offers, coupons and exclusive benefits, plus service matching, skills development and CV services.' } },
];

const stages: Stage[] = [
  {
    number: '01', icon: Rocket, price: '3,000 ريال', duration: { ar: 'المرحلة التأسيسية', en: 'Foundation phase' },
    title: { ar: 'التعليم والتدريب والـ MVP', en: 'Education, training & MVP' },
    intro: { ar: 'إطلاق الأساس الفعلي لمنصة غيم من خلال بناء الحسابات والمحتوى التعليمي والتدريب والشات والطلبات والدفع الأساسي.', en: 'Launch Ghym’s operational foundation through accounts, learning content, training, chat, requests and basic payments.' },
    points: [
      { ar: 'تطبيق مشترك للطالب والمدرس Android وiOS.', en: 'Shared student and teacher app for Android and iOS.' },
      { ar: 'تطبيق الإدارة Android في المرحلة الأولى.', en: 'Android admin app in the first phase.' },
      { ar: 'تسجيل ودخول وحسابات وصلاحيات أساسية.', en: 'Authentication, accounts and core permissions.' },
      { ar: 'إضافة الكورسات والبرامج والمواد والمحاضرات والدروس.', en: 'Courses, programs, subjects, lectures and lessons.' },
      { ar: 'رفع الفيديوهات والملفات وPDF لكل محاضرة.', en: 'Video, file and PDF uploads for each lesson.' },
      { ar: 'منع تسجيل الشاشة قدر الإمكان والتحكم في تحميل المرفقات.', en: 'Best-effort screen recording prevention and attachment download controls.' },
      { ar: 'رسائل نصية وصور وتسجيلات صوتية وفيديوهات وملفات مرتبطة بالكورس.', en: 'Course-linked messages with text, images, audio recordings, videos and files; voice and video calls are not included.' },
      { ar: 'تعليقات وردود وإشعارات أساسية.', en: 'Comments, replies and core notifications.' },
      { ar: 'أسعار واشتراكات وكورسات مجانية وعروض وكوبونات.', en: 'Pricing, subscriptions, free courses, offers and coupons.' },
    ],
    deliverables: [
      { ar: 'نسخة MVP قابلة للتشغيل.', en: 'A usable initial MVP.' },
      { ar: 'الخلفية البرمجية وقاعدة البيانات ونظام الصلاحيات.', en: 'Backend, database and permission system.' },
      { ar: 'تطبيق الطالب والمدرس المشترك.', en: 'Shared student and teacher mobile app.' },
      { ar: 'تطبيق إدارة Android.', en: 'Android admin app.' },
      { ar: 'إدارة أساسية للكورسات والملفات والاشتراكات.', en: 'Core course, file and subscription management.' },
    ],
  },
  {
    number: '02', icon: Building2, price: '6,500 ريال', duration: { ar: 'المرحلة المدرسية', en: 'School phase' },
    title: { ar: 'إدارة المدارس والمتابعة التعليمية', en: 'School management & educational follow-up' },
    intro: { ar: 'تحويل غيم إلى نظام متكامل لإدارة المدارس ومتابعة الأداء والتحصيل والتقارير والصلاحيات المؤسسية.', en: 'Expand Ghym into a complete school management system for performance, achievement, reporting and institutional permissions.' },
    points: [
      { ar: 'تطبيقات أو واجهات مخصصة للطالب وولي الأمر والمدرس ومدير المدرسة.', en: 'Dedicated role experiences for students, parents, teachers and school managers.' },
      { ar: 'تطبيقات Android وiOS للأدوار المطلوبة.', en: 'Android and iOS apps for the required roles.' },
      { ar: 'إضافة تطبيق الإدارة iOS.', en: 'Add the iOS admin app.' },
      { ar: 'إنشاء حسابات المدارس والشراكات التعليمية.', en: 'Create school and educational partnership accounts.' },
      { ar: 'إدارة الطلاب والمدرسين والفصول والبيانات المؤسسية.', en: 'Manage students, teachers, classes and institutional data.' },
      { ar: 'متابعة التحصيل والمهارات والأداء التعليمي.', en: 'Track achievement, skills and educational performance.' },
      { ar: 'الحضور والغياب والتقييمات الإلكترونية.', en: 'Attendance, absence and electronic evaluations.' },
      { ar: 'تقييم المعلمين والزيارات الصفية والملاحظة الميدانية.', en: 'Teacher evaluations, classroom visits and field observations.' },
      { ar: 'الخطط العلاجية والإثرائية والمبادرات والأنشطة المدرسية.', en: 'Remedial, enrichment, initiative and school activity plans.' },
      { ar: 'الاستبانات والنماذج والتقارير والإحصاءات وأرشفة الملفات.', en: 'Surveys, forms, reports, statistics and school file archiving.' },
    ],
    deliverables: [
      { ar: 'حسابات وصلاحيات الأدوار المدرسية.', en: 'School role accounts and permissions.' },
      { ar: 'لوحات متابعة وتقارير مدرسية.', en: 'School dashboards and reports.' },
      { ar: 'نظام حضور وتقييم ومتابعة.', en: 'Attendance, evaluation and follow-up system.' },
      { ar: 'لوحة تحكم مركزية مطورة.', en: 'Expanded central dashboard.' },
      { ar: 'تطبيق الإدارة iOS.', en: 'iOS admin app.' },
    ],
  },
  {
    number: '03', icon: ShoppingBag, price: '2,500 ريال', duration: { ar: 'مرحلة السوق التعليمي', en: 'Education marketplace phase' },
    title: { ar: 'غيم ماركت والمكتبات والبائعون', en: 'Ghym Market, libraries & sellers' },
    intro: { ar: 'إطلاق السوق التعليمي لبيع الكتب والقرطاسية والمراجع والمنتجات والوسائل التعليمية مع إدارة المخزون والعمولات.', en: 'Launch the education marketplace for books, stationery, references and learning tools with inventory and commission management.' },
    points: [
      { ar: 'تطبيق مستقل للبائع أو المكتبة.', en: 'Independent seller or library app.' },
      { ar: 'تسجيل البائعين والمكتبات وإنشاء حساباتهم.', en: 'Seller and library registration and accounts.' },
      { ar: 'إضافة المنتجات والتصنيفات والأسعار.', en: 'Products, categories and pricing.' },
      { ar: 'إدارة مخزون كل مكتبة.', en: 'Inventory management for each library.' },
      { ar: 'الطلبات والسلة والفواتير وحالة الطلب.', en: 'Cart, orders, invoices and order status.' },
      { ar: 'الدفع الإلكتروني عبر Paymob أو Geidea حسب اختيار العميل.', en: 'Online payment through Paymob or Geidea, selected by the client.' },
      { ar: 'تحديد عمولة المنصة وإعداد تقارير الشركاء.', en: 'Platform commissions and partner reports.' },
      { ar: 'التقييمات والمراجعات والشكاوى والشات.', en: 'Ratings, reviews, complaints and chat.' },
      { ar: 'زيادة خصائص المتجر داخل تطبيقات الطالب وولي الأمر والمدرس.', en: 'Marketplace features added to student, parent and teacher apps.' },
      { ar: 'حسابات داخل المنصة لشركات الشحن، مع تحديد API لاحقًا.', en: 'In-platform shipping accounts, with external APIs assessed later.' },
    ],
    deliverables: [
      { ar: 'تطبيق البائع أو المكتبة.', en: 'Seller or library app.' },
      { ar: 'كتالوج المنتجات والمخزون والطلبات.', en: 'Product catalog, inventory and order management.' },
      { ar: 'بوابة الدفع بعد توفير حساب العميل.', en: 'Payment gateway integration once client credentials are provided.' },
      { ar: 'نظام العمولات والتقارير الأساسية.', en: 'Commission system and core reports.' },
      { ar: 'تحديث تطبيقات المستخدمين ولوحة التحكم.', en: 'Updates to user apps and the dashboard.' },
    ],
  },
  {
    number: '04', icon: Radio, price: '3,000 ريال', duration: { ar: 'مرحلة التوسع والتطوير', en: 'Expansion phase' },
    title: { ar: 'الشراكات والبث المباشر والخدمات المتقدمة', en: 'Partnerships, live learning & advanced services' },
    intro: { ar: 'تفعيل الشراكات والاشتراكات المؤسسية والعروض والتحليلات والبث المباشر وربط الشحن حسب التكاملات المطلوبة.', en: 'Activate partnerships, institutional subscriptions, offers, analytics, live learning and shipping integrations according to the required integrations.' },
    points: [
      { ar: 'بث مباشر داخل تطبيق التعليم لكورس أو مجموعة محددة.', en: 'Live classes inside the education app for a course or selected group.' },
      { ar: 'Whiteboard وRaise Hand والتفاعل أثناء المحاضرة حسب الاتفاق.', en: 'Whiteboard, Raise Hand and in-class interaction subject to scope.' },
      { ar: 'سيرفر مستقل للبث أو خدمة بث خارجية لتجنب الضغط على سيرفر المستخدمين.', en: 'Dedicated live-stream server or external service to protect core performance.' },
      { ar: 'إنشاء السيرة الذاتية CV والملفات المهنية.', en: 'CV builder and professional portfolio files.' },
      { ar: 'غيم شراكات: برامج اختبارات وتدريب واتفاقيات وعقود ومبادرات.', en: 'Ghym Partnerships: test preparation, training, agreements and initiatives.' },
      { ar: 'لوحات خاصة بالشركاء لمتابعة الأداء والنتائج.', en: 'Partner dashboards for performance and results.' },
      { ar: 'غيم سبل: العروض والخصومات والكوبونات والمزايا الحصرية.', en: 'Ghym Offers: promotions, discounts, coupons and exclusive benefits.' },
      { ar: 'اشتراكات مؤسسية مرنة للمدارس والشركات.', en: 'Flexible institutional subscriptions for schools and companies.' },
      { ar: 'ربط شركات الشحن عند توفر API وتسعيره بعد معرفة الشركة.', en: 'Shipping APIs assessed and priced after the provider is identified.' },
      { ar: 'تقارير وتحليلات متقدمة وتخصيص ذكي حسب نطاق الاتفاق.', en: 'Advanced analytics and smart personalization according to the agreed scope.' },
    ],
    deliverables: [
      { ar: 'منظومة البث أو التكامل المختار.', en: 'Selected live-stream solution or integration.' },
      { ar: 'خدمات CV والملفات المهنية.', en: 'CV and professional file services.' },
      { ar: 'إدارة الشراكات والعروض والاشتراكات.', en: 'Partnership, offer and subscription management.' },
      { ar: 'تكامل الشحن إذا كان API متاحًا.', en: 'Shipping integration if a usable API is available.' },
      { ar: 'لوحات التقارير والتحليلات المتقدمة.', en: 'Advanced reporting and analytics dashboards.' },
    ],
  },
];

const mvpItems: Localized[] = [
  { ar: 'تطبيق مشترك للطالب والمدرس Android وiOS.', en: 'Shared student and teacher app for Android and iOS.' },
  { ar: 'تطبيق الإدارة Android في المرحلة الأولى.', en: 'Android admin app in Phase 1.' },
  { ar: 'الخلفية البرمجية وقاعدة البيانات ونظام الصلاحيات متعدد الأدوار.', en: 'Backend, database and role-based permissions.' },
  { ar: 'إنشاء الكورسات والمواد والدروس ورفع الفيديوهات والملفات.', en: 'Courses, subjects, lessons, video and file uploads.' },
  { ar: 'Cloudflare لتخزين الفيديوهات وعزلها عن سيرفر البيانات.', en: 'Cloudflare video storage isolated from the data server.' },
  { ar: 'نظام رسائل كامل يدعم النص والصور والتسجيلات الصوتية والملفات.', en: 'Full messaging supporting text, images, audio recordings, video and files; calls are not included.' },
  { ar: 'تعليقات وردود وإشعارات أساسية.', en: 'Comments, replies and core notifications.' },
  { ar: 'أسعار واشتراكات وكورسات مجانية وعروض وكوبونات.', en: 'Pricing, subscriptions, free courses, offers and coupons.' },
  { ar: 'طلبات ودفع أساسي حسب بوابة الدفع المعتمدة.', en: 'Requests and basic payments through the selected gateway.' },
  { ar: 'إدارة أساسية للمستخدمين والكورسات والمحتوى من الإدارة.', en: 'Core user, course and content administration.' },
];

const paymentPlan: PaymentMilestone[] = [
  { title: { ar: 'المرحلة الأولى — الدفعة الابتدائية', en: 'Phase 1 — Initial payment' }, detail: { ar: 'مقدم المشروع عند بدء التنفيذ.', en: 'Project advance at the start of development.' }, amount: '3,750 ريال' },
  { title: { ar: 'المرحلة الأولى — الدفعة النهائية', en: 'Phase 1 — Final payment' }, detail: { ar: 'بعد تسليم واعتماد مميزات الـ MVP.', en: 'After delivery and approval of the MVP features.' }, amount: '1,607 ريال' },
  { title: { ar: 'المرحلة الثانية — الدفعة الابتدائية', en: 'Phase 2 — Initial payment' }, detail: { ar: 'عند بدء تنفيذ نظام المدارس.', en: 'At the start of school management development.' }, amount: '1,607 ريال' },
  { title: { ar: 'المرحلة الثانية — الدفعة النهائية', en: 'Phase 2 — Final payment' }, detail: { ar: 'بعد تسليم واعتماد نظام المدارس.', en: 'After delivery and approval of school management.' }, amount: '1,607 ريال' },
  { title: { ar: 'المرحلة الثالثة — الدفعة الابتدائية', en: 'Phase 3 — Initial payment' }, detail: { ar: 'عند بدء تنفيذ غيم ماركت.', en: 'At the start of Ghym Market development.' }, amount: '1,607 ريال' },
  { title: { ar: 'المرحلة الثالثة — الدفعة النهائية', en: 'Phase 3 — Final payment' }, detail: { ar: 'بعد تسليم واعتماد المتجر وتطبيق البائع.', en: 'After delivery and approval of the marketplace and seller app.' }, amount: '1,607 ريال' },
  { title: { ar: 'المرحلة الرابعة — الدفعة الابتدائية', en: 'Phase 4 — Initial payment' }, detail: { ar: 'عند بدء تنفيذ التوسع والتكاملات.', en: 'At the start of expansion and integrations.' }, amount: '1,607 ريال' },
  { title: { ar: 'المرحلة الرابعة — الدفعة النهائية', en: 'Phase 4 — Final payment' }, detail: { ar: 'بعد تسليم واعتماد مميزات المرحلة الرابعة.', en: 'After delivery and approval of Phase 4 features.' }, amount: '1,607.16 ريال' },
];

const technologies: Feature[] = [
  { icon: Code2, title: { ar: 'Node.js للخلفية البرمجية', en: 'Node.js Backend' }, text: { ar: 'الخلفية البرمجية وواجهات REST وقاعدة منطق مركزية قابلة للتوسع والتكامل.', en: 'Scalable backend, REST APIs and centralized business logic.' } },
  { icon: Smartphone, title: { ar: 'Flutter لتطبيقات الهاتف', en: 'Flutter Mobile' }, text: { ar: 'تطبيق مشترك للطالب والمدرس، ثم تطبيق البائع والتطبيقات الإضافية حسب المراحل.', en: 'Shared student/teacher app, followed by seller and additional apps by phase.' } },
  { icon: GlobeIcon, title: { ar: 'Next.js للويب', en: 'Next.js Web' }, text: { ar: 'موقع متجاوب ولوحات ويب قابلة للتوسع للمنصة والإدارة والشركاء.', en: 'Responsive website and scalable web dashboards for the platform and partners.' } },
  { icon: Server, title: { ar: 'DevOps & Operations', en: 'DevOps & Operations' }, text: { ar: 'إدارة النشر والمراقبة والنسخ الاحتياطي والأمان وتحسين أداء السيرفرات.', en: 'Deployment, monitoring, backups, security and server performance management.' } },
  { icon: Cloud, title: { ar: 'Cloudflare Storage', en: 'Cloudflare Storage' }, text: { ar: 'تخزين الفيديوهات والمحتوى المرئي بشكل منفصل عن بيانات المنصة.', en: 'Separate video and media storage isolated from core platform data.' } },
  { icon: ShieldCheck, title: { ar: 'Security & Roles', en: 'Security & Roles' }, text: { ar: 'صلاحيات حسب الدور وحماية المحتوى والتحكم في الملفات والتحميل.', en: 'Role permissions, content protection and file/download controls.' } },
];

function HandshakeIcon({ className }: { className?: string }) { return <span className={`inline-flex items-center justify-center ${className ?? ''}`}>🤝</span>; }
function GlobeIcon({ className }: { className?: string }) { return <span className={`inline-flex items-center justify-center ${className ?? ''}`}>🌐</span>; }
function BriefcaseIcon({ className }: { className?: string }) { return <span className={`inline-flex items-center justify-center ${className ?? ''}`}>💼</span>; }

export default function App() {
  const [language, setLanguage] = useState<Lang>('ar');
  const [isDark, setIsDark] = useState(false);
  const t = ui[language];
  const isArabic = language === 'ar';
  const logoSrc = 'logo.png';

  return (
    <div className={`${isDark ? 'dark bg-slate-950 text-slate-100' : 'bg-[#f7f9fc] text-slate-800'} min-h-screen transition-colors`} dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur transition-colors dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="https://penta-k.com" target="_blank" rel="noreferrer" aria-label={t.website} className="rounded-xl transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500">
            <img src={logoSrc} alt="Penta-k" width="64" height="64" loading="eager" className="h-14 w-14 rounded-xl bg-white p-1.5 object-contain shadow-sm ring-1 ring-slate-200 dark:ring-slate-700" />
          </a>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setIsDark((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800" aria-label={isDark ? t.light : t.dark} title={isDark ? t.light : t.dark}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button type="button" onClick={() => setLanguage(isArabic ? 'en' : 'ar')} className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-100 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-300 dark:hover:bg-sky-900/70">
              {isArabic ? t.english : t.arabic}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-12 text-white shadow-2xl md:px-14 md:py-16">
          <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="relative max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><Sparkles className="h-4 w-4" />{t.offer}</div>
            <p className="mb-3 text-sm font-semibold text-sky-300">{t.prepared}</p>
            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{t.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">{t.subtitle}</p>
          </div>
        </section>

        <section className="mb-10 grid gap-8 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 transition-colors dark:bg-slate-900 dark:ring-slate-800 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div><Eyebrow text={t.overview} /><h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{t.overviewHeading}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">{t.overviewText}</p></div>
          <div className="rounded-2xl bg-sky-50 p-6 dark:bg-sky-950/40"><div className="mb-4 flex items-center gap-3"><div className="rounded-xl bg-white p-3 text-sky-700 shadow-sm dark:bg-slate-900 dark:text-sky-300"><LayoutDashboard className="h-6 w-6" /></div><h3 className="text-xl font-semibold text-slate-950 dark:text-white">{t.scalableHeading}</h3></div><p className="leading-7 text-slate-700 dark:text-slate-200">{t.scopeNote}</p></div>
        </section>

        <SectionHeading eyebrow={t.audience} title={t.audienceHeading} />
        <section className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{audience.map((item) => <FeatureCard key={l(item.title, language)} feature={item} lang={language} />)}</section>

        <SectionHeading eyebrow={t.pillars} title={t.pillarsHeading} />
        <section className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{pillars.map((item) => <FeatureCard key={l(item.title, language)} feature={item} lang={language} />)}</section>

        <section className="mb-12 rounded-[2rem] bg-slate-900 p-7 text-white shadow-xl md:p-10"><div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]"><div><div className="w-fit rounded-2xl bg-white/10 p-4"><Rocket className="h-8 w-8 text-sky-300" /></div><Eyebrow dark text={t.mvp} /><h2 className="mt-3 text-3xl font-semibold">{t.mvpHeading}</h2><p className="mt-5 leading-8 text-slate-300">{t.mvpText}</p></div><div><h3 className="mb-5 text-xl font-semibold text-white">{t.mvpIncludes}</h3><div className="grid gap-3 sm:grid-cols-2">{mvpItems.map((item) => <DarkCheck key={l(item, language)} text={l(item, language)} />)}</div></div></div></section>

        <SectionHeading eyebrow={t.technology} title={isArabic ? 'اختيارات تقنية مناسبة لمنصة متعددة الأدوار وقابلة للنمو' : 'Technology choices designed for a multi-role, scalable platform.'} />
        <section className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{technologies.map((item) => <FeatureCard key={l(item.title, language)} feature={item} lang={language} />)}</section>

        <section className="mb-12 rounded-[2rem] border border-violet-100 bg-violet-50 p-7 dark:border-violet-900 dark:bg-violet-950/40 md:p-10"><div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]"><div><div className="w-fit rounded-2xl bg-violet-100 p-4 text-violet-700 dark:bg-violet-900 dark:text-violet-200"><Server className="h-8 w-8" /></div><Eyebrow text={t.architecture} /><h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{t.architectureHeading}</h2><p className="mt-5 leading-8 text-slate-700 dark:text-slate-200">{t.externalNote}</p></div><div className="grid gap-3 sm:grid-cols-2"><CheckRow text={isArabic ? 'Hostinger لاستضافة خدمات المنصة حسب الخطة المناسبة.' : 'Hostinger hosting according to the required plan.'} /><CheckRow text={isArabic ? 'سيرفر الشركة كخيار بديل للعميل حسب الاتفاق.' : 'Company-owned server as an alternative option.'} /><CheckRow text={isArabic ? 'DevOps للنشر والمراقبة والنسخ الاحتياطي والأمان.' : 'DevOps for deployment, monitoring, backups and security.'} /><CheckRow text={isArabic ? 'Cloudflare لعزل الفيديوهات وتسريع الوصول إليها.' : 'Cloudflare to isolate and accelerate video delivery.'} /><CheckRow text={isArabic ? 'سيرفر مستقل أو خدمة خارجية للبث المباشر.' : 'Dedicated server or external live-stream service.'} /><CheckRow text={isArabic ? 'Paymob أو Geidea للدفع بعد توفير حساب العميل.' : 'Paymob or Geidea after the client provides an account.'} /></div></div></section>

        <section className="mb-12 grid gap-6 lg:grid-cols-2"><article className="rounded-[2rem] bg-slate-950 p-7 text-white md:p-9"><div className="flex items-center gap-3"><div className="rounded-xl bg-white/10 p-3"><ShieldCheck className="h-6 w-6 text-sky-300" /></div><h2 className="text-2xl font-semibold">{t.included}</h2></div><div className="mt-7 grid gap-4">{(isArabic ? ['تحليل المتطلبات وتصميم تجربة المستخدم.', 'تطوير الخلفية البرمجية وقاعدة البيانات وواجهات الربط.', 'تطبيقات Flutter حسب كل مرحلة.', 'موقع Next.js ولوحة التحكم المركزية.', 'نظام الصلاحيات والحسابات والأدوار.', 'اختبار الوظائف الأساسية وتجهيز الإصدارات.'] : ['Requirements analysis and user experience design.', 'Backend, database and integration APIs.', 'Flutter apps delivered by phase.', 'Next.js website and central dashboard.', 'Accounts, roles and permissions.', 'Core testing and release preparation.']).map((item) => <DarkCheck key={item} text={item} />)}</div></article><article className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 md:p-9"><div className="flex items-center gap-3"><div className="rounded-xl bg-sky-50 p-3 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><Headphones className="h-6 w-6" /></div><h2 className="text-2xl font-semibold text-slate-950 dark:text-white">{t.externalHeading}</h2></div><div className="mt-7 grid gap-3">{(isArabic ? ['رسوم Paymob أو Geidea وحسابات الدفع على العميل.', 'تكلفة Cloudflare وتخزين الفيديوهات حسب الاستخدام.', 'تكلفة البث المباشر والسيرفر الخاص به حسب الاختيار.', 'تكامل شركات الشحن يتحدد بعد معرفة توفر API.', 'حسابات المتاجر وخدمات الرسائل أو أي خدمات خارجية.'] : ['Paymob or Geidea fees and payment accounts are client-side.', 'Cloudflare and video storage costs depend on usage.', 'Live streaming and dedicated server costs depend on the selected option.', 'Shipping integration depends on API availability.', 'Store accounts, messaging and other external services.']).map((item) => <CheckRow key={item} text={item} />)}</div></article></section>
        <section className="mb-12 rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 md:p-10"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><Stat icon={CircleDollarSign} label={t.total} value={t.totalValue} /><Stat icon={ClockIcon} label={t.timeline} value={t.timelineValue} /><Stat icon={Smartphone} label={t.platforms} value={t.platformsValue} /><Stat icon={LayersIcon} label={t.phases} value="4" /></div><div className="mt-12"><SectionHeading eyebrow={t.phases} title={isArabic ? 'مراحل التنفيذ ومخرجات كل مرحلة' : 'Delivery phases and phase deliverables'} /><section className="space-y-6">{stages.map((stage) => <StageCard key={stage.number} stage={stage} lang={language} />)}</section></div><div className="mt-12"><SectionHeading eyebrow={t.payments} title={isArabic ? 'دفعات مرتبطة ببداية ونهاية كل مرحلة' : 'Payments linked to the start and completion of each phase'} /><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{paymentPlan.map((payment) => <PaymentCard key={l(payment.title, language)} icon={CreditCard} title={l(payment.title, language)} amount={payment.amount} detail={l(payment.detail, language)} />)}</div><div className="mt-6 flex items-start gap-3 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-950 dark:bg-amber-950/40 dark:text-amber-100"><FileText className="mt-1 h-5 w-5 shrink-0" />{t.paymentNote}</div></div></section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-7 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-10"><p className="text-sm font-semibold text-sky-700 dark:text-sky-300">{t.contact}</p><h2 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{t.finalHeading}</h2><p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600 dark:text-slate-300">{t.validUntil}</p><a href="https://penta-k.com" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 font-semibold text-white transition hover:bg-sky-700">{t.website}<ChevronLeft className="h-4 w-4" /></a></section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400"><p className="font-semibold text-slate-900 dark:text-slate-100">Penta-k</p><p className="mt-1">{t.thanks}</p></footer>
    </div>
  );
}

function ClockIcon({ className }: { className?: string }) { return <span className={`inline-flex items-center justify-center ${className ?? ''}`}>⏱️</span>; }
function LayersIcon({ className }: { className?: string }) { return <span className={`inline-flex items-center justify-center ${className ?? ''}`}>◈</span>; }
function Pill({ text }: { text: string }) { return <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-slate-100">{text}</span>; }
function Eyebrow({ text, dark = false }: { text: string; dark?: boolean }) { return <p className={`mt-6 text-sm font-semibold tracking-[0.12em] ${dark ? 'text-sky-300' : 'text-sky-700 dark:text-sky-300'}`}>{text}</p>; }
function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) { return <div className="mb-6"><Eyebrow text={eyebrow} /><h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{title}</h2></div>; }
function Stat({ icon: Icon, label, value }: { icon: IconType; label: string; value: string }) { return <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"><Icon className="h-5 w-5 text-sky-600 dark:text-sky-300" /><p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p><p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{value}</p></div>; }
function FeatureCard({ feature, lang }: { feature: Feature; lang: Lang }) { const Icon = feature.icon; return <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md dark:bg-slate-900 dark:ring-slate-800"><div className="inline-flex rounded-xl bg-sky-50 p-3 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300"><Icon className="h-6 w-6" /></div><h3 className="mt-5 text-lg font-semibold text-slate-950 dark:text-white">{l(feature.title, lang)}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{l(feature.text, lang)}</p></article>; }
function CheckRow({ text }: { text: string }) { return <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-700 dark:bg-slate-800 dark:text-slate-200"><Check className="mt-1 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-300" />{text}</div>; }
function DarkCheck({ text }: { text: string }) { return <div className="flex items-start gap-3 text-sm leading-7 text-slate-200"><Check className="mt-1 h-4 w-4 shrink-0 text-sky-300" />{text}</div>; }
function PaymentCard({ icon: Icon, title, amount, detail }: { icon: IconType; title: string; amount: string; detail: string }) { return <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"><div className="flex items-center gap-3"><div className="rounded-xl bg-sky-100 p-3 text-sky-700 dark:bg-sky-950 dark:text-sky-300"><Icon className="h-5 w-5" /></div><p className="font-semibold text-slate-950 dark:text-white">{title}</p></div><p className="mt-5 text-3xl font-semibold text-sky-700 dark:text-sky-300">{amount}</p><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{detail}</p></article>; }
function StageCard({ stage, lang }: { stage: Stage; lang: Lang }) { const Icon = stage.icon; return <article className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800"><div className="grid lg:grid-cols-[0.68fr_1.32fr]"><div className="bg-slate-950 p-7 text-white md:p-9"><div className="flex items-center justify-between"><div className="rounded-2xl bg-white/10 p-4"><Icon className="h-7 w-7 text-sky-300" /></div><span className="text-5xl font-semibold text-white/20">{stage.number}</span></div><p className="mt-8 text-sm font-semibold text-sky-300">{l(stage.duration, lang)}</p><h3 className="mt-3 text-2xl font-semibold leading-tight">{l(stage.title, lang)}</h3><p className="mt-5 leading-8 text-slate-300">{l(stage.intro, lang)}</p><div className="mt-8 border-t border-white/15 pt-6"><p className="text-sm text-slate-400">{ui[lang].phasePrice}</p><p className="mt-2 text-3xl font-semibold text-white">{stage.price}</p></div></div><div className="p-7 md:p-9"><div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]"><div><h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white"><Check className="h-5 w-5 text-sky-600 dark:text-sky-300" />{ui[lang].included}</h4><div className="grid gap-3">{stage.points.map((point) => <CheckRow key={l(point, lang)} text={l(point, lang)} />)}</div></div><div><h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-950 dark:text-white"><Rocket className="h-5 w-5 text-violet-600 dark:text-violet-300" />{ui[lang].stageDelivery}</h4><div className="space-y-3">{stage.deliverables.map((item) => <div key={l(item, lang)} className="flex items-start gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><Check className="mt-1 h-4 w-4 shrink-0 text-violet-600 dark:text-violet-300" />{l(item, lang)}</div>)}</div></div></div></div></div></article>; }
