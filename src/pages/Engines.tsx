import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Reveal, ContactForm, ENGINE_SERVICES, IMG_ENGINE } from "@/components/marine/Shared";

const BRANDS = ["MAN B&W", "Wärtsilä", "Caterpillar", "Cummins", "MTU", "Volvo Penta", "Yanmar", "Deutz"];

const PROCESS = [
  { num: "01", icon: "Search",      title: "Диагностика",       desc: "Проводим полную дефектацию двигателя: эндоскопия, анализ масла, компрессионные замеры, термография. Составляем подробный дефектный акт." },
  { num: "02", icon: "FileText",    title: "Коммерческое предложение", desc: "На основании дефектовки готовим детализированную смету с разбивкой по работам и запчастям. Согласовываем сроки и стоимость." },
  { num: "03", icon: "Wrench",      title: "Ремонтные работы",  desc: "Бригада выезжает на судно или принимает двигатель в мастерской. Используем профессиональный инструмент и сертифицированные запчасти." },
  { num: "04", icon: "Activity",    title: "Испытания и сдача", desc: "Финальная настройка под нагрузкой, ходовые испытания, оформление акта выполненных работ с гарантийными обязательствами." },
];

const STATS = [
  { value: "500+", label: "двигателей отремонтировано" },
  { value: "15+",  label: "лет в судоремонте" },
  { value: "6 ч",  label: "выезд бригады" },
  { value: "12 мес", label: "гарантия на работы" },
];

const FAQ = [
  { q: "Выезжаете ли на борт судна для ремонта?", a: "Да, выездная бригада работает во всех портах присутствия. Время выезда от 6 часов после согласования. Для срочных случаев — в течение 2-3 часов по Новороссийску." },
  { q: "Какова гарантия на выполненные работы?", a: "Предоставляем гарантию 12 месяцев на все виды ремонтных работ. На запасные части действует гарантия производителя. Оформляем гарантийный талон." },
  { q: "Работаете ли с двигателями в критическом состоянии?", a: "Берёмся за сложные случаи: гидроудар, задир гильз, поломка коленвала. Проводим предварительную диагностику и честно оцениваем перспективы ремонта." },
  { q: "Можно ли получить запчасти через вас?", a: "Да, поставляем оригинальные и качественные аналоговые запчасти. Работаем с ведущими дистрибьюторами. Срок поставки: 2-7 рабочих дней в зависимости от наличия." },
];

export default function Engines() {
  useEffect(() => {
    document.title = "Ремонт судовых двигателей в Новороссийске | MarineGroup";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Профессиональный ремонт судовых двигателей MAN, Wärtsilä, Caterpillar, Cummins. Диагностика, капитальный ремонт, ходовые испытания. Выезд на борт. Гарантия 12 месяцев.");
  }, []);

  return (
    <div className="font-ibm bg-white" style={{ color: "var(--navy)" }}>

      {/* ── MINI HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 shadow-lg" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://thb.tildacdn.com/tild3333-3532-4765-b339-346564343465/-/resize/504x/logo_color.png"
              alt="MarineGroup"
              className="h-9 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <Link to="/" className="flex items-center gap-2 font-ibm text-sm transition-colors"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            <Icon name="ArrowLeft" size={15} />
            На главную
          </Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={IMG_ENGINE} alt="Ремонт судовых двигателей" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,20,38,0.65) 0%, rgba(6,20,38,0.97) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-20 w-full">
          <Reveal>
            <nav className="flex items-center gap-2 font-ibm text-xs mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <span>/</span>
              <span style={{ color: "var(--gold)" }}>Ремонт двигателей</span>
            </nav>
            <div className="inline-block font-ibm text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ border: "1px solid rgba(212,160,23,0.5)", color: "var(--gold)" }}>
              Сертифицированные механики
            </div>
            <h1 className="font-cormorant text-white font-semibold leading-tight mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Ремонт судовых<br />
              <span style={{ color: "var(--gold-light)" }}>двигателей</span>
            </h1>
            <p className="font-ibm max-w-2xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>
              Диагностика и ремонт главных и вспомогательных двигателей любой мощности. Выездная бригада, современное оборудование, гарантия на все виды работ.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {BRANDS.map(b => (
                <span key={b} className="font-ibm text-xs px-3 py-1.5 rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
                  {b}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="btn-gold px-8 py-3.5 rounded text-xs">
                Вызвать механика
              </a>
              <a href="#services" className="btn-outline-white px-8 py-3.5 rounded text-xs">
                Виды работ
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "var(--navy-light)" }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="text-center">
                  <div className="font-cormorant font-bold mb-1" style={{ fontSize: "2.8rem", color: "var(--gold-light)" }}>{s.value}</div>
                  <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="mb-14">
              <div className="section-label mb-3">Виды работ</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Что мы ремонтируем
              </h2>
              <div className="gold-line w-20 mb-5" />
              <p className="font-ibm max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Полный цикл судоремонтных работ от экспресс-диагностики до капитального ремонта. Специализируемся на двигателях ведущих мировых производителей.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ENGINE_SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-marine rounded-xl p-6 h-full" style={{ backgroundColor: "var(--beige)" }}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={s.icon as "Settings"} size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-ibm font-semibold mb-2" style={{ color: "var(--navy)" }}>{s.label}</h3>
                  <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
        <div className="absolute inset-0 sea-texture opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="section-label mb-3">Как мы работаем</div>
              <h2 className="font-cormorant text-white font-semibold mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Этапы ремонта
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="glass-card rounded-2xl p-6 relative">
                  <div className="font-cormorant font-bold text-6xl absolute -top-2 -right-1 select-none"
                    style={{ color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>
                    {step.num}
                  </div>
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.35)" }}>
                      <Icon name={step.icon as "Search"} size={20} style={{ color: "var(--gold)" }} />
                    </div>
                    <div className="font-ibm text-xs uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>Шаг {step.num}</div>
                    <h3 className="font-ibm font-semibold text-white mb-2">{step.title}</h3>
                    <p className="font-ibm text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Вопросы и ответы</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Часто задаваемые вопросы
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 card-marine">
                  <div className="flex items-start gap-4">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: "var(--gold)", color: "var(--navy-deep)" }}>
                      <span className="font-ibm font-bold text-xs">?</span>
                    </div>
                    <div>
                      <h3 className="font-ibm font-semibold mb-2" style={{ color: "var(--navy)" }}>{item.q}</h3>
                      <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="form" className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--navy-deep)" }}>
        <div className="absolute inset-0 sea-texture opacity-20" />
        <div className="relative z-10 max-w-2xl mx-auto px-4 lg:px-8 text-center">
          <Reveal>
            <div className="section-label mb-4">Заявка на ремонт</div>
            <h2 className="font-cormorant text-white font-semibold mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Вызвать механика<br />
              <span style={{ color: "var(--gold-light)" }}>на борт судна</span>
            </h2>
            <div className="gold-line w-16 mx-auto mb-8" />
            <div className="rounded-2xl p-8 text-left"
              style={{ backgroundColor: "var(--navy-light)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER MINI ── */}
      <footer className="py-8" style={{ backgroundColor: "var(--navy-deep)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-ibm text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2024 MarineGroup. Все права защищены.</p>
          <Link to="/" className="font-ibm text-xs transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
            ← Вернуться на главную
          </Link>
        </div>
      </footer>
    </div>
  );
}
