import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IMG_DOOR = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/19a31374-c00b-4c52-a504-a4da2db55d76.jpg";
const IMG_CAR = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/aa9b77d7-6a1a-40dd-8c14-30b7e373ca0d.jpg";
const IMG_SAFE = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/58695f35-35aa-474b-a492-2a14d03c38e6.jpg";

const NAV_LINKS = [
  { label: "Цены", href: "#prices" },
  { label: "Услуги", href: "#services" },
  { label: "Гарантии", href: "#guarantees" },
  { label: "Документы", href: "#documents" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

const SLIDES = [
  {
    title: "Вскрытие замков",
    subtitle: "в Сочи — за 15 минут",
    desc: "Выезд мастера круглосуточно. Без повреждений двери.",
    bg: "from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]",
  },
  {
    title: "Застряли без ключей?",
    subtitle: "Звоните прямо сейчас",
    desc: "Работаем 24/7, без выходных. Более 1500 успешных вскрытий.",
    bg: "from-[#1A1A1A] via-[#2A2A2A] to-[#3D3D3D]",
  },
  {
    title: "Профессиональный",
    subtitle: "сертифицированный мастер",
    desc: "Все работы проводятся законно. Предъявляем удостоверение.",
    bg: "from-[#2A1A0A] via-[#3D2A10] to-[#2A2A2A]",
  },
];

const PRICES = [
  { service: "Вскрытие межкомнатной двери", price: "от 1 500 ₽", time: "10–20 мин" },
  { service: "Вскрытие входной двери", price: "от 2 000 ₽", time: "15–30 мин" },
  { service: "Вскрытие автомобиля", price: "от 1 500 ₽", time: "10–20 мин" },
  { service: "Вскрытие сейфа", price: "от 3 000 ₽", time: "20–60 мин" },
  { service: "Замена замка", price: "от 1 200 ₽", time: "20–40 мин" },
  { service: "Вскрытие гаражного замка", price: "от 2 500 ₽", time: "20–40 мин" },
];

const SERVICES = [
  {
    title: "Вскрытие замков двери",
    desc: "Откроем любую входную или межкомнатную дверь: деревянную, металлическую, противовзломную. Без повреждений покрытия и механизма.",
    img: IMG_DOOR,
    icon: "DoorOpen",
  },
  {
    title: "Вскрытие авто",
    desc: "Забыли ключи в машине? Вскроем легковой автомобиль, внедорожник или микроавтобус без царапин. Работаем со всеми марками.",
    img: IMG_CAR,
    icon: "Car",
  },
  {
    title: "Вскрытие сейфов",
    desc: "Вскрываем сейфы всех типов: офисные, квартирные, встроенные. Работаем с комбинированными, ключевыми и электронными замками.",
    img: IMG_SAFE,
    icon: "Lock",
  },
];

const GUARANTEES = [
  { icon: "ShieldCheck", title: "Официальная деятельность", desc: "Работаем официально, имеем все необходимые лицензии и сертификаты" },
  { icon: "Clock", title: "Выезд за 15 минут", desc: "Гарантируем прибытие мастера в течение 15 минут по всему Сочи" },
  { icon: "Wrench", title: "Без повреждений", desc: "Профессиональный инструмент позволяет вскрыть замок без следов вскрытия" },
  { icon: "BadgeCheck", title: "Гарантия на работы", desc: "Предоставляем гарантийный талон на все выполненные работы" },
];

const DOCUMENTS = [
  { icon: "IdCard", title: "Паспорт", desc: "Документ, удостоверяющий личность владельца" },
  { icon: "FileText", title: "Свидетельство о собственности", desc: "Или выписка из ЕГРН на квартиру / дом" },
  { icon: "Car", title: "ПТС или СТС", desc: "Для вскрытия автомобиля — паспорт транспортного средства" },
  { icon: "KeyRound", title: "Договор аренды", desc: "Для арендаторов — договор аренды жилого помещения" },
  { icon: "Building2", title: "Доверенность", desc: "При вскрытии по поручению другого лица — нотариальная доверенность" },
  { icon: "ScrollText", title: "Заявление в полицию", desc: "В спорных случаях — заявление об утере ключей (необязательно)" },
];

const REVIEWS = [
  { name: "Андрей К.", rating: 5, text: "Приехали за 12 минут! Вскрыли входную дверь, не оставив ни царапины. Профессионалы своего дела. Очень доволен." },
  { name: "Марина С.", rating: 5, text: "Заперла ключи в машине на парковке у «Мегаполиса». Приехали быстро, вскрыли чисто. Цена оказалась ниже, чем ожидала." },
  { name: "Олег В.", rating: 5, text: "Вскрывали сейф в офисе — забыли код. Мастер работал аккуратно, документы не пострадали. Рекомендую!" },
  { name: "Светлана Р.", rating: 4, text: "Оперативно откликнулись ночью. Мастер приехал с документами, всё объяснил. Дверь открыта, замок цел. Спасибо!" },
  { name: "Дмитрий П.", rating: 5, text: "Уже второй раз пользуемся услугами. Стабильно высокий уровень: быстро, аккуратно, по-человечески." },
  { name: "Екатерина Л.", rating: 5, text: "Захлопнулась дверь с ребёнком внутри. Приехали через 10 минут, справились за 5. Цены адекватные, люди отличные!" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} style={{ color: s <= rating ? "var(--brand-orange)" : "#D4D4D4" }}>★</span>
      ))}
    </div>
  );
}

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function AnimSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollAnimation();
  return (
    <div ref={ref} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="font-golos bg-white text-[var(--brand-graphite)]">

      {/* ── HEADER ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--brand-graphite)] shadow-xl" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo("#hero")}>
              <div className="w-10 h-10 rounded bg-[var(--brand-orange)] flex items-center justify-center">
                <Icon name="KeyRound" size={22} className="text-white" />
              </div>
              <div>
                <div className="font-oswald font-bold text-white text-lg leading-none tracking-wide uppercase">МастерЗамок</div>
                <div className="text-[var(--brand-orange)] text-xs font-golos uppercase tracking-widest">Сочи • 24/7</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  className="font-oswald text-sm uppercase tracking-wider text-gray-300 hover:text-[var(--brand-orange)] transition-colors">
                  {l.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+79001234567" className="flex items-center gap-2 text-white font-oswald font-semibold tracking-wide hover:text-[var(--brand-orange)] transition-colors">
                <Icon name="Phone" size={16} className="text-[var(--brand-orange)]" />
                +7 (900) 123-45-67
              </a>
              <a href="tel:+79001234567" className="btn-orange px-5 py-2.5 rounded text-sm">
                Вызвать мастера
              </a>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white p-2">
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[var(--brand-graphite)] border-t border-[var(--brand-graphite-light)]">
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  className="block w-full text-left font-oswald text-sm uppercase tracking-wider text-gray-300 hover:text-[var(--brand-orange)] py-2 transition-colors">
                  {l.label}
                </button>
              ))}
              <a href="tel:+79001234567" className="btn-orange block text-center px-5 py-3 rounded mt-4 text-sm">
                Вызвать мастера
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO SLIDER ── */}
      <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={i}
            className={`absolute inset-0 bg-gradient-to-br ${s.bg} transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}>
            <div className="absolute inset-0 opacity-5"
              style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.05) 40px, rgba(255,255,255,0.05) 41px)" }} />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 border border-[var(--brand-orange)] rounded px-3 py-1.5 mb-6" style={{ backgroundColor: "rgba(232,98,10,0.15)" }}>
                <span className="w-2 h-2 rounded-full bg-[var(--brand-orange)] animate-pulse" />
                <span className="font-oswald text-[var(--brand-orange)] text-xs uppercase tracking-widest">Работаем круглосуточно</span>
              </div>

              <h1 key={`h-${slide}`} className="font-oswald font-bold text-white leading-none mb-2"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", animation: "fade-in 0.6s ease-out forwards" }}>
                {SLIDES[slide].title}
              </h1>
              <h2 key={`s-${slide}`} className="font-oswald font-semibold leading-tight mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "var(--brand-orange)", animation: "fade-in 0.8s ease-out forwards" }}>
                {SLIDES[slide].subtitle}
              </h2>
              <p className="text-gray-300 text-lg mb-10 font-golos">{SLIDES[slide].desc}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+79001234567" className="btn-orange px-8 py-4 rounded text-base inline-flex items-center gap-2 justify-center">
                  <Icon name="Phone" size={18} />
                  Позвонить сейчас
                </a>
                <button onClick={() => scrollTo("#contact")}
                  className="px-8 py-4 rounded text-base border-2 border-white text-white font-oswald font-semibold uppercase tracking-wide hover:bg-white hover:text-[var(--brand-graphite)] transition-all">
                  Оставить заявку
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === slide ? "w-8 bg-[var(--brand-orange)]" : "w-4 bg-white/30"}`} />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-[var(--brand-orange)] z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 divide-x divide-[#C44E00] py-4">
              {[
                { num: "15 мин", label: "Время выезда" },
                { num: "1500+", label: "Успешных вскрытий" },
                { num: "24/7", label: "Без выходных" },
              ].map((s) => (
                <div key={s.num} className="text-center px-4">
                  <div className="font-oswald font-bold text-white text-xl lg:text-2xl">{s.num}</div>
                  <div className="text-white/80 text-xs font-golos">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICES ── */}
      <section id="prices" className="py-20 bg-[var(--brand-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="stripe-divider w-24 mx-auto mb-6" />
              <h2 className="section-title text-4xl lg:text-5xl text-[var(--brand-graphite)] mb-3">Цены на услуги</h2>
              <p className="text-[var(--brand-gray)] font-golos">Фиксированные цены — никаких скрытых доплат</p>
            </div>
          </AnimSection>
          <AnimSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRICES.map((p, i) => (
                <div key={i} className="card-hover bg-white rounded-lg p-6 border border-[var(--brand-beige-dark)] flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(232,98,10,0.1)" }}>
                    <Icon name="KeyRound" size={20} className="text-[var(--brand-orange)]" />
                  </div>
                  <div className="flex-1">
                    <div className="font-golos font-semibold text-[var(--brand-graphite)] mb-2">{p.service}</div>
                    <div className="flex items-center justify-between">
                      <span className="font-oswald font-bold text-[var(--brand-orange)] text-lg">{p.price}</span>
                      <span className="text-xs text-[var(--brand-gray)] flex items-center gap-1">
                        <Icon name="Clock" size={12} />{p.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimSection>
          <AnimSection className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-[var(--brand-graphite)] text-white rounded-lg px-8 py-4">
              <Icon name="PhoneCall" size={20} className="text-[var(--brand-orange)]" />
              <span className="font-golos">Точная стоимость — по телефону&nbsp;</span>
              <a href="tel:+79001234567" className="font-oswald font-bold text-[var(--brand-orange)] text-lg hover:underline">
                +7 (900) 123-45-67
              </a>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="stripe-divider w-24 mx-auto mb-6" />
              <h2 className="section-title text-4xl lg:text-5xl text-[var(--brand-graphite)] mb-3">Наши услуги</h2>
              <p className="text-[var(--brand-gray)] font-golos">Профессиональное вскрытие любой сложности</p>
            </div>
          </AnimSection>
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <AnimSection key={i}>
                <div className="card-hover rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="relative h-56 overflow-hidden">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-8 h-8 bg-[var(--brand-orange)] rounded flex items-center justify-center">
                        <Icon name={s.icon as "Lock"} size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-oswald font-bold text-[var(--brand-graphite)] text-xl uppercase tracking-wide mb-3">{s.title}</h3>
                    <p className="text-[var(--brand-gray)] font-golos text-sm leading-relaxed mb-5">{s.desc}</p>
                    <button onClick={() => scrollTo("#contact")} className="btn-orange w-full py-3 rounded text-sm">
                      Заказать
                    </button>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section id="guarantees" className="py-20 bg-[var(--brand-graphite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimSection>
              <div className="stripe-divider w-24 mb-6" />
              <h2 className="section-title text-4xl lg:text-5xl text-white mb-6">Наши гарантии</h2>
              <p className="text-gray-400 font-golos text-lg mb-10">
                Более 7 лет работаем в Сочи. Все мастера сертифицированы и знают, как открыть любой замок без вреда для имущества.
              </p>
              <div className="space-y-4">
                {GUARANTEES.map((g, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-[var(--brand-graphite-light)]">
                    <div className="w-11 h-11 shrink-0 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(232,98,10,0.15)" }}>
                      <Icon name={g.icon as "ShieldCheck"} size={22} className="text-[var(--brand-orange)]" />
                    </div>
                    <div>
                      <div className="font-oswald font-semibold text-white uppercase tracking-wide">{g.title}</div>
                      <div className="text-gray-400 text-sm font-golos mt-0.5">{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimSection>
            <AnimSection>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[var(--brand-orange)] rounded-2xl opacity-30" />
                <img src={IMG_DOOR} alt="Мастер за работой" className="w-full h-96 object-cover rounded-2xl relative z-10" />
                <div className="absolute -bottom-6 -right-6 bg-[var(--brand-orange)] text-white rounded-xl p-5 z-20 shadow-2xl">
                  <div className="font-oswald font-bold text-3xl">7+ лет</div>
                  <div className="font-golos text-sm text-orange-100">опыта в Сочи</div>
                </div>
              </div>
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTS ── */}
      <section id="documents" className="py-20 bg-[var(--brand-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="stripe-divider w-24 mx-auto mb-6" />
              <h2 className="section-title text-4xl lg:text-5xl text-[var(--brand-graphite)] mb-3">Необходимые документы</h2>
              <p className="text-[var(--brand-gray)] font-golos max-w-xl mx-auto">
                Для законного проведения работ мастер обязан убедиться в вашем праве на вскрытие. Подготовьте один из документов:
              </p>
            </div>
          </AnimSection>
          <AnimSection>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {DOCUMENTS.map((d, i) => (
                <div key={i} className="card-hover bg-white rounded-xl p-6 border border-[var(--brand-beige-dark)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--brand-graphite)] flex items-center justify-center">
                      <Icon name={d.icon as "IdCard"} size={22} className="text-[var(--brand-orange)]" />
                    </div>
                    <h3 className="font-oswald font-semibold text-[var(--brand-graphite)] uppercase tracking-wide">{d.title}</h3>
                  </div>
                  <p className="text-[var(--brand-gray)] font-golos text-sm leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </AnimSection>
          <AnimSection className="mt-10">
            <div className="rounded-xl p-6 flex gap-4 items-start border" style={{ backgroundColor: "rgba(232,98,10,0.08)", borderColor: "rgba(232,98,10,0.25)" }}>
              <Icon name="Info" size={22} className="text-[var(--brand-orange)] shrink-0 mt-0.5" />
              <p className="text-[var(--brand-graphite)] font-golos text-sm">
                <strong>Важно:</strong> Вскрытие без документов не производится — это защищает вас от действий третьих лиц.
                В экстренных ситуациях (ребёнок заперт внутри, утечка газа) мастер выезжает немедленно, документы — по факту прибытия.
              </p>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimSection>
            <div className="text-center mb-14">
              <div className="stripe-divider w-24 mx-auto mb-6" />
              <h2 className="section-title text-4xl lg:text-5xl text-[var(--brand-graphite)] mb-3">Отзывы клиентов</h2>
              <div className="flex items-center justify-center gap-3 mt-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "var(--brand-orange)", fontSize: "1.4rem" }}>★</span>)}
                </div>
                <span className="font-oswald font-bold text-[var(--brand-graphite)] text-2xl">4.9</span>
                <span className="text-[var(--brand-gray)] font-golos text-sm">/ 5 • более 200 отзывов</span>
              </div>
            </div>
          </AnimSection>
          <AnimSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((r, i) => (
                <div key={i} className="card-hover bg-[var(--brand-beige)] rounded-xl p-6 border border-[var(--brand-beige-dark)]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--brand-graphite)] flex items-center justify-center font-oswald font-bold text-white text-sm">
                        {r.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-golos font-semibold text-[var(--brand-graphite)] text-sm">{r.name}</div>
                        <StarRating rating={r.rating} />
                      </div>
                    </div>
                    <Icon name="Quote" size={20} className="text-[var(--brand-orange)] opacity-40" />
                  </div>
                  <p className="text-[var(--brand-gray)] font-golos text-sm leading-relaxed">"{r.text}"</p>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-[var(--brand-graphite)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <AnimSection>
              <div className="stripe-divider w-24 mb-6" />
              <h2 className="section-title text-4xl lg:text-5xl text-white mb-4">Оставьте заявку</h2>
              <p className="text-gray-400 font-golos text-lg mb-10">
                Перезвоним в течение 2 минут и согласуем время выезда мастера.
              </p>
              <div className="space-y-5">
                {[
                  { icon: "Phone", text: "+7 (900) 123-45-67", sub: "Звонок бесплатный" },
                  { icon: "Clock", text: "Работаем 24/7", sub: "Без выходных и праздников" },
                  { icon: "MapPin", text: "Весь Сочи и Адлер", sub: "Выезд по всему городу" },
                ].map((item) => (
                  <div key={item.icon} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(232,98,10,0.15)" }}>
                      <Icon name={item.icon as "Phone"} size={20} className="text-[var(--brand-orange)]" />
                    </div>
                    <div>
                      <div className="text-white font-golos font-semibold">{item.text}</div>
                      <div className="text-gray-400 text-sm font-golos">{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimSection>

            <AnimSection>
              {submitted ? (
                <div className="bg-[var(--brand-graphite-light)] rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(34,197,94,0.15)" }}>
                    <Icon name="CheckCircle" size={32} className="text-green-400" />
                  </div>
                  <h3 className="font-oswald font-bold text-white text-2xl uppercase mb-2">Заявка принята!</h3>
                  <p className="text-gray-400 font-golos">Перезвоним вам в течение 2 минут.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[var(--brand-graphite-light)] rounded-2xl p-8 space-y-4">
                  <div>
                    <label className="block text-gray-300 font-golos text-sm mb-1.5">Ваше имя</label>
                    <input type="text" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Петров"
                      className="w-full bg-[var(--brand-graphite)] border border-[#444] text-white placeholder-gray-500 rounded-lg px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-golos text-sm mb-1.5">Телефон</label>
                    <input type="tel" required value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-[var(--brand-graphite)] border border-[#444] text-white placeholder-gray-500 rounded-lg px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-golos text-sm mb-1.5">Опишите ситуацию</label>
                    <textarea rows={4} value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Захлопнулась дверь, сломался замок..."
                      className="w-full bg-[var(--brand-graphite)] border border-[#444] text-white placeholder-gray-500 rounded-lg px-4 py-3 font-golos text-sm focus:outline-none focus:border-[var(--brand-orange)] transition-colors resize-none" />
                  </div>
                  <button type="submit" className="btn-orange w-full py-4 rounded-lg text-base flex items-center justify-center gap-2">
                    <Icon name="Send" size={18} />
                    Отправить заявку
                  </button>
                  <p className="text-gray-500 text-xs font-golos text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </AnimSection>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#141414] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded bg-[var(--brand-orange)] flex items-center justify-center">
                  <Icon name="KeyRound" size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-oswald font-bold text-white uppercase tracking-wide">МастерЗамок</div>
                  <div className="text-[var(--brand-orange)] text-xs uppercase tracking-widest">Сочи • 24/7</div>
                </div>
              </div>
              <p className="text-gray-500 font-golos text-sm leading-relaxed">
                Профессиональное вскрытие замков в Сочи. Выезд за 15 минут, работаем без выходных.
              </p>
            </div>

            <div>
              <h4 className="font-oswald font-semibold text-white uppercase tracking-wider mb-4">Навигация</h4>
              <div className="grid grid-cols-2 gap-2">
                {NAV_LINKS.map((l) => (
                  <button key={l.href} onClick={() => scrollTo(l.href)}
                    className="text-left text-gray-500 hover:text-[var(--brand-orange)] font-golos text-sm transition-colors">
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-oswald font-semibold text-white uppercase tracking-wider mb-4">Контакты</h4>
              <div className="space-y-3">
                <a href="tel:+79001234567" className="flex items-center gap-2 text-gray-400 hover:text-[var(--brand-orange)] font-golos text-sm transition-colors">
                  <Icon name="Phone" size={14} className="text-[var(--brand-orange)]" />
                  +7 (900) 123-45-67
                </a>
                <div className="flex items-center gap-2 text-gray-400 font-golos text-sm">
                  <Icon name="MapPin" size={14} className="text-[var(--brand-orange)]" />
                  Сочи и Адлер
                </div>
                <div className="flex items-center gap-2 text-gray-400 font-golos text-sm">
                  <Icon name="Clock" size={14} className="text-[var(--brand-orange)]" />
                  Круглосуточно, 24/7
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#2A2A2A] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-600 font-golos text-xs">
              © 2024 МастерЗамок Сочи. Все права защищены.
            </p>
            <p className="text-gray-600 font-golos text-xs">
              Вскрытие замков профессионально и законно
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
