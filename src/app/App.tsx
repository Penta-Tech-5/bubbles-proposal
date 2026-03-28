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
  Moon,
  Monitor,
  Package,
  PhoneCall,
  Shield,
  Smartphone,
  Sun,
  TrendingUp,
  Users
} from 'lucide-react';
import React from 'react';

type Lang = 'ar' | 'en';
type Theme = 'dark' | 'light';
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
    studentFeatures: string;
    teacherFeatures: string;
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
    overviewTitle: 'وصف عام لمشروع منصة السادات',
    overviewText:
      'منصة السادات عبارة عن نظام تعليمي متكامل يتكون من تطبيقات موبايل للطالب والمدرس، وتطبيق أدمن، بالإضافة إلى منصة ويب للطالب، بهدف إدارة الكورسات والاشتراكات والبث المباشر والتفاعل بين الطلاب والمدرسين في تجربة موحدة وآمنة.',
    studentFeatures: 'مميزات الطالب',
    teacherFeatures: 'مميزات المدرس',
    adminFeatures: 'مميزات الأدمن',
    deliveryTitle: 'مدة التنفيذ والتسليم',
    projectDuration: 'مدة المشروع: 3 شهور (بحد أقصى)',
    totalCost: 'التكلفة الإجمالية للمشروع',
    totalCostNote: 'شاملة تنفيذ التطبيقات والمنصة والربط الكامل للمنظومة التعليمية',
    paymentPlanTitle: 'طريقة الدفع',
    externalNote:
      'ملاحظة: الاشتراكات السنوية (السيرفر، Google Play، Apple Store، والدعم السنوي) تُدار كتجديدات تشغيلية بعد انتهاء الفترات المجانية.',
    paymentGatewaysTitle: 'بوابة الدفع المعتمدة',
    freeServices: 'Free Services - مميزات مقدمة من شركة Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Running Costs - التكاليف التشغيلية السنوية',
    whyUs: 'Why Penta-k? - ليه تختار Penta-k؟',
    whyUsSub: 'نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور',
    contact: 'للتواصل والاستفسار',
    thanks: 'شكرًا لثقتكم في',
    projectFooter: 'نتطلع للعمل معكم على مشروع منصة السادات.',
    logoAlt: 'شعار Penta-k',
    arBtn: 'العربية',
    enBtn: 'English'
  },
  en: {
    offerTitle: 'Detailed Project Offer',
    companyTitle: 'Penta-k Company',
    companyText:
      'A software house specialized in building smart digital solutions and integrated systems with high quality and professional user experience.',
    overviewTitle: 'Al-Sadat Platform Overview',
    overviewText:
      'Al-Sadat Platform is a complete e-learning ecosystem including mobile apps for students and teachers, an admin app, and a student web platform to manage courses, subscriptions, live sessions, and secure educational content delivery.',
    studentFeatures: 'Student Features',
    teacherFeatures: 'Teacher Features',
    adminFeatures: 'Admin Features',
    deliveryTitle: 'Timeline & Deliverables',
    projectDuration: 'Project duration: 3 months (maximum)',
    totalCost: 'Total Project Cost',
    totalCostNote: 'Includes full implementation of apps, web platform, and educational workflow integration',
    paymentPlanTitle: 'Payment Plan',
    externalNote:
      'Note: Annual subscriptions (server, Google Play, Apple Store, and annual support) are handled as operational renewals after free periods.',
    paymentGatewaysTitle: 'Approved Payment Gateway',
    freeServices: 'Free Services by Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Annual Operating Costs',
    whyUs: 'Why Penta-k?',
    whyUsSub: 'We do not just write code, we build scalable solutions',
    contact: 'Contact & Inquiries',
    thanks: 'Thank you for trusting',
    projectFooter: 'We look forward to delivering Al-Sadat Platform with you.',
    logoAlt: 'Penta-k Logo',
    arBtn: 'العربية',
    enBtn: 'English'
  }
};

const mainSections: SectionCard[] = [
  {
    title: {
      ar: 'تطبيق الطالب + منصة ويب الطالب',
      en: 'Student Mobile App + Student Web Platform'
    },
    description: {
      ar: 'تجربة متكاملة للطالب من التسجيل حتى الاشتراك ومتابعة الكورسات.',
      en: 'Complete student journey from login to subscription and course engagement.'
    },
    icon: Smartphone,
    points: {
      ar: [
        'تسجيل الدخول بالإيميل أو رقم الموبايل حسب إعداد العميل.',
        'اختيار السنة الدراسية ثم عرض المواد والمدرسين.',
        'الاشتراك في الكورسات عبر بوابة الدفع Fawaterk.',
        'عرض الكورسات والدروس والفيديوهات والملفات بشكل منظم.'
      ],
      en: [
        'Login via email or mobile number based on client preference.',
        'Select academic year then browse subjects and teachers.',
        'Course subscription via Fawaterk payment gateway.',
        'Organized access to courses, lessons, videos, and files.'
      ]
    }
  },
  {
    title: {
      ar: 'تطبيق المدرس',
      en: 'Teacher Mobile App'
    },
    description: {
      ar: 'أداة كاملة للمدرس لإدارة المحتوى والتفاعل مع الطلاب وتحليل الأداء.',
      en: 'A complete tool for teachers to manage content, engagement, and performance.'
    },
    icon: Package,
    points: {
      ar: [
        'رفع فيديوهات الكورسات وملفات PDF وامتحانات لكل درس.',
        'متابعة تعليقات الطلبة والرد عليها.',
        'متابعة عدد المشتركين بكل كورس.',
        'عرض الرصيد بعد خصم نسبة المنصة المتفق عليها.'
      ],
      en: [
        'Upload course videos, lesson files, and exams.',
        'Monitor and reply to student comments.',
        'Track subscriber count per course.',
        'View net revenue after platform commission.'
      ]
    }
  },
  {
    title: {
      ar: 'تطبيق الأدمن (Android)',
      en: 'Admin App (Android)'
    },
    description: {
      ar: 'إدارة شاملة للحسابات والكورسات والتسعير والاشتراكات والرصيد.',
      en: 'Full control over accounts, courses, pricing, subscriptions, and balances.'
    },
    icon: Monitor,
    points: {
      ar: [
        'إنشاء/تعديل/حذف حسابات الطلبة والمدرسين.',
        'إدارة الكورسات والتسعير والمحتوى.',
        'إدارة الاشتراكات وإتاحة اشتراكات مجانية للطلاب.',
        'متابعة الرصيد وحركة الاشتراكات المالية.'
      ],
      en: [
        'Create/edit/delete student and teacher accounts.',
        'Manage courses, pricing, and educational content.',
        'Manage subscriptions and assign free enrollments.',
        'Track balances and subscription financial flow.'
      ]
    }
  },
  {
    title: {
      ar: 'البث المباشر وحماية المحتوى',
      en: 'Live Streaming & Content Protection'
    },
    description: {
      ar: 'ميزات أساسية لرفع جودة التعلم مع حماية قوية للمحتوى التعليمي.',
      en: 'Core features for live education delivery with strong content security.'
    },
    icon: Shield,
    points: {
      ar: [
        'بث مباشر للمدرسين: على مستوى كورس محدد أو سنة كاملة.',
        'أدوات البث المباشر تشمل Whiteboard و Raise Hand (حلول Open Source على سيرفرنا).',
        'شات خاص لكل كورس (نص + صور + PDF) مع مشاركة الطلبة والمدرس.',
        'تعليقات على الكورسات مع الردود.',
        'منع تسجيل الشاشة + علامة مائية باسم الطالب على ملفات PDF.'
      ],
      en: [
        'Teacher live sessions per course or full grade level.',
        'Live class tools include Whiteboard and Raise Hand (open-source stack on our server).',
        'Course-level chat (text + images + PDF) for students and teachers.',
        'Course comments with threaded replies.',
        'Screen-recording protection + student-name watermark on lesson PDFs.'
      ]
    }
  }
];

const studentFeatures: LocalizedList = {
  ar: [
    'تسجيل دخول بالإيميل أو رقم الموبايل حسب تفعيل العميل.',
    'اختيار السنة الدراسية وعرض المواد والمدرسين.',
    'الاشتراك في الكورسات والدفع عبر Fawaterk.',
    'شات لكل كورس (رسائل نصية + صور + ملفات PDF).',
    'تعليقات على الكورس والرد على التعليقات.',
    'منع تسجيل الشاشة لحماية محتوى الفيديو.',
    'تحميل ملفات PDF بعلامة مائية باسم الطالب.'
  ],
  en: [
    'Login by email or mobile number based on client settings.',
    'Select grade and browse subjects and teachers.',
    'Subscribe to courses via Fawaterk payment gateway.',
    'Course chat (text + images + PDF files).',
    'Course comments and replies.',
    'Screen-recording prevention for video protection.',
    'PDF downloads stamped with student watermark.'
  ]
};

const teacherFeatures: LocalizedList = {
  ar: [
    'رفع فيديوهات الدروس والكورسات من التطبيق.',
    'إضافة ملفات PDF وامتحانات لكل درس.',
    'متابعة تعليقات الطلاب والرد عليها.',
    'عرض عدد المشتركين في كل كورس.',
    'عرض الرصيد بعد خصم نسبة التطبيق.',
    'عمل بث مباشر لطلاب كورس معين أو سنة كاملة.',
    'استخدام Whiteboard و Raise Hand داخل الحصة المباشرة.'
  ],
  en: [
    'Upload lessons and full course videos from the app.',
    'Attach PDF files and exams per lesson.',
    'Review and respond to student comments.',
    'Track subscriptions per course.',
    'View balance after platform commission.',
    'Run live sessions for a specific course or full grade.',
    'Use Whiteboard and Raise Hand during live classes.'
  ]
};

const adminFeatures: LocalizedList = {
  ar: [
    'إدارة كاملة للطلبة والمدرسين والحسابات.',
    'إدارة الكورسات (إنشاء/تعديل/حذف/تسعير).',
    'إدارة الاشتراكات ومنح اشتراكات مجانية.',
    'متابعة الرصيد الإجمالي للاشتراكات.',
    'إدارة المحتوى على مستوى المنصة بالكامل.',
    'متابعة الأداء التشغيلي والتفاعل داخل الكورسات.'
  ],
  en: [
    'Full management of students, teachers, and accounts.',
    'Course management (create/edit/delete/pricing).',
    'Subscription management and free grants.',
    'Track total subscription balances.',
    'Control educational content across the platform.',
    'Monitor operational activity and engagement.'
  ]
};

const deliverables: LocalizedList = {
  ar: [
    'تطبيق الطالب على Android و iOS.',
    'تطبيق المدرس على Android و iOS.',
    'تطبيق الأدمن على Android.',
    'منصة ويب للطالب.',
    'إطلاق متجر Google Play و Apple App Store.',
    'ربط بوابة الدفع Fawaterk.'
  ],
  en: [
    'Student app on Android & iOS.',
    'Teacher app on Android & iOS.',
    'Admin app on Android.',
    'Student web platform.',
    'Publishing to Google Play & Apple App Store.',
    'Fawaterk payment gateway integration.'
  ]
};

const includedInPrice: LocalizedList = {
  ar: [
    'تحليل وتجهيز البنية التعليمية للمنصة.',
    'تصميم وتجهيز الواجهات المطلوبة للتطبيقات والمنصة.',
    'تطوير تطبيقات الطالب والمدرس والأدمن.',
    'تطوير منصة ويب الطالب.',
    'تنفيذ الشات والتعليقات والبث المباشر.',
    'تنفيذ أدوات البث المباشر (Whiteboard + Raise Hand) كخدمة Open Source على سيرفرنا.',
    'تنفيذ الحماية (منع تسجيل الشاشة + علامة مائية على PDF).'
  ],
  en: [
    'Educational platform architecture and analysis.',
    'UI/UX implementation for apps and web platform.',
    'Development of student, teacher, and admin apps.',
    'Development of student web platform.',
    'Implementation of chat, comments, and live streaming.',
    'Implementation of open-source live class tools (Whiteboard + Raise Hand) on our server.',
    'Protection layer (screen recording prevention + PDF watermarking).'
  ]
};

const technologies: TechCard[] = [
  {
    name: 'Flutter',
    details: {
      ar: 'تطوير تطبيقات الطالب والمدرس (Android و iOS) + تطبيق الأدمن (Android).',
      en: 'Student and Teacher apps (Android/iOS) + Admin app (Android).'
    }
  },
  {
    name: 'Node.js Backend',
    details: {
      ar: 'إدارة الحسابات، الاشتراكات، الكورسات، الشات، والتعليقات.',
      en: 'Backend for accounts, subscriptions, courses, chat, and comments.'
    }
  },
  {
    name: 'Web Platform',
    details: {
      ar: 'منصة ويب للطالب لعرض الكورسات والاشتراك والمتابعة.',
      en: 'Student web platform for course browsing, subscription, and tracking.'
    }
  },
  {
    name: 'Hostinger Server',
    details: {
      ar: 'استضافة النظام وقاعدة البيانات والخدمات المساندة.',
      en: 'Hosting backend, database, and supporting services.'
    }
  },
  {
    name: 'Open-Source Live Classroom Stack',
    details: {
      ar: 'تشغيل أدوات البث المباشر (Whiteboard + Raise Hand) على سيرفرنا بدون رسوم ترخيص.',
      en: 'Running live classroom tools (Whiteboard + Raise Hand) on our server with no license fees.'
    }
  },
  {
    name: 'Fawaterk Gateway',
    details: {
      ar: 'بوابة الدفع المعتمدة للاشتراكات داخل المنصة.',
      en: 'Approved payment gateway for course subscriptions.'
    }
  }
];

const paymentGateways: PaymentGateway[] = [
  {
    title: 'Fawaterk',
    points: {
      ar: ['بوابة الدفع المعتمدة للمشروع.', 'العمولة حسب الشريحة المتفق عليها مع Fawaterk.', 'تُضاف ضريبة القيمة المضافة عند التطبيق.'],
      en: ['Approved payment gateway for this project.', 'Commission depends on the agreed Fawaterk package.', 'VAT applies when activated.']
    }
  }
];

const externalCosts: ExternalCost[] = [
  {
    title: { ar: 'Google Play Subscription', en: 'Google Play Subscription' },
    amount: { ar: '600 جنيه', en: 'EGP 600' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' }
  },
  {
    title: { ar: 'Apple Developer Subscription', en: 'Apple Developer Subscription' },
    amount: { ar: '2,000 جنيه', en: 'EGP 2,000' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' }
  },
  {
    title: { ar: 'Server Subscription', en: 'Server Subscription' },
    amount: { ar: '2,500 جنيه', en: 'EGP 2,500' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' }
  },
  {
    title: { ar: 'Video Storage Server (Object Storage)', en: 'Video Storage Server (Object Storage)' },
    amount: { ar: 'حسب الاستهلاك', en: 'Usage-based' },
    subtitle: { ar: 'بعد الشريحة المجانية', en: 'After free tier' },
    note: {
      ar: 'مجاني: 10GB شهريًا. المدفوع: Standard Storage $0.015/GB-month، Class A $4.50/مليون، Class B $0.36/مليون، IA Storage $0.01/GB-month، IA Class A $9.00/مليون، IA Class B $0.90/مليون، Data Retrieval $0.01/GB.',
      en: 'Free tier: 10GB/month. Paid: Standard Storage $0.015/GB-month, Class A $4.50/million, Class B $0.36/million, IA Storage $0.01/GB-month, IA Class A $9.00/million, IA Class B $0.90/million, Data Retrieval $0.01/GB.'
    }
  },
  {
    title: { ar: 'Technical Support Subscription', en: 'Technical Support Subscription' },
    amount: { ar: '5,000 جنيه', en: 'EGP 5,000' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' },
    note: {
      ar: 'يشمل كل عناصر الدعم الفني التشغيلي الموضحة في قسم \"خدمة الدعم الفني تشمل\".',
      en: 'Covers all operational support items listed under \"Technical Support Scope\".'
    }
  }
];

const technicalSupportScope: LocalizedList = {
  ar: [
    'متابعة السيرفر الأساسي وكفاءته واستقراره بشكل مستمر.',
    'متابعة سيرفر تخزين الفيديوهات (Object Storage) والأداء والاستهلاك.',
    'متابعة منصات Google Play و Apple App Store.',
    'تنفيذ تحديثات التوافق المطلوبة من Google و Apple على التطبيقات.',
    'متابعة أدوات البث المباشر Open Source (Whiteboard + Raise Hand) على سيرفرنا.',
    'إصلاح الأعطال والأخطاء التشغيلية لضمان عمل التطبيق والمنصة بكفاءة.'
  ],
  en: [
    'Continuous monitoring of the main production server performance and stability.',
    'Monitoring of the video storage server (Object Storage), including usage and performance.',
    'Ongoing follow-up for Google Play and Apple App Store platforms.',
    'Applying required compliance updates from Google and Apple.',
    'Maintaining open-source live class tools (Whiteboard + Raise Hand) on our server.',
    'Fixing operational issues and bugs to keep apps and web platform running reliably.'
  ]
};

const paymentMilestones: PaymentMilestone[] = [
  {
    amount: { ar: '20,000 جنيه', en: 'EGP 20,000' },
    title: { ar: 'دفعة مقدمة عند التعاقد', en: 'Advance payment at contract signing' }
  },
  {
    amount: { ar: '20,000 جنيه', en: 'EGP 20,000' },
    title: { ar: 'عند تسليم تطبيق الطالب', en: 'Upon student app delivery' }
  },
  {
    amount: { ar: '20,000 جنيه', en: 'EGP 20,000' },
    title: { ar: 'عند تسليم تطبيق المدرس والأدمن', en: 'Upon teacher and admin app delivery' }
  },
  {
    amount: { ar: '20,000 جنيه', en: 'EGP 20,000' },
    title: { ar: 'عند تسليم منصة الويب', en: 'Upon web platform delivery' }
  }
];

const projectName = 'منصة السادات';

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const [theme, setTheme] = React.useState<Theme>('dark');
  const logoCandidates = ['/logo.png', 'logo.png', './logo.png', '/public/logo.png'];
  const [logoIndex, setLogoIndex] = React.useState(0);
  const isDark = theme === 'dark';

  return (
    <div
      className={`${isDark ? 'dark-proposal min-h-screen bg-gradient-to-br from-slate-900 to-slate-950' : 'min-h-screen bg-gradient-to-br from-slate-50 to-slate-100'}`}
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      {isDark ? (
        <style>{`
          .dark-proposal .bg-white { background-color: rgba(15, 23, 42, 0.92) !important; }
          .dark-proposal .bg-slate-50 { background-color: rgba(30, 41, 59, 0.82) !important; }
          .dark-proposal .bg-blue-50 { background-color: rgba(30, 64, 175, 0.18) !important; }
          .dark-proposal .bg-indigo-50 { background-color: rgba(30, 58, 138, 0.22) !important; }
          .dark-proposal .bg-green-50 { background-color: rgba(22, 101, 52, 0.22) !important; }
          .dark-proposal .bg-purple-50 { background-color: rgba(107, 33, 168, 0.20) !important; }
          .dark-proposal .bg-orange-50 { background-color: rgba(154, 52, 18, 0.20) !important; }
          .dark-proposal .bg-amber-50 { background-color: rgba(146, 64, 14, 0.20) !important; }
          .dark-proposal .text-slate-900 { color: #f8fafc !important; }
          .dark-proposal .text-slate-700 { color: #e2e8f0 !important; }
          .dark-proposal .text-slate-600 { color: #cbd5e1 !important; }
          .dark-proposal .text-slate-500 { color: #94a3b8 !important; }
          .dark-proposal .border-slate-200 { border-color: #334155 !important; }
          .dark-proposal .border-blue-100 { border-color: #1e40af !important; }
          .dark-proposal .border-indigo-100 { border-color: #1d4ed8 !important; }
          .dark-proposal .border-green-200 { border-color: #166534 !important; }
          .dark-proposal .border-purple-100 { border-color: #6b21a8 !important; }
          .dark-proposal .border-orange-100 { border-color: #9a3412 !important; }
          .dark-proposal .border-amber-200 { border-color: #92400e !important; }
          .dark-proposal .hover\\:border-blue-300:hover { border-color: #3b82f6 !important; }
        `}</style>
      ) : null}
      <header className={isDark ? 'bg-slate-900 shadow-sm border-b border-slate-700 sticky top-0 z-50' : 'bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50'}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className={isDark ? 'text-2xl font-bold text-white' : 'text-2xl font-bold text-slate-900'}>{projectName}</h1>
              <p className={isDark ? 'text-sm text-slate-300' : 'text-sm text-slate-600'}>{labels[lang].offerTitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className={isDark ? 'inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-2 py-1' : 'inline-flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1'}>
                <Languages className={isDark ? 'w-4 h-4 text-slate-300' : 'w-4 h-4 text-slate-500'} />
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    lang === 'ar'
                      ? 'bg-blue-600 text-white rounded-md'
                      : isDark
                        ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 rounded-md'
                  }`}
                  onClick={() => setLang('ar')}
                >
                  {labels[lang].arBtn}
                </button>
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-blue-600 text-white rounded-md'
                      : isDark
                        ? 'bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 rounded-md'
                  }`}
                  onClick={() => setLang('en')}
                >
                  {labels[lang].enBtn}
                </button>
              </div>
              <div className={isDark ? 'inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-2 py-1' : 'inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2 py-1'}>
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white'
                      : isDark
                        ? 'text-slate-200 hover:bg-slate-700'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  <span className="inline-flex items-center gap-1">
                    <Moon className="w-4 h-4" />
                    Dark
                  </span>
                </button>
                <button
                  type="button"
                  className={`px-3 py-2 text-sm font-semibold transition-colors rounded-md ${
                    theme === 'light'
                      ? 'bg-blue-600 text-white'
                      : isDark
                        ? 'text-slate-200 hover:bg-slate-700'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => setTheme('light')}
                >
                  <span className="inline-flex items-center gap-1">
                    <Sun className="w-4 h-4" />
                    Light
                  </span>
                </button>
              </div>
              <a
                href="https://penta-k.com"
                className={isDark ? 'inline-flex items-center rounded-md bg-slate-800 p-1' : 'inline-flex items-center rounded-md bg-slate-900 p-1'}
                aria-label="Penta-k website"
              >
                {logoIndex < logoCandidates.length ? (
                  <img
                    src={logoCandidates[logoIndex]}
                    alt={labels[lang].logoAlt}
                    className="h-12 w-auto object-contain"
                    onError={() => setLogoIndex((idx) => idx + 1)}
                  />
                ) : (
                  <span className="px-3 py-2 text-xs font-bold text-white">Penta-k</span>
                )}
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
          title={labels[lang].studentFeatures}
          subtitle="Student App & Web"
          icon={<Users className="w-7 h-7 text-blue-600" />}
          color="blue"
          items={studentFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].teacherFeatures}
          subtitle="Teacher App"
          icon={<Package className="w-7 h-7 text-green-600" />}
          color="green"
          items={teacherFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].adminFeatures}
          subtitle="Admin App"
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

        <div
          className={`rounded-2xl p-8 mb-8 text-white shadow-xl ${
            isDark ? 'bg-gradient-to-l from-blue-700 to-indigo-800' : 'bg-gradient-to-l from-emerald-600 to-emerald-700'
          }`}
        >
          <div className={`flex items-center gap-3 mb-6 pb-4 border-b ${isDark ? 'border-blue-500' : 'border-emerald-500'}`}>
            <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-500' : 'bg-emerald-500'}`}>
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">{labels[lang].totalCost}</h2>
          </div>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold mb-2">80,000 جنيه مصري</div>
            <div className={`text-lg ${isDark ? 'text-blue-100' : 'text-emerald-100'}`}>{labels[lang].totalCostNote}</div>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {paymentMilestones.map((milestone) => (
                <div key={milestone.title.en} className="bg-white/10 rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold mb-1">{milestone.amount[lang]}</div>
                  <p className={`text-sm ${isDark ? 'text-blue-100' : 'text-emerald-50'}`}>{milestone.title[lang]}</p>
                </div>
              ))}
            </div>
          </div>
          <p className={`text-sm mt-4 ${isDark ? 'text-blue-100' : 'text-emerald-100'}`}>{labels[lang].externalNote}</p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <CreditCard className="w-7 h-7 text-slate-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].paymentGatewaysTitle}</h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-4">
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
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'سيرفر مجاني' : 'Free Server'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'لمدة 6 شهور بعد التسليم' : 'For 6 months after delivery'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'رفع على المتاجر' : 'Store Publishing'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'Google Play & Apple مجاناً' : 'Google Play & Apple free publishing'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'دعم فني مجاني' : 'Free Technical Support'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'لمدة 6 شهور' : 'For 6 months'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'متابعة المنصات' : 'Store & Server Follow-up'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'تحديثات توافق Google و iOS' : 'Google & iOS compliance updates'}</div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
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
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-bold text-slate-900 mb-3">
              {lang === 'ar' ? 'خدمة الدعم الفني تشمل' : 'Technical Support Scope'}
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {technicalSupportScope[lang].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
              title={lang === 'ar' ? 'جودة الكود' : 'Code Quality'}
              text={lang === 'ar' ? 'اهتمام حقيقي بجودة الكود وليس مجرد تنفيذ.' : 'Real focus on quality, not just delivery.'}
            />
            <ValueCard
              icon={<TrendingUp className="w-8 h-8 mb-3" />}
              title={lang === 'ar' ? 'قابلية التوسع' : 'Scalability'}
              text={lang === 'ar' ? 'منصة قابلة للتوسع والنمو مع عدد الطلاب.' : 'Platform built to scale with student growth.'}
            />
            <ValueCard
              icon={<Clock className="w-8 h-8 mb-3" />}
              title={lang === 'ar' ? 'تسليم منظم' : 'Structured Delivery'}
              text={lang === 'ar' ? 'تسليم على مراحل مع متابعة مستمرة.' : 'Milestone-based delivery with steady follow-up.'}
            />
            <ValueCard
              icon={<Users className="w-8 h-8 mb-3" />}
              title={lang === 'ar' ? 'سهولة الإدارة' : 'Easy Management'}
              text={
                lang === 'ar'
                  ? 'لوحة أدمن واضحة لإدارة النظام التعليمي بالكامل.'
                  : 'Clear admin control for full learning operations.'
              }
            />
            <ValueCard
              icon={<DollarSign className="w-8 h-8 mb-3" />}
              title={lang === 'ar' ? 'توفير المستقبل' : 'Future Savings'}
              text={lang === 'ar' ? 'كود نظيف = تكلفة أقل في التطويرات القادمة.' : 'Clean code reduces future update costs.'}
            />
            <ValueCard
              icon={<Award className="w-8 h-8 mb-3" />}
              title={lang === 'ar' ? 'خبرة احترافية' : 'Professional Experience'}
              text={lang === 'ar' ? 'فريق متخصص بخبرة عملية في حلول الإنتاج.' : 'Specialized team with real production experience.'}
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
