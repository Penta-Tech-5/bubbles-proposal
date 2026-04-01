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
    overviewTitle: 'وصف عام لمشروع Task System',
    overviewText:
      'Task System هو تطبيق Windows مخصص لإدارة وتنظيم مهام فرق العمل داخل شركة تنفيذ شبكات. النظام يتيح تسجيل المهام، توزيعها على الموظفين، ومتابعة الحالة بمراحل واضحة (Pending ثم Process ثم Done)، مع فلاتر دقيقة وتقارير قابلة للتصدير إلى Excel حسب المطلوب.',
    studentFeatures: 'مميزات إدارة المهام',
    teacherFeatures: 'مميزات دورة التنفيذ',
    adminFeatures: 'مميزات لوحة المدير',
    deliveryTitle: 'مدة التنفيذ والتسليم',
    projectDuration: 'مدة المشروع: 30 يوم',
    totalCost: 'التكلفة الإجمالية للمشروع',
    totalCostNote: 'شاملة التحليل والتطوير والتقارير والفلاتر والتصدير إلى Excel',
    paymentPlanTitle: 'طريقة الدفع',
    externalNote:
      'ملاحظة: اشتراك السيرفر والدعم الفني اختياريان حسب طريقة التشغيل (محلي/أونلاين) ويتم تجديدهما دوريًا عند الحاجة.',
    paymentGatewaysTitle: 'آلية التقارير والتصدير',
    freeServices: 'Free Services - مميزات مقدمة من شركة Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Running Costs - التكاليف التشغيلية',
    whyUs: 'Why Penta-k? - ليه تختار Penta-k؟',
    whyUsSub: 'نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور',
    contact: 'للتواصل والاستفسار',
    thanks: 'شكرًا لثقتكم في',
    projectFooter: 'نتطلع للعمل معكم على مشروع Task System.',
    logoAlt: 'شعار Penta-k',
    arBtn: 'العربية',
    enBtn: 'English'
  },
  en: {
    offerTitle: 'Detailed Project Offer',
    companyTitle: 'Penta-k Company',
    companyText:
      'A software house specialized in building smart digital solutions and integrated systems with high quality and professional user experience.',
    overviewTitle: 'Task System Project Overview',
    overviewText:
      'Task System is a Windows desktop application for managing and organizing field tasks in a network delivery company. It enables task logging, employee assignment, and clear status tracking (Pending -> Process -> Done), with advanced filtering and Excel-ready reporting.',
    studentFeatures: 'Task Management Features',
    teacherFeatures: 'Execution Workflow Features',
    adminFeatures: 'Manager Dashboard Features',
    deliveryTitle: 'Timeline & Deliverables',
    projectDuration: 'Project duration: 30 days',
    totalCost: 'Total Project Cost',
    totalCostNote: 'Includes analysis, development, filtering, reporting, and Excel export',
    paymentPlanTitle: 'Payment Plan',
    externalNote:
      'Note: Server and support subscriptions are optional based on deployment mode (local/online) and renewed when needed.',
    paymentGatewaysTitle: 'Reporting & Export Approach',
    freeServices: 'Free Services by Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Operating Costs',
    whyUs: 'Why Penta-k?',
    whyUsSub: 'We do not just write code, we build scalable solutions',
    contact: 'Contact & Inquiries',
    thanks: 'Thank you for trusting',
    projectFooter: 'We look forward to delivering Task System with you.',
    logoAlt: 'Penta-k Logo',
    arBtn: 'العربية',
    enBtn: 'English'
  }
};

const mainSections: SectionCard[] = [
  {
    title: {
      ar: 'تسجيل وإدارة المهام',
      en: 'Task Registration & Management'
    },
    description: {
      ar: 'إدخال المهام بشكل منظم مع ربطها بالموقع والنوع والجهة والبيانات التفصيلية.',
      en: 'Structured task entry linked to location, type, owner, and detailed context.'
    },
    icon: FileText,
    points: {
      ar: [
        'إنشاء Task جديدة مع جميع البيانات التشغيلية.',
        'دعم الحقول الشائعة في الشيت الحالي مثل: WO Number، Site Code، Employee Name.',
        'تصنيف المهام حسب النوع، المنطقة، والأولوية.',
        'تسجيل ملاحظات كل مهمة وتحديثاتها.',
        'ربط كل مهمة بحالة تشغيل واضحة داخل النظام.'
      ],
      en: [
        'Create new tasks with full operational details.',
        'Support common current-sheet fields such as WO Number, Site Code, and Employee Name.',
        'Classify tasks by type, area, and priority.',
        'Attach notes and ongoing updates per task.',
        'Maintain clear operational status for each task.'
      ]
    }
  },
  {
    title: {
      ar: 'توزيع الشغل على الموظفين',
      en: 'Employee Assignment'
    },
    description: {
      ar: 'المدير يوزع المهام على الموظفين ويتابع المنفذ والمسؤول وتوقيتات التنفيذ.',
      en: 'Managers assign tasks to employees and track owner, executor, and timeline.'
    },
    icon: Users,
    points: {
      ar: [
        'Assign مباشر للموظف المسؤول عن التنفيذ.',
        'سهولة إرسال المهمة للموظف أو للعميل حسب طبيعة الشغل.',
        'إمكانية إعادة التعيين عند تغيير خطة العمل.',
        'متابعة كل موظف حسب اسمه ومهامه الحالية.',
        'تقليل التداخل وضياع المهام بين فرق العمل.'
      ],
      en: [
        'Direct assignment to the responsible employee.',
        'Easy task forwarding to employees or clients based on workflow needs.',
        'Reassignment support when plans change.',
        'Track each employee by name and active tasks.',
        'Reduce overlap and task loss across teams.'
      ]
    }
  },
  {
    title: {
      ar: 'مراحل التنفيذ (Workflow)',
      en: 'Execution Workflow'
    },
    description: {
      ar: 'كل Task تتحرك بمراحل واضحة: Pending ثم Process ثم Done حتى الإغلاق.',
      en: 'Each task moves through clear statuses: Pending -> Process -> Done.'
    },
    icon: TrendingUp,
    points: {
      ar: [
        'تغيير الحالة حسب المرحلة الحالية للتنفيذ.',
        'تتبع واضح لحركة المهمة داخل دورة العمل.',
        'تقليل الأخطاء مقارنة بالمتابعة اليدوية على Excel.',
        'نظام بسيط مستوحى من Jira لكن مناسب لحجم التشغيل.'
      ],
      en: [
        'Move task status according to execution stage.',
        'Clear lifecycle tracking for every task.',
        'Fewer mistakes vs manual Excel tracking.',
        'Jira-inspired lightweight workflow for your operation.'
      ]
    }
  },
  {
    title: {
      ar: 'الفلاتر والتقارير وملفات Excel',
      en: 'Filtering, Reporting & Excel Export'
    },
    description: {
      ar: 'استخراج البيانات المطلوبة بسرعة مع فلاتر متعددة وإخراج تقرير Excel جاهز.',
      en: 'Quickly retrieve required data through advanced filters and export-ready Excel reports.'
    },
    icon: Code,
    points: {
      ar: [
        'فلترة حسب اسم الموظف، نوع الشغل، المكان، والحالة.',
        'فلترة زمنية حسب فترة التنفيذ أو تاريخ الإنشاء.',
        'تصدير النتائج إلى Excel بنفس الشكل المطلوب للإدارة.',
        'إمكانية تطوير الاستيراد من الشيت الحالي لتسريع الانتقال.'
      ],
      en: [
        'Filter by employee name, task type, location, and status.',
        'Date range filtering by creation or execution period.',
        'Export filtered results to Excel in management-ready format.',
        'Optional import enhancement from existing Excel sheet.'
      ]
    }
  }
];

const studentFeatures: LocalizedList = {
  ar: [
    'إنشاء وتسجيل المهام اليومية من شاشة واحدة.',
    'سهولة إرسال المهام للموظفين أو العملاء بسرعة.',
    'ربط كل مهمة بموظف، موقع، ونوع تنفيذ.',
    'متابعة قائمة المهام المفتوحة والمغلقة.',
    'بحث سريع داخل البيانات التشغيلية.',
    'تحديث حالة المهمة في خطوات بسيطة.',
    'تسجيل ملاحظات داخلية لكل مهمة.',
    'تقليل الاعتماد على الجداول اليدوية المتفرقة.'
  ],
  en: [
    'Create and register daily tasks from one screen.',
    'Easily send tasks to employees or clients.',
    'Link each task to employee, location, and work type.',
    'Track open and closed tasks clearly.',
    'Fast operational search across records.',
    'Update task status in simple workflow steps.',
    'Record internal notes per task.',
    'Reduce dependence on fragmented manual sheets.'
  ]
};

const teacherFeatures: LocalizedList = {
  ar: [
    'مراحل تنفيذ واضحة: Pending ثم Process ثم Done.',
    'إمكانية تحريك المهمة بين المراحل حسب الإنجاز.',
    'عرض المرحلة الحالية لكل مهمة في أي وقت.',
    'سجل تغييرات يساعد الإدارة على المراجعة.',
    'عرض المهام المتأخرة أو المتوقفة بسرعة.',
    'تحسين الانضباط التشغيلي بين الفرق.',
    'تقليل فقدان التفاصيل أثناء التسليم بين الموظفين.'
  ],
  en: [
    'Clear execution statuses: Pending -> Process -> Done.',
    'Move tasks across stages based on progress.',
    'Always know each task current stage.',
    'Change history helps management reviews.',
    'Quick view for delayed or blocked tasks.',
    'Improve operational discipline across teams.',
    'Reduce handoff loss between employees.'
  ]
};

const adminFeatures: LocalizedList = {
  ar: [
    'واجهة إدارة واحدة للمدير/الأدمن فقط.',
    'فلترة متقدمة حسب الموظف، الموقع، نوع الشغل، والحالة.',
    'استخراج تقارير Excel حسب الفلاتر المختارة.',
    'إمكانية أخذ نسخة Backup يدويًا من التطبيق على جهاز العميل في أي وقت.',
    'نسخة Backup دورية على السيرفر للحفاظ على البيانات.',
    'متابعة إجمالي الشغل المنفذ وغير المنفذ.',
    'إدارة بيانات الموظفين المرتبطة بالمهام.',
    'نظام جاهز للتوسع لاحقًا حسب احتياج التشغيل.'
  ],
  en: [
    'Single control panel for manager/admin only.',
    'Advanced filters by employee, location, task type, and status.',
    'Excel exports based on selected filters.',
    'Manual backup export from the app to the client device at any time.',
    'Periodic server-side backup for data protection.',
    'Track completed vs pending operational workload.',
    'Manage employee records linked to tasks.',
    'Scalable foundation for future operational expansion.'
  ]
};

const deliverables: LocalizedList = {
  ar: [
    'تطبيق Windows Desktop مخصص للإدارة فقط.',
    'وحدة إدارة المهام وتوزيعها على الموظفين.',
    'وحدة حالات التنفيذ (Pending -> Process -> Done) مع متابعة الحالة.',
    'فلاتر متقدمة للبحث والاستعلام.',
    'تصدير تقارير Excel حسب الشروط المطلوبة.',
    'تهيئة أولية لاستيراد بيانات الشيت الحالي.'
  ],
  en: [
    'Windows desktop application for management only.',
    'Task creation and employee assignment module.',
    'Status workflow tracking (Pending -> Process -> Done).',
    'Advanced search and filtering module.',
    'Excel report export based on selected criteria.',
    'Initial setup for migration from the current Excel sheet.'
  ]
};

const includedInPrice: LocalizedList = {
  ar: [
    'تحليل دورة العمل الحالية وتحويلها لنظام رقمي.',
    'تصميم واجهة تشغيل عملية وسهلة للمدير.',
    'تطوير التطبيق كاملًا على Windows.',
    'بناء workflow لمراحل التنفيذ بشكل مرن.',
    'تطوير الفلاتر والتقارير وتصدير Excel.',
    'تفعيل خدمة النسخ الاحتياطي (Backup) يدويًا على جهاز العميل + دوريًا على السيرفر.',
    'اختبارات تشغيل شاملة قبل التسليم.',
    'جلسة تسليم وتدريب مبدئي على النظام.'
  ],
  en: [
    'Current process analysis and digital workflow mapping.',
    'Practical manager-focused UI implementation.',
    'Full Windows application development.',
    'Flexible stage-based workflow implementation.',
    'Advanced filtering, reporting, and Excel export.',
    'Enable backup service: manual backup on client device + periodic backup on server.',
    'Comprehensive QA and operational testing.',
    'Handover and initial admin training session.'
  ]
};

const technologies: TechCard[] = [
  {
    name: 'Flutter (Windows Desktop)',
    details: {
      ar: 'تطوير تطبيق ويندوز Desktop سريع ومرن بواجهة حديثة.',
      en: 'Building a modern, responsive Windows desktop application.'
    }
  },
  {
    name: 'Node.js Backend',
    details: {
      ar: 'API لإدارة بيانات المهام والموظفين والتقارير.',
      en: 'API layer for tasks, employee records, and reporting data.'
    }
  },
  {
    name: 'Database (PostgreSQL / SQLite)',
    details: {
      ar: 'قاعدة بيانات منظمة للمهام والحالات وسجل التحديثات.',
      en: 'Structured storage for tasks, statuses, and update history.'
    }
  },
  {
    name: 'Hostinger Server',
    details: {
      ar: 'استضافة اختيارية عند تشغيل النظام أونلاين ومشاركة أكثر من جهاز.',
      en: 'Optional hosting when running online across multiple devices.'
    }
  },
  {
    name: 'Excel Engine',
    details: {
      ar: 'تصدير التقارير بصيغة Excel حسب الفلاتر والحقول المطلوبة.',
      en: 'Excel export engine based on selected filters and required columns.'
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
    title: 'Excel Reporting',
    points: {
      ar: [
        'تصدير البيانات المطلوبة إلى Excel حسب الفلاتر المختارة.',
        'إمكانية تجهيز أكثر من نموذج تقرير (يومي / أسبوعي / شهري).',
        'سهولة مشاركة التقارير مع الإدارة بنفس تنسيق العمل الحالي.'
      ],
      en: [
        'Export required data to Excel based on selected filters.',
        'Support multiple report templates (daily / weekly / monthly).',
        'Easy sharing with management in familiar spreadsheet format.'
      ]
    }
  }
];

const externalCosts: ExternalCost[] = [
  {
    title: { ar: 'اشتراك السيرفر', en: 'Server Subscription' },
    amount: { ar: '1,500 جنيه', en: 'EGP 1,500' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' },
    note: {
      ar: 'رسوم تشغيل سنوية للسيرفر عند تشغيل النظام أونلاين.',
      en: 'Annual server operating fee for online deployment.'
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

const futureEnhancements: LocalizedList = {
  ar: [
    'تطوير تطبيق خاص بالموظفين لمعرفة المهام المطلوبة، مواعيد التسليم، تفاصيل كل مهمة، وسهولة التواصل بما يحقق تنظيمًا أوتوماتيكيًا أدق.',
    'تفعيل نظام إشعارات فورية أولًا بأول لكل مهمة يتم تسليمها أو تحديث حالتها داخل النظام.',
    'تطوير تطبيق للعملاء لمتابعة الأعمال الخاصة بهم، الاشتراكات، الأسعار، والخدمات المقدمة من الشركة.'
  ],
  en: [
    'Build a dedicated employee app to view assigned tasks, due dates, task details, and communication flow with more accurate automated task organization.',
    'Enable real-time notifications for every delivered task and every status update in the system.',
    'Build a client app to track their own jobs, subscriptions, pricing, and company-provided services.'
  ]
};

const paymentMilestones: PaymentMilestone[] = [
  {
    amount: { ar: '5,000 جنيه', en: 'EGP 5,000' },
    title: { ar: 'دفعة مقدمة عند التعاقد', en: 'Advance payment at contract signing' }
  },
  {
    amount: { ar: '10,000 جنيه', en: 'EGP 10,000' },
    title: { ar: 'عند التسليم النهائي والتشغيل', en: 'Upon final delivery and go-live' }
  }
  
];

const projectName = 'Task System';

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
          subtitle="Task Operations"
          icon={<Users className="w-7 h-7 text-blue-600" />}
          color="blue"
          items={studentFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].teacherFeatures}
          subtitle="Workflow Engine"
          icon={<Package className="w-7 h-7 text-green-600" />}
          color="green"
          items={teacherFeatures[lang]}
        />

        <FeatureSection
          title={labels[lang].adminFeatures}
          subtitle="Manager Dashboard"
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
            <div className="text-6xl font-bold mb-2">15,000 جنيه مصري</div>
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

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <FileText className="w-7 h-7 text-slate-700" />
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

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-orange-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-orange-100 rounded-lg">
              <TrendingUp className="w-7 h-7 text-orange-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                {lang === 'ar' ? 'تطويرات مستقبلية يمكن النظر فيها' : 'Future Enhancements (Optional Next Phase)'}
              </h2>
              <p className="text-sm text-slate-600">
                {lang === 'ar'
                  ? 'هذه البنود اختيارية للمرحلة القادمة ويمكن إضافتها حسب خطة التوسع.'
                  : 'These items are optional for a later phase and can be added based on expansion plans.'}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-4">
            {futureEnhancements[lang].map((item) => (
              <div key={item} className="p-4 bg-orange-50 rounded-lg border border-orange-200 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                <p className="text-slate-700">{item}</p>
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
              text={lang === 'ar' ? 'النظام قابل للتوسع مع زيادة فرق العمل وحجم المهام.' : 'The system scales with team size and task volume growth.'}
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
                  ? 'لوحة مدير واضحة لإدارة فرق التنفيذ والمهام اليومية.'
                  : 'Clear manager panel for daily operational task control.'
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
