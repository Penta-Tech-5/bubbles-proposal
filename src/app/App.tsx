import {
  FileText,
  Smartphone,
  Monitor,
  Package,
  DollarSign,
  Calendar,
  CheckCircle,
  Globe,
  MapPin,
  Code,
  Shield,
  PhoneCall,
  Mail,
  Palette,
  Clock,
  CreditCard,
  Users,
  Settings,
  TrendingUp,
  Award,
  Server,
  Database,
  Zap
} from 'lucide-react';
import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">مشوار العاشر</h1>
              <p className="text-sm text-slate-600">عرض السعر التفصيلي للمشروع</p>
            </div>
            <a
              href="https://penta-k.com"
              className="text-left inline-flex items-center"
              aria-label="Penta-k website"
            >
              <img src="/logo.png" alt="Penta-k Logo" className="h-15 inline-block" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Company Info Card */}
        <div className="bg-gradient-to-l from-blue-600 to-blue-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">شركة Penta-k</h2>
              <p className="text-blue-100 text-lg mb-4 leading-relaxed max-w-3xl">
                شركة متخصصة في تصميم وتطوير حلول البرمجيات والتطبيقات الذكية،
                وتقديم أنظمة متكاملة بجودة عالية وتجربة استخدام احترافية
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <a href="https://penta-k.com" className="hover:underline">penta-k.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  <a href="tel:+201061942646" className="hover:underline" dir="ltr">+20 10 61942646</a>
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Project Overview */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">وصف عام لمشروع مشوار العاشر</h2>
          </div>
          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              تطبيق توصيل تاكسي بسعر التاكسي العادي وأقل من خدمات الملاكي.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              يحدد المستخدم نقطة الانطلاق والوجهة، ويعرض التطبيق جميع السائقين المتاحين حوله مع المسافة لكل سائق
              وسعر المشوار المقترح. بعد اختيار السائق يمكن للعميل الانتظار أو الاتصال أو إرسال رسالة مباشرة.
            </p>
          </div>
        </div>
        {/* System Components Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Customer App */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">تطبيق العميل</h3>
                <p className="text-sm text-slate-600">Android & iOS</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              يحدد المستخدم نقطة الانطلاق والوجهة ويقارن بين السائقين المتاحين حسب المسافة والسعر.
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-blue-600">أهم المزايا:</span>
              <span> اختيار السائق، التواصل المباشر، وتتبع الرحلة.</span>
            </div>
          </div>

          {/* Driver App */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Package className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">تطبيق السائق</h3>
                <p className="text-sm text-slate-600">Android & iOS</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              استقبال الطلبات، التواصل مع العميل، ومتابعة الرحلات والربح.
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-green-600">أهم المزايا:</span>
              <span> إشعارات فورية، خرائط، وسجل رحلات.</span>
            </div>
          </div>

          {/* Admin Dashboard */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-100 hover:border-purple-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">لوحة التحكم المركزية</h3>
                <p className="text-sm text-slate-600">Web Dashboard</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              إدارة السائقين، الطلبات، التسعير، والدعم الفني.
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-purple-600">أهم المزايا:</span>
              <span> تقارير، صلاحيات، وتحكم كامل بالمنصة.</span>
            </div>
          </div>

          {/* Payments & Trips */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-300 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Monitor className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">إدارة التحصيل والرحلات</h3>
                <p className="text-sm text-slate-600">Backoffice</p>
              </div>
            </div>
            <p className="text-slate-600 mb-3">
              متابعة عدد الرحلات والمدفوعات المطلوبة لكل سائق.
            </p>
            <div className="text-sm text-slate-500">
              <span className="font-semibold text-orange-600">أهم المزايا:</span>
              <span> بعد كل 15 رحلة يتم تحصيل 200 جنيه للسائق.</span>
            </div>
          </div>
        </div>
        {/* Detailed Features Sections */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Smartphone className="w-7 h-7 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">تطبيق العميل - Customer App</h2>
              <p className="text-sm text-slate-600">Android & iOS</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<MapPin className="w-5 h-5" />} title="تحديد نقطة الانطلاق والوجهة على الخريطة" />
            <FeatureItem icon={<Users className="w-5 h-5" />} title="عرض السائقين المتاحين والمسافة لكل سائق" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="سعر المشوار لكل سائق قبل الاختيار" />
            <FeatureItem icon={<PhoneCall className="w-5 h-5" />} title="الاتصال بالسائق أو إرسال رسالة" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5" />} title="تتبع الرحلة في الوقت الحقيقي" />
            <FeatureItem icon={<Award className="w-5 h-5" />} title="تقييم السائق بعد انتهاء الرحلة" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="سجل رحلات كامل للعميل" />
            <FeatureItem icon={<CheckCircle className="w-5 h-5" />} title="تجربة تاكسي بسعر اقتصادي" />
            <FeatureItem icon={<Globe className="w-5 h-5" />} title="واجهات عربية وإنجليزية" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Package className="w-7 h-7 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">تطبيق السائق - Driver App</h2>
              <p className="text-sm text-slate-600">Android & iOS</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<CheckCircle className="w-5 h-5" />} title="استقبال الطلبات بإشعارات فورية" color="green" />
            <FeatureItem icon={<Users className="w-5 h-5" />} title="قبول أو رفض الطلب" color="green" />
            <FeatureItem icon={<MapPin className="w-5 h-5" />} title="ملاحة إلى موقع العميل" color="green" />
            <FeatureItem icon={<PhoneCall className="w-5 h-5" />} title="التواصل مع العميل" color="green" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="سجل الرحلات المنفذة" color="green" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5" />} title="عدد الرحلات والإنجازات" color="green" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="تنبيه بمستحقات الدفع بعد حد الرحلات" color="green" />
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Monitor className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">لوحة التحكم المركزية - Admin Dashboard</h2>
              <p className="text-sm text-slate-600">Web Dashboard</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FeatureItem icon={<Users className="w-5 h-5" />} title="إدارة السائقين والمستخدمين" color="purple" />
            <FeatureItem icon={<DollarSign className="w-5 h-5" />} title="تحديد التسعير حسب المسافة" color="purple" />
            <FeatureItem icon={<TrendingUp className="w-5 h-5" />} title="متابعة الطلبات وحالات الرحلات" color="purple" />
            <FeatureItem icon={<FileText className="w-5 h-5" />} title="تقارير مالية وإحصائيات" color="purple" />
            <FeatureItem icon={<Shield className="w-5 h-5" />} title="صلاحيات متعددة للمديرين" color="purple" />
            <FeatureItem icon={<Settings className="w-5 h-5" />} title="نظام تحصيل بعد 15 رحلة = 200 جنيه" color="purple" />
          </div>
        </div>
{/* UI/UX Design Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <Palette className="w-7 h-7 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">UI / UX Design - التصميم</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">تصميم احترافي مخصص متوافق مع هوية مشوار العاشر</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">دعم Light Mode & Dark Mode</span>
            </div>
            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
              <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5" />
              <span className="text-slate-700">دعم Arabic / English</span>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gradient-to-l from-slate-800 to-slate-900 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-700">
            <div className="p-3 bg-slate-700 rounded-lg">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Delivery Timeline - خطة التنفيذ والتسليم</h2>
              <p className="text-slate-300">آلية العمل والتسليم المرحلي</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600">
              <h3 className="text-xl font-bold mb-3 text-amber-400">مدة التنفيذ الكاملة</h3>
              <p className="text-3xl font-bold mb-2">من شهر الى شهر ونص</p>
              <p className="text-slate-300 text-sm">تشمل التصميم، البرمجة، الاختبارات، ورفع التطبيق على المتاجر</p>
            </div>

            <div className="bg-slate-700/50 rounded-xl p-6 border border-slate-600">
              <h3 className="text-xl font-bold mb-3 text-green-400">التسليم المرحلي</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>تسليم نسخة Android Test (APK) لكل جزء</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>مراجعة كل مرحلة مع العميل</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                  <span>تنفيذ التعديلات المطلوبة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        

        {/* Pricing Section - interactive */}
        <div className="bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500">
            <div className="p-3 bg-emerald-500 rounded-lg">
              <DollarSign className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl font-bold">التكلفة الإجمالية للمشروع</h2>
          </div>

          {/* Pricing logic */}
          {/** Using small local state to toggle chat inclusion. UI design cost is shown separately and not included in main total. */}
          <PricingControl />
        </div>

        {/* Payment Gateways Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-slate-100 rounded-lg">
              <CreditCard className="w-7 h-7 text-slate-700" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">بوابات الدفع ونسب العمولة</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Visa / Mastercard</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>المدفوعات الدولية: 2.50% + 2.00 جنيه</li>
                <li>عمولة البطاقة: 2% + 2 جنيه</li>
                <li>ضريبة القيمة المضافة: 14%</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Fawry</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>العمولة: 2.00% + 2.00 جنيه</li>
                <li>ضريبة القيمة المضافة: 14%</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Mobile Wallet</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>العمولة: 2.00% + 2.00 جنيه</li>
                <li>ضريبة القيمة المضافة: 14%</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Aman</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>العمولة: 2.00% + 2.00 جنيه</li>
                <li>ضريبة القيمة المضافة: 14%</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Basata</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>العمولة: 2.00% + 2.00 جنيه</li>
                <li>ضريبة القيمة المضافة: 14%</li>
              </ul>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Apple Pay</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>العمولة: 2.00% + 2.00 جنيه</li>
                <li>ضريبة القيمة المضافة: 14%</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">
            ملاحظة: النسب توضيحية وقد تختلف حسب مزود الخدمة والعقد النهائي.
          </p>
        </div>

        {/* Free Services Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-green-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-green-100 rounded-lg">
              <Award className="w-7 h-7 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Free Services - مميزات مقدمة من شركة Penta-k</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">سيرفر مجاني</div>
              <div className="text-slate-600 text-sm">لمدة 6 شهور</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">دومين مجاني</div>
              <div className="text-slate-600 text-sm">أول سنة</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">دعم فني مجاني</div>
              <div className="text-slate-600 text-sm">لمدة 60 يوم</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
              <div className="text-green-600 font-bold text-lg mb-1">رفع على المتاجر</div>
              <div className="text-slate-600 text-sm">مجاناً خلال أول سنة</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <p className="text-slate-700 font-semibold mb-1">سياسة حسابات النشر (Google & Apple)</p>
                <p className="text-sm text-slate-600">يتم رفع التطبيق مجاناً خلال أول سنة على حسابات الشركة لتقليل التكلفة المبدئية وضمان الالتزام بسياسات المتاجر.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Code className="w-7 h-7 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Technologies & Development Standards</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-bold text-slate-900">Flutter</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>تطوير تطبيقات الموبايل (Android & iOS)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>تطوير تطبيقات الديسكتوب (Windows)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                  <span>كود موحد (Single Codebase)</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-900">Nest.JS Backend</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>RESTful APIs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>PostgreSQL DB</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>بنية قوية وقابلة للتوسع</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <span>أداء عالي وتأمين البيانات</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-900">Code Quality & Clean Architecture</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Clean Code منظم</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Best Practices</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>سهولة الصيانة</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Code Review</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>Scalable Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <Zap className="w-4 h-4 text-purple-600" />
                <span>حماية من الأعطال</span>
              </div>
            </div>
          </div>
        </div>

        {/* External Costs Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg border-2 border-amber-200">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="p-3 bg-amber-100 rounded-lg">
              <DollarSign className="w-7 h-7 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">External Running Costs - التكاليف الخارجية</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Google Play Console</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$25</div>
              <p className="text-sm text-slate-600">عرض السعر التفصيلي للمشروع</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Apple Developer Account</h3>
              <div className="text-2xl font-bold text-blue-600 mb-1" dir="ltr">$100</div>
              <p className="text-sm text-slate-600">عرض السعر التفصيلي للمشروع</p>
            </div>

           

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
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 mb-6">
            <h3 className="font-bold text-slate-900 mb-2">تكاليف المنصات وإدارة النشر</h3>
            <p className="text-sm text-slate-700">
              في حال استمرار التطبيقات على منصاتنا (Google Play و Apple Store) تكون التكلفة السنوية من 35 إلى 40
              دولار. وإذا رغب العميل بنقل التطبيقات إلى حساباته الخاصة، نقوم بعملية النقل مقابل 40 دولار مع متابعة
              التطبيق حتى الاستقرار على الحساب الجديد، وإدراج حسابات العميل ضمن الدعم الفني لمتابعة حالة المنصات
              واستقرارها.
            </p>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="font-bold text-slate-900 mb-2">دعم فني مدفوع (إضافات جديدة)</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-bold text-amber-600">5,000 جنيه</span>
              <span className="text-slate-600">شهرياً</span>
            </div>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>20 ساعة عمل مع مبرمج مخصص</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-amber-600 mt-0.5" />
                <span>تنفيذ أي إضافات أو تطويرات حسب الطلب</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Why Penta-k Section */}
        <div className="bg-gradient-to-l from-blue-600 to-indigo-700 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Why Penta-k? - ليه تختار Penta-k؟</h2>
            <p className="text-blue-100 text-lg">نحن لا نكتب كود فقط، نبني حلول قابلة للنمو والتطور</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Shield className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">جودة الكود</h3>
              <p className="text-sm text-blue-100">اهتمام حقيقي بجودة الكود وليس مجرد تنفيذ</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <TrendingUp className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">قابلية التوسع</h3>
              <p className="text-sm text-blue-100">تطبيقات قابلة للتوسع والنمو مع عملك</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Clock className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">تسليم منظم</h3>
              <p className="text-sm text-blue-100">تسليم على مراحل مع متابعة مستمرة</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Users className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">سهولة الاستلام</h3>
              <p className="text-sm text-blue-100">سهولة استلام المشروع من أي فريق تقني لاحقاً</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <DollarSign className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">توفير المستقبل</h3>
              <p className="text-sm text-blue-100">كود نظيف = تكلفة أقل في المستقبل</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Award className="w-8 h-8 mb-3" />
              <h3 className="font-bold text-lg mb-2">خبرة احترافية</h3>
              <p className="text-sm text-blue-100">فريق متخصص بخبرة عالية</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">للتواصل والاستفسار</h2>
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
              شكراً لثقتكم في <span className="font-bold text-blue-600">Penta-k</span>
            </p>
            <p className="text-sm text-slate-500 mt-2">
              نتطلع للعمل معكم على مشروع مشوار العاشر
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

// Helper Component for Feature Items
function PricingControl() {
  const TOTAL_COST = 65000;
  const FIRST_PAYMENT = 20000;
  const REMAINING_PHASES = 3;

  const remaining = TOTAL_COST - FIRST_PAYMENT;
  const evenInstallment = Math.floor(remaining / REMAINING_PHASES);
  const lastInstallment = remaining - evenInstallment * (REMAINING_PHASES - 1);

  const fmt = (n: number) => n.toLocaleString();

  return (
    <div>
      <div className="text-center mb-6">
        <div className="text-6xl font-bold mb-2">{fmt(TOTAL_COST)} جنيه مصري</div>
        <div className="text-emerald-100 text-lg">عرض السعر لتطبيق مشوار العاشر</div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 bg-emerald-500/30 rounded-xl p-6 border border-emerald-400">
          <h3 className="text-xl font-bold mb-4">ميزة السعر الاقتصادي</h3>
          <p className="text-emerald-100">
            التطبيق مخصص للتاكسي بسعر التاكسي العادي وأقل من تطبيقات الملاكي مثل أوبر.
          </p>
        </div>

        <div className="w-full md:flex-[2] bg-white/10 rounded-xl p-6 border border-white/20">
          <h4 className="font-bold text-lg mb-2">عرض السائقين والأسعار</h4>
          <p className="text-emerald-100 text-sm">
            يظهر جميع السائقين المتاحين بجوار العميل مع المسافة والسعر لكل سائق قبل الاختيار.
          </p>
        </div>
      </div>

      <div className="bg-emerald-500/30 rounded-xl p-6 border border-emerald-400">
        <h3 className="text-xl font-bold mb-4">شروط الدفع</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold mb-1">{fmt(FIRST_PAYMENT)} جنيه مصري</div>
            <div className="text-sm text-emerald-100">دفعة أولى مقدم</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold mb-1">{fmt(evenInstallment)} جنيه مصري</div>
            <div className="text-sm text-emerald-100">بعد تسليم تطبيق العميل</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold mb-1">{fmt(evenInstallment)} جنيه مصري</div>
            <div className="text-sm text-emerald-100">بعد تسليم تطبيق السائق</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center border border-white/20">
            <div className="text-2xl font-bold mb-1">{fmt(lastInstallment)} جنيه مصري</div>
            <div className="text-sm text-emerald-100">بعد تسليم لوحة التحكم</div>
          </div>
        </div>

      </div>
    </div>
  );
}
function FeatureItem({ icon, title, color = 'blue' }: { icon: React.ReactNode; title: string; color?: string }) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    purple: 'bg-purple-50 text-purple-600 border-purple-100',
    orange: 'bg-orange-50 text-orange-600 border-orange-100'
  };

  return (
    <div className={`flex items-start gap-3 p-3 rounded-lg border ${colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="mt-0.5">{icon}</div>
      <span className="text-sm text-slate-700">{title}</span>
    </div>
  );
}















