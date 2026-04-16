import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const rooms = [
  {
    name: "Гостиная",
    style: "Современный лофт",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/dbfa09ae-0278-4aea-afd5-2dcabf81719f.jpg",
  },
  {
    name: "Спальня",
    style: "Скандинавский минимализм",
    img: "https://cdn.poehali.dev/projects/e52c25ac-2d96-4ebf-b6d1-e24b6cd45312/files/e2f7fbf9-514a-42e9-8373-be2ce1a51c86.jpg",
  },
];

export default function HeroSection({ setActiveSection }: HeroProps) {
  const [activeRoom, setActiveRoom] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  const scrollToCatalog = () => {
    setActiveSection("catalog");
    document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={rooms[activeRoom].img}
          alt={rooms[activeRoom].name}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent z-0" />
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-px bg-gradient-to-b from-transparent via-[var(--neon)] to-transparent opacity-30"
          style={{ height: "40%", top: "30%", left: "33%" }}
        />
        {/* Warm ambient glow */}
        <div
          className="absolute rounded-full blur-3xl opacity-10"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, #d4793a 0%, #8b4a1e 50%, transparent 70%)",
            top: "10%",
            right: "-10%",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl opacity-8"
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #a05a28 0%, transparent 70%)",
            bottom: "5%",
            left: "20%",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          {/* Tag */}
          <div
            className={`inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-2 h-2 rounded-full neon-bg animate-pulse" />
            <span className="font-body text-sm text-muted-foreground">
              Более 1200 моделей мебели
            </span>
          </div>

          {/* Main title */}
          <h1
            className={`hero-title text-foreground mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Мебель,{" "}
            <span className="neon-text block">которая</span>
            <span className="text-foreground">живёт</span>
          </h1>

          <p
            className={`font-body text-lg text-muted-foreground max-w-md mb-10 leading-relaxed transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Создаём пространства, в которых хочется жить. Стильная мебель с доставкой и сборкой.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToCatalog}
              className="neon-bg text-background font-display font-600 text-base px-8 py-4 rounded-sm uppercase tracking-wider hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2"
            >
              <Icon name="Sofa" size={18} />
              Смотреть каталог
            </button>
            <button className="glass border border-white/15 text-foreground font-display font-500 text-base px-8 py-4 rounded-sm uppercase tracking-wider hover:border-[var(--neon)] transition-all flex items-center gap-2">
              <Icon name="Phone" size={18} />
              Консультация
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex gap-8 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { num: "1200+", label: "Товаров" },
              { num: "15 лет", label: "На рынке" },
              { num: "50 000+", label: "Клиентов" },
            ].map((stat) => (
              <div key={stat.num}>
                <div className="font-display text-2xl font-700 neon-text">{stat.num}</div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 3D Viewer Block */}
        <div
          className={`relative transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          }`}
        >
          <div className="relative glass border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] animate-float">
            <img
              src={rooms[activeRoom].img}
              alt={rooms[activeRoom].name}
              className="w-full h-full object-cover transition-all duration-1000"
            />
            {/* Overlay UI */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

            {/* Room info */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="font-display text-xl font-600 text-foreground uppercase">{rooms[activeRoom].name}</div>
                <div className="font-body text-sm text-muted-foreground">{rooms[activeRoom].style}</div>
              </div>
              <div className="flex gap-2">
                {rooms.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveRoom(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeRoom === i ? "neon-bg w-6" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Live badge */}
            <div className="absolute top-4 right-4 glass border border-[var(--neon)]/30 rounded-full px-3 py-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full neon-bg animate-pulse" />
              <span className="font-body text-xs text-[var(--neon)] font-500">Интерьер</span>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[var(--neon)]/30 rounded-br-2xl" />
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[var(--neon)]/20 rounded-tl-2xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-body text-xs text-muted-foreground uppercase tracking-widest">Листать</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--neon)] to-transparent animate-pulse" />
      </div>
    </div>
  );
}