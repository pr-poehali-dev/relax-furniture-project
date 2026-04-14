import Icon from "@/components/ui/icon";

const promos = [
  {
    title: "Весенний старт",
    desc: "Скидки до 35% на все диваны и кресла",
    discount: "−35%",
    color: "from-orange-950/50 to-orange-900/20",
    icon: "Sofa",
    until: "30 апреля",
  },
  {
    title: "Наличные и перевод",
    desc: "Скидка 10% при оплате наличными или переводом на карту",
    discount: "−10%",
    color: "from-emerald-950/50 to-emerald-900/20",
    icon: "Banknote",
    until: "Постоянно",
  },
  {
    title: "Кухня мечты",
    desc: "Комплект кухонной мебели по цене ниже рынка",
    discount: "−25%",
    color: "from-emerald-950/50 to-emerald-900/20",
    icon: "UtensilsCrossed",
    until: "15 мая",
  },
];

const marqueeItems = [
  "ВЕСЕННИЕ СКИДКИ",
  "ГАРАНТИЯ КАЧЕСТВА",
  "ДОСТАВКА В ДЕНЬ ЗАКАЗА",
  "ГАРАНТИЯ 5 ЛЕТ",
  "РАССРОЧКА 0%",
  "1200+ МОДЕЛЕЙ",
];

export default function PromoSection() {
  return (
    <div className="py-24">
      {/* Marquee */}
      <div className="overflow-hidden border-y border-white/8 py-4 mb-20">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="font-display text-sm font-600 text-muted-foreground uppercase tracking-[0.2em]">
                {item}
              </span>
              <span className="neon-text text-sm">✦</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px neon-bg" />
              <span className="font-body text-sm text-[var(--neon)] uppercase tracking-widest">Акции</span>
            </div>
            <h2 className="section-title text-foreground">
              Лучшие <span className="neon-text">предложения</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 glass border border-white/10 rounded-full px-5 py-2.5">
            <Icon name="Clock" size={16} className="text-[var(--neon)]" />
            <span className="font-body text-sm text-muted-foreground">Обновляются еженедельно</span>
          </div>
        </div>

        {/* Promo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {promos.map((promo) => (
            <div
              key={promo.title}
              className={`relative rounded-2xl overflow-hidden border border-white/8 p-8 bg-gradient-to-br ${promo.color} hover:border-[var(--neon)]/30 transition-all duration-300 group cursor-pointer`}
            >
              {/* Discount badge */}
              <div className="absolute top-6 right-6 font-display text-4xl font-700 neon-text opacity-20 group-hover:opacity-40 transition-opacity">
                {promo.discount}
              </div>

              <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:neon-bg group-hover:border-transparent transition-all">
                <Icon name={promo.icon} size={22} className="text-[var(--neon)] group-hover:text-background transition-colors" />
              </div>

              <h3 className="font-display text-2xl font-700 text-foreground uppercase mb-3">
                {promo.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                {promo.desc}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={14} className="text-[var(--neon)]" />
                  <span className="font-body text-xs text-muted-foreground">До {promo.until}</span>
                </div>
                <div className="font-display text-3xl font-700 neon-text">{promo.discount}</div>
              </div>

              <button className="mt-5 w-full glass border border-white/10 group-hover:border-[var(--neon)]/40 text-foreground font-body text-sm py-3 rounded-xl uppercase tracking-wider transition-all hover:neon-bg hover:text-background">
                Подробнее
              </button>
            </div>
          ))}
        </div>

        {/* Big promo banner */}
        <div className="relative rounded-3xl overflow-hidden border border-[var(--neon)]/20 bg-gradient-to-r from-background via-orange-950/20 to-background p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, #FF8C00 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10">
            <div className="font-body text-sm text-[var(--neon)] uppercase tracking-widest mb-3">
              Специальное предложение
            </div>
            <h3 className="font-display text-4xl md:text-5xl font-700 text-foreground uppercase mb-4">
              Рассрочка <span className="neon-text">0%</span>
            </h3>
            <p className="font-body text-muted-foreground max-w-md">
              Оформите любую мебель в рассрочку на 3 месяца без процентов и переплат
            </p>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="font-display text-6xl font-700 neon-text">3</div>
            <div className="font-body text-sm text-muted-foreground uppercase tracking-wider">месяца / 0%</div>
            <button className="neon-bg text-background font-display font-600 text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:opacity-90 transition-all hover:scale-105">
              Оформить рассрочку
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}