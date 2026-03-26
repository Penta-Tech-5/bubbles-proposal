import {
  AlertTriangle,
  Award,
  Car,
  CheckCircle,
  Clock,
  FileText,
  Languages,
  Monitor,
  Package,
  PhoneCall,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Wrench
} from 'lucide-react';
import React from 'react';

type Lang = 'ar' | 'en';

type LocalizedText = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type InfoCard = {
  title: LocalizedText;
  icon: React.ComponentType<{ className?: string }>;
  points: LocalizedList;
};

type FlowStep = {
  title: LocalizedText;
  description: LocalizedText;
};

type Milestone = {
  amount: LocalizedText;
  label: LocalizedText;
};

const labels = {
  ar: {
    proposalTag: 'عرض سعر تفصيلي',
    projectName: 'Qater Car',
    heroText:
      'منصة مخصصة لإدارة وحجز السيارات والرحلات فقط، وتتكون من تطبيق موبايل + موقع ويب + لوحة تحكم أدمن.',
    companyName: 'Mr Ghanem Media & Solutions',
    contactTitle: 'للتواصل',
    overviewTitle: 'نطاق المشروع المعتمد',
    categoriesTitle: 'الأقسام الأساسية (3 فقط)',
    exclusionsTitle: 'غير مشمول داخل النظام',
    bookingLogicTitle: 'منطق الحجز حسب الخدمة',
    featuresTitle: 'خصائص النظام الأساسية',
    adminTitle: 'مميزات لوحة تحكم الأدمن',
    flowTitle: 'System Flow',
    userFlow: 'User Flow (فلو المستخدم)',
    adminFlow: 'Admin Flow (فلو الأدمن)',
    pricingTitle: 'التكلفة والدفعات',
    timelineLabel: 'مدة التنفيذ',
    totalLabel: 'التكلفة الإجمالية',
    annualOpsLabel: 'رسوم التشغيل السنوية',
    includesTitle: 'ما يشمله مبلغ التنفيذ (15,000)',
    annualOpsDetailsTitle: 'تفاصيل رسوم التشغيل السنوية (2,000)',
    notesTitle: 'ملاحظات تنفيذية'
  },
  en: {
    proposalTag: 'Detailed Price Proposal',
    projectName: 'Qater Car',
    heroText:
      'A dedicated platform for vehicle and tours booking management only, delivered as Mobile App + Website + Admin Dashboard.',
    companyName: 'Mr Ghanem Media & Solutions',
    contactTitle: 'Contact',
    overviewTitle: 'Approved Project Scope',
    categoriesTitle: 'Core Categories (Only 3)',
    exclusionsTitle: 'Out of Scope',
    bookingLogicTitle: 'Booking Logic per Service',
    featuresTitle: 'Core System Features',
    adminTitle: 'Admin Dashboard Capabilities',
    flowTitle: 'System Flow',
    userFlow: 'User Flow',
    adminFlow: 'Admin Flow',
    pricingTitle: 'Pricing & Payment Plan',
    timelineLabel: 'Delivery Timeline',
    totalLabel: 'Total Cost',
    annualOpsLabel: 'Annual Operating Cost',
    includesTitle: 'What Is Included in Implementation Cost (QAR 15,000)',
    annualOpsDetailsTitle: 'Annual Operating Cost Scope (QAR 2,000)',
    notesTitle: 'Execution Notes'
  }
} satisfies Record<Lang, Record<string, string>>;

const overviewCards: InfoCard[] = [
  {
    title: { ar: 'مكونات المشروع', en: 'Project Components' },
    icon: Smartphone,
    points: {
      ar: ['تطبيق موبايل.', 'موقع ويب.', 'لوحة تحكم أدمن.'],
      en: ['Mobile app.', 'Website.', 'Admin dashboard.']
    }
  },
  {
    title: { ar: 'نموذج التشغيل', en: 'Operating Model' },
    icon: Shield,
    points: {
      ar: ['بدون Vendor system.', 'بدون مزودين خارجيين.', 'بدون بوابات دفع أونلاين.'],
      en: ['No vendor system.', 'No external service providers.', 'No online payment gateway.']
    }
  },
  {
    title: { ar: 'الدخول والتسجيل', en: 'Authentication' },
    icon: Users,
    points: {
      ar: ['تسجيل/دخول عبر OTP محلي فقط.', 'لا يوجد Social/Email login في النطاق الحالي.'],
      en: ['Local OTP-only authentication.', 'No social/email login in current scope.']
    }
  }
];

const categories: InfoCard[] = [
  {
    title: { ar: 'Limousine', en: 'Limousine' },
    icon: Car,
    points: {
      ar: ['حجز عربية بسواق.', 'مدة الحجز: 12 ساعة.', 'تسجيل الحجز في النظام + الهيستوري + لوحة الأدمن.'],
      en: ['Car with driver booking.', 'Booking duration: 12 hours.', 'Booking logged for user, history, and admin dashboard.']
    }
  },
  {
    title: { ar: 'Car Lease', en: 'Car Lease' },
    icon: Wrench,
    points: {
      ar: [
        'حجز عربية بدون سواق.',
        'مدة الحجز: 24 ساعة.',
        'اختيار طريقة الاستلام: استلام شخصي أو إرسال السيارة للعميل.',
        'التأمين يتم دفعه خارج التطبيق (للأدمن/عند الاستلام).'
      ],
      en: [
        'Car booking without driver.',
        'Booking duration: 24 hours.',
        'Pickup mode: self-pickup or car delivery.',
        'Security deposit is paid outside the app (to admin/on handover).'
      ]
    }
  },
  {
    title: { ar: 'Tours', en: 'Tours' },
    icon: TrendingUp,
    points: {
      ar: ['حجز رحلات فقط.', 'نفس دورة الحجز والتتبع داخل النظام.'],
      en: ['Tours booking only.', 'Same booking and tracking lifecycle inside system.']
    }
  }
];

const exclusions: LocalizedList = {
  ar: ['لا يوجد دفع أونلاين داخل التطبيق.', 'لا يوجد Vendor system.', 'لا يوجد مزودين خدمة خارجيين.'],
  en: ['No in-app online payment.', 'No vendor system.', 'No external service-provider network.']
};

const coreFeatures: LocalizedList = {
  ar: [
    'بيانات كل سيارة: صور + بيانات + تفاصيل (تظهر في الموبايل والويب والداش بورد).',
    'الشات بين العميل والأدمن يفتح فقط بعد إنشاء الحجز.',
    'History كامل للمستخدم (حجوزات حالية/سابقة + تفاصيل كل حجز).',
    'إشعارات للأدمن: حجز جديد / إلغاء حجز.',
    'إشعارات للعميل: تأكيد الحجز + تنبيه قرب انتهاء المدة (مثال قبل 6 ساعات).',
    'تنبيهات وقت الانتهاء تصل للأدمن أيضًا.'
  ],
  en: [
    'Each car has images, data, and details visible on app, web, and dashboard.',
    'Customer-admin chat opens only after booking creation.',
    'Full customer history: active and past bookings with details.',
    'Admin notifications: new booking and cancellation alerts.',
    'Customer notifications: booking confirmation and end-time alerts (e.g., 6 hours before).',
    'Admin also receives timing alerts for booking expirations.'
  ]
};

const adminFeatures: LocalizedList = {
  ar: [
    'إدارة الحجوزات بالكامل (النوع، الموعد، الحالة).',
    'متابعة حالة السيارات: متاحة / محجوزة / الأوقات المشغولة.',
    'التحقق من المواعيد المتاحة والمشغولة قبل أي حجز جديد.',
    'إدارة الشات ومتابعة كل محادثة مرتبطة بالحجز.',
    'إدارة العملاء وبياناتهم وحجوزاتهم.',
    'إدارة العربيات: إضافة/تعديل/صور/تفاصيل.',
    'تسجيل الفلوس الداخلة من كل عربية.'
  ],
  en: [
    'Full booking management (type, schedule, status).',
    'Vehicle availability tracking (free/booked/busy slots).',
    'Conflict prevention via occupied vs available time validation.',
    'Chat management for all booking-linked conversations.',
    'Customer management with profile and booking visibility.',
    'Car management: create/update/images/specifications.',
    'Revenue logging per vehicle.'
  ]
};

const userFlow: FlowStep[] = [
  {
    title: { ar: '1) تسجيل الدخول', en: '1) Login' },
    description: { ar: 'المستخدم يدخل عبر OTP محلي فقط.', en: 'User signs in via local OTP only.' }
  },
  {
    title: { ar: '2) الصفحة الرئيسية', en: '2) Home' },
    description: { ar: 'عرض الفئات الثلاثة: Limousine / Car Lease / Tours.', en: 'Show the 3 categories: Limousine / Car Lease / Tours.' }
  },
  {
    title: { ar: '3) اختيار الخدمة', en: '3) Select Service' },
    description: { ar: 'استعراض العناصر مع الصور والتفاصيل والبيانات.', en: 'Browse entries with images, details, and specs.' }
  },
  {
    title: { ar: '4) تأكيد الحجز', en: '4) Confirm Booking' },
    description: { ar: 'اختيار التاريخ والوقت ونوع الخدمة، ثم إنشاء الحجز.', en: 'Select date, time, and service options, then create booking.' }
  },
  {
    title: { ar: '5) ما بعد الحجز', en: '5) Post Booking' },
    description: { ar: 'إضافة للهيستوري + فتح شات مع الأدمن + إرسال إشعارات.', en: 'Added to history + chat opens with admin + notifications triggered.' }
  }
];

const adminFlow: FlowStep[] = [
  {
    title: { ar: '1) استقبال التنبيهات', en: '1) Receive Alerts' },
    description: { ar: 'تنبيهات فورية عند الحجز الجديد أو الإلغاء.', en: 'Instant alerts on new bookings and cancellations.' }
  },
  {
    title: { ar: '2) إدارة الحجوزات', en: '2) Manage Bookings' },
    description: { ar: 'متابعة النوع، الوقت، الحالة، وربطها بالعربية.', en: 'Track type, timing, status, and linked vehicle.' }
  },
  {
    title: { ar: '3) إدارة جدول السيارات', en: '3) Vehicle Scheduling' },
    description: { ar: 'عرض الأوقات المشغولة والمتاحة لكل عربية لمنع التعارض.', en: 'Show occupied and available slots per vehicle to avoid conflicts.' }
  },
  {
    title: { ar: '4) إدارة الشات والعملاء', en: '4) Chat & Customers' },
    description: { ar: 'متابعة كل المحادثات والحجوزات الخاصة بكل عميل.', en: 'Manage all chat threads and each customer booking history.' }
  },
  {
    title: { ar: '5) إدارة العربيات والفلوس', en: '5) Cars & Revenue Logs' },
    description: { ar: 'تحديث بيانات السيارات وتسجيل الفلوس الداخلة من كل عربية.', en: 'Update vehicle data and log incoming revenue per car.' }
  }
];

const milestones: Milestone[] = [
  {
    amount: { ar: '2,500 ريال قطري', en: 'QAR 2,500' },
    label: { ar: 'مقدم عند بدء المشروع', en: 'Advance payment at kickoff' }
  },
  {
    amount: { ar: '2,500 ريال قطري', en: 'QAR 2,500' },
    label: { ar: 'بعد الانتهاء من التصميم', en: 'After design completion' }
  },
  {
    amount: { ar: '5,000 ريال قطري', en: 'QAR 5,000' },
    label: { ar: 'بعد تسليم التطبيق', en: 'After mobile app delivery' }
  },
  {
    amount: { ar: '5,000 ريال قطري', en: 'QAR 5,000' },
    label: { ar: 'بعد تسليم الويب سايت', en: 'After website delivery' }
  }
];

const includes: LocalizedList = {
  ar: [
    'تنفيذ وتسليم: تطبيق موبايل Android و iOS لليوزر والأدمن.',
    'ويب سايت مخصص لليوزر.',
    'تطبيق ديسكتوب مخصص للأدمن.',
    'تنفيذ منطق الحجز للأقسام الثلاثة (Limousine / Car Lease / Tours).',
    'تفعيل OTP محلي وتطوير الشات المرتبط بالحجوزات والإشعارات وسجل الحجوازت.',
    'دعم فني مجاني لمدة شهرين بعد التسليم.',
  ],
  en: [
    'Delivery of Android & iOS mobile apps for both user and admin.',
    'Delivery of a user-facing website.',
    'Delivery of an admin desktop application.',
    'Implementation of booking logic for Limousine / Car Lease / Tours.',
    'Local OTP integration + booking-linked chat, notifications, and history.',
    'Two months of free technical support after delivery.'
  ]
};

const annualOpsDetails: LocalizedList = {
  ar: [
    'هذه التكلفة منفصلة عن مبلغ التنفيذ 15,000 ريال قطري.',
    'رسوم التشغيل السنوية: 2,000 ريال قطري.',
    'تشمل السيرفر، ومتابعة التطبيقات على Google Play و Apple App Store.',
    'تشمل دعمًا فنيًا تشغيليًا: إصلاح الأخطاء، والتعامل مع تحديثات Google/Apple المطلوبة، ومعالجة أعطال السيرفر لضمان عمل التطبيق والويب سايت بأفضل كفاءة وبشكل مستمر.'
  ],
  en: [
    'This fee is separate from the QAR 15,000 implementation cost.',
    'Annual operating fee: QAR 2,000.',
    'Includes server subscription and app follow-up on Google Play and Apple App Store.',
    'Includes operational technical support: bug fixes, required Google/Apple policy update handling, and server issue resolution to keep the app and website running with high stability and performance.'
  ]
};

const executionNotes: LocalizedList = {
  ar: [
    'مدة التنفيذ: 3 شهور بحد أقصى.',
    'المنصة تركز على الحجز والإدارة فقط بدون دفع أونلاين.',
    'تأكيد التأمين الخاص بـ Car Lease يتم خارج التطبيق.'
  ],
  en: [
    'Maximum implementation timeline: 3 months.',
    'Platform scope is booking and management only, without online payment.',
    'Car Lease security deposit is handled outside the app.'
  ]
};

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const logoCandidates = ['/logo.png', 'logo.png', './logo.png', '/public/logo.png'];
  const [logoIndex, setLogoIndex] = React.useState(0);

  const isDark = true;
  const isArabic = lang === 'ar';

  const ui = {
    page: isDark ? 'min-h-screen bg-slate-950 text-slate-100' : 'min-h-screen bg-slate-50 text-slate-900',
    orbA: isDark ? 'bg-cyan-500/20' : 'bg-cyan-300/45',
    orbB: isDark ? 'bg-blue-600/20' : 'bg-blue-300/40',
    header: isDark
      ? 'sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl'
      : 'sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl',
    subtle: isDark ? 'text-slate-300' : 'text-slate-600',
    control: isDark
      ? 'inline-flex items-center rounded-xl border border-white/15 bg-white/5 p-1'
      : 'inline-flex items-center rounded-xl border border-slate-300 bg-white p-1',
    active: isDark ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-white',
    idle: isDark ? 'text-slate-200 hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100',
    hero: isDark
      ? 'rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.04] p-8 shadow-2xl'
      : 'rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-8 shadow-sm',
    section: isDark
      ? 'rounded-3xl border border-white/10 bg-white/[0.04] p-8'
      : 'rounded-3xl border border-slate-200 bg-white p-8 shadow-sm',
    card: isDark
      ? 'rounded-2xl border border-white/10 bg-slate-900/40 p-5'
      : 'rounded-2xl border border-slate-200 bg-slate-50 p-5',
    note: isDark
      ? 'rounded-2xl border border-cyan-300/20 bg-cyan-500/10 p-5'
      : 'rounded-2xl border border-cyan-300/50 bg-cyan-50 p-5',
    softText: isDark ? 'text-slate-200' : 'text-slate-700',
    accent: isDark ? 'text-cyan-200' : 'text-cyan-700'
  };

  return (
    <div className={ui.page} dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-[-10rem] left-[-8rem] h-96 w-96 rounded-full blur-3xl ${ui.orbA}`} />
        <div className={`absolute bottom-[-12rem] right-[-10rem] h-[28rem] w-[28rem] rounded-full blur-3xl ${ui.orbB}`} />
      </div>

      <header className={ui.header}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {logoIndex < logoCandidates.length ? (
              <img
                src={logoCandidates[logoIndex]}
                alt="Mr Ghanem Media & Solutions"
                className="h-14 w-auto object-contain rounded"
                onError={() => setLogoIndex((idx) => idx + 1)}
              />
            ) : (
              <div className={`px-3 py-2 rounded-lg border ${isDark ? 'border-white/20 bg-white/5' : 'border-slate-300 bg-slate-100'}`}>
                <span className="text-sm font-bold">MR GHANEM</span>
              </div>
            )}

            <div>
              <h1 className="text-xl md:text-2xl font-bold">{labels[lang].companyName}</h1>
              <p className={`text-sm ${ui.subtle}`}>{labels[lang].proposalTag}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className={ui.control}>
              <Languages className={`w-4 h-4 mx-2 ${ui.subtle}`} />
              <button type="button" onClick={() => setLang('ar')} className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${lang === 'ar' ? ui.active : ui.idle}`}>
                العربية
              </button>
              <button type="button" onClick={() => setLang('en')} className={`rounded-lg px-3 py-1.5 text-sm font-semibold transition ${lang === 'en' ? ui.active : ui.idle}`}>
                English
              </button>
            </div>

          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        <section className={ui.hero}>
          <div className="flex items-center gap-2 mb-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${isDark ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-300/30' : 'bg-cyan-100 text-cyan-700 border border-cyan-300/70'}`}>
              {labels[lang].projectName}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{labels[lang].projectName}</h2>
          <p className={`text-lg leading-relaxed max-w-4xl ${ui.softText}`}>{labels[lang].heroText}</p>
          <div className="mt-5 flex items-center gap-2">
            <PhoneCall className="w-5 h-5 text-cyan-300" />
            <span className="font-semibold" dir="ltr">
              +962 7 9911 9469
            </span>
          </div>
        </section>

        <section className={ui.section}>
          <SectionHeader title={labels[lang].overviewTitle} icon={<FileText className="w-6 h-6 text-cyan-300" />} isDark={isDark} />
          <div className="grid md:grid-cols-3 gap-4">
            {overviewCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title.en} className={ui.card}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-cyan-300" />
                    <h3 className="font-bold">{card.title[lang]}</h3>
                  </div>
                  <ul className={`space-y-2 text-sm ${ui.softText}`}>
                    {card.points[lang].map((point) => (
                      <li key={point} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-300 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section className={ui.section}>
          <SectionHeader title={labels[lang].categoriesTitle} icon={<Car className="w-6 h-6 text-cyan-300" />} isDark={isDark} />
          <div className="grid lg:grid-cols-3 gap-4 mb-6">
            {categories.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title.en} className={ui.card}>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-cyan-300" />
                    <h3 className="font-bold">{card.title[lang]}</h3>
                  </div>
                  <ul className={`space-y-2 text-sm ${ui.softText}`}>
                    {card.points[lang].map((point) => (
                      <li key={point} className="flex gap-2">
                        <CheckCircle className="w-4 h-4 text-cyan-300 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          
        </section>

        <section className={ui.section}>
          <SectionHeader title={labels[lang].featuresTitle} icon={<Package className="w-6 h-6 text-cyan-300" />} isDark={isDark} />
          <ul className={`space-y-3 ${ui.softText}`}>
            {coreFeatures[lang].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={ui.section}>
          <SectionHeader title={labels[lang].adminTitle} icon={<Monitor className="w-6 h-6 text-cyan-300" />} isDark={isDark} />
          <ul className={`space-y-3 ${ui.softText}`}>
            {adminFeatures[lang].map((item) => (
              <li key={item} className="flex gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-300 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={ui.section}>
          <SectionHeader title={labels[lang].flowTitle} icon={<Users className="w-6 h-6 text-cyan-300" />} isDark={isDark} />
          <div className="grid xl:grid-cols-2 gap-5">
            <FlowColumn title={labels[lang].userFlow} steps={userFlow} lang={lang} isDark={isDark} />
            <FlowColumn title={labels[lang].adminFlow} steps={adminFlow} lang={lang} isDark={isDark} />
          </div>
        </section>

        <section className={ui.section}>
          <SectionHeader title={labels[lang].pricingTitle} icon={<Award className="w-6 h-6 text-cyan-300" />} isDark={isDark} />

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className={ui.card}>
              <h3 className={`font-bold mb-2 ${ui.accent}`}>{labels[lang].timelineLabel}</h3>
              <p className="text-2xl font-bold">{lang === 'ar' ? '3 شهور (بحد أقصى)' : '3 months (maximum)'}</p>
            </div>
            <div className={ui.card}>
              <h3 className={`font-bold mb-2 ${ui.accent}`}>{labels[lang].totalLabel}</h3>
              <p className="text-2xl font-bold">{lang === 'ar' ? '15,000 ريال قطري' : 'QAR 15,000'}</p>
            </div>
            <div className={ui.card}>
              <h3 className={`font-bold mb-2 ${ui.accent}`}>{labels[lang].annualOpsLabel}</h3>
              <p className="text-2xl font-bold">{lang === 'ar' ? '2,000 ريال قطري / سنويًا' : 'QAR 2,000 / Yearly'}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {milestones.map((milestone) => (
              <div key={milestone.label.en} className={ui.card}>
                <p className="text-xl font-bold mb-2">{milestone.amount[lang]}</p>
                <p className={ui.softText}>{milestone.label[lang]}</p>
              </div>
            ))}
          </div>

          <div className="grid xl:grid-cols-3 gap-4">
            <div className={ui.note}>
              <h3 className={`font-bold mb-3 ${ui.accent}`}>{labels[lang].includesTitle}</h3>
              <ul className={`space-y-2 ${ui.softText}`}>
                {includes[lang].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-300 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={ui.note}>
              <h3 className={`font-bold mb-3 ${ui.accent}`}>{labels[lang].annualOpsDetailsTitle}</h3>
              <ul className={`space-y-2 ${ui.softText}`}>
                {annualOpsDetails[lang].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-300 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={ui.note}>
              <h3 className={`font-bold mb-3 ${ui.accent}`}>{labels[lang].notesTitle}</h3>
              <ul className={`space-y-2 ${ui.softText}`}>
                {executionNotes[lang].map((item) => (
                  <li key={item} className="flex gap-2">
                    <Clock className="w-4 h-4 text-cyan-300 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({ title, icon, isDark }: { title: string; icon: React.ReactNode; isDark: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="rounded-lg bg-cyan-500/15 p-2">{icon}</div>
      <h2 className={`text-2xl font-bold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{title}</h2>
    </div>
  );
}

function FlowColumn({
  title,
  steps,
  lang,
  isDark
}: {
  title: string;
  steps: FlowStep[];
  lang: Lang;
  isDark: boolean;
}) {
  return (
    <div className={isDark ? 'rounded-2xl border border-white/10 bg-slate-900/40 p-5' : 'rounded-2xl border border-slate-200 bg-slate-50 p-5'}>
      <h3 className={`font-bold mb-4 ${isDark ? 'text-cyan-200' : 'text-cyan-700'}`}>{title}</h3>
      <div className="space-y-3">
        {steps.map((step) => (
          <div key={step.title.en} className={isDark ? 'rounded-xl border border-white/10 bg-slate-900/60 p-4' : 'rounded-xl border border-slate-200 bg-white p-4'}>
            <h4 className={`font-semibold mb-1 ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>{step.title[lang]}</h4>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{step.description[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
