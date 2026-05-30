import Reveal from "./Reveal";

const artists = [
  {
    name: "Jomoss",
    desc: "Со-основатель и резидент Port Mirage",
    genres: "Progressive house / Deep house / Hypnotic house",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/34f6fbf0-8277-48ae-943c-b38536d29727.png",
    telegram: "https://t.me/+knfmOhr7twFiNmMy",
    soundcloud: "https://soundcloud.com/jomossmusic",
    instagram: "https://www.instagram.com/jomossmusic",
  },
  {
    name: "Melaniya",
    desc: "Со-основатель и резидент Port Mirage",
    genres: "Progressive house / Deep house / Classic house",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/90d920a6-5b51-4d66-9d16-319bbe5597d4.JPG",
    telegram: "https://t.me/melaniyaviolin",
    soundcloud: "https://on.soundcloud.com/sPPgsBt66oaytPkPv4",
    instagram: "https://instagram.com/milenamelaniya",
  },
  {
    name: "Altayef",
    desc: "Со-основатель и резидент Port Mirage",
    genres: "Organic House / Eclectic Organic / Desert Downtempo",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/f0462185-e500-4cc7-8e76-9c7d9f2fb890.JPG",
    telegram: "https://t.me/Di_altayef",
    soundcloud: "https://soundcloud.com/altayef-music",
    instagram: "https://instagram.com/altayef_music",
  },
  {
    name: "SAZONOVA",
    desc: "Резидент Port Mirage",
    genres: "Progressive House / Deep House / Organic House",
    img: "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/79bd34b6-7660-4533-b4a4-5064d6d2eb30.jpg",
    telegram: "https://t.me/SAZONOVA_Dj",
    soundcloud: "https://soundcloud.com/sazonova_dj",
    instagram: "https://instagram.com/sazonova.dj",
  },
];

function TelegramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function SoundCloudIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 15.303l.172 2.073c.013.06.045.094.104.094.06 0 .091-.034.104-.094L.557 15.303 .38 13.147c-.013-.057-.044-.094-.104-.094m1.81-.7c-.07 0-.12.05-.127.118L1.7 15.303l.259 2.232c.007.07.057.118.127.118.069 0 .12-.048.127-.118l.293-2.232-.293-2.832c-.007-.068-.058-.118-.127-.118m.912-.199c-.08 0-.14.062-.145.142l-.248 2.007.248 2.244c.005.08.065.142.145.142.079 0 .14-.062.145-.142L3.29 15.303l-.236-2.007c-.005-.08-.066-.142-.145-.142m.918-.066c-.09 0-.159.072-.163.16l-.222 2.073.222 2.255c.004.088.073.16.163.16.09 0 .158-.072.163-.16l.25-2.255-.25-2.073c-.005-.088-.073-.16-.163-.16m.921.073c-.1 0-.177.08-.18.179l-.198 2c0 .007.198 2.238.198 2.238.003.1.08.179.18.179.1 0 .177-.08.18-.179l.224-2.238-.224-2c-.003-.1-.08-.179-.18-.179m.923-.154c-.109 0-.194.088-.197.196l-.175 1.978.175 2.22c.003.11.088.196.197.196.11 0 .195-.086.197-.196l.199-2.22-.199-1.978c-.002-.11-.087-.196-.197-.196m.925.226c-.118 0-.211.096-.213.214l-.15 1.752.15 2.202c.002.118.095.214.213.214.12 0 .212-.096.214-.214l.17-2.202-.17-1.752c-.002-.118-.094-.214-.214-.214m.927-.127c-.128 0-.228.103-.23.23l-.126 1.625.126 2.18c.002.127.102.23.23.23.127 0 .227-.103.23-.23l.143-2.18-.143-1.625c-.003-.127-.103-.23-.23-.23m.93-.035c-.137 0-.244.11-.246.246L8.5 15.303l.128 2.16c.002.137.11.246.246.246.137 0 .244-.11.246-.246l.145-2.16-.145-2.052c-.002-.136-.11-.246-.246-.246m.932.141c-.147 0-.261.118-.263.264l-.103 1.847.103 2.137c.002.146.116.264.263.264.147 0 .261-.118.263-.264l.116-2.137-.116-1.847c-.002-.146-.116-.264-.263-.264m2.543-3.87c-.178-.062-.37-.095-.569-.095-.36 0-.697.1-.986.273-.185-2.09-1.943-3.728-4.088-3.728-.556 0-1.086.116-1.566.324-.185.076-.234.154-.236.227v7.564c.002.078.062.14.14.148h7.246c.076-.008.136-.07.14-.148.004-.027.004-5.47.004-5.47a2.57 2.57 0 0 0-.085-.095z"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

export default function ArtistsSection() {
  return (
    <section id="artists" className="py-20 md:py-32 bg-[#141414] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-white/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs tracking-widest uppercase font-semibold" style={{ color: "#D4AF37" }}>
              Лайн-ап
            </span>
            <h2 className="font-orbitron text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Наши <span className="text-gradient-silver">артисты</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artists.map((artist, i) => (
            <Reveal key={artist.name} delay={i * 80} className="h-full">
              <div className="group relative overflow-hidden rounded-xl card-dark h-full">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={artist.img}
                    alt={artist.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="font-orbitron text-white font-bold text-lg tracking-wider">{artist.name}</div>
                  <div className="font-rajdhani text-xs tracking-wide font-semibold mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#D4AF37" }}>
                    {artist.desc}
                  </div>
                  <div className="font-rajdhani text-[10px] leading-tight mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "#D4AF3799" }}>
                    {artist.genres}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={artist.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                      title="Telegram"
                    >
                      <TelegramIcon />
                    </a>
                    <a
                      href={artist.soundcloud}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                      title="SoundCloud"
                    >
                      <SoundCloudIcon />
                    </a>
                    <a
                      href={artist.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                      title="Instagram"
                    >
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}