export type BlogCategory =
  | "devlet-destekleri"
  | "stand-tasarimi"
  | "fuar-hazirligi"
  | "uluslararasi-fuarlar"
  | "roi-olcum";

export const BLOG_CATEGORIES: Record<BlogCategory, string> = {
  "devlet-destekleri": "Devlet Destekleri",
  "stand-tasarimi": "Stand Tasarımı",
  "fuar-hazirligi": "Fuar Hazırlığı",
  "uluslararasi-fuarlar": "Uluslararası Fuarlar",
  "roi-olcum": "Değerlendirme",
};

export interface BlogSection {
  type: "p" | "h2" | "h3" | "ul" | "ol" | "table" | "callout";
  content?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  variant?: "cta" | "info";
  title?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  readTime: number;
  publishDate: string;
  tags: string[];
  seo: {
    description: string;
    keywords: string[];
  };
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  // ─── 1 ───────────────────────────────────────────────────────────────────
  {
    slug: "devlet-fuar-destekleri-2026",
    title: "Ticaret Bakanlığı Yurt Dışı Fuar Destekleri 2026: Başvuru Rehberi ve DYS Süreçleri",
    category: "devlet-destekleri",
    excerpt:
      "2026 güncellenmiş destek limitleri, m² bazlı hesaplama modeli ve DYS başvuru adımlarını inceleyin. Prestijli fuardan sektörel fuara tüm teşvik kalemlerini tek rehberde bulun.",
    readTime: 8,
    publishDate: "2026-01-15",
    tags: ["devlet desteği", "TURQUALITY", "DYS", "yurt dışı fuar", "teşvik"],
    seo: {
      description:
        "2026 Ticaret Bakanlığı yurt dışı fuar destekleri: güncel limitler, oranlar, DYS başvuru adımları ve zorunlu belgeler. KOBİ ve büyük ölçekli şirketler için eksiksiz rehber.",
      keywords: [
        "devlet fuar desteği 2026",
        "ticaret bakanlığı fuar teşviki",
        "DYS başvuru",
        "TURQUALITY fuar desteği",
        "yurt dışı fuar desteği",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Ticaret Bakanlığı tarafından 5973 Sayılı İhracat Destekleri Hakkında Karar çerçevesinde yürürlükteki devlet teşvikleri, Türk firmalarının küresel pazarlardaki rekabet gücünü artırmayı hedefler. 2026 itibarıyla destek üst limitleri önemli ölçüde yükseltilmiş ve m² bazlı \"desteğe esas tutar\" modeli standartlaştırılmıştır.",
      },
      {
        type: "h2",
        content: "2026 Yılı Destek Limitleri ve Oransal Yapı",
      },
      {
        type: "p",
        content:
          "Temel hakediş oranı %50 seviyesindedir; bakanlıkça açıklanan hedef ülkelere yönelik katılımlarda %70'e, hedef sektör entegrasyonlarında %75'e kadar yükselmektedir. KOBİ ve mikro/küçük ölçekli işletmeler ise herhangi bir hedef ülke ya da sektör kısıtlaması olmaksızın doğrudan %75 oranından yararlanmaktadır.",
      },
      {
        type: "table",
        headers: ["Fuar Kategorisi", "2026 Destek Üst Limiti", "Temel Oran", "KOBİ / Hedef Oran"],
        rows: [
          ["Yurt Dışı Prestijli Fuarlar", "3.698.274 TL", "%50", "%70 – %75"],
          ["Yurt Dışı Sektörel Fuarlar", "1.231.848 TL", "%50", "%70 – %75"],
          ["Yurt Dışı Genel Fuarlar", "738.563 TL", "%50", "%70 – %75"],
          ["Yurt İçi Prestijli Fuarlar (örn. ITM, WIN EURASIA)", "1.292.800 TL", "%50", "%75"],
          ["Yurt İçi Sektörel Fuarlar", "392.446 TL", "%50", "%75"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Güncel tutarları kontrol edin",
        text: "Destek oranları, üst limitler ve desteklenen fuar listeleri dönemsel olarak güncellenir. Başvurudan önce Ticaret Bakanlığı'nın güncel duyurularını kontrol edin; nihai destek kararı ilgili kurum tarafından verilir.",
      },
      {
        type: "h2",
        content: "Yıllık Faydalanma Hakları",
      },
      {
        type: "ul",
        items: [
          "Mikro ve küçük işletmeler: yılda en fazla 10 yurt dışı + 3 yurt içi fuar",
          "Orta ve büyük ölçekli işletmeler: yılda en fazla 5 yurt dışı + 3 yurt içi fuar",
          "Aynı fuar için toplamda en fazla 10 kez destek başvurusu yapılabilir",
        ],
      },
      {
        type: "h2",
        content: "DYS Üzerinden Başvuru Süreci",
      },
      {
        type: "ol",
        items: [
          "Sistem Kaydı: DYS kaydını tamamlayın, Kayıtlı Elektronik Posta (KEP) adresi ve nitelikli e-imza araçlarını aktif tutun.",
          "Fuar Ön Onay Denetimi: Fuarın \"Desteklenen Fuarlar Listesi\"nde olduğunu doğrulayın. Listede yoksa fuar başlangıcından en az 1 ay önce DYS üzerinden \"Fuar Ekleme Talebi\" oluşturun.",
          "m² Bazlı Destek Hesaplaması: Destek tutarı, Bakanlıkça fuar ve konum bazında belirlenen desteğe esas tutar ile fuarın metrekare bilgisi çarpılarak hesaplanır ve üst limitte durdurulur. Gözlemcinin görevlendirilmediği fuarlarda katılım ve metrekare bilgisinin tevsiki için fatura, sözleşme ve ödeme belgesi talep edilmektedir.",
          "Evrak Yükleme: Fuar bitiminden itibaren en geç 90 gün içinde DYS'ye tüm belgeleri yükleyin.",
          "İhracatçı Birlikleri Onayı: Başvuruyu bağlı olduğunuz birlik üzerinden sonuçlandırın.",
        ],
      },
      {
        type: "h2",
        content: "Zorunlu Belgeler ve 90 Gün Kuralı",
      },
      {
        type: "ul",
        items: [
          "Fatura — katılımcı firma adı, fuarın adı-tarihi ve stant metrekare bilgisini içermeli; gider kalemlerinin tamamı fatura ile belgelenmelidir",
          "Fuar katılım sözleşmesi",
          "Şirket adına düzenlenmiş banka onaylı ödeme dekontları — elden ödeme ve şirket dışı hesap transferleri kabul edilmez",
          "Stant görselleri (fotoğraf ve video — farklı açılardan, DYS'ye yüklenmek üzere)",
          "Fuar katılım belgesi",
          "İhracatçı Birlikleri dosya işlem bedeli makbuzu",
          "Pazarlama sözleşmesi ve kapasite raporu (imalatçı olmayan şirketler için)",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Destek Sürecinizi Baştan Planlayın",
        text: "LEYONEX, fuar desteklerinde uygunluk kontrolünü ve başvuru belgelerinin takibini üstleniyor.",
        buttonText: "Devlet Desteği Danışmanlığı",
        buttonHref: "/hizmetler/devlet-destegi-danismanligi",
      },
    ],
  },

  // ─── 2 ───────────────────────────────────────────────────────────────────
  {
    slug: "fuar-standi-fiyatlari-2026",
    title: "Fuar Standı Fiyatları 2026: m² Maliyet Rehberi ve Bütçe Hesaplama",
    category: "stand-tasarimi",
    excerpt:
      "Modüler standdan çift katlı yapıya, Türkiye'den Avrupa'ya m² bazlı 2026 stand maliyetlerini ve sıklıkla atlanan gizli kalemleri bu rehberde bulun.",
    readTime: 6,
    publishDate: "2026-01-22",
    tags: ["stand fiyatları", "fuar bütçesi", "modüler stand", "ahşap stand", "m² maliyet"],
    seo: {
      description:
        "2026 fuar standı fiyatları: modüler, ahşap, maksima ve çift katlı stant için Türkiye ve Avrupa m² maliyetleri, bütçe kalemleri ve gizli masraflar.",
      keywords: [
        "fuar standı fiyatları 2026",
        "fuar stant m² maliyeti",
        "modüler stand fiyatı",
        "ahşap stand maliyeti",
        "fuar bütçesi hesaplama",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Fuar katılımlarında stant tasarımı ve inşası toplam bütçenin en büyük kalemini oluşturur. Enflasyonist süreçler, küresel hammadde maliyetleri ve işçilik giderlerinin etkisiyle 2026 yılı stant m² maliyetleri geniş bir yelpazede değişkenlik göstermektedir.",
      },
      {
        type: "h2",
        content: "Bütçeyi Oluşturan Dört Temel Kalem",
      },
      {
        type: "ul",
        items: [
          "Malzeme: ahşap, alüminyum, pleksi ve zemin kaplama",
          "Tasarım ve montaj: konsept tasarım, imalat işçiliği, kurulum ve söküm",
          "Lojistik: nakliye, gümrükleme ve fuar alanı depolama",
          "Altyapı: elektrik bağlantısı, enerji tüketimi, internet ve temizlik",
        ],
      },
      {
        type: "p",
        content:
          "Kalemlerin bütçe içindeki payı stant tipine, fuarın ülkesine ve tasarım detaylarına göre değişir.",
      },
      {
        type: "h2",
        content: "Bölgesel m² Maliyet Karşılaştırması (2026)",
      },
      {
        type: "table",
        headers: ["Stant Mimarisi", "Türkiye (€/m²)", "Avrupa (€/m²)", "Kuzey Amerika / Orta Doğu ($/m²)"],
        rows: [
          ["Standart Modüler (Alüminyum Panelli)", "80 – 130", "180 – 280", "220 – 350"],
          ["Maksima / Truss Sistem", "140 – 220", "300 – 450", "380 – 550"],
          ["Özel Ahşap Tasarım (MDF/Lake)", "250 – 450", "550 – 950", "700 – 1.200"],
          ["Çift Katlı (Mezanin) Yapı", "350 – 600", "800 – 1.400", "1.000 – 1.800"],
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Aralıklar yaklaşıktır",
        text: "Tablodaki değerler genel piyasa aralıklarını gösterir; fuar, şehir, malzeme ve tasarım detayına göre önemli ölçüde değişebilir.",
      },
      {
        type: "h2",
        content: "Sıkça Atlanan Gizli Maliyetler",
      },
      {
        type: "ul",
        items: [
          "Rigging (tavandan görsel asma) bedelleri — fuar bazında değişir, sözleşmede net görülmeyebilir",
          "Erken sipariş süresini kaçırma: elektrik, internet ve rigging için Early Bird son tarihinden sonra ek bedel uygulanabilir",
          "Standın zamanında boşaltılmaması durumunda organizatörün uyguladığı cezalar",
          "Ana elektrik pano bağlantı ücreti (kW bazında ücretlendirilir)",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Stant Bütçenizi Birlikte Planlayalım",
        text: "Alan ölçülerinizi ve fuar bilgilerinizi paylaşın; markanıza ve hedeflerinize uygun stant sürecini birlikte planlayalım.",
        buttonText: "Görüşme Talebi",
        buttonHref: "/teklif-al",
      },
    ],
  },

  // ─── 3 ───────────────────────────────────────────────────────────────────
  {
    slug: "ahsap-mi-moduler-stand-mi",
    title: "Ahşap mı, Modüler Stand mı? Sektöre ve Bütçeye Göre Karşılaştırmalı Seçim Rehberi",
    category: "stand-tasarimi",
    excerpt:
      "İki stand mimarisinin maliyet, kurulum süresi, tasarım özgürlüğü ve çevresel etki açısından karşılaştırması; sektörünüze göre hangi sistemin size uyduğunu öğrenin.",
    readTime: 5,
    publishDate: "2026-01-29",
    tags: ["ahşap stand", "modüler stand", "maksima sistem", "stand tasarımı", "fuar"],
    seo: {
      description:
        "Ahşap stand mı, modüler (maksima) stand mı? Maliyet, kurulum, tasarım özgürlüğü ve sektör uygunluğu açısından 2026 kapsamlı karşılaştırma rehberi.",
      keywords: [
        "ahşap fuar standı",
        "modüler stand tasarımı",
        "maksima stand sistemi",
        "fuar stant seçimi",
        "stand karşılaştırma",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Fuar standı malzemesinin seçimi; markanın hedeflediği prestij seviyesi, sergilenecek ürünlerin ağırlığı ve bütçe optimizasyonu ile doğrudan ilintilidir. Her iki sistemin de güçlü ve zayıf yanlarını anlamak, sahada pişman olmamak için kritiktir.",
      },
      {
        type: "h2",
        content: "Ahşap Stand Tasarımları",
      },
      {
        type: "p",
        content:
          "MDF veya suntalam levhalar özel marangozluk işçiliğiyle işlenir; birleşim yerleri macunlanarak boyanır ya da kaplanır. Sınırsız kavis, amorf formlar, gizli niş aydınlatmaları ve kurumsal renklere tam uyum imkânı tanır. Lüks segment ürün grupları ve holding seviyesi katılımlar için yüksek marka algısı yaratır.",
      },
      {
        type: "ul",
        items: [
          "Üretim maliyetleri yüksektir",
          "Sahadaki kurulum süresi modüler sistemlere göre daha uzundur",
          "Genellikle tek kullanımlık yapısı nedeniyle çevresel sürdürülebilirlik değeri düşüktür",
          "Uluslararası fuarlarda alev geciktirici (B1) sertifika zorunluluğu ek maliyet getirir",
        ],
      },
      {
        type: "h2",
        content: "Modüler ve Maksima Stand Sistemleri",
      },
      {
        type: "p",
        content:
          "Tekrar kullanılabilir alüminyum profillerin kilit mekanizmalarıyla birleştirilmesi ve aralarına ahşap veya tekstil panellerin yerleştirilmesiyle kurulur. Ahşap standa kıyasla genellikle daha ekonomiktir. Kurulumu hızlı, lojistik hacmi düşüktür; parçaların büyük bölümü tekrar kullanılabildiği için çevre dostudur.",
      },
      {
        type: "ul",
        items: [
          "Standart dik açılı profiller nedeniyle tamamen organik formlar elde etmek güçtür",
          "Lüks tüketim veya yüksek mimari detay arayan markalar için yetersiz kalabilir",
        ],
      },
      {
        type: "h2",
        content: "Sektöre Göre Hangi Sistem?",
      },
      {
        type: "table",
        headers: ["Sektör", "Önerilen Sistem", "Gerekçe"],
        rows: [
          ["Lüks tüketim, mobilya, tekstil", "Ahşap / Hibrit", "Yüksek prestij algısı, özel form ihtiyacı"],
          ["Ağır sanayi, otomotiv, makine", "Ahşap veya Hibrit", "Ağır ekipman taşıyıcılığı, büyük alan"],
          ["Bilişim, elektronik, yazılım", "Modüler (Maksima)", "Hızlı kurulum, teknolojik görünüm"],
          ["Medikal, gıda, ambalaj", "Modüler (Maksima)", "Hijyenik görünüm, fiyat/performans"],
          ["FMCG, hızlı tüketim", "Modüler (Maksima)", "Bütçe optimizasyonu, tekrar kullanım"],
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Markanıza Uygun Stant Yaklaşımını Birlikte Belirleyelim",
        text: "Ürününüzü, fuarınızı ve bütçenizi paylaşın; ilk görüşmede markanıza uygun stant yaklaşımını birlikte değerlendirelim.",
        buttonText: "Görüşme Talebi",
        buttonHref: "/teklif-al",
      },
    ],
  },

  // ─── 4 ───────────────────────────────────────────────────────────────────
  {
    slug: "yurtdisinda-fuara-katilim-rehberi",
    title: "Yurt Dışında Fuara Katılım Rehberi: Gümrük, Lojistik ve İSG Kuralları",
    category: "uluslararasi-fuarlar",
    excerpt:
      "ATA Karnesi, alev geciktirici sertifika zorunluluğu, elektrik güvenliği ve saha İSG kuralları — uluslararası fuar operasyonlarında aksaklığa yol açan tüm teknik detaylar.",
    readTime: 7,
    publishDate: "2026-02-05",
    tags: ["yurt dışı fuar", "ATA karnesi", "gümrük", "İSG", "uluslararası fuar"],
    seo: {
      description:
        "Yurt dışı fuar katılımı için ATA Karnesi, alev geciktirici B1 sertifikası, elektrik güvenliği ve saha İSG kuralları: Avrupa ve Orta Doğu fuar merkezleri rehberi 2026.",
      keywords: [
        "yurt dışı fuar katılımı",
        "ATA karnesi fuar",
        "fuar lojistik gümrük",
        "fuar İSG kuralları",
        "alev geciktirici sertifika fuar",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Uluslararası fuar operasyonlarında yaşanan aksaklıkların büyük bölümü eksik gümrük belgeleri ve hedef ülkenin İş Sağlığı ve Güvenliği (İSG) standartlarına uyumsuzluktan kaynaklanmaktadır. Bu iki alan doğru planlanmadığında stant açılışı engellenebilir, süreç ağır maddi cezalara yol açabilir.",
      },
      {
        type: "h2",
        content: "ATA Karnesi ve Geçici İthalat Prosedürleri",
      },
      {
        type: "p",
        content:
          "Yurt dışına götürülen stant yapım malzemeleri, sergileme ekipmanları ve demo ürünlerin gümrük vergilerinden muaf tutulması için Uluslararası Geçici İthalat Sözleşmesi kapsamında ATA Karnesi düzenlenmelidir. ATA Karnesi ile çıkarılan ürünlerin fuar sonrasında eksiksiz olarak menşe ülkeye geri getirilmesi yasal zorunluluktur.",
      },
      {
        type: "ul",
        items: [
          "Fuarda dağıtılacak broşür, katalog ve promosyon malzemeleri 'Kat'i İhracat' beyannamesiyle gümrüklenir",
          "İkramlık gıda ürünleri için hedef ülkenin özel ithalat izinleri gerekebilir",
          "ATA Karnesi işlemleri fuar tarihinden en az 3–4 hafta önce başlatılmalıdır",
        ],
      },
      {
        type: "h2",
        content: "Uluslararası İSG Standartları — Avrupa ve Kuzey Amerika",
      },
      {
        type: "ul",
        items: [
          "Alev Geciktiricilik (Flame Retardant) Sertifikası: ahşap, kumaş, halı ve plastik malzemelerin DIN 4102 B1 veya EN 13501-1 standartlarına uygun yanmazlık sertifikalarına sahip olması ve bu belgelerin sahada hazır bulundurulması zorunludur",
          "Elektrik ve Statik Güvenlik: kaçak akım rölesi zorunluluğu; kapalı tavan alanı bulunan veya fuar idaresinin belirlediği eşik m² üzerindeki stantlarda onaylı statik projenin fuar yönetimine sunulması gerekir — kesin eşik değeri fuara ve ülkeye göre değişir, organizatörden yazılı teyit alınmalıdır",
          "Saha Çalışma Kuralları: montaj ve söküm günlerinde çelik burunlu iş ayakkabısı, reflektörlü yelek ve baret zorunludur; yüksek montajlarda emniyet kemeri şart koşulur",
        ],
      },
      {
        type: "h2",
        content: "Fuar Alanına Göre Dikkat Edilecekler",
      },
      {
        type: "table",
        headers: ["Bölge / Fuar Alanı", "Kritik Kural", "Öne Çıkan Gereksinim"],
        rows: [
          ["Avrupa (Messe Frankfurt, Fiera Milano vb.)", "En katı İSG denetimleri", "B1 sertifikası, statik proje, KEP belgesi"],
          ["Orta Doğu (Dubai World Trade Centre vb.)", "Yerel ithalat yasaları", "Ürün halal/sağlık sertifikaları"],
          ["Rusya (Expocentre vb.)", "Gümrük gecikmesi riski yüksek", "ATA Karnesi + yedek parça planı"],
          ["Kuzey Amerika (Las Vegas CC vb.)", "Union labor kuralları", "Yerel montaj ekibi zorunluluğu kontrolü"],
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Yurt Dışı Fuar Katılımınızı Birlikte Planlayalım",
        text: "LEYONEX, yurt dışı fuarlarda hazırlık ve saha süreçlerini tek iletişim noktası üzerinden koordine ediyor.",
        buttonText: "Fuar Danışmanlığı",
        buttonHref: "/hizmetler/fuar-danismanligi",
      },
    ],
  },

  // ─── 5 ───────────────────────────────────────────────────────────────────
  {
    slug: "kucuk-stantta-alan-optimizasyonu",
    title: "Küçük Metrekareli Stantlarda Alan Optimizasyonu: 9–20 m² İçin Tasarım Stratejileri",
    category: "stand-tasarimi",
    excerpt:
      "Küçük stant alanında büyük etki yaratmanın mimarisi: dikey alan kullanımı, SEG lightbox aydınlatma ve tek güçlü mesaj ilkesiyle ziyaretçi trafiğini maksimuma çıkarın.",
    readTime: 5,
    publishDate: "2026-02-12",
    tags: ["küçük stant", "alan optimizasyonu", "9m² stand", "stand tasarımı", "fuar"],
    seo: {
      description:
        "9–20 m² küçük fuar standı tasarım stratejileri: dikey mimari, SEG lightbox, minimalist mobilya ve tek mesaj ilkesiyle ziyaretçi çeken stant düzeni.",
      keywords: [
        "küçük fuar standı tasarımı",
        "9m2 fuar standı",
        "küçük stant alan optimizasyonu",
        "fuar standı ziyaretçi çekme",
        "küçük bütçe stand tasarımı",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Küçük ölçekli stant alanlarında yapılan en büyük tasarım hatası, kısıtlı alanı büyük mobilyalar ve kapalı masif duvarlarla boğmaktır. 9–20 m² arasındaki alanlarda ziyaretçi trafiğini maksimuma çıkarmak ve ferah bir algı yaratmak belirli mimari teknikleri gerektirir.",
      },
      {
        type: "h2",
        content: "1. Dikey Mimari ve Yüksek Tabela Kullanımı",
      },
      {
        type: "p",
        content:
          "Taban alanı dar olduğunda markanın görünürlüğü dikey düzleme kaydırılmalıdır. Fuar idaresinin izin verdiği maksimum yükseklik sınırı (genellikle 3,00–3,80 m) sonuna kadar kullanılarak logo ve kurumsal grafikler üst kote taşınmalıdır. Böylece uzak koridorlardan gelen ziyaretçiler standı fark edebilir.",
      },
      {
        type: "h2",
        content: "2. Aydınlatma ve Görsel Derinlik Algısı",
      },
      {
        type: "ul",
        items: [
          "Kesintisiz ışıklı tekstil panolar (SEG Lightbox) duvar yüzeylerine derinlik katar ve karanlık noktaları ortadan kaldırır",
          "Standın ön kısmını kapatan devasa karşılama bankoları yerine kenarlara entegre minimalist yüksek masalar tercih edilmeli",
          "Açık geçiş koridorları bırakılarak ziyaretçinin içeri girmesi kolaylaştırılmalıdır",
          "Spot aydınlatmalar ürünlere yönlendirilerek kontrastlı odak noktaları oluşturulmalı",
        ],
      },
      {
        type: "h2",
        content: "3. Tek Güçlü Mesaj İlkesi",
      },
      {
        type: "p",
        content:
          "Küçük stantlarda birden fazla mesaj vermek yerine tek bir güçlü ürün veya slogan üzerine odaklanmış sade bir iletişim dili benimsenmelidir. Ziyaretçinin 3 saniye içinde \"Bu firma ne yapıyor?\" sorusuna yanıt bulması, uzun vadeli marka hatırlanırlığını artırır.",
      },
      {
        type: "table",
        headers: ["Yaygın Hata", "Doğru Yaklaşım"],
        rows: [
          ["Giriş önünde büyük banko barikatı", "Kenara entegre minimalist tezgah, açık koridor"],
          ["Çok sayıda farklı ürün ve mesaj", "Tek flagship ürün veya hizmet odağı"],
          ["Sadece genel ortam aydınlatması", "Ürün bazlı spot + SEG lightbox kombinasyonu"],
          ["Duvar boyunca masif panel", "Açık raflar, şeffaf vitrin veya ışıklı pano"],
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Küçük Alanda Güçlü Bir Stant",
        text: "Her ölçekte stant için markanıza ve fuar hedeflerinize uygun tasarım sürecini yönetiyoruz.",
        buttonText: "Stant Tasarımı Hizmeti",
        buttonHref: "/hizmetler/stand-tasarimi",
      },
    ],
  },

  // ─── 6 ───────────────────────────────────────────────────────────────────
  {
    slug: "fuar-katiliminda-10-hata",
    title: "Fuar Katılımında En Sık Yapılan 10 Hata ve Bütçeyi Korumanın Yolları",
    category: "fuar-hazirligi",
    excerpt:
      "Erken sipariş indirimini kaçırmaktan giriş önü banko barikatına, DYS süresini atlamaktan eğitimsiz personele — bütçe kaybına yol açan 10 kritik hata ve nasıl önlenir.",
    readTime: 6,
    publishDate: "2026-02-19",
    tags: ["fuar hataları", "fuar bütçesi", "DYS", "stand personeli", "fuar hazırlığı"],
    seo: {
      description:
        "Fuar katılımında yapılan 10 yaygın hata: erken sipariş kaçırma, giriş barikatı, eksik sertifika, DYS 90 gün süresini atlama ve daha fazlası için çözümler.",
      keywords: [
        "fuar katılım hataları",
        "fuar bütçesi koruma",
        "DYS başvuru süresi",
        "fuar stand personeli",
        "fuar organizasyonu hataları",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Fuar katılımcısı firmaların bütçelerinde oluşan kayıpların ve verimsizliklerin incelenmesi, tekrarlayan operasyonel hataları gün yüzüne çıkarmaktadır. Bu 10 hatadan kaçınmak, hem doğrudan tasarruf sağlar hem de devlet teşviklerinizin yanmasını önler.",
      },
      {
        type: "ol",
        items: [
          "Erken Sipariş İndirimlerini Kaçırmak: Fuar organizatörünün elektrik, internet, su ve rigging için ilan ettiği Early Bird tarihlerini geçirmek, aynı hizmetler için önemli ölçüde ek ödeme anlamına gelebilir.",
          "Giriş Önünde Banko Barikatı Oluşturmak: Karşılama bankosunu standın tam girişine koymak ziyaretçilerin içeri girmesini engeller; banka kenara alınmalı, koridor açık bırakılmalıdır.",
          "Yetersiz ve Hatalı Aydınlatma: Yalnızca genel ortam aydınlatması kullanmak sergilenen ürünleri sönük bırakır. Ürün bazlı spot aydınlatma ihmal edilmemelidir.",
          "Resmi Ödeme Kurallarına Uymamak: Fuar harcamalarını şirket hesabı dışından yapmak veya elden ödeme gerçekleştirmek, Ticaret Bakanlığı teşviklerinin tamamen yanmasına yol açar.",
          "DYS 90 Gün Süresini Kaçırmak: Fuar bitiminden sonraki 90 günlük yasal başvuru süresini geçirmek geri dönüşü olmayan hak kaybıdır.",
          "Eksik Malzeme Sertifikasyonu: Yanmazlık belgesi (B1) bulunmayan kumaş veya ahşap kullanan stantların açılışına fuar idaresi izin vermez.",
          "Lojistik ve Gümrük Zamanlaması Hataları: ATA Karnesi süreçlerini geç başlatmak stant malzemelerinin gümrükte kalmasına ve fuar kaçırılmasına neden olabilir.",
          "Hazırlıksız Stant Personeli: Ürünlere hâkim olmayan ya da stantta pasif kalan personel, değerli görüşme fırsatlarının kaçmasına yol açar.",
          "Ziyaretçi Kayıtlarını Düzensiz Tutmak: Kartvizitleri elle toplamak ve görüşme notlarını sonradan hatırlamaya çalışmak görüşmelerin kaybolmasına yol açar. CReMa gibi dijital bir kayıt sistemi, ziyaretçi bilgilerinin fuar sırasında düzenli biçimde kaydedilmesini destekler.",
          "Hedefsiz Fuar Katılımı: Fuar öncesinde mevcut ve potansiyel müşterilere davet gönderilmemesi ve görüşme takviminin oluşturulmaması, sahadaki verimi önemli ölçüde düşürür.",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Fuar Hazırlığınızı Birlikte Planlayalım",
        text: "LEYONEX fuar öncesinden fuar sonrasına kadar hazırlık ve saha süreçlerinizi tek merkezden koordine ediyor.",
        buttonText: "Fuar Danışmanlığı",
        buttonHref: "/hizmetler/fuar-danismanligi",
      },
    ],
  },

  // ─── 7 ───────────────────────────────────────────────────────────────────
  {
    slug: "cift-katli-fuar-standi-tasarimi",
    title: "Çift Katlı (Mezanin) Fuar Standı Tasarımı: Statik Onaylar ve Mühendislik Esasları",
    category: "stand-tasarimi",
    excerpt:
      "VIP ağırlama odası ve ikinci kat ofis alanı için mezanin stant tasarlıyorsanız statik hesap zorunluluğu, yükseklik limitleri ve ek maliyetleri bu rehberde bulun.",
    readTime: 6,
    publishDate: "2026-02-26",
    tags: ["çift katlı stand", "mezanin stand", "statik proje", "fuar tasarımı", "VIP ağırlama"],
    seo: {
      description:
        "Çift katlı (mezanin) fuar standı tasarımı: statik hesap zorunluluğu, yükseklik limitleri, metrekare kısıtları ve ek maliyet kalemleri. Fuar idaresi onay süreci rehberi.",
      keywords: [
        "çift katlı fuar standı",
        "mezanin stand tasarımı",
        "fuar statik proje",
        "VIP ağırlama odası stand",
        "iki katlı fuar stantı",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Prestijli büyük üreticiler ve küresel markalar, sınırlı taban alanında daha fazla kullanım alanı yaratmak ve üst katta VIP ağırlama odaları oluşturmak amacıyla çift katlı (mezanin) stant mimarisini tercih etmektedir. Ancak bu tercih beraberinde ciddi mühendislik sorumlulukları getirir.",
      },
      {
        type: "h2",
        content: "Neden Çift Katlı Stand?",
      },
      {
        type: "ul",
        items: [
          "Sınırlı taban alanından iki kat kullanım alanı elde edilir",
          "Üst katta özel VIP ağırlama salonu veya toplantı odası kurulabilir",
          "Alt kat açık ürün sergileme, üst kat kapalı müzakere alanı olarak işlevlendirilebilir",
          "Yüksek yapı, uzak koridorlardan marka görünürlüğünü artırır",
        ],
      },
      {
        type: "h2",
        content: "Yasal Şartlar ve Statik Proje Onayları",
      },
      {
        type: "ul",
        items: [
          "Statik Hesap Raporu: İkinci katın taşıyıcı çelik/alüminyum konstrüksiyonu en az 400–500 kg/m² hareketli yük taşıma kapasitesine sahip olmalı; bu hesap yetkili İnşaat Mühendisi tarafından yapılarak fuar teknik idaresine onaylatılmalıdır",
          "Merdiven Güvenliği: İkinci kata ulaşan merdivenin genişliği, korkuluk yüksekliği ve kaymaz yüzey koşulları fuar idaresi standartlarına uygun olmalıdır",
          "Sprinkler / Yangın Algılama: Kapalı üst kat alanında bazı fuar merkezleri ek yangın algılama sistemi talep etmektedir",
        ],
      },
      {
        type: "h2",
        content: "Yükseklik ve Metrekare Limitleri",
      },
      {
        type: "p",
        content:
          "Çift katlı yapılarda toplam yükseklik genellikle 4,50–6,00 m arasında değişir. Fuar idareleri üst kat alanının, alt kat taban alanının %50–80'ini geçmemesini şart koşar. Bu oran fuara ve ülkeye göre farklılık gösterir; projeye başlamadan önce organizatörden yazılı onay alınmalıdır.",
      },
      {
        type: "h2",
        content: "Ek Maliyet Unsurları",
      },
      {
        type: "ul",
        items: [
          "Organizatörler üst kat m² alanı için birim yer kirasının yaklaşık %50'si oranında ek alan bedeli talep eder",
          "Statik proje hazırlama ve onay süreci ek mühendislik bedeli doğurur",
          "Çelik/alüminyum taşıyıcı sistem ahşap veya standart modülere kıyasla önemli ölçüde ağırdır, nakliye maliyeti artar",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Çift Katlı Stant Projenizi Planlayalım",
        text: "Çift katlı stant ihtiyacınızı paylaşın; tasarım ve üretim sürecini doğru ekiplerle birlikte planlayalım.",
        buttonText: "Stant Tasarımı Hizmeti",
        buttonHref: "/hizmetler/stand-tasarimi",
      },
    ],
  },

  // ─── 8 ───────────────────────────────────────────────────────────────────
  {
    slug: "fuar-standinda-aydinlatma-tasarimi",
    title: "Fuar Standında Görsel İletişim ve Aydınlatma Tasarımı: Kelvin Rehberi ve Armatür Seçimi",
    category: "stand-tasarimi",
    excerpt:
      "Wallwasher, spot ve SEG Lightbox arasındaki fark; sektöre göre doğru Kelvin değeri seçimi ve aydınlatmanın ziyaretçi trafiğine etkisi: kapsamlı rehber.",
    readTime: 5,
    publishDate: "2026-03-05",
    tags: ["fuar aydınlatma", "stand tasarımı", "SEG lightbox", "Kelvin değeri", "görsel iletişim"],
    seo: {
      description:
        "Fuar standı aydınlatma tasarımı: wallwasher LED, spot armatür ve SEG Lightbox kullanımı; sektöre göre 3000K–6000K Kelvin değeri seçim rehberi 2026.",
      keywords: [
        "fuar stand aydınlatması",
        "fuar standı ışıklandırma",
        "SEG lightbox stand",
        "Kelvin değeri fuar",
        "stand tasarımı aydınlatma",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Aydınlatma mimarisi, ziyaretçi trafiğini standın içerisine çekmede ve sergilenen ürünlerin albeni değerini yükseltmede belirleyici bir role sahiptir. Doğru ışık seçimi marka algısını güçlendirirken yanlış tercih, iyi tasarlanmış bir standı bile sıradan kılabilir.",
      },
      {
        type: "h2",
        content: "Üç Temel Armatür Tipi ve Kullanım Alanları",
      },
      {
        type: "ul",
        items: [
          "Wallwasher LED: geniş dikey duvar yüzeylerine eşit ve kesintisiz ışık yayarak karanlık noktaları ortadan kaldırır; kurumsal grafik duvarlarında zorunludur",
          "Dar Açılı Spot (24°–36°): vitrin veya ürün odaklı vurgu için; ürün üzerinde yüksek kontrastlı odak noktaları oluşturur",
          "SEG Lightbox (Gerilmeli Tekstil Pano): arkadan homojen aydınlatma sağlar; kurumsal görsellerin canlılığını artırır, küçük stantlarda alan derinliği algısı yaratır",
        ],
      },
      {
        type: "h2",
        content: "Sektöre Göre Kelvin (K) Değeri Seçimi",
      },
      {
        type: "table",
        headers: ["Kelvin Değeri", "Işık Algısı", "Uygun Sektör / Alan"],
        rows: [
          ["3.000 K — Sıcak Beyaz", "Davetkar, sıcak, lüks", "Mobilya, ahşap ürünler, tekstil, VIP görüşme odaları"],
          ["4.000 K — Doğal Nötr Beyaz", "Net, modern, güven verici", "Medikal, otomotiv, gıda, genel B2B stant alanları"],
          ["6.000 K — Soğuk Beyaz", "Teknolojik, hijyenik, endüstriyel", "Ağır sanayi, makine, bilişim, elektronik aksamlar"],
        ],
      },
      {
        type: "h2",
        content: "Pratik Tasarım Kuralları",
      },
      {
        type: "ul",
        items: [
          "Genel aydınlatma ile ürün spotlarını katmanlı kullanın; tek tip ışık düzlük hissi verir",
          "Ortam aydınlatması standın genelini kapsamalı, spot armatürler ürüne odaklanmalıdır",
          "LED tercih edin: ısı yükleri daha düşük, enerji tüketimi azaltılmış, renk kararlılığı yüksek",
          "Aydınlatma düzeni 3D tasarım aşamasında simüle edin; sahada değişiklik yapmak hem maliyetli hem zamana karşı yarıştır",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Aydınlatmayı Tasarımla Birlikte Planlayın",
        text: "Aydınlatma, stant tasarım sürecinin bir parçası olarak ele alındığında sahada sürpriz yaşanmaz.",
        buttonText: "Stant Tasarımı Hizmeti",
        buttonHref: "/hizmetler/stand-tasarimi",
      },
    ],
  },

  // ─── 9 ───────────────────────────────────────────────────────────────────
  // Adres korunur; içerik ROI formülü ve lead sınıflandırması yerine fuar sonrası
  // değerlendirme ilkelerine odaklanır.
  {
    slug: "fuarda-lead-yonetimi-roi-hesaplama",
    title: "Fuar Sonrası Değerlendirme: Ziyaretçi Kayıtlarından Bir Sonraki Fuara",
    category: "roi-olcum",
    excerpt:
      "Fuar katılımını ziyaretçi sayısıyla değil, hedeflerle değerlendirmek: düzenli ziyaretçi kaydı, zamanında takip ve bir sonraki fuara taşınacak dersler.",
    readTime: 5,
    publishDate: "2026-03-12",
    tags: ["fuar sonrası", "ziyaretçi kaydı", "CReMa", "fuar değerlendirmesi", "fuar hazırlığı"],
    seo: {
      description:
        "Fuar katılımınızı hedeflerinize göre değerlendirin: kayıtları düzenli tutun, görüşmeleri zamanında takip edin, öğrendiklerinizi sonraki fuara taşıyın.",
      keywords: [
        "fuar sonrası değerlendirme",
        "fuar ziyaretçi kaydı",
        "fuar sonrası takip",
        "fuar katılım değerlendirmesi",
        "CReMa",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Bir fuar katılımını yalnızca standa gelen ziyaretçi sayısıyla değerlendirmek yanıltıcı olabilir. Asıl soru, fuara hangi hedeflerle gidildiği ve bu hedeflere ne ölçüde yaklaşıldığıdır.",
      },
      {
        type: "h2",
        content: "Değerlendirme, fuardan önce belirlenen hedeflerle başlar",
      },
      {
        type: "p",
        content:
          "Yeni pazarlara açılmak, distribütör görüşmeleri yapmak ya da marka bilinirliğini artırmak gibi hedefler fuardan önce netleştiğinde, fuar sonrasında neyin iyi gittiğini ve neyin geliştirilebileceğini görmek kolaylaşır.",
      },
      {
        type: "h2",
        content: "Ziyaretçi kayıtlarını düzenli tutun",
      },
      {
        type: "p",
        content:
          "CReMa, fuardaki ziyaretçi bilgilerinin dijital ortamda düzenli biçimde kaydedilmesini destekler. Kartvizit ve görüşme notu aynı kayıtta toplanır; fuar sonunda kayıtlar düzenli bir liste olarak firmaya teslim edilir.",
      },
      {
        type: "p",
        content:
          "Organizatörlerin sunduğu yaka kartı okuyucular ya da dijital formlar da kullanılabilir. Hangi yöntem seçilirse seçilsin, önemli olan tüm görüşmelerin tek bir düzende toplanmasıdır.",
      },
      {
        type: "h2",
        content: "Her görüşmeye bir sonraki adımı not edin",
      },
      {
        type: "p",
        content:
          "Görüşmenin hemen ardından kısa bir not almak, fuar sonrasında takibi kolaylaştırır: teklif mi gönderilecek, numune mi istenecek, yoksa yeni bir toplantı mı planlanacak?",
      },
      {
        type: "h2",
        content: "Takibi geciktirmeyin",
      },
      {
        type: "p",
        content:
          "Fuardan sonraki ilk günler, görüşmelerin hem sizin hem ziyaretçilerinizin aklında taze olduğu dönemdir. Takip planını fuar bitmeden hazırlamak, ekibinizin bu dönemi verimli kullanmasını sağlar.",
      },
      {
        type: "h2",
        content: "Öğrendiklerinizi bir sonraki fuara taşıyın",
      },
      {
        type: "ul",
        items: [
          "Hangi hedeflere yaklaşıldı, hangileri geride kaldı?",
          "Stant düzeni ve ürün sunumu ziyaretçiler için anlaşılır mıydı?",
          "Ekip görevleri ve saha akışı planlandığı gibi ilerledi mi?",
          "Bir sonraki katılımda hangi kalemler korunmalı, hangileri değişmeli?",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Fuar Sonrası Değerlendirme",
        text: "LEYONEX fuar sürecini değerlendiriyor, sonraki katılımlar için gelişim önerileri sunuyor.",
        buttonText: "Değerlendirme Hizmetini İnceleyin",
        buttonHref: "/hizmetler/raporlama-analiz",
      },
    ],
  },

  // ─── 10 ──────────────────────────────────────────────────────────────────
  {
    slug: "fuar-hazirlik-kontrol-listesi",
    title: "Fuar Hazırlık Takvimi: Hangi Karar Ne Zaman Verilmeli?",
    category: "fuar-hazirligi",
    excerpt:
      "Fuar öncesinden fuar sonrasına genel bir planlama takvimi: strateji, tasarım, lojistik, onaylar ve fuar sonrası değerlendirme için doğru zamanlama.",
    readTime: 6,
    publishDate: "2026-03-19",
    tags: ["fuar hazırlık", "fuar takvimi", "fuar planlama", "fuar hazırlığı"],
    seo: {
      description:
        "Fuar hazırlık takvimi: strateji, stant tasarımı, lojistik, onaylar ve fuar sonrası değerlendirme için hangi kararın ne zaman verilmesi gerektiği.",
      keywords: [
        "fuar hazırlık takvimi",
        "fuar katılım takvimi",
        "fuar planlama süreci",
        "fuara nasıl hazırlanılır",
        "fuar hazırlık rehberi",
      ],
    },
    sections: [
      {
        type: "p",
        content:
          "Fuar hazırlığında sorunların çoğu, kararların geç verilmesinden kaynaklanır. Aşağıdaki takvim genel bir yol haritasıdır; süreler fuarın büyüklüğüne, ülkesine ve standın kapsamına göre değişir.",
      },
      {
        type: "h2",
        content: "9–12 ay önce: Hedef ve fuar kararı",
      },
      {
        type: "ul",
        items: [
          "Fuara hangi hedeflerle katılacağınızı netleştirin",
          "Alternatif fuarları hedef pazarınıza göre değerlendirin",
          "Erken dolan fuarlarda alan başvurusunu zamanında yapın",
          "Fuarın destek programları kapsamında olup olmadığını kontrol edin",
        ],
      },
      {
        type: "h2",
        content: "6–8 ay önce: Stant ve marka sunumu",
      },
      {
        type: "ul",
        items: [
          "Stantta neyi öne çıkaracağınıza karar verin",
          "Stant tasarım sürecini başlatın",
          "Malzeme ve yapı tercihlerini fuarın kurallarıyla birlikte ele alın",
        ],
      },
      {
        type: "h2",
        content: "3–5 ay önce: Lojistik ve hizmetler",
      },
      {
        type: "ul",
        items: [
          "Fuar idaresinin elektrik, internet ve asma sipariş tarihlerini takip edin",
          "Nakliye ve gümrük süreçlerini planlayın",
          "Konaklama ve ulaşımı ekip programıyla birlikte netleştirin",
          "Stant personeli, ikram ve çekim ihtiyaçlarını belirleyin",
        ],
      },
      {
        type: "h2",
        content: "1–2 ay önce: Onaylar ve davet",
      },
      {
        type: "ul",
        items: [
          "Fuar idaresinin istediği teknik onayları tamamlayın",
          "Hedef pazarınızdaki muhataplara davetlerinizi gönderin",
          "Promosyon ve baskı işlerini teslim tarihleriyle birlikte netleştirin",
        ],
      },
      {
        type: "h2",
        content: "Fuar günleri: Sahada düzen",
      },
      {
        type: "ul",
        items: [
          "Standı açılıştan önce teslim alın",
          "Ziyaretçi kayıtlarını düzenli tutun",
          "Destek programları için gereken fotoğraf ve belgeleri arşivleyin",
        ],
      },
      {
        type: "h2",
        content: "Fuar sonrası: Takip ve değerlendirme",
      },
      {
        type: "ul",
        items: [
          "Görüşmelerin takibini geciktirmeden başlatın",
          "Destek başvurusu varsa belge sürelerini kaçırmayın",
          "Süreci değerlendirin, öğrendiklerinizi bir sonraki fuara taşıyın",
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Fuar Hazırlığınızı Birlikte Planlayalım",
        text: "LEYONEX fuar katılımınızı stratejiden saha yönetimine kadar tek merkezden planlıyor ve koordine ediyor.",
        buttonText: "Fuar Danışmanlığı",
        buttonHref: "/hizmetler/fuar-danismanligi",
      },
    ],
  },
];
