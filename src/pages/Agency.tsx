import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Reveal, ContactForm, AGENCY_SERVICES, IMG_SHIP } from "@/components/marine/Shared";

const BENEFITS = [
  { icon: "Clock",       title: "Оперативность",      desc: "Реагируем на запрос в течение 30 минут. Агент на связи 24/7 включая выходные и праздники." },
  { icon: "ShieldCheck", title: "Полная ответственность", desc: "Несём юридическую ответственность за результат. Страхование профессиональной ответственности." },
  { icon: "Globe",       title: "Единое окно",         desc: "Одна точка контакта для всех портовых формальностей. Без лишней беготни и переговоров." },
  { icon: "Star",        title: "15 лет опыта",        desc: "Более 300 судозаходов в год. Знаем все нюансы черноморских портов и требования властей." },
];

const PORTS = ["Новороссийск", "Туапсе", "Сочи", "Темрюк", "Тамань", "Кавказ", "Геленджик", "Анапа"];

const FAQ = [
  { q: "Что входит в стоимость агентского обслуживания?", a: "Стоимость рассчитывается индивидуально и включает: портовые сборы, лоцманские и буксирные услуги, агентское вознаграждение. Предоставляем детальный дисбурсментский счёт до захода судна." },
  { q: "Как быстро вы можете организовать заход судна?", a: "При наличии предварительного уведомления — от 24 часов. В экстренных случаях работаем в ускоренном режиме. Свяжитесь с нами по телефону для оперативного решения." },
  { q: "Работаете ли вы с иностранными судовладельцами?", a: "Да, работаем с судовладельцами из любых стран. Ведём переписку на русском и английском языках. Опыт работы с судами под флагами 40+ государств." },
  { q: "Какие документы нужны для оформления судозахода?", a: "Свидетельство о праве плавания под флагом, судовые роли, санитарные документы, манифест груза. Полный список предоставим после получения заявки." },
];

export default function Agency() {
  useEffect(() => {
    document.title = "Судовое агентирование в Новороссийске | MarineGroup";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Профессиональное судовое агентирование в портах Черноморского бассейна. Оформление судозаходов, смена экипажа, логистика грузов. Работаем 24/7. Новороссийск, Туапсе, Сочи.");
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
          <img src={IMG_SHIP} alt="Судовое агентирование в порту" className="w-full h-full object-cover" />
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
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Судовое агентирование<br />
              <span style={{ color: "var(--gold-light)" }}>в Черноморских портах</span>
            </h1>
            <p className="font-ibm max-w-2xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>
              Полный комплекс агентских услуг для судовладельцев, операторов и фрахтователей. Берём на себя все портовые формальности — от нотиса о прибытии до оформления отхода судна.
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

      {/* ── BENEFITS ── */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="section-label mb-3">Почему выбирают нас</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Надёжный партнёр в порту
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 text-center card-marine">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={b.icon as "Clock"} size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-ibm font-semibold mb-2" style={{ color: "var(--navy)" }}>{b.title}</h3>
                  <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{b.desc}</p>
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
              <div className="section-label mb-3">Что мы делаем</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Полный спектр агентских услуг
              </h2>
              <div className="gold-line w-20 mb-5" />
              <p className="font-ibm max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Сопровождаем судно на каждом этапе захода в порт. Наши специалисты знают все нюансы работы с портовыми властями черноморского бассейна.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AGENCY_SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-marine rounded-xl p-6 bg-white group h-full"
                  style={{ borderLeft: "3px solid var(--gold)" }}>
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

      {/* ── PORTS ── */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "var(--navy)" }}>
        <div className="absolute inset-0 sea-texture opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <div className="section-label mb-3">География присутствия</div>
              <h2 className="font-cormorant text-white font-semibold mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Порты обслуживания
              </h2>
              <div className="gold-line w-20 mx-auto mb-6" />
              <p className="font-ibm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
                Работаем во всех ключевых портах Черноморского и Азово-Черноморского бассейна
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {PORTS.map(p => (
                <div key={p} className="flex items-center gap-2 px-5 py-3 rounded-full"
                  style={{ border: "1px solid rgba(212,160,23,0.35)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                  <Icon name="MapPin" size={14} style={{ color: "var(--gold)" }} />
                  <span className="font-ibm text-sm text-white">{p}</span>
                </div>
              ))}
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
          <p className="font-ibm text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2024 MarineGroup. Все права защищены.</p>
          <Link to="/" className="font-ibm text-xs transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
            ← Вернуться на главную
          </Link>
        </div>
      </footer>
    </div>
  );
}
