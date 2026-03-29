import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Reveal, ContactForm, IMG_CHANDLER } from "@/components/marine/Shared";

const WHAT_WE_SUPPLY = [
  { icon: "UtensilsCrossed", text: "Судовая провизия любого типа: свежие, замороженные и долгосрочно хранимые продукты" },
  { icon: "Droplets",        text: "Питьевая вода для судов" },
  { icon: "Sparkles",        text: "Бытовая химия и моющие средства для судовых нужд" },
  { icon: "Heart",           text: "Санитарно‑гигиенические товары для экипажа" },
  { icon: "ChefHat",         text: "Расходные материалы для камбуза и кают" },
  { icon: "Package",         text: "Товары для обслуживания судна (тросы, крепёж, инвентарь)" },
];

const SERVICES = [
  { icon: "ClipboardList",   title: "Поставка провизии",          desc: "С учётом рациона и специфики рейса" },
  { icon: "Salad",           title: "Подбор меню для экипажа",    desc: "В т. ч. диетическое питание по требованиям" },
  { icon: "Ship",            title: "Провизия для дальнего плавания", desc: "Комплектация с расчётом на весь маршрут" },
  { icon: "MapPin",          title: "Доставка в порты СПб",       desc: "Большой порт СПб, порт Бронка, порт Усть‑Луга и др." },
  { icon: "Sailboat",        title: "Снабжение яхт и катеров",    desc: "Маломерные суда любого типа и размера" },
  { icon: "CalendarClock",   title: "Регулярные поставки",        desc: "Организация поставок по согласованному графику" },
  { icon: "Settings",        title: "Индивидуальный подбор",      desc: "Товары под конкретные требования заказчика" },
];

const VESSEL_TYPES = [
  { icon: "Container", label: "Грузовые суда" },
  { icon: "Users",     label: "Пассажирские" },
  { icon: "Fish",      label: "Рыболовецкие" },
  { icon: "Sailboat",  label: "Яхты и катера" },
];

const WHY_US = [
  { icon: "Warehouse",   text: "Локальные склады в Санкт‑Петербурге — быстрая комплектация и отправка" },
  { icon: "Thermometer", text: "Соблюдение норм хранения и транспортировки продуктов" },
  { icon: "FileCheck",   text: "Полный пакет сопроводительных документов" },
  { icon: "Handshake",   text: "Гибкие условия для долгосрочных контрактов" },
  { icon: "BadgeCheck",  text: "Прозрачные цены и индивидуальный подход" },
  { icon: "Clock",       text: "Поддержка 24 часа — принимаем заявки в любое время" },
];

const STATS = [
  { value: "24/7",  label: "приём заявок" },
  { value: "100+",  label: "поставщиков в базе" },
  { value: "48 ч",  label: "срочная комплектация" },
  { value: "3",     label: "порта в СПб регионе" },
];

const FAQ = [
  { q: "Как быстро можно получить поставку провизии?", a: "Принимаем срочные заявки круглосуточно. Стандартная комплектация — 24-48 часов. При срочных заходах согласовываем минимальные сроки индивидуально." },
  { q: "Поставляете ли продукты для судов с особыми требованиями к питанию?", a: "Да, формируем меню с учётом диетических, религиозных и медицинских требований экипажа. Подготовим расчёт рациона на весь рейс." },
  { q: "Работаете ли с маломерными судами и яхтами?", a: "Да, обслуживаем суда любого размера — от яхт до крупных грузовых судов. Минимальный объём заказа не ограничен." },
  { q: "Какие документы прилагаются к поставке?", a: "Все поставки сопровождаются накладными, сертификатами качества, санитарными документами и счётами-фактурами. Обеспечиваем полный документооборот." },
];

export default function Chandler() {
  useEffect(() => {
    document.title = "Ship Chandler в СПб | Снабжение судов продуктами и материалами | IDALED";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", "Шипчандлерские услуги в Санкт‑Петербурге. Поставка судовой провизии, питьевой воды, бытовой химии. Доставка в порты СПб 24/7. Звоните!");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); kw.setAttribute("name", "keywords"); document.head.appendChild(kw); }
    kw.setAttribute("content", "ship chandler Санкт‑Петербург, шипчандлерские услуги СПб, судовая провизия СПб, снабжение судов продуктами в Санкт‑Петербурге, поставка судовой провизии СПб, доставка судовой провизии в порты Санкт‑Петербурга, ship chandler с доставкой 24/7, свежие продукты для судов СПб, питьевая вода на судно СПб, бытовая химия для судов от ship chandler, санитарно‑гигиенические товары для экипажа СПб, снабжение яхт и маломерных судов в Санкт‑Петербурге");
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
          <img src={IMG_CHANDLER} alt="Ship Chandler в Санкт-Петербурге" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,20,38,0.65) 0%, rgba(6,20,38,0.97) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pb-20 w-full">
          <Reveal>
            <nav className="flex items-center gap-2 font-ibm text-xs mb-8" style={{ color: "rgba(255,255,255,0.4)" }}>
              <Link to="/" className="hover:text-white transition-colors">Главная</Link>
              <span>/</span>
              <span style={{ color: "var(--gold)" }}>Ship Chandler</span>
            </nav>
            <div className="inline-block font-ibm text-xs uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{ border: "1px solid rgba(212,160,23,0.5)", color: "var(--gold)" }}>
              Поставки 24 / 7
            </div>
            <h1 className="font-cormorant text-white font-semibold leading-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
              Ship Chandler в Санкт‑Петербурге:<br />
              <span style={{ color: "var(--gold-light)" }}>снабжение судов под ключ от IDALED</span>
            </h1>
            <p className="font-ibm max-w-2xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem" }}>
              Наша компания предоставляет комплексные шипчандлерские услуги в Санкт‑Петербурге и портах региона. Мы обеспечиваем надёжное снабжение судов продуктами и расходными материалами — от свежих продуктов до санитарно‑гигиенических товаров.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="btn-gold px-8 py-3.5 rounded text-xs">
                Заказать снабжение
              </a>
              <a href="#services" className="btn-outline-white px-8 py-3.5 rounded text-xs">
                Наши услуги
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

      {/* ── ЧТО ПОСТАВЛЯЕМ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="mb-12">
              <div className="section-label mb-3">Ассортимент</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Что мы поставляем
              </h2>
              <div className="gold-line w-20 mb-0" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHAT_WE_SUPPLY.map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 rounded-xl card-marine bg-white">
                  <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: "var(--beige)" }}>
                    <Icon name={item.icon as "UtensilsCrossed"} size={20} style={{ color: "var(--sea)" }} />
                  </div>
                  <p className="font-ibm text-sm leading-relaxed pt-2.5" style={{ color: "var(--text-muted)" }}>{item.text}</p>
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
                Полный спектр шипчандлерских услуг
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={i} delay={i * 55}>
                <div className="bg-white rounded-2xl p-6 card-marine group h-full"
                  style={{ borderLeft: "3px solid var(--gold)" }}>
                  <div className="w-11 h-11 rounded-lg mb-4 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#0B1F3A]"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={s.icon as "ClipboardList"} size={21} style={{ color: "var(--gold)" }}
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
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-10">
              <div className="section-label mb-3">Кого обслуживаем</div>
              <h2 className="font-cormorant font-semibold mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--navy)" }}>
                Работаем с судами всех типов
              </h2>
              <div className="gold-line w-20 mx-auto mb-3" />
              <p className="font-ibm text-sm" style={{ color: "var(--text-muted)" }}>
                Ship chandler с доставкой 24/7 — оперативно реагируем на срочные заявки
              </p>
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
                    <Icon name={item.icon as "Warehouse"} size={18} style={{ color: "var(--gold)" }} />
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
              Доверьте снабжение судна в Санкт‑Петербурге профессионалам IDALED — мы обеспечим экипаж всем необходимым для комфортного и безопасного плавания!
            </p>
            <p className="font-ibm mb-8" style={{ color: "rgba(6,20,38,0.7)", fontSize: "1rem" }}>
              Оставьте заявку на сайте или позвоните нам — мы оперативно рассчитаем стоимость поставки и согласуем удобное время доставки.
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
            <div className="section-label mb-4">Заявка на снабжение</div>
            <h2 className="font-cormorant text-white font-semibold mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Заказать снабжение<br />
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