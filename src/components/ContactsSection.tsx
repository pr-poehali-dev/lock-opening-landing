import PolygonBackground from "./PolygonBackground";
import Reveal from "./Reveal";

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

const contacts = [
  { icon: <TelegramIcon />, label: "Telegram", value: "t.me/portmirage", href: "https://t.me/portmirage" },
  { icon: <InstagramIcon />, label: "Instagram", value: "instagram.com/portmirage", href: "https://www.instagram.com/portmirage" },
  { icon: <YouTubeIcon />, label: "YouTube", value: "youtube.com/@portmirage", href: "https://youtube.com/@portmirage" },
  { icon: <EmailIcon />, label: "Email", value: "portmirage@gmail.com", href: "mailto:portmirage@gmail.com" },
];

const mixes = [
  {
    url: "https://on.soundcloud.com/i3rjS45EbfzZBiEfnj",
    title: "Altayef \u22c6 Passing Fancies \u22c6 Dark Disco / Electroclash / Indie Dance",
    desc: "Very energetic, sensual and enveloping! Enjoy the journey ;)",
    waveform: [0.3,0.5,0.8,0.6,0.9,0.4,0.7,1.0,0.5,0.8,0.3,0.6,0.9,0.7,0.4,0.8,0.5,0.7,0.6,0.9,0.4,0.5,0.8,0.6,0.3,0.7,1.0,0.5,0.8,0.4],
  },
  {
    url: "https://on.soundcloud.com/rcd0v88CrIn2fQB0tg",
    title: "INSOMNIA RADIOSHOW - SAZONOVA Guest Mix",
    desc: "Progressive House",
    waveform: [0.6,0.8,0.4,0.9,0.5,0.7,0.3,0.8,0.6,0.4,0.9,0.5,0.7,1.0,0.4,0.6,0.8,0.5,0.7,0.3,0.9,0.6,0.4,0.8,0.5,0.7,0.6,0.9,0.3,0.7],
  },
  {
    url: "https://on.soundcloud.com/GoAZ09MfVOgSrzwjfT",
    title: "Melaniya - Live @ SD, Saint-Petersburg @ [16.05.2026]",
    desc: "By Melaniya is licensed under a Creative Commons License.",
    waveform: [0.7,0.4,0.9,0.5,0.8,0.6,0.3,0.7,0.9,0.5,0.4,0.8,0.6,0.3,0.9,0.7,0.5,0.8,0.4,0.6,0.9,0.3,0.7,0.5,0.8,0.6,0.4,0.9,0.7,0.5],
  },
  {
    url: "https://on.soundcloud.com/cTX5XOSTGZGBp4SC6w",
    title: "Port Mirage 001 - Mixed by Jomoss",
    desc: "Music community from Saint-Petersburg, Russia",
    waveform: [0.5,0.7,0.3,0.8,0.6,0.9,0.4,0.7,0.5,0.9,0.3,0.6,0.8,0.5,0.7,0.4,0.9,0.6,0.8,0.3,0.7,0.5,0.9,0.4,0.6,0.8,0.3,0.7,0.5,0.9],
  },
];

function WaveformBar({ heights }: { heights: number[] }) {
  return (
    <div className="flex items-end gap-[2px] h-8">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-white/20 group-hover:bg-white/40 transition-colors"
          style={{ height: `${h * 100}%` }}
        />
      ))}
    </div>
  );
}

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 md:py-32 bg-[#1a1a1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <PolygonBackground className="absolute inset-0 z-0" nodeCount={16} opacity={0.07} parallaxFactor={0.025} />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="font-inter text-xs tracking-widest uppercase font-medium" style={{ color: "#D4AF37" }}>
              Связь
            </span>
            <h2 className="font-orbitron text-3xl sm:text-4xl font-bold text-white mt-2">
              Конта<span className="text-gradient-silver">кты</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Левая колонка: контакты */}
          <Reveal from="left">
            <div className="grid grid-cols-1 gap-2">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-dark rounded-xl hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-white transition-all duration-300">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-inter text-[10px] tracking-widest uppercase text-gray-600 font-medium">{c.label}</div>
                    <div className="font-inter text-gray-300 text-sm mt-0.5 group-hover:text-white transition-colors">{c.value}</div>
                  </div>
                  <div className="ml-auto text-gray-700 group-hover:text-gray-400 transition-colors flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Правая колонка: миксы */}
          <Reveal from="right" delay={100}>
            <div>
              <div className="mb-4">
                <div className="font-inter text-[10px] tracking-wide uppercase text-gray-600 font-medium">SoundCloud</div>
                <div className="font-orbitron text-sm font-bold text-white mt-0.5">Наши миксы</div>
              </div>

              <div className="flex flex-col gap-3">
                {mixes.map((mix, idx) => (
                  <a
                    key={idx}
                    href={mix.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group card-dark rounded-xl p-4 hover:border-white/20 transition-all duration-300 flex items-center gap-4"
                  >
                    {/* Номер и кнопка play */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-10 h-10 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all">
                        <span className="font-orbitron text-[10px] text-gray-600 group-hover:hidden">{String(idx + 1).padStart(2, "0")}</span>
                        <svg className="hidden group-hover:block" width="12" height="12" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Инфо + waveform */}
                    <div className="flex-1 min-w-0">
                      <div className="font-inter text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-snug">
                        {mix.title}
                      </div>
                      <div className="font-inter text-[11px] text-gray-600 mt-1 leading-relaxed line-clamp-2">
                        {mix.desc}
                      </div>
                      <div className="mt-2">
                        <WaveformBar heights={mix.waveform} />
                      </div>
                    </div>

                    {/* Стрелка */}
                    <div className="flex-shrink-0 text-gray-700 group-hover:text-[#D4AF37] transition-colors">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <a
                  href="https://soundcloud.com/port-mirage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-white/8 hover:border-white/20 hover:bg-white/3 transition-all duration-300 group"
                >
                  <img
                    src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/16d25f4b-b740-4b2a-80a7-7e0ea62bca8c.png"
                    alt="Port Mirage"
                    className="h-6 w-auto object-contain opacity-60 group-hover:opacity-90 transition-opacity"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <div className="w-px h-4 bg-white/10" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600 group-hover:text-[#ff5500] transition-colors flex-shrink-0">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 15.303l.172 2.073c.013.06.045.094.104.094.06 0 .091-.034.104-.094L.557 15.303.38 13.147c-.013-.057-.044-.094-.104-.094m1.81-.7c-.07 0-.12.05-.127.118L1.7 15.303l.259 2.232c.007.07.057.118.127.118.069 0 .12-.048.127-.118l.293-2.232-.293-2.832c-.007-.068-.058-.118-.127-.118m.912-.199c-.08 0-.14.062-.145.142l-.248 2.007.248 2.244c.005.08.065.142.145.142.079 0 .14-.062.145-.142L3.29 15.303l-.236-2.007c-.005-.08-.066-.142-.145-.142m.918-.066c-.09 0-.159.072-.163.16l-.222 2.073.222 2.255c.004.088.073.16.163.16.09 0 .158-.072.163-.16l.25-2.255-.25-2.073c-.005-.088-.073-.16-.163-.16m.921.073c-.1 0-.177.08-.18.179l-.198 2 .198 2.238c.003.1.08.179.18.179.1 0 .177-.08.18-.179l.224-2.238-.224-2c-.003-.1-.08-.179-.18-.179m.923-.154c-.109 0-.194.088-.197.196l-.175 1.978.175 2.22c.003.11.088.196.197.196.11 0 .195-.086.197-.196l.199-2.22-.199-1.978c-.002-.11-.087-.196-.197-.196m.925.226c-.118 0-.211.096-.213.214l-.15 1.752.15 2.202c.002.118.095.214.213.214.12 0 .212-.096.214-.214l.17-2.202-.17-1.752c-.002-.118-.094-.214-.214-.214m.927-.127c-.128 0-.228.103-.23.23l-.126 1.625.126 2.18c.002.127.102.23.23.23.127 0 .227-.103.23-.23l.143-2.18-.143-1.625c-.003-.127-.103-.23-.23-.23m.93-.035c-.137 0-.244.11-.246.246L8.5 15.303l.128 2.16c.002.137.11.246.246.246.137 0 .244-.11.246-.246l.145-2.16-.145-2.052c-.002-.136-.11-.246-.246-.246m.932.141c-.147 0-.261.118-.263.264l-.103 1.847.103 2.137c.002.146.116.264.263.264.147 0 .261-.118.263-.264l.116-2.137-.116-1.847c-.002-.146-.116-.264-.263-.264m2.543-3.87c-.178-.062-.37-.095-.569-.095-.36 0-.697.1-.986.273-.185-2.09-1.943-3.728-4.088-3.728-.556 0-1.086.116-1.566.324-.185.076-.234.154-.236.227v7.564c.002.078.062.14.14.148h7.246c.076-.008.136-.07.14-.148.004-.027.004-5.47.004-5.47a2.57 2.57 0 0 0-.085-.095z"/>
                  </svg>
                  <span className="font-inter text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                    Перейти в профиль
                  </span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-gray-700 group-hover:text-gray-500 transition-colors flex-shrink-0">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Футер */}
      <footer className="relative z-10 mt-20 pt-8 border-t border-white/5 text-center">
        <div className="flex justify-center mb-4">
          <img
            src="https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/16d25f4b-b740-4b2a-80a7-7e0ea62bca8c.png"
            alt="Port Mirage"
            className="h-20 w-auto object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>
        <p className="font-inter text-[11px] tracking-wider text-gray-700 uppercase mb-2">
          2026 Port Mirage. Все права защищены.
        </p>
        <p className="font-inter text-[11px] text-gray-700">
          Бабич Милена Игоревна · ИНН 613405123270
        </p>
      </footer>
    </section>
  );
}