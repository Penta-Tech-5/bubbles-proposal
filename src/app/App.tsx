import React, { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Cloud,
  Code2,
  CreditCard,
  FileCheck2,
  Globe2,
  Languages,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Users2,
  WalletCards,
} from 'lucide-react';

type Lang = 'ar' | 'en';
type Localized = { ar: string; en: string };

type Feature = {
  icon: React.ElementType;
  title: Localized;
  text: Localized;
  items: Localized[];
};

type Cost = {
  title: Localized;
  amount: Localized;
  subtitle: Localized;
  note: Localized;
};

const logoSrc = 'logo.png';
const companyUrl = 'https://penta-k.com';

const copy = {
  offer: { ar: 'عرض فني ومالي', en: 'Technical & Financial Proposal' },
  proposalFor: { ar: 'مقدم إلى', en: 'Prepared for' },
  project: { ar: 'منصة Luxlane لإدارة وحجز العقارات الفاخرة', en: 'Luxlane Luxury Property Management & Booking Platform' },
  eyebrow: { ar: 'حل رقمي متكامل للإقامات الفاخرة', en: 'A complete digital solution for luxury stays' },
  intro: {
    ar: 'منصة متكاملة لإدارة وتأجير الشاليهات والفلل والوحدات الفندقية الفاخرة، تجمع تجربة العميل، بوابة المالك، ولوحة الإدارة في منظومة واحدة قابلة للتوسع.',
    en: 'An integrated platform for managing and renting luxury chalets, villas, and hotel apartments, bringing the customer experience, owner portal, and administration into one scalable system.',
  },
  price: { ar: '180,000 جنيه مصري', en: 'EGP 180,000' },
  duration: { ar: '4 شهور بحد أقصى', en: 'Up to 4 months' },
  support: { ar: '3 شهور دعم فني مجاني', en: '3 months free technical support' },
  overview: { ar: 'نظرة عامة على المشروع', en: 'Project overview' },
  scope: { ar: 'نطاق العمل والمنصات', en: 'Scope & platforms' },
  features: { ar: 'المميزات المطلوبة', en: 'Required features' },
  booking: { ar: 'محرك الحجز والتشغيل', en: 'Booking & operations engine' },
  finance: { ar: 'المدفوعات والإدارة المالية', en: 'Payments & financial operations' },
  technology: { ar: 'التقنيات والبنية الفنية', en: 'Technology & architecture' },
  delivery: { ar: 'خطة التنفيذ والتسليم', en: 'Delivery plan' },
  paymentPlan: { ar: 'خطة الدفعات', en: 'Payment plan' },
  included: { ar: 'ما يشمله السعر', en: 'Included in the price' },
  external: { ar: 'التكاليف التشغيلية والخارجية', en: 'Operational & external costs' },
  contact: { ar: 'للتواصل', en: 'Contact' },
  contactText: { ar: 'يسعدنا مناقشة التفاصيل وتأكيد نطاق التنفيذ قبل بدء المشروع.', en: 'We would be happy to discuss the details and confirm the scope before starting.' },
  validity: { ar: 'عرض السعر ساري من 10/11/2026 إلى 30/11/2026 فقط. في حال عدم الرد خلال هذه الفترة، يعتبر العرض غير معتمد تلقائيًا، وقد تحتاج الأسعار والمدة إلى إعادة المراجعة بسبب ارتباط فريق التنفيذ بمواعيد تسليم مشاريع أخرى.', en: 'This proposal is valid from 10/11/2026 to 30/11/2026 only. If no response is received during this period, the proposal will not be considered approved, and the pricing and timeline may need to be reviewed because the delivery team is scheduled for other projects.' },
};

const features: Feature[] = [
  {
    icon: Smartphone,
    title: { ar: 'تطبيق وموقع العميل', en: 'Customer app & website' },
    text: { ar: 'تجربة حجز فاخرة وسهلة عبر تطبيقات الهاتف وموقع ويب سريع.', en: 'A premium, simple booking experience across mobile apps and a fast web platform.' },
    items: [
      { ar: 'تطبيق Android و iOS للعميل.', en: 'Customer Android and iOS apps.' },
      { ar: 'موقع ويب للبحث وعرض الوحدات وإتمام الحجز.', en: 'Customer website for discovery, booking, and reservations.' },
      { ar: 'بحث متقدم حسب الوجهة والتاريخ وعدد الضيوف ونوع الوحدة والسعر والمرافق.', en: 'Advanced search by destination, dates, guests, property type, price, and amenities.' },
      { ar: 'صور وفيديوهات وموقع الوحدة على الخريطة وتقييمات الضيوف.', en: 'Photos, videos, map location, and guest ratings for each unit.' },
      { ar: 'حساب شخصي، المفضلة، بيانات التواصل، وسجل الحجوزات الحالية والسابقة والملغاة.', en: 'Profile, favorites, contact details, and current, past, and cancelled bookings.' },
    ],
  },
  {
    icon: Building2,
    title: { ar: 'تطبيق وبوابة مالك العقار', en: 'Owner app & web portal' },
    text: { ar: 'أدوات واضحة لمالك العقار لمتابعة وحداته وحجوزاته ومستحقاته المالية.', en: 'Clear tools for owners to track properties, bookings, and financial entitlements.' },
    items: [
      { ar: 'تطبيق Android و iOS للمالك، بالإضافة إلى بوابة ويب.', en: 'Owner Android and iOS apps, plus a web portal.' },
      { ar: 'إحصائيات الأرباح، نسبة الإشغال، وعدد الليالي المحجوزة.', en: 'Profit, occupancy, and booked-night KPIs.' },
      { ar: 'محفظة مالية توضح الرصيد المتاح والمبالغ المعلقة وسجل التحويلات.', en: 'Wallet showing available balance, pending amounts, and transfer history.' },
      { ar: 'إدارة بيانات الحساب البنكي ومتابعة مستحقات الوحدات.', en: 'Bank details and unit-level financial entitlement tracking.' },
      { ar: 'حجب تواريخ للاستخدام الشخصي وفق صلاحيات وموافقة الإدارة.', en: 'Block dates for personal use subject to admin permissions and approval.' },
    ],
  },
  {
    icon: ShieldCheck,
    title: { ar: 'لوحة تحكم الإدارة المركزية', en: 'Central admin dashboard' },
    text: { ar: 'لوحة ويب شاملة لإدارة التشغيل والوحدات والعملاء والملاك والعمليات المالية.', en: 'A complete web dashboard for operations, properties, customers, owners, and finance.' },
    items: [
      { ar: 'إضافة وتعديل وإخفاء الوحدات ورفع الصور والفيديوهات والبيانات.', en: 'Add, edit, hide properties, and manage media and details.' },
      { ar: 'إدارة حسابات العملاء والملاك والصلاحيات.', en: 'Manage customer and owner accounts and permissions.' },
      { ar: 'متابعة الحجوزات وتعديلها أو إلغاؤها عند الحاجة التشغيلية.', en: 'Monitor, edit, or cancel bookings when operationally required.' },
      { ar: 'تقارير إيرادات الشركة وعمولاتها ومستحقات الملاك والتدفقات المالية.', en: 'Reports for company revenue, commissions, owner payouts, and cash flow.' },
      { ar: 'متابعة الأداء والإشغال والحجوزات من مركز تحكم موحد.', en: 'Unified monitoring of performance, occupancy, and bookings.' },
    ],
  },
  {
    icon: CalendarCheck2,
    title: { ar: 'محرك الحجز والتوافر', en: 'Booking & availability engine' },
    text: { ar: 'منظومة حجز تمنع التعارض وتدير الأسعار والمواعيد وفق قواعد واضحة.', en: 'A booking engine that prevents conflicts and manages dates and pricing through clear rules.' },
    items: [
      { ar: 'إظهار التوافر الفعلي لحظيًا ومنع الحجز المزدوج.', en: 'Real-time availability and double-booking prevention.' },
      { ar: 'تسعير موسمي للصيف والإجازات وعطلات نهاية الأسبوع.', en: 'Seasonal pricing for summer, holidays, and weekends.' },
      { ar: 'حساب تلقائي لقيمة الليالي ورسوم التنظيف والضرائب والتأمين القابل للاسترداد.', en: 'Automatic calculation of nights, cleaning fees, taxes, and refundable security deposit.' },
      { ar: 'سياسات إلغاء واضحة وربطها بإجراءات الاسترداد.', en: 'Clear cancellation policies connected to refund handling.' },
    ],
  },
  {
    icon: CreditCard,
    title: { ar: 'الدفع والتسويات المالية', en: 'Payments & financial settlements' },
    text: { ar: 'ربط الدفع وتقسيم المستحقات داخل دورة حجز قابلة للتتبع.', en: 'Payment integration and settlement splitting within a traceable booking lifecycle.' },
    items: [
      { ar: 'اقتراح التكامل مع Gedia أو Paymob أو Fawry أو Stripe حسب اختيار العميل.', en: 'Integration with Paymob, Fawry, or Stripe or Gedia according to the client’s choice.' },
      { ar: 'دفع مقدم للحجز، مع إمكانية سداد المتبقي قبل تسجيل الوصول.', en: 'Booking deposit with the remaining amount payable before check-in.' },
      { ar: 'احتساب عمولة المنصة وتحويل صافي المستحق إلى محفظة المالك.', en: 'Automatic platform commission calculation and owner net balance.' },
      { ar: 'حالات مالية واضحة: متاح، معلق حتى انتهاء إقامة الضيف، ومحّول.', en: 'Clear statuses: available, pending until stay completion, and transferred.' },
      { ar: 'سجل عمليات وتقارير تساعد الإدارة على المتابعة والمراجعة.', en: 'Transaction logs and reports for administration and reconciliation.' },
    ],
  },
  {
    icon: MessageCircle,
    title: { ar: 'التواصل والتجربة التشغيلية', en: 'Communication & operations' },
    text: { ar: 'تنظيم دورة الحجز ومتابعتها من أول الطلب حتى انتهاء الإقامة.', en: 'Organized booking lifecycle management from request to stay completion.' },
    items: [
      { ar: 'إشعارات للحجز وتحديث حالته والتنبيهات المهمة.', en: 'Booking, status, and important event notifications.' },
      { ar: 'ربط بيانات الحجز بالعميل والمالك والوحدة في مكان واحد.', en: 'One connected record for the booking, customer, owner, and unit.' },
      { ar: 'إظهار بيانات الوصول والتفاصيل التشغيلية بحسب الصلاحيات.', en: 'Arrival and operational details shown according to permissions.' },
      { ar: 'هيكل قابل للتكامل مع خدمات إضافية مستقبلًا.', en: 'Architecture ready for future integrations and enhancements.' },
    ],
  },
];

const technologies: { icon: React.ElementType; title: Localized; text: Localized }[] = [
  { icon: Smartphone, title: { ar: 'Flutter للتطبيقات', en: 'Flutter mobile apps' }, text: { ar: 'تطبيقات العميل والمالك Android و iOS من قاعدة كود واحدة بأداء ثابت.', en: 'Customer and owner Android/iOS apps from one maintainable codebase.' } },
  { icon: Code2, title: { ar: 'Node.js للباك إند', en: 'Node.js backend' }, text: { ar: 'خدمات API قابلة للتوسع لمحرك الحجز والمستخدمين والماليات.', en: 'Scalable APIs for booking, users, and financial operations.' } },
  { icon: Globe2, title: { ar: 'Next.js لموقع العميل', en: 'Next.js customer website' }, text: { ar: 'موقع سريع ومحسن لتجربة العميل والوصول إلى الوحدات والحجوزات.', en: 'Fast, optimized customer web experience for discovery and booking.' } },
  { icon: BarChart3, title: { ar: 'Flutter Web للمالك والإدارة', en: 'Flutter Web owner/admin portals' }, text: { ar: 'بوابة المالك ولوحة الإدارة عبر الويب ضمن تجربة موحدة.', en: 'Owner portal and admin dashboard through a consistent web experience.' } },
  { icon: Cloud, title: { ar: 'Cloudflare', en: 'Cloudflare' }, text: { ar: 'حماية وتسريع وتوزيع المحتوى، مع قابلية استخدام تخزين الوسائط بشكل منفصل.', en: 'Protection, acceleration, and content delivery with isolated media storage capability.' } },
  { icon: LockKeyhole, title: { ar: 'Docker وأمان البيانات', en: 'Docker & data security' }, text: { ar: 'تشغيل منظم وقابل للنقل مع تشفير البيانات وتطبيق صلاحيات الوصول.', en: 'Portable deployment with encrypted data and role-based access controls.' } },
];

const paymentPlan: { number: string; title: Localized; amount: Localized; text: Localized }[] = [
  { number: '01', title: { ar: 'دفعة مقدمة عند التعاقد', en: 'Advance payment at contract signing' }, amount: { ar: '45,000 جنيه', en: 'EGP 45,000' }, text: { ar: '25% مقدم لبدء التحليل والتصميم وتجهيز البنية الأساسية.', en: '25% advance to start discovery, design, and project foundation.' } },
  { number: '02', title: { ar: 'بعد الانتهاء من تطبيقات المالك والعميل', en: 'After customer & owner apps completion' }, amount: { ar: '45,000 جنيه', en: 'EGP 45,000' }, text: { ar: 'بعد تسليم تطبيقات العميل والمالك Android و iOS وربطها بالوظائف الأساسية.', en: 'After delivery of the customer and owner Android/iOS apps connected to the core functions.' } },
  { number: '03', title: { ar: 'بعد الانتهاء من موقعي المالك والعميل', en: 'After owner & customer websites completion' }, amount: { ar: '45,000 جنيه', en: 'EGP 45,000' }, text: { ar: 'بعد تسليم موقع العميل وبوابة المالك عبر الويب وتجهيزهما للتشغيل.', en: 'After delivery and readiness of the customer website and owner web portal.' } },
  { number: '04', title: { ar: 'بعد الانتهاء من لوحة الإدارة وبدء رفع التطبيقات', en: 'After admin completion & store publishing begins' }, amount: { ar: '45,000 جنيه', en: 'EGP 45,000' }, text: { ar: 'بعد تسليم لوحة الإدارة والاختبار وبدء رفع التطبيقات على Google Play وApple Store.', en: 'After admin dashboard delivery, QA, and starting app publishing on Google Play and Apple Store.' } },
];

const externalCosts: Cost[] = [
  {
    title: { ar: 'سيرفرات الشركة — الخيار المقترح', en: 'Company servers — recommended option' },
    amount: { ar: '9,000 جنيه سنويًا', en: 'EGP 9,000 / year' },
    subtitle: { ar: 'يشمل التسطيب والمتابعة وضمان استمرارية الخدمة', en: 'Includes setup, monitoring, and service continuity' },
    note: { ar: 'استضافة على سيرفرات الشركة مع تجهيز البيئة ومتابعة الأداء واستمرارية تشغيل المنصة.', en: 'Hosting on company servers with environment setup, performance monitoring, and continuity.' },
  },
  {
    title: { ar: 'سيرفرات خاصة بالعميل', en: 'Client-owned private servers' },
    amount: { ar: 'التسطيب الأول مجانًا', en: 'First setup is free' },
    subtitle: { ar: 'المتابعة والدعم على السيرفر باشتراك اختياري', en: 'Optional paid monitoring and server support' },
    note: { ar: 'يمكن تشغيل النظام على سيرفرات العميل، ويتم التسطيب الأول مجانًا. أما المتابعة والدعم المستمر فيتم تحديد تكلفتهما حسب البيئة المطلوبة.', en: 'The system can run on client-owned servers. Initial setup is free; ongoing monitoring and support are quoted according to the required environment.' },
  },
  {
    title: { ar: 'حسابات Google Play و Apple Developer', en: 'Google Play & Apple Developer accounts' },
    amount: { ar: 'Apple: 60$ سنويًا | Google: 20$ سنويًا', en: 'Apple: $60/year | Google: $20/year' },
    subtitle: { ar: 'في حالة الرفع على حسابات الشركة', en: 'When publishing on company accounts' },
    note: { ar: 'تشمل هذه القيم رسوم حسابات المتاجر السنوية المعتادة، مع متابعة متطلبات النشر والتحديثات. يمكن الرفع على حسابات العميل، ويتحمل العميل رسوم الحسابات الرسمية الخاصة به.', en: 'These are the usual annual store-account fees, with publishing-requirement follow-up. Client-owned accounts can be used, with official account fees paid by the client.' },
  },
  {
    title: { ar: 'خدمة الدعم الفني والمتابعة', en: 'Technical support & ongoing monitoring' },
    amount: { ar: 'يحدد بالاتفاق', en: 'Agreed separately' },
    subtitle: { ar: 'يتم الاتفاق على التكلفة قبل نهاية الدعم المجاني', en: 'Pricing agreed before the free support period ends' },
    note: { ar: 'تشمل متابعة تحديثات التطبيقات، والتحديثات والمتطلبات الخاصة بمنصات رفع التطبيقات، والتواصل المستمر مع العميل، ومشاركة كل جديد من أفكار وتقنيات تساعد على تطوير مجال العمل. يتم الاتفاق على تكلفة الخدمة بعد تسليم المشروع وقبل انتهاء فترة الدعم الفني المجاني.', en: 'Includes monitoring app updates, store-platform updates and requirements, ongoing communication with the client, and sharing new ideas and technologies that support business growth. The service cost is agreed after project delivery and before the free technical support period ends.' },
  },
  {
    title: { ar: 'خدمات الطرف الثالث حسب الاستخدام', en: 'Usage-based third-party services' },
    amount: { ar: 'تحدد حسب الاختيار والاستهلاك', en: 'Based on selection and usage' },
    subtitle: { ar: 'بوابة الدفع، الخرائط، التخزين والوسائط', en: 'Payment gateway, maps, storage, and media' },
    note: { ar: 'رسوم حسابات بوابات الدفع مثل Paymob أو Fawry أو Stripe، وخدمات الخرائط والتخزين أو الفيديو، تكون على حساب العميل وتحددها الجهة المزودة.', en: 'Fees for gateways such as Paymob, Fawry, or Stripe, plus maps and media storage, are paid to the provider and depend on usage.' },
  },
];

const deliverySteps: { number: string; title: Localized; text: Localized }[] = [
  { number: '01', title: { ar: 'التحليل واعتماد التجربة', en: 'Discovery & experience approval' }, text: { ar: 'تحليل الكراسة، تحديد الأولويات، إعداد تدفقات الاستخدام، واعتماد واجهات UX/UI قبل البرمجة.', en: 'Review requirements, define priorities, map user flows, and approve UX/UI before development.' } },
  { number: '02', title: { ar: 'البنية ومحرك الحجز', en: 'Foundation & booking engine' }, text: { ar: 'تجهيز الباك إند، الحسابات، الوحدات، التوافر، التسعير، وسياسات الحجز.', en: 'Build backend, accounts, properties, availability, pricing, and booking policies.' } },
  { number: '03', title: { ar: 'تطبيقات العميل والمالك', en: 'Customer & owner experiences' }, text: { ar: 'تنفيذ تطبيقات الهاتف ومواقع العميل والمالك وربطها بالبيانات والحجوزات والماليات.', en: 'Implement mobile apps and customer/owner web experiences connected to bookings and finance.' } },
  { number: '04', title: { ar: 'لوحة الإدارة والإطلاق', en: 'Admin dashboard & launch' }, text: { ar: 'استكمال لوحة الإدارة، الاختبارات، التدريب الأساسي، تجهيز الإنتاج، ثم الإطلاق والمتابعة.', en: 'Complete admin dashboard, QA, basic handover, production setup, launch, and follow-up.' } },
];

const includedItems: Localized[] = [
  { ar: 'تطبيق العميل Android و iOS.', en: 'Customer Android and iOS apps.' },
  { ar: 'موقع ويب للعميل باستخدام Next.js.', en: 'Customer website using Next.js.' },
  { ar: 'تطبيق المالك Android و iOS.', en: 'Owner Android and iOS apps.' },
  { ar: 'بوابة ويب للمالك باستخدام Flutter Web.', en: 'Owner web portal using Flutter Web.' },
  { ar: 'لوحة تحكم الإدارة عبر الويب فقط باستخدام Flutter Web.', en: 'Web-only admin dashboard using Flutter Web.' },
  { ar: 'باك إند Node.js ومحرك حجز وربط قواعد البيانات.', en: 'Node.js backend, booking engine, and database integration.' },
  { ar: 'ربط بوابة دفع واحدة من الخيارات المقترحة حسب اعتماد العميل.', en: 'Integration with one selected payment gateway from the proposed options.' },
  { ar: 'اختبارات وتجهيز للإطلاق على بيئة الإنتاج.', en: 'QA and production deployment preparation.' },
  { ar: 'دعم فني مجاني لمدة 3 شهور بعد الإطلاق الفعلي.', en: '3 months of free technical support after production launch.' },
];

function text(value: Localized, lang: Lang) {
  return value[lang];
}

function SectionHeading({ eyebrow, title, description, lang }: { eyebrow?: Localized; title: Localized; description?: Localized; lang: Lang }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400">{text(eyebrow, lang)}</p>}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{text(title, lang)}</h2>
      {description && <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{text(description, lang)}</p>}
    </div>
  );
}

function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const [isDark, setIsDark] = useState(false);
  const isArabic = lang === 'ar';

  const ui = useMemo(() => ({
    language: isArabic ? 'English' : 'العربية',
    switchHint: isArabic ? 'Switch to English' : 'التبديل إلى العربية',
    explore: isArabic ? 'استعرض نطاق المشروع' : 'Explore project scope',
    total: isArabic ? 'التكلفة الإجمالية' : 'Total project cost',
    maxDuration: isArabic ? 'مدة التنفيذ القصوى' : 'Maximum delivery time',
    freeSupport: isArabic ? 'الدعم بعد الإطلاق' : 'Post-launch support',
    read: isArabic ? 'قراءة التفاصيل' : 'View details',
    note: isArabic ? 'ملاحظة' : 'Note',
    separate: isArabic ? 'يتم احتسابها بشكل منفصل عن سعر التنفيذ' : 'Calculated separately from the implementation price',
    closing: isArabic ? 'نطاق واضح، تجربة فاخرة، وبنية جاهزة للنمو' : 'A clear scope, premium experience, and a growth-ready foundation',
    closingText: isArabic ? 'تم إعداد هذا العرض بناءً على كراسة الشروط والمواصفات الخاصة بمنصة Luxlane، مع فصل تكلفة التطوير عن المصروفات التشغيلية التي تعتمد على اختيار العميل وحجم الاستخدام.' : 'This proposal is based on the Luxlane RFP and SRS, separating implementation costs from operational expenses that depend on the client’s choice and usage.',
  }), [isArabic, isDark]);

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'} className={`${isDark ? 'dark' : ''} min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-slate-100`}>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#07111f]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <a href={companyUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3" aria-label="Penta website">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-sm dark:border-white/10">
              <img src={logoSrc} alt="Penta" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-black text-slate-950 dark:text-white">Penta</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Digital products & technology</p>
            </div>
          </a>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(isArabic ? 'en' : 'ar')} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-cyan-400 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200" aria-label={ui.switchHint}>
              <Languages className="h-4 w-4 text-cyan-500" />
              {ui.language}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(14,165,233,0.16),transparent_34%),radial-gradient(circle_at_85%_5%,rgba(20,184,166,0.13),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-24">
            <div>
              <p className="mb-5 inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-black tracking-[0.18em] text-cyan-700 dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-cyan-300">{text(copy.eyebrow, lang)}</p>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-6xl">{text(copy.project, lang)}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300">{text(copy.intro, lang)}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#scope" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/15 transition hover:bg-cyan-700 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400">
                  {ui.explore} {isArabic ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                </a>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-bold text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200">{text(copy.offer, lang)}</span>
              </div>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-2xl shadow-cyan-950/10 backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-6 text-white sm:p-8">
                <div className="mb-10 flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-bold text-cyan-300">{text(copy.proposalFor, lang)}</p>
                    <p className="mt-2 text-2xl font-black">Luxlane</p>
                  </div>
                  <Building2 className="h-10 w-10 text-cyan-300" />
                </div>
                <div className="border-t border-white/15 pt-6">
                  <p className="text-sm text-slate-300">{isArabic ? 'نطاق العرض' : 'Proposal scope'}</p>
                  <p className="mt-2 text-2xl font-black tracking-tight text-cyan-300">{isArabic ? 'تطبيقات + مواقع + لوحة إدارة' : 'Apps + websites + admin dashboard'}</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">{ui.maxDuration}</p><p className="mt-2 font-bold">{text(copy.duration, lang)}</p></div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">{ui.freeSupport}</p><p className="mt-2 font-bold">{text(copy.support, lang)}</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scope" className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeading eyebrow={{ ar: '01 — تعريف المشروع', en: '01 — Project definition' }} title={copy.overview} description={{ ar: 'Luxlane ليست مجرد واجهة لعرض الوحدات، بل منظومة تشغيلية ومالية كاملة تربط العميل بالوحدة ومالك العقار والإدارة المركزية.', en: 'Luxlane is more than a property catalog: it is a complete operational and financial system connecting guests, properties, owners, and central administration.' }} lang={lang} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Search, { ar: 'اكتشاف وحجز', en: 'Discover & book' }, { ar: 'بحث متقدم وتجربة حجز واضحة للوحدات الفاخرة.', en: 'Advanced search and a clear booking journey for luxury units.' }],
              [Building2, { ar: 'إدارة الملاك', en: 'Owner management' }, { ar: 'متابعة الوحدات والحجوزات والأرباح من تطبيق وبوابة.', en: 'Track units, bookings, and earnings through app and portal.' }],
              [CircleDollarSign, { ar: 'تسويات مالية', en: 'Financial settlements' }, { ar: 'عمولات ومحافظ ومستحقات وتقارير قابلة للمراجعة.', en: 'Commissions, wallets, payouts, and auditable reports.' }],
              [ShieldCheck, { ar: 'إدارة مركزية', en: 'Central control' }, { ar: 'لوحة ويب للإدارة والتحكم في التشغيل والمحتوى.', en: 'Web dashboard for operations and content control.' }],
            ].map(([Icon, title, description], index) => {
              const I = Icon as React.ElementType;
              return <div key={index} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/70"><I className="h-7 w-7 text-cyan-600 dark:text-cyan-400" /><h3 className="mt-5 font-black text-slate-950 dark:text-white">{text(title as Localized, lang)}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(description as Localized, lang)}</p></div>;
            })}
          </div>
        </section>

        <section className="bg-slate-100/70 py-16 dark:bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={{ ar: '02 — المنصات والأدوار', en: '02 — Platforms & roles' }} title={copy.scope} description={{ ar: 'يشمل النطاق تجربة رقمية متكاملة لكل طرف، مع فصل واضح للصلاحيات والمسؤوليات.', en: 'The scope provides a complete experience for every role with clear separation of permissions and responsibilities.' }} lang={lang} />
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                { icon: Smartphone, title: { ar: 'العميل', en: 'Customer' }, items: [{ ar: 'تطبيق Android و iOS', en: 'Android & iOS app' }, { ar: 'موقع ويب باستخدام Next.js', en: 'Next.js customer website' }, { ar: 'استكشاف الوحدات والحجز والدفع', en: 'Discover, book, and pay' }] },
                { icon: Users2, title: { ar: 'مالك العقار', en: 'Property owner' }, items: [{ ar: 'تطبيق Android و iOS', en: 'Android & iOS app' }, { ar: 'بوابة ويب باستخدام Flutter Web', en: 'Flutter Web portal' }, { ar: 'الحجوزات والأرباح والمحفظة', en: 'Bookings, earnings, and wallet' }] },
                { icon: ShieldCheck, title: { ar: 'الإدارة المركزية', en: 'Central administration' }, items: [{ ar: 'لوحة تحكم ويب فقط', en: 'Web-only dashboard' }, { ar: 'إدارة الوحدات والحسابات والحجوزات', en: 'Properties, accounts, and bookings' }, { ar: 'التقارير والتسويات المالية', en: 'Reports and settlements' }] },
              ].map(({ icon: Icon, title, items }) => <div key={title.en} className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900/80"><div className="flex items-center gap-3"><div className="rounded-2xl bg-cyan-50 p-3 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-black text-slate-950 dark:text-white">{text(title, lang)}</h3></div><ul className="mt-6 space-y-3">{items.map((item) => <li key={item.en} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />{text(item, lang)}</li>)}</ul></div>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeading eyebrow={{ ar: '03 — تفاصيل النطاق', en: '03 — Scope details' }} title={copy.features} description={{ ar: 'تم تحويل المتطلبات الواردة في كراسة الشروط إلى وحدات تنفيذية واضحة قابلة للاختبار والتسليم.', en: 'The RFP requirements are organized into clear, testable, and deliverable product modules.' }} lang={lang} />
          <div className="grid gap-5 md:grid-cols-2">
            {features.map(({ icon: Icon, title, text: description, items }) => <article key={title.en} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/5 dark:border-white/10 dark:bg-slate-900/70"><div className="flex items-start gap-4"><div className="rounded-2xl bg-slate-950 p-3 text-cyan-300 dark:bg-cyan-400/10 dark:text-cyan-300"><Icon className="h-6 w-6" /></div><div><h3 className="text-xl font-black text-slate-950 dark:text-white">{text(title, lang)}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(description, lang)}</p></div></div><ul className="mt-6 space-y-3 border-t border-slate-100 pt-5 dark:border-white/10">{items.map((item) => <li key={item.en} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />{text(item, lang)}</li>)}</ul></article>)}
          </div>
        </section>

        <section className="bg-slate-100/70 py-16 dark:bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={{ ar: '04 — التقنية', en: '04 — Technology' }} title={copy.technology} description={{ ar: 'اختيارات تقنية مصممة للفصل بين خدمات التطبيق والوسائط، وتحسين الأداء، وتسهيل التوسع.', en: 'A technical foundation designed to separate application services from media, improve performance, and support growth.' }} lang={lang} />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{technologies.map(({ icon: Icon, title, text: description }) => <div key={title.en} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/80"><Icon className="h-7 w-7 text-cyan-600 dark:text-cyan-400" /><h3 className="mt-5 font-black text-slate-950 dark:text-white">{text(title, lang)}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(description, lang)}</p></div>)}</div>
            <div className="mt-6 grid gap-4 lg:grid-cols-3"><div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 dark:border-cyan-400/20 dark:bg-cyan-400/10"><Cloud className="h-7 w-7 text-cyan-700 dark:text-cyan-300" /><h3 className="mt-4 font-black text-slate-950 dark:text-white">{isArabic ? 'الوسائط والتخزين' : 'Media & storage'}</h3><p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-200">{isArabic ? 'تخزين صور وفيديوهات الوحدات في طبقة مناسبة وقابلة للتوسع، مع توزيع المحتوى وتسريعه عبر Cloudflare حسب الخطة المعتمدة.' : 'Store property images and videos in a scalable layer, with content delivery and acceleration through Cloudflare according to the selected plan.'}</p></div><div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/80"><LockKeyhole className="h-7 w-7 text-emerald-600 dark:text-emerald-400" /><h3 className="mt-4 font-black text-slate-950 dark:text-white">{isArabic ? 'الأمان والصلاحيات' : 'Security & permissions'}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{isArabic ? 'تشفير البيانات، صلاحيات حسب الدور، حماية العمليات المالية، وتجهيز مناسب لمتطلبات الأمان وPCI عند استخدام بوابة دفع.' : 'Encrypted data, role-based access, protected financial operations, and readiness for security and PCI requirements when using a payment gateway.'}</p></div><div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/80"><Server className="h-7 w-7 text-violet-600 dark:text-violet-400" /><h3 className="mt-4 font-black text-slate-950 dark:text-white">{isArabic ? 'قابلية التوسع' : 'Scalability'}</h3><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{isArabic ? 'تصميم الباك إند لاستيعاب مواسم السياحة وزيادة عدد الوحدات والحجوزات والمستخدمين.' : 'Backend architecture designed for tourism peaks and growth in units, bookings, and users.'}</p></div></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeading eyebrow={{ ar: '05 — التنفيذ', en: '05 — Delivery' }} title={copy.delivery} description={{ ar: 'مدة التنفيذ القصوى أربعة أشهر، ويكون كل جزء مرتبطًا بمخرجات واضحة ومراجعة قبل الانتقال للمرحلة التالية.', en: 'The maximum delivery timeline is four months, with clear outputs and review before moving to the next stage.' }} lang={lang} />
          <div className="grid gap-4 lg:grid-cols-4">{deliverySteps.map((step, index) => <div key={step.number} className="relative rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/70"><span className="text-4xl font-black text-cyan-500/35">{step.number}</span><h3 className="mt-5 font-black text-slate-950 dark:text-white">{text(step.title, lang)}</h3><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(step.text, lang)}</p>{index < deliverySteps.length - 1 && <ArrowUpRight className="absolute -bottom-8 hidden text-cyan-500/40 lg:block" style={{ [isArabic ? 'left' : 'right']: '-1.25rem' }} />}</div>)}</div>
        </section>

        <section className="bg-slate-100/70 py-16 dark:bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading eyebrow={{ ar: '06 — المقابل المالي', en: '06 — Financial proposal' }} title={copy.paymentPlan} description={{ ar: 'تم تقسيم التكلفة الإجمالية إلى أربع دفعات متساوية مرتبطة بمراحل ومخرجات التسليم.', en: 'The total cost is divided into four equal payments linked to delivery milestones and outputs.' }} lang={lang} />
            <div className="grid gap-4 lg:grid-cols-4">{paymentPlan.map((payment) => <div key={payment.number} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-slate-900/80"><div className="flex items-center justify-between"><span className="text-sm font-black text-cyan-600 dark:text-cyan-400">{payment.number}</span><CircleDollarSign className="h-5 w-5 text-slate-300 dark:text-slate-600" /></div><h3 className="mt-7 font-black text-slate-950 dark:text-white">{text(payment.title, lang)}</h3><p className="mt-3 text-2xl font-black text-cyan-700 dark:text-cyan-300">{text(payment.amount, lang)}</p><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(payment.text, lang)}</p></div>)}</div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-slate-950 p-6 text-white dark:bg-cyan-500 dark:text-slate-950"><div><p className="text-sm font-bold opacity-70">{ui.total}</p><p className="mt-1 text-3xl font-black">{text(copy.price, lang)}</p></div><p className="max-w-xl text-sm leading-7 opacity-80">{isArabic ? 'تم تقسيم التكلفة إلى أربع دفعات متساوية بقيمة 45,000 جنيه لكل دفعة.' : 'The total is divided into four equal payments of EGP 45,000 each.'}</p></div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <SectionHeading eyebrow={{ ar: '07 — حدود السعر', en: '07 — Price boundaries' }} title={copy.included} description={{ ar: 'هذه العناصر مشمولة ضمن تكلفة التطوير الإجمالية، بينما تعرض التكاليف التالية بشكل منفصل حتى يمكن اختيار الأنسب للتشغيل.', en: 'These items are included in the implementation price; the following operational costs are shown separately so the client can choose the most suitable setup.' }} lang={lang} />
          <div className="grid gap-4 lg:grid-cols-2"><div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7 dark:border-emerald-400/20 dark:bg-emerald-400/10"><div className="flex items-center gap-3"><FileCheck2 className="h-7 w-7 text-emerald-600 dark:text-emerald-300" /><h3 className="text-xl font-black text-slate-950 dark:text-white">{text(copy.included, lang)}</h3></div><ul className="mt-6 space-y-3">{includedItems.map((item) => <li key={item.en} className="flex gap-3 text-sm leading-7 text-slate-700 dark:text-slate-200"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300" />{text(item, lang)}</li>)}</ul></div><div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900/80"><div className="flex items-center gap-3"><WalletCards className="h-7 w-7 text-cyan-600 dark:text-cyan-300" /><h3 className="text-xl font-black text-slate-950 dark:text-white">{text(copy.external, lang)}</h3></div><div className="mt-6 space-y-4">{externalCosts.map((cost) => <div key={cost.title.en} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/10 dark:bg-slate-950/50"><div className="flex flex-wrap items-start justify-between gap-3"><div><h4 className="font-black text-slate-950 dark:text-white">{text(cost.title, lang)}</h4><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{text(cost.subtitle, lang)}</p></div><span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-800 dark:bg-cyan-400/10 dark:text-cyan-300">{text(cost.amount, lang)}</span></div><p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{text(cost.note, lang)}</p></div>)}</div></div></div>
          <div className="mt-5 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-7 text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-100"><CircleDollarSign className="mt-1 h-5 w-5 shrink-0" /><p><strong>{ui.note}:</strong> {ui.separate}. {isArabic ? 'رسوم بوابة الدفع، الخرائط، Cloudflare أو التخزين تتغير حسب الجهة المزودة والاستهلاك الفعلي.' : 'Payment gateway, maps, Cloudflare, and storage fees vary by provider and actual usage.'}</p></div>
        </section>

        <section className="relative overflow-hidden border-y border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-slate-50 py-20 dark:border-cyan-400/20 dark:from-[#0a2535] dark:via-[#0b1728] dark:to-[#07111f]">
          <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/10" />
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow={{ ar: '08 — نطاق توسعة مستقل', en: '08 — Separate expansion scope' }}
                title={{ ar: 'التطوير المتقدم لمنصة Luxlane', en: 'Advanced Luxlane expansion' }}
                description={{ ar: 'هذه المتطلبات تمثل نطاقًا جديدًا وكبيرًا يتجاوز العرض الأساسي الحالي، ولذلك يتم عرضه بشكل مستقل لحين عقد جلسات تفصيلية مع العميل واعتماد الأولويات والتكاملات.', en: 'These requirements represent a large new scope beyond the current base proposal, so they are presented separately until detailed workshops confirm priorities and integrations.' }}
                lang={lang}
              />
              <span className="rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-xs font-black text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200">{isArabic ? 'تقدير مبدئي قابل للمراجعة' : 'Preliminary estimate — subject to review'}</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  icon: Smartphone,
                  title: { ar: 'تجربة العميل المتقدمة', en: 'Advanced customer experience' },
                  items: [
                    { ar: 'تحسين موقع Next.js لمحركات البحث والظهور المحلي SEO/GEO لجذب الزيارات المجانية.', en: 'Optimize the Next.js website for SEO/GEO and organic discovery.' },
                    { ar: 'تقويم تفاعلي يعرض سعر كل ليلة مباشرة مع تسعير مختلف للأيام والمواسم.', en: 'Interactive calendar showing nightly prices with day and seasonal variations.' },
                    { ar: 'مسار حجز يدوي عبر WhatsApp للوحدات الاستثمارية السنوية مع تحويل العميل للمبيعات.', en: 'Manual WhatsApp booking flow for annual investment units with sales handover.' },
                    { ar: 'جولات افتراضية 360° عبر Matterport وخدمات إضافية أثناء الدفع مثل الشيف والسيارة واليخت.', en: 'Matterport 360° tours and checkout upsells such as chef, car, or yacht services.' },
                    { ar: 'مراجعات موثقة، برنامج ولاء، ومستويات VIP للعملاء المتكررين.', en: 'Verified reviews, loyalty program, and VIP levels for returning customers.' },
                  ],
                },
                {
                  icon: CalendarCheck2,
                  title: { ar: 'محرك حجز متعدد القنوات', en: 'Multi-channel booking engine' },
                  items: [
                    { ar: 'Channel Manager لربط ومزامنة Airbnb وBooking.com وBookingWhizz لحظيًا.', en: 'Channel Manager integration and real-time sync with Airbnb, Booking.com, and BookingWhizz.' },
                    { ar: 'تحديث التوافر ومنع الحجز المزدوج عبر جميع القنوات.', en: 'Availability updates and double-booking prevention across channels.' },
                    { ar: 'حساب الليالي ورسوم النظافة والضرائب والتأمين القابل للاسترداد تلقائيًا.', en: 'Automatic calculation of nights, cleaning, taxes, and refundable deposit.' },
                    { ar: 'نظام White Label لحجوزات الفنادق لتوسيع نطاق الخدمات.', en: 'White-label hotel booking capability to extend the service offering.' },
                  ],
                },
                {
                  icon: CreditCard,
                  title: { ar: 'المدفوعات والتسويات المتقدمة', en: 'Advanced payments & settlements' },
                  items: [
                    { ar: 'محرك أكواد خصم وعروض مع أكواد مخصصة للوسطاء.', en: 'Promo-code engine with broker-specific discount codes.' },
                    { ar: 'حجز أو تجميد مبلغ التأمين على بطاقة العميل دون سحبه، ثم فكه تلقائيًا بعد تأكيد فريق النظافة.', en: 'Pre-authorize the security deposit without capturing it, then release it after housekeeping confirmation.' },
                    { ar: 'الربط مع Paymob وApple Pay وGoogle Pay حسب الاعتماد النهائي.', en: 'Integration with Paymob, Apple Pay, and Google Pay subject to final approval.' },
                    { ar: 'اقتطاع عمولة Luxlane وتحويل المتبقي تلقائيًا إلى محفظة المالك.', en: 'Automatic Luxlane commission deduction and transfer of the balance to the owner wallet.' },
                  ],
                },
                {
                  icon: Users2,
                  title: { ar: 'بوابة الوسطاء والتشغيل', en: 'Broker & operations portals' },
                  items: [
                    { ar: 'بوابة مستقلة لكل وسيط لمتابعة وحداته وعملائه وحجوزاته وعمولاته.', en: 'A dedicated portal for each broker to manage units, clients, bookings, and commissions.' },
                    { ar: 'تتبع الأداء والحجوزات والعمولات مع استخراج ملفات PDF احترافية للوحدات.', en: 'Performance, booking, and commission tracking with professional property PDFs.' },
                    { ar: 'إرسال ملف الوحدة للعميل بضغطة واحدة من بوابة الوسيط.', en: 'One-click sharing of property documents with customers.' },
                    { ar: 'إدارة بانرات الصفحة الرئيسية والعروض الموسمية من لوحة الإدارة.', en: 'Admin management for homepage banners and seasonal offers.' },
                    { ar: 'لوحة Housekeeping للتنظيف، فحص التلفيات بالصور، إشعارات الخروج، وإطلاق التأمين.', en: 'Housekeeping dashboard for cleaning, photo-based damage checks, checkout alerts, and deposit release.' },
                  ],
                },
                {
                  icon: Search,
                  title: { ar: 'مميزات الذكاء الاصطناعي', en: 'AI-powered features' },
                  items: [
                    { ar: 'بحث باللغة الطبيعية يفهم طلب العميل ويحوّله إلى فلاتر ونتائج لحظية.', en: 'Natural-language search that converts customer intent into live filters and results.' },
                    { ar: 'AI Concierge للرد على الاستفسارات مع تحويل المحادثة لموظف بشري أو WhatsApp عند الحاجة.', en: 'AI Concierge with human or WhatsApp handover when needed.' },
                    { ar: 'بحث بصري برفع صورة لعرض الوحدات الأقرب في التصميم.', en: 'Visual search by uploading an image to find visually similar units.' },
                    { ar: 'تسعير ديناميكي لسد الأيام الفارغة وتوليد أوصاف تسويقية متوافقة مع SEO.', en: 'Dynamic pricing to fill empty days and AI-generated SEO-ready descriptions.' },
                    { ar: 'تلخيص تقييمات الضيوف وتحليل المشاعر وقراءة الهويات وOCR وتجهيز العقود آليًا.', en: 'Guest-review summaries, sentiment analysis, ID OCR, KYC, and automated contract preparation.' },
                  ],
                },
                {
                  icon: BarChart3,
                  title: { ar: 'التسويق والتحليلات', en: 'Marketing & analytics' },
                  items: [
                    { ar: 'ربط Meta Pixel وConversions API وGoogle Tag Manager وGA4 لتتبع رحلة العميل.', en: 'Meta Pixel, Conversions API, Google Tag Manager, and GA4 for customer journey tracking.' },
                    { ar: 'ربط Meta وGoogle Ads وإنشاء Dynamic Catalog لإعادة الاستهداف.', en: 'Meta and Google Ads integration with a dynamic catalog for retargeting.' },
                    { ar: 'ربط Snapchat وTikTok Events API لاستهداف الخليج والسوق الأمريكي بدقة.', en: 'Snapchat and TikTok Events API for accurate GCC and US targeting.' },
                    { ar: 'تقارير وتحليلات تساعد على تحسين ROAS وتقليل تكلفة الاستحواذ على العميل.', en: 'Reports and analytics to improve ROAS and reduce customer acquisition cost.' },
                  ],
                },
              ].map(({ icon: Icon, title, items }) => (
                <article key={title.en} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-slate-900/75">
                  <div className="flex items-center gap-3"><div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-black text-slate-950 dark:text-white">{text(title, lang)}</h3></div>
                  <ul className="mt-6 space-y-3">{items.map((item) => <li key={item.en} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />{text(item, lang)}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-slate-900/80"><div className="flex items-center gap-3"><Globe2 className="h-7 w-7 text-cyan-600 dark:text-cyan-300" /><h3 className="text-xl font-black text-slate-950 dark:text-white">{isArabic ? 'المنصات الإضافية المتوقعة' : 'Additional expected platforms'}</h3></div><p className="mt-5 text-sm leading-8 text-slate-600 dark:text-slate-300">{isArabic ? 'إلى جانب تطبيقات العميل وموقعه، قد يتطلب النطاق الجديد بوابة وسيط، لوحة Housekeeping، بوابة مالك موسعة، ولوحة إدارة متقدمة. يتم اعتماد شكل كل منصة وصلاحياتها بعد جلسات تحليل منفصلة.' : 'Beyond the customer apps and website, the new scope may require a broker portal, housekeeping dashboard, expanded owner portal, and advanced admin dashboard. Each platform and permission model will be confirmed through dedicated discovery workshops.'}</p></div>
              <div className="rounded-3xl border border-amber-300 bg-amber-50 p-7 dark:border-amber-400/20 dark:bg-amber-400/10"><div className="flex items-center gap-3"><CircleDollarSign className="h-7 w-7 text-amber-700 dark:text-amber-300" /><h3 className="text-xl font-black text-slate-950 dark:text-white">{isArabic ? 'التقدير المبدئي للتوسعة' : 'Preliminary expansion estimate'}</h3></div><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white/70 p-4 dark:bg-slate-950/30"><p className="text-xs font-bold text-slate-500 dark:text-slate-400">{isArabic ? 'المدة المتوقعة' : 'Estimated timeline'}</p><p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{isArabic ? 'لا تقل عن سنة' : 'At least 1 year'}</p></div><div className="rounded-2xl bg-white/70 p-4 dark:bg-slate-950/30"><p className="text-xs font-bold text-slate-500 dark:text-slate-400">{isArabic ? 'التكلفة المبدئية' : 'Preliminary cost'}</p><p className="mt-2 text-2xl font-black text-slate-950 dark:text-white">{isArabic ? 'في حدود 850,000 جنيه' : 'Around EGP 850,000'}</p></div></div><p className="mt-5 text-sm leading-8 text-amber-950 dark:text-amber-100">{isArabic ? 'هذا تقدير مبدئي وليس سعرًا نهائيًا؛ لأن المتطلبات الحالية مكتوبة بشكل عام، والتكلفة والمدة النهائيتان تتحددان بعد معرفة تفاصيل التكاملات، الحسابات الخارجية، نماذج الذكاء الاصطناعي، وعدد المنصات والعمليات المطلوبة.' : 'This is a preliminary estimate, not a final quote. Final cost and timeline depend on detailed integrations, external accounts, AI models, number of platforms, and operational workflows.'}</p></div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-16 dark:border-white/10 dark:bg-[#0b1728]">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHeading
              eyebrow={{ ar: '09 — خبرة سابقة في العقارات', en: '09 — Previous real-estate experience' }}
              title={{ ar: 'أعمالنا السابقة في المجال العقاري', en: 'Our previous real-estate work' }}
              description={{ ar: 'نقدم لكم نموذجًا من أعمال Penta-K في بناء المنصات العقارية متعددة الأطراف، لإظهار قدرتنا على تنفيذ تجربة مشابهة وقابلة للتوسع لمشروع Luxlane.', en: 'Here is a Penta-K example of a multi-sided real-estate platform, demonstrating our ability to deliver a similar and scalable experience for Luxlane.' }}
              lang={lang}
            />

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-7 text-white shadow-xl shadow-cyan-950/10 sm:p-9">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">{isArabic ? 'نظام عقاري متكامل' : 'Integrated real-estate system'}</span>
                    <h3 className="mt-5 text-3xl font-black tracking-tight">Rakan Platform</h3>
                    <p className="mt-3 max-w-xl text-sm leading-8 text-slate-300">{isArabic ? 'منصة تجمع اكتشاف العقارات، طلب الخدمات، إدارة الأملاك، الموارد البشرية، الماليات، والأعمال الإدارية في منظومة رقمية واحدة.' : 'A platform bringing property discovery, service requests, property management, HR, finance, and administration into one digital ecosystem.'}</p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-cyan-300"><Building2 className="h-8 w-8" /></div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[{ ar: 'تطبيق وموقع', en: 'App & website' }, { ar: 'لوحة إدارة', en: 'Admin dashboard' }, { ar: 'نظام متعدد الخدمات', en: 'Multi-service system' }].map((item) => <div key={item.en} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-bold text-slate-200">{text(item, lang)}</div>)}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="https://rakan-dev.penta-k.com/ar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300">{isArabic ? 'زيارة الموقع' : 'Visit website'} <ArrowUpRight className="h-4 w-4" /></a>
                  <a href="https://penta-k.com/en/project/rakan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:text-cyan-200">{isArabic ? 'دراسة الحالة في البورتفوليو' : 'Portfolio case study'} <ArrowUpRight className="h-4 w-4" /></a>
                </div>
              </article>

              <article className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-slate-900/80 sm:p-9">
                <div className="flex items-center gap-3"><div className="rounded-2xl bg-cyan-100 p-3 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"><ShieldCheck className="h-6 w-6" /></div><h3 className="text-xl font-black text-slate-950 dark:text-white">{isArabic ? 'ماذا يعكس هذا المشروع؟' : 'What this project demonstrates'}</h3></div>
                <ul className="mt-7 space-y-4">
                  {[
                    { ar: 'تجربة عميل لاستكشاف العقارات والبحث والتصفية وحفظ المفضلة والمقارنة.', en: 'A customer experience for property discovery, filtering, favorites, and side-by-side comparison.' },
                    { ar: 'إدارة الإعلانات والوسائط والأسعار وحالات النشر من لوحة الإدارة.', en: 'Admin management of listings, media, pricing, and publishing status.' },
                    { ar: 'تحديد المواقع عبر Google Maps ورفع الصور والملفات والفيديوهات عند الحاجة.', en: 'Google Maps locations with image, file, and video upload capabilities when required.' },
                    { ar: 'إدارة المستخدمين والأدوار والطلبات والموارد البشرية والعمليات المالية والتقارير.', en: 'Users, roles, requests, HR, finance operations, and reporting.' },
                    { ar: 'بنية تقنية متعددة المنصات قابلة للتوسع بين تطبيقات الهاتف والويب ولوحة الإدارة.', en: 'A scalable multi-platform architecture across mobile, web, and administration.' },
                  ].map((item) => <li key={item.en} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-500" />{text(item, lang)}</li>)}
                </ul>
                <div className="mt-7 border-t border-slate-200 pt-5 dark:border-white/10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600 dark:text-cyan-400">{isArabic ? 'التقنيات المستخدمة في نموذج راكان' : 'Technologies used in the Rakan example'}</p><p className="mt-3 text-sm font-bold leading-7 text-slate-700 dark:text-slate-200">Flutter · React · Node.js / NestJS · PostgreSQL · Google Maps</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-950 py-16 text-white dark:border-white/10">
          <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{text(copy.contact, lang)}</p><h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight sm:text-4xl">{ui.closing}</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{ui.closingText}</p></div><a href={companyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300">{isArabic ? 'زيارة موقع الشركة' : 'Visit company website'} <ArrowUpRight className="h-4 w-4" /></a></div><div className="mt-10 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-7 text-amber-100"><strong>{isArabic ? 'صلاحية العرض:' : 'Proposal validity:'}</strong> {text(copy.validity, lang)}</div><div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400"><span>{text(copy.project, lang)}</span><span>© {new Date().getFullYear()} Penta</span></div></div>
        </section>
      </main>
    </div>
  );
}

export default App;
