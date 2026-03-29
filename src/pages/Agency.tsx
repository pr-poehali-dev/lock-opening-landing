import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Reveal, ContactForm, IMG_SHIP } from "@/components/marine/Shared";

const WHAT_WE_DO = [
  { icon: "Anchor",        text: "Организация стоянки судна в порту (Большой порт Санкт‑Петербурга, порт Бронка, порт Усть‑Луга и др.)" },
  { icon: "Navigation",    text: "Согласование лоцманской проводки и буксировки" },
  { icon: "Building2",     text: "Взаимодействие с портовыми и таможенными органами" },
  { icon: "FileText",      text: "Оформление судовых и грузовых документов" },
  { icon: "Package",       text: "Организация снабжения судна (продовольствие, вода, топливо)" },
  { icon: "Wrench",        text: "Координация ремонтных и сервисных работ" },
  { icon: "Users",         text: "Поддержка экипажа (медицинская помощь, трансфер, визовая поддержка)" },
  { icon: "Radio",         text: "Информирование судовладельца о статусе операций в режиме реального времени" },
];

const SERVICES = [
  { icon: "Ship",          title: "Портовое агентирование",        desc: "Полное сопровождение в период стоянки" },
  { icon: "Globe",         title: "Международное агентирование",   desc: "Для иностранных судов под любым флагом" },
  { icon: "ClipboardList", title: "Агентирование под ключ",        desc: "Комплексное решение всех задач" },
  { icon: "Zap",           title: "Срочное агентирование",         desc: "При внеплановых заходах — оперативно" },
  { icon: "Clock",         title: "Круглосуточная поддержка 24/7", desc: "На связи в любое время суток" },
  { icon: "Shield",        title: "Представительство интересов",   desc: "В государственных и портовых органах" },
];

const VESSEL_TYPES = [
  { icon: "Container",  label: "Контейнеровозы" },
  { icon: "Ship",       label: "Сухогрузы" },
  { icon: "Droplets",   label: "Танкеры" },
  { icon: "Users",      label: "Пассажирские суда" },
  { icon: "Fish",       label: "Рыболовецкие суда" },
  { icon: "Sailboat",   label: "Яхты" },
];

const WHY_US = [
  { icon: "Flag",          text: "Опыт работы с судами под флагами разных стран" },
  { icon: "MapPin",        text: "Знание местных требований и регламентов портов Санкт‑Петербурга" },
  { icon: "Handshake",     text: "Налаженные связи с портовыми службами и контролирующими органами" },
  { icon: "BadgeCheck",    text: "Прозрачные тарифы и фиксированная стоимость услуг по договору" },
  { icon: "Zap",           text: "Оперативное решение нестандартных ситуаций" },
  { icon: "Languages",     text: "Многоязычная поддержка (английский, русский)" },
];

const FAQ = [
  { q: "Что входит в стоимость агентского обслуживания?", a: "Стоимость рассчитывается индивидуально и включает: портовые сборы, лоцманские и буксирные услуги, агентское вознаграждение. Предоставляем детальный дисбурсментский счёт до захода судна." },
  { q: "Как быстро вы можете организовать заход судна?", a: "При наличии предварительного уведомления — от 24 часов. В экстренных случаях работаем в ускоренном режиме. Свяжитесь с нами по телефону для оперативного решения." },
  { q: "Работаете ли вы с иностранными судовладельцами?", a: "Да, работаем с судовладельцами из любых стран. Ведём переписку на русском и английском языках. Опыт работы с судами под флагами множества государств." },
  { q: "Какие документы нужны для оформления судозахода?", a: "Свидетельство о праве плавания под флагом, судовые роли, санитарные документы, манифест груза. Полный список предоставим после получения заявки." },
];

export default function Agency() {
  useEffect(() => {
    document.title = "Судовое агентирование в СПб | Портовое сопровождение судов | IDALED";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", "Профессиональное судовое агентирование в Санкт‑Петербурге. Сопровождение судов в портах СПб, оформление документов, снабжение. Круглосуточная поддержка. Звоните!");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); kw.setAttribute("name", "keywords"); document.head.appendChild(kw); }
    kw.setAttribute("content", "судовое агентирование Санкт‑Петербург, услуги судового агентирования СПб, портовое агентирование СПб, судовое агентирование под ключ СПб, договор судового агентирования Санкт‑Петербург, международное судовое агентирование, сопровождение судов в портах Санкт‑Петербурга");
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
          <img src={IMG_SHIP} alt="Судовое агентирование в Санкт-Петербурге" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,20,38,0.7) 0%, rgba(6,20,38,0.95) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-20 w-full">
          <Reveal>
            <nav className="flex items-center gap-2 font-ibm text-xs mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <span>/</span>
              <span style={{ color: "var(--gold)" }}>Судовое агентирование</span>
            </nav>
            <div className="inline-block font-ibm text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ border: "1px solid rgba(212,160,23,0.5)", color: "var(--gold)" }}>
              Профессиональный судовой агент
            </div>
            <h1 className="font-cormorant text-white font-semibold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
              Судовое агентирование в Санкт‑Петербурге:<br />
              <span style={{ color: "var(--gold-light)" }}>профессиональное сопровождение судов от IDALED</span>
            </h1>
            <p className="font-ibm max-w-2xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem" }}>
              Компания IDALED предоставляет услуги судового агентирования в Санкт‑Петербурге и портах региона. Мы берём на себя полное сопровождение судов — от входа в акваторию до выхода, обеспечивая соблюдение всех требований и минимизируя простои.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="btn-gold px-8 py-3.5 rounded text-xs">
                Запросить агента
              </a>
              <a href="#services" className="btn-outline-white px-8 py-3.5 rounded text-xs">
                Наши услуги
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ЧТО ВХОДИТ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <div className="section-label mb-3">Состав услуги</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Что входит в наше судовое агентирование
              </h2>
              <div className="gold-line w-20 mb-0" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_WE_DO.map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 rounded-xl card-marine bg-white">
                  <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "var(--beige)" }}>
                    <Icon name={item.icon as "Anchor"} size={20} style={{ color: "var(--sea)" }} />
                  </div>
                  <p className="font-ibm text-sm leading-relaxed pt-2" style={{ color: "var(--text-muted)" }}>{item.text}</p>
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
                Полный спектр агентских услуг
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
                    <Icon name={s.icon as "Ship"} size={21} style={{ color: "var(--gold)" }}
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

      {/* ── ТИПЫ СУДОВ ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="section-label mb-3">Типы судов</div>
              <h2 className="font-cormorant font-semibold mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--navy)" }}>
                Обслуживаем все типы судов
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {VESSEL_TYPES.map((v, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3.5 rounded-full card-marine bg-white"
                  style={{ border: "1px solid rgba(11,31,58,0.12)" }}>
                  <Icon name={v.icon as "Ship"} size={18} style={{ color: "var(--sea)" }} />
                  <span className="font-ibm text-sm font-medium" style={{ color: "var(--navy)" }}>{v.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ПОЧЕМУ МЫ ── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
        <div className="absolute inset-0 sea-texture opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="section-label mb-3">Наши преимущества</div>
              <h2 className="font-cormorant text-white font-semibold mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Почему выбирают нас
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 p-5 rounded-xl"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ border: "1px solid rgba(212,160,23,0.35)" }}>
                    <Icon name={item.icon as "Flag"} size={18} style={{ color: "var(--gold)" }} />
                  </div>
                  <p className="font-ibm text-sm leading-relaxed pt-2" style={{ color: "rgba(255,255,255,0.65)" }}>{item.text}</p>
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
              Доверьте судовое агентирование в Санкт‑Петербурге профессионалам IDALED — мы обеспечим бесперебойную работу вашего судна в акватории региона!
            </p>
            <p className="font-ibm mb-8" style={{ color: "rgba(6,20,38,0.7)", fontSize: "1rem" }}>
              Оставьте заявку на сайте или позвоните нам — мы оперативно рассчитаем стоимость агентирования и подготовим индивидуальное предложение.
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
            <div className="section-label mb-4">Заявка на услуги</div>
            <h2 className="font-cormorant text-white font-semibold mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Запросить агентское<br />
              <span style={{ color: "var(--gold-light)" }}>обслуживание</span>
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
