import { useState } from "react";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Диваны", "Кровати", "Кресла", "Столы", "Шкафы"];

const products = [
  {
    id: 1,
    name: "Диван NORD",
    category: "Диваны",
    price: 89_900,
    oldPrice: 112_000,
    badge: "Хит",
    color: "#2C3E50",
    style: "Скандинавский",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/dbfa09ae-0278-4aea-afd5-2dcabf81719f.jpg",
  },
  {
    id: 2,
    name: "Кровать LUNA",
    category: "Кровати",
    price: 64_900,
    oldPrice: null,
    badge: "Новинка",
    color: "#8B7355",
    style: "Минимализм",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/e2f7fbf9-514a-42e9-8373-be2ce1a51c86.jpg",
  },
  {
    id: 3,
    name: "Кресло OSLO",
    category: "Кресла",
    price: 34_500,
    oldPrice: 42_000,
    badge: "-18%",
    color: "#4A4A4A",
    style: "Лофт",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/dbfa09ae-0278-4aea-afd5-2dcabf81719f.jpg",
  },
  {
    id: 4,
    name: "Стол MESA",
    category: "Столы",
    price: 28_900,
    oldPrice: null,
    badge: null,
    color: "#6B4C3B",
    style: "Эко",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/e2f7fbf9-514a-42e9-8373-be2ce1a51c86.jpg",
  },
  {
    id: 5,
    name: "Диван VERONA",
    category: "Диваны",
    price: 124_000,
    oldPrice: 148_000,
    badge: "Хит",
    color: "#1A1A2E",
    style: "Итальянский",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/dbfa09ae-0278-4aea-afd5-2dcabf81719f.jpg",
  },
  {
    id: 6,
    name: "Шкаф FELIX",
    category: "Шкафы",
    price: 47_500,
    oldPrice: null,
    badge: "Новинка",
    color: "#2D4A22",
    style: "Минимализм",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/e2f7fbf9-514a-42e9-8373-be2ce1a51c86.jpg",
  },
];

export default function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered =
    activeCategory === "Все"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const formatPrice = (price: number) =>
    price.toLocaleString("ru-RU") + " ₽";

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
        <button className="font-body text-sm text-muted-foreground hover:text-[var(--neon)] transition-colors flex items-center gap-2 uppercase tracking-wider">
          Все товары
          <Icon name="ArrowRight" size={16} />
        </button>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-body text-sm px-5 py-2 rounded-full border transition-all duration-300 uppercase tracking-wider ${
              activeCategory === cat
                ? "neon-bg text-background border-transparent font-600"
                : "glass border-white/10 text-muted-foreground hover:border-[var(--neon)]/40 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <div
            key={product.id}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            className="group relative glass border border-white/8 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-[var(--neon)]/30 hover:-translate-y-1"
            style={{
              boxShadow: hovered === product.id ? "0 8px 40px rgba(255,140,0,0.1)" : "none",
            }}
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />

              {/* Color dot */}
              <div
                className="absolute top-4 left-4 w-5 h-5 rounded-full border-2 border-white/20 shadow-lg"
                style={{ backgroundColor: product.color }}
                title="Цвет"
              />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 neon-bg text-background font-display font-600 text-xs px-3 py-1 rounded-full uppercase">
                  {product.badge}
                </div>
              )}

              {/* 3D button on hover */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hovered === product.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <button className="glass border border-[var(--neon)]/40 text-[var(--neon)] font-body text-sm px-5 py-2.5 rounded-full flex items-center gap-2 hover:neon-bg hover:text-background transition-all">
                  <Icon name="Box" size={16} />
                  3D-примерка
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-display text-xl font-600 text-foreground uppercase tracking-wide">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-body text-xs text-muted-foreground">{product.style}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="font-body text-xs text-muted-foreground">{product.category}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="font-display text-2xl font-700 text-foreground">
                    {formatPrice(product.price)}
                  </div>
                  {product.oldPrice && (
                    <div className="font-body text-sm text-muted-foreground line-through">
                      {formatPrice(product.oldPrice)}
                    </div>
                  )}
                </div>
                <button className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:neon-bg hover:border-transparent transition-all group/btn">
                  <Icon
                    name="ShoppingBag"
                    size={16}
                    className="text-muted-foreground group-hover/btn:text-background transition-colors"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
