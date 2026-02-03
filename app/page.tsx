"use client"
import { FeatureCard } from "@/components/feature-card"
import { SectionHeader } from "@/components/section-header"
import { useState, useEffect } from "react"
import { ImageUploadBox } from "@/components/image-upload-box"
import { supabase } from "@/lib/supabase"
import {
  Gauge,
  Wand2,
  Trophy,
  Rocket,
  Maximize2,
  Fingerprint,
  Route,
  Flame,
  Store,
  PieChart,
  Medal,
  Eye,
  MessageCircle,
  Bell,
  CalendarCheck,
  Megaphone,
  Leaf,
  History,
  ListChecks,
  UsersRound,
  Zap,
  Gamepad2,
  Laptop,
  CloudUpload,
} from "lucide-react"

export default function Home() {
  const [images, setImages] = useState<{ [key: number]: string }>({})
  // جلب الصور من قاعدة البيانات عند تحميل الصفحة
  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('images')
        .select('slot,url')
      if (!error && data) {
        const imgs: { [key: number]: string } = {}
        data.forEach((row: { slot: number, url: string }) => {
          imgs[row.slot] = row.url
        })
        setImages(imgs)
      }
    })()
  }, [])

  // حفظ رابط الصورة في قاعدة البيانات
  const saveImage = async (slot: number, url: string) => {
    setImages(prev => ({ ...prev, [slot]: url }))
    await supabase.from('images').upsert({ slot, url })
  }

  // حذف الصورة من القاعدة
  const removeImage = async (slot: number) => {
    setImages(prev => ({ ...prev, [slot]: undefined }))
    await supabase.from('images').delete().eq('slot', slot)
  }
  return (
    <main className="min-h-screen bg-background pt-8">
      {/* المزايا العامة */}
      <section className="py-8 px-8 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader title="المزايا العامة" />
          <div className="flex flex-col gap-8">
            {/* الصف الأول */}
            <div className="w-full">
              <FeatureCard
                icon={<Gauge className="w-8 h-8" />}
                title="أداء عالي وسرعة"
                description="أداء فائق السرعة في الاستخدام دون أي تعليق مقارنة في ناظم."
                large
              />
            </div>
            {/* الصف الثاني */}
            <div className="w-full">
              <FeatureCard
                icon={<Wand2 className="w-8 h-8" />}
                title="واجهة بسيطة"
                description="تصميم سهل الفهم للجميع يضمن تجربة مستخدم سلسة."
                large
              />
            </div>
            {/* الصف الثالث */}
            <div className="w-full">
              <FeatureCard
                icon={<Trophy className="w-8 h-8" />}
                title="صفحة الإنجازات"
                description="واجهة مخصصة لعرض إنجازات المجمع والطلاب."
                large
              />
            </div>
            {/* الصف الرابع */}
            <div className="w-full">
              <FeatureCard
                icon={<Rocket className="w-8 h-8" />}
                title="التميز"
                description="فكرة تقنية فريدة تحقق للمجمع أفضلية على باقي المجمعات وتجذب الطلاب إليها"
                large
              />
            </div>
            {/* الصف الخامس */}
            <div className="w-full">
              <FeatureCard
                icon={<Maximize2 className="w-8 h-8" />}
                title="بيئة مركزة"
                description="توفير بيئة تعليمية خالية من المشتتات يغني الطالب عن التنقل بين مواقع متعددة، مما يحميه من الشعور بالملل الناتج عن تراكم المهام وعشوائيتها، ويضمن له تجربة تعليمية أكثر تركيزاً وإنتاجية."
                large
              />
            </div>
            {/* الصف السادس */}
            <div className="w-full">
              <FeatureCard
                icon={<Fingerprint className="w-8 h-8" />}
                title="تعزيز الهوية"
                description="تصميم يعكس هوية المجمع ويجذب الطلاب الجدد ويؤكد ولاء الطلاب للمجمع."
                large
              />
            </div>
          </div>
        </div>
      </section>

        {/* الطلاب */}
        <section className="py-8 px-8 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader title="الطلاب" />
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Route className="w-8 h-8" />}
                title="توحيد المسار"
                description="توحيد المسار التعليمي للطالب في منصة واحدة لمنع التشتت."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Flame className="w-8 h-8" />}
                title="التحدي اليومي"
                description="نظام التحدي اليومي لخلق روح التنافس بين طلاب الحلقة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Store className="w-8 h-8" />}
                title="متجر المكافآت"
                description="متجر خاص يتيح للطالب الاستفادة من نقاطه المكتسبة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<PieChart className="w-8 h-8" />}
                title="لوحة الإنجازات"
                description="لوحة تفاعلية لمتابعة التقدم والنقاط والحفظ بوضوح بعكس ناظم فلا يستطيع الطالب رؤية ترتيبه."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Medal className="w-8 h-8" />}
                title="نظام الأوسمة"
                description="أوسمة شرفية تُمنح للطلاب المتميزين عند تحقيق إنجازات محددة؛ بهدف خلق روح من الحماس والمنافسة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بوابة أولياء الأمور */}
      <section className="py-8 px-8 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader
            title="بوابة أولياء الأمور"
            description="متابعة دقيقة من أولياء الأمور لأبناءهم مما يعزز من وضع أولياء الأمور لأبناءهم في المجمع"
          />
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Eye className="w-8 h-8" />}
                title="المتابعة الشاملة"
                description="إمكانية متابعة ولي الأمر لجميع بيانات الابن (حضور، إنجاز)."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>

            {/* بطاقة جديدة: الاطلاع على سجلات ابنه */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Eye className="w-8 h-8" />}
                title="الاطلاع على سجلات ابنه"
                description="يتيح الموقع لوليّ الأمر الاطلاع على سجلات ابنه بسهولة وسرعة وبشكل مباشر دون الحاجة إلى التواصل مع الإدارة لأخذ تقرير ابنه"
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<MessageCircle className="w-8 h-8" />}
                title="التواصل المباشر"
                description="تسهيل التواصل المباشر والسريع بين أولياء الأمور والإدارة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Bell className="w-8 h-8" />}
                title="تنبيهات الغياب"
                description="إرسال إشعارات تلقائية فورية لولي الأمر في حال غياب الطالب."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<CalendarCheck className="w-8 h-8" />}
                title="التقويم والرحلات"
                description="تقاويم محدثة تظهر مواعيد الرحلات، البرامج، والاختبارات."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Megaphone className="w-8 h-8" />}
                title="الرسائل الموحدة"
                description="سهولة الوصول لجميع أولياء الأمور عبر رسائل جماعية مما يسهل للإدارة التواصل معهم."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* الإدارة والمعلمين */}
      <section className="py-8 px-8 pb-16">
        <div className="max-w-[1100px] mx-auto">
          <SectionHeader
            title="الإدارة والمعلمين"
          />
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Leaf className="w-8 h-8" />}
                title="التحول الرقمي"
                description="الاستغناء الكامل عن الأوراق لتسهيل العمل الإداري والأرشفة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<History className="w-8 h-8" />}
                title="إشعارات الانضباط"
                description="نظام ذكي يرسل إشعاراً فورياً للإدارة في حال تأخر المعلم عن تسجيل حضور الطلاب لضمان الجودة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<ListChecks className="w-8 h-8" />}
                title="سرعة التحضير"
                description="سهولة وسرعة التحضير اليومي وإدارة الحلقات."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<UsersRound className="w-8 h-8" />}
                title="إدارة البيانات"
                description="إدارة بيانات الطلاب (إضافة، عرض، إزالة) بمرونة عالية."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Gamepad2 className="w-8 h-8" />}
                title="مسابقات تفاعلية"
                description="إنشاء مسابقات تفاعلية لاستثمار وقت الطلاب أثناء الرحلات."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Laptop className="w-8 h-8" />}
                title="بناء البرامج"
                description="إمكانية وضع برامج من الجمعية أو خاصة للمجمع بسهولة."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <FeatureCard
                icon={<CloudUpload className="w-8 h-8" />}
                title="الربط بالجمعية"
                description="ربط الموقع بأنظمة الجمعية بنقل بيانات البرامج وحضور الطلاب وتقييماتهم عن طريق اداري مخصص لضمان الحصول على أفضل نتيجة دائما في ناظم."
                large
              />
              <div className="bg-card border-2 border-dashed border-border rounded-2xl min-h-[220px] flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                <span className="text-muted-foreground">أضف صورة هنا</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 text-muted-foreground border-t border-border bg-card mt-8">
        <p>© 2026 جميع الحقوق محفوظة للمجمع القرآني</p>
      </footer>
    </main>
  )
}
