import {
  AlertTriangle,
  Award,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  Languages,
  Moon,
  Monitor,
  Package,
  Shield,
  Smartphone,
  Sun,
  TrendingUp,
  Users,
  Car,
  Wrench
} from 'lucide-react';
import React from 'react';

type Lang = 'ar' | 'en';
type Theme = 'dark' | 'light';

type LocalizedText = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type ModuleCard = {
  title: LocalizedText;
  subtitle: LocalizedText;
  icon: React.ComponentType<{ className?: string }>;
  points: LocalizedList;
  businessNote: LocalizedText;
};

type FlowStep = {
  title: LocalizedText;
  description: LocalizedText;
};

type QuestionGroup = {
  title: LocalizedText;
  questions: LocalizedList;
};

const labels = {
  ar: {
    navTagline: 'عرض فكرة المنتج - نسخة اجتماع',
    heroTitle: 'Salik X – Qater App',
    heroSubtitle:
      'منصة متعددة الخدمات تجمع خدمات السيارات، الحجز، والدفع، وتجارب الترفيه في تجربة واحدة سهلة وقابلة للتوسع.',
    quickSummary: 'الخلاصة السريعة',
    valueProposition: 'القيمة المقترحة للمستخدم',
    modulesTitle: 'تقسيم المنتج (Modules)',
    userFlowTitle: 'User Flow - رحلة المستخدم',
    adminTitle: 'Admin Flow - الهيكل التشغيلي',
    challengeTitle: 'التحدي الحقيقي للمنتج',
    confirmedVsAssumed: 'ما هو مؤكد وما يحتاج تأكيد',
    smartQuestions: 'الأسئلة الذكية في الاجتماع',
    meetingScript: 'صياغة احترافية للعرض داخل الميتنج',
    quickLine: 'أهم 30 ثانية',
    confirmed: 'مؤكد غالبًا من هيكل التطبيق',
    assumptions: 'لا يُفترض إلا بعد تأكيد العميل',
    readytag: 'Meeting Ready',
    userPitchLabel: 'نسخة عربية',
    englishPitchLabel: 'English Version',
    challengeLine:
      'التحدي ليس عرض الخدمات، بل توحيد مسارات حجز وتنفيذ مختلفة جدًا داخل تجربة واحدة بسيطة وقابلة للإدارة.',
    opsLine: 'المنتج يعتمد على التشغيل (Operations) بقدر اعتماده على الواجهة.'
  },
  en: {
    navTagline: 'Product Concept Deck - Meeting Version',
    heroTitle: 'Salik X – Qater App',
    heroSubtitle:
      'A multi-service platform combining automotive services, booking, payment, and leisure experiences in one scalable user journey.',
    quickSummary: 'Quick Summary',
    valueProposition: 'User Value Proposition',
    modulesTitle: 'Product Modules',
    userFlowTitle: 'User Flow',
    adminTitle: 'Admin Flow & Operations',
    challengeTitle: 'Core Product Challenge',
    confirmedVsAssumed: 'Confirmed vs Needs Validation',
    smartQuestions: 'Smart Meeting Questions',
    meetingScript: 'Professional Meeting Narrative',
    quickLine: 'Best 30-Second Line',
    confirmed: 'Likely Confirmed from Product Structure',
    assumptions: 'Do Not Assume Without Confirmation',
    readytag: 'Meeting Ready',
    userPitchLabel: 'Arabic Narrative',
    englishPitchLabel: 'English Narrative',
    challengeLine:
      'The challenge is not listing services; it is standardizing very different booking and fulfillment journeys into one simple product experience.',
    opsLine: 'This product is operations-heavy, not only content-heavy.'
  }
} satisfies Record<Lang, Record<string, string>>;

const quickSummaryPoints: LocalizedList = {
  ar: [
    'Super App / Marketplace متعدد الخدمات.',
    'تجميع خدمات السيارات + الترفيه + الحجز في مكان واحد.',
    'اكتشاف الخدمة ثم الحجز ثم الدفع ثم متابعة التنفيذ.',
    'يميل لنموذج multi-vertical booking platform أكثر من تطبيق سيارات عادي.'
  ],
  en: [
    'A multi-service Super App / Marketplace.',
    'Combines automotive, leisure, and booking experiences in one app.',
    'Discovery -> Booking -> Payment -> Fulfillment tracking.',
    'Closer to a multi-vertical booking platform than a single-use car app.'
  ]
};

const valuePropositionPoints: LocalizedList = {
  ar: [
    'سهولة الوصول للخدمات من تطبيق واحد.',
    'توفير وقت البحث بين مزودين متعددين.',
    'خدمات متعددة (سيارات + تنقل + ترفيه) في نفس الرحلة.',
    'حجز + دفع + متابعة في تجربة موحدة.'
  ],
  en: [
    'One destination for multiple services.',
    'Saves time compared to searching many providers.',
    'Automotive + mobility + leisure in one user journey.',
    'Unified booking, payment, and tracking experience.'
  ]
};

const modules: ModuleCard[] = [
  {
    title: { ar: 'Automotive Mobility Module', en: 'Automotive Mobility Module' },
    subtitle: { ar: 'سيارات VIP / SUV / Limousine', en: 'VIP / SUV / Limousine mobility bookings' },
    icon: Car,
    points: {
      ar: ['استعراض الفئة والسعر.', 'الحجز بالمشوار أو بالساعات.', 'دعم direct booking.', 'Commission per booking محتملة.'],
      en: ['Browse categories and pricing.', 'Trip-based or hourly booking.', 'Supports direct booking.', 'Likely commission-per-booking model.']
    },
    businessNote: {
      ar: 'سؤال مهم: هل أنتم مزود مباشر أم Marketplace بين العميل والمزود؟',
      en: 'Key question: Direct provider model or aggregator marketplace model?'
    }
  },
  {
    title: { ar: 'Car Care Module', en: 'Car Care Module' },
    subtitle: { ar: 'غسيل - تلميع - تظليل - بطارية', en: 'Wash, polishing, tinting, protection, battery' },
    icon: Wrench,
    points: {
      ar: ['خدمة في الموقع On-site.', 'أو خدمة داخل مركز In-store.', 'اختيار نوع السيارة والوقت والمكان.', 'متابعة حالة الطلب.'],
      en: ['On-site service option.', 'In-store/center option.', 'Vehicle type, time slot, and location inputs.', 'Order status tracking.']
    },
    businessNote: {
      ar: 'هذه الوحدة تحتاج Service fulfillment model واضح في الباك-إند.',
      en: 'This module requires a clear service fulfillment model in backend design.'
    }
  },
  {
    title: { ar: 'Inspection & Maintenance', en: 'Inspection & Maintenance Module' },
    subtitle: { ar: 'فحص - زيت - صيانة دورية', en: 'Inspection, engine oil, and maintenance services' },
    icon: Shield,
    points: {
      ar: ['طلب قائم على دورة حياة واضحة.', 'Pending > Confirmed > In Progress > Completed.', 'بيانات إضافية: موديل/سنة/موقع.', 'ليس مجرد Cart + Checkout.'],
      en: ['Lifecycle-based order flow.', 'Pending > Confirmed > In Progress > Completed.', 'Extra inputs: model/year/location.', 'More than simple cart checkout.']
    },
    businessNote: {
      ar: 'النقطة الأساسية: إدارة Order Lifecycle بشكل تشغيلي قوي.',
      en: 'Core point: strong order lifecycle operations management.'
    }
  },
  {
    title: { ar: 'Products / Consumables', en: 'Products / Consumables Module' },
    subtitle: { ar: 'بطاريات ومنتجات مرتبطة بالخدمة', en: 'Batteries and consumables with optional service' },
    icon: Package,
    points: {
      ar: ['شراء منتج فقط.', 'أو منتج + تركيب.', 'إدارة عروض وأسعار.', 'توضيح هل يوجد Commerce layer كامل.'],
      en: ['Product-only purchases.', 'Or product + installation bundles.', 'Promotions and pricing support.', 'Clarify full commerce layer scope.']
    },
    businessNote: {
      ar: 'سؤال مهم: هل كل المنتجات مرتبطة بتنفيذ أم توجد منتجات مستقلة؟',
      en: 'Key question: Are products standalone or always tied to execution service?'
    }
  },
  {
    title: { ar: 'Leisure & Entertainment', en: 'Leisure & Entertainment Module' },
    subtitle: { ar: 'يخت - أنشطة - رحلات - تجارب', en: 'Yachts, activities, trips, and experiential bookings' },
    icon: Globe,
    points: {
      ar: ['توسيع التطبيق خارج نطاق السيارات.', 'حجوزات بعدد أشخاص ومواعيد.', 'دعم Seasonal offers.', 'يوجه المنتج نحو Lifestyle ecosystem.'],
      en: ['Expands the app beyond automotive services.', 'People/date/time-based bookings.', 'Supports seasonal offers.', 'Moves product toward lifestyle ecosystem.']
    },
    businessNote: {
      ar: 'المنتج يتطور من Car App إلى Lifestyle Booking Ecosystem.',
      en: 'The product evolves from car app to lifestyle booking ecosystem.'
    }
  }
];

const userFlow: FlowStep[] = [
  {
    title: { ar: '1) Onboarding / Authentication', en: '1) Onboarding / Authentication' },
    description: {
      ar: 'تسجيل دخول عبر الهاتف/OTP (أساسي غالبًا) مع خيارات إضافية (إيميل/سوشال).',
      en: 'Login via phone/OTP (likely primary), with optional email/social methods.'
    }
  },
  {
    title: { ar: '2) Home / Discovery', en: '2) Home / Discovery' },
    description: {
      ar: 'الصفحة الرئيسية كسطح بيع واكتشاف: عروض، خدمات مميزة، أقسام رئيسية.',
      en: 'Home acts as a discovery and sales surface: offers, featured services, and category entry points.'
    }
  },
  {
    title: { ar: '3) Category Browsing', en: '3) Category Browsing' },
    description: {
      ar: 'تصفح الفئة مع تفاصيل السعر والمدة والشروط والتوفر.',
      en: 'Browse category details including pricing, duration, terms, and availability.'
    }
  },
  {
    title: { ar: '4) Service Detail', en: '4) Service Detail' },
    description: {
      ar: 'شاشة تحويل Conversion: توضيح القيمة + CTA للحجز.',
      en: 'Conversion screen: service value clarity + direct booking CTA.'
    }
  },
  {
    title: { ar: '5) Booking Configuration', en: '5) Booking Configuration' },
    description: {
      ar: 'Dynamic Form مختلف حسب نوع الخدمة (سيارة/ليموزين/يخت/نشاط).',
      en: 'Dynamic booking form changes by service type (wash/limousine/yacht/activity).'
    }
  },
  {
    title: { ar: '6) Cart / Checkout', en: '6) Cart / Checkout' },
    description: {
      ar: 'مراجعة الحجز، كوبون، ملاحظات، عنوان، والسعر النهائي.',
      en: 'Booking review, coupon, notes, address, and final pricing confirmation.'
    }
  },
  {
    title: { ar: '7) Payment', en: '7) Payment' },
    description: {
      ar: 'سيناريوهات دفع متعددة: prepaid / partial / pay-later حسب الخدمة.',
      en: 'Multiple payment scenarios: prepaid, partial, or pay-later by service type.'
    }
  },
  {
    title: { ar: '8) Confirmation & Tracking', en: '8) Confirmation & Tracking' },
    description: {
      ar: 'رقم الحجز + حالة التنفيذ + إشعارات + قنوات تواصل.',
      en: 'Booking ID, fulfillment status, notifications, and communication options.'
    }
  },
  {
    title: { ar: '9) My Bookings', en: '9) My Bookings' },
    description: {
      ar: 'حجوزات حالية/سابقة/ملغاة + إعادة الحجز + إيصالات.',
      en: 'Current/past/cancelled bookings with rebook and invoice access.'
    }
  },
  {
    title: { ar: '10) Profile & Support', en: '10) Profile & Support' },
    description: {
      ar: 'اللغة، العناوين، المفضلة، طرق الدفع، الدعم، والشروط.',
      en: 'Language, addresses, favorites, payment methods, support, and legal pages.'
    }
  }
];

const adminRoles = [
  {
    title: { ar: 'Super Admin', en: 'Super Admin' },
    points: {
      ar: ['تحكم كامل بالنظام.', 'إدارة التسعير والمحتوى.', 'متابعة التقارير والمؤشرات.'],
      en: ['Full system control.', 'Pricing and content governance.', 'Reports and KPIs oversight.']
    }
  },
  {
    title: { ar: 'Operations Admin', en: 'Operations Admin' },
    points: {
      ar: ['متابعة الحجوزات والتنفيذ.', 'إدارة الجدولة والتعيين.', 'التعامل مع الاستثناءات والإلغاءات.'],
      en: ['Booking and fulfillment operations.', 'Scheduling and assignment handling.', 'Exceptions and cancellations handling.']
    }
  },
  {
    title: { ar: 'Vendor / Partner Admin', en: 'Vendor / Partner Admin' },
    points: {
      ar: ['إدارة خدمات المزود.', 'التوفر والمواعيد.', 'الطلبات والأسعار حسب الصلاحية.'],
      en: ['Manage partner services.', 'Availability and slots.', 'Orders and pricing under permissions.']
    }
  }
];

const adminCoreAreas: LocalizedList = {
  ar: [
    'User Management',
    'Service Catalog Management',
    'Booking & Operations Management',
    'Schedule & Availability Management',
    'Pricing & Promotions',
    'Payments & Refunds',
    'Content Management',
    'Analytics & Reports'
  ],
  en: [
    'User Management',
    'Service Catalog Management',
    'Booking & Operations Management',
    'Schedule & Availability Management',
    'Pricing & Promotions',
    'Payments & Refunds',
    'Content Management',
    'Analytics & Reports'
  ]
};

const confirmedItems: LocalizedList = {
  ar: [
    'تصنيفات متعددة للخدمات.',
    'تجربة حجز لخدمات سيارات وأنشطة.',
    'ملف شخصي ومفضلة وسجل حجوزات.',
    'دعم عربي / إنجليزي.',
    'تتبع حالة الطلب بعد الحجز.'
  ],
  en: [
    'Multi-category service architecture.',
    'Booking journeys for automotive and leisure services.',
    'Profile, favorites, and booking history.',
    'Arabic/English support.',
    'Post-booking status tracking.'
  ]
};

const assumptionItems: LocalizedList = {
  ar: [
    'دفع إلكتروني شامل لكل الخدمات.',
    'لوحة تحكم كاملة لجميع السيناريوهات.',
    'Multi-vendor access production-ready.',
    'Dispatch آلي كامل داخل النظام.',
    'Refund automation متكامل.',
    'تكاملات خارجية (Booking/Hotels) جاهزة فعليًا.'
  ],
  en: [
    'Fully enabled online payment for all services.',
    'Comprehensive production-grade admin for all scenarios.',
    'Production-ready multi-vendor access.',
    'Fully automated dispatch workflows.',
    'Complete refund automation engine.',
    'Live external integrations (Booking/Hotels).'
  ]
};

const smartQuestions: QuestionGroup[] = [
  {
    title: { ar: 'A) أسئلة البزنس', en: 'A) Business Questions' },
    questions: {
      ar: [
        'ما هو التركيز الحالي: سيارات أم ترفيه أم Super App كامل؟',
        'ما أكثر الأقسام تحقيقًا للإيراد؟',
        'هل التشغيل مباشر أم عبر مزودين؟',
        'ما هي شخصية المستخدم الأساسية (Residents / Tourists / Premium)؟'
      ],
      en: [
        'What is the current focus: automotive, leisure, or full super app?',
        'Which categories generate the highest revenue today?',
        'Are you operating directly or via partners/vendors?',
        'What is the primary user persona (residents, tourists, premium users)?'
      ]
    }
  },
  {
    title: { ar: 'B) أسئلة المنتج', en: 'B) Product Questions' },
    questions: {
      ar: [
        'ما الجزء المشترك في الحجز بين كل الفئات؟',
        'ما الخدمات التي تحتاج Scheduling مقابل تنفيذ فوري؟',
        'هل لكل فئة Dynamic form مستقل؟',
        'هل توجد منتجات مستقلة أم كلها مرتبطة بخدمة؟'
      ],
      en: [
        'What is the shared booking core across categories?',
        'Which services are scheduled vs instant fulfillment?',
        'Is each category using its own dynamic form logic?',
        'Are products standalone or always tied to services?'
      ]
    }
  },
  {
    title: { ar: 'C) أسئلة التشغيل', en: 'C) Operations Questions' },
    questions: {
      ar: [
        'كيف تتم إدارة الطلب بعد التأكيد؟',
        'هل هناك فريق Dispatch داخلي؟',
        'كيف يتم التحكم في التوفر والـ capacity؟',
        'ما آلية الإلغاء والاسترجاع؟'
      ],
      en: [
        'How is fulfillment managed post-confirmation?',
        'Is there an internal dispatch team?',
        'How do you manage slots and capacity?',
        'How are cancellations and refunds handled?'
      ]
    }
  },
  {
    title: { ar: 'D) أسئلة التقنية والإدارة', en: 'D) Tech & Admin Questions' },
    questions: {
      ar: [
        'هل توجد لوحة تشغيل منفصلة عن إدارة المحتوى؟',
        'هل يوجد Multi-vendor access أم Internal users فقط؟',
        'كيف تُدار الأسعار بين الفئات المختلفة؟',
        'هل لديكم Analytics للخدمات الأعلى حجزًا وتكرار المستخدمين؟'
      ],
      en: [
        'Do you have a dedicated operations panel beyond CMS?',
        'Multi-vendor access or internal admin users only?',
        'How is pricing managed across categories?',
        'Do you track top-booked services and repeat users analytics?'
      ]
    }
  }
];

const arabicPitch =
  'من فهمي الأولي، Salik X عبارة عن منصة متعددة الخدمات تجمع خدمات السيارات والتنقل والأنشطة في تجربة حجز وتنفيذ موحدة. المستخدم يكتشف الخدمة، يحدد التفاصيل، يحجز، يدفع، ثم يتابع التنفيذ داخل نفس التطبيق. لذلك المنتج أقرب إلى booking and fulfillment-driven multi-service marketplace وليس مجرد كتالوج خدمات.';

const englishPitch =
  'From my initial understanding, Salik X is a multi-service marketplace that combines automotive services, mobility offerings, and leisure bookings in one product experience. Users can discover services, configure booking details, pay, and track fulfillment within the same app. So it behaves more like a booking-and-fulfillment platform than a simple service catalog.';

const quickThirtySeconds = {
  ar: 'أرى المنتج كمنصة حجز وتنفيذ متعددة الخدمات، مركزها راحة المستخدم في خدمات السيارات مع توسع واضح نحو خدمات الحياة والترفيه. وأهم نقطة نحتاج فهمها بعمق هي نموذج التشغيل: إدارة المزودين، التنفيذ بعد الحجز، وتوحيد كل الفئات تحت تجربة واحدة.',
  en: 'I see the product as a multi-service booking and fulfillment platform, centered on automotive convenience and expanding into lifestyle and leisure. The key area to validate deeper is the operating model: vendor management, post-booking execution, and how all categories are unified under one scalable experience.'
};

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const [theme, setTheme] = React.useState<Theme>('dark');
  const isArabic = lang === 'ar';
  const isDark = theme === 'dark';

  const ui = {
    page: isDark ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900',
    orbA: isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/45',
    orbB: isDark ? 'bg-blue-600/20' : 'bg-blue-300/40',
    header: isDark
      ? 'sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'
      : 'sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl',
    navTagline: isDark ? 'text-slate-300' : 'text-slate-600',
    controlWrap: isDark
      ? 'inline-flex items-center rounded-xl border border-white/15 bg-white/5 p-1'
      : 'inline-flex items-center rounded-xl border border-slate-300 bg-white p-1',
    controlIcon: isDark ? 'text-slate-300' : 'text-slate-600',
    toggleActive: isDark ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-white',
    toggleIdle: isDark ? 'text-slate-200 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100',
    hero: isDark
      ? 'rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 shadow-2xl'
      : 'rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-8 shadow-sm',
    badge: isDark
      ? 'rounded-full border border-cyan-300/30 bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200'
      : 'rounded-full border border-cyan-300/70 bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700',
    chip: isDark
      ? 'rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300'
      : 'rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-700',
    heroText: isDark ? 'text-slate-200' : 'text-slate-700',
    section: isDark
      ? 'rounded-3xl border border-white/10 bg-white/[0.04] p-8'
      : 'rounded-3xl border border-slate-200 bg-white p-8 shadow-sm',
    sectionAlert: isDark
      ? 'rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 p-8'
      : 'rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8',
    moduleCard: isDark
      ? 'rounded-2xl border border-white/10 bg-slate-900/50 p-5'
      : 'rounded-2xl border border-slate-200 bg-slate-50 p-5',
    subCard: isDark
      ? 'rounded-xl border border-white/10 bg-slate-900/40 p-4'
      : 'rounded-xl border border-slate-200 bg-slate-50 p-4',
    textSoft: isDark ? 'text-slate-200' : 'text-slate-700',
    textSubtle: isDark ? 'text-slate-300' : 'text-slate-600',
    textAccent: isDark ? 'text-cyan-200' : 'text-cyan-700',
    noteCard: isDark
      ? 'rounded-xl border border-cyan-300/20 bg-cyan-500/10 p-3 text-xs text-cyan-100'
      : 'rounded-xl border border-cyan-300/50 bg-cyan-50 p-3 text-xs text-cyan-800',
    confirmed: isDark
      ? 'rounded-3xl border border-emerald-300/20 bg-emerald-400/10 p-8'
      : 'rounded-3xl border border-emerald-300 bg-emerald-50 p-8',
    assumptions: isDark
      ? 'rounded-3xl border border-amber-300/20 bg-amber-400/10 p-8'
      : 'rounded-3xl border border-amber-300 bg-amber-50 p-8',
    pitchCard: isDark
      ? 'rounded-2xl border border-white/10 bg-slate-900/40 p-5'
      : 'rounded-2xl border border-slate-200 bg-white p-5',
    quickLine: isDark
      ? 'rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-5'
      : 'rounded-2xl border border-cyan-300/60 bg-cyan-50 p-5'
  };

  return (
    <div className={ui.page} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-[-10rem] left-[-8rem] h-96 w-96 rounded-full blur-3xl ${ui.orbA}`} />
        <div className={`absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full blur-3xl ${ui.orbB}`} />
      </div>

      <header className={ui.header}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{labels[lang].heroTitle}</h1>
            <p className={`text-sm mt-1 ${ui.navTagline}`}>{labels[lang].navTagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <div className={ui.controlWrap}>
              <Languages className={`w-4 h-4 mx-2 ${ui.controlIcon}`} />
              <button
                type="button"
                onClick={() => setLang('ar')}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  lang === 'ar' ? ui.toggleActive : ui.toggleIdle
                }`}
              >
                العربية
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
                  lang === 'en' ? ui.toggleActive : ui.toggleIdle
                }`}
              >
                English
              </button>
            </div>

            <div className={ui.controlWrap}>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition inline-flex items-center gap-1 ${
                  theme === 'dark' ? ui.toggleActive : ui.toggleIdle
                }`}
                aria-pressed={theme === 'dark'}
              >
                <Moon className="w-4 h-4" />
                <span>{lang === 'ar' ? 'داكن' : 'Dark'}</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition inline-flex items-center gap-1 ${
                  theme === 'light' ? ui.toggleActive : ui.toggleIdle
                }`}
                aria-pressed={theme === 'light'}
              >
                <Sun className="w-4 h-4" />
                <span>{lang === 'ar' ? 'فاتح' : 'Light'}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <section className={ui.hero}>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={ui.badge}>
              {labels[lang].readytag}
            </span>
            <span className={ui.chip}>Super App</span>
            <span className={ui.chip}>Marketplace</span>
            <span className={ui.chip}>Booking + Fulfillment</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{labels[lang].heroTitle}</h2>
          <p className={`text-lg max-w-4xl leading-relaxed ${ui.heroText}`}>{labels[lang].heroSubtitle}</p>
        </section>

        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <StatCard
            icon={<FileText className="w-6 h-6 text-cyan-300" />}
            title={labels[lang].quickSummary}
            items={quickSummaryPoints[lang]}
            isDark={isDark}
          />
          <StatCard
            icon={<TrendingUp className="w-6 h-6 text-cyan-300" />}
            title={labels[lang].valueProposition}
            items={valuePropositionPoints[lang]}
            isDark={isDark}
          />
          <MiniHighlight icon={<Award className="w-6 h-6 text-cyan-300" />} text={labels[lang].challengeLine} isDark={isDark} />
          <MiniHighlight icon={<Monitor className="w-6 h-6 text-cyan-300" />} text={labels[lang].opsLine} isDark={isDark} />
        </section>

        <section className={ui.section}>
          <SectionHeader icon={<Smartphone className="w-6 h-6 text-cyan-300" />} title={labels[lang].modulesTitle} isDark={isDark} />
          <div className="grid lg:grid-cols-2 gap-5">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <div key={module.title.en} className={ui.moduleCard}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-cyan-500/15 p-2">
                      <Icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{module.title[lang]}</h3>
                      <p className={`text-sm ${ui.textSubtle}`}>{module.subtitle[lang]}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {module.points[lang].map((point) => (
                      <li key={point} className={`flex gap-2 text-sm ${ui.textSoft}`}>
                        <CheckCircle className="w-4 h-4 text-cyan-300 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={ui.noteCard}>{module.businessNote[lang]}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid xl:grid-cols-2 gap-6">
          <div className={ui.section}>
            <SectionHeader icon={<Users className="w-6 h-6 text-cyan-300" />} title={labels[lang].userFlowTitle} isDark={isDark} />
            <div className="space-y-3">
              {userFlow.map((step) => (
                <div key={step.title.en} className={ui.subCard}>
                  <h4 className={`font-semibold mb-1 ${ui.textAccent}`}>{step.title[lang]}</h4>
                  <p className={`text-sm leading-relaxed ${ui.textSoft}`}>{step.description[lang]}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={ui.section}>
            <SectionHeader icon={<Monitor className="w-6 h-6 text-cyan-300" />} title={labels[lang].adminTitle} isDark={isDark} />

            <div className="grid gap-3 mb-5">
              {adminRoles.map((role) => (
                <div key={role.title.en} className={ui.subCard}>
                  <h4 className={`font-semibold mb-2 ${ui.textAccent}`}>{role.title[lang]}</h4>
                  <ul className={`space-y-1 text-sm ${ui.textSoft}`}>
                    {role.points[lang].map((point) => (
                      <li key={point} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-300 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className={ui.subCard}>
              <h4 className={`font-semibold mb-3 ${ui.textAccent}`}>Core Admin Components</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {adminCoreAreas[lang].map((area) => (
                  <div
                    key={area}
                    className={`rounded-lg border px-3 py-2 text-sm ${
                      isDark ? 'border-white/10 text-slate-200' : 'border-slate-200 text-slate-700 bg-white'
                    }`}
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <SectionHeader icon={<AlertTriangle className="w-6 h-6 text-cyan-300" />} title={labels[lang].challengeTitle} isDark={isDark} />
          <p className={`leading-relaxed text-lg ${ui.textSoft}`}>{labels[lang].challengeLine}</p>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div className={ui.confirmed}>
            <SectionHeader icon={<CheckCircle className="w-6 h-6 text-emerald-200" />} title={labels[lang].confirmed} isDark={isDark} />
            <ul className={`space-y-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              {confirmedItems[lang].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-200 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={ui.assumptions}>
            <SectionHeader icon={<AlertTriangle className="w-6 h-6 text-amber-200" />} title={labels[lang].assumptions} isDark={isDark} />
            <ul className={`space-y-2 ${isDark ? 'text-slate-100' : 'text-slate-800'}`}>
              {assumptionItems[lang].map((item) => (
                <li key={item} className="flex gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-200 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={ui.section}>
          <SectionHeader icon={<FileText className="w-6 h-6 text-cyan-300" />} title={labels[lang].smartQuestions} isDark={isDark} />
          <div className="grid xl:grid-cols-2 gap-4">
            {smartQuestions.map((group) => (
              <div key={group.title.en} className={ui.moduleCard}>
                <h3 className={`font-bold mb-3 ${ui.textAccent}`}>{group.title[lang]}</h3>
                <ul className={`space-y-2 text-sm ${ui.textSoft}`}>
                  {group.questions[lang].map((q) => (
                    <li key={q} className="flex gap-2">
                      <Clock className="w-4 h-4 text-cyan-300 mt-0.5" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.sectionAlert}>
          <SectionHeader icon={<TrendingUp className="w-6 h-6 text-cyan-300" />} title={labels[lang].meetingScript} isDark={isDark} />

          <div className="grid lg:grid-cols-2 gap-5 mb-6">
            <div className={ui.pitchCard}>
              <h3 className={`font-bold mb-3 ${ui.textAccent}`}>{labels[lang].userPitchLabel}</h3>
              <p className={`leading-relaxed ${ui.textSoft}`}>{arabicPitch}</p>
            </div>

            <div className={ui.pitchCard}>
              <h3 className={`font-bold mb-3 ${ui.textAccent}`}>{labels[lang].englishPitchLabel}</h3>
              <p className={`leading-relaxed ${ui.textSoft}`}>{englishPitch}</p>
            </div>
          </div>

          <div className={ui.quickLine}>
            <h3 className={`font-bold mb-2 ${isDark ? 'text-cyan-100' : 'text-cyan-800'}`}>{labels[lang].quickLine}</h3>
            <p className={`leading-relaxed ${ui.textSoft}`}>{quickThirtySeconds[lang]}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({ icon, title, isDark }: { icon: React.ReactNode; title: string; isDark: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="rounded-lg bg-cyan-500/15 p-2">{icon}</div>
      <h2 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{title}</h2>
    </div>
  );
}

function StatCard({
  icon,
  title,
  items,
  isDark
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  isDark: boolean;
}) {
  return (
    <div className={isDark ? 'rounded-2xl border border-white/10 bg-white/[0.04] p-5' : 'rounded-2xl border border-slate-200 bg-white p-5 shadow-sm'}>
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-bold">{title}</h3>
      </div>
      <ul className={`space-y-2 text-sm ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <CheckCircle className="w-4 h-4 text-cyan-300 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniHighlight({ icon, text, isDark }: { icon: React.ReactNode; text: string; isDark: boolean }) {
  return (
    <div
      className={
        isDark
          ? 'rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-5 flex flex-col justify-between'
          : 'rounded-2xl border border-cyan-300/50 bg-cyan-50 p-5 flex flex-col justify-between'
      }
    >
      <div className="mb-3">{icon}</div>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-cyan-50' : 'text-cyan-800'}`}>{text}</p>
    </div>
  );
}
