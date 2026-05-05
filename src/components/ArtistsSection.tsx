const artists = [
  {
    name: "DARKWAVE",
    nick: "darkwave",
    desc: "Мастер глубокого progressive. Резидент с 2019 года.",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/23ec51bd-c041-40ae-88ae-04a92bca62ed.jpg",
    soundcloud: "#",
    telegram: "#",
    vk: "#",
  },
  {
    name: "NOVA",
    nick: "dj_nova",
    desc: "Электронный минимализм и атмосферные сеты. Играет с 2020.",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/1d88546a-de69-4654-961d-01df8cb06274.jpg",
    soundcloud: "#",
    telegram: "#",
    vk: "#",
  },
  {
    name: "APEX",
    nick: "apex_dj",
    desc: "Энергичные сеты на грани techno и progressive house.",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/e5ae94a0-5f6c-40dc-8dcb-08ef1011fabb.jpg",
    soundcloud: "#",
    telegram: "#",
    vk: "#",
  },
  {
    name: "SOLARIS",
    nick: "solaris_live",
    desc: "Live-сеты и оригинальные треки. Продюсер и диджей.",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/files/4458b1df-698d-43d8-b51f-720bbe0a3617.jpg",
    soundcloud: "#",
    telegram: "#",
    vk: "#",
  },
];

function SoundCloudIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 15.303l.172 2.073c.013.06.045.094.104.094.06 0 .091-.034.104-.094L.557 15.303 .38 13.147c-.013-.057-.044-.094-.104-.094m1.81-.7c-.07 0-.12.05-.127.118L1.7 15.303l.259 2.232c.007.07.057.118.127.118.069 0 .12-.048.127-.118l.293-2.232-.293-2.832c-.007-.068-.058-.118-.127-.118m.912-.199c-.08 0-.14.062-.145.142l-.248 2.007.248 2.244c.005.08.065.142.145.142.079 0 .14-.062.145-.142L3.29 15.303l-.236-2.007c-.005-.08-.066-.142-.145-.142m.918-.066c-.09 0-.159.072-.163.16l-.222 2.073.222 2.255c.004.088.073.16.163.16.09 0 .158-.072.163-.16l.25-2.255-.25-2.073c-.005-.088-.073-.16-.163-.16m.921.073c-.1 0-.177.08-.18.179l-.198 2c0 .007.198 2.238.198 2.238.003.1.08.179.18.179.1 0 .177-.08.18-.179l.224-2.238-.224-2c-.003-.1-.08-.179-.18-.179m.923-.154c-.109 0-.194.088-.197.196l-.175 1.978.175 2.22c.003.11.088.196.197.196.11 0 .195-.086.197-.196l.199-2.22-.199-1.978c-.002-.11-.087-.196-.197-.196m.925.226c-.118 0-.211.096-.213.214l-.15 1.752.15 2.202c.002.118.095.214.213.214.12 0 .212-.096.214-.214l.17-2.202-.17-1.752c-.002-.118-.094-.214-.214-.214m.927-.127c-.128 0-.228.103-.23.23l-.126 1.625.126 2.18c.002.127.102.23.23.23.127 0 .227-.103.23-.23l.143-2.18-.143-1.625c-.003-.127-.103-.23-.23-.23m.93-.035c-.137 0-.244.11-.246.246L8.5 15.303l.128 2.16c.002.137.11.246.246.246.137 0 .244-.11.246-.246l.145-2.16-.145-2.052c-.002-.136-.11-.246-.246-.246m.932.141c-.147 0-.261.118-.263.264l-.103 1.847.103 2.137c.002.146.116.264.263.264.147 0 .261-.118.263-.264l.116-2.137-.116-1.847c-.002-.146-.116-.264-.263-.264m2.543-3.87c-.178-.062-.37-.095-.569-.095-.36 0-.697.1-.986.273-.185-2.09-1.943-3.728-4.088-3.728-.556 0-1.086.116-1.566.324-.185.076-.234.154-.236.227v7.564c.002.078.062.14.14.148h7.246c.076-.008.136-.07.14-.148.004-.027.004-5.47.004-5.47a2.57 2.57 0 0 0-.085-.095z"/>
    </svg>
  );
}

function VKIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-.113-1.49.979v1.248c0 .29-.08.452-.797.452-1.217 0-2.57-.073-3.827-1.279C7.97 14.824 6.804 12.453 6.73 12.295c-.071-.155-.009-.3.17-.3h1.748c.222 0 .302.111.402.346.496 1.18 1.337 2.219 1.678 2.219.129 0 .188-.06.188-.39v-2.034c-.044-.79-.462-.855-.462-1.135 0-.155.122-.31.32-.31h2.75c.19 0 .258.1.258.322v2.744c0 .19.085.258.138.258.128 0 .236-.068.472-.305 .727-.814 1.244-2.066 1.244-2.066.069-.155.199-.3.422-.3h1.748c.524 0 .64.27.524.524-.219.504-1.474 2.525-1.474 2.525-.115.19-.155.276 0 .488.112.155.48.476.726.765.45.513.796 .944.887 1.24.096.296-.05.447-.347.447z"/>
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

export default function ArtistsSection() {
  return (
    <section id="artists" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-rajdhani text-xs tracking-widest uppercase text-brand-red font-semibold">
            Лайн-ап
          </span>
          <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Наши <span className="text-gradient-red">артисты</span>
          </h2>
          <p className="mt-4 font-inter text-gray-400 max-w-xl mx-auto">
            Диджеи и продюсеры, которые создают атмосферу наших вечеринок
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.nick} className="group relative overflow-hidden rounded-xl card-dark">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="font-orbitron text-white font-bold text-lg tracking-wider">{artist.name}</div>
                <div className="font-rajdhani text-brand-red text-xs tracking-widest uppercase font-semibold mb-2">
                  @{artist.nick}
                </div>
                <p className="font-inter text-gray-400 text-xs leading-relaxed mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {artist.desc}
                </p>
                <div className="flex gap-3">
                  <a
                    href={artist.soundcloud}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5500] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                    title="SoundCloud"
                  >
                    <SoundCloudIcon />
                  </a>
                  <a
                    href={artist.telegram}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#2AABEE] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                    title="Telegram"
                  >
                    <TelegramIcon />
                  </a>
                  <a
                    href={artist.vk}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#4C75A3] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                    title="VK"
                  >
                    <VKIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
