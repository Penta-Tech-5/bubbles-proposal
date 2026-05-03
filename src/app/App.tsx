/// <reference types="vite/client" />
import React from 'react';
import {
  BarChart3,
  Bell,
  CheckCircle,
  Clock,
  DollarSign,
  ExternalLink,
  FilePenLine,
  FileText,
  Globe,
  Languages,
  Monitor,
  Moon,
  PhoneCall,
  Shield,
  ShieldCheck,
  Smartphone,
  Sun,
  Truck,
  Users
} from 'lucide-react';

type Lang = 'ar' | 'en';
type Theme = 'dark' | 'light';
type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type FeatureBlock = {
  title: Localized;
  description: Localized;
  icon: React.ComponentType<{ className?: string }>;
  points: LocalizedList;
};

type CostBlock = {
  title: Localized;
  amount: Localized;
  note: Localized;
};

const labels: Record<
  Lang,
  {
    offerTitle: string;
    companyTitle: string;
    companyText: string;
    projectName: string;
    overviewTitle: string;
    overviewText: string;
    featuresTitle: string;
    priceTitle: string;
    freeServerTitle: string;
    externalCostsTitle: string;
    appPublishingTitle: string;
    paymentMethodsTitle: string;
    contactTitle: string;
    footerText: string;
    arBtn: string;
    enBtn: string;
    themeDark: string;
    themeLight: string;
    simpleSiteTitle: string;
  }
> = {
  ar: {
    offerTitle: 'عرض سعر تفصيلي',
    companyTitle: 'شركة Penta-k',
    companyText: 'شركة متخصصة في تصميم وتطوير الحلول الرقمية والأنظمة الذكية بجودة تنفيذ احترافية.',
    projectName: 'منصة طبية لإدارة المرضى والروشتات',
    overviewTitle: 'نظرة عامة على النظام المقترح',
    overviewText:
      'منصة طبية متكاملة تشمل Mobile App للمرضى على iOS و Android، وWeb Dashboard للدكتور، مع صفحة ويب بسيطة للتشغيل اليدوي بدل Google Forms وWhatsApp.',
    featuresTitle: 'المتطلبات الأساسية',
    priceTitle: 'التكلفة الإجمالية',
    freeServerTitle: 'الخدمات المجانية',
    externalCostsTitle: 'التكاليف الخارجية بعد الإطلاق',
    appPublishingTitle: 'رفع التطبيقات على المتاجر',
    paymentMethodsTitle: 'طرق الدفع داخل النظام',
    contactTitle: 'للتواصل والاستفسار',
    footerText: 'نتطلع للعمل معكم على المشروع الجديد.',
    arBtn: 'العربية',
    enBtn: 'English',
    themeDark: 'داكن',
    themeLight: 'فاتح',
    simpleSiteTitle: 'الويب البسيط للتشغيل اليدوي'
  },
  en: {
    offerTitle: 'Detailed Quote',
    companyTitle: 'Penta-k Company',
    companyText: 'A company specialized in designing and developing digital solutions and smart systems with professional delivery quality.',
    projectName: 'Medical Patient & Prescription Platform',
    overviewTitle: 'Proposed System Overview',
    overviewText:
      'An integrated medical platform with a patient mobile app for iOS and Android, a doctor web dashboard, and a simple frontend website for manual operations instead of Google Forms and WhatsApp.',
    featuresTitle: 'Core Requirements',
    priceTitle: 'Total Cost',
    freeServerTitle: 'Included Free Service',
    externalCostsTitle: 'Post-Launch External Costs',
    appPublishingTitle: 'App Store Publishing',
    paymentMethodsTitle: 'In-System Payment Methods',
    contactTitle: 'Contact & Inquiries',
    footerText: 'We look forward to working with you on this new project.',
    arBtn: 'العربية',
    enBtn: 'English',
    themeDark: 'Dark',
    themeLight: 'Light',
    simpleSiteTitle: 'Simple Frontend Operations Site'
  }
};

const heroStats: Array<{ title: Localized; value: Localized }> = [
  {
    title: { ar: 'التطبيقات', en: 'Apps' },
    value: { ar: "اندرويد + ios", en: 'Android + ios' }
  },
  {
    title: { ar: 'لوحة الطبيب', en: 'Doctor Dashboard' },
    value: { ar: 'ويب', en: 'Web' }
  },
  {
    title: { ar: 'التكلفة', en: 'Price' },
    value: { ar: '60,000 جنيه', en: 'EGP 60,000' }
  },
  {
    title: { ar: 'رفع أول سنة', en: 'First Year Publishing' },
    value: { ar: 'مجانًا', en: 'Free' }
  }
];

const featureBlocks: FeatureBlock[] = [
  {
    title: { ar: 'تطبيق المريض', en: 'Patient App' },
    description: {
      ar: 'واجهة سهلة للمريض لمتابعة حالته وخدماته اليومية.',
      en: 'An easy patient interface for daily health and service follow-up.'
    },
    icon: Smartphone,
    points: {
      ar: ['تخزين بيانات طبية آمن.', 'نظام روشتة إلكترونية.', 'تنبيهات مواعيد الجرعات.', 'متابعة حالة الطلبات والتوصيل.'],
      en: ['Secure medical data storage.', 'Electronic prescription system.', 'Dosage schedule notifications.', 'Order and delivery status tracking.']
    }
  },
  {
    title: { ar: 'لوحة الطبيب', en: 'Doctor Dashboard' },
    description: {
      ar: 'لوحة ويب للطبيب لإدارة المرضى والروشتات بسرعة.',
      en: 'A web dashboard for doctors to manage patients and prescriptions quickly.'
    },
    icon: Monitor,
    points: {
      ar: ['مراجعة بيانات المرضى.', 'إصدار ومتابعة الروشتات.', 'إدارة الحالات والزيارات.', 'صلاحيات حسب الدور الوظيفي.'],
      en: ['Review patient records.', 'Create and manage prescriptions.', 'Handle cases and visits.', 'Role-based permissions.']
    }
  },
  {
    title: { ar: 'الأمان والصلاحيات', en: 'Security & Roles' },
    description: {
      ar: 'تخزين محكم مع تحكم واضح في الأدوار والصلاحيات.',
      en: 'Locked-down storage with clear control over roles and permissions.'
    },
    icon: ShieldCheck,
    points: {
      ar: ['تخزين آمن للبيانات الطبية.', 'Role-based access.', 'حماية الوصول حسب المستخدم.', 'تنظيم كامل للصلاحيات.'],
      en: ['Secure medical storage.', 'Role-based access.', 'User-specific access control.', 'Structured permission management.']
    }
  },
  {
    title: { ar: 'الإشعارات الطبية', en: 'Medical Notifications' },
    description: {
      ar: 'تنبيهات دقيقة للجرعات والمواعيد والمتابعة.',
      en: 'Precise notifications for doses, appointments, and follow-up.'
    },
    icon: Bell,
    points: {
      ar: ['مواعيد الجرعات.', 'تذكير بالمواعيد الطبية.', 'تنبيهات حالة الطلب.', 'إشعارات المتابعة.'],
      en: ['Dose reminders.', 'Medical appointment alerts.', 'Order status notifications.', 'Follow-up reminders.']
    }
  },
  {
    title: { ar: 'المدفوعات والتوصيل', en: 'Payments & Delivery' },
    description: {
      ar: 'تجربة دفع ومتابعة توصيل منظمة داخل المنصة.',
      en: 'A structured payment and delivery tracking flow inside the platform.'
    },
    icon: Truck,
    points: {
      ar: ['Instapay.', 'Fawry.', 'كروت الدفع البنكية.', 'تتبع التوصيل ومراحل الحالة.'],
      en: ['Instapay.', 'Fawry.', 'Bank card payments.', 'Delivery tracking and status stages.']
    }
  },
  {
    title: { ar: 'التحليلات والتقارير', en: 'Analytics & Reports' },
    description: {
      ar: 'لوحات واضحة لمتابعة الاستخدام والعمليات.',
      en: 'Clear dashboards for usage and operational insights.'
    },
    icon: BarChart3,
    points: {
      ar: ['إحصائيات الاستخدام.', 'تحليلات تشغيلية.', 'تقارير متابعة.', 'رؤية أعمق لأداء المنصة.'],
      en: ['Usage statistics.', 'Operational analytics.', 'Monitoring reports.', 'Deeper platform performance insights.']
    }
  },
  {
    title: { ar: 'الويب اليدوي', en: 'Manual Frontend Website' },
    description: {
      ar: 'بديل بسيط لـ Google Forms وWhatsApp لتشغيل الطلبات يدويًا.',
      en: 'A simple alternative to Google Forms and WhatsApp for manual processing.'
    },
    icon: Globe,
    points: {
      ar: ['صفحة ويب Frontend فقط.', 'تشغيل يدوي بالكامل.', 'استقبال وتسجيل الطلبات بشكل أبسط.', 'بديل واضح للواتساب والنماذج الخارجية.'],
      en: ['Frontend-only website.', 'Fully manual operations.', 'Simplified request capture and processing.', 'Clear alternative to WhatsApp and external forms.']
    }
  }
];

const includedItems: LocalizedList = {
  ar: [
    'Mobile App للمرضى على iOS و Android.',
    'Web Dashboard للطبيب.',
    'تخزين بيانات طبية آمن.',
    'نظام روشتة إلكترونية.',
    'Notifications لمواعيد الجرعات.',
    'Payment عبر Instapay و Fawry والكروت.',
    'Delivery tracking.',
    'Analytics وتقارير تشغيلية.',
    'Role-based access.',
    'صفحة ويب بسيطة للتشغيل اليدوي.'
  ],
  en: [
    'Patient mobile app for iOS and Android.',
    'Doctor web dashboard.',
    'Secure medical data storage.',
    'Electronic prescription system.',
    'Dosage schedule notifications.',
    'Payment via Instapay, Fawry, and cards.',
    'Delivery tracking.',
    'Analytics and operational reports.',
    'Role-based access.',
    'Simple frontend operations website.'
  ]
};

const paymentMethods: LocalizedList = {
  ar: ['Instapay', 'Fawry', 'البطاقات البنكية'],
  en: ['Instapay', 'Fawry', 'Bank cards']
};

const externalCosts: CostBlock[] = [
  {
    title: { ar: 'رفع أول سنة', en: 'First Year Publishing' },
    amount: { ar: 'مجانًا', en: 'Free' },
    note: {
      ar: 'أول مرة للرفع على المتاجر تكون مجانًا لمدة سنة كاملة.',
      en: 'The first publishing year on app stores is free for a full year.'
    }
  },
  {
    title: { ar: 'رفع Apple بعد السنة الأولى', en: 'Apple After Year 1' },
    amount: { ar: '60 دولار سنويًا', en: '$60 / year' },
    note: {
      ar: 'الاشتراك السنوي الرسمي بعد انتهاء سنة الرفع المجانية.',
      en: 'Official annual renewal after the free publishing year ends.'
    }
  },
  {
    title: { ar: 'رفع Google بعد السنة الأولى', en: 'Google After Year 1' },
    amount: { ar: '20 دولار سنويًا', en: '$20 / year' },
    note: {
      ar: 'الاشتراك السنوي الرسمي بعد انتهاء سنة الرفع المجانية.',
      en: 'Official annual renewal after the free publishing year ends.'
    }
  }
];

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const [theme, setTheme] = React.useState<Theme>('dark');

  const isDark = theme === 'dark';
  const shellClass = isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900';
  const headerClass = isDark ? 'bg-slate-950/90 border-slate-800 text-slate-50' : 'bg-white/90 border-slate-200 text-slate-900';
  const panelClass = isDark ? 'bg-slate-900 border-slate-700 shadow-[0_24px_80px_rgba(2,6,23,0.35)]' : 'bg-white border-slate-200 shadow-[0_24px_80px_rgba(15,23,42,0.08)]';
  const softClass = isDark ? 'bg-slate-800/70 border-slate-700' : 'bg-slate-50 border-slate-200';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textSecondary = isDark ? 'text-slate-300' : 'text-slate-600';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';

  return (
    <div className={`${shellClass} min-h-screen`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <header className={`sticky top-0 z-50 border-b backdrop-blur ${headerClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 min-w-0">
              <img src="/logo.png" alt={labels[lang].companyTitle} className="h-12 w-auto object-contain shrink-0" />
              <div className="min-w-0">
                <h1 className={`text-xl sm:text-2xl font-bold truncate ${textPrimary}`}>{labels[lang].projectName}</h1>
                <p className={`text-sm ${textSecondary}`}>{labels[lang].offerTitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <div className={`inline-flex items-center gap-2 rounded-2xl border px-2 py-1 ${softClass}`}>
                <Languages className={`w-4 h-4 ${textSecondary}`} />
                <button
                  type="button"
                  onClick={() => setLang('ar')}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    lang === 'ar'
                      ? 'bg-cyan-600 text-white'
                      : isDark
                        ? 'text-slate-200 hover:bg-slate-700'
                        : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {labels[lang].arBtn}
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    lang === 'en'
                      ? 'bg-cyan-600 text-white'
                      : isDark
                        ? 'text-slate-200 hover:bg-slate-700'
                        : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {labels[lang].enBtn}
                </button>
              </div>

              <div className={`inline-flex items-center gap-2 rounded-2xl border px-2 py-1 ${softClass}`}>
                <button
                  type="button"
                  onClick={() => setTheme('dark')}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    isDark ? 'bg-cyan-600 text-white' : 'text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Moon className="w-4 h-4" />
                    {labels[lang].themeDark}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('light')}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
                    !isDark ? 'bg-cyan-600 text-white' : 'text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Sun className="w-4 h-4" />
                    {labels[lang].themeLight}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <section className="rounded-[2rem] bg-gradient-to-br from-cyan-700 via-blue-800 to-slate-950 text-white p-8 sm:p-10 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-8 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm mb-5">
                <Shield className="w-4 h-4" />
                <span>{labels[lang].companyTitle}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-4">{labels[lang].projectName}</h2>
              <p className="text-white/85 text-lg sm:text-xl leading-relaxed max-w-3xl">{labels[lang].overviewText}</p>

              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-8">
                {heroStats.map((stat) => (
                  <div key={stat.title.en} className="rounded-2xl bg-white/10 border border-white/15 p-4 backdrop-blur-sm">
                    <p className="text-sm text-white/70 mb-2">{stat.title[lang]}</p>
                    <p className="text-lg font-bold">{stat.value[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white/10 border border-white/15 p-6 backdrop-blur-sm">
              <p className="text-sm text-white/70 mb-2">{labels[lang].priceTitle}</p>
              <div className="text-5xl font-black mb-3">60,000</div>
              <div className="text-lg text-white/85 mb-5">جنيه مصري / EGP</div>
              <div className="space-y-3 text-sm text-white/90">
                <p className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  {lang === 'ar'
                    ? 'السعر يشمل تطبيق المريض، لوحة الطبيب، والويب البسيط للتشغيل اليدوي.'
                    : 'The price includes the patient app, doctor dashboard, and the simple manual operations website.'}
                </p>
                <p className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  {lang === 'ar'
                    ? 'طريقة السداد: يتم الاتفاق عليها مع العميل بعد اعتماد التفاصيل النهائية.'
                    : 'Payment method: to be agreed with the client after final scope approval.'}
                </p>
                <p className="rounded-2xl bg-white/10 border border-white/10 p-4">
                  {lang === 'ar'
                    ? 'أول سنة لرفع التطبيقات على المتاجر مجانية بالكامل.'
                    : 'The first publishing year on app stores is completely free.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 mt-8">
          <div className={`rounded-[1.75rem] border p-7 ${panelClass}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-cyan-500/15 text-cyan-300' : 'bg-cyan-100 text-cyan-700'}`}>
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].overviewTitle}</h3>
                <p className={textSecondary}>{labels[lang].overviewText}</p>
              </div>
            </div>
            <div className={`rounded-2xl border p-5 ${softClass}`}>
              <p className={`text-sm leading-8 ${textSecondary}`}>
                {lang === 'ar'
                  ? 'المنصة تعمل بشكل منظم بين المريض والطبيب، مع صفحة ويب Frontend فقط لتسجيل الطلبات وتوزيعها يدويًا بدل الاعتماد على Google Forms و WhatsApp. الفكرة هنا هي تقليل التعقيد وتحويل التشغيل إلى واجهة بسيطة وواضحة.'
                  : 'The platform is organized around the patient and doctor workflow, with a frontend-only website for manual request capture and distribution instead of relying on Google Forms and WhatsApp. The goal is to simplify operations and keep the workflow clear and controlled.'}
              </p>
            </div>
          </div>

          <div className={`rounded-[1.75rem] border p-7 ${panelClass}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className={`p-3 rounded-xl ${isDark ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].freeServerTitle}</h3>
                <p className={textSecondary}>{lang === 'ar' ? 'الخدمة الوحيدة المجانية خلال التنفيذ' : 'The only free service during implementation'}</p>
              </div>
            </div>
            <div className={`rounded-2xl border p-5 ${softClass}`}>
              <p className={`text-lg font-bold mb-2 ${textPrimary}`}>{lang === 'ar' ? 'سيرفر مجاني' : 'Free server'}</p>
              <p className={textSecondary}>
                {lang === 'ar'
                  ? 'السيرفر يكون مجانيًا طوال مدة التنفيذ فقط، بدون إدراج أي خدمات مجانية إضافية أخرى.'
                  : 'The server is free only during the implementation period, with no additional free services included.'}
              </p>
            </div>
          </div>
        </section>

        <section className={`rounded-[1.75rem] border p-7 mt-8 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-cyan-500/15 text-cyan-300' : 'bg-cyan-100 text-cyan-700'}`}>
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].featuresTitle}</h3>
              <p className={textSecondary}>{labels[lang].projectName}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
            {featureBlocks.map((block) => {
              const Icon = block.icon;
              return (
                <article key={block.title.en} className={`rounded-2xl border p-5 ${softClass}`}>
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`p-3 rounded-xl ${isDark ? 'bg-cyan-500/15 text-cyan-300' : 'bg-cyan-100 text-cyan-700'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${textPrimary}`}>{block.title[lang]}</h4>
                      <p className={`text-sm mt-1 ${textSecondary}`}>{block.description[lang]}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {block.points[lang].map((point) => (
                      <li key={point} className={`flex items-start gap-2 ${textSecondary}`}>
                        <CheckCircle className="w-4 h-4 mt-0.5 text-cyan-500 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className={`rounded-[1.75rem] border p-7 mt-8 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-blue-500/15 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].priceTitle}</h3>
              <p className={textSecondary}>{lang === 'ar' ? 'يشمل جميع العناصر الأساسية الموضحة بالأسفل.' : 'Includes all core items listed below.'}</p>
            </div>
          </div>

          <div className={`rounded-2xl border p-5 mb-6 ${softClass}`}>
            <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-3">
              {includedItems[lang].map((item) => (
                <div key={item} className={`flex items-start gap-2 rounded-xl border p-3 ${isDark ? 'border-cyan-500/20 bg-cyan-500/10' : 'border-cyan-100 bg-cyan-50'}`}>
                  <CheckCircle className="w-4 h-4 mt-1 text-cyan-500 shrink-0" />
                  <span className={`text-sm ${textSecondary}`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={`text-sm ${textMuted}`}>{lang === 'ar' ? 'الطريقة النهائية للسداد يتم الاتفاق عليها مع العميل بعد اعتماد التفاصيل النهائية.' : 'Final payment terms will be agreed with the client after scope approval.'}</p>
        </section>

        <section className={`rounded-[1.75rem] border p-7 mt-8 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>
              <Monitor className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].appPublishingTitle}</h3>
              <p className={textSecondary}>{lang === 'ar' ? 'أول سنة رفع مجاني ثم الرسوم السنوية الرسمية.' : 'First year free, then official annual renewal fees apply.'}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {externalCosts.map((cost) => (
              <div key={cost.title.en} className={`rounded-2xl border p-5 ${softClass}`}>
                <h4 className={`text-lg font-bold ${textPrimary}`}>{cost.title[lang]}</h4>
                <p className="text-3xl font-black text-cyan-600 mt-3" dir="ltr">
                  {cost.amount[lang]}
                </p>
                <p className={`text-sm mt-3 ${textSecondary}`}>{cost.note[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`rounded-[1.75rem] border p-7 mt-8 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-amber-500/15 text-amber-300' : 'bg-amber-100 text-amber-700'}`}>
              <FilePenLine className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].paymentMethodsTitle}</h3>
              <p className={textSecondary}>{lang === 'ar' ? 'المنصة ستدعم وسائل الدفع الموضحة بالأسفل.' : 'The platform will support the payment methods below.'}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {paymentMethods[lang].map((method) => (
              <div key={method} className={`rounded-2xl border px-5 py-4 text-center font-semibold ${softClass} ${textPrimary}`}>
                {method}
              </div>
            ))}
          </div>
        </section>

        <section className={`rounded-[1.75rem] border p-7 mt-8 ${panelClass}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-700 text-slate-200' : 'bg-slate-100 text-slate-700'}`}>
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h3 className={`text-2xl font-bold ${textPrimary}`}>{labels[lang].contactTitle}</h3>
              <p className={textSecondary}>{labels[lang].companyTitle}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <a href="https://penta-k.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-500 font-semibold hover:underline">
              <Globe className="w-5 h-5" />
              penta-k.com
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="tel:+201061942646" dir="ltr" className="inline-flex items-center gap-2 text-emerald-500 font-semibold hover:underline">
              <PhoneCall className="w-5 h-5" />
              +20 10 61942646
            </a>
          </div>

          <div className={`mt-8 pt-6 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
            <p className={textSecondary}>{labels[lang].footerText}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
