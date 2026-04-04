import {
  Award,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  FileText,
  Globe,
  Languages,
  Moon,
  Monitor,
  Package,
  PhoneCall,
  Shield,
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
  title: Localized;
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
    overviewTitle: 'وصف عام لمشروع Pyramids Pharmacies',
    overviewText:
      'سيستم متكامل للحضور والانصراف وإدارة الإجازات والتقارير والمرتبات والخصومات لصيدليات Pyramids Pharmacies، مع تطبيق Android + لوحة ويب للإدارة. يدعم تعدد الفروع، تحديد نطاقات الحضور لكل موقع، وتقارير Excel.',
    studentFeatures: 'مميزات النظام الأساسية',
    teacherFeatures: 'مميزات الحضور والانصراف',
    adminFeatures: 'مميزات لوحة الإدارة',
    deliveryTitle: 'مدة التنفيذ والتسليم',
    projectDuration: 'المدة النهائية تُحدد بعد اعتماد عدد الفروع وعدد الموظفين الفعلي.',
    totalCost: 'التكلفة الإجمالية للمشروع',
    totalCostNote: 'سعر شراء النظام بكامل المميزات (الحضور والانصراف + الإجازات + المرتبات والخصومات)',
    paymentPlanTitle: 'طريقة الدفع',
    externalNote:
      'ملاحظة: في حالة الشراء، يتم تطبيق 20 موظف مجانًا ثم 175 جنيه لكل موظف إضافي، مع 7,000 جنيه سنويًا للسيرفر والدعم.',
    paymentGatewaysTitle: 'باقات الاشتراك',
    freeServices: 'Free Services - مميزات مقدمة من شركة Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Running Costs - التكاليف التشغيلية',
    whyUs: 'Why Penta-k? - ليه تختار Penta-k؟',
    whyUsSub: 'نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور',
    contact: 'للتواصل والاستفسار',
    thanks: 'شكرًا لثقتكم في',
    projectFooter: 'نتطلع للعمل معكم على مشروع Pyramids Pharmacies.',
    logoAlt: 'شعار Penta-k',
    arBtn: 'العربية',
    enBtn: 'English'
  },
  en: {
    offerTitle: 'Detailed Project Offer',
    companyTitle: 'Penta-k Company',
    companyText:
      'A software house specialized in building smart digital solutions and integrated systems with high quality and professional user experience.',
    overviewTitle: 'Pyramids Pharmacies System Overview',
    overviewText:
      'An integrated attendance, leave, payroll, deductions, and reporting system for Pyramids Pharmacies with Android app + web admin dashboard. It supports multi-branch geofence attendance and editable Excel exports.',
    studentFeatures: 'Core System Features',
    teacherFeatures: 'Attendance Workflow Features',
    adminFeatures: 'Admin Dashboard Features',
    deliveryTitle: 'Timeline & Deliverables',
    projectDuration: 'Final timeline is confirmed after approving actual branch and employee counts.',
    totalCost: 'Total Project Cost',
    totalCostNote: 'Full purchase price including all features (attendance, leave, payroll, and deductions)',
    paymentPlanTitle: 'Payment Plan',
    externalNote:
      'Note: For purchase model, first 20 employees are free, then EGP 175 per additional employee, plus EGP 7,000 yearly for server & support.',
    paymentGatewaysTitle: 'Subscription Packages',
    freeServices: 'Free Services by Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Operating Costs',
    whyUs: 'Why Penta-k?',
    whyUsSub: 'We do not just write code, we build scalable solutions',
    contact: 'Contact & Inquiries',
    thanks: 'Thank you for trusting',
    projectFooter: 'We look forward to delivering Pyramids Pharmacies system with you.',
    logoAlt: 'Penta-k Logo',
    arBtn: 'العربية',
    enBtn: 'English'
  }
};

const mainSections: SectionCard[] = [
  {
    title: {
      ar: 'إدارة الموظفين والفروع',
      en: 'Employees & Branches Management'
    },
    description: {
      ar: 'تسجيل الموظفين وتعريف جميع الفروع ومواقعها مع ربط كل فرع بنطاق حضور وانصراف.',
      en: 'Register employees and all branches with locations and attendance ranges per branch.'
    },
    icon: FileText,
    points: {
      ar: [
        'إنشاء وتحديث بيانات الموظفين بسهولة.',
        'تسجيل كل أماكن العمل وتحديد موقع كل فرع.',
        'تعريف نطاق جغرافي للحضور والانصراف لكل مكان.',
        'ربط الموظف بفروع العمل المصرح له بها.'
      ],
      en: [
        'Create and update employee profiles easily.',
        'Register all work locations and branch data.',
        'Define geofence attendance range per location.',
        'Link employees to allowed work branches.'
      ]
    }
  },
  {
    title: {
      ar: 'الحضور والانصراف بالموقع',
      en: 'Location-Based Attendance'
    },
    description: {
      ar: 'الموظف يسجل حضور/انصراف من أي فرع ضمن النطاق المسموح، مع قيود أمان التسجيل.',
      en: 'Employees can check in/out from any allowed branch within range, with secure login rules.'
    },
    icon: Users,
    points: {
      ar: [
        'تسجيل الحضور والانصراف عبر الموقع الجغرافي.',
        'منع التسجيل خارج النطاق المحدد للفرع.',
        'كل موظف يسجل جهاز واحد فقط للحماية.',
        'الأدمن يمكنه إعادة فتح تسجيل جهاز لموظف محدد.'
      ],
      en: [
        'Check in/out using geo-location validation.',
        'Block attendance actions outside branch range.',
        'Single-device registration per employee for security.',
        'Admin can re-enable login for selected employees.'
      ]
    }
  },
  {
    title: {
      ar: 'إدارة الإجازات والطلبات',
      en: 'Leave Requests Workflow'
    },
    description: {
      ar: 'الموظف يقدم طلب إجازة من التطبيق، والإدارة توافق أو ترفض مع تتبع كامل للحالة، وربط ذلك بسياسات الخصم.',
      en: 'Employees submit leave requests and admin can approve/reject with full tracking, linked to deduction policies.'
    },
    icon: TrendingUp,
    points: {
      ar: [
        'رفع طلب إجازة من الموظف بسهولة.',
        'موافقة أو رفض الطلب من الأدمن.',
        'حفظ تاريخ جميع الطلبات وقراراتها.',
        'عرض حالة الطلبات لكل موظف.'
      ],
      en: [
        'Simple leave request submission by employee.',
        'Admin approval or rejection workflow.',
        'Full log of requests and decisions.',
        'Request status visibility per employee.'
      ]
    }
  },
  {
    title: {
      ar: 'التقارير والرواتب وملفات Excel',
      en: 'Reports, Payroll & Excel Export'
    },
    description: {
      ar: 'تقارير حضور وغياب ورواتب شاملة مع فلاتر دقيقة واستخراج Excel قابل للتعديل.',
      en: 'Comprehensive attendance, deductions, and payroll reports with editable Excel export.'
    },
    icon: Code,
    points: {
      ar: [
        'فلترة حسب موظف معين أو فرع معين أو تاريخ محدد.',
        'تجميع بيانات الحضور والغياب لجميع الموظفين.',
        'حساب الرواتب والخصومات تلقائيًا حسب اللائحة المعتمدة.',
        'تصدير التقارير بصيغة Excel لإمكانية التعديل.',
        'دعم اللغتين العربية والإنجليزية داخل النظام.'
      ],
      en: [
        'Filter by employee, branch, or specific date.',
        'Aggregate attendance and absence records for all staff.',
        'Automatic payroll and deductions calculation based on policy rules.',
        'Export reports to editable Excel format.',
        'Arabic and English language support.'
      ]
    }
  }
];

const studentFeatures: LocalizedList = {
  ar: [
    'تسجيل الموظفين وتعريف فروع العمل ومواقعها.',
    'تحديد نطاق الحضور والانصراف لكل مكان عمل.',
    'دعم Android + Web ضمن نفس المنظومة.',
    'دعم اللغة العربية والإنجليزية.',
    'إدارة صلاحيات الدخول والتحكم الأمني للمستخدمين.',
    'نظام واضح وقابل للتوسع حسب زيادة الفروع والموظفين.'
  ],
  en: [
    'Employee registration with branch and location setup.',
    'Attendance geofence range per work location.',
    'Android + Web integrated system.',
    'Arabic and English language support.',
    'Controlled user access and security rules.',
    'Scalable architecture for branch and staff growth.'
  ]
};

const teacherFeatures: LocalizedList = {
  ar: [
    'تسجيل حضور وانصراف الموظف من أي مكان عمل مصرح.',
    'تأكيد الموقع الفعلي وقت التسجيل.',
    'قفل التسجيل على جهاز واحد لكل موظف.',
    'إتاحة إعادة تسجيل جهاز جديد من خلال الأدمن.',
    'إدارة طلبات الإجازة (تقديم + موافقة/رفض).',
    'متابعة دورية لالتزام الموظفين بالحضور والانصراف.',
    'ربط نتائج الحضور بقواعد الخصم والمرتبات.'
  ],
  en: [
    'Check-in and check-out from authorized locations.',
    'Geo-location validation during attendance action.',
    'Single-device lock per employee account.',
    'Admin-controlled device reset for specific employee.',
    'Leave request flow (submit + approve/reject).',
    'Continuous attendance compliance monitoring.',
    'Attendance outcomes linked to payroll and deduction rules.'
  ]
};

const adminFeatures: LocalizedList = {
  ar: [
    'لوحة ويب للإدارة والتحكم الكامل في النظام.',
    'اعتماد أو رفض طلبات الإجازات.',
    'تقارير حضور وغياب تفصيلية حسب الفلاتر.',
    'استخراج Excel قابل للتعديل.',
    'إدارة الرواتب ولائحة الخصومات من لوحة الأدمن.',
    'حساب خصومات التأخير والغياب تلقائيًا لكل موظف.',
    'إمكانية فتح تسجيل الدخول مرة أخرى لموظف محدد.',
    'نسخ احتياطي يدوي على جهاز العميل + نسخ دوري على السيرفر.'
  ],
  en: [
    'Web admin dashboard with full system control.',
    'Approve or reject employee leave requests.',
    'Detailed attendance reports with filters.',
    'Editable Excel export for all report outputs.',
    'Payroll and deduction policy management from admin dashboard.',
    'Automatic delay/absence deduction calculation per employee.',
    'Re-enable login for a specific employee when needed.',
    'Manual client-device backup + periodic server backup.'
  ]
};

const deliverables: LocalizedList = {
  ar: [
    'تطبيق Android للموظفين.',
    'لوحة Web Admin للإدارة.',
    'إدارة الموظفين والفروع ونطاقات الحضور.',
    'تسجيل الحضور والانصراف عبر الموقع.',
    'إدارة طلبات الإجازات.',
    'إدارة الرواتب والخصومات التلقائية.',
    'تقارير + تصدير Excel + دعم عربي/إنجليزي.'
  ],
  en: [
    'Android app for employees.',
    'Web admin dashboard.',
    'Employees, branches, and geofence management.',
    'Location-based check-in/check-out.',
    'Leave request management flow.',
    'Payroll management and automated deductions.',
    'Reports + Excel export + bilingual support.'
  ]
};

const includedInPrice: LocalizedList = {
  ar: [
    'تحليل المتطلبات وبناء هيكل النظام.',
    'تطوير تطبيق Android + لوحة Web Admin.',
    'تفعيل التسجيل بالموقع ونطاقات الفروع.',
    'إدارة طلبات الإجازات.',
    'تنفيذ نظام المرتبات + لائحة الخصومات التلقائية.',
    'تقارير الحضور والغياب مع تصدير Excel.',
    'تجهيز النظام بالعربي والإنجليزي.',
    'اختبارات تشغيل وتسليم نهائي.'
  ],
  en: [
    'Requirements analysis and system architecture.',
    'Android app + web admin development.',
    'Geo-attendance and branch-range setup.',
    'Leave requests workflow implementation.',
    'Payroll module + automatic deductions policy engine.',
    'Attendance reports with Excel export.',
    'Arabic/English bilingual setup.',
    'QA testing and final delivery.'
  ]
};

const technologies: TechCard[] = [
  {
    name: 'Flutter (Android)',
    details: {
      ar: 'تطوير تطبيق الموظفين على Android للحضور والانصراف وطلبات الإجازات.',
      en: 'Android employee app for attendance and leave workflows.'
    }
  },
  {
    name: 'Web Admin Dashboard',
    details: {
      ar: 'لوحة ويب لإدارة الموظفين والفروع والتقارير والطلبات.',
      en: 'Web dashboard for employees, branches, reports, and requests management.'
    }
  },
  {
    name: 'Node.js Backend',
    details: {
      ar: 'خدمات API لإدارة الحضور والانصراف والإجازات والتقارير.',
      en: 'API services for attendance, leave requests, and reporting.'
    }
  },
  {
    name: 'Database (PostgreSQL)',
    details: {
      ar: 'قاعدة بيانات مركزية للموظفين، الفروع، والسجلات اليومية.',
      en: 'Centralized database for employees, branches, and daily records.'
    }
  },
  {
    name: 'GPS / Geofence Engine',
    details: {
      ar: 'التحقق من موقع الموظف ونطاق الفرع أثناء الحضور والانصراف.',
      en: 'Location and geofence validation during attendance actions.'
    }
  },
  {
    name: 'Payroll & Excel Reporting Engine',
    details: {
      ar: 'حساب الرواتب والخصومات + استخراج تقارير Excel قابلة للتعديل حسب الموظف/الفرع/التاريخ.',
      en: 'Payroll/deductions calculations with editable Excel exports by employee/branch/date.'
    }
  },
  {
    name: 'Backup & Restore',
    details: {
      ar: 'نسخة احتياطية يدويًا من التطبيق على جهاز العميل + نسخ احتياطي دوري على السيرفر.',
      en: 'Manual backup from the app to client device + periodic server-side backup.'
    }
  }
];

const paymentGateways: PaymentGateway[] = [
  {
    title: { ar: 'اشتراك 6 شهور', en: '6-Month Subscription' },
    points: {
      ar: [
        'اشتراك 6 شهور: 10,000 جنيه.',
        'عدد لا نهائي من الموظفين ضمن الباقة.'
      ],
      en: [
        '6-month subscription: EGP 10,000.',
        'Unlimited employees included in this package.'
      ]
    }
  },
  {
    title: { ar: 'اشتراك سنوي', en: 'Yearly Subscription' },
    points: {
      ar: [
        'اشتراك سنوي: 20,000 جنيه.',
        'عدد لا نهائي من الموظفين ضمن الباقة.'
      ],
      en: [
        'Yearly subscription: EGP 20,000.',
        'Unlimited employees included in this package.'
      ]
    }
  },
  {
    title: { ar: 'اشتراك شهري', en: 'Monthly Subscription' },
    points: {
      ar: ['اشتراك شهر بشهر: 2,000 جنيه.'],
      en: ['Month-by-month subscription: EGP 2,000.']
    }
  },
  {
    title: { ar: 'شراء السيستم', en: 'System Purchase Option' },
    points: {
      ar: [
        'شراء السيستم بعد التعديلات: 47,000 جنيه.',
        'تفصيل الشراء: 8,000 تطويرات + 20 موظف مجاني + 175 جنيه لكل موظف إضافي + 7,000 جنيه سيرفر ودعم سنويًا.',
        'ملحوظة: سعر الموظف الإضافي (175 جنيه) يُدفع مرة واحدة فقط في حالة البيع.'
      ],
      en: [
        'System purchase after requested modifications: EGP 47,000.',
        'Purchase breakdown: EGP 8,000 modifications + 20 free employees + EGP 175 per additional employee + EGP 7,000 yearly for server & support.',
        'Note: Additional employee fee (EGP 175) is paid once only in the purchase model.'
      ]
    }
  }
];

const externalCosts: ExternalCost[] = [
  {
    title: { ar: 'اشتراك السيرفر + الدعم الفني', en: 'Server + Support Subscription' },
    amount: { ar: '7,000 جنيه', en: 'EGP 7,000' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' },
    note: {
      ar: 'رسوم سنوية للتشغيل والاستضافة والمتابعة الفنية.',
      en: 'Annual operations, hosting, and technical follow-up fee.'
    }
  }
];

const technicalSupportScope: LocalizedList = {
  ar: [
    'متابعة السيرفر الأساسي وكفاءته واستقراره بشكل مستمر.',
    'متابعة قاعدة البيانات ونسخ احتياطي دوري للبيانات على السيرفر.',
    'دعم استرجاع النسخ الاحتياطية (Restore) عند الحاجة.',
    'إصلاح الأعطال والأخطاء التشغيلية في التطبيق.',
    'تحسين الأداء عند زيادة حجم البيانات والمستخدمين.',
    'متابعة استقرار نظام التقارير والتصدير إلى Excel.',
    'دعم فني تشغيلي مستمر للإدارة أثناء فترة الاشتراك.'
  ],
  en: [
    'Continuous monitoring of the main production server performance and stability.',
    'Database monitoring and periodic server-side backup routines.',
    'Restore support when backup recovery is needed.',
    'Fixing operational bugs and runtime issues in the app.',
    'Performance tuning as data and usage scale increases.',
    'Maintaining reporting and Excel export stability.',
    'Ongoing operational support for management during subscription period.'
  ]
};

const paymentMilestones: PaymentMilestone[] = [
  {
    amount: { ar: '50%', en: '50%' },
    title: { ar: 'دفعة مقدمة من قيمة الباقة المختارة', en: 'Advance payment from selected package value' }
  },
  {
    amount: { ar: '50%', en: '50%' },
    title: { ar: 'عند التسليم النهائي والتشغيل', en: 'Upon final delivery and go-live' }
  }
];

const projectName = 'Pyramids Pharmacies';

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
          subtitle="Core Attendance System"
          icon={<Users className="w-7 h-7 text-blue-600" />}
          color="blue"
          items={studentFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].teacherFeatures}
          subtitle="Attendance Workflow"
          icon={<Package className="w-7 h-7 text-green-600" />}
          color="green"
          items={teacherFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].adminFeatures}
          subtitle="Admin Control Panel"
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
            <div className="text-6xl font-bold mb-2">47,000 جنيه مصري</div>
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
            <div className="grid md:grid-cols-2 gap-3">
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
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'لمدة شهر بعد التسليم (عند التشغيل أونلاين)' : 'For 1 month after delivery (for online deployment)'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'تهيئة بيانات البداية' : 'Initial Data Setup'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'مساعدة في إدخال/ترتيب أول دفعة بيانات' : 'Assistance with initial data structuring/import'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'دعم فني مجاني' : 'Free Technical Support'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'لمدة 30 يوم بعد التسليم' : 'For 30 days after delivery'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'متابعة التشغيل' : 'Operational Follow-up'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'تحسين الأداء واستقرار التقارير خلال فترة الضمان' : 'Performance and reporting stability follow-up during warranty period'}</div>
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
              text={lang === 'ar' ? 'النظام قابل للتوسع مع زيادة الفروع وعدد الموظفين.' : 'The system scales as branches and employee count grow.'}
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
                  ? 'لوحة إدارة واضحة لمتابعة الحضور والانصراف والطلبات.'
                  : 'Clear admin panel for attendance, leave, and reporting control.'
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

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FileText className="w-7 h-7 text-slate-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">{labels[lang].paymentGatewaysTitle}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {paymentGateways.map((gateway) => (
              <div key={gateway.title.en} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">{gateway.title[lang]}</h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  {gateway.points[lang].map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
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
