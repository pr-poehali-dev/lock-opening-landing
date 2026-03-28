import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IMG_SHIP     = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/5d9466ad-8660-43f6-9490-fa23a64eeeed.jpg";
const IMG_ENGINE   = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/32f4384a-8ed2-435c-913b-3be3513c5db6.jpg";
const IMG_CHANDLER = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/55069be5-26b0-43e3-938d-106938ebfb12.jpg";

/* ─────────────── DATA ─────────────── */
const NAV = [
  { label: "Агентирование",    href: "#agency" },
  { label: "Ремонт двигателей", href: "#engines" },
  { label: "Ship Chandler",    href: "#chandler" },
  { label: "Как мы работаем",  href: "#how" },
  { label: "Контакты",         href: "#contacts" },
];

const SLIDES = [
  { title: "Судовое\nагентирование",        sub: "Полный комплекс портовых услуг для судовладельцев и операторов",                    badge: "Профессиональный судовой агент" },
  { title: "Ремонт судовых\nдвигателей",    sub: "Диагностика и ремонт главных и вспомогательных двигателей любой мощности",          badge: "Сертифицированные механики" },
  { title: "Ship Chandler —\nСнабжение",    sub: "Провизия, техническое снабжение и расходные материалы с доставкой на борт",         badge: "Поставки 24 / 7" },
];

const AGENCY_SERVICES = [
  { icon: "FileText",      title: "Оформление судозаходов",  desc: "Таможенное и пограничное оформление, портовые формальности, взаимодействие с властями" },
  { icon: "Users",         title: "Смена экипажа",           desc: "Организация визовой поддержки, трансфера, гостиниц, репатриации моряков" },
  { icon: "Anchor",        title: "Агентирование в порту",   desc: "Координация швартовки, бункеровки, балластных операций и грузовых работ" },
  { icon: "ClipboardList", title: "Судовые документы",       desc: "Помощь с сертификацией, инспекциями и флагом регистрации" },
  { icon: "Truck",         title: "Логистика грузов",        desc: "Организация стивидорных работ, складирования и доставки грузов" },
  { icon: "Shield",        title: "P&I представительство",   desc: "Интересы судовладельцев перед страховыми клубами и властями" },
];

const ENGINE_SERVICES = [
  { icon: "Settings",    label: "Диагностика и дефектация",  desc: "Эндоскопия цилиндров, анализ масла, компрессия, термография" },
  { icon: "Wrench",      label: "Капитальный ремонт",        desc: "Расточка, хонингование гильз, шлифовка коленвалов" },
  { icon: "Zap",         label: "Турбокомпрессоры",          desc: "Восстановление и балансировка роторов ТКР" },
  { icon: "Droplets",    label: "Топливная система",         desc: "ТНВД, форсунки, трубопроводы высокого давления" },
  { icon: "Thermometer", label: "Система охлаждения",        desc: "Ремонт теплообменников, насосов, термостатов" },
  { icon: "Activity",    label: "Ходовые испытания",         desc: "Финальная настройка под нагрузкой с протоколом" },
];

const CHANDLER_CATS = [
  { icon: "UtensilsCrossed", title: "Продовольствие",  desc: "Свежие, замороженные и сухие продукты по ГОСТу и международным стандартам" },
  { icon: "Package",         title: "Техснабжение",    desc: "Запасные части, крепёж, инструмент, лакокрасочные материалы" },
  { icon: "Droplets",        title: "Масла и химия",   desc: "Судовые масла, топливные присадки, антикоррозионные покрытия" },
  { icon: "Shirt",           title: "Спецодежда",      desc: "СИЗ, форменная одежда, спасательное снаряжение и пиротехника" },
  { icon: "Wifi",            title: "Связь и IT",      desc: "Спутниковые карты, SIM-карты, оборудование ГМССБ" },
  { icon: "Heart",           title: "Медикаменты",     desc: "Судовая аптека, медицинские комплекты по СОЛАС" },
];

const HOW_STEPS = [
  { num: "01", icon: "Phone",       title: "Заявка",           desc: "Капитан или судовладелец оставляет заявку — телефон, e-mail или форма" },
  { num: "02", icon: "Search",      title: "Анализ и расчёт",  desc: "Агент изучает требования, рассчитывает дисбурсментский счёт" },
  { num: "03", icon: "FileCheck",   title: "Документация",     desc: "Подготовка манифестов, нотисов о прибытии, взаимодействие с портом" },
  { num: "04", icon: "Anchor",      title: "Встреча судна",    desc: "Координация лоцмана, буксиров, швартовки и таможенного оформления" },
  { num: "05", icon: "Package",     title: "Снабжение",        desc: "Доставка провизии, материалов и ЗИП непосредственно на борт" },
  { num: "06", icon: "CheckCircle2",title: "Отход судна",      desc: "Окончательный расчёт с портовыми властями, оформление отхода" },
];

const STATS = [
  { value: "15+",  label: "лет на рынке" },
  { value: "300+", label: "судозаходов в год" },
  { value: "40+",  label: "портов присутствия" },
  { value: "24/7", label: "на связи всегда" },
];

/* ─────────────── HELPERS ─────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
}

/* ─────────────── CONTACT FORM ─────────────── */
function ContactForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [sent, setSent] = useState(false);
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  if (sent) return (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
        style={{ backgroundColor: "rgba(34,197,94,0.2)" }}>
        <Icon name="CheckCircle2" size={24} className="text-green-400" />
      </div>
      <p className="text-white font-ibm font-medium">Заявка принята!</p>
      <p className="text-white/50 text-sm mt-1 font-ibm">Свяжемся в течение 30 минут</p>
    </div>
  );

  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="space-y-3">
      {!compact && (
        <p className="font-cormorant text-white/70 italic text-sm mb-2">
          Оставьте контакты — перезвоним в течение 30 минут
        </p>
      )}
      <input required value={form.name} onChange={set("name")}
        placeholder="Ваше имя / название судна" className="input-marine" />
      <input required type="tel" value={form.phone} onChange={set("phone")}
        placeholder="+7 (___) ___-__-__" className="input-marine" />
      {!compact && (
        <select value={form.service} onChange={set("service")} className="input-marine"
          style={{ appearance: "none", cursor: "pointer" }}>
          <option value="">Выберите услугу...</option>
          <option>Судовое агентирование</option>
          <option>Ремонт двигателей</option>
          <option>Ship Chandler</option>
          <option>Другое</option>
        </select>
      )}
      <button type="submit" className="btn-gold w-full rounded px-4 py-3 text-xs tracking-widest">
        Отправить заявку
      </button>
    </form>
  );
}

/* ─────────────── MAIN ─────────────── */
export default function Index() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    setFormOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-ibm bg-white" style={{ color: "var(--navy)" }}>

      {/* ══════════ HEADER ══════════ */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "shadow-2xl" : ""}`}
        style={{ backgroundColor: scrolled ? "var(--navy)" : "transparent" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20 gap-6">

            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} className="flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded flex items-center justify-center"
                style={{ border: "1px solid rgba(212,160,23,0.4)", backgroundColor: "rgba(212,160,23,0.1)" }}>
                <Icon name="Anchor" size={18} style={{ color: "var(--gold)" }} />
              </div>
              <div className="text-left">
                <div className="font-cormorant text-white font-semibold text-xl leading-none tracking-wide">MarineGroup</div>
                <div className="font-ibm text-[10px] uppercase tracking-[0.2em] leading-none mt-0.5" style={{ color: "var(--gold)" }}>
                  Судовое агентство
                </div>
              </div>
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)} className="nav-link">{l.label}</button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4 shrink-0 relative">
              <a href="tel:+70000000000"
                className="flex items-center gap-2 font-ibm text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}>
                <Icon name="Phone" size={14} style={{ color: "var(--gold)" }} />
                +7 (000) 000-00-00
              </a>
              <button onClick={() => setFormOpen(v => !v)} className="btn-gold px-5 py-2.5 rounded text-xs">
                Связаться
              </button>

              {/* Dropdown form */}
              {formOpen && (
                <div className="absolute top-full right-0 mt-3 w-72 rounded-xl shadow-2xl p-5 z-50"
                  style={{ backgroundColor: "var(--navy-light)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cormorant text-white font-semibold text-lg">Запрос агенту</span>
                    <button onClick={() => setFormOpen(false)} className="text-white/40 hover:text-white transition-colors">
                      <Icon name="X" size={16} />
                    </button>
                  </div>
                  <ContactForm compact />
                </div>
              )}
            </div>

            {/* Mobile burger */}
            <button onClick={() => setMenuOpen(v => !v)} className="lg:hidden text-white p-1.5">
              <Icon name={menuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "var(--navy)", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="px-4 py-5 space-y-1">
              {NAV.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  className="block w-full text-left px-3 py-2.5 rounded font-ibm text-sm uppercase tracking-wider transition-colors"
                  style={{ color: "rgba(255,255,255,0.65)" }}>
                  {l.label}
                </button>
              ))}
              <div className="pt-4 mt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <ContactForm compact />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ══════════ HERO ══════════ */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG_SHIP} alt="ship" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(100deg, rgba(6,20,38,0.97) 0%, rgba(11,31,58,0.82) 55%, rgba(11,31,58,0.45) 100%)" }} />
          <div className="absolute inset-0 sea-texture" />
        </div>

        {/* Bottom sea gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(0deg, var(--navy-deep) 0%, transparent 100%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full pt-24 pb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <div className="section-label mb-5 animate-fade-in">{SLIDES[slide].badge}</div>
              <h1 key={`title-${slide}`}
                className="font-cormorant text-white font-semibold leading-[1.05] mb-5 animate-fade-up"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", whiteSpace: "pre-line" }}>
                {SLIDES[slide].title}
              </h1>
              <p key={`sub-${slide}`}
                className="font-ibm leading-relaxed mb-10 max-w-lg animate-fade-up"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", animationDelay: "0.1s" }}>
                {SLIDES[slide].sub}
              </p>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollTo("#contacts")} className="btn-gold px-8 py-3.5 rounded text-xs">
                  Запросить агента
                </button>
                <button onClick={() => scrollTo("#how")} className="btn-outline-white px-8 py-3.5 rounded text-xs">
                  Как мы работаем
                </button>
              </div>

              <div className="flex gap-2 mt-10">
                {SLIDES.map((_, i) => (
                  <button key={i} onClick={() => setSlide(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === slide ? "2rem" : "0.75rem",
                      height: "0.375rem",
                      backgroundColor: i === slide ? "var(--gold)" : "rgba(255,255,255,0.25)"
                    }} />
                ))}
              </div>
            </div>

            {/* Stats (desktop) */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={i} className="glass-card rounded-2xl p-7 text-center animate-scale-in"
                  style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                  <div className="font-cormorant font-bold leading-none mb-2"
                    style={{ fontSize: "3.2rem", color: "var(--gold-light)" }}>
                    {s.value}
                  </div>
                  <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-float"
          style={{ color: "rgba(255,255,255,0.3)" }}>
          <Icon name="ChevronDown" size={22} />
        </div>
      </section>

      {/* Mobile stats */}
      <div style={{ backgroundColor: "var(--navy)" }} className="lg:hidden">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center">
                <div className="font-cormorant font-bold text-3xl" style={{ color: "var(--gold-light)" }}>{s.value}</div>
                <div className="font-ibm text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════ HOW WE WORK — INFOGRAPHIC ══════════ */}
      <section id="how" style={{ backgroundColor: "var(--beige)" }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <div className="section-label mb-3">Схема работы</div>
              <h2 className="section-title-lg mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Как работает судовой агент
              </h2>
              <div className="gold-line w-28 mx-auto" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOW_STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="card-marine rounded-2xl p-7 relative overflow-hidden group bg-white">
                  {/* Large bg number */}
                  <div className="absolute -top-3 -right-1 font-cormorant font-bold select-none pointer-events-none leading-none"
                    style={{ fontSize: "8rem", color: "rgba(11,31,58,0.04)" }}>
                    {step.num}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300"
                        style={{ backgroundColor: "var(--navy)" }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--sea)")}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--navy)")}>
                        <Icon name={step.icon as "Phone"} size={20} style={{ color: "var(--gold)" }} />
                      </div>
                      <span className="font-ibm text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                        Шаг {step.num}
                      </span>
                    </div>
                    <h3 className="font-cormorant font-semibold text-2xl mb-2" style={{ color: "var(--navy)" }}>
                      {step.title}
                    </h3>
                    <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Connecting dot for non-last items */}
                  {(i + 1) % 3 !== 0 && i < HOW_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full shadow-lg"
                      style={{ backgroundColor: "var(--gold)" }} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* Timeline bar */}
          <Reveal className="mt-14">
            <div className="relative">
              <div className="gold-line w-full mb-6" />
              <div className="flex justify-between">
                {HOW_STEPS.map((s, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 text-center" style={{ width: `${100 / HOW_STEPS.length}%` }}>
                    <div className="w-3 h-3 rounded-full -mt-[22px] border-2 border-white shadow"
                      style={{ backgroundColor: "var(--gold)" }} />
                    <span className="font-ibm text-xs hidden md:block" style={{ color: "var(--text-muted)" }}>{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-12 text-center">
            <div className="inline-flex items-center gap-5 rounded-2xl px-8 py-5 shadow-xl"
              style={{ backgroundColor: "var(--navy)", color: "white" }}>
              <Icon name="MessageCircle" size={22} style={{ color: "var(--gold)" }} />
              <span className="font-ibm text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>Остались вопросы?</span>
              <button onClick={() => scrollTo("#contacts")} className="btn-gold px-6 py-2.5 rounded text-xs whitespace-nowrap">
                Написать агенту
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════ AGENCY ══════════ */}
      <section id="agency" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="grid lg:grid-cols-2 gap-16 items-end mb-14">
              <div>
                <div className="section-label mb-3">01 — Агентирование</div>
                <h2 className="section-title-lg mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                  Судовое агентирование
                </h2>
                <div className="gold-line w-20 mb-5" />
                <p className="font-ibm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Профессиональное представление интересов судовладельца в порту. Берём на себя все бюрократические, логистические и координационные задачи — от нотиса о прибытии до оформления отхода.
                </p>
              </div>
              <div className="lg:text-right">
                <button onClick={() => scrollTo("#contacts")} className="btn-navy px-8 py-3.5 rounded text-xs">
                  Запросить агента
                </button>
              </div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENCY_SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-marine rounded-xl p-6 bg-white group"
                  style={{ borderLeft: "2px solid var(--gold)" }}>
                  <div className="w-10 h-10 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0B1F3A]"
                    style={{ backgroundColor: "var(--beige)" }}>
                    <Icon name={s.icon as "FileText"} size={20}
                      className="transition-colors duration-300 group-hover:text-yellow-400"
                      style={{ color: "var(--sea)" }} />
                  </div>
                  <h3 className="font-ibm font-semibold mb-2" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ENGINES ══════════ */}
      <section id="engines" className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
        <div className="absolute inset-0 sea-texture opacity-30" />
        <div className="absolute inset-0">
          <img src={IMG_ENGINE} alt="engine" className="w-full h-full object-cover opacity-8" />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(6,20,38,0.88)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="section-label mb-3">02 — Ремонт двигателей</div>
              <h2 className="font-cormorant text-white font-semibold leading-tight mb-4"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}>
                Ремонт судовых<br />
                <span style={{ color: "var(--gold-light)" }}>двигателей</span>
              </h2>
              <div className="gold-line w-20 mb-6" />
              <p className="font-ibm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
                Выездная и стационарная бригада сертифицированных механиков. Работаем с главными двигателями MAN, Wärtsilä, Caterpillar, Cummins, а также со вспомогательными механизмами любых серий.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["MAN B&W", "Wärtsilä", "Caterpillar", "Cummins", "MTU", "Volvo Penta"].map(b => (
                  <span key={b} className="font-ibm text-xs px-3 py-1.5 rounded-full"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}>
                    {b}
                  </span>
                ))}
              </div>
              <button onClick={() => scrollTo("#contacts")} className="btn-gold px-8 py-3.5 rounded text-xs">
                Вызвать механика
              </button>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {ENGINE_SERVICES.map((s, i) => (
                <Reveal key={i} delay={i * 70}>
                  <div className="glass-card rounded-xl p-5 hover:border-yellow-400/40 transition-colors duration-300">
                    <Icon name={s.icon as "Settings"} size={22} className="mb-3" style={{ color: "var(--gold)" }} />
                    <h4 className="font-ibm font-semibold text-white text-sm mb-1.5">{s.label}</h4>
                    <p className="font-ibm text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CHANDLER ══════════ */}
      <section id="chandler" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="section-label mb-3">03 — Ship Chandler</div>
              <h2 className="section-title-lg mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                Судовое снабжение
              </h2>
              <div className="gold-line w-24 mx-auto mb-5" />
              <p className="font-ibm max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Полный цикл снабжения — от заказа до доставки на борт. Работаем напрямую с производителями и сертифицированными дистрибьюторами. Оперативная доставка в любой порт присутствия.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={IMG_CHANDLER} alt="chandler" className="w-full h-96 object-cover" />
                <div className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(6,20,38,0.65) 0%, transparent 60%)" }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-card rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {[
                        { v: "2000+", l: "SKU в каталоге" },
                        { v: "24 ч",  l: "доставка на борт" },
                        { v: "100%",  l: "сертификация" },
                      ].map(s => (
                        <div key={s.l}>
                          <div className="font-cormorant font-bold text-2xl" style={{ color: "var(--gold-light)" }}>{s.v}</div>
                          <div className="font-ibm text-[11px] uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.5)" }}>{s.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4">
              {CHANDLER_CATS.map((c, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div className="card-marine rounded-xl p-5 group cursor-pointer bg-white">
                    <div className="w-10 h-10 rounded-lg mb-3 flex items-center justify-center transition-colors duration-300"
                      style={{ backgroundColor: "var(--beige)" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--gold)")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--beige)")}>
                      <Icon name={c.icon as "Package"} size={20} style={{ color: "var(--sea)" }} />
                    </div>
                    <h4 className="font-ibm font-semibold mb-1.5" style={{ color: "var(--navy)" }}>{c.title}</h4>
                    <p className="font-ibm text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACTS ══════════ */}
      <section id="contacts" className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--navy-deep)" }}>
        <div className="absolute inset-0 sea-texture opacity-20" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.04)" }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ border: "1px solid rgba(255,255,255,0.04)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="section-label mb-4">Связаться с нами</div>
              <h2 className="font-cormorant text-white font-semibold leading-tight mb-5"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}>
                Запросить<br />
                <span style={{ color: "var(--gold-light)" }}>агентские услуги</span>
              </h2>
              <div className="gold-line w-20 mb-8" />

              <div className="space-y-5 mb-10">
                {[
                  { icon: "Phone",  label: "Телефон", val: "+7 (000) 000-00-00" },
                  { icon: "Mail",   label: "E-mail",  val: "info@marinegroup.ru" },
                  { icon: "MapPin", label: "Офис",    val: "г. Новороссийск, ул. Набережная, 1" },
                  { icon: "Clock",  label: "Режим",   val: "Судозаходы принимаем 24 / 7" },
                ].map(c => (
                  <div key={c.icon} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ border: "1px solid rgba(212,160,23,0.25)" }}>
                      <Icon name={c.icon as "Phone"} size={17} style={{ color: "var(--gold)" }} />
                    </div>
                    <div>
                      <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>{c.label}</div>
                      <div className="font-ibm text-white font-medium">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <div className="font-ibm text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Порты присутствия
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Новороссийск", "Туапсе", "Сочи", "Темрюк", "Тамань", "Кавказ", "Геленджик"].map(p => (
                    <span key={p} className="font-ibm text-xs px-3 py-1 rounded-full"
                      style={{ border: "1px solid rgba(212,160,23,0.25)", color: "rgba(255,255,255,0.55)" }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--navy-light)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <h3 className="font-cormorant text-white font-semibold text-2xl mb-1">Заявка на услуги</h3>
                <p className="font-ibm text-sm mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
                  Заполните форму — ответим в течение 30 минут
                </p>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer style={{ backgroundColor: "var(--navy-deep)", borderTop: "1px solid rgba(255,255,255,0.07)" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded flex items-center justify-center"
                  style={{ border: "1px solid rgba(212,160,23,0.4)" }}>
                  <Icon name="Anchor" size={16} style={{ color: "var(--gold)" }} />
                </div>
                <span className="font-cormorant text-white font-semibold text-xl">MarineGroup</span>
              </div>
              <p className="font-ibm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                Профессиональное судовое агентство. Полный спектр услуг для флота на черноморском побережье.
              </p>
            </div>

            <div>
              <div className="font-ibm text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Услуги</div>
              <div className="space-y-2">
                {["Судовое агентирование", "Ремонт двигателей", "Ship Chandler", "Смена экипажа", "Бункеровка"].map(s => (
                  <div key={s} className="font-ibm text-sm cursor-pointer transition-colors"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-ibm text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Навигация</div>
              <div className="space-y-2">
                {NAV.map(l => (
                  <button key={l.href} onClick={() => scrollTo(l.href)}
                    className="block font-ibm text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.4)" }}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="font-ibm text-xs uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Контакты</div>
              <div className="space-y-3">
                <a href="tel:+70000000000" className="flex items-center gap-2 font-ibm text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.45)" }}>
                  <Icon name="Phone" size={13} style={{ color: "var(--gold)" }} />
                  +7 (000) 000-00-00
                </a>
                <a href="mailto:info@marinegroup.ru" className="flex items-center gap-2 font-ibm text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.45)" }}>
                  <Icon name="Mail" size={13} style={{ color: "var(--gold)" }} />
                  info@marinegroup.ru
                </a>
                <div className="flex items-start gap-2 font-ibm text-sm"
                  style={{ color: "rgba(255,255,255,0.4)" }}>
                  <Icon name="MapPin" size={13} style={{ color: "var(--gold)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Новороссийск,<br />ул. Набережная, 1</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <p className="font-ibm text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              © 2024 MarineGroup. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <span className="font-ibm text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                Судовые агенты · Черноморский бассейн
              </span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{ border: "1px solid rgba(212,160,23,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--gold)" }} />
                <span className="font-ibm text-xs" style={{ color: "var(--gold)" }}>На связи 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
