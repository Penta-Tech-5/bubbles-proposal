/// <reference types="vite/client" />
import {
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  Code,
  DollarSign,
  ExternalLink,
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
  Users,
  X
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

type SmsPlan = {
  tier: Localized;
  price: Localized;
  volume: Localized;
  note?: Localized;
};

type GalleryImage = {
  src: string;
  title: Localized;
};

type GalleryKind = 'mobile' | 'desktop';

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
    overviewTitle: 'وصف عام لمشروع منصة خدمات السيارات عند الطلب',
    overviewText:
      'منصة رقمية لطلب خدمات السيارات عند الطلب (غسيل، كفرات، بطاريات، صيانة خفيفة) حيث يطلب العميل الخدمة ويستقبل عروض أسعار من مقدمي الخدمة القريبين، مع نظام تشغيل وإدارة متكامل.',
    studentFeatures: 'مميزات تطبيق العملاء',
    teacherFeatures: 'مميزات تطبيق مقدمي الخدمة',
    adminFeatures: 'مميزات لوحة الإدارة',
    deliveryTitle: 'مدة التنفيذ والتسليم',
    projectDuration: 'مدة المشروع: 4 شهور',
    totalCost: 'التكلفة الإجمالية للمشروع',
    totalCostNote: 'شاملة تطبيقات العميل + مقدم الخدمة + الإدارة (موبايل + ديسكتوب) مع الربط الكامل',
    paymentPlanTitle: 'طريقة الدفع',
    externalNote:
      'ملاحظة: بعد الفترات المجانية تبدأ اشتراكات التشغيل (الدعم الفني، السيرفر، ومنصات التطبيقات) حسب الخيار المناسب.',
    paymentGatewaysTitle: 'طرق الدفع ونموذج الربح',
    freeServices: 'Free Services - مميزات مقدمة من شركة Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Running Costs - التكاليف التشغيلية',
    whyUs: 'Why Penta-k? - ليه تختار Penta-k؟',
    whyUsSub: 'نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور',
    contact: 'للتواصل والاستفسار',
    thanks: 'شكرًا لثقتكم في',
    projectFooter: 'نتطلع للعمل معكم على مشروع منصة خدمات السيارات عند الطلب.',
    logoAlt: 'شعار Penta-k',
    arBtn: 'العربية',
    enBtn: 'English'
  },
  en: {
    offerTitle: 'Detailed Project Offer',
    companyTitle: 'Penta-k Company',
    companyText:
      'A software house specialized in building smart digital solutions and integrated systems with high quality and professional user experience.',
    overviewTitle: 'On-Demand Car Services Platform Overview',
    overviewText:
      'A digital on-demand car services platform (car wash, tires, batteries, light maintenance) where customers request services and receive competitive offers from nearby service providers.',
    studentFeatures: 'Customer App Features',
    teacherFeatures: 'Service Provider App Features',
    adminFeatures: 'Admin Dashboard Features',
    deliveryTitle: 'Timeline & Deliverables',
    projectDuration: 'Project duration: 4 months',
    totalCost: 'Total Project Cost',
    totalCostNote: 'Includes customer, provider, and admin apps (mobile + desktop) with full integration',
    paymentPlanTitle: 'Payment Plan',
    externalNote:
      'Note: After free periods, operations subscriptions start (support, server, and app-store management) based on selected option.',
    paymentGatewaysTitle: 'Payment Methods & Revenue Model',
    freeServices: 'Free Services by Penta-k',
    technologies: 'Technologies & Development Standards',
    externalCosts: 'External Operating Costs',
    whyUs: 'Why Penta-k?',
    whyUsSub: 'We do not just write code, we build scalable solutions',
    contact: 'Contact & Inquiries',
    thanks: 'Thank you for trusting',
    projectFooter: 'We look forward to delivering your on-demand car services platform.',
    logoAlt: 'Penta-k Logo',
    arBtn: 'العربية',
    enBtn: 'English'
  }
};

const mainSections: SectionCard[] = [
  {
    title: {
      ar: 'فكرة المنصة',
      en: 'Platform Concept'
    },
    description: {
      ar: 'العميل يطلب خدمة سيارات ويستقبل عروض أسعار تنافسية من مقدمي الخدمة القريبين.',
      en: 'Customers request car services and receive competitive offers from nearby providers.'
    },
    icon: FileText,
    points: {
      ar: [
        'خدمات عند الطلب: غسيل، كفرات، بطاريات، صيانة خفيفة.',
        'استقبال عروض متعددة لنفس الطلب.',
        'الاعتماد على القرب الجغرافي لسرعة الاستجابة.',
        'اختيار أفضل عرض حسب السعر والتقييم.'
      ],
      en: [
        'On-demand services: wash, tires, batteries, light maintenance.',
        'Multiple offers per customer request.',
        'Geo-proximity matching for faster service.',
        'Choose best offer by price and rating.'
      ]
    }
  },
  {
    title: {
      ar: 'أهداف المشروع',
      en: 'Project Goals'
    },
    description: {
      ar: 'رفع جودة الخدمة وزيادة كفاءة التشغيل وتحقيق دخل مستدام للمنصة.',
      en: 'Improve service quality, operational efficiency, and sustainable platform revenue.'
    },
    icon: Users,
    points: {
      ar: [
        'تسهيل الوصول لخدمات السيارات في أي وقت.',
        'خلق منافسة بين مقدمي الخدمة لتحسين الجودة.',
        'الاعتماد على نظام تقييمات فعال.',
        'تشغيل المنصة بكفاءة عبر لوحة إدارة مركزية.'
      ],
      en: [
        'Easier access to car services at any time.',
        'Competitive provider market for better quality.',
        'Ratings-driven quality improvement.',
        'Efficient platform operations via central admin.'
      ]
    }
  },
  {
    title: {
      ar: 'تطبيق العملاء',
      en: 'Customer App'
    },
    description: {
      ar: 'تجربة عميل متكاملة من تسجيل الحساب حتى الطلب والدفع والتقييم.',
      en: 'End-to-end customer journey from signup to service request, payment, and rating.'
    },
    icon: TrendingUp,
    points: {
      ar: [
        'تسجيل حساب وتحديد الموقع.',
        'طلب الخدمة واستقبال عروض متعددة.',
        'تتبع مقدم الخدمة لحظيًا.',
        'دردشة مباشرة + دفع + تقييم.'
      ],
      en: [
        'Account signup and location selection.',
        'Request service and receive multiple offers.',
        'Real-time provider tracking.',
        'Live chat, payment, and rating.'
      ]
    }
  },
  {
    title: {
      ar: 'تطبيق مقدمي الخدمة',
      en: 'Service Provider App'
    },
    description: {
      ar: 'تطبيق متكامل لمقدمي الخدمة لإدارة الطلبات والعروض والأرباح.',
      en: 'A complete provider app for handling requests, offers, execution, and earnings.'
    },
    icon: Code,
    points: {
      ar: [
        'تسجيل الحساب وتفعيل الاشتراك.',
        'استقبال الطلبات وتقديم عروض أسعار.',
        'تنفيذ الطلبات ومتابعة الأرباح.',
        'GPS + تقييمات + دردشة متكاملة + تعدد لغات.'
      ],
      en: [
        'Account registration and subscription activation.',
        'Receive requests and submit price offers.',
        'Execute orders and track earnings.',
        'GPS, ratings, integrated chat, and multilingual support.'
      ]
    }
  }
];

const studentFeatures: LocalizedList = {
  ar: [
    'تسجيل حساب العميل بسرعة.',
    'طلب الخدمة وتحديد الموقع بسهولة.',
    'استقبال عروض أسعار من مقدمي خدمة متعددين.',
    'اختيار العرض المناسب حسب السعر والتقييم.',
    'تتبع مقدم الخدمة على الخريطة.',
    'دردشة مباشرة مع مقدم الخدمة.',
    'دعم الدفع الإلكتروني والنقدي.',
    'نظام تقييم بعد إتمام الخدمة.'
  ],
  en: [
    'Fast customer account registration.',
    'Service request with location selection.',
    'Receive offers from multiple providers.',
    'Choose offer based on price and rating.',
    'Track provider on map.',
    'Direct chat with provider.',
    'Electronic and cash payment support.',
    'Post-service rating workflow.'
  ]
};

const teacherFeatures: LocalizedList = {
  ar: [
    'تسجيل وتفعيل حساب مقدم الخدمة.',
    'استقبال طلبات العملاء القريبة.',
    'تقديم عروض أسعار تنافسية.',
    'إدارة تنفيذ الطلبات خطوة بخطوة.',
    'متابعة الأرباح وحركة الطلبات.',
    'تحديد الموقع GPS أثناء التشغيل.',
    'نظام تقييمات لتحسين الثقة والجودة.',
    'دعم الدفع الإلكتروني والنقدي.',
    'دردشة متكاملة وتعدد اللغات.'
  ],
  en: [
    'Provider account registration and activation.',
    'Receive nearby customer requests.',
    'Submit competitive pricing offers.',
    'Manage order execution lifecycle.',
    'Track earnings and order history.',
    'GPS positioning during operation.',
    'Ratings system for trust and quality.',
    'Electronic and cash payment support.',
    'Integrated chat and multilingual support.'
  ]
};

const adminFeatures: LocalizedList = {
  ar: [
    'إدارة المستخدمين ومقدمي الخدمة.',
    'إدارة الخدمات والعمولات.',
    'متابعة الطلبات في الوقت الفعلي.',
    'إدارة المدفوعات.',
    'التقارير والتحليلات التشغيلية.',
    'إدارة الاشتراكات والباقات.',
    'لوحة تحكم موبايل Android + ديسكتوب Windows.'
  ],
  en: [
    'Manage customers and service providers.',
    'Services and commissions management.',
    'Real-time order monitoring.',
    'Payments management.',
    'Operational reports and analytics.',
    'Subscriptions and plans management.',
    'Android mobile admin app + Windows desktop app.'
  ]
};

const deliverables: LocalizedList = {
  ar: [
    'تطبيق العميل: Android + iOS.',
    'تطبيق مقدم الخدمة: Android.',
    'تطبيق الإدارة: Android.',
    'تطبيق ديسكتوب Windows للإدارة.',
    'تطبيق ديسكتوب Windows لمقدمي الخدمة.',
    'نظام الطلبات والعروض والتقييمات والدردشة.',
    'الدفع الإلكتروني والنقدي + تعدد اللغات.'
  ],
  en: [
    'Customer app: Android + iOS.',
    'Service provider app: Android.',
    'Admin app: Android.',
    'Windows desktop app for admin.',
    'Windows desktop app for service providers.',
    'Orders, offers, ratings, and chat system.',
    'Electronic/cash payments with multilingual support.'
  ]
};

const includedInPrice: LocalizedList = {
  ar: [
    'تحليل المتطلبات وتخطيط تجربة المستخدم.',
    'تطوير تطبيقات العميل/مقدم الخدمة/الإدارة.',
    'تطوير نسخ ديسكتوب Windows للإدارة ومقدمي الخدمة.',
    'تنفيذ نظام الطلبات والعروض والتتبع والدردشة.',
    'تنفيذ نظام تقييمات متعدد الأطراف.',
    'الربط مع الدفع الإلكتروني + النقدي.',
    'الاختبارات الشاملة والجودة والأمان.',
    'النشر والتسليم النهائي.'
  ],
  en: [
    'Requirements analysis and UX planning.',
    'Development of customer/provider/admin apps.',
    'Windows desktop apps for admin and providers.',
    'Order, offer, tracking, and chat workflows.',
    'Multi-party rating system.',
    'Electronic + cash payment integration.',
    'Comprehensive QA, stability, and security checks.',
    'Deployment and final delivery.'
  ]
};

const technologies: TechCard[] = [
  {
    name: 'Flutter Mobile',
    details: {
      ar: 'تطوير تطبيقات العميل ومقدم الخدمة والإدارة على Android و iOS حسب النطاق.',
      en: 'Mobile development for customer, provider, and admin apps (Android/iOS by scope).'
    }
  },
  {
    name: 'Flutter Windows Desktop',
    details: {
      ar: 'نسخ Windows للإدارة ومقدمي الخدمة لمتابعة التشغيل وإدارة الطلبات.',
      en: 'Windows desktop apps for admin and service providers operations.'
    }
  },
  {
    name: 'Node.js Backend',
    details: {
      ar: 'خدمات API لإدارة الطلبات والعروض والدردشة والمدفوعات والتقييمات.',
      en: 'API services for requests, offers, chat, payments, and ratings.'
    }
  },
  {
    name: 'Database (PostgreSQL)',
    details: {
      ar: 'قاعدة بيانات مركزية لإدارة المستخدمين والطلبات وحركة المنصة.',
      en: 'Centralized data layer for users, orders, and platform operations.'
    }
  },
  {
    name: 'Maps & GPS',
    details: {
      ar: 'تحديد المواقع وربط العملاء بمقدمي الخدمة القريبين وتتبع التنفيذ.',
      en: 'Location mapping, nearby provider matching, and live tracking.'
    }
  },
  {
    name: 'Realtime Chat & Notifications',
    details: {
      ar: 'مراسلة فورية بين العميل ومقدم الخدمة مع تنبيهات لحالة الطلب.',
      en: 'Live chat between customer and provider with real-time order notifications.'
    }
  },
  {
    name: 'Payment Integrations',
    details: {
      ar: 'دعم الدفع الإلكتروني والنقدي ضمن دورة الطلب.',
      en: 'Electronic and cash payment flows in the order lifecycle.'
    }
  }
];

const paymentGateways: PaymentGateway[] = [
  {
    title: { ar: 'طرق الدفع داخل المنصة', en: 'Supported Payment Methods' },
    points: {
      ar: ['الدفع الإلكتروني.', 'الدفع النقدي.'],
      en: [
        'Electronic payments.',
        'Cash payments.'
      ]
    }
  },
  {
    title: { ar: 'نموذج الربح التشغيلي', en: 'Platform Revenue Model' },
    points: {
      ar: [
        'عمولات على الطلبات المنفذة.',
        'اشتراكات لمقدمي الخدمة.',
        'تحسين جودة الخدمة عبر المنافسة والتقييمات.'
      ],
      en: [
        'Commissions on completed orders.',
        'Subscriptions for service providers.',
        'Quality uplift through competition and ratings.'
      ]
    }
  }
];

const externalCosts: ExternalCost[] = [
  {
    title: { ar: 'اشتراك الدعم الفني', en: 'Technical Support Subscription' },
    amount: { ar: '10000 جنيه مصري', en: 'EGP 10,000' },
    subtitle: { ar: 'سنويًا بعد 6 شهور دعم مجاني', en: 'Yearly after 6 free support months' },
    note: {
      ar: 'يشمل: صيانة السيرفر بشكل مستمر، تحديثات أمنية على السيرفر والسيستم، إصلاح أي أخطاء، أولوية الرد على الاستفسارات، وإخطاركم بالتحديثات والتطويرات أولًا بأول.',
      en: 'Includes continuous server maintenance, full security updates, bug fixing, priority response, and proactive updates/enhancement notices.'
    }
  },
  {
    title: { ar: 'باقة السيرفر الخاص (Dedicated)', en: 'Dedicated Server Package' },
    amount: { ar: '6000 جنيه مصري', en: 'EGP 6,000' },
    subtitle: { ar: 'سنويًا (تكلفة السيرفر فقط)', en: 'Yearly (server cost only)' },
    note: {
      ar: 'مخصص للعميل على سيرفر منفصل خاص به بالكامل.',
      en: 'For clients who require a fully dedicated private server.'
    }
  },
  {
    title: { ar: 'باقة السيرفر المشترك (Shared)', en: 'Shared Server Package' },
    amount: { ar: '3000 جنيه مصري', en: 'EGP 3,000' },
    subtitle: { ar: 'سنويًا', en: 'Yearly' },
    note: {
      ar: 'في حالة الاستضافة على سيرفر مشترك مع عميل آخر.',
      en: 'For hosting on a shared server with another client.'
    }
  },
  {
    title: { ar: 'سياسة الترقية والنقل', en: 'Upgrade & Migration Policy' },
    amount: { ar: 'مجانًا', en: 'Free' },
    subtitle: { ar: 'عند الحاجة لشريحة أعلى', en: 'When higher tier is needed' },
    note: {
      ar: 'يتم إخطار العميل عند الحاجة لمساحة أكبر أو شريحة أعلى، وعملية النقل أو الترقية تتم مجانًا.',
      en: 'Client is notified if larger capacity/higher tier is required, and migration/upgrade to higher tier is performed free of charge.'
    }
  },
  {
    title: { ar: 'رفع التطبيقات على منصات الشركة', en: 'Publishing on Company Store Accounts' },
    amount: { ar: 'Apple: 60$ سنويًا + Google: 20$ سنويًا', en: 'Apple: $60/year + Google: $20/year' },
    subtitle: { ar: 'مع متابعة دورية كاملة من الشركة', en: 'With full periodic follow-up by company' },
    note: {
      ar: 'يشمل الصيانة الدورية، الإخطار بأي تحديثات أو إنذارات من Google/Apple، ويمكن نقل التطبيقات لاحقًا إلى حساب العميل مجانًا في أي وقت.',
      en: 'Includes periodic maintenance and alerts for Google/Apple requirements. Apps can be transferred later to client-owned accounts for free anytime.'
    }
  },
  {
    title: { ar: 'رفع التطبيقات على حساب العميل', en: 'Publishing on Client-Owned Accounts' },
    amount: { ar: 'اشتراك دعم فني للمنصات: 50$ سنويًا', en: 'Store technical support: $50/year' },
    subtitle: { ar: 'لمنصتي Google و Apple', en: 'For both Google and Apple platforms' },
    note: {
      ar: 'إذا كانت التطبيقات على حسابات الشركة تكون المتابعة الكاملة مسؤولية الشركة، أما على حساب العميل فيتوفر اشتراك دعم المنصات السنوي المذكور.',
      en: 'When apps stay on company accounts, platform follow-up is fully handled by the company. On client accounts, the above yearly store-support plan applies.'
    }
  }
];

const technicalSupportScope: LocalizedList = {
  ar: [
    'صيانة السيرفر بشكل مستمر طوال فترة الاشتراك.',
    'تحديثات أمنية دورية على السيرفر والسيستم كاملًا.',
    'إصلاح أي أخطاء تشغيلية تظهر أثناء الاستخدام.',
    'أولوية في الرد على الاستفسارات وطلبات الدعم.',
    'إخطار العميل بأي تحديثات مهمة تخص النظام أو المنصات.',
    'عرض فرص التطوير والتحسين بشكل دوري.'
  ],
  en: [
    'Continuous server maintenance during subscription period.',
    'Periodic security updates for both server and full system.',
    'Fixing any operational errors that appear in production.',
    'Priority response for support questions and incidents.',
    'Client notifications for important system/store updates.',
    'Regular recommendations for enhancements and improvements.'
  ]
};

const smsPlans: SmsPlan[] = [
  {
    tier: { ar: 'الفئة الأولى', en: 'Tier 1' },
    price: { ar: '130 ريال', en: 'SAR 130' },
    volume: { ar: '1,000 رسالة', en: '1,000 messages' }
  },
  {
    tier: { ar: 'الفئة الثانية', en: 'Tier 2' },
    price: { ar: '500 ريال', en: 'SAR 500' },
    volume: { ar: '5,000 رسالة', en: '5,000 messages' }
  },
  {
    tier: { ar: 'الفئة الثالثة', en: 'Tier 3' },
    price: { ar: '900 ريال', en: 'SAR 900' },
    volume: { ar: '10,000 رسالة', en: '10,000 messages' }
  },
  {
    tier: { ar: 'الفئة الرابعة', en: 'Tier 4' },
    price: { ar: '3700 ريال', en: 'SAR 3,700' },
    volume: { ar: '50,000 رسالة', en: '50,000 messages' }
  },
  {
    tier: { ar: 'الفئة الخامسة', en: 'Tier 5' },
    price: { ar: '6900 ريال', en: 'SAR 6,900' },
    volume: { ar: '100,000 رسالة', en: '100,000 messages' }
  },
  {
    tier: { ar: 'الفئة الخاصة', en: 'Custom Tier' },
    price: { ar: 'حسب الاتفاق', en: 'Custom pricing' },
    volume: { ar: 'للكميات الكبيرة والجهات الخيرية', en: 'For high-volume and charitable entities' }
  }
];

const bubblesBasePath = `${import.meta.env.BASE_URL}bubbles/`;
const bubblesDesktopBasePath = `${import.meta.env.BASE_URL}bubbles-desktop/`;

const bubblesGalleryImages: GalleryImage[] = [
  {
    src: `${bubblesBasePath}bubbles-home.png`,
    title: { ar: 'الصفحة الرئيسية', en: 'Home Screen' }
  },
  {
    src: `${bubblesBasePath}bubbles-orders.png`,
    title: { ar: 'الطلبات', en: 'Orders' }
  },
  {
    src: `${bubblesBasePath}bubbles-on-the-way.png`,
    title: { ar: 'في الطريق', en: 'On The Way' }
  },
  {
    src: `${bubblesBasePath}bubbles-pay.png`,
    title: { ar: 'الدفع', en: 'Payment' }
  },
  {
    src: `${bubblesBasePath}bubbles-payment-success.png`,
    title: { ar: 'نجاح الدفع', en: 'Payment Success' }
  },
  {
    src: `${bubblesBasePath}bubbles-chat-typing.png`,
    title: { ar: 'الدردشة', en: 'Chat' }
  }
];

const bubblesDesktopGalleryImages: GalleryImage[] = [
  {
    src: `${bubblesDesktopBasePath}desktop-dashboard.png`,
    title: { ar: 'لوحة القيادة', en: 'Dashboard' }
  },
  {
    src: `${bubblesDesktopBasePath}desktop-orders.png`,
    title: { ar: 'الطلبات', en: 'Orders' }
  },
  {
    src: `${bubblesDesktopBasePath}desktop-pending.png`,
    title: { ar: 'الطلبات المعلقة', en: 'Pending Orders' }
  },
  {
    src: `${bubblesDesktopBasePath}desktop-delivery.png`,
    title: { ar: 'المندوب', en: 'Delivery Agent' }
  },
  {
    src: `${bubblesDesktopBasePath}desktop-late-orders.png`,
    title: { ar: 'الطلبات المتأخرة', en: 'Late Orders' }
  },
  {
    src: `${bubblesDesktopBasePath}desktop-overview.jpeg`,
    title: { ar: 'عرض عام للنظام', en: 'System Overview' }
  }
];

const paymentMilestones: PaymentMilestone[] = [
  {
    amount: { ar: '25%', en: '25%' },
    title: { ar: 'دفعة مقدمة عند التعاقد', en: 'Advance payment at contract signing' }
  },
  {
    amount: { ar: '25%', en: '25%' },
    title: { ar: 'بعد تسليم تطبيق الأدمن (موبايل + ديسكتوب)', en: 'After Admin app delivery (Mobile + Desktop)' }
  },
  {
    amount: { ar: '25%', en: '25%' },
    title: { ar: 'بعد تسليم تطبيق مقدمي الخدمة', en: 'After Service Providers app delivery' }
  },
  {
    amount: { ar: '25%', en: '25%' },
    title: { ar: 'بعد الانتهاء من تطبيق اليوزر', en: 'After Customer app completion' }
  }
];

const projectName = 'منصة خدمات السيارات عند الطلب';

export default function App() {
  const [lang, setLang] = React.useState<Lang>('ar');
  const [theme, setTheme] = React.useState<Theme>('dark');
  const logoCandidates = ['/logo.png', 'logo.png', './logo.png', '/public/logo.png'];
  const [logoIndex, setLogoIndex] = React.useState(0);
  const [bubblesSlideIndex, setBubblesSlideIndex] = React.useState(0);
  const [bubblesDesktopSlideIndex, setBubblesDesktopSlideIndex] = React.useState(0);
  const [lightboxState, setLightboxState] = React.useState<{ kind: GalleryKind; index: number } | null>(null);
  const isDark = theme === 'dark';

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBubblesSlideIndex((prev) => (prev + 1) % bubblesGalleryImages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBubblesDesktopSlideIndex((prev) => (prev + 1) % bubblesDesktopGalleryImages.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const nextBubblesSlide = () => {
    setBubblesSlideIndex((prev) => (prev + 1) % bubblesGalleryImages.length);
  };

  const prevBubblesSlide = () => {
    setBubblesSlideIndex((prev) => (prev - 1 + bubblesGalleryImages.length) % bubblesGalleryImages.length);
  };

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
            <div className="text-6xl font-bold mb-2">150000 جنيه مصري</div>
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
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'طوال مدة التنفيذ (4 شهور)' : 'Throughout implementation period (4 months)'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'نشر التطبيقات' : 'App Publishing'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'تجهيز ورفع تطبيقات العميل على المنصات المطلوبة' : 'Preparing and publishing customer apps to required stores'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'دعم فني مجاني' : 'Free Technical Support'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'لمدة 6 شهور بعد التسليم' : 'For 6 months after delivery'}</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">{lang === 'ar' ? 'تجهيزات ما قبل الإطلاق' : 'Pre-Launch Setup'}</div>
              <div className="text-slate-600 text-sm">{lang === 'ar' ? 'اختبارات الجودة، مراجعة الأداء، وتجهيز التشغيل الفعلي' : 'QA testing, performance review, and go-live readiness'}</div>
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

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-indigo-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <FileText className="w-7 h-7 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{lang === 'ar' ? 'أسعار خدمة الرسائل (SMS)' : 'SMS Service Pricing'}</h2>
              <p className="text-sm text-slate-600">
                {lang === 'ar'
                  ? 'الأسعار المرجعية حسب مزود الخدمة، ويمكن للعميل مراجعة التفاصيل الرسمية عبر الرابط.'
                  : 'Reference pricing based on provider tiers. Official details are available via the link.'}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
            {smsPlans.map((plan) => (
              <div key={plan.tier.en} className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                <h3 className="font-bold text-slate-900 mb-2">{plan.tier[lang]}</h3>
                <div className="text-xl font-bold text-indigo-700 mb-1">{plan.price[lang]}</div>
                <p className="text-sm text-slate-700">{plan.volume[lang]}</p>
                {plan.note ? <p className="text-xs text-slate-500 mt-2">{plan.note[lang]}</p> : null}
              </div>
            ))}
          </div>
          <a
            href="https://oursms.com/pricing/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-semibold hover:bg-indigo-700"
          >
            {lang === 'ar' ? 'عرض تفاصيل الأسعار الرسمية' : 'View Official Pricing Details'}
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{lang === 'ar' ? 'عملاؤنا من السعودية' : 'Our Clients in Saudi Arabia'}</h2>
              <p className="text-sm text-slate-600">
                {lang === 'ar'
                  ? 'نماذج من المشاريع التي تم تنفيذها أو يجري العمل عليها.'
                  : 'Sample projects delivered or currently in progress.'}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{lang === 'ar' ? 'تطبيق استقرار' : 'Istiqrar App'}</h3>
                  <p className="text-sm text-slate-600">{lang === 'ar' ? 'متوفر على Google Play و Apple App Store' : 'Available on Google Play and Apple App Store'}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <a
                    href="https://play.google.com/store/search?q=%D8%A7%D8%B3%D8%AA%D9%82%D8%B1%D8%A7%D8%B1&c=apps"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-green-600 px-3 py-2 text-white text-sm font-semibold hover:bg-green-700"
                  >
                    Google Play <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/%D8%A7%D8%B3%D8%AA%D9%82%D8%B1%D8%A7%D8%B1/id1593169684"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-semibold hover:bg-slate-800"
                  >
                    Apple Store <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{lang === 'ar' ? 'ويب سايت راكان للعقارات' : 'Rakan Real Estate Website'}</h3>
                  <p className="text-sm text-slate-600">{lang === 'ar' ? 'منصة ويب عقارية' : 'Real-estate web platform'}</p>
                </div>
                <a
                  href="https://rakan-dev.penta-k.com/ar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-white text-sm font-semibold hover:bg-blue-700"
                >
                  {lang === 'ar' ? 'فتح المشروع' : 'Open Project'} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{lang === 'ar' ? 'سيستم Bubbles' : 'Bubbles System'}</h3>
                  <p className="text-sm text-slate-600">{lang === 'ar' ? 'قيد التطوير (Under Development)' : 'Under Development'}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <div className="relative w-[240px] h-[500px] rounded-[28px] border-8 border-slate-900 bg-black shadow-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setLightboxState({ kind: 'mobile', index: bubblesSlideIndex })}
                      className="block w-full h-full bg-black"
                      title={lang === 'ar' ? 'اضغط لفتح الصورة' : 'Click to open image'}
                    >
                      <img
                        src={bubblesGalleryImages[bubblesSlideIndex].src}
                        alt={bubblesGalleryImages[bubblesSlideIndex].title[lang]}
                        className="w-full h-full object-contain bg-black"
                      />
                    </button>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-1.5 rounded-full bg-slate-700" />
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevBubblesSlide}
                      className="rounded-full bg-white border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="text-sm font-semibold text-slate-700">{bubblesGalleryImages[bubblesSlideIndex].title[lang]}</div>
                    <button
                      type="button"
                      onClick={nextBubblesSlide}
                      className="rounded-full bg-white border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div>
                  <div className="relative w-full max-w-[620px] h-[360px] rounded-2xl border-8 border-slate-900 bg-black shadow-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setLightboxState({ kind: 'desktop', index: bubblesDesktopSlideIndex })}
                      className="block w-full h-full bg-black"
                      title={lang === 'ar' ? 'اضغط لفتح الصورة' : 'Click to open image'}
                    >
                      <img
                        src={bubblesDesktopGalleryImages[bubblesDesktopSlideIndex].src}
                        alt={bubblesDesktopGalleryImages[bubblesDesktopSlideIndex].title[lang]}
                        className="w-full h-full object-contain bg-black"
                      />
                    </button>
                  </div>

                  <div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-sm font-semibold text-slate-900">
                      {lang === 'ar' ? 'السيستم تحت الإنشاء حاليًا.' : 'System is currently under development.'}
                    </p>
                    <p className="text-sm text-slate-600 mt-1">
                      {lang === 'ar'
                        ? 'سيتم تسليم: Admin + User + Delivery.'
                        : 'Planned delivery: Admin + User + Delivery.'}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setBubblesDesktopSlideIndex(
                          (prev) => (prev - 1 + bubblesDesktopGalleryImages.length) % bubblesDesktopGalleryImages.length
                        )
                      }
                      className="rounded-full bg-white border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
                      aria-label="Previous desktop image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <div className="text-sm font-semibold text-slate-700">{bubblesDesktopGalleryImages[bubblesDesktopSlideIndex].title[lang]}</div>
                    <button
                      type="button"
                      onClick={() => setBubblesDesktopSlideIndex((prev) => (prev + 1) % bubblesDesktopGalleryImages.length)}
                      className="rounded-full bg-white border border-slate-200 p-2 text-slate-700 hover:bg-slate-100"
                      aria-label="Next desktop image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mt-3 grid grid-cols-3 md:grid-cols-6 gap-2 max-w-[620px]">
                    {bubblesDesktopGalleryImages.map((img, idx) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setBubblesDesktopSlideIndex(idx)}
                        className={`overflow-hidden rounded-md border-2 ${idx === bubblesDesktopSlideIndex ? 'border-blue-600' : 'border-slate-200'}`}
                      >
                        <img src={img.src} alt={img.title[lang]} className="w-full h-14 object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 md:grid-cols-6 gap-2 max-w-[520px]">
                {bubblesGalleryImages.map((img, idx) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setBubblesSlideIndex(idx)}
                    className={`overflow-hidden rounded-md border-2 ${idx === bubblesSlideIndex ? 'border-blue-600' : 'border-slate-200'}`}
                  >
                    <img src={img.src} alt={img.title[lang]} className="w-full h-16 object-cover" />
                  </button>
                ))}
              </div>
            </div>
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
              text={lang === 'ar' ? 'المنصة قابلة للتوسع مع زيادة العملاء ومقدمي الخدمة.' : 'The platform scales as customers and service providers grow.'}
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
                  ? 'لوحة إدارة واضحة لمتابعة الطلبات ومقدمي الخدمة والعملاء.'
                  : 'Clear admin panel for orders, providers, and customers management.'
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

        {lightboxState !== null ? (
          <div className="fixed inset-0 z-[70] bg-black/85 flex items-center justify-center p-4">
            <button
              type="button"
              onClick={() => setLightboxState(null)}
              className="absolute top-4 right-4 rounded-full bg-white/10 text-white p-2 hover:bg-white/20"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setLightboxState((prev) => {
                  if (!prev) return prev;
                  const gallery = prev.kind === 'mobile' ? bubblesGalleryImages : bubblesDesktopGalleryImages;
                  return { ...prev, index: (prev.index - 1 + gallery.length) % gallery.length };
                })
              }
              className="absolute left-4 md:left-8 rounded-full bg-white/10 text-white p-3 hover:bg-white/20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <img
              src={(lightboxState.kind === 'mobile' ? bubblesGalleryImages : bubblesDesktopGalleryImages)[lightboxState.index].src}
              alt={(lightboxState.kind === 'mobile' ? bubblesGalleryImages : bubblesDesktopGalleryImages)[lightboxState.index].title[lang]}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            />

            <button
              type="button"
              onClick={() =>
                setLightboxState((prev) => {
                  if (!prev) return prev;
                  const gallery = prev.kind === 'mobile' ? bubblesGalleryImages : bubblesDesktopGalleryImages;
                  return { ...prev, index: (prev.index + 1) % gallery.length };
                })
              }
              className="absolute right-4 md:right-8 rounded-full bg-white/10 text-white p-3 hover:bg-white/20"
              aria-label="Next image"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        ) : null}
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

