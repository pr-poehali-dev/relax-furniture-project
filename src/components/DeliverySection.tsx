import Icon from "@/components/ui/icon";

const steps = [
  { num: "01", title: "Выбор", desc: "Подбираете мебель в каталоге или по телефону с помощью консультанта" },
  { num: "02", title: "Заказ", desc: "Оформляете заказ онлайн или по телефону, выбираете дату" },
  { num: "03", title: "Доставка", desc: "Привозим в удобное время, поднимаем на любой этаж" },
  { num: "04", title: "Сборка", desc: "Мастера собирают мебель под ключ — быстро и аккуратно" },
];

const features = [
  { icon: "Truck", title: "Доставка по городу", desc: "1 200 ₽ — по Междуреченску" },
  { icon: "Clock", title: "В удобное время", desc: "Согласуем дату и время заранее" },
  { icon: "Shield", title: "Аккуратная перевозка", desc: "Мебель упакована и защищена" },
  { icon: "Wrench", title: "Сборка мебели", desc: "Профессиональные сборщики" },
  { icon: "RotateCcw", title: "Возврат 30 дней", desc: "Без объяснения причин" },
  { icon: "MapPin", title: "Кемеровская область", desc: "Междуреченск и окрестности" },
];

export default function DeliverySection() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px neon-bg" />
          <span className="font-body text-sm text-[var(--neon)] uppercase tracking-widest">Доставка</span>
        </div>
        <h2 className="section-title text-foreground">
          Привезём <span className="neon-text">и соберём</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="relative mb-20">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)]/30 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Number circle */}
              <div className="relative z-10 w-20 h-20 glass border border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:neon-bg group-hover:border-transparent transition-all duration-300 mx-auto lg:mx-0">
                <span className="font-display text-2xl font-700 text-[var(--neon)] group-hover:text-background transition-colors">
                  {step.num}
                </span>
              </div>

              <h3 className="font-display text-xl font-700 text-foreground uppercase mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 z-20 text-[var(--neon)] opacity-40">
                  <Icon name="ChevronRight" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {features.map((feat) => (
          <div
            key={feat.title}
            className="glass border border-white/8 rounded-2xl p-6 hover:border-[var(--neon)]/30 transition-all group"
          >
            <div className="w-10 h-10 neon-bg rounded-xl flex items-center justify-center mb-4 animate-pulse-neon">
              <Icon name={feat.icon} size={18} className="text-background" />
            </div>
            <h4 className="font-display text-base font-600 text-foreground uppercase mb-2">
              {feat.title}
            </h4>
            <p className="font-body text-xs text-muted-foreground">{feat.desc}</p>
          </div>
        ))}
      </div>

      {/* Delivery zones */}
      <div className="relative rounded-3xl overflow-hidden border border-white/8 p-8 md:p-12 glass">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { zone: "По Междуреченску", time: "1–2 дня", price: "1 200 ₽", icon: "Building2" },
            { zone: "Кемеровская обл.", time: "2–5 дней", price: "По договорённости", icon: "Map" },
            { zone: "Самовывоз", time: "В день заказа", price: "Бесплатно", icon: "Store" },
          ].map((zone) => (
            <div key={zone.zone} className="flex flex-col gap-3">
              <div className="w-12 h-12 glass border border-[var(--neon)]/20 rounded-xl flex items-center justify-center">
                <Icon name={zone.icon} size={20} className="text-[var(--neon)]" />
              </div>
              <h4 className="font-display text-xl font-700 text-foreground uppercase">{zone.zone}</h4>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={14} className="text-[var(--neon)]" />
                  <span className="font-body text-sm text-muted-foreground">{zone.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Tag" size={14} className="text-[var(--neon)]" />
                  <span className="font-body text-sm text-muted-foreground">{zone.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}