import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Reveal, ContactForm, IMG_ENGINE } from "@/components/marine/Shared";

const WHAT_WE_REPAIR = [
  { icon: "Cog",        text: "Главные и вспомогательные судовые двигатели" },
  { icon: "Fuel",       text: "Дизельные двигатели (в т. ч. MAN, Wärtsilä, Caterpillar)" },
  { icon: "Wind",       text: "Турбокомпрессоры" },
  { icon: "Droplets",   text: "Топливная аппаратура" },
];

const BRANDS = ["MAN B&W", "Wärtsilä", "Caterpillar", "Cummins", "MTU", "Volvo Penta"];

const SERVICES = [
  { icon: "Search",      title: "Диагностика",              desc: "С использованием современного оборудования — эндоскопия, компрессия, термография" },
  { icon: "Wrench",      title: "Текущий и капитальный ремонт", desc: "Любой сложности — от планового ТО до полного восстановления" },
  { icon: "SlidersHorizontal", title: "Регулировка и настройка", desc: "Точная настройка параметров работы двигателя под нагрузкой" },
  { icon: "ClipboardList", title: "Дефектовка",             desc: "Детальный осмотр узлов и агрегатов с составлением дефектного акта" },
  { icon: "Package",     title: "Запчасти",                 desc: "Замена и поставка оригинальных запчастей для судовых двигателей" },
  { icon: "ShieldCheck", title: "Гарантийное обслуживание", desc: "Гарантия на все виды работ после ремонта" },
];

const PROCESS = [
  { num: "01", icon: "Search",    title: "Диагностика",              desc: "Проводим полную дефектацию двигателя: эндоскопия, анализ масла, компрессионные замеры. Составляем подробный дефектный акт." },
  { num: "02", icon: "FileText",  title: "Коммерческое предложение", desc: "На основании дефектовки готовим детализированную смету с разбивкой по работам и запчастям. Согласовываем сроки и стоимость." },
  { num: "03", icon: "Wrench",    title: "Ремонтные работы",         desc: "Бригада выезжает на судно или принимает двигатель в мастерской. Оригинальные запчасти и сертифицированные специалисты." },
  { num: "04", icon: "Activity",  title: "Испытания и сдача",        desc: "Финальная настройка под нагрузкой, ходовые испытания, оформление акта с гарантийными обязательствами." },
];

const STATS = [
  { value: "500+",   label: "двигателей отремонтировано" },
  { value: "15+",    label: "лет в судоремонте" },
  { value: "6 ч",    label: "выезд бригады" },
  { value: "12 мес", label: "гарантия на работы" },
];

const WHY_US = [
  { icon: "Star",        text: "Опыт работы с ведущими марками двигателей" },
  { icon: "BadgeCheck",  text: "Сертифицированные специалисты с морскими допусками" },
  { icon: "Package",     text: "Использование оригинальных запчастей и материалов" },
  { icon: "Receipt",     text: "Прозрачные сроки и стоимость — предоставляем расчёт после диагностики" },
  { icon: "Clock",       text: "Круглосуточная поддержка и оперативное реагирование на заявки" },
];

const FAQ = [
  { q: "Выезжаете ли на борт судна для ремонта?", a: "Да, выездная бригада работает во всех портах присутствия — Большой порт СПб, порт Бронка и другие. Время выезда от 6 часов после согласования, в срочных случаях быстрее." },
  { q: "Какова гарантия на выполненные работы?", a: "Предоставляем гарантию 12 месяцев на все виды ремонтных работ. На запасные части действует гарантия производителя. Оформляем гарантийный талон." },
  { q: "Работаете ли с двигателями в критическом состоянии?", a: "Берёмся за сложные случаи: гидроудар, задир гильз, поломка коленвала. Проводим предварительную диагностику и честно оцениваем перспективы ремонта." },
  { q: "Можно ли получить запчасти через вас?", a: "Да, поставляем оригинальные и качественные аналоговые запчасти. Работаем с ведущими дистрибьюторами. Срок поставки: 2-7 рабочих дней в зависимости от наличия." },
];

export default function Engines() {
  useEffect(() => {
    document.title = "Ремонт судовых двигателей в СПб | Обслуживание и диагностика | IDALED";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", "Профессиональный ремонт судовых двигателей в Санкт‑Петербурге. Диагностика, текущий и капитальный ремонт. Выездная бригада. Гарантия. Звоните!");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); kw.setAttribute("name", "keywords"); document.head.appendChild(kw); }
    kw.setAttribute("content", "ремонт судовых двигателей СПб, обслуживание судовых двигателей Санкт‑Петербург, диагностика судовых двигателей, капитальный ремонт судовых двигателей, запчасти для судовых двигателей, срочный ремонт судовых двигателей, ремонт двигателей MAN Wärtsilä Caterpillar");
  }, []);

  return (
    <div className="font-ibm bg-white" style={{ color: "var(--navy)" }}>

      {/* ── MINI HEADER ── */}
      <header className="fixed top-0 inset-x-0 z-50 shadow-lg" style={{ backgroundColor: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://thb.tildacdn.com/tild3333-3532-4765-b339-346564343465/-/resize/504x/logo_color.png"
              alt="IDALED"
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
          <img src={IMG_ENGINE} alt="Ремонт судовых двигателей в Санкт-Петербурге" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,20,38,0.65) 0%, rgba(6,20,38,0.97) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-20 w-full">
          <Reveal>
            <nav className="flex items-center gap-2 font-ibm text-xs mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <span>/</span>
              <span style={{ color: "var(--gold)" }}>Ремонт судовых двигателей</span>
            </nav>
            <div className="inline-block font-ibm text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ border: "1px solid rgba(212,160,23,0.5)", color: "var(--gold)" }}>
              Сертифицированные механики
            </div>
            <h1 className="font-cormorant text-white font-semibold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
              Ремонт судовых двигателей в Санкт‑Петербурге:<br />
              <span style={{ color: "var(--gold-light)" }}>профессионально и оперативно</span>
            </h1>
            <p className="font-ibm max-w-2xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem" }}>
              Компания IDALED предлагает полный комплекс услуг по ремонту судовых двигателей в Санкт‑Петербурге. Мы обслуживаем суда любого типа — от маломерных яхт до крупных контейнеровозов — и гарантируем высокое качество работ в кратчайшие сроки.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
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

      {/* ── ЧТО РЕМОНТИРУЕМ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <div className="section-label mb-3">Объекты ремонта</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Что мы ремонтируем
              </h2>
              <div className="gold-line w-20 mb-0" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_WE_REPAIR.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 p-5 rounded-xl card-marine bg-white">
                  <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={item.icon as "Cog"} size={21} style={{ color: "var(--gold)" }} />
                  </div>
                  <p className="font-ibm text-sm leading-relaxed pt-3" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Наши услуги</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Полный цикл обслуживания двигателей
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-6 card-marine group h-full"
                  style={{ borderLeft: "3px solid var(--gold)" }}>
                  <div className="w-11 h-11 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0B1F3A]"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={s.icon as "Search"} size={21} style={{ color: "var(--gold)" }}
                      className="transition-colors duration-300" />
                  </div>
                  <h3 className="font-ibm font-semibold mb-2" style={{ color: "var(--navy)" }}>{s.title}</h3>
                  <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── СРОЧНЫЙ ВЫЕЗД ── */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ backgroundColor: "var(--navy)", border: "1px solid rgba(212,160,23,0.2)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.4)" }}>
                <Icon name="Zap" size={28} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <h3 className="font-cormorant text-white font-semibold text-2xl mb-2">Срочный выезд на борт</h3>
                <p className="font-ibm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Выполняем срочный ремонт судовых двигателей в акватории Санкт‑Петербурга — в том числе с выездом бригады на борт. Работаем с судами, стоящими в Большом порту Санкт‑Петербурга, порту Бронка и других портах региона.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ПРОЦЕСС ── */}
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
                <div className="relative p-6 rounded-2xl h-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="font-cormorant font-bold mb-4" style={{ fontSize: "3rem", color: "rgba(212,160,23,0.25)", lineHeight: 1 }}>
                    {step.num}
                  </div>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ border: "1px solid rgba(212,160,23,0.35)" }}>
                    <Icon name={step.icon as "Search"} size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-ibm font-semibold text-white mb-2">{step.title}</h3>
                  <p className="font-ibm text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ── */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Наши преимущества</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Почему выбирают нас
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {WHY_US.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white card-marine">
                  <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={item.icon as "Star"} size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <p className="font-ibm text-sm leading-relaxed pt-2" style={{ color: "var(--text-muted)" }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ backgroundColor: "var(--gold)" }}>
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <Reveal>
            <p className="font-cormorant font-semibold leading-snug mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--navy-deep)" }}>
              Доверьте обслуживание судовых двигателей профессионалам IDALED — мы обеспечим надёжную работу вашего судна на долгие годы!
            </p>
            <p className="font-ibm mb-8" style={{ color: "rgba(6,20,38,0.7)", fontSize: "1rem" }}>
              Оставьте заявку на сайте или позвоните нам — мы оперативно рассчитаем стоимость ремонта и согласуем удобное время выезда.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#form" className="btn-navy px-8 py-3.5 rounded text-xs">
                Оставить заявку
              </a>
              <a href="tel:+79633027803" className="flex items-center gap-2 px-8 py-3.5 rounded text-xs font-ibm uppercase tracking-widest font-semibold transition-colors"
                style={{ backgroundColor: "rgba(6,20,38,0.12)", color: "var(--navy-deep)" }}>
                <Icon name="Phone" size={14} />
                +7 (963) 302-78-03
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
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
                <div className="rounded-2xl p-6 card-marine" style={{ backgroundColor: "var(--beige)" }}>
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
          <p className="font-ibm text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2026 IDALED. Все права защищены.</p>
          <Link to="/" className="font-ibm text-xs transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
            ← Вернуться на главную
          </Link>
        </div>
      </footer>
    </div>
  );
}
