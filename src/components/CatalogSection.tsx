import Icon from "@/components/ui/icon";

const categories = ["Диваны", "Кровати", "Кресла", "Столы", "Шкафы"];

export default function CatalogSection() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px neon-bg" />
            <span className="font-body text-sm text-[var(--neon)] uppercase tracking-widest">Каталог</span>
          </div>
          <h2 className="section-title text-foreground">
            Выбери <span className="neon-text">своё</span>
          </h2>
        </div>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {categories.map((cat) => (
          <div
            key={cat}
            className="glass border border-white/8 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-[var(--neon)]/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="w-12 h-12 glass border border-white/10 rounded-xl flex items-center justify-center group-hover:neon-bg group-hover:border-transparent transition-all">
              <Icon name="Sofa" size={20} className="text-[var(--neon)] group-hover:text-background transition-colors" />
            </div>
            <span className="font-display text-sm font-600 text-foreground uppercase tracking-wider text-center">
              {cat}
            </span>
          </div>
        ))}
      </div>

      {/* Empty state */}
      <div className="flex flex-col items-center justify-center py-20 glass border border-white/8 rounded-3xl">
        <div className="w-20 h-20 glass border border-[var(--neon)]/20 rounded-full flex items-center justify-center mb-6">
          <Icon name="PackageOpen" size={32} className="text-[var(--neon)]" />
        </div>
        <h3 className="font-display text-2xl font-700 text-foreground uppercase mb-3">
          Товары скоро появятся
        </h3>
        <p className="font-body text-sm text-muted-foreground text-center max-w-sm mb-8">
          Мы формируем каталог. Позвоните нам — расскажем о наличии и ценах
        </p>
        <a
          href="tel:+79069801480"
          className="neon-bg text-background font-display font-600 text-sm px-8 py-4 rounded-sm uppercase tracking-wider hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
        >
          <Icon name="Phone" size={16} />
          +7 (906) 980-14-80
        </a>
      </div>
    </div>
  );
}
