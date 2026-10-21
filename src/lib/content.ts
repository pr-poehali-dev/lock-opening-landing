export const CONTENT_URL = "https://functions.poehali.dev/0a9ea054-da66-49b0-82db-7beeb03ae98e";

const B = "https://cdn.poehali.dev/projects/998b3fcd-e06e-44c1-928c-697384025963/bucket/";

export interface Hero {
  headliner: string;
  country: string;
  date: string;
  time: string;
  partners: string;
  support: string[];
  ticketLink: string;
}

export interface Artist {
  name: string;
  desc: string;
  genres: string;
  img: string;
  telegram: string;
  soundcloud: string;
  instagram: string;
}

export interface Mix {
  title: string;
  desc: string;
  url: string;
}

export interface SiteContent {
  hero: Hero;
  gallery: string[];
  artists: Artist[];
  mixes: Mix[];
}

export const DEFAULT_CONTENT: SiteContent = {
  hero: {
    headliner: "Eichenbaum",
    country: "Argentina",
    date: "10 октября, суббота",
    time: "23:00–06:00",
    partners: "Port Mirage × Progressia",
    support: ["K LOVESKI", "JOMOSS", "SAZONOVA", "AKIN K", "CHELAKHOV", "AGWA", "ROMAN LISOV"],
    ticketLink: "https://spb.qtickets.events/261521-port-mirage-x-progressia-eichenbaum-argentina",
  },
  gallery: [
    "7ca6771f-58af-4ada-b4b1-00308ed9622a.jpg",
    "57f4a0fd-6714-4b1d-ac6c-51b35cb7149f.jpg",
    "2bd13234-1087-4b0a-83b7-c571e8a2c289.jpg",
    "3d66b5c6-182e-4918-bccf-7d350fefcaeb.jpg",
    "e05d9374-018b-49da-afa6-af355de0e824.jpg",
    "04e42c3f-6cc2-42af-8e76-4a2c1130c5bb.jpg",
    "a952389c-d1c5-45fd-b4ef-f03bcad10efe.jpg",
    "77548b72-11e4-4cc5-9278-e4ee20e06e5d.jpg",
    "b90acb54-6aa9-4dd9-a36e-5818d9e09257.jpg",
    "afffa5be-0c80-4238-bc72-96b201a274ab.jpg",
    "2be0d717-ce27-46c9-8832-6056b25daf9c.jpg",
    "fd1c6ead-798a-4227-bd54-bcbc7a1a564f.jpg",
    "56668caf-c477-4286-a90a-8f2a4e458759.jpg",
    "4ab7ad9f-bef6-4f4d-a831-368fd2fb7d59.jpg",
    "3cbaf04c-7a3f-4e20-b416-281d66eb2e19.jpg",
    "43cef239-f04c-4a4d-8d8a-76dbbfde76a7.jpg",
    "5d563941-a100-4ccf-ace9-b1dab1a3706b.jpg",
    "44e53226-989a-4aa7-90cb-6264ae203522.jpg",
    "0267de83-07d3-48c8-8def-dd525bc675a7.jpg",
    "b293c935-86f7-4331-bce6-91f62f4ed5e8.jpg",
    "4093a7cd-460b-4136-88f5-f3b55c550ae4.jpg",
    "9928723c-7447-4288-b61f-3316798876b6.jpg",
    "0d80b748-fec4-4821-9b8a-6757094a6b1e.jpg",
  ].map((f) => B + f),
  artists: [
    {
      name: "Jomoss",
      desc: "Со-основатель и резидент Port Mirage",
      genres: "Progressive house / Deep house / Hypnotic house",
      img: B + "34f6fbf0-8277-48ae-943c-b38536d29727.png",
      telegram: "https://t.me/+knfmOhr7twFiNmMy",
      soundcloud: "https://soundcloud.com/jomossmusic",
      instagram: "https://www.instagram.com/jomossmusic",
    },
    {
      name: "Melaniya",
      desc: "Со-основатель и резидент Port Mirage",
      genres: "Progressive house / Deep house / Classic house",
      img: B + "90d920a6-5b51-4d66-9d16-319bbe5597d4.JPG",
      telegram: "https://t.me/melaniyaviolin",
      soundcloud: "https://on.soundcloud.com/sPPgsBt66oaytPkPv4",
      instagram: "https://instagram.com/milenamelaniya",
    },
    {
      name: "Altayef",
      desc: "Со-основатель и резидент Port Mirage",
      genres: "Organic House / Eclectic Organic / Desert Downtempo",
      img: B + "f0462185-e500-4cc7-8e76-9c7d9f2fb890.JPG",
      telegram: "https://t.me/Di_altayef",
      soundcloud: "https://soundcloud.com/altayef-music",
      instagram: "https://instagram.com/altayef_music",
    },
    {
      name: "SAZONOVA",
      desc: "Резидент Port Mirage",
      genres: "Progressive House / Deep House / Organic House",
      img: B + "79bd34b6-7660-4533-b4a4-5064d6d2eb30.jpg",
      telegram: "https://t.me/SAZONOVA_Dj",
      soundcloud: "https://soundcloud.com/sazonova_dj",
      instagram: "https://instagram.com/sazonova.dj",
    },
  ],
  mixes: [
    {
      url: "https://on.soundcloud.com/i3rjS45EbfzZBiEfnj",
      title: "Altayef \u22c6 Passing Fancies \u22c6 Dark Disco / Electroclash / Indie Dance",
      desc: "Very energetic, sensual and enveloping! Enjoy the journey ;)",
    },
    {
      url: "https://on.soundcloud.com/rcd0v88CrIn2fQB0tg",
      title: "INSOMNIA RADIOSHOW - SAZONOVA Guest Mix",
      desc: "Progressive House",
    },
    {
      url: "https://on.soundcloud.com/GoAZ09MfVOgSrzwjfT",
      title: "Melaniya - Live @ SD, Saint-Petersburg @ [16.05.2026]",
      desc: "By Melaniya is licensed under a Creative Commons License.",
    },
    {
      url: "https://on.soundcloud.com/cTX5XOSTGZGBp4SC6w",
      title: "Port Mirage 001 - Mixed by Jomoss",
      desc: "Music community from Saint-Petersburg, Russia",
    },
    {
      url: "https://on.soundcloud.com/hcIGpqLKLute4zrM6v",
      title: "Port Mirage 002 - Mixed by Melaniya",
      desc: "Music community from Saint-Petersburg, Russia",
    },
  ],
};
