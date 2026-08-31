import React from 'react';
import { ArrowLeft, CalendarDays, Check, Clock3, Code2, Database, FileText, Globe2, HeartPulse, LayoutDashboard, MonitorSmartphone, PhoneCall, Server, ShieldCheck, Smartphone, Store, UsersRound } from 'lucide-react';

const payments = [
  { percent: '20%', amount: '50,000 ج.م', title: 'مقدم عند توقيع الاتفاق وبدء المشروع' },
  { percent: '20%', amount: '50,000 ج.م', title: 'تسليم لوحة التحكم الرئيسية', en: 'Admin Dashboard' },
  { percent: '20%', amount: '50,000 ج.م', title: 'تسليم بوابة الصيدليات', en: 'Pharmacy Portal' },
  { percent: '25%', amount: '62,500 ج.م', title: 'تسليم تطبيق العميل', en: 'Customer Mobile App' },
  { percent: '15%', amount: '37,500 ج.م', title: 'الإطلاق على بيئة الإنتاج ورفع التطبيق على المتاجر', en: 'Production Deployment & App Store / Play Store Submission' },
];

const milestones = [
  ['01', 'التحليل والتخطيط', 'تثبيت المتطلبات، مخطط رحلة المستخدم، وخطة التنفيذ.'],
  ['02', 'التصميم وتجهيز البنية', 'تصميم الواجهات وتجهيز هيكل المنصة وواجهات الربط الخلفية.'],
  ['03', 'تطوير المنصات', 'تطوير تطبيق العميل، لوحة الإدارة، وبوابة الصيدليات بالتوازي.'],
  ['04', 'الاختبار والإطلاق', 'اختبارات الجودة، النشر، وتهيئة تسليم المنصة.'],
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900" dir="rtl">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#093d5a] text-white shadow-sm"><HeartPulse className="h-5 w-5" /></div>
            <div><p className="text-lg font-extrabold tracking-tight">Dawa Deal</p><p className="text-xs text-slate-500">عرض سعر لتنفيذ المنصة</p></div>
          </div>
          <a href="https://penta-k.com" className="inline-flex items-center" aria-label="Penta-k website"><img src="/logo.png" alt="Penta-k" className="h-10 w-auto object-contain" /></a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-7 sm:px-8 sm:py-10">
        <section className="relative overflow-hidden rounded-[28px] bg-[#093d5a] px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">
          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-teal-400/15" />
          <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full bg-sky-300/10" />
          <div className="relative max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-sky-100"><FileText className="h-4 w-4" /> عرض فني ومالي</div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">عرض تنفيذ منصة<br /><span className="text-teal-300">Dawa Deal | دواء ديل</span></h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">تطوير منصة رقمية متكاملة تربط العميل بالصيدليات، من خلال تطبيق موبايل وبوابات ويب إدارية احترافية قابلة للنمو.</p>
          </div>
        </section>

        <section className="relative -mt-5 mx-3 grid gap-3 sm:mx-6 sm:grid-cols-3">
          <Metric icon={<Clock3 />} label="مدة التنفيذ" value="6 شهور" />
          <Metric icon={<CalendarDays />} label="فترة الدعم" value="6 شهور" />
          <Metric icon={<ShieldCheck />} label="الضمان" value="سنة كاملة" />
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <SectionTitle icon={<MonitorSmartphone />} title="نطاق التنفيذ" subtitle="مكونات المنصة التي يشملها عرض السعر" />
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <ScopeCard icon={<Smartphone />} color="teal" title="تطبيق العميل" text="تطبيق Flutter موحد لأنظمة Android وiOS." />
              <ScopeCard icon={<Store />} color="blue" title="بوابة الصيدليات" text="بوابة ويب لإدارة حسابات وعمليات الصيدليات." />
              <ScopeCard icon={<LayoutDashboard />} color="violet" title="لوحة الإدارة" text="لوحة مركزية لإدارة المنصة ومتابعة عملياتها." />
            </div>
            <div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600"><Check className="mt-1 h-4 w-4 shrink-0 text-teal-600" />يشمل التنفيذ تجهيز واجهات الربط الخلفية، قاعدة البيانات، بيئة الإنتاج، والتسليم النهائي حسب نطاق العمل المعتمد.</div>
          </div>
          <aside className="rounded-3xl bg-[#e8f5f4] p-7 ring-1 ring-teal-100 sm:p-8">
            <p className="text-sm font-bold text-teal-700">القيمة الاستثمارية للمشروع</p>
            <div className="mt-3 flex items-end gap-2"><span className="text-4xl font-extrabold tracking-tight text-[#093d5a] sm:text-5xl">250,000</span><span className="mb-1 text-base font-bold text-slate-600">جنيه مصري</span></div>
            <div className="my-6 h-px bg-teal-200" />
            <div className="space-y-4 text-sm"><div className="flex items-center justify-between"><span className="text-slate-600">المدة التقديرية</span><b>6 شهور</b></div><div className="flex items-center justify-between"><span className="text-slate-600">الدعم بعد الإطلاق</span><b>6 شهور</b></div><div className="flex items-center justify-between"><span className="text-slate-600">ضمان جودة التنفيذ</span><b>سنة</b></div></div>
          </aside>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <SectionTitle icon={<Code2 />} title="التقنيات المقترحة" subtitle="بنية حديثة وقابلة للتوسع لاحتياجات المنصة" />
          <div className="mt-7 grid gap-4 md:grid-cols-3"><TechCard icon={<Smartphone />} title="Mobile Application" value="Flutter" description="تطبيق واحد يعمل على Android وiOS." /><TechCard icon={<Globe2 />} title="Web Portals" value="Next.js" description="لوحة الإدارة وبوابة الصيدليات." /><TechCard icon={<Server />} title="Backend" value="Node.js + NestJS" description="واجهة برمجية آمنة، منظّمة وقابلة للتوسع." /></div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600"><Database className="h-5 w-5 shrink-0 text-[#093d5a]" />يعتمد الـ Backend على Node.js باستخدام NestJS، وفقاً للأفضلية المحددة للمشروع.</div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <SectionTitle icon={<UsersRound />} title="فريق العمل" subtitle="فريق مخصص لتغطية جميع مسارات التنفيذ" />
          <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-5">{['Project Manager', 'Senior Mobile Developer', 'Senior Web Developer', 'Senior Backend Developer', 'DevOps Engineer'].map((role, index) => <div key={role} className="rounded-2xl border border-slate-200 p-4 text-center"><span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-xs font-bold text-[#093d5a]">0{index + 1}</span><p className="mt-3 text-sm font-bold leading-5 text-slate-700" dir="ltr">{role}</p></div>)}</div>
        </section>

        <section className="mt-6 rounded-3xl bg-[#093d5a] p-7 text-white shadow-lg sm:p-8">
          <SectionTitle dark icon={<Clock3 />} title="خطة التنفيذ والتسليم" subtitle="مدة التنفيذ الكلية: 6 شهور" />
          <div className="mt-8 grid gap-4 md:grid-cols-4">{milestones.map(([number, title, description]) => <div key={number} className="rounded-2xl border border-white/15 bg-white/8 p-5"><span className="text-3xl font-black text-teal-300">{number}</span><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{description}</p></div>)}</div>
        </section>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="flex flex-col gap-3 border-b border-slate-200 px-7 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8"><div><p className="text-sm font-bold text-teal-700">إجمالي المشروع: 250,000 ج.م</p><h2 className="mt-1 text-2xl font-extrabold text-slate-900">جدول الدفعات</h2></div><span className="w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">5 مراحل تسليم</span></div>
          <div className="divide-y divide-slate-100">{payments.map((payment, index) => <div key={payment.title} className="grid items-center gap-3 px-7 py-5 sm:grid-cols-[1fr_90px_120px] sm:px-8"><div><div className="flex items-center gap-2 font-bold leading-6 text-slate-800"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-50 text-xs text-teal-700">{index + 1}</span>{payment.title}</div>{payment.en && <p className="mr-8 mt-1 text-xs text-slate-500" dir="ltr">{payment.en}</p>}</div><span className="font-bold text-teal-700" dir="ltr">{payment.percent}</span><span className="text-lg font-extrabold text-[#093d5a]" dir="ltr">{payment.amount}</span></div>)}</div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><SectionTitle icon={<ShieldCheck />} title="الدعم والضمان" /><div className="mt-6 space-y-4"><InfoRow title="الدعم الفني" text="6 شهور بعد الإطلاق لمعالجة الملاحظات والدعم التشغيلي." /><InfoRow title="ضمان التنفيذ" text="ضمان لمدة سنة على جودة واستقرار ما تم تنفيذه ضمن نطاق المشروع." /></div></div>
          <div className="rounded-3xl bg-teal-50 p-7 ring-1 ring-teal-100"><p className="text-sm font-bold text-teal-700">Penta-k</p><h2 className="mt-2 text-2xl font-extrabold text-[#093d5a]">جاهزون لبدء التنفيذ</h2><p className="mt-3 max-w-md text-sm leading-7 text-slate-600">نلتزم بالتنفيذ المنظم، مراحل تسليم واضحة، وبنية تقنية تساعد منصة Dawa Deal على النمو.</p><div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-[#093d5a]"><a className="inline-flex items-center gap-2" href="https://penta-k.com"><Globe2 className="h-4 w-4" />penta-k.com</a><a className="inline-flex items-center gap-2" dir="ltr" href="tel:+201061942646"><PhoneCall className="h-4 w-4" />+20 10 61942646</a></div></div>
        </section>
        <footer className="flex items-center justify-center gap-2 py-10 text-sm text-slate-500"><span>عرض سعر منصة Dawa Deal</span><ArrowLeft className="h-4 w-4" /><span>2026</span></footer>
      </main>
    </div>
  );
}

function SectionTitle({ icon, title, subtitle, dark = false }: { icon: React.ReactNode; title: string; subtitle?: string; dark?: boolean }) { return <div className="flex items-start gap-3"><div className={`mt-0.5 grid h-10 w-10 place-items-center rounded-xl ${dark ? 'bg-white/10 text-teal-300' : 'bg-teal-50 text-teal-700'}`}>{icon}</div><div><h2 className={`text-2xl font-extrabold ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>{subtitle && <p className={`mt-1 text-sm ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>}</div></div>; }
function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-200"><div className="text-teal-600">{React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}</div><div><p className="text-xs text-slate-500">{label}</p><p className="font-extrabold text-slate-800">{value}</p></div></div>; }
function ScopeCard({ icon, color, title, text }: { icon: React.ReactNode; color: 'teal' | 'blue' | 'violet'; title: string; text: string }) { const colors = { teal: 'bg-teal-50 text-teal-700', blue: 'bg-blue-50 text-blue-700', violet: 'bg-violet-50 text-violet-700' }; return <div className="rounded-2xl border border-slate-200 p-5"><div className={`grid h-10 w-10 place-items-center rounded-xl ${colors[color]}`}>{icon}</div><h3 className="mt-4 font-extrabold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{text}</p></div>; }
function TechCard({ icon, title, value, description }: { icon: React.ReactNode; title: string; value: string; description: string }) { return <div className="rounded-2xl bg-slate-50 p-5"><div className="flex items-center gap-2 text-[#093d5a]">{icon}<span className="text-xs font-bold uppercase tracking-wider">{title}</span></div><p className="mt-4 text-xl font-extrabold text-slate-800" dir="ltr">{value}</p><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></div>; }
function InfoRow({ title, text }: { title: string; text: string }) { return <div className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-teal-600" /><div><h3 className="font-bold text-slate-800">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{text}</p></div></div>; }
