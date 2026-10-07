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

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  /** Bakış açısı: firma, fuar veya sektör bilgisi vermeden tasarım ve pazarlama kararı. */
  insight: string;
  tags: string[];
  images: ProjectImage[];
}

// Proje vitrini. Müşteri gizliliği gereği firma adı, fuar, sektör ve tarih bilgisi yok;
// görsellerdeki logolar bulanıklaştırıldı (kaynak: "diğer projeler" klasörü ve firma sunumları).
export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "01",
    title: "İki katlı prestij stantı",
    insight:
      "Ağır ve prestijli bir duruş hedeflendi. Ürünler ışıklı kaidelerde sergi gibi sunuldu, üst kat görüşmelere ayrıldı. Aynı brief için farklı yönler birlikte değerlendirildi.",
    tags: ["Çift katlı", "Ürün sergisi", "Alternatif yönler"],
    images: [
      { src: "/images/projeler/proje-01-1.webp", width: 1600, height: 899 },
      { src: "/images/projeler/proje-01-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-01-3.webp", width: 1600, height: 899 },
      { src: "/images/projeler/proje-01-4.webp", width: 1600, height: 899 },
    ],
  },
  {
    id: "02",
    title: "Koyu zemin, kırmızı ışık hattı",
    insight:
      "Mevcut stant yeniden ele alındı. Renk kullanımı ve ürün teşhiri, geri bildirimlerle revize edilerek son tasarıma ulaşıldı.",
    tags: ["Revizyon", "Ürün teşhiri", "Işık kurgusu"],
    images: [
      { src: "/images/projeler/proje-02-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-02-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-02-3.webp", width: 1600, height: 1022 },
    ],
  },
  {
    id: "03",
    title: "Kavisli kanopi, yeşil tavan",
    insight:
      "Geniş ada stantta iki girişi tek bir akışta birleştiren kavisli form. Karşılama, görüşme ve dinlenme alanları aynı eksende buluşuyor.",
    tags: ["Ada stant", "Ziyaretçi akışı", "LED duvar"],
    images: [
      { src: "/images/projeler/proje-03-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-03-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-03-3.webp", width: 1600, height: 900 },
    ],
  },
  {
    id: "04",
    title: "Marka rengiyle çerçevelenen köşe",
    insight:
      "Marka rengi taşıyıcı çerçevelere dönüştü; stant iki cepheden okunuyor. Tasarımcı seçiminde tasarım kalitesi ve maliyet birlikte karşılaştırıldı.",
    tags: ["Köşe stant", "Tasarımcı seçimi", "Maliyet karşılaştırması"],
    images: [
      { src: "/images/projeler/proje-04-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-04-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-04-3.webp", width: 1600, height: 900 },
    ],
  },
  {
    id: "05",
    title: "Doğal dokular, sakin bir zemin",
    insight:
      "Ahşap ve yeşil duvar sıcak bir atmosfer kuruyor. Ürün anlatımını dijital ekranlar üstlenirken alan görüşmeye açık kalıyor.",
    tags: ["Doğal malzeme", "Dijital anlatım"],
    images: [
      { src: "/images/projeler/proje-05-1.webp", width: 1600, height: 1035 },
    ],
  },
  {
    id: "06",
    title: "İki koridoru karşılayan V form",
    insight:
      "Köşe parselde iki yönden gelen ziyaretçiyi aynı noktada karşılayan V biçimli banko. Tavan bandı ve zemin ışığı uzaktan görünürlüğü artırıyor.",
    tags: ["Köşe parsel", "Uzaktan görünürlük", "Yerleşim planı"],
    images: [
      { src: "/images/projeler/proje-06-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-06-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-06-3.webp", width: 1600, height: 900 },
    ],
  },
  {
    id: "07",
    title: "Uzun cephe, kesintisiz ışık",
    insight:
      "Koridor boyunca uzanan parselde tek bir ışık hattıyla bütünlük sağlandı. Ekran ve ışıklı görseller ziyaretçiyi stant boyunca taşıyor.",
    tags: ["Uzun cephe", "LED ekran", "Işık kurgusu"],
    images: [
      { src: "/images/projeler/proje-07-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-07-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-07-3.webp", width: 1600, height: 900 },
    ],
  },
  {
    id: "08",
    title: "Kompakt alanda net bir dil",
    insight:
      "Küçük metrekarede marka rengini cesurca kullanan iki ayrı yön. İkisinde de görüşme alanı öne alındı.",
    tags: ["Kompakt stant", "Alternatif yönler"],
    images: [
      { src: "/images/projeler/proje-08-1.webp", width: 993, height: 640 },
      { src: "/images/projeler/proje-08-2.webp", width: 1000, height: 647 },
    ],
  },
  {
    id: "09",
    title: "Ürün formundan mimari",
    insight:
      "Ürünün ambalajı standın tanınabilir mimari odağına dönüştü. Rakip stantların sunum ve ağırlama yaklaşımları incelenerek her gözlem bir tasarım kararına bağlandı.",
    tags: ["Rakip analizi", "Konsept form", "Canlı uygulama"],
    images: [
      { src: "/images/projeler/proje-09-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-09-2.webp", width: 1600, height: 900 },
    ],
  },
  {
    id: "10",
    title: "İki marka, tek stant",
    insight:
      "İki markayı kendi renk dilleriyle yan yana taşıyan ortak stant. Kapalı hazırlık alanı sayesinde ikram ön cepheyi kapatmıyor; yönetim görüşmeleri için ortak bir oda ayrıldı.",
    tags: ["Ortak stant", "Yerleşim planı", "Ekran ve lightbox planı"],
    images: [
      { src: "/images/projeler/proje-10-1.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-10-2.webp", width: 1600, height: 900 },
      { src: "/images/projeler/proje-10-3.webp", width: 1600, height: 900 },
    ],
  },
];

/** Ana sayfada gösterilen seçki. */
export const featuredProjectIds = [
  "01",
  "09",
  "03",
  "02",
  "10",
  "04",
  "07",
  "06",
];

export const projectsIntro = {
  title: "Her proje, kendi bakış açısıyla.",
  text: "Her katılımda markanın hedefinden yola çıkıyor, rakipleri inceliyor ve alternatif yönler geliştiriyoruz. Farklı ölçeklerde ve farklı ihtiyaçlarla hazırladığımız çalışmalardan bir seçki.",
  privacy:
    "Müşterilerimizin gizliliğine saygı gereği firma bilgilerine yer vermiyor, logoları göstermiyoruz. Daha fazla örneği görüşmede paylaşıyoruz.",
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
