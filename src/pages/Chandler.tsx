import { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Reveal, ContactForm, CHANDLER_CATS, IMG_CHANDLER } from "@/components/marine/Shared";

const DELIVERY_PORTS = ["Новороссийск", "Туапсе", "Сочи", "Темрюк", "Тамань", "Кавказ", "Геленджик"];

const ADVANTAGES = [
  { icon: "Truck",       title: "Доставка на борт 24 ч", desc: "Принимаем заказы круглосуточно. Доставляем провизию и снабжение непосредственно на борт в любое время стоянки." },
  { icon: "ShieldCheck", title: "Сертифицированная продукция", desc: "Работаем только с проверенными поставщиками. Вся продукция сопровождается необходимыми сертификатами и документами." },
  { icon: "Package",     title: "2000+ позиций", desc: "Широкий ассортимент: от свежих продуктов питания до технических расходных материалов и спасательного оборудования." },
  { icon: "Calculator",  title: "Прозрачное ценообразование", desc: "Детальный проформа-инвойс до поставки. Без скрытых наценок. Конкурентные цены за счёт прямых договоров с поставщиками." },
];

const PRODUCT_DETAILS = [
  {
    category: "Продовольственное снабжение",
    icon: "UtensilsCrossed",
    items: ["Свежие фрукты и овощи", "Замороженные мясо и рыба", "Молочные продукты", "Бакалея и консервация", "Напитки и вода", "Хлеб и кондитерские изделия"],
    note: "Соответствие ГОСТ и международным стандартам HACCP"
  },
  {
    category: "Техническое снабжение",
    icon: "Package",
    items: ["Запасные части к двигателям", "Крепёж и расходники", "Лакокрасочные материалы", "Инструмент и оснастка", "Электрооборудование", "Трубопроводная арматура"],
    note: "Оригинальные и сертифицированные аналоги"
  },
  {
    category: "Масла и химия",
    icon: "Droplets",
    items: ["Судовые моторные масла", "Гидравлические жидкости", "Топливные присадки", "Антикоррозионные покрытия", "Клинеры и деграйзеры", "Биоциды для балластных вод"],
    note: "Shell, Castrol, Mobil, Total, Lukoil"
  },
  {
    category: "Безопасность и СИЗ",
    icon: "Shield",
    items: ["Индивидуальные средства защиты", "Спасательные жилеты и костюмы", "Пиротехника и сигнальные средства", "Огнетушители и пожарное снаряжение", "Медицинские комплекты СОЛАС", "Форменная одежда экипажа"],
    note: "Сертификация СОЛАС, МК МПОГ"
  },
];

const FAQ = [
  { q: "Какой минимальный объём заказа?", a: "Минимального объёма нет. Принимаем заказы любого размера — от единичных позиций до полного снабжения судна. Для небольших заказов может применяться минимальная стоимость доставки." },
  { q: "Как оформить заказ на снабжение?", a: "Пришлите нам список необходимых позиций (requisition list) по e-mail или через форму на сайте. В течение 2-4 часов подготовим проформа-инвойс с ценами и сроками поставки." },
  { q: "Работаете ли с транзитными судами?", a: "Да, обслуживаем транзитные суда с коротким временем стоянки. При необходимости организуем экстренную поставку за 4-6 часов для срочных случаев." },
  { q: "Можете ли вы поставлять алкоголь duty-free?", a: "Да, организуем поставку алкогольной продукции для судов в международных рейсах в соответствии с таможенным законодательством. Необходимо предварительное согласование." },
];

export default function Chandler() {
  useEffect(() => {
    document.title = "Ship Chandler — Судовое снабжение в Новороссийске | MarineGroup";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Профессиональное судовое снабжение: провизия, техснабжение, масла, СИЗ. Доставка на борт 24 часа. Новороссийск, Туапсе, Сочи. Более 2000 позиций в каталоге.");
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
          <img src={IMG_CHANDLER} alt="Судовое снабжение Ship Chandler" className="w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(6,20,38,0.5) 0%, rgba(6,20,38,0.97) 100%)" }} />
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
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Ship Chandler —<br />
              <span style={{ color: "var(--gold-light)" }}>Судовое снабжение</span>
            </h1>
            <p className="font-ibm max-w-2xl leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem" }}>
              Полный цикл снабжения судна: провизия, техническое снабжение, масла, спецодежда и медикаменты. Работаем напрямую с производителями, доставляем на борт в день заказа.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="btn-gold px-8 py-3.5 rounded text-xs">
                Оставить заявку
              </a>
              <a href="#catalog" className="btn-outline-white px-8 py-3.5 rounded text-xs">
                Каталог товаров
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ backgroundColor: "var(--navy)" }} className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { v: "2000+", l: "позиций в каталоге" },
              { v: "24 ч",  l: "доставка на борт" },
              { v: "100%",  l: "сертифицированная продукция" },
              { v: "7",     l: "портов обслуживания" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 70}>
                <div>
                  <div className="font-cormorant font-bold mb-1" style={{ fontSize: "2.8rem", color: "var(--gold-light)" }}>{s.v}</div>
                  <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="py-20" style={{ backgroundColor: "var(--beige)" }}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <div className="section-label mb-3">Наши преимущества</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Почему работают с нами
              </h2>
              <div className="gold-line w-20 mx-auto" />
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="bg-white rounded-2xl p-6 text-center card-marine h-full">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "var(--navy)" }}>
                    <Icon name={a.icon as "Truck"} size={22} style={{ color: "var(--gold)" }} />
                  </div>
                  <h3 className="font-ibm font-semibold mb-2" style={{ color: "var(--navy)" }}>{a.title}</h3>
                  <p className="font-ibm text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOG ── */}
      <section id="catalog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="mb-14">
              <div className="section-label mb-3">Ассортимент</div>
              <h2 className="font-cormorant font-semibold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}>
                Категории товаров
              </h2>
              <div className="gold-line w-20 mb-5" />
              <p className="font-ibm max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Поставляем все виды судовых товаров и расходных материалов. Каждая категория сопровождается необходимой документацией и сертификатами.
              </p>
            </div>
          </Reveal>

          {/* Quick category overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {CHANDLER_CATS.map((c, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="card-marine rounded-xl p-5 group cursor-pointer bg-white h-full"
                  style={{ borderTop: "3px solid var(--gold)" }}>
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

          {/* Detailed product sections */}
          <div className="grid lg:grid-cols-2 gap-6">
            {PRODUCT_DETAILS.map((pd, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="rounded-2xl p-6 h-full" style={{ backgroundColor: "var(--beige)", border: "1px solid var(--beige-dark)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "var(--navy)" }}>
                      <Icon name={pd.icon as "Package"} size={18} style={{ color: "var(--gold)" }} />
                    </div>
                    <h3 className="font-ibm font-semibold" style={{ color: "var(--navy)" }}>{pd.category}</h3>
                  </div>
                  <ul className="space-y-1.5 mb-4">
                    {pd.items.map(item => (
                      <li key={item} className="flex items-center gap-2 font-ibm text-sm" style={{ color: "var(--text-muted)" }}>
                        <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--gold)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="font-ibm text-xs px-3 py-1.5 rounded-full inline-block"
                    style={{ backgroundColor: "rgba(212,160,23,0.12)", color: "var(--navy)", border: "1px solid rgba(212,160,23,0.3)" }}>
                    {pd.note}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTS ── */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "var(--navy-light)" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
              <div>
                <div className="section-label mb-2">Доставляем в порты</div>
                <h3 className="font-cormorant text-white font-semibold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                  Черноморский и Азовский бассейн
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {DELIVERY_PORTS.map(p => (
                  <div key={p} className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{ border: "1px solid rgba(212,160,23,0.35)", backgroundColor: "rgba(255,255,255,0.04)" }}>
                    <Icon name="MapPin" size={12} style={{ color: "var(--gold)" }} />
                    <span className="font-ibm text-sm text-white">{p}</span>
                  </div>
                ))}
              </div>
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
          <p className="font-ibm text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>© 2024 MarineGroup. Все права защищены.</p>
          <Link to="/" className="font-ibm text-xs transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
            ← Вернуться на главную
          </Link>
        </div>
      </footer>
    </div>
  );
}
