/// <reference types="vite/client" />
import React from 'react';
import {
  Bell,
  CheckCircle,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Filter,
  Globe,
  Languages,
  LayoutDashboard,
  MessageCircle,
  Monitor,
  Package,
  PhoneCall,
  Search,
  ShieldCheck,
  ShoppingBag,
  Store,
  Tags
} from 'lucide-react';

type Lang = 'ar' | 'en';
type Localized = Record<Lang, string>;
type LocalizedList = Record<Lang, string[]>;

type FeatureBlock = {
  title: Localized;
  description: Localized;
  icon: React.ComponentType<{ className?: string }>;
  points: LocalizedList;
};

type PriceCard = {
  title: Localized;
  amount: Localized;
  note: Localized;
};

const labels: Record<Lang, Record<string, string>> = {
  ar: {
    company: 'شركة Penta-k',
    offer: 'عرض سعر تفصيلي',
    project: 'منصة رقمية لعرض المنتجات',
    target: 'السوق المستهدف: العراق',
    overviewTitle: 'فكرة المشروع',
    overview:
      'منصة رقمية لعرض المنتجات وربط المشترين بالبائعين مباشرة عبر واتساب. المنصة ليست متجرًا إلكترونيًا ولا تستقبل المدفوعات أو تدير الشحن أو الطلبات، وجميع عمليات البيع تتم خارج النظام.',
    includedTitle: 'نطاق التنفيذ',
    featuresTitle: 'المميزات الرئيسية',
    outOfScopeTitle: 'خارج نطاق الإصدار الأول',
    timelineTitle: 'مدة التنفيذ والتصميم',
    priceTitle: 'التكلفة وطريقة الدفع',
    costsTitle: 'التشغيل والاستضافة',
    deliverablesTitle: 'مخرجات التسليم',
    futureTitle: 'خارطة التطوير المستقبلية',
    contactTitle: 'للتواصل والاستفسار',
    footer: 'نتطلع لتنفيذ منصة عرض المنتجات بالصورة المطلوبة وقابلية التوسع المستقبلية.',
    ar: 'العربية',
    en: 'English'
  },
  en: {
    company: 'Penta-k Company',
    offer: 'Detailed Quote',
    project: 'Digital Product Listing Platform',
    target: 'Target market: Iraq',
    overviewTitle: 'Project Concept',
    overview:
      'A digital platform for listing products and connecting buyers directly with sellers through WhatsApp. It is not an e-commerce store, does not collect payments, and does not manage orders or shipping.',
    includedTitle: 'Implementation Scope',
    featuresTitle: 'Key Features',
    outOfScopeTitle: 'Out Of Scope For Version 1',
    timelineTitle: 'Timeline & UI Design',
    priceTitle: 'Cost & Payment Plan',
    costsTitle: 'Hosting & Operations',
    deliverablesTitle: 'Final Deliverables',
    futureTitle: 'Future Roadmap',
    contactTitle: 'Contact & Inquiries',
    footer: 'We look forward to delivering the product listing platform with the required scope and future scalability.',
    ar: 'العربية',
    en: 'English'
  }
};

const heroStats: Array<{ label: Localized; value: Localized }> = [
  {
    label: { ar: 'التكلفة', en: 'Cost' },
    value: { ar: '1200 دولار', en: '$1,200' }
  },
  {
    label: { ar: 'مدة التنفيذ', en: 'Timeline' },
    value: { ar: '60 يوم', en: '60 days' }
  },
  {
    label: { ar: 'المنصات', en: 'Platforms' },
    value: { ar: 'Android + iOS + Web', en: 'Android + iOS + Web' }
  },
  {
    label: { ar: 'الدعم المجاني', en: 'Free Support' },
    value: { ar: '60 يوم', en: '60 days' }
  }
];

const featureBlocks: FeatureBlock[] = [
  {
    title: { ar: 'تطبيق المشتري', en: 'Buyer App' },
    description: {
      ar: 'تصفح منظم للمنتجات والمتاجر مع بحث وفلاتر ومفضلة.',
      en: 'Organized product and store browsing with search, filters, and favorites.'
    },
    icon: ShoppingBag,
    points: {
      ar: [
        'إنشاء حساب وتسجيل دخول واستعادة كلمة المرور.',
        'تصفح المنتجات والمتاجر المعتمدة والنشطة فقط.',
        'البحث حسب الاسم والتصنيف والمتجر والبائع والمدينة والسعر.',
        'حفظ المنتجات في المفضلة ومتابعة المتاجر.',
        'تقييم البائعين والمنتجات والإبلاغ عن المحتوى المخالف.'
      ],
      en: [
        'Account registration, login, and password recovery.',
        'Browse only active and approved products and stores.',
        'Search by name, category, store, seller, city, and price.',
        'Save favorites and follow stores.',
        'Rate sellers/products and report inappropriate content.'
      ]
    }
  },
  {
    title: { ar: 'وظائف البائع', en: 'Seller Features' },
    description: {
      ar: 'إدارة متجر البائع ومنتجاته واشتراكه من داخل التطبيق.',
      en: 'Seller store, products, and subscription management from the app.'
    },
    icon: Store,
    points: {
      ar: [
        'التسجيل كبائع وإرسال بيانات النشاط التجاري.',
        'إنشاء متجر وإضافة الشعار والغلاف والوصف والتصنيف والمدينة.',
        'إضافة المنتجات ورفع الصور وتعديل البيانات والحالة.',
        'تغيير حالة المنتج إلى Available أو Reserved أو Sold أو Hidden.',
        'مشاهدة إحصائيات المتجر والمنتجات وضغطات واتساب.'
      ],
      en: [
        'Seller registration with business information.',
        'Create store with logo, cover, description, category, and city.',
        'Add products, upload images, update details and status.',
        'Set product status as Available, Reserved, Sold, or Hidden.',
        'View store/product analytics and WhatsApp click statistics.'
      ]
    }
  },
  {
    title: { ar: 'لوحة تحكم الإدارة', en: 'Admin Web Dashboard' },
    description: {
      ar: 'تحكم كامل في المستخدمين والبائعين والمتاجر والمنتجات والاشتراكات.',
      en: 'Full control over users, sellers, stores, products, and subscriptions.'
    },
    icon: LayoutDashboard,
    points: {
      ar: [
        'Dashboard لإدارة المستخدمين والبائعين والمتاجر والمنتجات.',
        'إدارة التصنيفات والتصنيفات الفرعية والأيقونات والصور.',
        'إدارة الاشتراكات والباقات Trial وBronze وSilver وGold.',
        'مراجعة المنتجات والموافقة أو الرفض أو الإخفاء أو طلب التعديل.',
        'إدارة المحتوى: الشروط، الخصوصية، من نحن، المساعدة، الأسئلة الشائعة.'
      ],
      en: [
        'Dashboard for users, sellers, stores, and products.',
        'Manage categories, subcategories, icons, and images.',
        'Manage Trial, Bronze, Silver, and Gold subscription plans.',
        'Approve, reject, hide, delete, or request product edits.',
        'Manage terms, privacy policy, about, help center, and FAQs.'
      ]
    }
  },
  {
    title: { ar: 'تكامل واتساب', en: 'WhatsApp Integration' },
    description: {
      ar: 'التواصل بين المشتري والبائع يتم خارج المنصة عبر واتساب فقط.',
      en: 'Buyer and seller communication happens outside the platform through WhatsApp only.'
    },
    icon: MessageCircle,
    points: {
      ar: [
        'زر تواصل مع البائع داخل صفحة المنتج.',
        'فتح واتساب مباشرة برسالة تلقائية قابلة للتعديل.',
        'الرسالة تتضمن رابط المنتج وصورته ونص عربي قابل للتعديل.',
        'المنصة لا تحفظ المحادثات ولا تراقبها ولا تتدخل في البيع.',
        'جميع المدفوعات والاتفاقات والشحن تتم خارج المنصة.'
      ],
      en: [
        'Contact seller button on product details.',
        'Open WhatsApp directly with editable auto-message.',
        'Message includes product link, image, and editable Arabic text.',
        'The platform does not store or monitor conversations.',
        'Payments, agreements, and shipping remain outside the platform.'
      ]
    }
  },
  {
    title: { ar: 'الاشتراكات', en: 'Subscriptions' },
    description: {
      ar: 'مصدر دخل المنصة هو اشتراكات البائعين مع فترة تجريبية قابلة للتعديل.',
      en: 'The platform revenue model is seller subscriptions with configurable trial period.'
    },
    icon: Tags,
    points: {
      ar: [
        'المشتري يستخدم المنصة مجانًا.',
        'اشتراكات البائعين فقط مع فترة تجريبية افتراضية 30 يومًا.',
        'الاشتراك يتم يدويًا في الإصدار الأول والدفع خارج التطبيق.',
        'الإدارة تفعل الاشتراك بعد التأكد من الدفع.',
        'إشعارات قبل انتهاء التجربة أو الاشتراك.'
      ],
      en: [
        'Buyers use the platform for free.',
        'Seller-only subscriptions with a default 30-day trial.',
        'Manual subscriptions in version 1 with offline payment.',
        'Admin activates subscription after payment confirmation.',
        'Notifications before trial or subscription expiry.'
      ]
    }
  },
  {
    title: { ar: 'الأمان والإشراف', en: 'Security & Moderation' },
    description: {
      ar: 'حماية الحسابات والملفات وإدارة البلاغات وسجلات العمليات.',
      en: 'Account protection, file safety, reports management, and audit logs.'
    },
    icon: ShieldCheck,
    points: {
      ar: [
        'تشفير كلمات المرور وجلسات آمنة.',
        'حماية رفع الصور والملفات وحماية API.',
        'النسخ الاحتياطي وسجل العمليات Audit Logs.',
        'نظام بلاغات للمنتجات والمتاجر والحسابات والتقييمات.',
        'حالات البلاغ: New وUnder Review وResolved وRejected وClosed.'
      ],
      en: [
        'Password encryption and secure sessions.',
        'Secure image/file uploads and API protection.',
        'Backups and audit logs.',
        'Reports for products, stores, accounts, images, and reviews.',
        'Report states: New, Under Review, Resolved, Rejected, Closed.'
      ]
    }
  }
];

const includedItems: LocalizedList = {
  ar: [
    'تطبيق Android للمشتري والبائع.',
    'تطبيق iOS للمشتري والبائع.',
    'لوحة تحكم ويب للإدارة.',
    'Backend API وقاعدة بيانات قابلة للتوسع.',
    'File Storage آمن لصور المنتجات والمتاجر.',
    'Notification Service للإشعارات داخل التطبيق وPush Notifications.',
    'نظام بحث وفلاتر وترتيب حسب الأحدث والسعر والمشاهدات والتقييم.',
    'نظام تقييمات وبلاغات وإشراف على المحتوى.',
    'تصميمات UI قبل بدء التطوير لضمان اعتماد احتياجات العميل.',
    'تدريب الإدارة على استخدام النظام بعد التسليم.'
  ],
  en: [
    'Android app for buyers and sellers.',
    'iOS app for buyers and sellers.',
    'Web admin dashboard.',
    'Scalable Backend API and database.',
    'Secure file storage for product and store images.',
    'Notification service for in-app and push notifications.',
    'Search, filters, and sorting by latest, price, views, and rating.',
    'Ratings, reports, and content moderation.',
    'UI designs before development to validate client needs.',
    'Admin training after delivery.'
  ]
};

const outOfScope: LocalizedList = {
  ar: [
    'الدفع الإلكتروني أو الدفع داخل التطبيق.',
    'سلة التسوق وCheckout.',
    'إدارة الطلبات أو الشحن أو التوصيل.',
    'الدردشة الداخلية داخل التطبيق.',
    'العمولات على عمليات البيع.',
    'ضمان عمليات البيع أو حل النزاعات بين البائع والمشتري.'
  ],
  en: [
    'Online payment or in-app payment.',
    'Cart and checkout.',
    'Order, shipping, or delivery management.',
    'Internal in-app chat.',
    'Sales commissions.',
    'Sales guarantee or buyer/seller dispute handling.'
  ]
};

const deliverables: LocalizedList = {
  ar: [
    'الكود المصدري الكامل.',
    'Backend API.',
    'تطبيق Android.',
    'تطبيق iOS.',
    'لوحة التحكم.',
    'قاعدة البيانات.',
    'API Documentation.',
    'Deployment Documentation.',
    'ملفات البناء والإعدادات.',
    'نشر التطبيقات على Google Play وApp Store عند اختيار الرفع على حساباتنا.'
  ],
  en: [
    'Full source code.',
    'Backend API.',
    'Android app.',
    'iOS app.',
    'Admin dashboard.',
    'Database.',
    'API documentation.',
    'Deployment documentation.',
    'Build and configuration files.',
    'Publishing to Google Play and App Store when using our accounts.'
  ]
};

const futureRoadmap: LocalizedList = {
  ar: [
    'الدفع الإلكتروني والدفع داخل التطبيق.',
    'الإعلانات والمنتجات المميزة والمتاجر المميزة.',
    'لغات إضافية.',
    'تحليلات متقدمة ولوحات ذكاء أعمال.',
    'توصيات بالذكاء الاصطناعي.',
    'حملات تسويقية وتكاملات خارجية.'
  ],
  en: [
    'Online and in-app payments.',
    'Ads, featured products, and featured stores.',
    'Additional languages.',
    'Advanced analytics and BI dashboards.',
    'AI recommendations.',
    'Marketing campaigns and external integrations.'
  ]
};

const paymentPlan: PriceCard[] = [
  {
    title: { ar: 'دفعة مقدمة', en: 'Advance Payment' },
    amount: { ar: '360 دولار', en: '$360' },
    note: { ar: '30% عند الاتفاق وبدء مرحلة التصميم.', en: '30% at agreement and UI design kickoff.' }
  },
  {
    title: { ar: 'بعد تسليم تطبيق المشتري والبائع', en: 'After Buyer/Seller App Delivery' },
    amount: { ar: '280 دولار', en: '$280' },
    note: { ar: 'تسليم التطبيق الذي يشمل وظائف المشتري والبائع.', en: 'Delivery of the app that includes buyer and seller features.' }
  },
  {
    title: { ar: 'بعد تسليم لوحة التحكم', en: 'After Dashboard Delivery' },
    amount: { ar: '280 دولار', en: '$280' },
    note: { ar: 'لوحة تحكم ويب للإدارة والتقارير والاشتراكات.', en: 'Web admin dashboard for management, reports, and subscriptions.' }
  },
  {
    title: { ar: 'بعد نشر التطبيق على المتاجر', en: 'After App Store Publishing' },
    amount: { ar: '280 دولار', en: '$280' },
    note: { ar: 'بعد رفع التطبيقات على Google Play وApp Store.', en: 'After publishing the apps to Google Play and App Store.' }
  }
];

const operatingCosts: PriceCard[] = [
  {
    title: { ar: 'الدعم الفني', en: 'Technical Support' },
    amount: { ar: '60 يوم مجانًا', en: '60 days free' },
    note: { ar: 'يشمل إصلاح الأخطاء والمساعدة في النشر والاستشارات التشغيلية.', en: 'Includes bug fixes, publishing help, and operational consultation.' }
  },
  {
    title: { ar: 'رفع التطبيقات', en: 'App Publishing' },
    amount: { ar: 'مشمول', en: 'Included' },
    note: { ar: 'السعر شامل رفع التطبيقات إذا أراد العميل الرفع على حساباتنا.', en: 'Included when the client chooses publishing on our store accounts.' }
  },
  {
    title: { ar: 'السيرفر', en: 'Server' },
    amount: { ar: '60 دولار سنويًا', en: '$60 / year' },
    note: { ar: 'عند الاشتراك معنا، حسب كوتا الاستهلاك والمساحة المطلوبة.', en: 'When hosted with us, based on usage quota and required capacity.' }
  },
  {
    title: { ar: 'الدومين', en: 'Domain' },
    amount: { ar: 'حسب سعر المزود', en: 'Provider pricing' },
    note: { ar: 'نقوم بتجهيز وربط الدومين ضمن عملية النشر حسب الاسم المتاح.', en: 'We configure and connect the domain during deployment based on available domain name.' }
  }
];

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const textDir = lang === 'ar' ? 'rtl' : 'ltr';
  const logoSrc = `${import.meta.env.BASE_URL}logo.png`;

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir={textDir}>
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img src={logoSrc} alt="Penta-k" className="h-11 w-auto object-contain" />
            <div>
              <p className="text-sm text-cyan-300">{labels[lang].offer}</p>
              <h1 className="text-xl font-bold text-white sm:text-2xl">{labels[lang].project}</h1>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 p-1">
            <Languages className="h-4 w-4 text-slate-300" />
            <button
              type="button"
              onClick={() => setLang('ar')}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${lang === 'ar' ? 'bg-cyan-500 text-slate-950' : 'text-slate-200'}`}
            >
              {labels[lang].ar}
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${lang === 'en' ? 'bg-cyan-500 text-slate-950' : 'text-slate-200'}`}
            >
              {labels[lang].en}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-800 bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:py-16">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
                <Globe className="h-4 w-4" />
                {labels[lang].target}
              </div>
              <h2 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl">{labels[lang].project}</h2>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{labels[lang].overview}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label.en} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <p className="text-sm text-slate-400">{stat.label[lang]}</p>
                    <p className="mt-2 text-xl font-bold text-white">{stat.value[lang]}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
              <p className="text-sm font-semibold text-cyan-200">{labels[lang].priceTitle}</p>
              <p className="mt-4 text-5xl font-black text-white">$1,200</p>
              <p className="mt-2 text-slate-300">{lang === 'ar' ? 'شاملة التصميم والتطوير والنشر حسب النطاق.' : 'Includes design, development, and publishing based on scope.'}</p>
              <div className="mt-6 rounded-xl border border-slate-700 bg-slate-950/60 p-4">
                <p className="font-bold text-white">{lang === 'ar' ? 'تصميمات UI قبل التطوير' : 'UI designs before development'}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {lang === 'ar'
                    ? 'نقدم تصميمات واجهات قبل بدء التطوير للتأكد من احتياجات العميل واعتماد شكل الرحلة قبل التنفيذ.'
                    : 'We provide UI designs before development to validate client needs and approve the user journey before implementation.'}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <SectionHeader icon={FileText} title={labels[lang].includedTitle} subtitle={lang === 'ar' ? 'الإصدار الأول 1.0' : 'Version 1.0'} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {includedItems[lang].map((item) => (
              <InfoPill key={item} text={item} />
            ))}
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <SectionHeader icon={Package} title={labels[lang].featuresTitle} subtitle={lang === 'ar' ? 'مشتري، بائع، وإدارة' : 'Buyer, seller, and admin'} />
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {featureBlocks.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title.en} className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{feature.title[lang]}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{feature.description[lang]}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {feature.points[lang].map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm leading-6 text-slate-300">
                          <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeader icon={Filter} title={labels[lang].outOfScopeTitle} subtitle={lang === 'ar' ? 'لتوضيح حدود الإصدار الأول' : 'Version 1 boundaries'} />
            <div className="grid gap-3">
              {outOfScope[lang].map((item) => (
                <InfoPill key={item} text={item} muted />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader icon={Bell} title={labels[lang].futureTitle} subtitle={lang === 'ar' ? 'طلبات تطوير لاحقة' : 'Later development items'} />
            <div className="grid gap-3">
              {futureRoadmap[lang].map((item) => (
                <InfoPill key={item} text={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <SectionHeader
              icon={Clock}
              title={labels[lang].timelineTitle}
              subtitle={lang === 'ar' ? '60 يوم بعد تنفيذ التصميمات وموافقة العميل عليها' : '60 days after UI designs are completed and approved by the client'}
            />
            <div className="grid gap-4 md:grid-cols-3">
              <TimelineItem title={lang === 'ar' ? 'مرحلة التصميم' : 'Design phase'} text={lang === 'ar' ? 'تصميم UI واعتماد رحلة المستخدم قبل التطوير.' : 'UI design and user journey approval before development.'} />
              <TimelineItem title={lang === 'ar' ? 'مرحلة التطوير' : 'Development phase'} text={lang === 'ar' ? 'تطوير التطبيقات، لوحة التحكم، Backend، وقاعدة البيانات.' : 'Build apps, dashboard, backend, and database.'} />
              <TimelineItem title={lang === 'ar' ? 'الاختبار والنشر' : 'Testing & publishing'} text={lang === 'ar' ? 'اختبار النظام، تجهيز النشر، وتدريب الإدارة.' : 'System testing, deployment preparation, and admin training.'} />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <SectionHeader icon={DollarSign} title={labels[lang].priceTitle} subtitle={lang === 'ar' ? 'المقدم 30% والباقي على مراحل التسليم' : '30% upfront and the rest by delivery milestones'} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {paymentPlan.map((item) => (
              <PriceBox key={item.title.en} item={item} lang={lang} />
            ))}
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <SectionHeader icon={Monitor} title={labels[lang].costsTitle} subtitle={lang === 'ar' ? 'الدعم، الرفع، السيرفر، والدومين' : 'Support, publishing, server, and domain'} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {operatingCosts.map((item) => (
                <PriceBox key={item.title.en} item={item} lang={lang} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <SectionHeader icon={Search} title={labels[lang].deliverablesTitle} subtitle={lang === 'ar' ? 'بعد السداد تنتقل ملكية الكود والوثائق حسب الاتفاق' : 'Source and documentation ownership transfers after full payment'} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {deliverables[lang].map((item) => (
              <InfoPill key={item} text={item} />
            ))}
          </div>
        </section>

        <section className="border-t border-slate-800 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-white">{labels[lang].contactTitle}</h2>
                  <p className="mt-2 text-slate-400">{labels[lang].footer}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="https://penta-k.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950">
                    <Globe className="h-5 w-5" />
                    penta-k.com
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="tel:+201061942646" dir="ltr" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-white">
                    <PhoneCall className="h-5 w-5" />
                    +20 10 61942646
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionHeader({
  icon: Icon,
  title,
  subtitle
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function InfoPill({ text, muted = false }: { text: string; muted?: boolean }) {
  return (
    <div className={`flex items-start gap-2 rounded-xl border p-3 text-sm leading-6 ${muted ? 'border-amber-400/20 bg-amber-400/10 text-amber-100' : 'border-slate-800 bg-slate-900 text-slate-300'}`}>
      <CheckCircle className={`mt-1 h-4 w-4 shrink-0 ${muted ? 'text-amber-300' : 'text-cyan-400'}`} />
      <span>{text}</span>
    </div>
  );
}

function TimelineItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function PriceBox({ item, lang }: { item: PriceCard; lang: Lang }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <h3 className="text-lg font-bold text-white">{item.title[lang]}</h3>
      <p className="mt-3 text-3xl font-black text-cyan-300" dir="ltr">
        {item.amount[lang]}
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-400">{item.note[lang]}</p>
    </div>
  );
}
