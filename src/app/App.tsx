import {
  Award,
  Calendar,
  CheckCircle,
  CreditCard,
  DollarSign,
  FileText,
  Globe,
  Mail,
  MapPin,
  Monitor,
  PhoneCall,
  Settings,
  Shield,
  TrendingUp,
  Users
} from 'lucide-react';
import React from 'react';

type InfoItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const targetAudience = [
  'أصحاب العقارات (شقق – فيلات – وحدات سياحية).',
  'شركات أو مديري إدارة الأملاك.',
  'الفنادق الصغيرة وبيوت الضيافة التي تحتاج نظام إدارة موحد.'
];

const goals = [
  'تقليل الوقت والمجهود في إدارة العمليات اليومية.',
  'تقديم صورة احترافية أمام الضيوف والعملاء.',
  'ربط جميع العمليات (الحجز – الدفع – التواصل – التسويق) داخل منصة واحدة.'
];

const mainComponents: InfoItem[] = [
  {
    title: 'لوحة التحكم الرئيسية',
    description: 'ملخص شامل للحجوزات والإيرادات ونسبة الإشغال مع وصول سريع لكل أجزاء النظام.',
    icon: Monitor
  },
  {
    title: 'صندوق الرسائل الموحد',
    description: 'عرض جميع رسائل الضيوف في مكان واحد مع دعم الربط بمنصات خارجية أو رسائل داخلية.',
    icon: Mail
  },
  {
    title: 'إدارة العقارات',
    description: 'إضافة وتعديل بيانات العقارات (الصور – الوصف – الأسعار) وربطها بالحجوزات والضيوف.',
    icon: MapPin
  },
  {
    title: 'إدارة الحجوزات والضيوف',
    description: 'متابعة الحجوزات الحالية والقادمة وربط بيانات الضيوف بالتقويم.',
    icon: Calendar
  },
  {
    title: 'التقارير والإدارة المالية',
    description: 'تقارير الإيرادات، متوسط سعر الليلة، ونسب الإشغال مع إمكانية التصدير عند الحاجة.',
    icon: DollarSign
  },
  {
    title: 'إدارة المستخدمين والصلاحيات',
    description: 'إنشاء أدوار متعددة (مالك – مدير – موظف) مع صلاحيات مختلفة لكل مستخدم.',
    icon: Users
  },
  {
    title: 'الأتمتة والرسائل التلقائية',
    description: 'إرسال رسائل تلقائية بعد الحجز وتذكير قبل موعد الوصول.',
    icon: Settings
  },
  {
    title: 'أدوات التسويق',
    description: 'تكامل مع منصات الإعلانات أو نظام داخلي لإرسال العروض والإيميلات.',
    icon: TrendingUp
  },
  {
    title: 'موقع الحجز المباشر',
    description: 'تصميم موقع مرتبط بالنظام لعرض العقارات واستقبال الحجوزات بدون وسيط.',
    icon: Globe
  },
  {
    title: 'إدارة الأقفال الذكية (اختياري)',
    description: 'توليد أكواد دخول تلقائية للضيوف عند استخدام Smart Locks.',
    icon: Shield
  }
];

const questions = [
  'هل المطلوب ربط صندوق الرسائل بمنصات خارجية مثل Airbnb و Booking أم الاكتفاء برسائل داخلية؟',
  'هل تحتاج أدوات التسويق لتكامل مع منصات الإعلانات أم نظام داخلي لإرسال العروض والإيميلات فقط؟',
  'هل المطلوب موقع كامل متعدد الصفحات أم صفحة عرض العقارات والحجز فقط؟',
  'هل يتم استخدام Smart Locks حاليًا أو يوجد تخطيط لاستخدامها لاحقًا؟',
  'هل تحتاج إمكانية تصدير التقارير (Excel / PDF) أم عرضها داخل النظام فقط؟',
  'هل تفضل رسائل تلقائية جاهزة أم إمكانية إنشاء قواعد مخصصة؟',
  'هل سيكون هناك أكثر من مستخدم بصلاحيات مختلفة أم حساب واحد فقط؟'
];

const freeServices = [
  { title: 'سيرفر مجاني', description: 'لمدة 6 شهور' },
  { title: 'دعم فني مجاني', description: 'لمدة 60 يوم' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">مسؤول داش بورد</h1>
              <p className="text-sm text-slate-600">عرض السعر التفصيلي للمشروع</p>
            </div>
            <a href="https://penta-k.com" className="text-left inline-flex items-center" aria-label="Penta-k website">
              <img src="/logo.png" alt="Penta-k Logo" className="h-15 inline-block" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">شركة Penta-k</h2>
              <p className="text-blue-100 text-lg mb-4 leading-relaxed max-w-3xl">
                نقدم حلولًا رقمية متكاملة تساعد الشركات على تحسين الأداء وتسهيل إدارة العمليات اليومية
                من خلال أنظمة احترافية وتجربة مستخدم مميزة.
              </p>
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
            <h2 className="text-2xl font-bold text-slate-900">نظرة عامة على النظام المقترح</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 text-lg leading-relaxed">
              النظام عبارة عن منصة متكاملة لإدارة العقارات والحجوزات، تهدف إلى جمع كل الأدوات التي يحتاجها مالك
              العقار أو مدير الأملاك في مكان واحد، بداية من إدارة الحجوزات والتواصل مع الضيوف، مرورًا بالتقارير
              المالية، وصولًا إلى إنشاء موقع خاص للتسويق والحجز المباشر.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">الفئة المستهدفة</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {targetAudience.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">الهدف من النظام</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              {goals.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">المكونات الرئيسية للنظام</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainComponents.map((component) => {
              const Icon = component.icon;
              return (
                <div key={component.title} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 bg-white rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{component.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600">{component.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">نقاط نحتاج توضيحها لتحديد نطاق العمل</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-700">
            {questions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500">
            <div className="p-3 bg-emerald-500 rounded-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">تحديد السعر والمدة</h2>
          </div>
          <p className="text-emerald-100 text-lg leading-relaxed">
            سيتم تحديد التكلفة والمدة الزمنية بشكل دقيق بعد مناقشة التفاصيل السابقة وتوضيح جميع المتطلبات،
            حيث أن نطاق المشروع قد يختلف حسب المزايا المطلوبة والتكاملات الخارجية.
          </p>
          <p className="text-emerald-100 text-sm mt-4">
            يسعدنا ترتيب اجتماع قصير لمناقشة التفاصيل والوصول لأفضل تصور تقني مناسب لاحتياجاتكم.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Free Services - مميزات مقدمة من شركة Penta-k</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {freeServices.map((service) => (
              <div key={service.title} className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                <div className="text-green-600 font-bold text-lg mb-1">{service.title}</div>
                <div className="text-slate-600 text-sm">{service.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-amber-100 rounded-lg">
              <DollarSign className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">External Running Costs - التكاليف الخارجية</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Hostinger VPS</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$96</div>
              <p className="text-sm text-slate-600">استضافة السيرفر سنويًا.</p>
              <p className="text-xs text-green-600 mt-2">مجاني من Penta-k لأول سنة.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">سيرفرات شركتنا</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1">2,000 جنيه</div>
              <p className="text-sm text-slate-600">اشتراك سنوي على سيرفراتنا الخاصة.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">تواصل معنا</h2>
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
              شكرًا لثقتكم في <span className="font-bold text-blue-600">Penta-k</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">نتطلع للعمل معكم على مشروع مسؤول داش بورد.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
