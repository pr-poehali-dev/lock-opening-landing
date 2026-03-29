import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import {
  IMG_ENGINE, IMG_CHANDLER,
  NAV,
  AGENCY_SERVICES, ENGINE_SERVICES, CHANDLER_CATS, HOW_STEPS,
  Reveal, ContactForm,
} from "./Shared";

interface ContentSectionsProps {
  scrollTo: (href: string) => void;
}

export default function ContentSections({ scrollTo }: ContentSectionsProps) {
  return (
    <>
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
                <Link to="/agency" className="group inline-block">
                  <h2 className="section-title-lg mb-2 group-hover:text-[var(--sea)] transition-colors duration-200" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                    Судовое агентирование
                    <Icon name="ArrowUpRight" size={28} className="inline-block ml-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--sea)" }} />
                  </h2>
                </Link>
                <div className="gold-line w-20 mb-5" />
                <p className="font-ibm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                  Наша компания предоставляет широкий спектр услуг, направленных на оптимизацию деятельности судовладельцев и операторов флота, гарантируя при этом высокий уровень конфиденциальности.
                </p>
                <p className="font-ibm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Мы предлагаем оперативные решения и оптимизацию рабочих процессов, что позволяет своевременно вносить корректировки и минимизировать затраты.
                </p>
              </div>
              <div className="lg:text-right flex lg:flex-col gap-3 items-start lg:items-end">
                <Link to="/agency" className="btn-navy px-8 py-3.5 rounded text-xs">
                  Подробнее
                </Link>
                <button onClick={() => scrollTo("#contacts")} className="btn-gold px-8 py-3.5 rounded text-xs">
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
              <Link to="/engines" className="group inline-block mb-4">
                <h2 className="font-cormorant text-white font-semibold leading-tight group-hover:opacity-80 transition-opacity duration-200"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)" }}>
                  Ремонт судовых<br />
                  <span style={{ color: "var(--gold-light)" }}>двигателей</span>
                  <Icon name="ArrowUpRight" size={28} className="inline-block ml-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--gold-light)" }} />
                </h2>
              </Link>
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
              <div className="flex flex-wrap gap-3">
                <Link to="/engines" className="btn-outline-white px-8 py-3.5 rounded text-xs">
                  Подробнее
                </Link>
                <button onClick={() => scrollTo("#contacts")} className="btn-gold px-8 py-3.5 rounded text-xs">
                  Вызвать механика
                </button>
              </div>
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
              <Link to="/chandler" className="group inline-block">
                <h2 className="section-title-lg mb-2 group-hover:text-[var(--sea)] transition-colors duration-200" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
                  Судовое снабжение
                  <Icon name="ArrowUpRight" size={26} className="inline-block ml-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ color: "var(--sea)" }} />
                </h2>
              </Link>
              <div className="gold-line w-24 mx-auto mb-5" />
              <p className="font-ibm max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Полный цикл снабжения — от заказа до доставки на борт. Работаем напрямую с производителями и сертифицированными дистрибьюторами. Оперативная доставка в любой порт присутствия.
              </p>
              <Link to="/chandler" className="inline-block mt-5 btn-navy px-7 py-3 rounded text-xs">
                Перейти в каталог
              </Link>
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
                {/* Телефон — кликабельный */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ border: "1px solid rgba(212,160,23,0.25)" }}>
                    <Icon name="Phone" size={17} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>Телефон</div>
                    <a href="tel:+79633027803" className="font-ibm text-white font-medium hover:text-[var(--gold)] transition-colors">
                      +7 (963) 302-78-03
                    </a>
                  </div>
                </div>
                {/* E-mail */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ border: "1px solid rgba(212,160,23,0.25)" }}>
                    <Icon name="Mail" size={17} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>E-mail</div>
                    <a href="mailto:order@idaled.com" className="font-ibm text-white font-medium hover:text-[var(--gold)] transition-colors">
                      order@idaled.com
                    </a>
                  </div>
                </div>
                {/* Офис */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ border: "1px solid rgba(212,160,23,0.25)" }}>
                    <Icon name="MapPin" size={17} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>Офис</div>
                    <div className="font-ibm text-white font-medium leading-snug">
                      196642, г. Санкт-Петербург, вн. тер. г. поселок Петро-Славянка,<br />
                      Пр-т Советский, д. 19, литера А, пом. 1-н, каб. 12/1
                    </div>
                  </div>
                </div>
                {/* Режим */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ border: "1px solid rgba(212,160,23,0.25)" }}>
                    <Icon name="Clock" size={17} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="font-ibm text-xs uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>Режим</div>
                    <div className="font-ibm text-white font-medium">Судозаходы принимаем 24 / 7</div>
                  </div>
                </div>
              </div>

              <div>
                <div className="font-ibm text-xs uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Порты присутствия
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Мурманск", "Калининград", "Санкт-Петербург"].map(p => (
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
              <div className="mb-4">
                <img
                  src="https://thb.tildacdn.com/tild3333-3532-4765-b339-346564343465/-/resize/504x/logo_color.png"
                  alt="IDA LED"
                  className="h-10 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
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
    </>
  );
}