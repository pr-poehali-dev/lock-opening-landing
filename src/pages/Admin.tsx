import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CONTENT_URL, DEFAULT_CONTENT, SiteContent, Artist, Mix } from "@/lib/content";
import ImageUpload from "@/components/admin/ImageUpload";

type Tab = "hero" | "gallery" | "artists" | "mixes" | "about" | "contacts";

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "hero", label: "Главный экран", icon: "Home" },
  { id: "gallery", label: "Галерея", icon: "Images" },
  { id: "artists", label: "Артисты", icon: "Users" },
  { id: "mixes", label: "Наши миксы", icon: "Music" },
  { id: "about", label: "О нас", icon: "FileText" },
  { id: "contacts", label: "Контакты", icon: "Phone" },
];

const EMPTY_ARTIST: Artist = { name: "", desc: "", genres: "", img: "", telegram: "", soundcloud: "", instagram: "" };
const EMPTY_MIX: Mix = { title: "", desc: "", url: "" };

async function api(password: string, body: object) {
  const res = await fetch(CONTENT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Auth-Token": password },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Ошибка");
  return data;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs text-gray-400 mb-1">{label}</span>
      {children}
    </label>
  );
}

function move<T>(arr: T[], i: number, dir: -1 | 1): T[] {
  const j = i + dir;
  if (j < 0 || j >= arr.length) return arr;
  const copy = [...arr];
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

export default function Admin() {
  const { toast } = useToast();
  const [password, setPassword] = useState(sessionStorage.getItem("admin_pw") || "");
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [content, setContent] = useState<SiteContent>(DEFAULT_CONTENT);
  const [tab, setTab] = useState<Tab>("hero");
  const [saving, setSaving] = useState(false);

  const loadContent = async () => {
    const data = await fetch(CONTENT_URL).then((r) => r.json());
    setContent({
      about: { ...DEFAULT_CONTENT.about, ...(data.about || {}) },
      contacts: { ...DEFAULT_CONTENT.contacts, ...(data.contacts || {}) },
      hero: { ...DEFAULT_CONTENT.hero, ...(data.hero || {}) },
      gallery: Array.isArray(data.gallery) ? data.gallery : DEFAULT_CONTENT.gallery,
      artists: Array.isArray(data.artists) ? data.artists : DEFAULT_CONTENT.artists,
      mixes: Array.isArray(data.mixes) ? data.mixes : DEFAULT_CONTENT.mixes,
    });
  };

  const login = async (pw: string) => {
    try {
      await api(pw, { action: "login" });
      sessionStorage.setItem("admin_pw", pw);
      await loadContent();
      setAuthed(true);
      setLoginError("");
    } catch {
      sessionStorage.removeItem("admin_pw");
      setLoginError("Неверный пароль");
    }
  };

  useEffect(() => {
    if (password) login(password);
  }, []);

  const save = async (key: Tab) => {
    setSaving(true);
    try {
      await api(password, { action: "save", key, value: content[key] });
      toast({ title: "Сохранено", description: "Изменения уже на сайте" });
    } catch (e) {
      toast({ title: "Не удалось сохранить", description: String(e), variant: "destructive" });
    }
    setSaving(false);
  };

  const upload = async (file: File): Promise<string> => {
    const data: string = await new Promise((resolve) => {
      const r = new FileReader();
      r.onload = () => resolve(String(r.result));
      r.readAsDataURL(file);
    });
    const res = await api(password, { action: "upload", data, contentType: file.type });
    return res.url;
  };

  const setHero = (patch: Partial<SiteContent["hero"]>) =>
    setContent((c) => ({ ...c, hero: { ...c.hero, ...patch } }));

  const updateArtist = (i: number, patch: Partial<Artist>) =>
    setContent((c) => ({ ...c, artists: c.artists.map((a, k) => (k === i ? { ...a, ...patch } : a)) }));

  const updateMix = (i: number, patch: Partial<Mix>) =>
    setContent((c) => ({ ...c, mixes: c.mixes.map((m, k) => (k === i ? { ...m, ...patch } : m)) }));

  const setAbout = (patch: Partial<SiteContent["about"]>) =>
    setContent((c) => ({ ...c, about: { ...c.about, ...patch } }));

  const setContacts = (patch: Partial<SiteContent["contacts"]>) =>
    setContent((c) => ({ ...c, contacts: { ...c.contacts, ...patch } }));

  const updateContact = (i: number, patch: Partial<SiteContent["contacts"]["items"][number]>) =>
    setContacts({ items: content.contacts.items.map((it, k) => (k === i ? { ...it, ...patch } : it)) });

  const paragraphs = (v: string) => v.split(/\n\s*\n/).map((t) => t.trim()).filter(Boolean);

  if (!authed) {
    return (
      <div className="min-h-screen bg-[#141414] flex items-center justify-center p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(password);
          }}
          className="w-full max-w-sm bg-[#1a1a1a] border border-white/10 rounded-xl p-6 space-y-4"
        >
          <h1 className="font-orbitron text-xl text-white">Админ-панель</h1>
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-black/40 border-white/10 text-white"
          />
          {loginError && <p className="text-sm text-red-400">{loginError}</p>}
          <Button type="submit" className="w-full">Войти</Button>
        </form>
      </div>
    );
  }

  const inputCls = "bg-black/40 border-white/10 text-white";

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <header className="sticky top-0 z-20 bg-[#1a1a1a] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-orbitron text-base">Админ-панель</h1>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/" className="text-gray-400 hover:text-white">На сайт</Link>
            <button
              className="text-gray-400 hover:text-white"
              onClick={() => {
                sessionStorage.removeItem("admin_pw");
                setAuthed(false);
                setPassword("");
              }}
            >
              Выйти
            </button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 flex gap-1 overflow-x-auto">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
                tab === t.id ? "border-[#D4AF37] text-white" : "border-transparent text-gray-500 hover:text-white"
              }`}
            >
              <Icon name={t.icon} size={16} />
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {tab === "hero" && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <span className="block text-sm font-semibold">Фон для компьютера</span>
                <p className="text-xs text-gray-400">Горизонтальная картинка 1920 × 1080 px (формат 16:9), JPG или PNG. Главное — в центре, остальное может обрезаться.</p>
                {content.hero.bgDesktop && <img src={content.hero.bgDesktop} alt="" className="w-full aspect-video object-cover rounded" />}
                <ImageUpload label="Загрузить фон" onUpload={upload} onDone={(url) => setHero({ bgDesktop: url })} />
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <span className="block text-sm font-semibold">Фон для телефона</span>
                <p className="text-xs text-gray-400">Вертикальная картинка 1080 × 1920 px (формат 9:16), JPG или PNG. Лицо или главный объект держите в верхней части.</p>
                {content.hero.bgMobile && <img src={content.hero.bgMobile} alt="" className="h-48 aspect-[9/16] object-cover rounded" />}
                <ImageUpload label="Загрузить фон" onUpload={upload} onDone={(url) => setHero({ bgMobile: url })} />
              </div>
            </div>
            <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
              <span className="block text-sm font-semibold">Логотип сайта</span>
              <p className="text-xs text-gray-400">PNG с прозрачным фоном, шириной от 600 px. На сайте логотип отображается белым цветом.</p>
              {content.hero.logo && <img src={content.hero.logo} alt="" className="h-16 w-auto object-contain bg-black rounded p-2" style={{ filter: "brightness(0) invert(1)" }} />}
              <ImageUpload label="Загрузить логотип" onUpload={upload} onDone={(url) => setHero({ logo: url })} />
            </div>
            <Field label="Ссылка на кнопку «Купить билет»">
              <Input className={inputCls} value={content.hero.ticketLink} onChange={(e) => setHero({ ticketLink: e.target.value })} />
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Хедлайнер">
                <Input className={inputCls} value={content.hero.headliner} onChange={(e) => setHero({ headliner: e.target.value })} />
              </Field>
              <Field label="Страна / подпись в скобках">
                <Input className={inputCls} value={content.hero.country} onChange={(e) => setHero({ country: e.target.value })} />
              </Field>
              <Field label="Дата">
                <Input className={inputCls} value={content.hero.date} onChange={(e) => setHero({ date: e.target.value })} />
              </Field>
              <Field label="Время">
                <Input className={inputCls} value={content.hero.time} onChange={(e) => setHero({ time: e.target.value })} />
              </Field>
            </div>
            <Field label="Организаторы">
              <Input className={inputCls} value={content.hero.partners} onChange={(e) => setHero({ partners: e.target.value })} />
            </Field>
            <Field label="Support (каждый артист с новой строки)">
              <Textarea
                rows={7}
                className={inputCls}
                value={content.hero.support.join("\n")}
                onChange={(e) => setHero({ support: e.target.value.split("\n") })}
              />
            </Field>
          </div>
        )}

        {tab === "gallery" && (
          <div className="space-y-4">
            <ImageUpload
              label="Добавить фото"
              onUpload={upload}
              onDone={(url) => setContent((c) => ({ ...c, gallery: [...c.gallery, url] }))}
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {content.gallery.map((src, i) => (
                <div key={src + i} className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40">
                  <img src={src} alt="" className="w-full aspect-square object-cover" />
                  <div className="absolute top-1 left-1 text-[10px] bg-black/70 px-1.5 py-0.5 rounded">{i + 1}</div>
                  <div className="absolute bottom-1 right-1 flex gap-1">
                    <button className="w-7 h-7 rounded bg-black/70 hover:bg-black flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, gallery: move(c.gallery, i, -1) }))}>
                      <Icon name="ArrowLeft" size={14} />
                    </button>
                    <button className="w-7 h-7 rounded bg-black/70 hover:bg-black flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, gallery: move(c.gallery, i, 1) }))}>
                      <Icon name="ArrowRight" size={14} />
                    </button>
                    <button className="w-7 h-7 rounded bg-red-600/80 hover:bg-red-600 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, gallery: c.gallery.filter((_, k) => k !== i) }))}>
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "artists" && (
          <div className="space-y-4">
            {content.artists.map((a, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-orbitron text-sm">{a.name || "Новый артист"}</span>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, artists: move(c.artists, i, -1) }))}>
                      <Icon name="ArrowUp" size={14} />
                    </button>
                    <button className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, artists: move(c.artists, i, 1) }))}>
                      <Icon name="ArrowDown" size={14} />
                    </button>
                    <button className="w-8 h-8 rounded bg-red-600/80 hover:bg-red-600 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, artists: c.artists.filter((_, k) => k !== i) }))}>
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  {a.img && <img src={a.img} alt="" className="w-20 h-28 object-cover object-top rounded" />}
                  <div className="flex-1">
                    <ImageUpload label="Загрузить фото" onUpload={upload} onDone={(url) => updateArtist(i, { img: url })} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Имя"><Input className={inputCls} value={a.name} onChange={(e) => updateArtist(i, { name: e.target.value })} /></Field>
                  <Field label="Подпись"><Input className={inputCls} value={a.desc} onChange={(e) => updateArtist(i, { desc: e.target.value })} /></Field>
                </div>
                <Field label="Жанры"><Input className={inputCls} value={a.genres} onChange={(e) => updateArtist(i, { genres: e.target.value })} /></Field>
                <div className="grid sm:grid-cols-3 gap-3">
                  <Field label="Telegram"><Input className={inputCls} value={a.telegram} onChange={(e) => updateArtist(i, { telegram: e.target.value })} /></Field>
                  <Field label="SoundCloud"><Input className={inputCls} value={a.soundcloud} onChange={(e) => updateArtist(i, { soundcloud: e.target.value })} /></Field>
                  <Field label="Instagram"><Input className={inputCls} value={a.instagram} onChange={(e) => updateArtist(i, { instagram: e.target.value })} /></Field>
                </div>
              </div>
            ))}
            <Button variant="outline" onClick={() => setContent((c) => ({ ...c, artists: [...c.artists, { ...EMPTY_ARTIST }] }))}>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить артиста
            </Button>
          </div>
        )}

        {tab === "mixes" && (
          <div className="space-y-4">
            {content.mixes.map((m, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-orbitron text-sm">Микс {i + 1}</span>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, mixes: move(c.mixes, i, -1) }))}>
                      <Icon name="ArrowUp" size={14} />
                    </button>
                    <button className="w-8 h-8 rounded bg-white/5 hover:bg-white/10 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, mixes: move(c.mixes, i, 1) }))}>
                      <Icon name="ArrowDown" size={14} />
                    </button>
                    <button className="w-8 h-8 rounded bg-red-600/80 hover:bg-red-600 flex items-center justify-center" onClick={() => setContent((c) => ({ ...c, mixes: c.mixes.filter((_, k) => k !== i) }))}>
                      <Icon name="Trash2" size={14} />
                    </button>
                  </div>
                </div>
                <Field label="Название"><Input className={inputCls} value={m.title} onChange={(e) => updateMix(i, { title: e.target.value })} /></Field>
                <Field label="Описание"><Textarea rows={2} className={inputCls} value={m.desc} onChange={(e) => updateMix(i, { desc: e.target.value })} /></Field>
                <Field label="Ссылка на SoundCloud"><Input className={inputCls} value={m.url} onChange={(e) => updateMix(i, { url: e.target.value })} /></Field>
              </div>
            ))}
            <Button variant="outline" onClick={() => setContent((c) => ({ ...c, mixes: [...c.mixes, { ...EMPTY_MIX }] }))}>
              <Icon name="Plus" size={16} className="mr-2" />
              Добавить микс
            </Button>
          </div>
        )}

        {tab === "about" && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <span className="block text-sm font-semibold">Фото рядом с текстом «О нас»</span>
                <p className="text-xs text-gray-400">Горизонтальное фото от 1200 px по ширине, JPG или PNG.</p>
                {content.about.imgTeam && <img src={content.about.imgTeam} alt="" className="w-full max-h-48 object-cover rounded" />}
                <ImageUpload label="Загрузить фото" onUpload={upload} onDone={(url) => setAbout({ imgTeam: url })} />
              </div>
              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <span className="block text-sm font-semibold">Фото рядом с историей</span>
                <p className="text-xs text-gray-400">Вертикальное фото 3:4, например 1200 × 1600 px, JPG или PNG.</p>
                {content.about.imgHistory && <img src={content.about.imgHistory} alt="" className="h-48 aspect-[3/4] object-cover rounded" />}
                <ImageUpload label="Загрузить фото" onUpload={upload} onDone={(url) => setAbout({ imgHistory: url })} />
              </div>
            </div>
            <Field label="Текст «О нас» (абзацы разделяйте пустой строкой)">
              <Textarea
                rows={12}
                className={inputCls}
                defaultValue={content.about.intro.join("\n\n")}
                onChange={(e) => setAbout({ intro: paragraphs(e.target.value) })}
              />
            </Field>
            <Field label="Заголовок второго блока">
              <Input className={inputCls} value={content.about.historyTitle} onChange={(e) => setAbout({ historyTitle: e.target.value })} />
            </Field>
            <Field label="Текст истории (абзацы разделяйте пустой строкой)">
              <Textarea
                rows={12}
                className={inputCls}
                defaultValue={content.about.history.join("\n\n")}
                onChange={(e) => setAbout({ history: paragraphs(e.target.value) })}
              />
            </Field>
          </div>
        )}

        {tab === "contacts" && (
          <div className="space-y-4">
            {content.contacts.items.map((it, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/10 rounded-xl p-4 space-y-3">
                <span className="font-orbitron text-sm">{it.label}</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Field label="Текст на сайте"><Input className={inputCls} value={it.value} onChange={(e) => updateContact(i, { value: e.target.value })} /></Field>
                  <Field label="Ссылка"><Input className={inputCls} value={it.href} onChange={(e) => updateContact(i, { href: e.target.value })} /></Field>
                </div>
              </div>
            ))}
            <Field label="Копирайт в подвале">
              <Input className={inputCls} value={content.contacts.copyright} onChange={(e) => setContacts({ copyright: e.target.value })} />
            </Field>
            <Field label="Реквизиты в подвале">
              <Input className={inputCls} value={content.contacts.legal} onChange={(e) => setContacts({ legal: e.target.value })} />
            </Field>
          </div>
        )}

        <div className="sticky bottom-0 py-4 bg-gradient-to-t from-[#141414] via-[#141414] to-transparent">
          <Button onClick={() => save(tab)} disabled={saving} className="w-full sm:w-auto">
            {saving ? "Сохраняю..." : "Сохранить раздел"}
          </Button>
        </div>
      </main>
    </div>
  );
}
