import {
  Award,
  CheckCircle,
  Clock,
  Code,
  CreditCard,
  DollarSign,
  FileText,
  Globe,
  Languages,
  Monitor,
  Package,
  PhoneCall,
  Shield,
  Smartphone,
  TrendingUp,
  Users
} from 'lucide-react';
import React from 'react';

type Lang = 'ar' | 'en';
type FeatureColor = 'blue' | 'green' | 'purple' | 'orange' | 'indigo';
type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type SectionCard = {
  title: Localized;
  description: Localized;
  icon: React.ComponentType<{ className?: string }>;
  points: LocalizedList;
};

type PaymentGateway = {
  title: string;
  points: LocalizedList;
};

type TechCard = {
  name: string;
  details: Localized;
};

type ExternalCost = {
  title: Localized;
  amount: Localized;
  subtitle: Localized;
  note?: Localized;
};

type PaymentMilestone = {
  amount: Localized;
  title: Localized;
};

const labels: Record<
  Lang,
  {
    offerTitle: string;
    companyTitle: string;
    companyText: string;
    overviewTitle: string;
    overviewText: string;
    userFeatures: string;
    techFeatures: string;
    adminFeatures: string;
    deliveryTitle: string;
    projectDuration: string;
    totalCost: string;
    totalCostNote: string;
    paymentPlanTitle: string;
    externalNote: string;
    paymentGatewaysTitle: string;
    freeServices: string;
    technologies: string;
    externalCosts: string;
    whyUs: string;
    whyUsSub: string;
    contact: string;
    thanks: string;
    projectFooter: string;
    logoAlt: string;
    arBtn: string;
    enBtn: string;
  }
> = {
  ar: {
    offerTitle: 'عرض السعر التفصيلي للمشروع',
    companyTitle: 'شركة Penta-k',
    companyText:
      'شركة متخصصة في تصميم وتطوير حلول البرمجيات والتطبيقات الذكية، وتقديم أنظمة متكاملة بجودة عالية وتجربة استخدام احترافية.',
    overviewTitle: 'وصف عام لمشروع Fix Phone',
    overviewText:
      'مشروع Fix Phone عبارة عن منصة صيانة متكاملة تتكون من تطبيق موحد للمستخدم والفني، وتطبيق منفصل للأدمن. المستخدم يرفع طلب الصيانة ويختار الفني المناسب من الأقرب على الخريطة أو عبر البحث والتقييمات، ثم تبدأ محادثة مباشرة بعد قبول الطلب لإتمام تفاصيل الخدمة.',
    userFeatures: 'مميزات المستخدم',
    techFeatures: 'مميزات الفني',
    adminFeatures: 'مميزات الأدمن',
    deliveryTitle: 'مدة التنفيذ والتسليم',
    projectDuration: 'مدة المشروع: 3 شهور',
    totalCost: 'التكلفة الإجمالية للمشروع',
    totalCostNote: 'شاملة تصميم UI/UX والهوية واللوجو والباك اند والموبايل',
    paymentPlanTitle: 'طريقة الدفع',
    externalNote:
      'ملاحظة: العميل هو المسؤول عن الاشتراكات مع الخدمات الخارجية (OTP / Payment Gateway / Google Maps Billing)، ونحن نقوم بربطها برمجياً داخل التطبيق.',
    paymentGatewaysTitle: 'بوابات الدفع ونسب العمولة',
    freeServices: 'Free Services - مميزات مقدمة من شركة Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Running Costs - التكاليف الخارجية',
    whyUs: 'Why Penta-k? - ليه تختار Penta-k؟',
    whyUsSub: 'نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور',
    contact: 'للتواصل والاستفسار',
    thanks: 'شكرًا لثقتكم في',
    projectFooter: 'نتطلع للعمل معكم على مشروع Fix Phone.',
    logoAlt: 'شعار Penta-k',
    arBtn: 'العربية',
    enBtn: 'English'
  },
  en: {
    offerTitle: 'Detailed Project Offer',
    companyTitle: 'Penta-k Company',
    companyText:
      'A software house specialized in building smart digital solutions and integrated systems with high quality and professional user experience.',
    overviewTitle: 'Fix Phone Project Overview',
    overviewText:
      'Fix Phone is a full maintenance platform with one app for users and technicians, plus a separate admin app. The user submits a request, checks nearby technicians on the map or by ratings/search, then starts direct chat once the technician accepts the request.',
    userFeatures: 'User Features',
    techFeatures: 'Technician Features',
    adminFeatures: 'Admin Features',
    deliveryTitle: 'Timeline & Deliverables',
    projectDuration: 'Project duration: 3 months',
    totalCost: 'Total Project Cost',
    totalCostNote: 'Includes UI/UX, branding/logo, backend, and mobile apps',
    paymentPlanTitle: 'Payment Plan',
    externalNote:
      'Note: The client is responsible for external service subscriptions (OTP / Payment Gateway / Google Maps Billing), and we handle the technical integration.',
    paymentGatewaysTitle: 'Payment Gateways & Commission Rates',
    freeServices: 'Free Services by Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Running Costs',
    whyUs: 'Why Penta-k?',
    whyUsSub: 'We do not just write code, we build scalable solutions',
    contact: 'Contact & Inquiries',
    thanks: 'Thank you for trusting',
    projectFooter: 'We look forward to delivering the Fix Phone project with you.',
    logoAlt: 'Penta-k Logo',
    arBtn: 'العربية',
    enBtn: 'English'
  }
};

const mainSections: SectionCard[] = [
  {
    title: {
      ar: 'تطبيق المستخدم والفني (نفس التطبيق)',
      en: 'User & Technician App (Single App)'
    },
    description: {
      ar: 'تطبيق موحد يخدم طرفي العملية مع واجهات وصلاحيات مختلفة حسب نوع الحساب.',
      en: 'One application for both sides with separate roles and permissions.'
    },
    icon: Smartphone,
    points: {
      ar: [
        'المستخدم يرفع طلب الصيانة ويشاهد أقرب الفنيين على الخريطة.',
        'الفني يستقبل الطلبات ويوافق عليها من نفس التطبيق.',
        'التواصل بعد القبول عبر محادثة نصية مع صور و PDF فقط.'
      ],
      en: [
        'Users submit maintenance requests and see nearby technicians on the map.',
        'Technicians receive and accept requests from the same app.',
        'After acceptance, chat supports text, images, and PDF only.'
      ]
    }
  },
  {
    title: {
      ar: 'تطبيق الأدمن (منفصل)',
      en: 'Separate Admin Application'
    },
    description: {
      ar: 'تطبيق مستقل لإدارة المنصة بالكامل ومتابعة كل العمليات.',
      en: 'Dedicated admin app to manage all operations and system data.'
    },
    icon: Monitor,
    points: {
      ar: [
        'إدارة المستخدمين والفنيين (إنشاء، متابعة، حذف، حظر).',
        'إدارة الإعلانات والعروض والفئات الرئيسية والفرعية بشكل ديناميكي.',
        'متابعة الاشتراكات، التوثيق، والتقارير التشغيلية.'
      ],
      en: [
        'Manage users and technicians (create, monitor, delete, block).',
        'Manage ads, offers, categories, and sub-categories dynamically.',
        'Track subscriptions, verification, and performance reports.'
      ]
    }
  },
  {
    title: {
      ar: 'نظام الاشتراكات والتوثيق للفنيين',
      en: 'Technician Subscription & Verification'
    },
    description: {
      ar: 'تحفيز نمو المنصة ونموذج ربح مستدام عبر الفنيين.',
      en: 'A sustainable revenue model through technician plans and verification.'
    },
    icon: DollarSign,
    points: {
      ar: [
        'فترة تمهيدية بدون اشتراكات لمدة 4 إلى 6 شهور.',
        'بعد الفترة التمهيدية يبدأ اشتراك شهري للفنيين للظهور داخل التطبيق.',
        'علامة توثيق مدفوعة للفني لإبراز الثقة أمام المستخدم.'
      ],
      en: [
        'Initial phase without subscription for 4 to 6 months.',
        'Monthly subscription starts afterward for technician visibility.',
        'Paid verified badge option to increase user trust.'
      ]
    }
  },
  {
    title: {
      ar: 'التصنيفات والإعلانات والعروض',
      en: 'Categories, Ads & Offers'
    },
    description: {
      ar: 'هيكل مرن لإدارة أنواع الصيانة المختلفة والتسويق داخل المنصة.',
      en: 'Flexible structure to manage service types and in-app marketing.'
    },
    icon: TrendingUp,
    points: {
      ar: [
        'الأدمن ينشئ Categories و Sub-Categories حسب الحاجة.',
        'الأدمن ينشئ إعلانات عامة داخل التطبيق.',
        'الفني ينشئ عروض خاصة (مثال: خصم 10% على خدمة معينة).'
      ],
      en: [
        'Admin can create categories and sub-categories dynamically.',
        'Admin can publish internal app advertisements.',
        'Technicians can publish their own service offers (e.g. 10% discount).'
      ]
    }
  }
];

const userFeatures: LocalizedList = {
  ar: [
    'تسجيل الدخول ورفع طلب صيانة بسهولة.',
    'إظهار أقرب الفنيين حسب الموقع على الخريطة.',
    'اختيار فني مباشرة بعد مقارنة التقييمات أو البحث بالاسم/المنطقة.',
    'محادثة مع الفني بعد قبول الطلب (Text + Images + PDF فقط).',
    'عرض بروفايل الفني مع التقييمات والآراء.',
    'إمكانية الحظر أو البلاغ داخل الشات.'
  ],
  en: [
    'Easy login and maintenance request submission.',
    'Show nearby technicians on map based on location.',
    'Select technician by ratings, name, or area search.',
    'Chat after acceptance (Text + Images + PDF only).',
    'Technician profile with ratings and user reviews.',
    'Block/report options inside chat.'
  ]
};

const techFeatures: LocalizedList = {
  ar: [
    'استقبال الطلبات القريبة بناءً على الموقع الحالي.',
    'قبول/رفض الطلبات وإدارة حالة الطلب.',
    'محادثة مع المستخدم (Text + Images + PDF).',
    'إمكانية عمل حظر أو بلاغ داخل المحادثة.',
    'إنشاء عروض خاصة على الخدمات.',
    'إدارة البروفايل والتقييمات والآراء.'
  ],
  en: [
    'Receive nearby service requests based on live location.',
    'Accept/reject requests and update request status.',
    'Chat with user (Text + Images + PDF).',
    'Block/report options within chat.',
    'Create custom service offers.',
    'Manage profile, ratings, and feedback.'
  ]
};

const adminFeatures: LocalizedList = {
  ar: [
    'إدارة المستخدمين والفنيين وصلاحيات الحسابات.',
    'إدارة الفئات الرئيسية والفرعية بشكل ديناميكي.',
    'إدارة الإعلانات العامة داخل المنصة.',
    'متابعة نظام الاشتراكات الشهرية للفنيين.',
    'إدارة شراء وتفعيل علامة التوثيق للفنيين.',
    'متابعة الأداء والتقارير التشغيلية.'
  ],
  en: [
    'Manage users, technicians, and account permissions.',
    'Manage categories and sub-categories dynamically.',
    'Manage platform-wide advertisements.',
    'Track technician monthly subscriptions.',
    'Manage verified badge purchasing and activation.',
    'Monitor performance and operational reports.'
  ]
};

const deliverables: LocalizedList = {
  ar: [
    'تسليم تطبيق المستخدم والفني معًا على Android و iOS.',
    'تسليم تطبيق الأدمن على Android.',
    'تسليم تطبيق الأدمن نسخة Windows.',
    'رفع التطبيقات على Google Play و Apple Store.',
    'تسليم سورس كود الموبايل + الباك اند + ملفات التصميم.'
  ],
  en: [
    'Delivery of user/technician app on Android and iOS.',
    'Delivery of admin app on Android.',
    'Delivery of admin app on Windows.',
    'Publishing on Google Play and Apple Store.',
    'Handover mobile source code + backend + design files.'
  ]
};

const includedInPrice: LocalizedList = {
  ar: [
    'تصميم UI/UX كامل للتطبيق.',
    'تصميم الهوية واللوجو.',
    'تطوير الباك اند.',
    'تطوير تطبيقات الموبايل.',
    'ربط بوابة الدفع.',
    'ربط خدمة OTP عند التسجيل برقم الهاتف.'
  ],
  en: [
    'Complete UI/UX design.',
    'Brand identity and logo design.',
    'Backend development.',
    'Mobile applications development.',
    'Payment gateway integration.',
    'OTP integration for phone-based login.'
  ]
};

const technologies: TechCard[] = [
  {
    name: 'Flutter',
    details: {
      ar: 'تطوير تطبيق المستخدم/الفني + تطبيق الأدمن (Android و iOS و Windows).',
      en: 'User/technician app + admin app development (Android, iOS, Windows).'
    }
  },
  {
    name: 'Node.js Backend',
    details: {
      ar: 'API قوية لإدارة الطلبات، المستخدمين، الفنيين، والإشعارات.',
      en: 'Robust API for requests, users, technicians, and notifications.'
    }
  },
  {
    name: 'Figma Design',
    details: {
      ar: 'تصميم UI/UX والهوية البصرية قبل التنفيذ.',
      en: 'UI/UX and visual identity design before implementation.'
    }
  },
  {
    name: 'Hostinger Server',
    details: {
      ar: 'استضافة النظام وقاعدة البيانات والـ APIs.',
      en: 'Hosting for backend services, database, and APIs.'
    }
  },
  {
    name: 'Firebase Notifications',
    details: {
      ar: 'إشعارات فورية للمستخدم والفني والأدمن.',
      en: 'Real-time push notifications for user, technician, and admin.'
    }
  }
];

const paymentGateways: PaymentGateway[] = [
  {
    title: 'Visa / Mastercard',
    points: {
      ar: ['المدفوعات الدولية: 2.50% + 2.00 جنيه', 'عمولة البطاقة: 2% + 2 جنيه', 'VAT: 14%'],
      en: ['International: 2.50% + 2.00 EGP', 'Card commission: 2% + 2 EGP', 'VAT: 14%']
    }
  },
  {
    title: 'Fawry',
    points: {
      ar: ['العمولة: 2.00% + 2.00 جنيه', 'VAT: 14%'],
      en: ['Commission: 2.00% + 2.00 EGP', 'VAT: 14%']
    }
  },
  {
    title: 'Mobile Wallet',
    points: {
      ar: ['العمولة: 2.00% + 2.00 جنيه', 'VAT: 14%'],
      en: ['Commission: 2.00% + 2.00 EGP', 'VAT: 14%']
    }
  },
  {
    title: 'Aman',
    points: {
      ar: ['العمولة: 2.00% + 2.00 جنيه', 'VAT: 14%'],
      en: ['Commission: 2.00% + 2.00 EGP', 'VAT: 14%']
    }
  },
  {
    title: 'Basata',
    points: {
      ar: ['العمولة: 2.00% + 2.00 جنيه', 'VAT: 14%'],
      en: ['Commission: 2.00% + 2.00 EGP', 'VAT: 14%']
    }
  },
  {
    title: 'Apple Pay',
    points: {
      ar: ['العمولة: 2.00% + 2.00 جنيه', 'VAT: 14%'],
      en: ['Commission: 2.00% + 2.00 EGP', 'VAT: 14%']
    }
  },
  {
    title: 'Fawaterk',
    points: {
      ar: ['العمولة حسب الشريحة المتفق عليها مع Fawaterk', 'تُضاف ضريبة القيمة المضافة عند التطبيق'],
      en: ['Commission depends on the agreed Fawaterk package', 'VAT applies when activated']
    }
  }
];

const externalCosts: ExternalCost[] = [
  {
    title: { ar: 'Google Play', en: 'Google Play' },
    amount: { ar: '500 جنيه', en: 'EGP 500' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' }
  },
  {
    title: { ar: 'Apple Store', en: 'Apple Store' },
    amount: { ar: '2,000 جنيه', en: 'EGP 2,000' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' }
  },
  {
    title: { ar: 'اشتراك السيرفر', en: 'Server Subscription' },
    amount: { ar: '2,500 جنيه', en: 'EGP 2,500' },
    subtitle: { ar: 'اشتراك سنوي', en: 'Annual subscription' },
    note: {
      ar: 'يشمل استضافة السيرفر والمتابعة الدورية طوال سنة الاشتراك.',
      en: 'Includes server hosting and periodic follow-up throughout the yearly subscription.'
    }
  },
  {
    title: { ar: 'الدعم الفني السنوي', en: 'Annual Technical Support' },
    amount: { ar: '5,000 جنيه', en: 'EGP 5,000' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' }
  }
];

const paymentMilestones: PaymentMilestone[] = [
  {
    amount: { ar: '25,000 جنيه', en: 'EGP 25,000' },
    title: { ar: 'دفعة مقدمة عند التعاقد', en: 'Advance payment at contract signing' }
  },
  {
    amount: { ar: '5,000 جنيه', en: 'EGP 5,000' },
    title: { ar: 'بعد الانتهاء من اللوجو والهوية', en: 'After logo and identity completion' }
  },
  {
    amount: { ar: '15,000 جنيه', en: 'EGP 15,000' },
    title: { ar: 'بعد الانتهاء من تصميم UI/UX', en: 'After UI/UX design completion' }
  },
  {
    amount: { ar: '15,000 جنيه', en: 'EGP 15,000' },
    title: { ar: 'بعد الانتهاء من تطبيق المستخدم', en: 'After user app completion' }
  },
  {
    amount: { ar: '15,000 جنيه', en: 'EGP 15,000' },
    title: { ar: 'بعد الانتهاء من الأدمن (موبايل + ويندوز)', en: 'After admin delivery (Mobile + Windows)' }
  }
];

const projectName = 'Fix Phone';

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const isArabic = lang === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir={isArabic ? 'rtl' : 'ltr'}>
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{projectName}</h1>
              <p className="text-sm text-slate-600">{labels[lang].offerTitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1">
                <Languages className="w-4 h-4 text-slate-500" />
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    lang === 'ar' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setLang('ar')}
                >
                  {labels[lang].arBtn}
                </button>
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    lang === 'en' ? 'bg-blue-600 text-white' : 'bg-white text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setLang('en')}
                >
                  {labels[lang].enBtn}
                </button>
              </div>
              <a href="https://penta-k.com" className="inline-flex items-center" aria-label="Penta-k website">
                <img src="public/logo.png" alt={labels[lang].logoAlt} className="h-12 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">{labels[lang].companyTitle}</h2>
              <p className="text-blue-100 text-lg mb-4 leading-relaxed max-w-3xl">{labels[lang].companyText}</p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <a href="https://penta-k.com" className="hover:underline">
                    penta-k.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <a href="tel:+201061942646" className="hover:underline" dir="ltr">
                    +20 10 61942646
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].overviewTitle}</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">{labels[lang].overviewText}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {mainSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title.en}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{section.title[lang]}</h3>
                    <p className="text-sm text-slate-600">{section.description[lang]}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-700">
                  {section.points[lang].map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <FeatureSection
          title={labels[lang].userFeatures}
          subtitle="User Features"
          icon={<Users className="w-7 h-7 text-blue-600" />}
          color="blue"
          items={userFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].techFeatures}
          subtitle="Technician Features"
          icon={<Package className="w-7 h-7 text-green-600" />}
          color="green"
          items={techFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].adminFeatures}
          subtitle="Admin Features"
          icon={<Monitor className="w-7 h-7 text-purple-600" />}
          color="purple"
          items={adminFeatures[lang]}
        />

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Clock className="w-7 h-7 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{labels[lang].deliveryTitle}</h2>
              <p className="text-sm text-slate-600">{labels[lang].projectDuration}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {deliverables[lang].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500">
            <div className="p-3 bg-emerald-500 rounded-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">{labels[lang].totalCost}</h2>
          </div>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold mb-2">75,000 جنيه مصري</div>
            <div className="text-emerald-100 text-lg">{labels[lang].totalCostNote}</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {includedInPrice[lang].map((item) => (
              <div key={item} className="bg-white/10 rounded-lg p-4 border border-white/20 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 mt-1" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-xl p-5 border border-white/20">
            <h3 className="text-xl font-bold mb-4">{labels[lang].paymentPlanTitle}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
              {paymentMilestones.map((milestone) => (
                <div key={milestone.title.en} className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold mb-1">{milestone.amount[lang]}</div>
                  <p className="text-sm text-emerald-50">{milestone.title[lang]}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-emerald-100 mt-4">{labels[lang].externalNote}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <CreditCard className="w-7 h-7 text-slate-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].paymentGatewaysTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentGateways.map((gateway) => (
              <div key={gateway.title} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{gateway.title}</h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  {gateway.points[lang].map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].freeServices}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{isArabic ? 'سيرفر مجاني' : 'Free Server'}</div>
              <div className="text-slate-600 text-sm">{isArabic ? 'لمدة 4 شهور' : 'For 4 months'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{isArabic ? 'دومين مجاني' : 'Free Domain'}</div>
              <div className="text-slate-600 text-sm">{isArabic ? 'أول سنة' : 'First year'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">
                {isArabic ? 'دعم فني مجاني' : 'Free Technical Support'}
              </div>
              <div className="text-slate-600 text-sm">{isArabic ? 'لمدة 4 شهور' : 'For 4 months'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">
                {isArabic ? 'رفع على المتاجر' : 'Store Publishing'}
              </div>
              <div className="text-slate-600 text-sm">{isArabic ? 'مجاناً خلال أول سنة' : 'Free during first year'}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Code className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].technologies}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{tech.name}</h3>
                <p className="text-sm text-slate-600">{tech.details[lang]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-amber-100 rounded-lg">
              <DollarSign className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].externalCosts}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-2">
            {externalCosts.map((cost) => (
              <div key={cost.title.en} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{cost.title[lang]}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">
                  {cost.amount[lang]}
                </div>
                <p className="text-sm text-slate-600">{cost.subtitle[lang]}</p>
                {cost.note ? <p className="text-xs text-slate-500 mt-2">{cost.note[lang]}</p> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-l from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">{labels[lang].whyUs}</h2>
            <p className="text-blue-100 text-lg">{labels[lang].whyUsSub}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ValueCard
              icon={<Shield className="w-8 h-8 mb-3" />}
              title={isArabic ? 'جودة الكود' : 'Code Quality'}
              text={isArabic ? 'اهتمام حقيقي بجودة الكود وليس مجرد تنفيذ.' : 'Real focus on quality, not just delivery.'}
            />
            <ValueCard
              icon={<TrendingUp className="w-8 h-8 mb-3" />}
              title={isArabic ? 'قابلية التوسع' : 'Scalability'}
              text={isArabic ? 'تطبيقات قابلة للتوسع والنمو مع عملك.' : 'Apps built to scale with your business.'}
            />
            <ValueCard
              icon={<Clock className="w-8 h-8 mb-3" />}
              title={isArabic ? 'تسليم منظم' : 'Structured Delivery'}
              text={isArabic ? 'تسليم على مراحل مع متابعة مستمرة.' : 'Milestone-based delivery with steady follow-up.'}
            />
            <ValueCard
              icon={<Users className="w-8 h-8 mb-3" />}
              title={isArabic ? 'سهولة الاستلام' : 'Easy Handover'}
              text={
                isArabic
                  ? 'سهولة استلام المشروع من أي فريق تقني لاحقًا.'
                  : 'Easy transfer to any future technical team.'
              }
            />
            <ValueCard
              icon={<DollarSign className="w-8 h-8 mb-3" />}
              title={isArabic ? 'توفير المستقبل' : 'Future Savings'}
              text={isArabic ? 'كود نظيف = تكلفة أقل في المستقبل.' : 'Clean code means lower future costs.'}
            />
            <ValueCard
              icon={<Award className="w-8 h-8 mb-3" />}
              title={isArabic ? 'خبرة احترافية' : 'Professional Experience'}
              text={isArabic ? 'فريق متخصص بخبرة عملية في حلول الإنتاج.' : 'Specialized team with real production experience.'}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{labels[lang].contact}</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 text-lg">
              <Globe className="w-6 h-6 text-blue-600" />
              <a href="https://penta-k.com" className="text-blue-600 hover:underline font-semibold">
                penta-k.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-lg" dir="ltr">
              <PhoneCall className="w-6 h-6 text-green-600" />
              <a href="tel:+201061942646" className="text-green-600 hover:underline font-semibold">
                +20 10 61942646
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-200">
            <p className="text-slate-600">
              {labels[lang].thanks} <span className="font-bold text-blue-600">Penta-k</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">{labels[lang].projectFooter}</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function FeatureSection({
  title,
  subtitle,
  icon,
  items,
  color
}: {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  items: string[];
  color: FeatureColor;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
        <div className={`p-3 rounded-lg ${getPillColor(color)}`}>{icon}</div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-600">{subtitle}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <FeatureItem key={item} icon={<CheckCircle className="w-5 h-5" />} title={item} color={color} />
        ))}
      </div>
    </div>
  );
}

function getPillColor(color: FeatureColor) {
  if (color === 'green') return 'bg-green-100';
  if (color === 'purple') return 'bg-purple-100';
  if (color === 'orange') return 'bg-orange-100';
  if (color === 'indigo') return 'bg-indigo-100';
  return 'bg-blue-100';
}

function ValueCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
      {icon}
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-blue-100">{text}</p>
    </div>
  );
}

function FeatureItem({
  icon,
  title,
  color = 'blue'
}: {
  icon: React.ReactNode;
  title: string;
  color?: FeatureColor;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  };

  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${colorClasses[color]}`}>
      <div className="mt-0.5">{icon}</div>
      <span className="text-sm text-slate-700">{title}</span>
    </div>
  );
}
