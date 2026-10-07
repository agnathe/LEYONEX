// Ana sayfa metinleri ve sahne yapılandırması.
// Metinler LEYONEX_3D_Web_Tasarim_ve_Gelistirme_Brifi.md dosyasından alınmıştır.

export type HighlightKey =
  | "display"
  | "meeting"
  | "flow"
  | "hotel"
  | "transfer"
  | "reception"
  | "catering"
  | "print";

export type Phase = "Fuar öncesi" | "Fuar zamanı" | "Fuar sonrası";

export interface StageCopy {
  id: string;
  number: string;
  phase: Phase;
  name: string;
  title: string;
  text: string;
  dark?: boolean;
}

export const hero = {
  eyebrow: "Fuar süreç yönetimi",
  titleLines: ["Önce hedef.", "Sonra fuar."],
  /** Başlıkta kırmızı vurgulanan tek kelime (tasarım sistemi: bir vurgu, bir kelime). */
  accent: "hedef.",
  text: "Stratejiden hazırlığa, saha yönetiminden değerlendirmeye; fuar katılımınızı tek merkezden planlıyor ve yönetiyoruz.",
  primary: { label: "Fuarınızı birlikte planlayalım", href: "/teklif-al" },
  secondary: { label: "Süreci keşfedin", href: "#surec-hedef" },
};

export const stages: StageCopy[] = [
  {
    id: "surec-hedef",
    number: "01",
    phase: "Fuar öncesi",
    name: "Hedef ve strateji",
    title: "Her karar hedefinizden başlar.",
    text: "Katılım amacınızı, marka önceliklerinizi ve bütçe çerçevenizi birlikte netleştiririz. Hazırlık planı bu kararlarla şekillenir.",
  },
  {
    id: "surec-tasarim",
    number: "02",
    phase: "Fuar öncesi",
    name: "Tasarım ve hazırlık",
    title: "Markanız, doğru alana dönüşür.",
    text: "Stant tasarımını, ürün sunumunu ve ziyaretçi deneyimini aynı hedef etrafında kurgular; üretim ve hazırlık adımlarını koordine ederiz.",
  },
  {
    id: "surec-hizmetler",
    number: "03",
    phase: "Fuar öncesi",
    name: "Hizmet koordinasyonu",
    title: "Bütün detaylar aynı plana bağlanır.",
    text: "Konaklama, transfer, karşılama, ikram, baskı ve promosyon süreçlerini ortak takvimde birleştiririz.",
  },
  {
    id: "surec-saha",
    number: "04",
    phase: "Fuar zamanı",
    name: "Saha yönetimi",
    title: "Siz müşterilerinize odaklanın.",
    text: "Siz ziyaretçileriniz ve iş ilişkilerinizle ilgilenirken, sahadaki hizmet akışını ve operasyon ayrıntılarını takip ederiz.",
    dark: true,
  },
  {
    id: "surec-degerlendirme",
    number: "05",
    phase: "Fuar sonrası",
    name: "Değerlendirme",
    title: "Her katılım, bir sonraki için içgörü.",
    text: "Hazırlık ve saha sürecini değerlendirir, güçlü yönleri ve geliştirme alanlarını bir sonraki katılım için somut önerilere dönüştürürüz.",
  },
];

export const goalSteps = ["Hedef", "Öncelik", "Plan"];

export const designFocus: { key: HighlightKey; label: string }[] = [
  { key: "display", label: "Ürün görünürlüğü" },
  { key: "meeting", label: "Görüşme alanı" },
  { key: "flow", label: "Ziyaretçi akışı" },
];

export const coordinatedServices: {
  key: HighlightKey;
  label: string;
  anchor: string;
  href: string;
}[] = [
  {
    key: "hotel",
    label: "Konaklama",
    anchor: "Ekip hazırlık planı",
    href: "/hizmetler/otel-konaklama",
  },
  {
    key: "transfer",
    label: "Transfer",
    anchor: "Ekip varış noktası",
    href: "/hizmetler/ulasim-shuttle",
  },
  {
    key: "reception",
    label: "Karşılama / hostes",
    anchor: "Stant girişi",
    href: "/hizmetler/hostes-personel",
  },
  {
    key: "catering",
    label: "İkram",
    anchor: "Servis alanı",
    href: "/hizmetler/stand-ikramlari",
  },
  {
    key: "print",
    label: "Baskı / promosyon",
    anchor: "Marka sunum alanı",
    href: "/hizmetler/kurumsal-hediye",
  },
];

export const fieldStatus = ["Hazırlık", "Kontrol", "Uygulama"];

export const evaluationNotes = [
  "Hazırlık",
  "Saha akışı",
  "Geliştirme önerileri",
];

export const phaseLinks: { phase: Phase; href: string; stage: number }[] = [
  { phase: "Fuar öncesi", href: "#surec-hedef", stage: 1 },
  { phase: "Fuar zamanı", href: "#surec-saha", stage: 4 },
  { phase: "Fuar sonrası", href: "#surec-degerlendirme", stage: 5 },
];

export const workload = {
  title: "İş yükünüzü azaltın. Kontrolü koruyun.",
  text: "Fuar hazırlığı; tasarım kararları, tedarikçi görüşmeleri, revizyonlar ve onaylar arasında da zaman ister. LEYONEX bu adımları ortak bir plan içinde koordine eder; ekibinizin doğru kararlara odaklanmasını kolaylaştırır.",
  points: [
    "Tek merkezden koordinasyon.",
    "Açık sorumluluklar ve hazırlık takvimi.",
    "Bütçe ve uygulamada daha fazla kontrol.",
  ],
  lanes: ["Tasarım", "Tedarik", "Onay", "Uygulama"],
};

export const servicesIntro = {
  title: "Ayrıntılar birbirine bağlı. Yönetimi de öyle.",
  text: "Stant, ekip, konaklama, transfer ve saha hizmetlerini birbirinden bağımsız işler olarak bırakmayız. Hazırlıktan uygulamaya kadar aynı planın parçaları olarak ele alırız.",
};

// Yalnızca mevcut /hizmetler/[slug] sayfalarına bağlanır.
export const serviceGroups: {
  phase: Phase;
  items: { label: string; href: string }[];
}[] = [
  {
    phase: "Fuar öncesi",
    items: [
      {
        label: "Fuar danışmanlığı ve planlama",
        href: "/hizmetler/fuar-danismanligi",
      },
      {
        label: "Stant tasarımı ve üretim koordinasyonu",
        href: "/hizmetler/stand-tasarimi",
      },
      { label: "Otel ve konaklama", href: "/hizmetler/otel-konaklama" },
      { label: "Ulaşım ve transfer", href: "/hizmetler/ulasim-shuttle" },
      {
        label: "Kurumsal hediye ve promosyon",
        href: "/hizmetler/kurumsal-hediye",
      },
    ],
  },
  {
    phase: "Fuar zamanı",
    items: [
      {
        label: "Hostes ve stant personeli",
        href: "/hizmetler/hostes-personel",
      },
      { label: "Stant ikramları", href: "/hizmetler/stand-ikramlari" },
      { label: "Fotoğraf ve video", href: "/hizmetler/fotograf-video" },
      { label: "Akşam yemeği ve gala", href: "/hizmetler/aksam-yemegi-gala" },
    ],
  },
  {
    phase: "Fuar sonrası",
    items: [
      {
        label: "Süreç değerlendirmesi ve raporlama",
        href: "/hizmetler/raporlama-analiz",
      },
      {
        label: "Devlet desteği danışmanlığı",
        href: "/hizmetler/devlet-destegi-danismanligi",
      },
    ],
  },
];

export interface ReferenceImage {
  src: string;
  width: number;
  height: number;
  kind: "Saha uygulaması" | "Tasarım";
  label: string;
  alt: string;
}

// Referans galerisi: müşteri gizliliği gereği firma adı, logo ve fuar bilgisi gösterilmez.
// Görseller "diğer projeler" klasöründen logolar görünmeyecek şekilde kırpılarak üretildi.
export const references: ReferenceImage[] = [
  {
    src: "/images/referanslar/referans-01.webp",
    width: 1400,
    height: 787,
    kind: "Saha uygulaması",
    label: "Ağırlama alanı",
    alt: "Fuar stantında üstten görülen ağırlama alanı ve oturma grupları",
  },
  {
    src: "/images/referanslar/referans-02.webp",
    width: 1400,
    height: 787,
    kind: "Saha uygulaması",
    label: "Ürün sergisi",
    alt: "Işıklı kaideler üzerinde ürün sergisi, üstten görünüm",
  },
  {
    src: "/images/referanslar/referans-03.webp",
    width: 1400,
    height: 937,
    kind: "Saha uygulaması",
    label: "Üst kat görüşme alanı",
    alt: "Fuar salonuna bakan üst kat görüşme ve bekleme alanı",
  },
  {
    src: "/images/referanslar/referans-04.webp",
    width: 1159,
    height: 1439,
    kind: "Saha uygulaması",
    label: "Toplantı odası",
    alt: "Stant içindeki kapalı toplantı odası",
  },
  {
    src: "/images/referanslar/referans-05.webp",
    width: 1400,
    height: 1055,
    kind: "Tasarım",
    label: "Yerleşim planı",
    alt: "Ada stant yerleşim planı, üstten görünüm",
  },
  {
    src: "/images/referanslar/referans-06.webp",
    width: 1400,
    height: 1101,
    kind: "Tasarım",
    label: "Yerleşim planı",
    alt: "Köşe stant yerleşim planı, üstten görünüm",
  },
  {
    src: "/images/referanslar/referans-07.webp",
    width: 1243,
    height: 722,
    kind: "Tasarım",
    label: "Teknik yerleşim",
    alt: "Elektrik noktası işaretlenmiş stant yerleşim planı",
  },
  {
    src: "/images/referanslar/referans-08.webp",
    width: 1400,
    height: 564,
    kind: "Tasarım",
    label: "Görüşme masası",
    alt: "Stant içindeki görüşme masası detayı",
  },
  {
    src: "/images/referanslar/referans-09.webp",
    width: 1400,
    height: 531,
    kind: "Tasarım",
    label: "Bekleme alanı",
    alt: "Stant içindeki bekleme alanı detayı",
  },
];

/** Ana sayfada gösterilen seçki (saha ve tasarım karışık). */
export const featuredReferenceIndexes = [0, 4, 2, 1, 7, 3];

export const referencesIntro = {
  title: "Farklı sektörler. Aynı titizlik.",
  text: "Savunma ve havacılıktan elektronik ve haberleşmeye, yapı kimyasallarından endüstriyel üretime; farklı sektörlerden firmaların fuar süreçlerinde yer alıyoruz.",
  sectors: [
    "Savunma ve havacılık",
    "Elektronik ve haberleşme",
    "Yapı kimyasalları",
    "Endüstriyel üretim",
  ],
  privacy:
    "Müşterilerimizin gizliliğine saygı gereği firma ve fuar bilgilerine yer vermiyoruz.",
};

// Çalışma biçimi: LEYONEX firma sunumlarındaki yöntemden, firma adı verilmeden.
export const method = {
  title: "Her katılım aynı disiplinle hazırlanır.",
  text: "Hangi sektörde olursa olsun, çalışma aynı sırayla ilerler: önce hedef ve öncelikler, ardından tasarım ve tedarik, en sonunda sahadan öğrenilenler.",
  steps: [
    {
      title: "Amaçtan önceliğe",
      text: "Fuar katılım amaçlarını birlikte seçer, 100 puan üzerinden ağırlıklandırırız. Plan, en yüksek puanı alan önceliklere göre kurulur.",
    },
    {
      title: "Rakip ve çevre incelemesi",
      text: "Rakiplerin ürün sunumunu, stant konumunu ve komşuluğu inceleriz. Gözlenen her yaklaşım, firmanıza uygun bir tasarım kararına dönüşür.",
    },
    {
      title: "Alternatifli tasarım",
      text: "Önceki katılımı değerlendirir, alternatif tasarımlar hazırlar ve geri bildirimle final tasarıma ulaşırız. Marka görünürlüğü ölçek, ışık ve konumla ele alınır.",
    },
    {
      title: "Tek iletişim noktası",
      text: "Örnek bir katılımda otel, stant tasarımı ve kurulumu, temizlik, fuar videosu ve promosyon dahil 11 tedarikçi tek noktadan koordine edildi.",
    },
    {
      title: "Gelişim raporu",
      text: "Fuarı izleyen hafta, saha gözlemlerini ve iyi uygulamaları 35–45 sayfalık bir raporla sunarız. Her madde için öncelik, sorumlu ve tarih belirlenir.",
    },
  ],
  models: [
    { title: "Tek hizmet", text: "Örneğin yalnızca stant tasarımı." },
    {
      title: "Seçili hizmetler",
      text: "Örneğin stant, otel ve dijital kayıt.",
    },
    { title: "Uçtan uca yönetim", text: "Stratejiden fuar sonrası rapora." },
  ],
  modelsNote: "Kapsamı ve bütçeyi baştan birlikte netleştiririz.",
};

export const crema = {
  title: "Ziyaretçi kaydı, dijital düzende.",
  text: "CReMa ile fuardaki ziyaretçi kayıtlarını dijital ortamda düzenli biçimde toplamanızı destekleriz. Birlikte çalıştığımız firmalara fuar süresince ücretsiz sunulur.",
  steps: [
    "Ziyaretçinin kartvizitinin fotoğrafı çekilir.",
    "Görüşmeye en fazla 60 saniyelik sesli not eklenir.",
    "Yazılım kartviziti ve notu düzenli bir kayda dönüştürür, nottaki görevleri ayırır.",
    "Kayıtlar firmanıza teslim edilir; müşteriye geri dönüşü ekibiniz yürütür.",
  ],
};

export const contact = {
  title: "Bir sonraki fuarınızı birlikte planlayalım.",
  text: "Katılmayı düşündüğünüz fuarı ve önceliklerinizi paylaşın. İhtiyaçlarınıza uygun süreci birlikte değerlendirelim.",
  email: "info@leyonex.com",
  phone: "+90 543 960 70 76",
  phoneHref: "tel:+905439607076",
};
