// Ana sayfa metinleri ve sahne yapılandırması.
// Görsel kurgu LEYONEX_3D_Web_Tasarim_ve_Gelistirme_Brifi.md, metin yoğunluğu
// LEYONEX_Web_Icerik_Sadelestirme_Brifi.md esas alınır: her bölümde tek ana mesaj,
// sahne başına bir başlık ve tek cümle; iç yöntemler ve prosedürler yayımlanmaz.

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
  text: "Fuar katılımınızı stratejiden saha yönetimine kadar tek merkezden planlıyor ve koordine ediyoruz. Siz müşterilerinize odaklanırken hazırlık ve operasyon süreçlerini biz yönetiyoruz.",
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
    text: "Katılım amacınızı ve önceliklerinizi birlikte belirliyor, planı bunlara göre kuruyoruz.",
  },
  {
    id: "surec-tasarim",
    number: "02",
    phase: "Fuar öncesi",
    name: "Stant ve marka",
    title: "Markanız, doğru alana dönüşür.",
    text: "Markanıza ve fuar hedeflerinize uygun stant tasarım sürecini yönetiyoruz.",
  },
  {
    id: "surec-hizmetler",
    number: "03",
    phase: "Fuar öncesi",
    name: "Hizmet koordinasyonu",
    title: "Bütün detaylar aynı plana bağlanır.",
    text: "Farklı hizmet ve tedarikçileri tek iletişim noktası üzerinden koordine ediyoruz.",
  },
  {
    id: "surec-saha",
    number: "04",
    phase: "Fuar zamanı",
    name: "Saha yönetimi",
    title: "Fuar boyunca sahadayız.",
    text: "Kurulumdan karşılamaya, sahadaki hizmetlerin akışını takip ediyoruz.",
    dark: true,
  },
  {
    id: "surec-degerlendirme",
    number: "05",
    phase: "Fuar sonrası",
    name: "Değerlendirme",
    title: "Her katılım, bir sonrakine hazırlık.",
    text: "Hazırlık ve sahadan öğrendiklerimizi sonraki fuar için önerilere dönüştürüyoruz.",
  },
];

export const phaseLinks: { phase: Phase; href: string; stage: number }[] = [
  { phase: "Fuar öncesi", href: "#surec-hedef", stage: 1 },
  { phase: "Fuar zamanı", href: "#surec-saha", stage: 4 },
  { phase: "Fuar sonrası", href: "#surec-degerlendirme", stage: 5 },
];

export const workload = {
  title: "İş yükünüzü azaltın. Kontrolü koruyun.",
  text: "Kararlar sizde kalır; hazırlığın koordinasyonunu biz üstleniriz.",
  lanes: ["Tasarım", "Tedarik", "Onay", "Uygulama"],
};

export const servicesIntro = {
  title: "Operasyon sürecin bir parçası. Biz sürecin tamamını yönetiyoruz.",
  text: "Stratejiden değerlendirmeye kadar ihtiyacınız olan hizmetleri tek plan içinde yönetiyoruz.",
};

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
      "Açık ve dağınık bir düzenden, ürünlerin ışıklı kaidelerde öne çıktığı ve markanın uzaktan okunduğu bir standa.",
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
      "Marka rengi taşıyıcı çerçevelere dönüştü; stant iki cepheden okunur hale geldi.",
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
      "Prestijli bir duruş hedefiyle açık bir stant, iki katlı bir mimariye dönüştü.",
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
      "Düz bir cepheden, iki girişi tek akışta birleştiren kavisli bir forma.",
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
  text: "Dört projede önceki yıldan alternatiflere ve sonuca uzanan tasarım yolculuğu.",
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

// Çalışma biçimi: kısa süreç özeti ve çalışma modelleri. Yöntem ayrıntısı yayımlanmaz.
export const method = {
  title: "Fuar öncesinden fuar sonrasına.",
  steps: [
    {
      title: "Fuar öncesi",
      text: "Hedeflerinizi netleştiriyor, hazırlık sürecinizi planlıyoruz.",
    },
    {
      title: "Fuar zamanı",
      text: "Sahadaki hizmetleri ve operasyon akışını koordine ediyoruz.",
    },
    {
      title: "Fuar sonrası",
      text: "Süreci değerlendiriyor, gelişim önerileri sunuyoruz.",
    },
  ],
  models: [
    { title: "Tek hizmet", text: "Örneğin yalnızca stant tasarımı." },
    {
      title: "Seçili hizmetler",
      text: "Örneğin stant, otel ve dijital kayıt.",
    },
    {
      title: "Uçtan uca yönetim",
      text: "Stratejiden fuar sonrası değerlendirmeye.",
    },
  ],
  modelsNote: "Kapsamı ve bütçeyi baştan birlikte netleştiririz.",
};

export const crema = {
  title: "Ziyaretçi kaydı, dijital düzende.",
  text: "CReMa, fuardaki ziyaretçi bilgilerinin dijital ortamda düzenli biçimde kaydedilmesini destekler. Birlikte çalıştığımız firmalara fuar süresince ücretsiz sunulur.",
  href: "/hizmetler/fuar-ziyaretci-kayit-sistemi",
};

export const contact = {
  title: "Bir sonraki fuarınızı birlikte planlayalım.",
  /** Form üzerindeki kısa açıklama (tüm ilk temas formlarında aynı). */
  formIntro: "İletişim bilgilerinizi bırakın, fuar planınızı birlikte değerlendirelim.",
  email: "info@leyonex.com",
  phone: "+90 543 960 70 76",
  phoneHref: "tel:+905439607076",
  linkedin: "https://www.linkedin.com/company/leyonex-expo/",
};
