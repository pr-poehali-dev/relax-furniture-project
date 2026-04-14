import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px neon-bg" />
          <span className="font-body text-sm text-[var(--neon)] uppercase tracking-widest">Контакты</span>
        </div>
        <h2 className="section-title text-foreground">
          Свяжитесь <span className="neon-text">с нами</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="glass border border-white/8 rounded-3xl p-8 md:p-10">
          {!sent ? (
            <>
              <h3 className="font-display text-2xl font-700 text-foreground uppercase mb-2">
                Оставить заявку
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-8">
                Ответим в течение 15 минут в рабочее время
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Александр"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--neon)]/50 transition-colors bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 000-00-00"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--neon)]/50 transition-colors bg-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                    Сообщение
                  </label>
                  <textarea
                    placeholder="Интересует диван для гостиной..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[var(--neon)]/50 transition-colors bg-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="neon-bg text-background font-display font-700 text-base py-4 rounded-xl uppercase tracking-wider hover:opacity-90 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Icon name="Send" size={18} />
                  Отправить заявку
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 neon-bg rounded-full flex items-center justify-center mb-6 animate-pulse-neon">
                <Icon name="Check" size={28} className="text-background" />
              </div>
              <h3 className="font-display text-2xl font-700 text-foreground uppercase mb-3">
                Заявка отправлена!
              </h3>
              <p className="font-body text-muted-foreground">
                Мы перезвоним вам в ближайшее время
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-8 glass border border-white/10 text-foreground font-body text-sm px-6 py-3 rounded-xl hover:border-[var(--neon)]/40 transition-all uppercase tracking-wider"
              >
                Новая заявка
              </button>
            </div>
          )}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          {/* Contact cards */}
          {[
            {
              icon: "Phone",
              title: "Телефон",
              value: "8 (800) 555-35-35",
              note: "Бесплатно по России",
            },
            {
              icon: "Mail",
              title: "Email",
              value: "hello@relax-mebel.ru",
              note: "Ответим за 1 час",
            },
            {
              icon: "MapPin",
              title: "Шоурум",
              value: "Междуреченск, Кемеровская обл.",
              note: "Пн–Вс, 10:00–21:00",
            },
          ].map((contact) => (
            <div
              key={contact.title}
              className="glass border border-white/8 rounded-2xl p-6 flex items-center gap-5 hover:border-[var(--neon)]/30 transition-all group"
            >
              <div className="w-12 h-12 neon-bg rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Icon name={contact.icon} size={20} className="text-background" />
              </div>
              <div>
                <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {contact.title}
                </div>
                <div className="font-display text-lg font-600 text-foreground">{contact.value}</div>
                <div className="font-body text-xs text-muted-foreground mt-1">{contact.note}</div>
              </div>
            </div>
          ))}

          {/* Social */}
          <div className="glass border border-white/8 rounded-2xl p-6">
            <div className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-4">
              Мы в соцсетях
            </div>
            <div className="flex gap-3">
              {[
                { name: "ВКонтакте", icon: "Users" },
                { name: "Telegram", icon: "Send" },
                { name: "Instagram", icon: "Camera" },
                { name: "YouTube", icon: "Play" },
              ].map((social) => (
                <button
                  key={social.name}
                  title={social.name}
                  className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center hover:neon-bg hover:border-transparent transition-all group/s"
                >
                  <Icon
                    name={social.icon}
                    size={16}
                    className="text-muted-foreground group-hover/s:text-background transition-colors"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}