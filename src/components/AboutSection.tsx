export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-rajdhani text-xs tracking-widest uppercase text-brand-red font-semibold">
            Кто мы такие
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            О <span className="text-gradient-red">нас</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-brand-red/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="font-rajdhani text-xs tracking-widest uppercase text-brand-red font-semibold">Наша миссия</span>
            </div>
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Музыка, которая объединяет
            </h3>
            <p className="font-inter text-gray-400 leading-relaxed mb-5 text-base">
              Мы создаём тёплые вечеринки, где каждый чувствует себя своим. Progressive house — это не просто жанр, это особое состояние, которое мы хотим подарить вам.
            </p>
            <p className="font-inter text-gray-400 leading-relaxed text-base">
              На каждом нашем событии — продуманный звук, уютная атмосфера и артисты, которые по-настоящему вкладывают душу в своё дело.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Мероприятий" },
                { value: "12", label: "Артистов" },
                { value: "15K+", label: "Гостей" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-orbitron text-2xl md:text-3xl font-bold text-brand-red">{stat.value}</div>
                  <div className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 mt-1 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/4458b1df-698d-43d8-b51f-720bbe0a3617.jpg"
                alt="DJ за пультом"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border border-brand-red/40 rounded-xl" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-brand-red/20 rounded-full blur-xl" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/59a6e91b-8e61-415c-a799-414fa17f50d2.jpg"
                alt="Вечеринка"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border border-brand-red/40 rounded-xl" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-brand-red/30 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span className="font-rajdhani text-xs tracking-widest uppercase text-brand-red font-semibold">Наша история</span>
            </div>
            <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Маленькая идея, которая выросла в большое сообщество
            </h3>
            <div className="space-y-4">
              {[
                { year: "2019", text: "Первая вечеринка на 200 человек — билеты разошлись за несколько часов. Мы поняли, что не одни." },
                { year: "2021", text: "Познакомились с замечательными артистами. Начали вместе создавать что-то большее." },
                { year: "2023", text: "Первый open-air фестиваль под открытым небом. 3000 улыбающихся людей — это незабываемо." },
                { year: "2025", text: "Регулярные события в лучших клубах города. Наша собственная звуковая система и дружная команда." },
              ].map((item) => (
                <div key={item.year} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 font-orbitron text-xs font-bold text-brand-red mt-1">{item.year}</div>
                  <div className="flex-1 pl-4 border-l border-white/10">
                    <p className="font-inter text-gray-400 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}