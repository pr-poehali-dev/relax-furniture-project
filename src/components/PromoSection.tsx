import Icon from "@/components/ui/icon";

const promos = [
  {
    title: "Диваны",
    desc: "При оплате наличными или переводом на карту",
    discount: "−10%",
    color: "from-[#2a1a0e]/80 to-[#1e1208]/40",
    icon: "Sofa",
    items: "На все диваны",
  },
  {
    title: "Корпусная мебель",
    desc: "При оплате наличными или переводом на карту",
    discount: "−3%",
    color: "from-[#1e1510]/80 to-[#15100a]/40",
    icon: "Package",
    items: "Шкафы, столы, тумбы",
  },
];

export default function PromoSection() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px neon-bg" />
            <span className="font-body text-sm text-[var(--neon)] uppercase tracking-widest">Акции</span>
          </div>
          <h2 className="section-title text-foreground">
            Выгода за <span className="neon-text">наличные</span>
          </h2>
        </div>
        <div className="flex items-center gap-2 glass border border-white/10 rounded-full px-5 py-2.5">
          <Icon name="Banknote" size={16} className="text-[var(--neon)]" />
          <span className="font-body text-sm text-muted-foreground">Наличные и перевод на карту</span>
        </div>
      </div>

      {/* Promo cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {promos.map((promo) => (
          <div
            key={promo.title}
            className={`relative rounded-2xl overflow-hidden border border-white/8 p-8 bg-gradient-to-br ${promo.color} hover:border-[var(--neon)]/30 transition-all duration-300 group cursor-pointer`}
          >
            {/* Discount watermark */}
            <div className="absolute top-6 right-6 font-display text-6xl font-700 neon-text opacity-10 group-hover:opacity-25 transition-opacity select-none">
              {promo.discount}
            </div>

            <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:neon-bg group-hover:border-transparent transition-all">
              <Icon name={promo.icon} size={22} className="text-[var(--neon)] group-hover:text-background transition-colors" />
            </div>

            <div className="font-body text-xs text-[var(--neon)] uppercase tracking-widest mb-2">
              {promo.items}
            </div>
            <h3 className="font-display text-3xl font-700 text-foreground uppercase mb-3">
              {promo.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-8 leading-relaxed">
              {promo.desc}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 glass border border-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Banknote" size={14} className="text-[var(--neon)]" />
                </div>
                <span className="font-body text-sm text-muted-foreground">Наличные</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 glass border border-white/10 rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" size={14} className="text-[var(--neon)]" />
                </div>
                <span className="font-body text-sm text-muted-foreground">Перевод</span>
              </div>
              <div className="font-display text-4xl font-700 neon-text">{promo.discount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}