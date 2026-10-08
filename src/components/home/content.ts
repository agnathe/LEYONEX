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
  title: "Operasyon sürecin bir parçası. Biz sürecin tamamını yönetiyoruz.",
  text: "Fuar katılımınızı daha profesyonel ve verimli yürütmenizi, iş yükünüzü azaltmanızı ve süreci yalnızca kontrol edip yönlendirmenizi sağlıyoruz; her yıl ayırdığınız bütçelere benzer bütçelerle. Firmanızla partner olarak çalışıyor, tüm ihtiyaçlarınıza çözüm buluyoruz.",
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

export interface EvolutionStep {
  label: string;
  image: ProjectImage;
}

export interface EvolutionProject {
  id: string;
  title: string;
  insight: string;
  steps: EvolutionStep[];
}

const img = (name: string, width: number, height: number): ProjectImage => ({
  src: `/images/projeler/${name}.webp`,
  width,
  height,
});

// "Alternatiflerden gerçeğe": önceki yıl tasarımından alternatiflere ve sonuca.
// Kaynak: "diğer projeler/Projelerin gösterimi" klasöründeki sunumlar.
export const evolutionProjects: EvolutionProject[] = [
  {
    id: "01",
    title: "Koyu zemin, kırmızı ışık hattı",
    insight:
      "Önceki yılın açık ve dağınık düzeni yeniden ele alındı. Üç alternatif yön üzerinden renk kullanımı ve ürün teşhiri geri bildirimlerle geliştirildi; sonuçta ürünler ışıklı kaidelerde, marka uzaktan okunur hale geldi.",
    steps: [
      { label: "Önceki yıl", image: img("donusum-01-onceki", 1600, 1020) },
      {
        label: "Alternatif 1",
        image: img("donusum-01-alternatif-1", 1600, 900),
      },
      {
        label: "Alternatif 2",
        image: img("donusum-01-alternatif-2", 1600, 1032),
      },
      {
        label: "Alternatif 3",
        image: img("donusum-01-alternatif-3", 1000, 647),
      },
      { label: "Sonuç", image: img("donusum-01-sonuc", 1600, 900) },
    ],
  },
  {
    id: "02",
    title: "Marka rengiyle çerçevelenen köşe",
    insight:
      "Önceki yılın tasarımı ve alternatif öneri; tasarım kalitesi, uygulama kapsamı ve maliyetle birlikte karşılaştırıldı. Marka rengi taşıyıcı çerçevelere dönüştü ve stant iki cepheden okunur oldu.",
    steps: [
      { label: "Önceki yıl", image: img("donusum-02-onceki", 1600, 900) },
      { label: "Alternatif", image: img("donusum-02-alternatif-1", 1600, 813) },
      { label: "Sonuç", image: img("donusum-02-sonuc", 1600, 900) },
    ],
  },
  {
    id: "03",
    title: "Açık stanttan iki katlı prestije",
    insight:
      "Firmanın fuardaki amacı prestijli ve ağır bir duruştu. Önceki yılın açık standı, alternatif çalışmaların ardından iki katlı bir mimariye dönüştü; logo okunurluğu ölçek, ışık ve konumla yeniden ele alındı.",
    steps: [
      { label: "Önceki yıl", image: img("donusum-03-onceki", 800, 800) },
      {
        label: "Alternatif 1",
        image: img("donusum-03-alternatif-1", 1600, 1035),
      },
      {
        label: "Alternatif 2",
        image: img("donusum-03-alternatif-2", 996, 641),
      },
      { label: "Sonuç", image: img("donusum-03-sonuc", 1600, 900) },
    ],
  },
  {
    id: "04",
    title: "Düz cepheden kavisli kanopiye",
    insight:
      "Önceki yılın düz cepheli düzeni yerine iki girişi tek bir akışta birleştiren kavisli bir form geliştirildi. Karşılama, görüşme ve dinlenme alanları aynı eksende buluştu; LED duvarlar ve yeşil tavan stanta kimlik kattı.",
    steps: [
      { label: "Önceki yıl", image: img("donusum-04-onceki", 1600, 904) },
      { label: "Sonuç", image: img("donusum-04-sonuc", 1600, 895) },
    ],
  },
];

export interface GalleryItem {
  title: string;
  image: ProjectImage;
  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Ürün galerisiyle L biçimli ada",
    image: img("galeri-01", 1600, 900),
    alt: "Ürün rafları, canlı uygulama alanı ve görüşme masalarıyla L biçimli ada stant tasarımı, kuşbakışı",
  },
  {
    title: "Uzun cephe, kesintisiz ışık",
    image: img("galeri-02", 1600, 1037),
    alt: "Mavi ışık hattı ve LED ekranlı uzun cepheli stant tasarımı",
  },
  {
    title: "Kompakt alanda net bir dil",
    image: img("galeri-03", 1000, 647),
    alt: "Kırmızı ve koyu gri tonlarda, görüşme alanı öne alınmış kompakt stant tasarımı",
  },
  {
    title: "Doğal dokular, sakin bir zemin",
    image: img("galeri-04", 1600, 1035),
    alt: "Ahşap, yeşil duvar ve dijital ekranlarla kurgulanmış stant tasarımı",
  },
];

export const projectsIntro = {
  title: "Alternatiflerden gerçeğe.",
  text: "Her projede önceki katılımı inceliyor, alternatif yönler geliştiriyor ve geri bildirimle sonuca ulaşıyoruz. Dört projede bu yolculuğun adımları.",
  galleryTitle: "Diğer çalışmalarımızdan.",
  galleryText:
    "Farklı ölçeklerde ve farklı ihtiyaçlarla hazırladığımız stant tasarımlarından bir seçki.",
  note: "Daha fazla örneği görüşmede paylaşıyoruz.",
  /** Stant görsellerinden önce gösterilir: paylaşılanın yalnızca tasarım tarafı olduğu. */
  disclosure: {
    title: "Burada gördüğünüz, çalışmamızın yalnızca stant tasarımı tarafı.",
    text: "Paylaşılan projeler stant tasarımına bakış açımızı gösterir. Her projenin arkasındaki çalışmanın tüm detayları yalnızca ilgili firmayla paylaşılır:",
    items: [
      "Firmanın ürünlerini incelediğimiz çalışmalar",
      "Rakip araştırmaları",
      "Markanın güçlü yönleri üzerine çalışmalar",
      "Standa ilgi oluşturacak özel attraction kurguları",
      "Pazarlama bakış açımız ve önerilerimiz",
    ],
  },
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
