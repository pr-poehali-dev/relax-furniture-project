import Icon from "@/components/ui/icon";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/8 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 neon-bg rounded-sm flex items-center justify-center">
                <span className="font-display font-700 text-background text-sm">Р</span>
              </div>
              <span className="font-display text-2xl font-700 tracking-widest uppercase">Релакс</span>
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Мебель для жизни. Создаём пространства, в которых хочется жить.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full neon-bg animate-pulse" />
              <span className="font-body text-xs text-[var(--neon)]">Работаем с 9:00 до 21:00</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="font-display text-sm font-600 text-foreground uppercase tracking-widest mb-5">
              Навигация
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { id: "home", label: "Главная" },
                { id: "catalog", label: "Каталог" },
                { id: "promo", label: "Акции" },
                { id: "delivery", label: "Доставка" },
                { id: "contacts", label: "Контакты" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="font-body text-sm text-muted-foreground hover:text-[var(--neon)] transition-colors uppercase tracking-wider"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <div className="font-display text-sm font-600 text-foreground uppercase tracking-widest mb-5">
              Каталог
            </div>
            <ul className="flex flex-col gap-3">
              {["Диваны", "Кресла", "Кровати", "Столы", "Шкафы", "Новинки"].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => scrollTo("catalog")}
                    className="font-body text-sm text-muted-foreground hover:text-[var(--neon)] transition-colors uppercase tracking-wider"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="font-display text-sm font-600 text-foreground uppercase tracking-widest mb-5">
              Связь
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={16} className="text-[var(--neon)]" />
                <span className="font-body text-sm text-muted-foreground">8 (800) 555-35-35</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={16} className="text-[var(--neon)]" />
                <span className="font-body text-sm text-muted-foreground">hello@relax-mebel.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={16} className="text-[var(--neon)]" />
                <span className="font-body text-sm text-muted-foreground">Москва, ул. Мебельная, 12</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-muted-foreground">
            © 2024 Магазин мебели «Релакс». Все права защищены.
          </span>
          <div className="flex gap-6">
            {["Политика конфиденциальности", "Условия использования"].map((link) => (
              <button
                key={link}
                className="font-body text-xs text-muted-foreground hover:text-[var(--neon)] transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
