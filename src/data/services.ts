// Hizmetler — tek kaynak. /hizmetler, /hizmetler/[slug], ana sayfa hizmet bölümü ve footer buradan beslenir.
// Konumlandırma: LEYONEX fuar operasyonu değil, A'dan Z'ye fuar süreç yönetimi yapar.
// Her hizmet üç faydaya bağlanır: daha profesyonel ve verimli katılım, daha az iş yükü, benzer bütçe.

export type ServicePhase = "fuar-oncesi" | "fuar-zamani" | "fuar-sonrasi";

export interface Service {
  id: number;
  title: { tr: string; en: string };
  slug: string;
  phase: ServicePhase;
  shortDescription: { tr: string; en: string };
  fullDescription: { tr: string; en: string };
  /** Sayfanın H1'i: arama niyetini doğal biçimde taşır. */
  h1: string;
  /** <title> (marka şablonu layout'tan eklenir). */
  seoTitle: string;
  metaDescription: string;
  heroText: string;
  processText: string;
  /** Sayfanın ilk bölümünde yer alan doğrudan cevap (GEO). */
  geoBlock: { question: string; answer: string };
  /** Üç fayda, bu hizmete özel: [profesyonellik ve verim, iş yükü, bütçe]. */
  benefits: [string, string, string];
  /** Adım adım işleyiş (varsa). */
  steps?: { title: string; text: string }[];
  /** Birlikte çalışılan firmalara ücretsiz sunulur. */
  free?: boolean;
  pricingNote?: string;
  ctaText: string;
  icon: string;
  order: number;
  /** İç bağlantı ağı: ilgili hizmet slug'ları. */
  related: string[];
  subServices: Array<{
    name: { tr: string; en: string };
    description: { tr: string; en: string };
  }>;
}

export const phaseInfo: Record<ServicePhase, { label: string; intro: string }> =
  {
    "fuar-oncesi": {
      label: "Fuar öncesi",
      intro:
        "Hedef, strateji, tasarım, tedarik ve davet: fuarın sonucu büyük ölçüde burada belirlenir.",
    },
    "fuar-zamani": {
      label: "Fuar zamanı",
      intro:
        "Saha, ekip, ikram ve ziyaretçi kaydı: siz müşterilerinize odaklanırken akışı biz yönetiriz.",
    },
    "fuar-sonrasi": {
      label: "Fuar sonrası",
      intro:
        "Gözlem, gelişim raporu ve destekler: her fuar bir sonrakinin hazırlık dosyasına dönüşür.",
    },
  };

/** Firmalara sunduğumuz üç fayda. Tüm hizmet sayfalarında tekrar vurgulanır. */
export const coreBenefits = [
  {
    title: "Daha profesyonel, daha verimli katılım",
    text: "Fuar katılımınızı hedef, strateji ve ölçülebilir önceliklerle planlıyoruz. Her kalem fuardan beklediğiniz sonuca hizmet eder; verim her fuarda artar.",
  },
  {
    title: "Daha az iş yükü",
    text: "Tedarikçi seçimi, koordinasyon, takip ve saha akışını biz üstleniyoruz. Siz yalnızca süreci kontrol eder ve yönlendirirsiniz.",
  },
  {
    title: "Benzer bütçe, daha doğru harcama",
    text: "Her yıl ayırdığınız bütçeye benzer bir bütçeyle çalışıyoruz. Gereksiz maliyetleri azaltıyor, kalem maliyetlerini ve harcama odağını optimize ediyoruz.",
  },
] as const;

export const services: Service[] = [
  // ─── Fuar öncesi ──────────────────────────────────────────────────────────
  {
    id: 13,
    title: {
      tr: "Strateji ve Kurumsal Hazırlık",
      en: "Strategy & Corporate Preparation",
    },
    slug: "fuar-strateji-kurumsal-hazirlik",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Katılım stratejisi, ölçülebilir hedefler, markanın öne çıkan yönleri ve hero ürünler.",
      en: "Participation strategy, measurable goals, brand differentiators and hero products.",
    },
    fullDescription: {
      tr: "Fuarda başarıyı belirleyen kararların çoğu stant kurulmadan önce verilir. Fuara hangi kaynakla, hangi kurguyla ve hangi önceliklerle katılınacağı; yeni pazar, distribütör veya marka bilinirliği gibi amaçların nasıl ölçüleceği; markayı ayrıştıran başlıkların sahada herkesin aynı şekilde anlattığı tek bir dile nasıl dönüşeceği bu aşamada netleşir.",
      en: "Most decisions that determine success at a fair are made before the stand is built.",
    },
    h1: "Fuar Stratejisi ve Kurumsal Hazırlık Danışmanlığı",
    seoTitle: "Fuar Stratejisi ve Kurumsal Hazırlık Danışmanlığı",
    metaDescription:
      "Fuar katılım stratejisi, ölçülebilir hedefler, markanın öne çıkan yönleri ve hero ürünler: markanız sahaya çıkmadan ne anlatacağını netleştiriyoruz.",
    heroText:
      "Markanız sahaya çıkmadan önce fuardan ne beklediğini ve neyi nasıl anlatacağını birlikte netleştiriyoruz. Stant, ekip ve iletişim bu kararların üzerine kurulur.",
    processText:
      "Önce fuar katılım amaçlarınızı listeliyor ve 100 puan üzerinden ağırlıklandırıyoruz. En yüksek puanı alan öncelikler; stant kurgusunu, ürün seçimini, ekip görevlerini ve davet planını belirler. Ardından markanızı rakiplerinden ayıran başlıkları sadeleştiriyor, stantta ve görüşmelerde öne çıkacak hero ürünleri seçiyor; bu ürünlerin görsel ve içerik olarak nasıl sunulacağını planlıyoruz.",
    steps: [
      {
        title: "Katılım stratejisi",
        text: "Fuara hangi kaynakla, hangi kurguyla ve hangi önceliklerle katılınacağı belirlenir.",
      },
      {
        title: "Katılım amaçları",
        text: "Yeni pazar, distribütör, marka bilinirliği: ölçülebilir hedefler tanımlanır.",
      },
      {
        title: "Markanın öne çıkan yönleri",
        text: "Markayı ayrıştıran başlıklar, sahada herkesin aynı şekilde anlattığı tek bir dile dönüşür.",
      },
      {
        title: "Hero ürünler",
        text: "Stantta ve görüşmelerde öne çıkacak ürünler seçilir; nasıl sunulacakları görsel ve içerik olarak belirlenir.",
      },
    ],
    geoBlock: {
      question: "Fuar stratejisi ve kurumsal hazırlık nedir?",
      answer:
        "Fuar stratejisi ve kurumsal hazırlık; bir firmanın fuara katılım amaçlarını ölçülebilir önceliklere dönüştürdüğü, markasını ayrıştıran mesajları ve stantta öne çıkacak ürünleri belirlediği hazırlık çalışmasıdır. Stant tasarımı, ekip görevleri ve davet planı bu kararların üzerine kurulur.",
    },
    benefits: [
      "Ekibinizin tamamı sahada aynı hedefe ve aynı mesaja odaklanır; katılım dağınık değil, planlı ilerler.",
      "Hedef ve önceliklerin çerçevesini biz hazırlarız; siz yalnızca karar verir ve onaylarsınız.",
      "Bütçe, en yüksek önceliğe sahip amaçlara yönlenir; amaca hizmet etmeyen kalemler baştan elenir.",
    ],
    free: true,
    ctaText: "Fuar hedeflerinizi birlikte önceliklendirelim",
    icon: "target",
    order: 1,
    related: ["fuar-danismanligi", "stand-tasarimi", "fuar-davet-yonetimi"],
    subServices: [],
  },
  {
    id: 9,
    title: { tr: "Fuar Danışmanlığı", en: "Fair Consulting" },
    slug: "fuar-danismanligi",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Doğru fuar seçimi, katılım modeli ve toplam katılım bütçesinin planlanması.",
      en: "Right fair selection, participation model and total participation budget planning.",
    },
    fullDescription: {
      tr: "Bir fuarın büyük veya popüler olması tek başına şirketiniz için doğru fuar olduğu anlamına gelmez. Hedef pazar, ziyaretçi profili, karar verici yoğunluğu, rakiplerin katılımı, ülke ve sektör dinamikleri, toplam katılım maliyeti ve fuardan beklenen sonuç birlikte değerlendirilmelidir.",
      en: "A fair being large or popular does not alone mean it is the right fair for your company.",
    },
    h1: "Fuar Danışmanlığı: Doğru Fuardan Doğru Katılım Modeline",
    seoTitle: "Fuar Danışmanlığı ve Katılım Planlaması",
    metaDescription:
      "Hedef pazar, ziyaretçi profili ve bütçenize göre doğru fuarı seçiyor; stant, ekip, seyahat ve tanıtım kalemleriyle toplam katılım bütçesini planlıyoruz.",
    heroText:
      "Fuara katılmak bir organizasyon kararı değil, yatırım kararıdır. Hangi fuara, hangi hedefle, ne büyüklükte bir stantla ve hangi ekiple katılmanız gerektiğini birlikte planlıyoruz.",
    processText:
      "Sürece şirketinizi ve fuardan beklentinizi anlayarak başlıyoruz. Hedef ülke ve sektörleri, müşteri profilinizi, bütçenizi ve geçmiş fuar deneyiminizi değerlendiriyoruz. Ardından alternatif fuarları karşılaştırıyor; stant alanından personel planına, konaklamadan ulaşım ve promosyona kadar toplam katılım bütçesini kalem kalem oluşturuyoruz. Amacımız fuara katılmanızı sağlamak değil; fuar sonunda neyi başarı sayacağınızı fuar başlamadan belirlemektir.",
    steps: [
      {
        title: "İhtiyaç analizi",
        text: "Hedef pazar, ürün grubu ve beklenen sonuç netleşir.",
      },
      {
        title: "Fuar ve pazar değerlendirmesi",
        text: "Alternatif fuarlar ziyaretçi profili ve rakip katılımıyla karşılaştırılır.",
      },
      {
        title: "Bütçe ve katılım modeli",
        text: "Stant, ekip, seyahat ve tanıtım kalemleri tek bütçede toplanır.",
      },
      {
        title: "Uygulama planı",
        text: "Takvim, sorumluluklar ve başarı ölçütleri belirlenir.",
      },
    ],
    geoBlock: {
      question: "Fuar danışmanlığı ne sağlar?",
      answer:
        "Fuar danışmanlığı, bir şirketin hangi fuara neden katılması gerektiğini belirler ve katılım bütçesini stant, personel, seyahat ve tanıtım kalemleriyle birlikte planlar. Böylece fuar katılımı bağımsız harcamalardan oluşan bir gider olmaktan çıkar, hedefleri belli bir pazarlama ve iş geliştirme projesine dönüşür.",
    },
    benefits: [
      "Fuar seçimi popülerliğe değil, hedef pazara ve ziyaretçi profiline göre yapılır.",
      "Fuar araştırması, karşılaştırma ve bütçe tablosu bizden; siz yalnızca seçenekler arasından karar verirsiniz.",
      "Toplam katılım bütçesi baştan kalem kalem görünür olur; sürpriz maliyetler azalır.",
    ],
    ctaText: "Katılmayı düşündüğünüz fuarı birlikte değerlendirelim",
    icon: "lightbulb",
    order: 2,
    related: [
      "fuar-strateji-kurumsal-hazirlik",
      "stand-tasarimi",
      "devlet-destegi-danismanligi",
    ],
    subServices: [],
  },
  {
    id: 1,
    title: {
      tr: "Stand Tasarımı & Kurulumu",
      en: "Stand Design & Installation",
    },
    slug: "stand-tasarimi",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Alternatifli stant tasarımı; tasarımcı ve üretici seçimi, üretim ve kurulumun koordinasyonu.",
      en: "Stand design with alternatives; designer and builder selection, production and installation coordination.",
    },
    fullDescription: {
      tr: "Stant tasarımı yalnızca estetik değil; ziyaretçi akışı, ürün sergileme ve görüşme kalitesi için stratejik bir alandır. Marka kimliği, metrekare kullanımı, toplantı alanları, depolama, dijital ekranlar ve uygulama detayları birlikte ele alınır. Üretim, nakliye, kurulum ve söküm tek koordinasyon akışıyla yönetilir.",
      en: "Stand design is not only aesthetic but a strategic area for visitor flow, product display and meeting quality.",
    },
    h1: "Fuar Stand Tasarımı ve Kurulum Yönetimi",
    seoTitle: "Fuar Stand Tasarımı ve Kurulum Yönetimi",
    metaDescription:
      "Alternatif stant tasarımları hazırlıyor; tasarım kalitesi, uygulama kapsamı ve maliyeti karşılaştırarak üretim ve kurulumu sizin adınıza yönetiyoruz.",
    heroText:
      "Standınız, ziyaretçinin markanızla karşılaştığı fiziksel deneyimdir. Önceki katılımınızı inceliyor, alternatif yönler geliştiriyor ve doğru tasarımcı ile üreticiyi seçerek standınızı sahaya taşıyoruz.",
    processText:
      "Standın metrekaresine değil, standın ne yapması gerektiğine odaklanıyoruz. Ürün sergilenecek mi, demo yapılacak mı, kapalı görüşme alanı gerekiyor mu, kaç kişi aynı anda çalışacak? Bu ihtiyaçlardan hareketle alternatif tasarımlar hazırlıyor, geri bildirimle son tasarıma ulaşıyoruz. Beklentiye uygun tasarımcı ve üreticiyi seçerken tasarım kalitesini, uygulama kapsamını ve fiyatı birlikte karşılaştırıyoruz. Onay sonrasında üretim, lojistik, kurulum ve söküm takvimini koordine ediyoruz.",
    steps: [
      {
        title: "Önceki katılımın değerlendirilmesi",
        text: "Mevcut stant, ziyaretçi akışı ve marka görünürlüğü incelenir.",
      },
      {
        title: "Alternatif tasarımlar",
        text: "Farklı yönler hazırlanır, geri bildirimle son tasarıma ulaşılır.",
      },
      {
        title: "Tasarımcı ve üretici seçimi",
        text: "Tasarım kalitesi, uygulama kapsamı ve fiyat birlikte karşılaştırılır.",
      },
      {
        title: "Üretim ve kurulum takibi",
        text: "Teknik dosya, üretim, nakliye, kurulum ve söküm koordine edilir.",
      },
    ],
    geoBlock: {
      question: "Fuar stand tasarımı nedir?",
      answer:
        "Fuar stand tasarımı; marka kimliği, ziyaretçi akışı, ürün sergileme, toplantı ihtiyacı, teknik altyapı ve fuar kurallarının birlikte değerlendirilerek markaya özel fiziksel alan oluşturulması sürecidir. Tasarım, görselleştirme, üretim, nakliye, kurulum ve sökümü kapsayabilir.",
    },
    benefits: [
      "Alternatifler arasından, fuar hedefinize en uygun ve uzaktan okunur tasarımı seçersiniz.",
      "Tasarımcı, üretici ve kurulum ekipleriyle tüm yazışma ve takip bizden; siz yalnızca tasarımı onaylarsınız.",
      "Tasarım ve uygulama teklifleri kalem kalem karşılaştırılır; aynı bütçeyle daha nitelikli bir stant elde edilir.",
    ],
    ctaText:
      "Stant alanınızı ve fuarınızı paylaşın, alternatifleri birlikte değerlendirelim",
    icon: "box",
    order: 3,
    related: [
      "fuar-strateji-kurumsal-hazirlik",
      "hostes-personel",
      "fotograf-video",
    ],
    subServices: [
      {
        name: { tr: "Modüler Stand", en: "Modular Stand" },
        description: {
          tr: "Ekonomik ve pratik modüler stant çözümleri",
          en: "Economic modular stand solutions",
        },
      },
      {
        name: { tr: "Orta Segment Özel Stand", en: "Mid-segment Custom Stand" },
        description: {
          tr: "Dengeli fiyat-performans sunan özel tasarım",
          en: "Custom design with balanced price-performance",
        },
      },
      {
        name: { tr: "Premium Stand", en: "Premium Stand" },
        description: {
          tr: "Özel tasarım, çift kat ve yüksek kalite uygulamalar",
          en: "Custom, double-deck and high-quality stands",
        },
      },
      {
        name: { tr: "Dijital Ekranlı Stand", en: "Digital Display Stand" },
        description: {
          tr: "LED ekran ve dijital içerik entegrasyonu",
          en: "LED screen and digital content integration",
        },
      },
    ],
  },
  {
    id: 14,
    title: {
      tr: "Hedef Pazarda Davet Yönetimi",
      en: "Target Market Invitation Management",
    },
    slug: "fuar-davet-yonetimi",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Hedef ülkelerdeki potansiyel firmalara, fuar açılmadan önce firmanız adına ulaşıyoruz.",
      en: "We reach potential companies in target countries on your behalf before the fair opens.",
    },
    fullDescription: {
      tr: "Fuarda doğru kişilerle görüşmenin en etkili yolu, onları fuardan önce davet etmektir. Markanın bulunduğu sektörde, hedeflenen ülkeler önceliklendirilir; doğru muhataplar tespit edilir ve fuar, salon ve stant bilgisini taşıyan davetlerle standınıza yönlendirilir.",
      en: "The most effective way to meet the right people at a fair is to invite them before the fair.",
    },
    h1: "Fuar Öncesi Davet Yönetimi: Hedef Pazarda Doğru Muhataplara Ulaşın",
    seoTitle: "Fuar Öncesi Davet Yönetimi ve Hedef Pazar Taraması",
    metaDescription:
      "Hedef ülke ve sektör taraması, potansiyel firma listesi ve fuar, salon, stant bilgisiyle davet: fuar açılmadan önce doğru muhataplara firmanız adına ulaşıyoruz.",
    heroText:
      "Fuar açılmadan önce, hedeflediğiniz ülkelerdeki potansiyel firmalara firmanız adına ulaşıyoruz. Standınıza tesadüfen gelen değil, davet edilmiş ziyaretçiler gelir.",
    processText:
      "Önce markanızın sektöründe hedeflediğiniz ülkeleri ve müşteri gruplarını önceliklendiriyoruz. Ardından doğru muhatapları tespit ediyor, ilgili kişileri listeliyoruz. Davetler fuar adı, tarihler, salon ve stant bilgisini taşır; ziyaretçinin standınızı bulmasını kolaylaştırır. Görüşme sürecinin kendisini ekibiniz yürütür.",
    steps: [
      {
        title: "Sektör ve ülke taraması",
        text: "Markanın bulunduğu sektörde, firmanın hedeflediği ülkeler önceliklendirilir.",
      },
      {
        title: "Potansiyel firma listesi",
        text: "Doğru muhataplar tespit edilir, ilgili kişiler listelenir.",
      },
      {
        title: "Fuar, salon ve stant bilgisiyle davet",
        text: "Davet, ziyaretçinin standı bulmasını kolaylaştıracak tüm bilgiyi taşır.",
      },
    ],
    geoBlock: {
      question: "Fuar öncesi davet yönetimi nedir?",
      answer:
        "Fuar öncesi davet yönetimi; katılımcı firmanın hedef ülke ve sektörlerindeki potansiyel firmaların belirlenmesi, doğru muhatapların listelenmesi ve bu kişilerin fuar, salon ve stant bilgisini içeren davetlerle standa yönlendirilmesidir.",
    },
    benefits: [
      "Standınıza hedef pazarınızdan, önceden davet edilmiş doğru muhataplar gelir.",
      "Tarama, listeleme ve davet gönderimi bizden; ekibiniz yalnızca görüşmelere hazırlanır.",
      "Fuar bütçenizin karşılığı, rastgele trafik yerine hedefli görüşmelerle güçlenir.",
    ],
    pricingNote: "Pakete göre fiyatlandırılır.",
    ctaText: "Hedef pazarlarınızı paylaşın, davet planını birlikte kuralım",
    icon: "send",
    order: 4,
    related: [
      "fuar-strateji-kurumsal-hazirlik",
      "fuar-ziyaretci-kayit-sistemi",
      "hostes-personel",
    ],
    subServices: [],
  },
  {
    id: 3,
    title: { tr: "Otel & Konaklama", en: "Hotel & Accommodation" },
    slug: "otel-konaklama",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Fuar alanına erişimi, ekip düzenini ve bütçeyi birlikte gözeten konaklama planı.",
      en: "Accommodation planning that balances fair access, team routine and budget.",
    },
    fullDescription: {
      tr: "Fuar alanına yakınlık, ekip büyüklüğü, VIP ihtiyaçlar ve bütçe dengesi birlikte değerlendirilerek konaklama planı hazırlanır. Amaç yalnızca rezervasyon yapmak değil, fuar temposunu aksatmayacak konforlu ve kontrollü bir akış kurmaktır.",
      en: "Accommodation plan is prepared by evaluating proximity to the fair, team size, VIP needs and budget together.",
    },
    h1: "Fuar Otel ve Konaklama Organizasyonu",
    seoTitle: "Fuar Otel ve Konaklama Organizasyonu",
    metaDescription:
      "Fuar alanına erişim, ekip büyüklüğü ve bütçeye göre 3, 4 ve 5 yıldızlı otel alternatifleri; grup rezervasyonu, oda listeleri ve transferle entegre konaklama planı.",
    heroText:
      "Fuar ekibinizin güne trafikte değil, müşteriye hazır başlamasını sağlıyoruz. Fuar alanına erişim, bütçe, ekip büyüklüğü ve konfor beklentilerine göre konaklama alternatifleri oluşturuyoruz.",
    processText:
      "Fuar tarihini, ekip sayısını, stant ekibinin çalışma saatlerini ve ulaşım planını değerlendirerek alternatif oteller oluşturuyoruz. Yalnızca oda fiyatına değil; fuar alanına ulaşım süresine, kahvaltı saatlerine, toplantı imkânlarına ve toplam seyahat maliyetine birlikte bakıyoruz. Grup rezervasyonlarında oda listelerini, giriş–çıkış koordinasyonunu ve değişiklikleri yönetiyor; konaklamayı transfer programıyla birleştiriyoruz.",
    geoBlock: {
      question: "Fuar konaklama organizasyonu ne kapsar?",
      answer:
        "Fuar konaklama organizasyonu, fuara katılan şirket ekipleri için otel seçimi, grup rezervasyonu, oda listelerinin yönetimi ve ulaşım planının koordinasyonunu kapsar. Otel seçiminde yalnızca gecelik fiyat değil, fuar alanına erişim ve ekibin günlük düzeni de dikkate alınır.",
    },
    benefits: [
      "Ekibiniz fuar alanına yakın, düzenli ve dinlenmiş başlar; fuar temposu aksamaz.",
      "Rezervasyon, oda listesi ve son dakika değişiklikleri bizden; siz yalnızca seçeneği onaylarsınız.",
      "Konum, ulaşım ve oda fiyatı birlikte değerlendirilir; toplam seyahat maliyeti düşer.",
    ],
    ctaText:
      "Fuarınızı, tarihleri ve ekip sayınızı gönderin, konaklama seçeneklerini hazırlayalım",
    icon: "hotel",
    order: 5,
    related: ["ulasim-shuttle", "aksam-yemegi-gala", "fuar-danismanligi"],
    subServices: [
      {
        name: { tr: "5 Yıldız Otel", en: "5 Star Hotel" },
        description: {
          tr: "VIP misafirler ve yönetim ekibi için",
          en: "For VIP guests and management",
        },
      },
      {
        name: { tr: "4 Yıldız Otel", en: "4 Star Hotel" },
        description: {
          tr: "Konfor ve bütçe dengesi",
          en: "Balance of comfort and budget",
        },
      },
      {
        name: { tr: "3 Yıldız / Ekonomik", en: "3 Star / Budget" },
        description: {
          tr: "Bütçe odaklı ekip konaklaması",
          en: "Budget-focused team accommodation",
        },
      },
    ],
  },
  {
    id: 6,
    title: { tr: "Ulaşım & Shuttle", en: "Transportation & Shuttle" },
    slug: "ulasim-shuttle",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Havalimanı transferi, günlük shuttle ve VIP araçlar tek ulaşım planında.",
      en: "Airport transfers, daily shuttle and VIP vehicles in a single plan.",
    },
    fullDescription: {
      tr: "Havalimanı transferleri, otel ile fuar alanı arasındaki shuttle planı, VIP araç tahsisi ve günlük saha ulaşımı tek program üzerinden yönetilir. Böylece ekip ve misafir tarafında son dakika ulaşım sorunları en aza iner.",
      en: "Airport transfers, hotel-fair shuttle, VIP vehicles and daily transport are managed on one program.",
    },
    h1: "Fuar Transfer, Shuttle ve VIP Ulaşım Hizmetleri",
    seoTitle: "Fuar Transfer, Shuttle ve VIP Ulaşım",
    metaDescription:
      "Havalimanından otele, otelden fuar alanına ve akşam programlarına kadar ulaşım zincirini tek plan altında yönetiyoruz: günlük shuttle, VIP araç ve grup transferleri.",
    heroText:
      "Havalimanından otele, otelden fuar alanına ve akşam programlarına kadar tüm ulaşım zincirini tek plan altında yönetiyoruz.",
    processText:
      "Uçuş saatlerini, otel konumunu, fuar giriş saatlerini, ekip büyüklüğünü ve varsa VIP misafir programlarını bir araya getirerek ulaşım çizelgesi oluşturuyoruz. Günlük shuttle, havalimanı transferi, şoförlü VIP araç ve grup taşımacılığını tek merkezden koordine ediyoruz. Operasyon öncesinde araç, sürücü ve yolcu listelerini hazırlıyor, buluşma noktalarını netleştiriyor ve değişiklikleri sahada takip ediyoruz.",
    geoBlock: {
      question: "Fuar shuttle hizmeti nedir?",
      answer:
        "Fuar shuttle hizmeti, otel ile fuar merkezi arasında katılımcı ekibin belirlenen saatlerde toplu olarak taşınmasıdır. Kapsamlı fuar ulaşımında havalimanı transferleri, VIP araçlar, grup taşımacılığı ve akşam programı ulaşımı da aynı plana dahil edilir.",
    },
    benefits: [
      "Ekip ve misafirleriniz her gün aynı düzenle, zamanında fuar alanında olur.",
      "Araç, sürücü ve yolcu listeleri ile değişiklik takibi bizden; sizin aramanız gereken tek kişi var.",
      "Araç kapasitesi ve güzergâh planı sayesinde boş sefer ve gereksiz transfer maliyeti oluşmaz.",
    ],
    ctaText:
      "Ekip ve uçuş planınızı paylaşın, transfer programınızı oluşturalım",
    icon: "car",
    order: 6,
    related: ["otel-konaklama", "aksam-yemegi-gala", "hostes-personel"],
    subServices: [
      {
        name: { tr: "Havalimanı Transferi", en: "Airport Transfer" },
        description: {
          tr: "Varış ve dönüş transferleri",
          en: "Arrival and return transfers",
        },
      },
      {
        name: { tr: "Günlük Shuttle", en: "Daily Shuttle" },
        description: {
          tr: "Otel ile fuar alanı arasında toplu ulaşım",
          en: "Hotel-fair collective transport",
        },
      },
      {
        name: { tr: "VIP Araç", en: "VIP Vehicle" },
        description: {
          tr: "Şoförlü özel araç hizmeti",
          en: "Chauffeured private vehicle",
        },
      },
    ],
  },
  {
    id: 7,
    title: {
      tr: "Kurumsal Hediye & Promosyon",
      en: "Corporate Gifts & Promotion",
    },
    slug: "kurumsal-hediye",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Hedef kitleye göre ayrılmış ziyaretçi promosyonları, premium ve VIP kurumsal hediyeler.",
      en: "Visitor promotions, premium and VIP corporate gifts segmented by audience.",
    },
    fullDescription: {
      tr: "Promosyon ürünleri yalnızca dağıtım için değil, marka hafızasını uzatmak için seçilir. Hedef kitleye, bütçeye ve marka algısına uygun klasik veya premium alternatifler hazırlanır; gerekirse VIP özel set ve stant dağıtım planı kurgulanır.",
      en: "Promotional products are chosen to extend brand memory, not only for distribution.",
    },
    h1: "Fuar Promosyon Ürünleri ve Kurumsal Hediyeler",
    seoTitle: "Fuar Promosyon Ürünleri ve Kurumsal Hediyeler",
    metaDescription:
      "Ziyaretçi promosyonları, premium müşteri hediyeleri ve VIP setler: hedef kitleye, marka kimliğine ve bütçeye uygun ürünleri seçiyor, standa hazır teslim ediyoruz.",
    heroText:
      "Masada unutulan değil, kullanılmaya devam eden promosyonlar seçiyoruz. Ziyaretçileriniz, potansiyel müşterileriniz ve VIP iş ortaklarınız için marka kimliğinize uygun çözümler hazırlıyoruz.",
    processText:
      "Önce promosyonun kime verileceğini belirliyoruz. Genel ziyaretçiye dağıtılacak yüksek adetli ürünlerle nitelikli müşterilere veya VIP yöneticilere verilecek hediyeleri aynı kategoride değerlendirmiyoruz. Hedef kitleye göre ürün alternatiflerini, marka uygulamasını, ambalajı, adedi ve teslim süresini planlıyor; ürünleri standa veya belirlenen teslimat noktasına hazır hale getiriyoruz.",
    geoBlock: {
      question: "Fuar promosyon ürünleri nasıl seçilir?",
      answer:
        "Fuar promosyon ürünleri, markanın ziyaretçilerle temasını fuar sonrasına taşıyan markalı ürünlerdir. En etkili seçim; ürünün fiyatından çok hedef kitleye uygunluğu, kullanışlılığı, marka uyumu, dağıtılacak kişi sayısı ve lojistik gereksinimler dikkate alınarak yapılır.",
    },
    benefits: [
      "Her hedef kitleye ona uygun ürün gider; promosyon marka algınızı güçlendirir.",
      "Ürün seçimi, baskı onayı, üretim ve teslimat takibi bizden; siz yalnızca seçersiniz.",
      "Adetler hedef kitleye göre planlanır; depoda kalan ya da boşa dağıtılan ürün maliyeti azalır.",
    ],
    ctaText:
      "Hedef kitlenizi ve bütçenizi paylaşın, ürün alternatiflerini hazırlayalım",
    icon: "gift",
    order: 7,
    related: [
      "stand-tasarimi",
      "hostes-personel",
      "fuar-strateji-kurumsal-hazirlik",
    ],
    subServices: [
      {
        name: { tr: "Ziyaretçi Promosyonları", en: "Visitor Promotions" },
        description: {
          tr: "Yüksek adetli, markalı genel dağıtım ürünleri",
          en: "High-volume branded giveaways",
        },
      },
      {
        name: {
          tr: "Premium Müşteri Hediyeleri",
          en: "Premium Customer Gifts",
        },
        description: {
          tr: "Nitelikli müşteriler için özel hediyeler",
          en: "Special gifts for qualified customers",
        },
      },
      {
        name: { tr: "VIP Kurumsal Hediyeler", en: "VIP Corporate Gifts" },
        description: {
          tr: "Üst düzey yöneticiler için premium setler",
          en: "Premium sets for executives",
        },
      },
    ],
  },

  // ─── Fuar zamanı ──────────────────────────────────────────────────────────
  {
    id: 15,
    title: { tr: "Saha ve Sistem Yönetimi", en: "On-site & System Management" },
    slug: "fuar-ziyaretci-kayit-sistemi",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Kartvizit fotoğrafı ve sesli notla dijital ziyaretçi kaydı; fuar biterken liste hazır.",
      en: "Digital visitor records with card photos and voice notes; the list is ready when the fair ends.",
    },
    fullDescription: {
      tr: "Fuar süresince ziyaretçi kayıtlarının profesyonel ve düzenli tutulması, fuar emeğinin karşılığını almanın temelidir. Her görüşme kartvizit fotoğrafı ve müşteri notuyla kayda geçer. Fuar biterken kartvizitlerin zımbalandığı bir defter değil, kolay yönetilebilir bir veri hazır olur.",
      en: "Keeping visitor records professional and organised during the fair is the basis of getting value from it.",
    },
    h1: "Fuar Ziyaretçi Kayıt Sistemi ve Saha Yönetimi",
    seoTitle: "Fuar Ziyaretçi Kayıt Sistemi ve Saha Yönetimi",
    metaDescription:
      "Kartvizit fotoğrafı ve 60 saniyelik sesli notla dijital ziyaretçi kaydı. Kayıtlar düzenlenir, görevler ayrılır; liste 24 saat içinde teslim edilir.",
    heroText:
      "Fuar süresince ekibimiz sahada, yanınızda. Ziyaretçi kayıtlarını yazılım desteğiyle profesyonel ve düzenli tutuyoruz; fuar biterken görüşme listeniz hazır olur.",
    processText:
      'Standınızdaki her görüşme, ziyaretçinin kartvizit fotoğrafı ve en fazla 60 saniyelik sesli notla kayda geçer. Yazılım kartviziti ve sesli notu işler; nottaki "şu tarihte fiyat listesi gönder" gibi görevleri ayırır. Müşteri bazlı liste 24 saat içinde firmanıza teslim edilir. Müşterilerinize geri dönüşü kendi ekibiniz yürütür. Bu sırada saha ekibimiz süreç takibini yapar, anlık ihtiyaçları çözer.',
    steps: [
      {
        title: "Kartvizit fotoğrafı",
        text: "Ziyaretçinin kartviziti saniyeler içinde fotoğraflanır.",
      },
      {
        title: "Sesli not",
        text: "Görüşme hakkında en fazla 60 saniyelik sesli not kaydedilir.",
      },
      {
        title: "Yazılım işler",
        text: "Kartvizit ve sesli not düzenli bir kayda dönüşür, nottaki görevler ayrılır.",
      },
      {
        title: "Liste teslimi",
        text: "Müşteri bazlı liste 24 saat içinde firmanıza teslim edilir.",
      },
    ],
    geoBlock: {
      question: "Fuar ziyaretçi kaydı nasıl yapılır?",
      answer:
        "Düzenli bir fuar ziyaretçi kaydında her görüşme, ziyaretçinin iletişim bilgisi ve görüşme notuyla birlikte kayda geçer. LEYONEX'in kullandığı sistemde kartvizit fotoğrafı ve kısa bir sesli not yazılımla işlenir, nottaki görevler ayrılır ve müşteri bazlı liste fuar sonrasında firmaya teslim edilir.",
    },
    benefits: [
      "Hiçbir görüşme kaybolmaz; fuar emeği düzenli ve kullanılabilir bir veriye dönüşür.",
      "Kayıt ve düzenleme sistemle ve saha ekibimizle yapılır; ekibiniz yalnızca ziyaretçiye odaklanır.",
      "Ek yazılım ya da personel maliyeti olmadan; birlikte çalıştığımız firmalara fuar süresince ücretsiz sunulur.",
    ],
    free: true,
    ctaText: "Fuarınızda ziyaretçi kaydını birlikte planlayalım",
    icon: "scan",
    order: 8,
    related: ["hostes-personel", "raporlama-analiz", "fuar-davet-yonetimi"],
    subServices: [
      {
        name: { tr: "Dijital Ziyaretçi Kaydı", en: "Digital Visitor Records" },
        description: {
          tr: "Kartvizit fotoğrafı ve sesli notla kayıt",
          en: "Card photo and voice note records",
        },
      },
      {
        name: { tr: "Saha Süreç Takibi", en: "On-site Process Tracking" },
        description: {
          tr: "Fuar boyunca ekibimiz sahada",
          en: "Our team on site during the fair",
        },
      },
      {
        name: { tr: "Anlık İhtiyaç Çözümü", en: "Instant Support" },
        description: {
          tr: "Saha ihtiyaçlarına hızlı müdahale",
          en: "Fast response to on-site needs",
        },
      },
    ],
  },
  {
    id: 2,
    title: { tr: "Hostes & Personel", en: "Hostess & Staff" },
    slug: "hostes-personel",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Karşılama, yönlendirme, yabancı dil desteği ve VIP misafir koordinasyonu için profesyonel ekip.",
      en: "Professional team for reception, guidance, language support and VIP coordination.",
    },
    fullDescription: {
      tr: "Stant üzerindeki ilk temas marka algısını doğrudan etkiler. Karşılama, yönlendirme, yabancı dil desteği, servis ve saha koordinasyonu için uygun ekip planlanır. Personel seçimi fuarın profiline ve markanın temsil seviyesine göre yapılır.",
      en: "The first contact on the stand directly affects brand perception.",
    },
    h1: "Profesyonel Fuar Hostesi ve Stand Personeli",
    seoTitle: "Fuar Hostesi ve Stand Personeli",
    metaDescription:
      "Karşılama, ziyaretçi yönlendirme, yabancı dil desteği ve VIP misafir koordinasyonu için standınızdaki role göre seçilmiş ve brief edilmiş profesyonel fuar personeli.",
    heroText:
      "İyi tasarlanmış bir stant, doğru ekip olmadan potansiyelini kullanamaz. Standınızdaki role ve ziyaretçi profiline uygun profesyonel fuar personeli sağlıyoruz.",
    processText:
      "Görevlendirmeden önce standdaki rolü tanımlıyoruz: karşılama, kayıt, ürün yönlendirmesi, çeviri desteği, servis veya VIP misafir koordinasyonu. Personeli marka, ürün, stant planı, ziyaretçi profili ve iletişim dili konusunda brief ediyoruz. Gerektiğinde vardiya planı, kıyafet standardı ve sorumlu saha koordinatörü belirliyoruz. Satış görüşmelerini kendi uzmanlarınızın yürütmesini öneriyor; personeli bu görüşmeleri destekleyecek şekilde konumlandırıyoruz.",
    geoBlock: {
      question: "Fuar stand personeli ne yapar?",
      answer:
        "Fuar stand personeli; ziyaretçi karşılama, yönlendirme, kayıt, ürün veya hizmet hakkında temel bilgi aktarımı, yabancı dil desteği ve stant içi operasyonları yürütmek üzere görevlendirilen eğitimli ekiptir. Personel seçimi fuarın ülkesi, ziyaretçi profili ve standdaki görevlere göre yapılmalıdır.",
    },
    benefits: [
      "Standınızda markanızı doğru temsil eden, brief edilmiş bir ekip çalışır.",
      "Seçim, brief, vardiya ve saha koordinasyonu bizden; ekibiniz görüşmelere odaklanır.",
      "Görev tanımına göre doğru sayıda personel planlanır; fazla kadro maliyeti oluşmaz.",
    ],
    ctaText:
      "Fuar, dil ve görev ihtiyacınızı belirtin, ekip planını oluşturalım",
    icon: "users",
    order: 9,
    related: [
      "fuar-ziyaretci-kayit-sistemi",
      "stand-ikramlari",
      "stand-tasarimi",
    ],
    subServices: [
      {
        name: { tr: "Karşılama & Yönlendirme", en: "Reception & Guidance" },
        description: {
          tr: "Ziyaretçi karşılama ve stant içi yönlendirme",
          en: "Visitor reception and guidance",
        },
      },
      {
        name: {
          tr: "Ziyaretçi Kayıt Desteği",
          en: "Visitor Registration Support",
        },
        description: {
          tr: "Görüşmelerin düzenli kayda geçmesi",
          en: "Organised meeting records",
        },
      },
      {
        name: { tr: "Yabancı Dil Desteği", en: "Language Support" },
        description: {
          tr: "İngilizce ve diğer dillerde iletişim",
          en: "English and other languages",
        },
      },
      {
        name: { tr: "VIP Misafir Koordinasyonu", en: "VIP Guest Coordination" },
        description: {
          tr: "Üst düzey misafirler için özel karşılama",
          en: "Special reception for senior guests",
        },
      },
    ],
  },
  {
    id: 4,
    title: { tr: "Stand İkramları", en: "Stand Catering" },
    slug: "stand-ikramlari",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Çay–kahveden VIP toplantı ikramına, markaya ve ziyaretçi profiline uygun ikram planı.",
      en: "From tea and coffee to VIP meeting catering, planned for your brand and visitors.",
    },
    fullDescription: {
      tr: "İkram, ziyaretçinin stantta rahat ve uzun süre görüşebilmesini destekleyen bir misafirperverlik unsurudur. Çay, kahve, su, atıştırmalık ve premium servis seçenekleri marka konumuna uygun şekilde planlanır. Amaç kalabalık değil, kaliteli görüşme ortamıdır.",
      en: "Catering supports visitors in staying and talking comfortably at the stand.",
    },
    h1: "Fuar Stand İkramları ve Catering Hizmeti",
    seoTitle: "Fuar Stand İkramları ve Catering",
    metaDescription:
      "Stant büyüklüğü, günlük ziyaretçi ve VIP toplantı sayısına göre ikram planı: standart çay–kahve servisinden premium kahve ve toplantı ikramlarına kadar.",
    heroText:
      "Bir fincan kahveden VIP müşteri ağırlamasına kadar standınızdaki ikram deneyimini markanıza ve ziyaretçi profilinize göre planlıyoruz.",
    processText:
      "Stant büyüklüğüne, günlük ziyaretçi tahminine, VIP toplantı sayısına ve fuar saatlerine göre ikram planı çıkarıyoruz. Standart çay–kahve servisinden premium kahve çözümlerine, soğuk içeceklerden toplantı ikramlarına kadar alternatifleri bütçeye göre oluşturuyoruz. Servis ekipmanı, sarf malzemeleri, günlük yenileme, personel ve fuar alanının catering kuralları operasyon planına dahil edilir.",
    geoBlock: {
      question: "Fuar stand catering hizmeti nedir?",
      answer:
        "Fuar stand catering hizmeti, ziyaretçilere ve müşterilere stant alanında yiyecek–içecek sunulmasının planlanması ve yönetilmesidir. İkram türü stant büyüklüğü, ziyaretçi sayısı, toplantı yoğunluğu, fuar kuralları ve marka konumuna göre belirlenir.",
    },
    benefits: [
      "Ziyaretçiler standınızda rahat eder; görüşmeler daha uzun ve nitelikli geçer.",
      "Tedarik, günlük yenileme ve servis bizden; ekibiniz ikramla uğraşmaz.",
      "Tüketim günlük ziyaretçi tahminine göre planlanır; fire ve israf maliyeti düşer.",
    ],
    ctaText:
      "Stant büyüklüğü ve ziyaretçi hedefinizi gönderin, ikram planınızı hazırlayalım",
    icon: "coffee",
    order: 10,
    related: ["hostes-personel", "aksam-yemegi-gala", "stand-tasarimi"],
    subServices: [
      {
        name: { tr: "Çay & Kahve Servisi", en: "Tea & Coffee" },
        description: {
          tr: "Günlük standart ikram servisi",
          en: "Daily standard service",
        },
      },
      {
        name: { tr: "Premium Kahve Çözümleri", en: "Premium Coffee" },
        description: {
          tr: "Barista kalitesinde kahve hizmeti",
          en: "Barista-quality coffee",
        },
      },
      {
        name: { tr: "VIP Toplantı İkramları", en: "VIP Meeting Catering" },
        description: {
          tr: "Özel müşteri görüşmeleri için premium servis",
          en: "Premium service for client meetings",
        },
      },
    ],
  },
  {
    id: 5,
    title: { tr: "Fotoğraf & Video", en: "Photography & Video" },
    slug: "fotograf-video",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Stant, ürün, röportaj ve drone çekimleriyle fuar katılımınızı içerik bankasına dönüştürün.",
      en: "Turn your participation into a content bank with stand, product, interview and drone shoots.",
    },
    fullDescription: {
      tr: "Fuar yatırımı yalnızca etkinlik günleriyle sınırlı kalmamalı, sonrasında da pazarlama ve iletişim içeriğine dönüşmelidir. Stant çekimleri, ürün detayları, röportajlar, sosyal medya videoları ve gerektiğinde profesyonel kurgu planlanır.",
      en: "Fair investment should turn into marketing and communication content afterwards.",
    },
    h1: "Fuar Fotoğraf ve Video Çekimi",
    seoTitle: "Fuar Fotoğraf ve Video Çekimi",
    metaDescription:
      "Stant, ürün, röportaj ve drone çekimleri: içerik hedefine göre hazırlanan çekim planıyla fuarınızı yıl boyu kullanılacak içeriğe dönüştürüyoruz.",
    heroText:
      "Bir fuarın etkisi fuar kapıları kapandığında bitmek zorunda değil. Standınızı, ürünlerinizi ve görüşmelerinizi yıl boyu kullanabileceğiniz fotoğraf ve video içeriklerine dönüştürüyoruz.",
    processText:
      'Çekim planını "fuarda bol bol görüntü alalım" şeklinde değil, içerik hedeflerine göre hazırlıyoruz. Stant genel görüntüleri, ürün detayları, ziyaretçi etkileşimleri, yönetici röportajları, kısa dikey videolar ve gerektiğinde drone görüntülerini önceden çekim listesine bağlıyoruz. Fuar sonunda yalnızca bir arşiv değil; sosyal medya, web sitesi, satış sunumları ve sonraki fuar kampanyalarında kullanılacak bir içerik bankası oluşur.',
    geoBlock: {
      question: "Fuar fotoğraf ve video çekimi neleri kapsar?",
      answer:
        "Fuar fotoğraf ve video çekimi; standın, ürünlerin, ekibin, ziyaretçi etkileşimlerinin ve röportajların profesyonel olarak kaydedilmesidir. İçerikler fuar sonrası sosyal medya, kurumsal web sitesi, satış sunumları ve sonraki fuar kampanyalarında tekrar kullanılabilir.",
    },
    benefits: [
      "Fuarınız yıl boyu kullanılacak, kurumsal kalitede içeriğe dönüşür.",
      "Çekim listesi, ekip ve kurgu bizden; ekibiniz yalnızca röportaj anına hazır olur.",
      "Tek çekim günüyle ayrı ayrı içerik üretme ihtiyacı azalır; içerik maliyeti düşer.",
    ],
    ctaText: "Fuar programınızı paylaşın, çekim planını oluşturalım",
    icon: "camera",
    order: 11,
    related: ["stand-tasarimi", "raporlama-analiz", "aksam-yemegi-gala"],
    subServices: [
      {
        name: { tr: "Stand & Atmosfer Çekimi", en: "Stand & Atmosphere" },
        description: {
          tr: "Genel stant ve fuar alanı görüntüleri",
          en: "General stand and hall visuals",
        },
      },
      {
        name: { tr: "Ürün & Demo Çekimi", en: "Product & Demo" },
        description: {
          tr: "Ürün detay ve demo görüntüleri",
          en: "Product detail and demo visuals",
        },
      },
      {
        name: { tr: "Röportaj & Yönetici Çekimi", en: "Interviews" },
        description: {
          tr: "Yönetici ve müşteri röportajları",
          en: "Executive and customer interviews",
        },
      },
      {
        name: { tr: "Drone Çekimi", en: "Drone" },
        description: {
          tr: "Kuşbakışı fuar ve stant görüntüleri",
          en: "Aerial visuals",
        },
      },
    ],
  },
  {
    id: 8,
    title: { tr: "Akşam Yemeği & Gala", en: "Dinner & Gala" },
    slug: "aksam-yemegi-gala",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Müşteri yemeği, bayi buluşması ve VIP networking organizasyonları.",
      en: "Customer dinners, dealer meetings and VIP networking events.",
    },
    fullDescription: {
      tr: "Fuar akşamları, ilişkileri güçlendiren önemli temas alanlarıdır. Müşteri yemeği, bayi buluşması, VIP masa planı ve networking odaklı akşam organizasyonları gecenin amacına göre kurgulanır.",
      en: "Fair evenings are important touchpoints that strengthen relationships.",
    },
    h1: "Fuar Akşam Yemeği, Gala ve VIP Organizasyonları",
    seoTitle: "Fuar Akşam Yemeği, Gala ve VIP Organizasyonları",
    metaDescription:
      "Müşteri yemeği, distribütör buluşması ve VIP networking: mekân, menü, transfer, masa planı ve misafir yönetimini gecenin amacına göre tek elden kurguluyoruz.",
    heroText:
      "En değerli görüşmelerin bazıları fuar salonunun dışında gerçekleşir. Müşterileriniz, distribütörleriniz ve VIP misafirleriniz için kurumsal akşam yemeği ve gala organizasyonları planlıyoruz.",
    processText:
      "Önce gecenin amacını belirliyoruz: müşteri ağırlama, distribütör ilişkileri, ekip motivasyonu veya VIP yönetici buluşması. Misafir profiline ve bütçeye göre mekân seçimi, menü, transfer, karşılama, masa planı, marka uygulamaları ve teknik ekipmanı koordine ediyoruz.",
    geoBlock: {
      question: "Fuar gala organizasyonu nedir?",
      answer:
        "Fuar gala ve kurumsal akşam yemeği organizasyonu; fuar kapsamında müşteriler, iş ortakları, distribütörler veya şirket ekipleri için düzenlenen özel etkinliktir. Mekân, ulaşım, menü, masa planı, teknik ihtiyaçlar ve misafir yönetimi tek bir plan altında koordine edilir.",
    },
    benefits: [
      "Gece, ilişkilerinizi güçlendirecek bir amaçla ve markanıza uygun bir düzenle geçer.",
      "Mekân, menü, transfer ve misafir listesi bizden; siz yalnızca misafirlerinizle ilgilenirsiniz.",
      "Misafir sayısına ve amaca göre seçilen mekân ve menüyle gereksiz harcama yapılmaz.",
    ],
    ctaText:
      "Misafir sayınızı ve gecenin amacını paylaşın, programı birlikte kurgulayalım",
    icon: "utensils",
    order: 12,
    related: ["ulasim-shuttle", "otel-konaklama", "fotograf-video"],
    subServices: [
      {
        name: { tr: "Müşteri Akşam Yemeği", en: "Customer Dinner" },
        description: {
          tr: "Özel restoran ve private dining organizasyonu",
          en: "Private dining",
        },
      },
      {
        name: { tr: "Cocktail & Networking", en: "Cocktail & Networking" },
        description: {
          tr: "Ayakta networking buluşmaları",
          en: "Standing networking events",
        },
      },
      {
        name: { tr: "VIP Gala", en: "VIP Gala" },
        description: {
          tr: "Büyük grup ve kurumsal gala organizasyonları",
          en: "Large corporate galas",
        },
      },
    ],
  },

  // ─── Fuar sonrası ─────────────────────────────────────────────────────────
  {
    id: 11,
    title: {
      tr: "Gözlem ve Gelişim Raporu",
      en: "Observation & Development Report",
    },
    slug: "raporlama-analiz",
    phase: "fuar-sonrasi",
    shortDescription: {
      tr: "Fuarı izleyen hafta 35–45 sayfalık rapor: gözlemler, iyi uygulamalar ve somut öneriler.",
      en: "A 35–45 page report the week after the fair: observations, good practices and actions.",
    },
    fullDescription: {
      tr: "Her fuar, bir sonraki fuarın hazırlık dosyası olur. Fuardaki diğer firmaların stant, sunum ve görüşme pratikleri gözlemlenir; sektör içi ve dışı iyi uygulamalar örnekleriyle raporlanır. Geliştirilebilir alanlar hem sizin hem bizim tarafımızda belirlenir ve sonraki katılım için somut öneriler sunulur.",
      en: "Every fair becomes the preparation file for the next one.",
    },
    h1: "Fuar Sonrası Gözlem ve Gelişim Raporu",
    seoTitle: "Fuar Sonrası Gözlem ve Gelişim Raporu",
    metaDescription:
      "Fuarı izleyen hafta 35–45 sayfalık rapor: iyi uygulamalar, geliştirilebilir alanlar ve sonraki fuar için somut hazırlık maddeleri.",
    heroText:
      "En iyi gelişim, doğru gözlem ve notlarla mümkün olur. Fuarda sizin ve bizim gözlemlerimizi, fuarı izleyen hafta 35–45 sayfalık bir raporla sunuyoruz.",
    processText:
      "Fuar boyunca diğer firmaların stant, sunum ve görüşme pratiklerini gözlemliyor; sektör içi ve sektör dışı iyi uygulamaları örnekleriyle kaydediyoruz. Fuar süresince geliştirilebilir alanları hem sizin hem bizim tarafımızda belirliyoruz. Bir sonraki katılım için somut hazırlık maddelerini fuar bitimindeki hafta çıkarıyoruz; her madde için öncelik, sorumlu ve tamamlanma tarihi belirleniyor. Bu maddeler sonraki fuardan önce tekrar incelenir; böylece verim her fuarda artar.",
    steps: [
      {
        title: "Gözlem",
        text: "Fuardaki diğer firmaların stant, sunum ve görüşme pratikleri gözlemlenir.",
      },
      {
        title: "İyi uygulamalar",
        text: "Sektör içi ve sektör dışı iyi uygulamalar örnekleriyle raporlanır.",
      },
      {
        title: "Geliştirilebilir alanlar",
        text: "Sizin ve bizim tarafımızdaki gelişim alanları belirlenir, öneriler sunulur.",
      },
      {
        title: "Hazırlık maddeleri",
        text: "Sonraki katılım için somut maddeler fuar bitimindeki hafta çıkarılır.",
      },
    ],
    geoBlock: {
      question: "Fuar sonrası gelişim raporu nedir?",
      answer:
        "Fuar sonrası gelişim raporu; fuar süresince yapılan gözlemleri, diğer firmaların iyi uygulamalarını ve geliştirilebilir alanları bir araya getirerek sonraki fuar için somut hazırlık maddeleri çıkaran değerlendirmedir. LEYONEX bu raporu fuarı izleyen hafta 35–45 sayfa olarak sunar.",
    },
    benefits: [
      "Her fuar bir öncekinden daha iyi hazırlanır; katılım verimi her yıl artar.",
      "Gözlem, analiz ve raporlama bizden; siz hazır önerileri değerlendirip karar verirsiniz.",
      "İşe yaramayan uygulamalar tekrarlanmaz; bütçe bir sonraki fuarda daha doğru kalemlere yönelir.",
    ],
    free: true,
    ctaText:
      "Bir sonraki fuarınızı geçen fuarın notlarıyla birlikte planlayalım",
    icon: "file-text",
    order: 13,
    related: [
      "fuar-ziyaretci-kayit-sistemi",
      "fuar-strateji-kurumsal-hazirlik",
      "devlet-destegi-danismanligi",
    ],
    subServices: [
      {
        name: {
          tr: "Saha Gözlemleri ve İyi Uygulamalar",
          en: "Observations & Good Practices",
        },
        description: {
          tr: "Diğer firmaların stant, sunum ve görüşme pratikleri",
          en: "Stand, presentation and meeting practices",
        },
      },
      {
        name: {
          tr: "Firmanıza Özel Gelişim Önerileri",
          en: "Tailored Recommendations",
        },
        description: {
          tr: "Sizin ve bizim tarafımızdaki geliştirilebilir alanlar",
          en: "Areas to improve on both sides",
        },
      },
      {
        name: {
          tr: "Sonraki Fuar İçin Hazırlık Maddeleri",
          en: "Next-fair Action Items",
        },
        description: {
          tr: "Öncelik, sorumlu ve tarihleriyle",
          en: "With priority, owner and date",
        },
      },
    ],
  },
  {
    id: 10,
    title: {
      tr: "Devlet Desteği Danışmanlığı",
      en: "Government Support Consulting",
    },
    slug: "devlet-destegi-danismanligi",
    phase: "fuar-sonrasi",
    shortDescription: {
      tr: "KOSGEB ve Ticaret Bakanlığı fuar destekleri için uygunluk kontrolü ve başvuru takibi.",
      en: "Eligibility check and application tracking for KOSGEB and Ministry of Trade fair supports.",
    },
    fullDescription: {
      tr: 'Fuar desteklerinde en sık yapılan hata, fuar bittikten sonra "bu gider destekleniyor mu?" diye araştırmaya başlamaktır. Oysa fuarın destek kapsamı, şirket uygunluğu, harcamanın türü, faturalandırma şekli ve başvuru belgeleri sürecin başında değerlendirilmelidir.',
      en: 'The most common mistake is asking "is this expense supported?" only after the fair.',
    },
    h1: "Fuar Devlet Desteği ve Teşvik Danışmanlığı",
    seoTitle: "Fuar Devlet Desteği ve Teşvik Danışmanlığı",
    metaDescription:
      "KOSGEB ve Ticaret Bakanlığı fuar destekleri için uygunluk kontrolü, destek kapsamındaki giderler ve başvuru belgelerinin takibi.",
    heroText:
      "Fuar katılımınız destek kapsamındaysa, süreci en başından doğru planlayın. Fuarın ve şirketinizin uygunluğunu kontrol ediyor; destek kapsamındaki giderleri, belgeleri ve başvuru sürecini takip ediyoruz.",
    processText:
      "Önce katılacağınız fuarın güncel destek listelerindeki durumunu kontrol ediyoruz. Ardından şirket ve katılım modeli açısından uygunluk değerlendirmesi yapıyor; hangi giderlerin hangi program kapsamında değerlendirileceğini belirliyoruz. Fatura, ödeme, katılım ve başvuru belgelerinin hazırlanmasını takip ediyor; şirketiniz ile ilgili kurum veya birlik arasındaki süreci koordine ediyoruz. Destek oranları, üst limitler ve kapsama alınan fuarlar dönemsel olarak değişir. Nihai destek kararı ilgili kamu kurumu tarafından verilir.",
    geoBlock: {
      question: "Fuar devlet desteği danışmanlığı nedir?",
      answer:
        "Fuar devlet desteği danışmanlığı; şirketin ve katılacağı fuarın mevcut destek programlarına uygunluğunun kontrol edilmesi, destek kapsamındaki giderlerin belirlenmesi ve başvuru belgelerinin hazırlanmasının takip edilmesidir. Destek oranı, üst limit ve şartlar programa ve başvuru dönemine göre değişebilir; nihai karar ilgili kurum tarafından verilir.",
    },
    benefits: [
      "Destek süreci fuar başlamadan planlanır; belge ve fatura hataları önlenir.",
      "Uygunluk kontrolü ve belge takibi bizden; siz yalnızca gerekli onayları verirsiniz.",
      "Uygun giderler doğru programa yönlendirilir; net katılım maliyetiniz düşebilir.",
    ],
    ctaText: "Katılacağınız fuarı gönderin, destek kapsamını kontrol edelim",
    icon: "award",
    order: 14,
    related: [
      "fuar-danismanligi",
      "raporlama-analiz",
      "fuar-strateji-kurumsal-hazirlik",
    ],
    subServices: [
      {
        name: { tr: "KOSGEB Fuar Desteği", en: "KOSGEB Fair Support" },
        description: {
          tr: "Yurt içi fuar desteği uygunluk ve başvuru takibi",
          en: "Domestic fair support tracking",
        },
      },
      {
        name: {
          tr: "Ticaret Bakanlığı Destekleri",
          en: "Ministry of Trade Supports",
        },
        description: {
          tr: "Yurt dışı fuar katılım desteği süreci",
          en: "International fair support process",
        },
      },
      {
        name: { tr: "Belge & Başvuru Takibi", en: "Document Tracking" },
        description: {
          tr: "Gerekli belgelerin toplanması ve başvuru koordinasyonu",
          en: "Documents and application coordination",
        },
      },
    ],
  },
];

/** Kaldırılan hizmet adresleri → yeni karşılıkları (kalıcı yönlendirme). */
export const legacyServiceSlugs: Record<string, string> = {
  "hizli-takip": "fuar-ziyaretci-kayit-sistemi",
};

/** Hizmetler sayfası SSS (FAQPage yapısal verisiyle birlikte gösterilir). */
export const servicesFaq: { question: string; answer: string }[] = [
  {
    question: "Fuar süreç yönetimi nedir?",
    answer:
      "Fuar süreç yönetimi; bir firmanın fuar katılımının hedef ve stratejiden stant tasarımına, davetten saha operasyonuna ve fuar sonrası değerlendirmeye kadar tek merkezden planlanması ve yönetilmesidir. Operasyon yönetimi bu sürecin yalnızca bir parçasıdır.",
  },
  {
    question: "Fuar operasyonu ile fuar süreç yönetimi arasındaki fark nedir?",
    answer:
      "Fuar operasyonu stant kurulumu, konaklama, transfer ve ikram gibi uygulama işlerini kapsar. Fuar süreç yönetimi ise bu işlerin hangi hedefe hizmet edeceğini belirler; stratejiyi, tasarım alternatiflerini, tedarikçi seçimini, daveti, ziyaretçi kaydını ve fuar sonrası gelişim raporunu da içerir.",
  },
  {
    question: "LEYONEX ile çalışmak fuar bütçemi artırır mı?",
    answer:
      "Hayır. Firmaların her yıl ayırdığı bütçelere benzer bütçelerle çalışıyoruz. Gereksiz maliyetleri azaltıyor, kalem maliyetlerini ve harcama odağını optimize ediyoruz; tasarım ve uygulama teklifleri kalem kalem karşılaştırılır.",
  },
  {
    question: "Yalnızca tek bir hizmet alabilir miyim?",
    answer:
      "Evet. Yalnızca stant tasarımı gibi tek bir hizmet, stant, otel ve dijital kayıt gibi seçili hizmetler ya da stratejiden fuar sonrası rapora uçtan uca yönetim alabilirsiniz. Kapsamı ve bütçeyi baştan birlikte netleştiriyoruz.",
  },
  {
    question: "Yurt dışı fuarlarda da hizmet veriyor musunuz?",
    answer:
      "Evet. Aynı süreci Türkiye’de ve globalde firmanız adına yürütüyoruz: yurt içi fuarlarda hazırlık, davet, saha ve raporlama süreçlerinin tamamı; yurt dışı fuarlarda aynı sistem, aynı tek muhatap ve tek rapor.",
  },
  {
    question: "LEYONEX bir stant firması mı?",
    answer:
      "Hayır. LEYONEX bir fuar süreç yönetimi firmasıdır. Stant tasarımı ve üretimi için beklentiye uygun tasarımcı ve üreticiyi seçer, süreci koordine ederiz; stant, sürecin parçalarından biridir.",
  },
];
