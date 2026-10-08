// Hizmetler — tek kaynak. /hizmetler, /hizmetler/[slug], ana sayfa hizmet bölümü ve footer buradan beslenir.
// Konumlandırma: LEYONEX fuar operasyonu değil, A'dan Z'ye fuar süreç yönetimi yapar.
// Yayın ilkesi: hangi sorumlulukları üstlendiğimiz ve müşteriye faydası anlatılır;
// iç analiz yöntemleri, hesaplar ve uygulama prosedürleri yayımlanmaz.

export type ServicePhase = "fuar-oncesi" | "fuar-zamani" | "fuar-sonrasi";

export type ServiceGroupId =
  | "strateji-planlama"
  | "stant-marka"
  | "seyahat-saha"
  | "kayit-degerlendirme";

export interface Service {
  id: number;
  title: { tr: string; en: string };
  slug: string;
  /** Hizmetin listelendiği ana başlık. */
  group: ServiceGroupId;
  /** Fuar sürecindeki yeri (süreç şeridi). */
  phase: ServicePhase;
  shortDescription: { tr: string; en: string };
  /** Hizmetin karşıladığı ihtiyaç. */
  fullDescription: { tr: string; en: string };
  /** Sayfanın H1'i: arama niyetini doğal biçimde taşır. */
  h1: string;
  /** <title> (marka şablonu layout'tan eklenir). */
  seoTitle: string;
  metaDescription: string;
  heroText: string;
  /** Sayfanın ilk bölümünde yer alan doğrudan cevap (GEO). */
  geoBlock: { question: string; answer: string };
  /** Üç fayda, bu hizmete özel: [profesyonellik ve verim, iş yükü, bütçe]. */
  benefits: [string, string, string];
  /** Birlikte çalışılan firmalara ücretsiz sunulur. */
  free?: boolean;
  pricingNote?: string;
  ctaText: string;
  icon: string;
  order: number;
  /** İç bağlantı ağı: ilgili hizmet slug'ları. */
  related: string[];
  /** Hizmet kapsamı: LEYONEX'in üstlendiği sorumluluklar. */
  subServices: Array<{
    name: { tr: string; en: string };
    description: { tr: string; en: string };
  }>;
}

export const phaseInfo: Record<ServicePhase, { label: string }> = {
  "fuar-oncesi": { label: "Fuar öncesi" },
  "fuar-zamani": { label: "Fuar zamanı" },
  "fuar-sonrasi": { label: "Fuar sonrası" },
};

/** Hizmetlerin dört ana başlığı (ana sayfa ve /hizmetler aynı sırayı kullanır). */
export const serviceGroups: {
  id: ServiceGroupId;
  title: string;
  summary: string;
}[] = [
  {
    id: "strateji-planlama",
    title: "Fuar stratejisi ve planlama",
    summary: "Hedefler, öncelikler ve hazırlık planı.",
  },
  {
    id: "stant-marka",
    title: "Stant ve marka sunumu",
    summary: "Stant tasarımı, üretim koordinasyonu, baskı ve promosyon.",
  },
  {
    id: "seyahat-saha",
    title: "Seyahat ve saha hizmetleri",
    summary: "Konaklama, transfer, personel, ikram ve organizasyon.",
  },
  {
    id: "kayit-degerlendirme",
    title: "Dijital kayıt ve değerlendirme",
    summary:
      "CReMa ile ziyaretçi kaydı ve fuar sonrası süreç değerlendirmesi.",
  },
];

export const groupTitle = (id: ServiceGroupId) =>
  serviceGroups.find((g) => g.id === id)?.title ?? "";

/** Firmalara sunduğumuz üç fayda. Tüm hizmet sayfalarında tekrar vurgulanır. */
export const coreBenefits = [
  {
    title: "Daha profesyonel, daha verimli katılım",
    text: "Hedeflerinizi ve önceliklerinizi birlikte belirliyor, fuar katılımınızı bunlara göre planlıyoruz.",
  },
  {
    title: "Daha az iş yükü",
    text: "Hazırlık ve koordinasyonu biz üstleniyoruz. Siz süreci kontrol eder ve yönlendirirsiniz.",
  },
  {
    title: "Benzer bütçe, daha doğru harcama",
    text: "Her yıl ayırdığınız bütçeye benzer bir bütçeyle çalışıyor, gereksiz maliyetleri azaltıyoruz.",
  },
] as const;

export const services: Service[] = [
  // ─── Fuar stratejisi ve planlama ──────────────────────────────────────────
  {
    id: 13,
    title: {
      tr: "Strateji ve Kurumsal Hazırlık",
      en: "Strategy & Corporate Preparation",
    },
    slug: "fuar-strateji-kurumsal-hazirlik",
    group: "strateji-planlama",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Fuar hedeflerinizi, önceliklerinizi ve markanızın fuardaki mesajını birlikte netleştiriyoruz.",
      en: "We define your fair goals, priorities and brand message together.",
    },
    fullDescription: {
      tr: "Fuarın sonucunu belirleyen kararların çoğu stant kurulmadan önce verilir. Neden katıldığınız, neyi öne çıkaracağınız ve ekibinizin sahada ne anlatacağı netleştiğinde, hazırlığın geri kalanı bu kararların üzerine kurulur.",
      en: "Most decisions that shape a fair's outcome are made before the stand is built. Once the purpose, the highlights and the team's message are clear, the rest of the preparation builds on them.",
    },
    h1: "Fuar Stratejisi ve Kurumsal Hazırlık Danışmanlığı",
    seoTitle: "Fuar Stratejisi ve Kurumsal Hazırlık Danışmanlığı",
    metaDescription:
      "Fuar katılım amaçlarınızı ve önceliklerinizi birlikte belirliyor, markanızın fuardaki mesajını ve öne çıkacak ürünleri netleştiriyoruz.",
    heroText:
      "Fuar katılım amaçlarınızı birlikte belirliyor, önceliklerinize uygun bir plan oluşturuyoruz. Stant, ekip ve iletişim bu kararların üzerine kurulur.",
    geoBlock: {
      question: "Fuar stratejisi ve kurumsal hazırlık nedir?",
      answer:
        "Fuar stratejisi ve kurumsal hazırlık; bir firmanın fuara katılım amaçlarını ve önceliklerini belirlediği, markasının fuarda vereceği mesajı ve öne çıkaracağı ürünleri netleştirdiği hazırlık çalışmasıdır. Stant tasarımı, ekip görevleri ve davet planı bu kararlarla şekillenir.",
    },
    benefits: [
      "Ekibiniz sahada aynı hedefe ve aynı mesaja odaklanır.",
      "Hazırlık çerçevesini biz oluştururuz; siz karar verir ve onaylarsınız.",
      "Bütçe, önceliklerinize hizmet eden kalemlere yönelir.",
    ],
    free: true,
    ctaText: "Fuar hedeflerinizi birlikte netleştirelim",
    icon: "target",
    order: 1,
    related: ["fuar-danismanligi", "stand-tasarimi", "fuar-davet-yonetimi"],
    subServices: [
      {
        name: {
          tr: "Katılım amaçları ve öncelikler",
          en: "Participation goals & priorities",
        },
        description: {
          tr: "Fuardan beklentilerinizi birlikte belirleme",
          en: "Defining what you expect from the fair",
        },
      },
      {
        name: { tr: "Marka mesajı", en: "Brand message" },
        description: {
          tr: "Ekibinizin sahada anlatacağı ortak dil",
          en: "A shared message for your team on site",
        },
      },
      {
        name: { tr: "Öne çıkacak ürünler", en: "Highlight products" },
        description: {
          tr: "Stantta ve görüşmelerde öne çıkacak ürünlerin seçimi",
          en: "Choosing the products to feature at the stand",
        },
      },
      {
        name: { tr: "Hazırlık planı", en: "Preparation plan" },
        description: {
          tr: "Tasarım, ekip ve davet için ortak çerçeve",
          en: "A shared frame for design, team and invitations",
        },
      },
    ],
  },
  {
    id: 9,
    title: { tr: "Fuar Danışmanlığı", en: "Fair Consulting" },
    slug: "fuar-danismanligi",
    group: "strateji-planlama",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Doğru fuar seçimi, katılım modeli ve toplam katılım bütçesinin planlanması.",
      en: "Right fair selection, participation model and total participation budget planning.",
    },
    fullDescription: {
      tr: "Büyük ya da popüler bir fuar her firma için doğru fuar olmayabilir. Hedef pazarınız, ziyaretçi profili ve fuardan beklediğiniz sonuç birlikte değerlendirildiğinde katılım kararı daha sağlam bir zemine oturur.",
      en: "A large or popular fair is not necessarily the right one for every company. Weighing your target market, visitor profile and expected outcome together makes the participation decision sounder.",
    },
    h1: "Fuar Danışmanlığı: Doğru Fuardan Doğru Katılım Modeline",
    seoTitle: "Fuar Danışmanlığı ve Katılım Planlaması",
    metaDescription:
      "Hedef pazarınıza ve beklentinize uygun fuarı seçmenize yardımcı oluyor; katılım modelini ve toplam katılım bütçesini birlikte planlıyoruz.",
    heroText:
      "Fuara katılmak bir organizasyon kararı değil, yatırım kararıdır. Hangi fuara, hangi hedefle ve hangi kapsamla katılacağınızı birlikte planlıyoruz.",
    geoBlock: {
      question: "Fuar danışmanlığı ne sağlar?",
      answer:
        "Fuar danışmanlığı, bir firmanın hangi fuara neden katılacağına karar vermesine yardımcı olur ve katılım bütçesini stant, ekip, seyahat ve tanıtım kalemleriyle birlikte planlar. Böylece fuar katılımı dağınık harcamalar yerine hedefi belli bir projeye dönüşür.",
    },
    benefits: [
      "Fuar seçimi popülerliğe değil, hedef pazarınıza göre yapılır.",
      "Araştırma ve karşılaştırma bizden; siz seçenekler arasından karar verirsiniz.",
      "Toplam katılım bütçesi baştan görünür olur; sürpriz maliyetler azalır.",
    ],
    ctaText: "Katılmayı düşündüğünüz fuarı birlikte değerlendirelim",
    icon: "lightbulb",
    order: 2,
    related: [
      "fuar-strateji-kurumsal-hazirlik",
      "stand-tasarimi",
      "devlet-destegi-danismanligi",
    ],
    subServices: [
      {
        name: { tr: "Fuar seçimi", en: "Fair selection" },
        description: {
          tr: "Hedef pazarınıza ve beklentinize uygun fuarın belirlenmesi",
          en: "Identifying the fair that fits your market and goals",
        },
      },
      {
        name: { tr: "Katılım modeli", en: "Participation model" },
        description: {
          tr: "Stant, ekip ve kapsam kararları",
          en: "Stand, team and scope decisions",
        },
      },
      {
        name: { tr: "Katılım bütçesi", en: "Participation budget" },
        description: {
          tr: "Stant, ekip, seyahat ve tanıtım kalemleri tek bütçede",
          en: "Stand, team, travel and promotion in one budget",
        },
      },
      {
        name: { tr: "Hazırlık takvimi", en: "Preparation timeline" },
        description: {
          tr: "Hazırlık adımları ve sorumluluklar",
          en: "Preparation steps and responsibilities",
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
    group: "strateji-planlama",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Hedef pazarınızdaki potansiyel firmalara, fuar açılmadan önce firmanız adına ulaşıyoruz.",
      en: "We reach potential companies in your target market on your behalf before the fair opens.",
    },
    fullDescription: {
      tr: "Fuarda doğru kişilerle görüşmenin en etkili yollarından biri, onları fuardan önce davet etmektir. Hedef pazarınızdaki doğru muhataplara ulaşmak, standınızdaki görüşmelerin niteliğini artırır.",
      en: "One of the most effective ways to meet the right people at a fair is to invite them beforehand. Reaching the right contacts in your target market improves the quality of meetings at your stand.",
    },
    h1: "Fuar Öncesi Davet Yönetimi: Hedef Pazarda Doğru Muhataplara Ulaşın",
    seoTitle: "Fuar Öncesi Davet Yönetimi ve Hedef Pazar Daveti",
    metaDescription:
      "Fuar açılmadan önce hedef pazarınızdaki potansiyel firmalara firmanız adına ulaşıyor, fuar ve stant bilgilerinizi taşıyan davetlerle standınıza yönlendiriyoruz.",
    heroText:
      "Fuar açılmadan önce hedef pazarınızdaki potansiyel firmalara firmanız adına ulaşıyoruz. Standınıza tesadüfen gelenler değil, davet edilen ziyaretçiler gelir.",
    geoBlock: {
      question: "Fuar öncesi davet yönetimi nedir?",
      answer:
        "Fuar öncesi davet yönetimi; katılımcı firmanın hedef pazarındaki potansiyel müşteri ve iş ortaklarına fuardan önce ulaşılması ve bu kişilerin fuar ve stant bilgilerini içeren davetlerle standa yönlendirilmesidir. Görüşmeleri firmanın kendi ekibi yürütür.",
    },
    benefits: [
      "Standınıza hedef pazarınızdan, önceden davet edilmiş muhataplar gelir.",
      "Davet sürecini biz yürütürüz; ekibiniz görüşmelere hazırlanır.",
      "Fuar bütçenizin karşılığı, hedefli görüşmelerle güçlenir.",
    ],
    pricingNote: "Pakete göre fiyatlandırılır.",
    ctaText: "Hedef pazarlarınızı paylaşın, davet planını birlikte kuralım",
    icon: "send",
    order: 3,
    related: [
      "fuar-strateji-kurumsal-hazirlik",
      "fuar-ziyaretci-kayit-sistemi",
      "hostes-personel",
    ],
    subServices: [
      {
        name: { tr: "Hedef pazar", en: "Target markets" },
        description: {
          tr: "Öncelikli ülke ve müşteri gruplarının belirlenmesi",
          en: "Prioritising countries and customer groups",
        },
      },
      {
        name: { tr: "Davet listesi", en: "Invitation list" },
        description: {
          tr: "Davet edilecek firma ve muhatapların belirlenmesi",
          en: "Companies and contacts to invite",
        },
      },
      {
        name: { tr: "Davet gönderimi", en: "Sending invitations" },
        description: {
          tr: "Fuar, salon ve stant bilgisini taşıyan davetler",
          en: "Invitations with fair, hall and stand details",
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
    group: "strateji-planlama",
    phase: "fuar-sonrasi",
    shortDescription: {
      tr: "KOSGEB ve Ticaret Bakanlığı fuar destekleri için uygunluk kontrolü ve başvuru takibi.",
      en: "Eligibility check and application tracking for KOSGEB and Ministry of Trade fair supports.",
    },
    fullDescription: {
      tr: "Fuar desteklerinde sık yapılan hatalardan biri, uygunluğu fuar bittikten sonra araştırmaya başlamaktır. Destek kapsamı, şirket uygunluğu ve gerekli belgeler sürecin başında ele alındığında başvuru daha sağlıklı ilerler.",
      en: "A common mistake with fair supports is checking eligibility only after the fair. Reviewing scope, eligibility and required documents at the start makes the application run more smoothly.",
    },
    h1: "Fuar Devlet Desteği ve Teşvik Danışmanlığı",
    seoTitle: "Fuar Devlet Desteği ve Teşvik Danışmanlığı",
    metaDescription:
      "KOSGEB ve Ticaret Bakanlığı fuar destekleri için uygunluk kontrolü, destek kapsamındaki giderler ve başvuru belgelerinin takibi.",
    heroText:
      "Fuar katılımınız destek kapsamındaysa süreci en başından doğru planlayın. Uygunluğu kontrol ediyor, belgelerin ve başvurunun takibini üstleniyoruz.",
    geoBlock: {
      question: "Fuar devlet desteği danışmanlığı nedir?",
      answer:
        "Fuar devlet desteği danışmanlığı; şirketin ve katılacağı fuarın mevcut destek programlarına uygunluğunun kontrol edilmesi, destek kapsamındaki giderlerin belirlenmesi ve başvuru belgelerinin takip edilmesidir. Destek oranı, üst limit ve şartlar programa ve döneme göre değişebilir; nihai karar ilgili kurum tarafından verilir.",
    },
    benefits: [
      "Destek süreci fuar başlamadan planlanır; belge hataları önlenir.",
      "Uygunluk kontrolü ve belge takibi bizden; siz gerekli onayları verirsiniz.",
      "Uygun giderler doğru programa yönlendirilir; net katılım maliyetiniz düşebilir.",
    ],
    ctaText: "Katılacağınız fuarı gönderin, destek kapsamını kontrol edelim",
    icon: "award",
    order: 4,
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
        name: { tr: "Belge ve başvuru takibi", en: "Document tracking" },
        description: {
          tr: "Gerekli belgelerin ve başvurunun takibi",
          en: "Tracking documents and the application",
        },
      },
    ],
  },

  // ─── Stant ve marka sunumu ────────────────────────────────────────────────
  {
    id: 1,
    title: {
      tr: "Stand Tasarımı & Kurulumu",
      en: "Stand Design & Installation",
    },
    slug: "stand-tasarimi",
    group: "stant-marka",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Markanıza ve fuar hedeflerinize uygun stant tasarım sürecini, üretim ve kurulum koordinasyonuyla birlikte yönetiyoruz.",
      en: "We manage a stand design process that fits your brand and goals, together with production and installation coordination.",
    },
    fullDescription: {
      tr: "Stant, ziyaretçinin markanızla karşılaştığı fiziksel alandır. Ürün sunumu, görüşme alanları ve marka görünürlüğü fuar hedeflerinizle uyumlu olduğunda stant katılımın amacına hizmet eder.",
      en: "The stand is the physical space where visitors meet your brand. When product display, meeting areas and visibility match your goals, the stand serves the purpose of the participation.",
    },
    h1: "Fuar Stand Tasarımı ve Kurulum Yönetimi",
    seoTitle: "Fuar Stand Tasarımı ve Kurulum Yönetimi",
    metaDescription:
      "Markanıza ve fuar hedeflerinize uygun stant tasarım sürecini yönetiyor; tasarım, üretim ve kurulum ekiplerini sizin adınıza koordine ediyoruz.",
    heroText:
      "Markanıza ve fuar hedeflerinize uygun stant tasarım sürecini yönetiyoruz. Tasarımdan kuruluma kadar ekipleri sizin adınıza koordine ediyor, standınızı sahaya taşıyoruz.",
    geoBlock: {
      question: "Fuar stand tasarımı nedir?",
      answer:
        "Fuar stand tasarımı; marka kimliği, ziyaretçi akışı, ürün sergileme, görüşme ihtiyacı ve fuar kurallarının birlikte değerlendirilerek markaya özel bir alan oluşturulmasıdır. Tasarım, üretim, nakliye, kurulum ve sökümü kapsayabilir.",
    },
    benefits: [
      "Standınız markanızı ve fuar hedefinizi doğru yansıtır.",
      "Tasarım ve üretim ekipleriyle iletişim bizden; siz tasarımı onaylarsınız.",
      "Bütçeniz, standın amacına hizmet eden kalemlere yönelir.",
    ],
    ctaText: "Stant alanınızı ve fuarınızı paylaşın, birlikte planlayalım",
    icon: "box",
    order: 5,
    related: [
      "fuar-strateji-kurumsal-hazirlik",
      "kurumsal-hediye",
      "fotograf-video",
    ],
    subServices: [
      {
        name: { tr: "Stant tasarım süreci", en: "Stand design process" },
        description: {
          tr: "Markanıza ve hedeflerinize uygun tasarımın oluşturulması",
          en: "A design that fits your brand and goals",
        },
      },
      {
        name: {
          tr: "Tasarım ve üretim koordinasyonu",
          en: "Design & production coordination",
        },
        description: {
          tr: "Doğru ekiplerle tek noktadan iletişim",
          en: "The right teams, one point of contact",
        },
      },
      {
        name: { tr: "Kurulum ve söküm", en: "Build-up & dismantling" },
        description: {
          tr: "Üretim, nakliye, kurulum ve sökümün takibi",
          en: "Production, shipping, build-up and dismantling",
        },
      },
      {
        name: { tr: "Ekran ve baskı uygulamaları", en: "Screens & graphics" },
        description: {
          tr: "Dijital ekran, baskı ve marka uygulamalarının stantla uyumu",
          en: "Screens, print and branding aligned with the stand",
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
    group: "stant-marka",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Ziyaretçi promosyonları, müşteri hediyeleri ve VIP setler; hedef kitleye ve markaya uygun seçim.",
      en: "Visitor promotions, customer gifts and VIP sets, chosen for your audience and brand.",
    },
    fullDescription: {
      tr: "Promosyon ürünleri, markanızın ziyaretçilerle temasını fuar sonrasına taşır. Ürünün kime verileceği netleştiğinde hem marka algısına hem bütçeye uygun bir seçim yapılabilir.",
      en: "Promotional products carry your brand's contact with visitors beyond the fair. Knowing who receives them makes a choice that suits both brand and budget.",
    },
    h1: "Fuar Promosyon Ürünleri ve Kurumsal Hediyeler",
    seoTitle: "Fuar Promosyon Ürünleri ve Kurumsal Hediyeler",
    metaDescription:
      "Ziyaretçi promosyonları, müşteri hediyeleri ve VIP setler: hedef kitlenize ve marka kimliğinize uygun ürünleri seçiyor, standa teslimini koordine ediyoruz.",
    heroText:
      "Ziyaretçileriniz, müşterileriniz ve iş ortaklarınız için marka kimliğinize uygun promosyon ve hediye çözümleri hazırlıyoruz.",
    geoBlock: {
      question: "Fuar promosyon ürünleri nasıl seçilir?",
      answer:
        "Fuar promosyon ürünleri, markanın ziyaretçilerle temasını fuar sonrasına taşıyan markalı ürünlerdir. Doğru seçim; ürünün fiyatından çok hedef kitleye uygunluğu, kullanışlılığı ve marka uyumu dikkate alınarak yapılır.",
    },
    benefits: [
      "Her hedef kitleye ona uygun ürün gider; promosyon marka algınızı güçlendirir.",
      "Ürün seçimi, baskı ve teslimat takibi bizden; siz seçersiniz.",
      "Adetler ihtiyaca göre planlanır; boşa giden ürün maliyeti azalır.",
    ],
    ctaText: "Hedef kitlenizi ve bütçenizi paylaşın, seçenekleri hazırlayalım",
    icon: "gift",
    order: 6,
    related: [
      "stand-tasarimi",
      "hostes-personel",
      "fuar-strateji-kurumsal-hazirlik",
    ],
    subServices: [
      {
        name: { tr: "Ziyaretçi promosyonları", en: "Visitor promotions" },
        description: {
          tr: "Genel dağıtım için markalı ürünler",
          en: "Branded giveaways for general distribution",
        },
      },
      {
        name: { tr: "Müşteri hediyeleri", en: "Customer gifts" },
        description: {
          tr: "Nitelikli müşteriler için özel hediyeler",
          en: "Special gifts for qualified customers",
        },
      },
      {
        name: { tr: "VIP kurumsal hediyeler", en: "VIP corporate gifts" },
        description: {
          tr: "Üst düzey misafirler için özel setler",
          en: "Premium sets for senior guests",
        },
      },
      {
        name: { tr: "Baskı ve teslimat", en: "Print & delivery" },
        description: {
          tr: "Marka uygulaması ve standa teslimin koordinasyonu",
          en: "Branding and delivery to the stand",
        },
      },
    ],
  },
  {
    id: 5,
    title: { tr: "Fotoğraf & Video", en: "Photography & Video" },
    slug: "fotograf-video",
    group: "stant-marka",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Stant, ürün ve röportaj çekimleriyle fuar katılımınızı yıl boyu kullanılacak içeriğe dönüştürün.",
      en: "Turn your participation into year-round content with stand, product and interview shoots.",
    },
    fullDescription: {
      tr: "Fuar yatırımı yalnızca fuar günleriyle sınırlı kalmamalı. Stant, ürün ve görüşme görüntüleri fuar sonrasında da pazarlama ve iletişim içeriği olarak kullanılabilir.",
      en: "A fair investment should not end with the fair days. Stand, product and meeting footage can serve marketing and communication long afterwards.",
    },
    h1: "Fuar Fotoğraf ve Video Çekimi",
    seoTitle: "Fuar Fotoğraf ve Video Çekimi",
    metaDescription:
      "Stant, ürün, röportaj ve drone çekimleriyle fuar katılımınızı sosyal medya, web sitesi ve satış sunumlarında kullanılacak içeriğe dönüştürüyoruz.",
    heroText:
      "Standınızı, ürünlerinizi ve görüşmelerinizi yıl boyu kullanabileceğiniz fotoğraf ve video içeriklerine dönüştürüyoruz.",
    geoBlock: {
      question: "Fuar fotoğraf ve video çekimi neleri kapsar?",
      answer:
        "Fuar fotoğraf ve video çekimi; standın, ürünlerin, ekibin, ziyaretçi etkileşimlerinin ve röportajların profesyonel olarak kaydedilmesidir. İçerikler fuar sonrası sosyal medya, kurumsal web sitesi, satış sunumları ve sonraki fuar kampanyalarında kullanılabilir.",
    },
    benefits: [
      "Fuarınız yıl boyu kullanılacak, kurumsal kalitede içeriğe dönüşür.",
      "Çekim planı ve ekip koordinasyonu bizden; ekibiniz işine odaklanır.",
      "Tek fuar çekimiyle birçok içerik ihtiyacı karşılanır.",
    ],
    ctaText: "Fuar programınızı paylaşın, çekim planını oluşturalım",
    icon: "camera",
    order: 7,
    related: ["stand-tasarimi", "raporlama-analiz", "aksam-yemegi-gala"],
    subServices: [
      {
        name: { tr: "Stant ve atmosfer çekimi", en: "Stand & atmosphere" },
        description: {
          tr: "Genel stant ve fuar alanı görüntüleri",
          en: "General stand and hall visuals",
        },
      },
      {
        name: { tr: "Ürün ve demo çekimi", en: "Product & demo" },
        description: {
          tr: "Ürün detay ve demo görüntüleri",
          en: "Product detail and demo visuals",
        },
      },
      {
        name: { tr: "Röportaj çekimi", en: "Interviews" },
        description: {
          tr: "Yönetici ve müşteri röportajları",
          en: "Executive and customer interviews",
        },
      },
      {
        name: { tr: "Drone çekimi", en: "Drone" },
        description: {
          tr: "Kuşbakışı fuar ve stant görüntüleri",
          en: "Aerial visuals",
        },
      },
    ],
  },

  // ─── Seyahat ve saha hizmetleri ───────────────────────────────────────────
  {
    id: 3,
    title: { tr: "Otel & Konaklama", en: "Hotel & Accommodation" },
    slug: "otel-konaklama",
    group: "seyahat-saha",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Fuar alanına erişimi, ekip düzenini ve bütçeyi birlikte gözeten konaklama planı.",
      en: "Accommodation planning that balances fair access, team routine and budget.",
    },
    fullDescription: {
      tr: "Konaklama ve transfer ihtiyaçlarını fuar programıyla uyumlu planlıyoruz. Fuar alanına erişim, ekip büyüklüğü ve bütçe birlikte ele alındığında ekibiniz güne hazır başlar.",
      en: "We plan accommodation and transfers in line with the fair programme. When access, team size and budget are considered together, your team starts each day ready.",
    },
    h1: "Fuar Otel ve Konaklama Organizasyonu",
    seoTitle: "Fuar Otel ve Konaklama Organizasyonu",
    metaDescription:
      "Fuar alanına erişim, ekip büyüklüğü ve bütçenize göre otel alternatifleri; grup rezervasyonları ve transfer programıyla uyumlu konaklama planı.",
    heroText:
      "Fuar ekibinizin güne trafikte değil, müşteriye hazır başlamasını sağlıyoruz. Konaklamayı fuar programınız ve bütçenizle uyumlu planlıyoruz.",
    geoBlock: {
      question: "Fuar konaklama organizasyonu ne kapsar?",
      answer:
        "Fuar konaklama organizasyonu, fuara katılan şirket ekipleri için otel seçimi, grup rezervasyonu ve ulaşım planının koordinasyonunu kapsar. Otel seçiminde yalnızca gecelik fiyat değil, fuar alanına erişim ve ekibin günlük düzeni de dikkate alınır.",
    },
    benefits: [
      "Ekibiniz fuar alanına yakın ve dinlenmiş başlar.",
      "Rezervasyon ve değişiklik takibi bizden; siz seçeneği onaylarsınız.",
      "Konum, ulaşım ve fiyat birlikte değerlendirilir; toplam seyahat maliyeti dengelenir.",
    ],
    ctaText: "Fuarınızı ve ekip sayınızı paylaşın, konaklama seçeneklerini hazırlayalım",
    icon: "hotel",
    order: 8,
    related: ["ulasim-shuttle", "aksam-yemegi-gala", "fuar-danismanligi"],
    subServices: [
      {
        name: { tr: "Otel alternatifleri", en: "Hotel options" },
        description: {
          tr: "Farklı bütçe ve konfor seviyelerinde seçenekler",
          en: "Options across budgets and comfort levels",
        },
      },
      {
        name: { tr: "Grup rezervasyonları", en: "Group bookings" },
        description: {
          tr: "Ekip ve misafirler için rezervasyon yönetimi",
          en: "Booking management for teams and guests",
        },
      },
      {
        name: { tr: "Ulaşımla uyum", en: "Aligned with transport" },
        description: {
          tr: "Konaklamanın transfer programıyla birlikte planlanması",
          en: "Accommodation planned together with transfers",
        },
      },
    ],
  },
  {
    id: 6,
    title: { tr: "Ulaşım & Shuttle", en: "Transportation & Shuttle" },
    slug: "ulasim-shuttle",
    group: "seyahat-saha",
    phase: "fuar-oncesi",
    shortDescription: {
      tr: "Havalimanı transferi, günlük shuttle ve VIP araçlar tek ulaşım planında.",
      en: "Airport transfers, daily shuttle and VIP vehicles in a single plan.",
    },
    fullDescription: {
      tr: "Havalimanından otele, otelden fuar alanına ve akşam programlarına kadar ulaşım tek plan içinde ele alındığında ekip ve misafirler için son dakika sorunları azalır.",
      en: "When transport from airport to hotel, hotel to venue and evening events sits in one plan, last-minute issues for teams and guests decrease.",
    },
    h1: "Fuar Transfer, Shuttle ve VIP Ulaşım Hizmetleri",
    seoTitle: "Fuar Transfer, Shuttle ve VIP Ulaşım",
    metaDescription:
      "Havalimanından otele, otelden fuar alanına ve akşam programlarına kadar ulaşımı tek plan altında yönetiyoruz: günlük shuttle, VIP araç ve grup transferleri.",
    heroText:
      "Havalimanından otele, otelden fuar alanına ve akşam programlarına kadar ulaşımı fuar programınızla uyumlu tek bir plan altında yönetiyoruz.",
    geoBlock: {
      question: "Fuar shuttle hizmeti nedir?",
      answer:
        "Fuar shuttle hizmeti, otel ile fuar merkezi arasında katılımcı ekibin belirlenen saatlerde toplu olarak taşınmasıdır. Kapsamlı fuar ulaşımında havalimanı transferleri, VIP araçlar ve akşam programı ulaşımı da aynı plana dahil edilir.",
    },
    benefits: [
      "Ekip ve misafirleriniz her gün düzenli ve zamanında fuar alanında olur.",
      "Ulaşım takibi bizden; aramanız gereken tek bir muhatap olur.",
      "Araç ve güzergâh ihtiyaca göre planlanır; gereksiz transfer maliyeti oluşmaz.",
    ],
    ctaText: "Ekip ve uçuş planınızı paylaşın, transfer programınızı oluşturalım",
    icon: "car",
    order: 9,
    related: ["otel-konaklama", "aksam-yemegi-gala", "hostes-personel"],
    subServices: [
      {
        name: { tr: "Havalimanı transferi", en: "Airport transfer" },
        description: {
          tr: "Varış ve dönüş transferleri",
          en: "Arrival and return transfers",
        },
      },
      {
        name: { tr: "Günlük shuttle", en: "Daily shuttle" },
        description: {
          tr: "Otel ile fuar alanı arasında toplu ulaşım",
          en: "Hotel-to-venue group transport",
        },
      },
      {
        name: { tr: "VIP araç", en: "VIP vehicle" },
        description: {
          tr: "Şoförlü özel araç hizmeti",
          en: "Chauffeured private vehicle",
        },
      },
    ],
  },
  {
    id: 2,
    title: { tr: "Hostes & Personel", en: "Hostess & Staff" },
    slug: "hostes-personel",
    group: "seyahat-saha",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Karşılama, yönlendirme, yabancı dil desteği ve VIP misafir koordinasyonu için profesyonel ekip.",
      en: "Professional team for reception, guidance, language support and VIP coordination.",
    },
    fullDescription: {
      tr: "Standdaki ilk temas marka algısını doğrudan etkiler. Karşılama, yönlendirme ve dil desteği için doğru ekip, kendi ekibinizin görüşmelere odaklanmasını kolaylaştırır.",
      en: "The first contact at the stand directly shapes brand perception. The right team for reception, guidance and languages lets your own team focus on meetings.",
    },
    h1: "Profesyonel Fuar Hostesi ve Stand Personeli",
    seoTitle: "Fuar Hostesi ve Stand Personeli",
    metaDescription:
      "Karşılama, ziyaretçi yönlendirme, yabancı dil desteği ve VIP misafir koordinasyonu için standınızdaki ihtiyaca uygun profesyonel fuar personeli.",
    heroText:
      "İyi tasarlanmış bir stant, doğru ekip olmadan potansiyelini kullanamaz. Standınızdaki ihtiyaca ve ziyaretçi profilinize uygun profesyonel fuar personeli sağlıyoruz.",
    geoBlock: {
      question: "Fuar stand personeli ne yapar?",
      answer:
        "Fuar stand personeli; ziyaretçi karşılama, yönlendirme, kayıt, temel bilgi aktarımı, yabancı dil desteği ve stant içi düzen için görevlendirilen ekiptir. Personel seçimi fuarın ülkesi, ziyaretçi profili ve standdaki ihtiyaçlara göre yapılır.",
    },
    benefits: [
      "Standınızda markanızı doğru temsil eden bir ekip çalışır.",
      "Personel seçimi ve saha koordinasyonu bizden; ekibiniz görüşmelere odaklanır.",
      "İhtiyaca göre doğru sayıda personel planlanır.",
    ],
    ctaText: "Fuar, dil ve görev ihtiyacınızı belirtin, ekip planını oluşturalım",
    icon: "users",
    order: 10,
    related: [
      "fuar-ziyaretci-kayit-sistemi",
      "stand-ikramlari",
      "stand-tasarimi",
    ],
    subServices: [
      {
        name: { tr: "Karşılama ve yönlendirme", en: "Reception & guidance" },
        description: {
          tr: "Ziyaretçi karşılama ve stant içi yönlendirme",
          en: "Visitor reception and guidance",
        },
      },
      {
        name: {
          tr: "Ziyaretçi kayıt desteği",
          en: "Visitor registration support",
        },
        description: {
          tr: "Görüşmelerin düzenli kayda geçmesine destek",
          en: "Supporting organised meeting records",
        },
      },
      {
        name: { tr: "Yabancı dil desteği", en: "Language support" },
        description: {
          tr: "İngilizce ve diğer dillerde iletişim",
          en: "English and other languages",
        },
      },
      {
        name: { tr: "VIP misafir koordinasyonu", en: "VIP guest coordination" },
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
    group: "seyahat-saha",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Çay–kahveden VIP toplantı ikramına, markaya ve ziyaretçi profiline uygun ikram planı.",
      en: "From tea and coffee to VIP meeting catering, planned for your brand and visitors.",
    },
    fullDescription: {
      tr: "İkram, ziyaretçinin stantta rahat ve uzun süre görüşebilmesini destekleyen bir misafirperverlik unsurudur. Amaç kalabalık değil, nitelikli bir görüşme ortamıdır.",
      en: "Catering helps visitors stay and talk comfortably at the stand. The aim is not a crowd but a good meeting environment.",
    },
    h1: "Fuar Stand İkramları ve Catering Hizmeti",
    seoTitle: "Fuar Stand İkramları ve Catering",
    metaDescription:
      "Stant büyüklüğü, ziyaretçi yoğunluğu ve toplantı ihtiyacınıza göre ikram planı: çay–kahve servisinden VIP toplantı ikramlarına kadar.",
    heroText:
      "Bir fincan kahveden VIP müşteri ağırlamasına kadar standınızdaki ikram deneyimini markanıza ve ziyaretçi profilinize göre planlıyoruz.",
    geoBlock: {
      question: "Fuar stand catering hizmeti nedir?",
      answer:
        "Fuar stand catering hizmeti, ziyaretçilere ve müşterilere stant alanında yiyecek–içecek sunulmasının planlanması ve yönetilmesidir. İkram türü stant büyüklüğü, ziyaretçi yoğunluğu, fuar kuralları ve marka konumuna göre belirlenir.",
    },
    benefits: [
      "Ziyaretçiler standınızda rahat eder; görüşmeler daha verimli geçer.",
      "Tedarik ve servis bizden; ekibiniz ikramla uğraşmaz.",
      "İkram ihtiyaca göre planlanır; israf azalır.",
    ],
    ctaText: "Stant büyüklüğünüzü paylaşın, ikram planınızı hazırlayalım",
    icon: "coffee",
    order: 11,
    related: ["hostes-personel", "aksam-yemegi-gala", "stand-tasarimi"],
    subServices: [
      {
        name: { tr: "Çay ve kahve servisi", en: "Tea & coffee" },
        description: {
          tr: "Günlük standart ikram servisi",
          en: "Daily standard service",
        },
      },
      {
        name: { tr: "Premium kahve", en: "Premium coffee" },
        description: {
          tr: "Barista kalitesinde kahve hizmeti",
          en: "Barista-quality coffee",
        },
      },
      {
        name: { tr: "VIP toplantı ikramları", en: "VIP meeting catering" },
        description: {
          tr: "Özel müşteri görüşmeleri için servis",
          en: "Service for client meetings",
        },
      },
    ],
  },
  {
    id: 8,
    title: { tr: "Akşam Yemeği & Gala", en: "Dinner & Gala" },
    slug: "aksam-yemegi-gala",
    group: "seyahat-saha",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "Müşteri yemeği, bayi buluşması ve VIP networking organizasyonları.",
      en: "Customer dinners, dealer meetings and VIP networking events.",
    },
    fullDescription: {
      tr: "Fuar akşamları, ilişkileri güçlendiren önemli temas alanlarıdır. Müşteri yemeği, bayi buluşması ya da VIP ağırlama, gecenin amacına göre kurgulandığında daha değerli hale gelir.",
      en: "Fair evenings are important touchpoints for relationships. Customer dinners, dealer meetings or VIP hosting become more valuable when shaped around the purpose of the evening.",
    },
    h1: "Fuar Akşam Yemeği, Gala ve VIP Organizasyonları",
    seoTitle: "Fuar Akşam Yemeği, Gala ve VIP Organizasyonları",
    metaDescription:
      "Müşteri yemeği, distribütör buluşması ve VIP networking: mekân, menü, transfer ve misafir yönetimini gecenin amacına göre tek elden koordine ediyoruz.",
    heroText:
      "En değerli görüşmelerin bazıları fuar salonunun dışında gerçekleşir. Müşterileriniz, distribütörleriniz ve VIP misafirleriniz için akşam yemeği ve gala organizasyonları planlıyoruz.",
    geoBlock: {
      question: "Fuar gala organizasyonu nedir?",
      answer:
        "Fuar gala ve kurumsal akşam yemeği organizasyonu; fuar kapsamında müşteriler, iş ortakları, distribütörler veya şirket ekipleri için düzenlenen özel etkinliktir. Mekân, ulaşım, menü ve misafir yönetimi tek bir plan altında koordine edilir.",
    },
    benefits: [
      "Gece, ilişkilerinizi güçlendirecek bir amaçla ve markanıza uygun bir düzenle geçer.",
      "Mekân, menü ve transfer bizden; siz misafirlerinizle ilgilenirsiniz.",
      "Misafir sayısına ve amaca uygun seçimlerle gereksiz harcama yapılmaz.",
    ],
    ctaText: "Misafir sayınızı ve gecenin amacını paylaşın, birlikte planlayalım",
    icon: "utensils",
    order: 12,
    related: ["ulasim-shuttle", "otel-konaklama", "fotograf-video"],
    subServices: [
      {
        name: { tr: "Müşteri akşam yemeği", en: "Customer dinner" },
        description: {
          tr: "Özel restoran ve private dining organizasyonu",
          en: "Private dining",
        },
      },
      {
        name: { tr: "Kokteyl ve networking", en: "Cocktail & networking" },
        description: {
          tr: "Ayakta networking buluşmaları",
          en: "Standing networking events",
        },
      },
      {
        name: { tr: "VIP gala", en: "VIP gala" },
        description: {
          tr: "Büyük grup ve kurumsal gala organizasyonları",
          en: "Large corporate galas",
        },
      },
    ],
  },

  // ─── Dijital kayıt ve değerlendirme ───────────────────────────────────────
  {
    id: 15,
    title: { tr: "Saha ve Sistem Yönetimi", en: "On-site & System Management" },
    slug: "fuar-ziyaretci-kayit-sistemi",
    group: "kayit-degerlendirme",
    phase: "fuar-zamani",
    shortDescription: {
      tr: "CReMa ile ziyaretçi bilgilerini dijital ortamda düzenli biçimde kaydediyor, fuar boyunca sahada yanınızda oluyoruz.",
      en: "With CReMa we keep visitor information in a tidy digital record, and stay on site with you throughout the fair.",
    },
    fullDescription: {
      tr: "Fuar emeğinin karşılığını almak, görüşmelerin düzenli kayda geçmesiyle başlar. Kartvizitlerin bir defterde biriktiği bir fuar yerine, fuar biterken düzenli ve kolay yönetilebilir bir kayıt hazır olur.",
      en: "Getting value from a fair starts with keeping meetings on record. Instead of business cards piling up in a notebook, an organised and easy-to-manage record is ready when the fair ends.",
    },
    h1: "Fuar Ziyaretçi Kayıt Sistemi ve Saha Yönetimi",
    seoTitle: "Fuar Ziyaretçi Kayıt Sistemi ve Saha Yönetimi",
    metaDescription:
      "CReMa ile fuardaki ziyaretçi bilgileri dijital ortamda düzenli biçimde kaydedilir, kayıtlar firmanıza teslim edilir. Birlikte çalıştığımız firmalara ücretsiz.",
    heroText:
      "Fuar süresince ekibimiz sahada, yanınızda. CReMa ile ziyaretçi kayıtlarını dijital ortamda düzenli tutuyor, fuar biterken kayıtlarınızı firmanıza teslim ediyoruz.",
    geoBlock: {
      question: "Fuar ziyaretçi kaydı nasıl yapılır?",
      answer:
        "Düzenli bir fuar ziyaretçi kaydında her görüşme, ziyaretçinin iletişim bilgisi ve görüşme notuyla birlikte kayda geçer. LEYONEX'in kullandığı CReMa, fuardaki ziyaretçi bilgilerinin dijital ortamda düzenli biçimde kaydedilmesini destekler; kayıtlar firmaya teslim edilir. Müşterilere geri dönüşü firmanın kendi ekibi yürütür.",
    },
    benefits: [
      "Görüşmeler kaybolmaz; fuar emeği kullanılabilir bir kayda dönüşür.",
      "Kayıt düzenini sistem ve saha ekibimiz sağlar; ekibiniz ziyaretçiye odaklanır.",
      "Birlikte çalıştığımız firmalara fuar süresince ücretsiz sunulur.",
    ],
    free: true,
    ctaText: "Fuarınızda ziyaretçi kaydını birlikte planlayalım",
    icon: "scan",
    order: 13,
    related: ["hostes-personel", "raporlama-analiz", "fuar-davet-yonetimi"],
    subServices: [
      {
        name: {
          tr: "CReMa ile dijital kayıt",
          en: "Digital records with CReMa",
        },
        description: {
          tr: "Kartvizit ve görüşme notlarının düzenli kaydı",
          en: "Business cards and meeting notes in one record",
        },
      },
      {
        name: { tr: "Kayıtların teslimi", en: "Record handover" },
        description: {
          tr: "Kayıtların düzenli bir liste olarak firmanıza teslimi",
          en: "Records handed over to you as an organised list",
        },
      },
      {
        name: { tr: "Saha takibi", en: "On-site follow-up" },
        description: {
          tr: "Fuar boyunca ekibimiz sahada",
          en: "Our team on site during the fair",
        },
      },
      {
        name: { tr: "Anlık ihtiyaçlar", en: "On-the-spot support" },
        description: {
          tr: "Sahadaki ihtiyaçlara hızlı destek",
          en: "Quick support for on-site needs",
        },
      },
    ],
  },
  {
    id: 11,
    title: {
      tr: "Gözlem ve Gelişim Raporu",
      en: "Observation & Development Report",
    },
    slug: "raporlama-analiz",
    group: "kayit-degerlendirme",
    phase: "fuar-sonrasi",
    shortDescription: {
      tr: "Fuar sürecini değerlendiriyor, sonraki katılımlar için gelişim önerileri sunuyoruz.",
      en: "We evaluate the fair process and offer recommendations for your next participations.",
    },
    fullDescription: {
      tr: "Her fuar, bir sonrakinin hazırlığı için değerli bir deneyimdir. Hazırlık ve saha sürecinden öğrenilenler bir araya geldiğinde sonraki katılım daha sağlam bir planla başlar.",
      en: "Every fair is valuable experience for the next one. Bringing together what was learned in preparation and on site gives the next participation a sounder start.",
    },
    h1: "Fuar Sonrası Gözlem ve Gelişim Raporu",
    seoTitle: "Fuar Sonrası Gözlem ve Gelişim Raporu",
    metaDescription:
      "Fuar sürecinizi değerlendiriyor; güçlü yönleri, geliştirilebilir alanları ve sonraki katılımlar için gelişim önerilerini bir raporla sunuyoruz.",
    heroText:
      "Fuar sürecini değerlendiriyor, sonraki katılımlar için gelişim önerileri sunuyoruz. Her fuar, bir sonrakini daha iyi hazırlamanın zemini olur.",
    geoBlock: {
      question: "Fuar sonrası gelişim raporu nedir?",
      answer:
        "Fuar sonrası gelişim raporu; fuar sürecindeki gözlemleri, iyi uygulamaları ve geliştirilebilir alanları bir araya getirerek sonraki katılımlar için öneriler sunan değerlendirmedir. LEYONEX bu değerlendirmeyi birlikte çalıştığı firmalara ücretsiz sunar.",
    },
    benefits: [
      "Her fuar, bir öncekinin deneyimiyle hazırlanır.",
      "Değerlendirmeyi biz hazırlarız; siz önerileri inceleyip karar verirsiniz.",
      "Sonuç vermeyen uygulamalar tekrarlanmaz; bütçe daha doğru kalemlere yönelir.",
    ],
    free: true,
    ctaText: "Bir sonraki fuarınızı geçen fuarın deneyimiyle planlayalım",
    icon: "file-text",
    order: 14,
    related: [
      "fuar-ziyaretci-kayit-sistemi",
      "fuar-strateji-kurumsal-hazirlik",
      "devlet-destegi-danismanligi",
    ],
    subServices: [
      {
        name: { tr: "Süreç değerlendirmesi", en: "Process review" },
        description: {
          tr: "Hazırlık ve saha sürecinin birlikte değerlendirilmesi",
          en: "Reviewing preparation and on-site work together",
        },
      },
      {
        name: { tr: "Saha gözlemleri", en: "On-site observations" },
        description: {
          tr: "Fuardaki iyi uygulamalardan örnekler",
          en: "Examples of good practice at the fair",
        },
      },
      {
        name: { tr: "Gelişim önerileri", en: "Recommendations" },
        description: {
          tr: "Sonraki katılımlar için öneriler",
          en: "Recommendations for the next participations",
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
      "Fuar süreç yönetimi; bir firmanın fuar katılımının hedef ve stratejiden stant tasarımına, davetten saha operasyonuna ve fuar sonrası değerlendirmeye kadar tek merkezden planlanması ve koordine edilmesidir. Operasyon yönetimi bu sürecin yalnızca bir parçasıdır.",
  },
  {
    question: "Fuar operasyonu ile fuar süreç yönetimi arasındaki fark nedir?",
    answer:
      "Fuar operasyonu stant kurulumu, konaklama, transfer ve ikram gibi uygulama işlerini kapsar. Fuar süreç yönetimi ise bu işlerin hangi hedefe hizmet edeceğini belirler; strateji, tasarım, davet, ziyaretçi kaydı ve fuar sonrası değerlendirmeyi de içerir.",
  },
  {
    question: "LEYONEX ile çalışmak fuar bütçemi artırır mı?",
    answer:
      "Hayır. Firmaların her yıl ayırdığı bütçelere benzer bütçelerle çalışıyoruz. Gereksiz maliyetleri azaltıyor, harcamaları önceliklerinize göre yönlendiriyoruz.",
  },
  {
    question: "Yalnızca tek bir hizmet alabilir miyim?",
    answer:
      "Evet. Yalnızca stant tasarımı gibi tek bir hizmet, birkaç seçili hizmet ya da stratejiden fuar sonrası değerlendirmeye uçtan uca yönetim alabilirsiniz. Kapsamı ve bütçeyi baştan birlikte netleştiriyoruz.",
  },
  {
    question: "Yurt dışı fuarlarda da hizmet veriyor musunuz?",
    answer:
      "Evet. Aynı süreci yurt içi ve yurt dışı fuarlarda, aynı muhatapla firmanız adına yürütüyoruz.",
  },
  {
    question: "LEYONEX bir stant firması mı?",
    answer:
      "Hayır. LEYONEX bir fuar süreç yönetimi firmasıdır. Stant tasarımı ve üretiminde doğru ekiplerle çalışır, süreci sizin adınıza koordine ederiz; stant, sürecin parçalarından biridir.",
  },
];
