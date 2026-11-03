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

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogLink {
  label: string;
  href: string;
}

export interface BlogSection {
  type: "p" | "h2" | "h3" | "ul" | "ol" | "table" | "callout" | "faq" | "sources";
  content?: string;
  items?: string[];
  headers?: string[];
  rows?: string[][];
  variant?: "cta" | "info";
  title?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
  faqs?: BlogFaq[];
  links?: BlogLink[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  readTime: number;
  publishDate: string;
  /** Yalnızca içerik gerçekten değiştiğinde güncellenir. */
  updatedDate?: string;
  tags: string[];
  seo: {
    /** Arama sonucundaki başlık; yoksa yazı başlığı kullanılır. */
    title?: string;
    description: string;
    keywords: string[];
  };
  /** "Benzer Yazılar" için elle seçilen yazılar; yoksa aynı kategoriden seçilir. */
  related?: string[];
  sections: BlogSection[];
}

/** Fuar sayfalarından ilgili ülke rehberine bağlantı vermek için (fairs.ts'teki ülke adlarıyla). */
export const COUNTRY_GUIDES: Record<string, string> = {
  Almanya: "almanya-fuar-katilimi",
  İtalya: "italya-fuar-katilimi",
  Fransa: "fransa-paris-fuar-katilimi",
  BAE: "dubai-bae-fuar-katilimi",
  ABD: "amerika-abd-fuar-katilimi",
  Çin: "cin-fuar-katilimi",
  Rusya: "rusya-moskova-fuar-katilimi",
  Azerbaycan: "azerbaycan-baku-fuar-katilimi",
};

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
    updatedDate: "2026-11-03",
    related: ["yurtdisinda-fuara-katilim-rehberi", "fuar-standi-fiyatlari-2026", "anahtar-teslim-fuar-katilim-yonetimi"],
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
        type: "h2",
        content: "Şirket İçi Hazırlık Listesi",
      },
      {
        type: "p",
        content:
          "Destek hazırlığı harcama yapılmadan önce başlamalıdır. Program ve incelemeci kuruluşu belirleyin; DYS kayıt ve yetki durumunu kontrol edin; ilgili fuar kaydını doğrulayın. Talep edilen belgeler için sorumlu ve teslim tarihi atayın. Sözleşme, ödeme ve katılım kayıtlarını düzenli saklayın. Finans planında destek başvurusu ile destek tahsilatını ayrı aşamalar olarak gösterin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Her yurt dışı fuarı devlet desteği kapsamında mıdır?",
            answer:
              "Hayır. İlgili yıl, fuar edisyonu, katılım biçimi ve program koşulları kontrol edilmelidir. Geçmiş yılın listesi gelecek katılım için yeterli dayanak değildir. Güncel listeye ve incelemeci kuruluşun yönlendirmesine bakın.",
          },
          {
            question: "Stant, otel ve uçak giderlerinin tamamı desteklenir mi?",
            answer:
              "Otomatik olarak değil. Destek hesabını bütün faturaların belirli yüzdesi gibi varsaymayın. Programın hangi unsurları, nasıl ve hangi sınırlarla ele aldığını kontrol edin; toplam proje bütçesini destek hesabından ayrı tutun.",
          },
          {
            question: "DYS kaydı ile destek başvurusu aynı şey mi?",
            answer:
              "Hayır. Sisteme kayıt ve yetkilendirme, ilgili destek başvurusunun hazırlanması ve gönderilmesinden ayrı aşamalardır. Başvurunun durumunu izleyin; sisteme belge eklenmesini işlemin tamamlanması olarak kabul etmeyin.",
          },
          {
            question: "Danışmanla çalışınca desteği alacağımız kesinleşir mi?",
            answer:
              "Hayır. Danışmanlık dosya hazırlığını kolaylaştırabilir; uygunluk ve ödeme kararını yetkili kurum verir. Sözleşmede iş kapsamını, belge sorumluluklarını ve hizmet ücretini destek sonucundan ayrı biçimde netleştirin.",
          },
        ],
      },
      {
        type: "sources",
        text: "Oran, üst sınır, destek hesabı ve başvuru süreleri işlem tarihindeki resmî metinden teyit edilmelidir. DYS'de eksik belge tamamlandıktan sonra ilgili gönderim adımının da tamamlanması gerekir.",
        links: [
          {
            label: "Ticaret Bakanlığı: Yurt dışı ve yurt içi fuar destekleri",
            href: "https://www.ticaret.gov.tr/destekler/ihracat-destekleri/5973-sayili-ihracat-destekleri-hakkinda-karara-iliskin-genelgeler/yurt-disi-ve-yurt-ici-fuar-destekleri",
          },
          { label: "Ticaret Bakanlığı: Fuar mevzuatı", href: "https://ticaret.gov.tr/ihracat/fuarlar/fuarlar-mevzuat%C4%B1" },
          {
            label: "Ticaret Bakanlığı: DYS kılavuzları",
            href: "https://ticaret.gov.tr/destekler/destek-yonetim-sistemi-dys/dys-kilavuzlari-ve-dikkat-edilecek-hususlar",
          },
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
    updatedDate: "2026-11-03",
    related: ["fuar-standi-teklif-karsilastirma", "ahsap-mi-moduler-stand-mi", "devlet-fuar-destekleri-2026"],
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
        type: "h2",
        content: "Toplam Fuar Bütçesi Şablonu",
      },
      {
        type: "p",
        content:
          "Fuar maliyeti, alan kiralama ve stant yapım bedelinin toplamından daha geniştir. Teknik hizmetler, ürün sevkiyatı, ekip seyahati, tanıtım ve takip işleri aynı bütçede görünmelidir. Karşılaştırma için önce hangi giderlerin fiyatlara dahil olduğunu netleştirin.",
      },
      {
        type: "table",
        headers: ["Gider grubu", "Örnek kalemler", "Teklifte sorulacak soru"],
        rows: [
          ["Alan ve kayıt", "Yer kirası, kayıt, zorunlu organizatör paketleri", "Hangi zorunlu bedeller ayrıca ödenecek?"],
          ["Stant", "Tasarım, üretim/kiralama, grafik, mobilya, kurulum, söküm", "Mülkiyet ve yeniden kullanım kime ait?"],
          ["Teknik hizmet", "Elektrik, internet, su, askı, onay, temizlik", "Organizatör faturası dahil mi?"],
          ["Lojistik", "Taşıma, gümrük, sigorta, elleçleme, ambalaj depolama", "Dönüş ve salon içi hareket dahil mi?"],
          ["Ekip", "Ulaşım, otel, transfer, yemek, tercüman", "Gün ve kişi sayısı doğru mu?"],
          ["Pazarlama", "Davet, içerik, katalog, numune, fotoğraf/video", "Fuar öncesi ve sonrası işler var mı?"],
          ["Belirsizlikler", "İlave mesai, revizyon, döviz ve miktar farkları", "Hangi risk için ne kadar pay ayrıldı?"],
        ],
      },
      {
        type: "p",
        content:
          "Tabloya tahmini tutar, kesinleşen tutar, para birimi, vergi durumu, ödeme tarihi ve sorumlu sütunları ekleyin. Destek beklentisini tahsil edilmiş para gibi düşmeyin; toplam harcama ile olası net maliyeti ayrı gösterin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "30 m² fuar standı kaç para tutar?",
            answer:
              "Ülke, fuar, tarih, açık cephe sayısı, malzeme, yükseklik ve hizmet kapsamı bilinmeden güvenilir fiyat verilemez; yukarıdaki aralıklar yalnızca ilk fikir içindir. Aynı 30 m² alan için standart kiralama ile özel üretim farklı sonuçlar doğurur. Ölçülü planla kalemli teklif isteyin.",
          },
          {
            question: "Metrekare fiyatıyla teklif karşılaştırmak doğru mu?",
            answer:
              "İlk eleme için kullanılabilir; tek karar ölçütü olmamalıdır. Depo, ışık, grafik, mobilya, teknik bağlantı ve kurulum kapsamını eşitlemeden karşılaştırılan metrekare fiyatları yanıltıcı olur.",
          },
          {
            question: "Fuar bütçesini düşürmek için önce nereden tasarruf etmeli?",
            answer:
              "Hedefe hizmet etmeyen dekoratif ayrıntıları ve gereksiz sevkiyatları azaltın. Yeniden kullanılabilir bileşenleri, yerel kiralamayı ve erken siparişi değerlendirin. Güvenlik, ürün görünürlüğü ve müşteri görüşmesini etkileyen temel ihtiyaçları koruyun.",
          },
          {
            question: "Beklenmeyen giderler için yüzde kaç ayırmalıyız?",
            answer:
              "Her proje için geçerli tek oran yoktur. Fiyatı kesinleşmeyen kalemleri, kur riskini, revizyon ihtimalini ve ek mesaiyi ayrı hesaplayın. Belirsizlik payını bu risklere göre belirlemek, otomatik bir yüzde eklemekten daha açıklayıcıdır.",
          },
          {
            question: "En ucuz stant teklifi toplamda en ekonomik seçenek midir?",
            answer:
              "Her zaman değil. Eksik teknik hizmetler, tekrar baskı, geç teslim veya ilave işçilik toplamı artırabilir. Kararı, teslim edilecek işlerin tamamı ve olası ek giderlerle birlikte verin.",
          },
        ],
      },
      {
        type: "sources",
        text: "Trade.gov hazırlık yazısı seyahat, otel, stant ve diğer etkinlik giderlerinin bütçelenmesini ve yatırım hedefi kurulmasını önerir. Buradaki tablo teklif incelemesi için genişletilmiş bir şablondur.",
        links: [{ label: "Trade.gov: How to prepare your business for a trade show", href: "https://www.trade.gov/how-prepare-business-trade-show" }],
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
    updatedDate: "2026-11-03",
    related: ["fuar-standi-fiyatlari-2026", "fuar-standi-tasarim-briefi", "fuar-standi-teklif-karsilastirma"],
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
        type: "h2",
        content: "Maxima, Modüler ve Hibrit: Teklifte Neye Bakılmalı?",
      },
      {
        type: "p",
        content:
          "Maxima, alüminyum profil esaslı bir sistem ailesidir ve modüler stant çözümleri içinde değerlendirilir. Bu nedenle \"Maxima mı, modüler mi?\" sorusu iki tamamen ayrı sınıfı karşılaştırmaz. Üretici bilgileri farklı profil boyutlarını ve panel, kumaş, cam gibi kaplama seçeneklerini gösterir; ancak sistemin teknik kapasitesi, fuar alanının izin verdiği yükseklik veya her tasarımın güvenli olduğu anlamına gelmez.",
      },
      {
        type: "table",
        headers: ["Çözüm", "Değerlendirme nedeni", "Teklifte kontrol"],
        rows: [
          ["Maxima / profil sistemi", "Sistem bileşenleriyle farklı kurgular oluşturmak", "Profil tipi, birleşimler, kaplama ve grafik kapsamı"],
          ["Ahşap ağırlıklı özel üretim", "Özgün form ve malzeme görünümü geliştirmek", "Yüzey kalitesi, nakliye, onarım ve yeniden kullanım"],
          ["Diğer modüler sistemler", "Tekrarlanan fuarlarda uyarlanabilir kurgu kurmak", "Mevcut parça stoğu, ölçü seçenekleri, kurulum şartları"],
          ["Hibrit tasarım", "Standart sistem ile özel üretimi birleştirmek", "İki sistemin teknik uyumu ve toplam maliyet"],
        ],
      },
      {
        type: "p",
        content:
          "Doğru karşılaştırma; aynı ürün, aynı görüşme ihtiyacı ve aynı hizmet kapsamı için yapılır. Sadece render üzerinden malzeme, işçilik veya fiyat sonucu çıkarmayın.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Maxima stant her zaman ahşap stanttan ucuz mudur?",
            answer:
              "Hayır. Kullanılan sistem, kiralama koşulları, özel kaplamalar, grafikler ve taşıma maliyeti sonucu değiştirir. Aynı kapsamda hazırlanmış alternatifleri karşılaştırmadan fiyat üstünlüğü varsaymayın.",
          },
          {
            question: "Modüler stant kurumsal ve şık görünebilir mi?",
            answer:
              "Evet; sonuç tasarımın oranları, ışık, grafik ve uygulama kalitesine bağlıdır. Az sayıda güçlü marka mesajı ve temiz ürün sunumu, malzemenin adından daha belirleyici olabilir.",
          },
          {
            question: "Hazır stant ile özel tasarım arasındaki fark nedir?",
            answer:
              "Hazır paketlerde ölçü, donatı ve değişiklik sınırları önceden tanımlanır. Özel tasarımda kurgu ihtiyaca göre geliştirilir. Her iki seçenekte de dahil mobilya, grafik, elektrik ve ilave işlerin bedelini kontrol edin.",
          },
          {
            question: "Aynı stant farklı fuarlarda kullanılabilir mi?",
            answer:
              "Uygun tasarlanmış bileşenler kullanılabilir. Yeni alanın ölçüsü, açık cepheleri ve teknik kuralları yeniden değerlendirilmelidir. Depolama, hasar, taşıma ve yeniden baskı giderlerini hesaba katın.",
          },
          {
            question: "Stant kiralamak mı satın almak mı daha mantıklıdır?",
            answer:
              "Birden çok kullanım senaryosunun toplam maliyetini karşılaştırın. Satın almada depolama ve bakım; kiralamada kullanım süresi, stok ve değişiklik koşulları önemlidir. Tek bir fuarın fiyatıyla uzun dönem kararı vermeyin.",
          },
        ],
      },
      {
        type: "sources",
        links: [{ label: "OCTANORM: Maxima sistem bilgileri", href: "https://www.octanorm.com/maxima/overview/" }],
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
    updatedDate: "2026-11-03",
    related: ["devlet-fuar-destekleri-2026", "ilk-fuar-katilimi-fuar-secimi", "almanya-fuar-katilimi"],
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
        type: "h2",
        content: "Başvurudan Dönüşe: Katılımı Sekiz Adımda Planlayın",
      },
      {
        type: "p",
        content:
          "Yer rezervasyonu yapılmış olması, ürünün ülkeye kabulü veya ekibin seyahati için gereken işlemlerin tamamlandığı anlamına gelmez. Bu işleri aynı takvimde birlikte yürütün.",
      },
      {
        type: "ol",
        items: [
          "Hedef müşteri ve pazar uygunluğunu değerlendirin.",
          "Güncel etkinlik edisyonunu, yerini ve organizatörünü doğrulayın.",
          "Bireysel katılım ve varsa yetkili milli katılım seçeneklerinin kapsamını karşılaştırın.",
          "Alan, sözleşme, ödeme ve iptal koşullarını netleştirin.",
          "Stant tasarımı, teknik siparişler ve onay tarihlerini planlayın.",
          "Ekibin pasaport, vize ve seyahat koşullarını kontrol edin.",
          "Ürünleri geri dönecek, dağıtılacak/tüketilecek ve satılması planlanan olarak ayırıp lojistik planı hazırlayın.",
          "Önceden randevu oluşturun; görüşme kaydı, takip ve dönüş sevkiyatının sorumlusunu belirleyin.",
        ],
      },
      {
        type: "p",
        content:
          "ATA Karnesi, uygun ülkelerde ve kapsam dahilindeki eşyaların geçici dolaşımını kolaylaştırabilir; her ürün ve işlem için otomatik olarak uygun değildir. Tüketilebilir veya aynı durumda geri getirilemeyecek ürünler genel kapsamın dışındadır. Kapsamı ve elektronik ATA uygulamasını güzergaha göre teyit edin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Milli katılım ile bireysel katılım arasındaki fark nedir?",
            answer:
              "Milli katılım, yetkilendirilmiş organizatör üzerinden ortak bir Türkiye katılımı içinde yer alma seçeneğidir. Bireysel katılımda firma fuara kendi katılım düzeniyle girer. Stant, taşıma ve hizmet kapsamlarını paket bazında karşılaştırın; milli katılımda her hizmetin dahil olduğunu varsaymayın.",
          },
          {
            question: "Fuar davetiyesi vize yerine geçer mi?",
            answer:
              "Hayır. Davetiye başvuruyu destekleyen belgelerden biri olabilir; vize veya giriş hakkı garantisi değildir. Pasaport türü, seyahat amacı ve ilgili ülkenin başvuru koşullarını resmî temsilcilikten doğrulayın.",
          },
          {
            question: "Numuneleri bavulla götürebilir miyiz?",
            answer:
              "Taşımanın bavulla yapılması ticari eşyanın gümrük ve ürün kurallarını ortadan kaldırmaz. Miktar, ürün niteliği, değer ve kullanım amacını taşıyıcı ile gümrük uzmanına önceden bildirin; gereken belgeleri hazırlayın.",
          },
          {
            question: "ATA Karnesiyle götürdüğümüz ürünü fuarda bırakabilir miyiz?",
            answer:
              "Geri getirme esasına dayanan geçici kabul ile satış/hibe aynı işlem değildir. Eşyayı bırakmak veya satmak gündeme gelirse gümrük müşaviri ve yetkili kurumla gerekli işlemleri önceden netleştirin. Dağıtılacak numuneleri baştan ayrı planlayın.",
          },
          {
            question: "Stant Türkiye'de mi, fuarın yapıldığı ülkede mi üretilmeli?",
            answer:
              "Üretim fiyatına ek olarak nakliye, gümrük, saha işçiliği, teslim riski ve tekrar kullanım maliyetini karşılaştırın. Yerel kiralama, Türkiye'de üretim veya hibrit çözüm farklı projelerde avantajlı olabilir; evrensel tek cevap yoktur.",
          },
        ],
      },
      {
        type: "sources",
        links: [
          { label: "ICC: ATA Karnesi", href: "https://iccwbo.org/business-solutions/ata-carnet/" },
          { label: "TOBB: ATA Karnesi başvuru ve duyurular", href: "https://atak.tobb.org.tr/Portal/Anasayfa" },
          { label: "Ticaret Bakanlığı: Fuarlar ve katılım listeleri", href: "https://www.ticaret.gov.tr/ihracat/fuarlar" },
          { label: "Dışişleri Bakanlığı: Seyahat ve vize soruları", href: "https://www.mfa.gov.tr/sikca-sorulan-sorular.tr.mfa" },
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
    updatedDate: "2026-11-03",
    related: ["fuar-oncesi-musteri-daveti-randevu", "fuar-hazirlik-kontrol-listesi", "anahtar-teslim-fuar-katilim-yonetimi"],
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
        content: "Görüşme formunda neler bulunmalı?",
      },
      {
        type: "p",
        content:
          "Örnek alanlar: firma, ülke, kişi/rol, gerekli iletişim bilgisi, ilgilenilen ürün, kullanım amacı, yaklaşık ihtiyaç, karar süreci, istenen belge/numune, sonraki adım, sorumlu ve tarih. İş için gerekli olmayan kişisel bilgileri toplamayın.",
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
        type: "faq",
        faqs: [
          {
            question: "Fuar sonrası ilk e-posta ne zaman gönderilmeli?",
            answer:
              "Görüşmede verilen söze göre gönderin. Öncelikli talepte aynı gün veya takip eden iş günü hedeflenebilir. Hazır olmayan teklif yerine durum ve teslim tarihi bildirmek, sessiz kalmaktan daha yararlıdır.",
          },
          {
            question: "Fuar sonrası takip e-postası örneği nedir?",
            answer:
              "\"Merhaba [Ad], [Fuar]'da [konu] üzerine görüşmüştük. İstediğiniz [belge/teklif] ektedir. [Belirli ihtiyaç] için önerimizi kısa bir toplantıda değerlendirebiliriz. [Gün/saat] uygun mudur?\" Gerçekte eklenmeyen dosyadan veya yapılmayan görüşmeden söz etmeyin.",
          },
          {
            question: "Sadece kartvizit toplamak neden yeterli değildir?",
            answer:
              "Kartvizit, kişinin ihtiyacını ve verilen sözü anlatmaz. Gün sonunda benzer görüşmeler karışabilir. Kısa not, sorumlu ve tarih eklemek sonraki iletişimin daha anlamlı olmasını sağlar.",
          },
          {
            question: "CRM şart mı, Excel kullanılabilir mi?",
            answer:
              "Az sayıda kayıt için kontrollü bir tablo başlangıç sağlayabilir. Kayıtlar çoğaldıkça görev, hatırlatma, yetkilendirme ve geçmiş takibi olan CRM yararlı olur. Araçtan bağımsız olarak tek güncel kayıt ve sınırlı erişim sağlayın.",
          },
          {
            question: "QR formuyla müşteri bilgisi toplarken nelere dikkat edilmeli?",
            answer:
              "Gerekli alanlarla yetinin; veri toplama amacı ve ilgili bilgilendirmeyi anlaşılır sunun. Aydınlatmayı açık rıza metniyle tek bir onay cümlesine birleştirmeyin. Kullanılan hukuki dayanağa ve iletişim faaliyetine uygun süreci ayrıca değerlendirin.",
          },
        ],
      },
      {
        type: "sources",
        links: [
          {
            label: "AUMA: Fuarda müşteri adayı yönetimi",
            href: "https://www.auma.de/en/exhibit/tips-for-trade-fair-participation/3-trade-fair-lead-management/",
          },
          {
            label: "KVKK: Açık rıza ve aydınlatma metinlerinin ayrı düzenlenmesi",
            href: "https://www.kvkk.gov.tr/Icerik/8710/veri-sorumlulari-tarafindan-acik-riza-ve-aydinlatma-metinlerinin-ayri-ayri-duzenlenmesi-gerektigi-hakkinda-kisisel-verileri-koruma-kurulunun-18-02-2026-tarihli-ve-2026-347-sayili-ilke-kararina-iliskin-kamuoyu-duyurusu",
          },
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
    updatedDate: "2026-11-03",
    related: ["fuar-standi-fiyatlari-2026", "fuar-standi-tasarim-briefi", "fuar-oncesi-musteri-daveti-randevu"],
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
        type: "faq",
        faqs: [
          {
            question: "Fuara kaç ay önce hazırlanmaya başlamalıyız?",
            answer:
              "Önce yer rezervasyonu, teknik sipariş, sevkiyat ve seyahat için gereken süreleri çıkarın. En uzun süre isteyen iş başlangıç tarihinizi belirlesin. Yukarıdaki takvim genel bir çerçevedir; her fuar için yeterlilik garantisi değildir ve organizatörün son tarihleri önceliklidir.",
          },
          {
            question: "Fuar standında bulunması gereken malzemeler nelerdir?",
            answer:
              "Ürün ve numune listesi, fiyat/teknik bilgi dosyaları, görüşme kayıt aracı, ekip kartları, sarf malzemeleri, gerekli adaptörler ve acil iletişim listesi hazırlayın. Ürüne göre soğutma, temizlik veya güvenli depolama ihtiyacını ayrıca ekleyin.",
          },
          {
            question: "Fuar hazırlıklarını şirkette kim yönetmeli?",
            answer:
              "Tek bir proje sorumlusu belirleyin; satış, pazarlama, finans ve operasyon görevlerini bu kişiye bağlı bir çizelgede birleştirin. Herkesin sorumluluğu olması, hiçbir işin tek sorumlusu olmaması anlamına gelmemeli.",
          },
          {
            question: "Fuara çok az zaman kaldıysa nereden başlamalıyız?",
            answer:
              "Önce katılımı engelleyebilecek işleri kontrol edin: yer ve ödeme, teknik onaylar, ürünün sahaya ulaşması, ekip girişi ve seyahat. Ardından tasarımı sadeleştirin ve yetişmeyecek ek işlerden vazgeçin. Organizatörden yazılı uygunluk alın.",
          },
          {
            question: "Fuar hazırlığında en çok hangi hata yapılır?",
            answer:
              "Yaygın bir planlama riski, stant hazır olduğunda bütün sürecin tamamlandığını düşünmektir. Davet, ekip hazırlığı ve müşteri takibi için ayrı teslim tarihleri koyun; başarıyı yalnızca kurulum fotoğrafıyla değerlendirmeyin.",
          },
        ],
      },
      {
        type: "sources",
        text: "AUMA'nın katılım rehberi fuar seçimi, ekip, maliyet-fayda ve takip süreçlerini birlikte ele alır.",
        links: [{ label: "AUMA: Fuar katılımı için öneriler", href: "https://www.auma.de/en/exhibit/tips-for-trade-fair-participation/" }],
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

  // ─── 11 ──────────────────────────────────────────────────────────────────
  {
    slug: "anahtar-teslim-fuar-katilim-yonetimi",
    title: "Anahtar Teslim Fuar Katılım Yönetimi Neleri Kapsar?",
    category: "fuar-hazirligi",
    excerpt:
      "Stant, otel, transfer, tercüman, ikram ve saha operasyonu nasıl birlikte yönetilir? Danışmanlık ile operasyonun nasıl birleştiğini ve kapsamın nasıl netleştirileceğini görün.",
    readTime: 5,
    publishDate: "2026-11-03",
    tags: ["anahtar teslim fuar", "fuar katılım yönetimi", "fuar danışmanlığı", "fuar operasyonu"],
    seo: {
      title: "Anahtar Teslim Fuar Katılım Yönetimi",
      description:
        "Stant, otel, transfer, tercüman, ikram ve saha operasyonu nasıl birlikte yönetilir? Anahtar teslim fuar hizmetinde kapsamı netleştirin.",
      keywords: [
        "anahtar teslim fuar hizmeti",
        "profesyonel fuar katılım yönetimi",
        "fuar organizasyon ajansı",
        "fuar pazarlama danışmanlığı",
      ],
    },
    related: ["fuar-hazirlik-kontrol-listesi", "fuar-standi-teklif-karsilastirma", "fuarda-lead-yonetimi-roi-hesaplama"],
    sections: [
      {
        type: "p",
        content:
          "Anahtar teslim fuar katılım yönetimi, üzerinde anlaşılan hazırlık ve operasyon işlerinin tek bir koordinasyon altında yürütülmesidir. \"Anahtar teslim\" ifadesi bütün hizmetlerin otomatik olarak dahil olduğu anlamına gelmez; iş kapsamı, onay mekanizması ve bütçe yazılı tanımlanmalıdır.",
      },
      {
        type: "h2",
        content: "Danışmanlık ile operasyon nasıl birleşir?",
      },
      {
        type: "p",
        content:
          "Danışmanlık; hedef müşteri, katılım amacı, bütçe öncelikleri ve başarı ölçütlerini belirlemeye yardımcı olur. Operasyon ise bu kararları stant, ekip, ulaşım, ikram, teknik hizmet ve saha uygulamasına dönüştürür. İki bölümün aynı hedefe göre ilerlemesi, farklı tedarikçilere verilen çelişkili talepleri azaltabilir.",
      },
      {
        type: "table",
        headers: ["İş paketi", "Başta netleştirilecek konu"],
        rows: [
          ["Strateji", "Hedef, kapsam, ölçüm ve karar yetkisi"],
          ["Stant", "Tasarım, üretim, onay, kurulum ve söküm"],
          ["Seyahat", "Kişi listesi, konaklama, transfer saatleri"],
          ["Saha", "Tercüman/karşılama, ikram, temizlik, teknik destek"],
          ["İletişim", "Davet, görsel içerik, görüşme kaydı, takip ve rapor"],
        ],
      },
      {
        type: "p",
        content:
          "LEYONEX'in yaklaşımı, fuar hedeflerini danışmanlık aşamasında netleştirip seçilen hizmetleri ortak bir planla yönetmektir. Teklifte hangi işlerin üstlenileceği ve şirketinizde kalacak kararlar açıkça belirlenmelidir. Tablo kapsam tanımlamak için bir örnektir; bütün kalemlerin her teklifte dahil olduğu anlamına gelmez.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Fuar organizatörü ile katılım yönetimi firması aynı mı?",
            answer:
              "Aynı rol değildir. Organizatör etkinliği ve katılım koşullarını yönetir. Katılım yönetimi firması, katılımcı şirketin hedefleri ve kararlaştırılan işleri için çalışır. Resmî temsilcilik veya yetki ayrıca doğrulanmalıdır.",
          },
          {
            question: "Fuar hostesi ile tercüman aynı işi yapar mı?",
            answer:
              "Görevler farklıdır. Karşılama personeli kayıt, yönlendirme ve ikram desteği verebilir; tercümanın dil ve teknik terminoloji yeterliliği gerekir. Aynı kişiden iki rol bekleniyorsa yeterlilik ve iş yükü önceden değerlendirilmelidir.",
          },
          {
            question: "Otel ve transferi birlikte planlamak neden önemlidir?",
            answer:
              "Ekibin mesai başlangıcı, kurulum ziyareti ve müşteri yemekleri ulaşımı etkiler. Sadece oda fiyatına bakmak yerine toplam yol süresi, araç kapasitesi ve transfer maliyetini karşılaştırın.",
          },
          {
            question: "Fuar catering hizmetinde neleri kontrol etmeliyiz?",
            answer:
              "Kişi sayısı, servis saatleri, saklama/soğutma, su-elektrik ihtiyacı, alerjen bilgisi ve atık toplama planını belirleyin. Fuar alanının dış tedarikçi ve yiyecek-içecek kurallarını sipariş öncesinde kontrol edin.",
          },
          {
            question: "Tek fatura bütün işleri kapsayabilir mi?",
            answer:
              "Sözleşme, hizmet modeli ve ilgili işlemler uygunsa bazı hizmetler birleştirilebilir. Organizatörün doğrudan faturaladığı veya farklı belgelendirme gerektiren kalemler ayrıca kalabilir. Faturalama planını ve destek belgeleriyle uyumunu baştan netleştirin.",
          },
        ],
      },
      {
        type: "callout",
        variant: "cta",
        title: "Fuar Katılımınızı Tek Plandan Yönetelim",
        text: "Hedeflerinizi ve ihtiyaç duyduğunuz hizmetleri paylaşın; hangi işlerin üstlenileceğini ve hangi kararların sizde kalacağını birlikte netleştirelim.",
        buttonText: "Fuar Danışmanlığı",
        buttonHref: "/hizmetler/fuar-danismanligi",
      },
    ],
  },

  // ─── 12 ──────────────────────────────────────────────────────────────────
  {
    slug: "fuar-standi-teklif-karsilastirma",
    title: "Fuar Standı Teklifleri Nasıl Karşılaştırılır?",
    category: "stand-tasarimi",
    excerpt:
      "Stant firması seçerken fiyat, malzeme, teslim, teknik gider ve sorumlulukları aynı kapsamda karşılaştırın; tekliflerde eksik kalan kalemleri görün.",
    readTime: 5,
    publishDate: "2026-11-03",
    tags: ["stant teklifi", "stant firması seçimi", "fuar standı", "teklif karşılaştırma"],
    seo: {
      title: "Fuar Standı Teklifleri Nasıl Karşılaştırılır?",
      description:
        "Stant firması seçerken fiyat, malzeme, teslim, teknik gider ve sorumlulukları karşılaştırın. Tekliflerde eksik kalan kalemleri görün.",
      keywords: ["fuar standı firması", "stant yapan firmalar", "fuar standı teklif örneği", "profesyonel stant"],
    },
    related: ["fuar-standi-fiyatlari-2026", "fuar-standi-tasarim-briefi", "ahsap-mi-moduler-stand-mi"],
    sections: [
      {
        type: "p",
        content:
          "Stant tekliflerini sağlıklı karşılaştırmak için firmalara aynı briefi gönderin ve aynı kapsamda fiyat isteyin. Bir teklifin düşük görünmesi, daha az iş içermesinden kaynaklanabilir. Toplam bedelin yanında teslim koşulları ve sorumluluklar da görünür olmalıdır.",
      },
      {
        type: "h2",
        content: "Karşılaştırma tablosuna hangi satırlar eklenmeli?",
      },
      {
        type: "ul",
        items: [
          "Tasarım ve revizyon sayısı",
          "Malzeme ve yüzey",
          "Grafik baskı",
          "Aydınlatma",
          "Mobilya",
          "Kurulum ve söküm",
          "Nakliye",
          "Teknik bağlantılar ve onay giderleri",
          "Temizlik, saha desteği ve depolama",
          "Vergiler ve ödeme planı",
        ],
      },
      {
        type: "p",
        content:
          "Her satırı \"dahil\", \"hariç\" veya \"henüz net değil\" olarak işaretleyin. Referans incelemesinde yalnızca render istemeyin; benzer ölçekli kurulmuş iş fotoğrafı, teslim kapsamı ve varsa referans iletişimi talep edin. Firmanın o projedeki gerçek rolünü öğrenin. Sonradan istenecek işlerin nasıl fiyatlandırılacağını sözleşmeden önce konuşun.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Stant firmasına ilk görüşmede ne sormalıyız?",
            answer:
              "Fuar tarihindeki kapasitesini, benzer proje deneyimini, teknik onay sorumluluğunu, saha yetkilisini ve teklif dışı kalemleri sorun. Yanıtları yazılı bir kapsamla teyit edin.",
          },
          {
            question: "Teklifte elektrik yazıyorsa her şey dahil midir?",
            answer:
              "Kesin değil. Stant içi tesisat ve armatürler ile organizatörün güç/bağlantı hizmeti ayrı olabilir. Talep edilen güç, bağlantı yeri ve ek tüketim bedellerinin kimin kapsamında olduğunu sorun.",
          },
          {
            question: "Tasarım revizyonları ücretsiz olmak zorunda mı?",
            answer:
              "Hayır; bu sözleşme konusudur. Dahil revizyon sayısını, kapsam değişikliği sayılacak talepleri ve son onay tarihini baştan belirleyin. Üretim sonrası değişiklikleri ayrıca değerlendirin.",
          },
          {
            question: "Kurulum tesliminde hangi kontroller yapılmalı?",
            answer:
              "Onaylı plan, grafik doğruluğu, yüzeyler, mobilyalar, ışıklar, prizler, kilitler ve ürün yerleşimini kontrol edin. Eksikleri fotoğraflı listeye yazıp çözüm sorumlusu ve saatini belirleyin; teknik uygunluk kontrolünü yetkili kişilere yaptırın.",
          },
          {
            question: "Kaç firmadan teklif almak gerekir?",
            answer:
              "Sabit sayıdan çok karşılaştırılabilirlik önemlidir. Aynı briefi anlayan ve zamanında teslim kapasitesi bulunan birkaç uygun aday yeterli bir başlangıç sağlar. Birbirinden farklı tasarımların toplam fiyatını tek başına sıralamayın.",
          },
        ],
      },
      {
        type: "callout",
        variant: "info",
        title: "Not",
        text: "Bu sayfadaki karşılaştırma listesi satın alma değerlendirmesi için hazırlanmış bir uygulama önerisidir; bağlayıcı bir sözleşme standardı değildir.",
      },
      {
        type: "callout",
        variant: "cta",
        title: "Stant Teklifini Bütçenin Tamamıyla Birlikte Değerlendirin",
        text: "LEYONEX'ten planlama ve uygulama kapsamını birlikte değerlendiren bir çalışma talep edebilirsiniz. Amaç, işlerin ve maliyetlerin karar öncesinde görünür olmasıdır.",
        buttonText: "Görüşme Talebi",
        buttonHref: "/teklif-al",
      },
    ],
  },

  // ─── 13 ──────────────────────────────────────────────────────────────────
  {
    slug: "ilk-fuar-katilimi-fuar-secimi",
    title: "İlk Kez Fuara Katılacak Firmalar İçin Fuar Seçimi",
    category: "fuar-hazirligi",
    excerpt:
      "Doğru fuar, hedef müşterilerinizle anlamlı görüşmeler yapabileceğiniz fuardır. Ziyaretçi profili, hedef pazar, bütçe, satış hazırlığı ve stant yeri seçimini değerlendirin.",
    readTime: 5,
    publishDate: "2026-11-03",
    tags: ["ilk fuar katılımı", "fuar seçimi", "stant yeri seçimi", "ihracat"],
    seo: {
      title: "İlk Fuar Katılımı: Doğru Fuar Nasıl Seçilir?",
      description:
        "İlk kez fuara katılacak firmalar için fuar ve stant yeri seçimi. Ziyaretçi profili, hedef pazar, bütçe ve satış hazırlığını değerlendirin.",
      keywords: ["ilk kez fuara katılmak", "hangi fuara katılmalıyım", "ihracat için fuar seçimi", "fuarda stant yeri seçimi"],
    },
    related: ["fuar-hazirlik-kontrol-listesi", "fuar-oncesi-musteri-daveti-randevu", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "Doğru fuar, hedeflediğiniz müşterilerle anlamlı görüşmeler yapabileceğiniz fuardır. Toplam ziyaretçi sayısı tek başına yeterli değildir. Ziyaretçilerin ülkeleri, sektörleri, satın alma rolleri ve etkinliğin ürün grubunuzla ilişkisi birlikte incelenmelidir.",
      },
      {
        type: "h2",
        content: "Katılım kararı için beş soru",
      },
      {
        type: "ol",
        items: [
          "Kiminle görüşmek istiyoruz: distribütör, perakende zinciri, üretici, proje firması veya son kullanıcı?",
          "Bu kişilerin ilgili fuara geldiğine dair güncel rapor, katılımcı deneyimi veya görüşme imkânı var mı?",
          "Ürünümüzün fiyat, teslim süresi ve hedef pazar gereksinimleri hazır mı?",
          "Fuarda başlayan görüşmeleri sürdürecek satış kapasitemiz var mı?",
          "Aynı hedefe ulaşmak için ziyaretçi katılımı, randevulu iş gezisi veya başka bir fuar daha uygun olabilir mi?",
        ],
      },
      {
        type: "p",
        content:
          "Aday fuarlara hedef müşteri uyumu, pazar uyumu, toplam maliyet ve satış hazırlığı açısından kendi ağırlıklarınızla puan verin. Bu bir karar aracı olsun; eksik ziyaretçi verisini tahminle kesinleştirmeyin. Organizatörün bildirdiği rakamın ziyaret sayısı mı, tekil ziyaretçi mi olduğunu sorun.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Rakiplerimizin katıldığı fuara biz de katılmalı mıyız?",
            answer:
              "Rakip katılımı araştırmaya değer bir işarettir, tek başına gerekçe değildir. Aynı müşteri grubuna mı hitap ettiklerini ve sizin katılım hedefinizi inceleyin. Bütçeyi taklit kararına değil, beklenen görüşmelere bağlayın.",
          },
          {
            question: "İlk yıl ziyaretçi olarak gitmek mantıklı mı?",
            answer:
              "Pazarı ve fuarı tanımıyorsanız yararlı olabilir. Önceden görüşme ayarlayın, salonları ve ürün gruplarını inceleyin, sonraki katılım için bilgi toplayın. Ziyaretçi olmanın stant açmakla aynı görünürlüğü sağlamadığını hesaba katın.",
          },
          {
            question: "En büyük fuar her zaman en iyi fuar mıdır?",
            answer:
              "Hayır. Daha küçük fakat doğru satın almacıları bir araya getiren bir etkinlik hedefinize daha iyi uyabilir. Toplam kalabalıktan önce görüşebileceğiniz müşteri niteliğini değerlendirin.",
          },
          {
            question: "Salon girişine yakın stant her zaman daha iyi midir?",
            answer:
              "Hayır. Ürün grubunuzun bulunduğu bölüm, doğal yürüyüş güzergâhı, kolonlar ve görünürlük de önemlidir. Yer seçimini güncel salon planı ve mümkünse önceki katılım gözlemleriyle yapın.",
          },
          {
            question: "Fuar katılımını ne zaman ertelemek gerekir?",
            answer:
              "Ürün, ekip, bütçe veya teklif süreci hazır değilse; kalan sürede kritik onay ve sevkiyatlar yetişmiyorsa erteleme değerlendirilebilir. Sözleşmenin iptal/değişiklik koşullarını inceleyerek alternatif katılım biçimini görüşün.",
          },
        ],
      },
      {
        type: "sources",
        text: "AUMA'nın proje yönetimi rehberi fuar seçimini hedef grup, rekabet ve pazar potansiyeliyle ilişkilendirir.",
        links: [
          {
            label: "AUMA: Fuar proje yönetimi",
            href: "https://www.auma.de/en/exhibit/tips-for-trade-fair-participation/2-trade-fair-project-management/",
          },
        ],
      },
    ],
  },

  // ─── 14 ──────────────────────────────────────────────────────────────────
  {
    slug: "fuar-standi-tasarim-briefi",
    title: "Fuar Standı Tasarım Briefi Nasıl Hazırlanır?",
    category: "stand-tasarimi",
    excerpt:
      "Stant briefine ürün, depo, toplantı, açık cephe ve teknik ihtiyaçları yazın; tasarımcıya beğenilen görselleri değil, standın yapması gereken işleri anlatın.",
    readTime: 5,
    publishDate: "2026-11-03",
    tags: ["stant briefi", "stant tasarımı", "alan planlaması", "küçük stant"],
    seo: {
      title: "Fuar Standı Briefi ve Alan Planlaması",
      description:
        "Stant tasarım briefine hangi bilgiler yazılır? Ürün, depo, toplantı, açık cephe ve teknik ihtiyaçları uygulanabilir bir plana dönüştürün.",
      keywords: ["fuar standı brief örneği", "20 m2 fuar standı", "36 m2 stand tasarımı", "küçük fuar standı"],
    },
    related: ["ahsap-mi-moduler-stand-mi", "fuar-standi-teklif-karsilastirma", "kucuk-stantta-alan-optimizasyonu"],
    sections: [
      {
        type: "p",
        content:
          "İyi bir stant briefi, tasarımcıya yalnızca beğenilen görselleri değil, standın yapması gereken işleri anlatır. Hangi ürünün öne çıkacağı, kimlerle görüşüleceği, aynı anda kaç görüşmenin yürütüleceği ve hangi teknik donanımın gerektiği baştan belirtilmelidir.",
      },
      {
        type: "h2",
        content: "Briefte bulunması gereken bilgiler",
      },
      {
        type: "table",
        headers: ["Başlık", "Yazılacak bilgi"],
        rows: [
          ["Alan", "En-boy, açık cepheler, kolonlar, komşular, teknik plan"],
          ["Hedef", "Lansman, bayi arayışı, ihracat, mevcut müşteri görüşmesi"],
          ["Ürün", "Adet, ölçü, ağırlık, çalışma/demo koşulları"],
          ["Görüşme", "Ayakta görüşme, masa, mahremiyet, VIP gereksinimi"],
          ["Operasyon", "Depo, ikram, soğutucu, personel eşyası, numune stoğu"],
          ["Marka", "Logo dosyaları, renkler, mesajlar, kullanılacak diller"],
          ["Sınırlar", "Toplam bütçe, onay tarihleri, yeniden kullanım isteği"],
        ],
      },
      {
        type: "p",
        content:
          "Örneğin 36 m² alanda her işlevi eşit büyütmeye çalışmak yerine ana amacı seçin. Ürün demosu öncelikliyse görüşme mobilyalarını buna göre azaltın; önemli müşteri toplantıları öncelikliyse depo ve demo ölçeğini yeniden değerlendirin. Bu, ölçülü planla çözülmesi gereken bir tasarım kararıdır.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Kaç metrekare standımız olmalı?",
            answer:
              "Ürünün kapladığı alan, eşzamanlı görüşme sayısı, depo ihtiyacı ve güvenli dolaşım birlikte değerlendirilmelidir. Önce işlevleri ölçülendirin; ardından bütçeye göre alan arayın. Firma büyüklüğü tek başına yeterli kriter değildir.",
          },
          {
            question: "Küçük stantta depo gerekli mi?",
            answer:
              "Numune, ambalaj, ikram ve personel eşyaları görünür alanı işgal ediyorsa kapalı depolama gerekir. Ayrı oda şart değildir; kilitli dolap veya banko içi çözüm de planlanabilir.",
          },
          {
            question: "Ada stant mı köşe stant mı tercih edilmeli?",
            answer:
              "Ada stant daha fazla yaklaşım yönü sunabilir, fakat her cephe için görünürlük ve ekip planı gerektirir. Köşe veya tek cepheli alanlarda farklı sergileme imkânları vardır. Tercihi trafik ve ürün kurgusuyla birlikte yapın.",
          },
          {
            question: "Stant yüksekliğini istediğimiz gibi seçebilir miyiz?",
            answer:
              "Hayır. İlgili salon ve etkinliğin teknik koşulları, onay gereksinimleri ve komşu stantlarla ilgili kurallar kontrol edilmelidir. Tasarım başlamadan güncel teknik kılavuzu isteyin.",
          },
          {
            question: "Render onayı üretime başlamak için yeterli midir?",
            answer:
              "Görsel onay tek başına yeterli bir teslim tanımı değildir. Ölçülü plan, malzeme listesi, grafik yerleşimi, elektrik ihtiyaçları ve gerekli teknik onaylar da tamamlanmalıdır. Görsel ile uygulanacak detaylar arasında açık eşleşme kurun.",
          },
        ],
      },
      {
        type: "sources",
        text: "Messe Frankfurt, teknik kuralların etkinliğe göre farklılaşabileceğini belirtir. Yükseklik ve onay koşulları bu yüzden fuar bazında kontrol edilmelidir.",
        links: [{ label: "Messe Frankfurt: Teknik genel bilgiler", href: "https://builder.messefrankfurt.com/frankfurt/en/general-information.html" }],
      },
    ],
  },

  // ─── 15 ──────────────────────────────────────────────────────────────────
  {
    slug: "fuar-oncesi-musteri-daveti-randevu",
    title: "Fuar Öncesi Müşteri Daveti ve Randevu Planı Nasıl Hazırlanır?",
    category: "fuar-hazirligi",
    excerpt:
      "Standınıza doğru ziyaretçileri davet edin: hedef liste, kişisel davet mesajı, toplantı takvimi ve Türkçe-İngilizce örnek davet metinleri.",
    readTime: 5,
    publishDate: "2026-11-03",
    tags: ["fuar daveti", "randevu planı", "davet maili", "fuar ziyaretçisi"],
    seo: {
      title: "Fuar Öncesi Müşteri Daveti ve Randevu Planı",
      description:
        "Fuar standınıza doğru ziyaretçileri davet edin. Hedef liste, kişisel davet mesajı, toplantı takvimi ve örnek e-postayla hazırlanın.",
      keywords: ["fuar davet maili örneği", "fuar öncesi müşteri daveti", "stant ziyaretçi artırma", "fuarda yabancı müşteri bulmak"],
    },
    related: ["ilk-fuar-katilimi-fuar-secimi", "fuarda-lead-yonetimi-roi-hesaplama", "fuar-hazirlik-kontrol-listesi"],
    sections: [
      {
        type: "p",
        content:
          "Fuar daveti, karşı tarafa standınızı neden ziyaret etmesi gerektiğini açıklamalıdır. Hedef müşteriyi, göstereceğiniz çözümü ve görüşmenin amacını tanımlayın. Sadece tarih ve stant numarası içeren toplu duyuruyla yetinmeyin.",
      },
      {
        type: "h2",
        content: "Davetten görüşmeye giden plan",
      },
      {
        type: "p",
        content:
          "Mevcut müşterileri, aktif fırsatları ve yeni hedef firmaları ayrı listelerde değerlendirin. Her firmaya uygun konu seçin: yeni ürün, teknik çözüm, dağıtım modeli veya mevcut işin geliştirilmesi. Örnek bir çalışma takvimi olarak davetlere 4–6 hafta önce başlayabilir, yanıta göre takip yapabilir ve toplantıdan önce kısa teyit gönderebilirsiniz. Bu süreler zorunlu bir standart değildir.",
      },
      {
        type: "p",
        content:
          "Toplantı çizelgesinde firma, katılımcı, saat, dil, konu ve sorumlu bulunsun. Randevular arasında hazırlık payı bırakın. Organizatörün varsa randevu sistemiyle kendi listenizi eşleştirin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Kısa fuar davet e-postası nasıl yazılır?",
            answer:
              "Örnek: \"Merhaba [Ad], [Fuar] sırasında [ihtiyaca yönelik ürün/çözüm] üzerine görüşmek isteriz. [Tarih] [saat] veya [alternatif saat] size uygun olur mu? Salon [X], stant [Y]'de olacağız.\" Köşeli parantezleri gerçek bilgilerle değiştirin.",
          },
          {
            question: "İngilizce fuar davet mesajı nasıl olabilir?",
            answer:
              "\"Hi [Name], we will be exhibiting at [Show]. We would be glad to discuss how our [product/solution] could support [specific need]. Would [day/time] suit you for a short meeting at Hall [X], Stand [Y]?\" Mesajı alıcının rolüne göre kişiselleştirin.",
          },
          {
            question: "Davete yanıt vermeyen kişiye tekrar yazmalı mıyız?",
            answer:
              "Makul aralıkla, yeni ve yararlı bir bilgi içeren kısa takip yapılabilir. Aynı mesajı sürekli tekrarlamayın. İletişim tercihlerini, ret taleplerini ve ilgili ülkedeki kuralları dikkate alın.",
          },
          {
            question: "Fuar katılımcı listesindeki herkese e-posta gönderebilir miyiz?",
            answer:
              "Listenin erişilebilir olması sınırsız pazarlama izni anlamına gelmez. Liste kullanım şartlarını ve uygulanacak kişisel veri/ticari ileti kurallarını inceleyin. Önce ürününüzle gerçekten ilişkili firmaları seçin; kapsamı belirsiz toplu gönderimden kaçının.",
          },
          {
            question: "Standımıza daha fazla ziyaretçi çekmek için ne yapabiliriz?",
            answer:
              "Önce hangi ziyaretçiyi istediğinizi belirleyin. Kişisel davet, anlaşılır koridor mesajı, kısa demo ve önceden duyurulmuş görüşme konusu kullanın. Hediye için gelen kalabalık ile ticari olarak ilgili ziyaretçiyi ayrı değerlendirin.",
          },
        ],
      },
      {
        type: "sources",
        text: "Türkiye'de ticari elektronik ileti kuralları alıcı ve ileti türüne göre değerlendirilir; tacir/esnaf alıcılar için bazı ön onay istisnaları bulunması ret hakkını ortadan kaldırmaz. Yabancı alıcılarda ilgili ülke kuralları ayrıca incelenmelidir.",
        links: [
          { label: "Ticaret Bakanlığı: Ticari elektronik iletiler", href: "https://ticaret.gov.tr/ic-ticaret/ticari-elektronik-iletiler/genel-bilgiler" },
        ],
      },
    ],
  },

  // ─── Ülke rehberleri: bilgilendirme amaçlı; ülkede ofis veya ekip iddiası içermez ───

  // ─── 16 ──────────────────────────────────────────────────────────────────
  {
    slug: "almanya-fuar-katilimi",
    title: "Almanya'da Fuara Katılırken Nelere Dikkat Edilmeli?",
    category: "uluslararasi-fuarlar",
    excerpt:
      "Almanya'da fuara katılmadan önce teknik onay, stant, seyahat, lojistik ve müşteri randevularını planlayın; Frankfurt örneğiyle salon kurallarını inceleyin.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["Almanya fuarları", "Frankfurt", "Düsseldorf", "yurt dışı fuar"],
    seo: {
      title: "Almanya Fuarlarına Katılım ve Stant Hazırlığı",
      description:
        "Almanya'da fuara katılmadan önce teknik onay, stant, seyahat, lojistik ve müşteri randevularını planlayın. Frankfurt örneğini inceleyin.",
      keywords: ["Almanya fuarına nasıl katılınır", "Almanya fuar standı", "Frankfurt fuar stant firması", "Düsseldorf fuar hazırlıkları"],
    },
    related: ["fuar-standi-tasarim-briefi", "yurtdisinda-fuara-katilim-rehberi", "devlet-fuar-destekleri-2026"],
    sections: [
      {
        type: "p",
        content:
          "Almanya'da fuar katılımını planlarken şehir ve fuar adı kadar ilgili salonun teknik kurallarını inceleyin. Frankfurt, Düsseldorf, Hannover veya başka bir şehirde uygulanacak şartları tek bir ülke standardı gibi kabul etmeyin. Güncel etkinlik kılavuzu, sipariş takvimi ve stant onay süreciyle başlayın.",
      },
      {
        type: "h2",
        content: "Frankfurt örneği: tasarım ile teknik onayı birlikte yürütün",
      },
      {
        type: "p",
        content:
          "Messe Frankfurt, bazı etkinliklerde farklı teknik kurallar uygulanabileceğini açıkça belirtir. Özel yapılar ve iki katlı stantlar gibi çözümlerde ayrıca onay gereksinimi doğabilir. Bu nedenle başka bir fuarda kullanılmış tasarımı doğrudan üretime sokmayın.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Teknik çizim ve malzeme onayını seyahat rezervasyonundan bağımsız bir iş paketi yapın. Salon hizmetleri için son sipariş gününü, kurulum ekibi girişini ve yük teslim zamanını aynı takvimde izleyin. İngilizce teknik dosyaların yanında hedef müşteriye göre Almanca kısa ürün özeti hazırlamayı değerlendirin. Konaklamada günlük toplam ulaşım süresini oda fiyatıyla birlikte karşılaştırın.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Almanya'daki bütün fuarlarda aynı stant kuralları mı geçerli?",
            answer:
              "Hayır. Fuar, salon ve stant niteliğine göre farklı koşullar olabilir. Yükseklik, kapalı tavan, askı, yangın ve onay konularını ilgili edisyonun kılavuzundan kontrol edin.",
          },
          {
            question: "Almanya fuarına gitmek için hangi vize gerekir?",
            answer:
              "Pasaport türü, kalış süresi ve yapılacak faaliyet dikkate alınmalıdır. Fuar ziyareti/iş görüşmesi ile sahada kurulum işi aynı değerlendirmeye tabi olmayabilir. Güncel koşulları Alman resmî temsilciliğinden teyit edin; davetiye tek başına yeterli değildir.",
          },
          {
            question: "Almanca katalog zorunlu mu?",
            answer:
              "Tek bir genel zorunluluk varsayılmamalıdır. Hedef ziyaretçinin diline ve fuarın koşullarına bakın. Almanca özet ve doğru teknik terminoloji iletişimi kolaylaştırabilir; satış sonrası doküman gereksinimini ayrıca değerlendirin.",
          },
          {
            question: "Stant kurulumunu kendi ekibimiz yapabilir mi?",
            answer:
              "Ekip erişimi, yetki, sigorta, çalışma/seyahat koşulları ve özel teknik hizmet sınırları kontrol edilmelidir. Özellikle bağlantı ve askı gibi işlerde organizatörün yetkili hizmet sağlayıcı şartları bulunabilir.",
          },
          {
            question: "Fuar merkezine uzak otel seçmek tasarruf sağlar mı?",
            answer:
              "Oda fiyatı düşse bile ulaşım, zaman ve araç ihtiyacı artabilir. Toplu taşıma bağlantısı, ilk gün kurulum ziyareti ve ekip mesaisini içeren toplam maliyet hesabı yapın.",
          },
        ],
      },
      {
        type: "sources",
        text: "Vize başvuru ayrıntıları ilgili ülkenin resmî temsilciliğinden doğrulanmalıdır.",
        links: [
          { label: "Messe Frankfurt: Teknik genel bilgiler", href: "https://builder.messefrankfurt.com/frankfurt/en/general-information.html" },
          {
            label: "Messe Frankfurt: Stant onay portalı",
            href: "https://www.messefrankfurt.com/frankfurt/en/services/set-up/stand-construction-authorisation-check.html",
          },
          { label: "Dışişleri Bakanlığı: Vize uygulamaları", href: "https://www.mfa.gov.tr/turk-vatandaslarinin-tabi-oldugu-vize-uygulamalari.tr.mfa" },
        ],
      },
    ],
  },

  // ─── 17 ──────────────────────────────────────────────────────────────────
  {
    slug: "italya-fuar-katilimi",
    title: "İtalya'da Fuara Katılım: Milano ve Bologna İçin Hazırlık",
    category: "uluslararasi-fuarlar",
    excerpt:
      "İtalya fuarlarında stant tasarımı, teknik hizmet siparişleri ve ekip planını hazırlayın; Milano örneğiyle katılım öncesi kontrolleri görün.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["İtalya fuarları", "Milano", "Bologna", "yurt dışı fuar"],
    seo: {
      title: "İtalya Fuarlarına Katılım: Milano ve Bologna",
      description:
        "İtalya fuarlarında stant tasarımı, teknik hizmet siparişleri ve ekip planını hazırlayın. Milano örneğiyle katılım öncesi kontrolleri görün.",
      keywords: ["İtalya fuarına katılmak", "Milano fuar standı", "Bologna fuar hazırlığı", "İtalya fuar organizasyonu"],
    },
    related: ["ahsap-mi-moduler-stand-mi", "fuar-standi-tasarim-briefi", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "İtalya'daki fuarlara hazırlanırken tasarım ve ürün sunumunu teknik hizmet siparişlerinden ayrı düşünmeyin. Onaylı stant görseli; elektrik bağlantısı, askı veya diğer salon hizmetlerinin sipariş edildiğini göstermez. Her hizmetin kapsamını ve sipariş kanalını takip edin.",
      },
      {
        type: "h2",
        content: "Milano örneği: iki farklı kural setini kontrol edin",
      },
      {
        type: "p",
        content:
          "Salone del Mobile, katılımcıların hem Fiera Milano teknik kurallarına hem de etkinliğin stant tasarım hükümlerine uymasını ister. Hizmet sayfasında E-service siparişleri ve son tarih takvimi açıklanır; askı hizmetinin Fiera Milano tarafından sağlandığı belirtilir. Bunlar Milano'daki bu etkinlik bağlamında doğrulanmış örneklerdir; Bologna veya bütün İtalya için otomatik kural değildir.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Ürünleri çok sayıda kategoriyle doldurmak yerine görüşme hedefinize göre seçin. Yüzey, ışık ve grafik örneklerini uygulama öncesinde kontrol edin. Demo yapılacaksa su, güç, atık ve temizlik ihtiyacını ayrıca yazın. Ekibin seyahat günleriyle malzeme teslim günlerini ayrı planlayın; taşıma gecikmesinin bütün ekibi bekletmesini önleyecek alternatifleri değerlendirin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Milano ve Bologna fuarları için aynı hazırlık dosyası yeterli mi?",
            answer:
              "Marka ve ürün bilgileri yeniden kullanılabilir; teknik kurallar, formlar ve son tarihler yeniden kontrol edilmelidir. Şehir adının değişmesi sadece otelin değişmesi anlamına gelmez.",
          },
          {
            question: "İtalya'da stant hizmetleri nasıl sipariş edilir?",
            answer:
              "İlgili fuarın katılımcı portalını ve kılavuzunu kullanın. Tasarım firmasıyla yaptığınız anlaşmanın hangi salon siparişlerini kapsadığını kontrol edin; portal sipariş onaylarını proje dosyasına ekleyin.",
          },
          {
            question: "Stant tasarımında görünüm mü işlev mi öncelikli olmalı?",
            answer:
              "İkisini birlikte çözün. Ürünü fark ettiren tasarım, ziyaretçinin ne sunduğunuzu anlamasını ve görüşmeye başlamasını da kolaylaştırmalıdır. Fotoğrafta güçlü görünen fakat ürün kullanımını engelleyen düzeni yeniden değerlendirin.",
          },
          {
            question: "Ürün demosu veya tadım yapılabilir mi?",
            answer:
              "Fuar ve ürün koşullarına bağlıdır. Elektrik, su, hijyen, yangın ve gıda/ürün izinlerini önceden kontrol edin. Paket içinde yer aldığı açıkça belirtilmeyen ekipman veya izni hazır kabul etmeyin.",
          },
          {
            question: "Numuneleri otele göndermek uygun mudur?",
            answer:
              "Otelin teslim kabulü, depolama, sigorta ve ürün niteliği konusunda yazılı onayı olmadan planlamayın. Ticari sevkiyat ile kişisel bagaj farklıdır; fuarın lojistik sağlayıcısının teslim modelini de karşılaştırın.",
          },
        ],
      },
      {
        type: "sources",
        links: [
          { label: "Salone del Mobile: Teknik kurallar", href: "https://www.salonemilano.it/en/technical-regulations-and-sustainable-set" },
          { label: "Salone del Mobile: Fiera Milano hizmetleri", href: "https://www.salonemilano.it/en/fiera-milano-services" },
        ],
      },
    ],
  },

  // ─── 18 ──────────────────────────────────────────────────────────────────
  {
    slug: "fransa-paris-fuar-katilimi",
    title: "Fransa ve Paris Fuarlarına Katılırken Nasıl Hazırlanmalısınız?",
    category: "uluslararasi-fuarlar",
    excerpt:
      "Paris fuarlarında doğru salonu, teknik planı, yükleme erişimini ve ekip ulaşımını kontrol edin; Fransa katılımınız için hazırlık önerileri.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["Fransa fuarları", "Paris", "Viparis", "yurt dışı fuar"],
    seo: {
      title: "Fransa ve Paris Fuarlarına Katılım Rehberi",
      description:
        "Paris fuarlarında doğru salon, teknik plan, yükleme erişimi ve ekip ulaşımını kontrol edin. Fransa katılımınız için hazırlık önerileri.",
      keywords: ["Fransa fuarına katılmak", "Paris fuar standı", "Paris fuar organizasyonu", "Fransa fuar hazırlığı"],
    },
    related: ["fuar-hazirlik-kontrol-listesi", "fuar-oncesi-musteri-daveti-randevu", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "Paris'te fuar hazırlığına etkinliğin tam adresini ve salonunu doğrulayarak başlayın. Şehir adı, ulaşım ve yük teslim planı için yeterli değildir. Ekip seyahati, malzeme sevkiyatı ve teknik hizmetleri doğru fuar merkeziyle ilişkilendirin.",
      },
      {
        type: "h2",
        content: "Viparis örneği: plan ve yükleme erişimi",
      },
      {
        type: "p",
        content:
          "Viparis'in katılımcı rehberi, teknik kılavuzun okunmasını ve son tarihlerin takip edilmesini önerir. Yerleşim planında ölçüler ile elektrik gibi hizmet noktalarının gösterilmesini ister. Kurulum ve sökümde yükleme alanlarına erişim için Logipass kaydına dikkat çeker. Bu uygulama ilgili Viparis mekânları için kontrol edilmelidir; bütün Fransa fuarlarına genellenmemelidir.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Lojistik dosyasında fuar merkezi, salon, stant, teslim kişisi ve telefon bilgisini birlikte kullanın. Grafik ve ürün bilgilerinin Fransızca kısa versiyonunu hedef ziyaretçiye göre hazırlayın. Yeni distribütör görüşmelerinde satış bölgesi, kanal ve ürün konumlandırmasını önceden tartışılabilir hâle getirin; ilk görüşmeyi yalnızca fiyat listesi paylaşımına sıkıştırmayın.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Paris'te otel seçerken neye bakmalıyız?",
            answer:
              "Fuarın tam konumu, ekip başlangıç saati ve ulaşım bağlantısını birlikte değerlendirin. Şehir merkezinde olmak otomatik avantaj değildir. Toplam yol süresi, araç ihtiyacı ve iptal koşullarını karşılaştırın.",
          },
          {
            question: "Fuar merkezine malzeme götüren araç için izin gerekir mi?",
            answer:
              "İlgili alanın erişim sistemi kontrol edilmelidir. Viparis rehberi Logipass kaydını belirtir. Araç, sürücü, zaman aralığı ve teslim bilgilerini organizatörün o etkinlik için duyurduğu süreçle teyit edin.",
          },
          {
            question: "Fransa'da İngilizce sunum yeterli mi?",
            answer:
              "Hedef müşteri ve ürünün teknik karmaşıklığına bağlıdır. Fransızca kısa ürün özeti ve ilgili terminolojiye hâkim destek görüşmeyi kolaylaştırabilir. Dil tercihini planlanan müşteri toplantılarında önceden sorun.",
          },
          {
            question: "Grafik baskıları sahada tamamlamak mantıklı mı?",
            answer:
              "Son dakika düzeltmeleri için seçenek olabilir; ana üretim planı olarak risklidir. Ölçü ve dosyaları önceden doğrulayın, kritik grafiklerin onaylı yedeğini saklayın ve yerel acil çözümün maliyetini öğrenin.",
          },
          {
            question: "Fuar yanında distribütör ziyaretleri planlanabilir mi?",
            answer:
              "Evet, ekip görevleri ve ulaşım süresi uygunsa. Stant personelini zayıflatmayacak randevular seçin. Her ziyaret için ticari amaç, toplantı katılımcısı ve takip adımı belirleyin.",
          },
        ],
      },
      {
        type: "sources",
        links: [{ label: "Viparis: Katılımcı rehberi", href: "https://www.viparisstore.com/en/key-information" }],
      },
    ],
  },

  // ─── 19 ──────────────────────────────────────────────────────────────────
  {
    slug: "dubai-bae-fuar-katilimi",
    title: "Dubai ve Birleşik Arap Emirlikleri Fuarlarına Nasıl Hazırlanılır?",
    category: "uluslararasi-fuarlar",
    excerpt:
      "Dubai fuarlarında doğru mekânı, stant paketini, teknik hizmetleri, tercüman ve transfer planını hazırlayın; BAE katılımı için temel sorular.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["Dubai fuarları", "BAE", "DWTC", "yurt dışı fuar"],
    seo: {
      title: "Dubai ve BAE Fuarlarına Katılım Rehberi",
      description:
        "Dubai fuarlarında doğru mekân, stant paketi, teknik hizmet, tercüman ve transfer planını hazırlayın. BAE katılımı için temel sorular.",
      keywords: ["Dubai fuarına nasıl katılınır", "Dubai fuar standı", "BAE fuar katılımı", "Dubai fuar otel transfer"],
    },
    related: ["anahtar-teslim-fuar-katilim-yonetimi", "fuar-oncesi-musteri-daveti-randevu", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "Dubai'de fuara katılım planlarken etkinliğin güncel edisyonunu ve gerçek mekânını kontrol edin. Önceki yılın salonu, ulaşım düzeni veya hizmet paketi değişmiş olabilir. Stant ve seyahat rezervasyonlarını aynı doğrulanmış takvime göre yapın.",
      },
      {
        type: "h2",
        content: "DWTC örneği: hizmet siparişlerini ayrı kontrol edin",
      },
      {
        type: "p",
        content:
          "Dubai World Trade Centre, katılımcılar için Event Plus üzerinden çeşitli fuar hizmetleri sunar; ancak ilk başvuru noktasının etkinlik organizatörü ve katılımcı kılavuzu olduğunu belirtir. Dolayısıyla mobilya, bağlantı, temizlik veya askı hizmetini ana stant fiyatına otomatik dahil saymayın. Bu süreç, DWTC'de düzenlenen ilgili etkinlik için doğrulanmalıdır.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Hedef görüşmeleri BAE iç pazarı, bölgesel dağıtıcılar ve diğer ülkelerden gelen alıcılar olarak ayrı düşünün. Tek bir ziyaretçi profilini bütün fuara genellemeyin. Ürün belgeleri, teslim seçenekleri ve distribütörlük modelini bu görüşmelere göre hazırlayın. İkram, tercüman ve transfer ihtiyaçlarını toplantı yoğunluğuna bağlayın; sadece ekip sayısına göre sipariş vermeyin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Dubai fuarlarında İngilizce yeterli mi, Arapça gerekir mi?",
            answer:
              "Toplantı yapacağınız kişilerin dil tercihini kontrol edin. İngilizce dokümanların yanında hedef kitleye göre Arapça özet veya tercüman planlanabilir. Her ziyaretçinin aynı dili kullandığını varsaymayın.",
          },
          {
            question: "Dubai'de hazır stant mı özel tasarım mı seçilmeli?",
            answer:
              "Ürün sergileme, marka görünürlüğü ve toplantı ihtiyacına göre karar verin. Hazır pakette hangi grafik, ışık ve mobilyanın bulunduğunu kontrol edin; özel tasarımda teknik onay ve ek hizmet maliyetlerini ekleyin.",
          },
          {
            question: "BAE fuarında numune veya gıda dağıtabilir miyiz?",
            answer:
              "Ürünün ülkeye girişi ile fuarda dağıtım/tadım koşulları ayrı konulardır. İlgili ürün ve etkinlik için gerekli izinleri kontrol edin. Tüketilecek ürünleri geri getirilecek sergi ekipmanıyla aynı işlem gibi planlamayın.",
          },
          {
            question: "Dubai'de otel ile fuar arasında transfer ayarlamak gerekir mi?",
            answer:
              "Otel konumu, ekip büyüklüğü, mesai saatleri ve taşınacak malzemeye göre değerlendirin. Toplu taşıma, bireysel ulaşım ve ortak transferin toplam zaman ve maliyetini karşılaştırın.",
          },
          {
            question: "Fuar katılımı bölgesel distribütör bulmamızı garanti eder mi?",
            answer:
              "Hayır. Uygun adaylara ulaşmak, adayın satış ağı ve kapasitesini değerlendirmek ve fuar sonrası görüşmeleri sürdürmek gerekir. Bölge münhasırlığı gibi kararları tek fuar görüşmesine dayanarak vermeyin.",
          },
        ],
      },
      {
        type: "sources",
        links: [{ label: "Dubai World Trade Centre: Katılımcı hizmetleri", href: "https://www.dwtc.com/en/exhibit/" }],
      },
    ],
  },

  // ─── 20 ──────────────────────────────────────────────────────────────────
  {
    slug: "amerika-abd-fuar-katilimi",
    title: "Amerika'da Fuara Katılım: Stant, Nakliye ve Drayage Maliyeti",
    category: "uluslararasi-fuarlar",
    excerpt:
      "ABD fuarlarında nakliye, drayage, saha işçiliği ve hizmet paketlerini ayırın; Amerika katılım bütçesini ve numune hazırlığını planlayın.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["ABD fuarları", "Amerika", "drayage", "yurt dışı fuar"],
    seo: {
      title: "Amerika Fuarlarına Katılım ve Stant Maliyeti",
      description:
        "ABD fuarlarında nakliye, drayage, saha işçiliği ve hizmet paketlerini ayırın. Amerika katılım bütçesi ve numune hazırlığını planlayın.",
      keywords: ["Amerika fuarına katılmak", "ABD fuar standı maliyeti", "Las Vegas fuar standı", "drayage nedir"],
    },
    related: ["fuar-standi-fiyatlari-2026", "fuar-standi-teklif-karsilastirma", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "ABD fuarlarında bütçe hazırlarken dış nakliye ile fuar içindeki yük işlemlerini ayrı kalemlerde kontrol edin. Standın veya ürünün fuar merkezine ulaşması, boşaltma ve stant alanına teslim gibi hizmetlerin ödendiği anlamına gelmeyebilir.",
      },
      {
        type: "h2",
        content: "Drayage neden ayrı incelenmeli?",
      },
      {
        type: "p",
        content:
          "Freeman, \"material handling/drayage\" hizmetini yükün boşaltılması, standa taşınması, boş ambalajın depolanması ve çıkışta geri getirilmesi gibi işlemlerle açıklar. Uluslararası katılımcı rehberi ayrıca bazı hizmetlerin yetkili sağlayıcıya özel olabileceğini, işçilik ve hizmet koşullarının fuar kılavuzundan kontrol edilmesi gerektiğini belirtir. Bunlar tüm fuarlar için aynı tarife anlamına gelmez.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Lojistik teklifini taşıma, geçici ithalat işlemleri, malzeme elleçleme, depo ve dönüş olarak ayırın. Stant sözleşmesinde saha işçiliğini ve mesai koşullarını ayrıca görün. Yerel kiralama ile Türkiye'den gönderim için iki tam maliyet senaryosu hazırlayın. Standın ölçülerini kullanılan birimlerle birlikte yazılı teyit edin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Drayage ile nakliye aynı hizmet mi?",
            answer:
              "Hayır. Nakliye yükün başlangıç yerinden depoya veya fuar alanına taşınmasıdır. Drayage/material handling ise alandaki yük hareketleri ve ilgili hizmetleri kapsayabilir. Teklifte iki bedelin de kapsamını ve minimum ücretlerini sorun.",
          },
          {
            question: "ABD fuarında standı kendi personelimiz kurabilir mi?",
            answer:
              "Etkinlik ve mekân kuralları belirleyicidir. Hangi işlerin katılımcı tarafından yapılabildiğini, hangi işlerde yetkili hizmet veya belirli işçilik düzeni gerektiğini katılımcı kılavuzundan doğrulayın. Seyahat/çalışma koşullarını ayrıca kontrol edin.",
          },
          {
            question: "Amerika'ya bütün standı göndermek zorunda mıyız?",
            answer:
              "Hayır. Yerel kiralama ve sadece özel parçaların/ürünlerin gönderilmesi seçenekleri karşılaştırılabilir. Paket hacmi, ağırlık, depolama, tekrar kullanım ve geri taşıma maliyetlerini birlikte değerlendirin.",
          },
          {
            question: "ABD fuarında dağıtacağımız numuneler ATA Karnesine girebilir mi?",
            answer:
              "ABD gümrük kurumu CBP, tüketilecek veya dağıtılacak fuar numunelerinin ATA Karnesi kapsamında olmadığını açıklar. Geri götürülecek sergi ürünü ile dağıtım numunesi için farklı işlem planı hazırlayın. Ürüne özel kısıtlamaları da kontrol edin.",
          },
          {
            question: "Amerika fuarı için teklif isterken hangi bilgileri vermeliyiz?",
            answer:
              "Fuar/şehir, mekân, tarih, alan ölçüsü, açık cepheler, ürün listesi, sevkiyat ağırlık ve hacmi, kurulum ihtiyacı ve ekip planını paylaşın. Depoya mı doğrudan salona mı teslim edileceğini ayrıca belirtin.",
          },
        ],
      },
      {
        type: "sources",
        text: "CBP ayrıca ürün değeri, fuar/katılımcı belgeleri ve ürünü düzenleyen kurumun olası şartlarının kontrolünü önerir.",
        links: [
          { label: "Freeman: Katılımcı rehberi", href: "https://www.freeman.com/exhibitor-guide/" },
          { label: "Freeman: Uluslararası katılımcı rehberi", href: "https://www.freeman.com/resources/quick-guide-the-international-exhibitor/" },
          { label: "CBP: Fuarda ürün sergileme", href: "https://www.help.cbp.gov/s/article/Article1286?language=en_US" },
        ],
      },
    ],
  },

  // ─── 21 ──────────────────────────────────────────────────────────────────
  {
    slug: "cin-fuar-katilimi",
    title: "Çin'de Fuara Nasıl Katılınır? Ziyaretçi ve Katılımcı Ayrımı",
    category: "uluslararasi-fuarlar",
    excerpt:
      "Çin fuarlarında alıcı ziyareti ile stantlı katılımı ayırın; Canton Fair örneğiyle başvuru kanalını, ürün kategorisini ve hazırlığı değerlendirin.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["Çin fuarları", "Canton Fair", "Guangzhou", "yurt dışı fuar"],
    seo: {
      title: "Çin Fuarlarına Katılım ve Canton Fair Hazırlığı",
      description:
        "Çin fuarlarında alıcı ziyareti ile stantlı katılımı ayırın. Canton Fair örneğiyle başvuru kanalı, ürün kategorisi ve hazırlığı değerlendirin.",
      keywords: ["Çin fuarına nasıl katılınır", "Canton Fair katılımcı başvurusu", "Çin fuarında stant açmak", "Guangzhou fuar hazırlığı"],
    },
    related: ["ilk-fuar-katilimi-fuar-secimi", "fuar-oncesi-musteri-daveti-randevu", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "Çin fuarlarına hazırlanırken önce amacınızı netleştirin: tedarikçi aramak için alıcı olarak ziyaret mi edeceksiniz, yoksa kendi ürünlerinizi sergilemek için stant mı açacaksınız? Kayıt, uygunluk, belge ve bütçe bu iki durumda farklılaşır.",
      },
      {
        type: "h2",
        content: "Canton Fair örneği: doğru katılım kanalını kullanın",
      },
      {
        type: "p",
        content:
          "Canton Fair'in International Pavilion sayfalarında yabancı katılımcıların uygunluk, başvuru ve ürün kategorilerine ilişkin ayrı alanlar bulunur. Organizatör, başvuruların belirlenen personel veya ilan edilmiş yetkili katılımcı temin ortakları üzerinden yapılabileceğini belirtir. Fazlar, ürün grupları ve yetkili kanallar için ilgili edisyonun güncel duyurusunu kullanın.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Ürün grubunuzun uygunluğunu doğrulamadan stant veya seyahat için geri dönülemez ödeme yapmayın. Satış amacıyla gidiyorsanız hedef alıcı ve kanal listesini; satın alma amacıyla gidiyorsanız teknik şartname ve tedarikçi değerlendirme sorularını hazırlayın. İletişim ve dosya paylaşım araçlarınızın sahada çalışmasını önceden test edin, çevrimdışı katalog yedeği bulundurun.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Canton Fair'e ziyaretçi kaydı yapmak stant açmak anlamına gelir mi?",
            answer:
              "Hayır. Alıcı/ziyaretçi kaydı, yabancı katılımcı olarak sergileme başvurusundan ayrıdır. Hangi rol için kayıt yaptığınızı ve hangi giriş/katılım haklarını aldığınızı kontrol edin.",
          },
          {
            question: "Çin'deki her fuarda yabancı firma stant açabilir mi?",
            answer:
              "Her etkinliğin kabul koşulu farklı olabilir. Firma, ürün grubu ve katılım alanı uygunluğunu organizatörden teyit edin. Genel bir aracı teklifini organizatör onayı yerine kabul etmeyin.",
          },
          {
            question: "Canton Fair'in hangi dönemine gitmeliyiz?",
            answer:
              "Güncel edisyonun ürün kategorisi ve faz takvimine göre karar verin. Önceki yılın tarihlerini kopyalamayın; ziyaretçi programı ile yabancı katılımcı alanının takvimini ayrı kontrol edin.",
          },
          {
            question: "Çin fuarlarında tercüman gerekir mi?",
            answer:
              "Görüşülecek firmaların dili ve teknik konunun zorluğuna göre planlayın. Tercümana ürün sözlüğü, ölçüler, kalite kriterleri ve ticari sınırları önceden verin. Teknik müzakere ile genel karşılama farklı yetkinlikler gerektirir.",
          },
          {
            question: "Başvuru aracısının güvenilirliğini nasıl kontrol ederiz?",
            answer:
              "Yetkisini organizatörün resmî listesinden veya doğrulanmış iletişim kanalından kontrol edin. Sözleşmedeki firma, hizmet kapsamı ve ödeme alıcısı arasında tutarlılık arayın. Yetki belirsizse yazılı teyit alın.",
          },
        ],
      },
      {
        type: "sources",
        links: [
          { label: "Canton Fair: International Pavilion", href: "https://cief.cantonfair.org.cn/en/international/index.aspx" },
          { label: "Canton Fair: Yetkili başvuru kanalları", href: "https://cief.cantonfair.org.cn/en/international/coopperation.shtml" },
        ],
      },
    ],
  },

  // ─── 22 ──────────────────────────────────────────────────────────────────
  {
    slug: "rusya-moskova-fuar-katilimi",
    title: "Rusya ve Moskova Fuarlarına Katılırken Nelere Dikkat Edilmeli?",
    category: "uluslararasi-fuarlar",
    excerpt:
      "Rusya fuarlarında teknik hizmet, Rusça iletişim, ödeme, lojistik ve transfer hazırlığını planlayın; Moskova katılımı için temel kontroller.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["Rusya fuarları", "Moskova", "Crocus Expo", "yurt dışı fuar"],
    seo: {
      title: "Rusya ve Moskova Fuarlarına Katılım Rehberi",
      description:
        "Rusya fuarlarında teknik hizmet, Rusça iletişim, ödeme, lojistik ve transfer hazırlığını planlayın. Moskova katılımı için temel kontroller.",
      keywords: ["Rusya fuarına katılmak", "Moskova fuar standı", "Crocus Expo stant", "Rusya fuar otel transfer"],
    },
    related: ["fuar-standi-fiyatlari-2026", "anahtar-teslim-fuar-katilim-yonetimi", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "Rusya'da fuar katılımında stant ve seyahatin yanında ödeme, ürün taşımacılığı ve hedef müşteri iletişimini erken netleştirin. Teklifte para birimi, ödeme alıcısı ve geçerli hizmet koşulları açık olsun. Güncel işlem uygunluğunu banka ve ilgili uzmanlarla kontrol etmeden ödeme kanalını hazır varsaymayın.",
      },
      {
        type: "h2",
        content: "Moskova örneği: saha siparişlerini izleyin",
      },
      {
        type: "p",
        content:
          "Woodex'in katılımcı kaynak merkezinde Crocus Expo giriş süreci, stant/teknik hizmet siparişleri ve tavan askı işlemleri için ayrı dokümanlar bulunur. Bu, yalnızca alan rezervasyonu yapmanın bütün operasyonu kapsamadığını gösteren bir örnektir. İlgili fuarın güncel kılavuzunu kullanın.",
      },
      {
        type: "p",
        content:
          "Ticaret Bakanlığı'nın Rusya ülke analizi, yaptırımlar ve bankacılık kısıtları nedeniyle ödeme süreçlerinin dikkatle değerlendirilmesi gerektiğini gösterir. Şirket, ürün, işlem ve banka özelinde güncel kontrol yapılmalıdır; burada belirli bir ödeme kanalının uygun olduğu ileri sürülmemektedir.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Rusça ürün özetini, teknik terimleri ve takip mesajını hazırlayın. Toplantı dilini hedef kişilerle teyit edin. Oteli seçerken kurulum ziyareti, fuar mesaisi ve dönüş saatlerini içeren transfer planını çıkarın. Numuneler için sevkiyat, sergileme ve geri dönüş sorumlularını ayrı belirleyin.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Rusya fuarı için Rusça katalog gerekir mi?",
            answer:
              "Hedef müşteri profiline göre Rusça özet yararlı olabilir. Teknik bilgilerin doğruluğunu kontrol ettirin; sadece otomatik çeviriye dayanmayın. Fiyat, ölçü, kullanım alanı ve teslim koşulları anlaşılır olsun.",
          },
          {
            question: "Türkiye'deki kart veya banka hesabıyla bütün ödemeler yapılabilir mi?",
            answer:
              "Genelleme yapılamaz. Banka, kart ağı, alıcı ve işlem türü için güncel kullanılabilirliği ve uygunluğu doğrulayın. Otel ve tedarikçi ödeme yöntemlerini seyahat öncesinde yazılı netleştirin.",
          },
          {
            question: "Moskova'da otel ve fuar transferi nasıl planlanmalı?",
            answer:
              "Fuarın gerçek salon konumu, ekip saatleri, araç kapasitesi ve bekleme koşullarını birlikte yazın. Sabit günlük gidiş-dönüş ile esnek araç hizmetini toplam maliyet üzerinden karşılaştırın; fazladan sefer ücretini sorun.",
          },
          {
            question: "Rusya fuarına her ürünü götürebilir miyiz?",
            answer:
              "Hayır; ürünün niteliğine, gümrük ve ihracat/ithalat kurallarına bağlıdır. Ürün kodu, teknik özellik, kullanım amacı ve ilgili taraflar üzerinden güncel uygunluk incelemesi yaptırın. Sergileme amacı bütün sınırlamaları kaldırmaz.",
          },
          {
            question: "Rusya'daki görüşmelerin takibini hangi dilde yapmalıyız?",
            answer:
              "Görüşmede teyit edilen dili kullanın. Rusça takip gerekiyorsa teklif ve teknik belgeler arasındaki terminolojiyi tutarlı tutun. Mesaja konuşulan ihtiyacı, teslim edilecek bilgiyi ve açık bir sonraki adımı ekleyin.",
          },
        ],
      },
      {
        type: "sources",
        links: [
          { label: "Woodex: Katılımcı kaynak merkezi", href: "https://woodexexpo.com/exhibitor-resource-center/" },
          { label: "Kolay İhracat: Rusya ülke analizi", href: "https://www.kolayihracat.gov.tr/ulkeler/rusya" },
        ],
      },
    ],
  },

  // ─── 23 ──────────────────────────────────────────────────────────────────
  {
    slug: "azerbaycan-baku-fuar-katilimi",
    title: "Azerbaycan ve Bakü Fuarlarına Nasıl Katılınır?",
    category: "uluslararasi-fuarlar",
    excerpt:
      "Bakü fuarları için stant, lojistik, teknik hizmet, ekip ulaşımı ve müşteri görüşmelerini planlayın; dil yakınlığının hazırlığın yerini almadığını unutmayın.",
    readTime: 4,
    publishDate: "2026-11-03",
    tags: ["Azerbaycan fuarları", "Bakü", "Baku Expo Center", "yurt dışı fuar"],
    seo: {
      title: "Azerbaycan ve Bakü Fuarlarına Katılım",
      description:
        "Bakü fuarları için stant, lojistik, teknik hizmet, ekip ulaşımı ve müşteri görüşmelerini planlayın. Azerbaycan katılımına hazırlanırken okuyun.",
      keywords: ["Azerbaycan fuarına katılmak", "Bakü fuar standı", "Baku Expo Center fuar", "Azerbaycan fuar organizasyonu"],
    },
    related: ["fuar-standi-teklif-karsilastirma", "anahtar-teslim-fuar-katilim-yonetimi", "yurtdisinda-fuara-katilim-rehberi"],
    sections: [
      {
        type: "p",
        content:
          "Azerbaycan fuarlarında dil ve coğrafi yakınlık görüşmeleri kolaylaştırabilir; ancak stant, lojistik ve ticari hazırlığın yerini almaz. Etkinliği, hedef müşteri grubunu, katılım şartlarını ve ürünün sınır geçiş işlemlerini ayrı değerlendirin.",
      },
      {
        type: "h2",
        content: "Bakü örneği: hizmet sağlayıcı ve teslim koşulları",
      },
      {
        type: "p",
        content:
          "Automechanika Baku'nun katılımcı bilgi sayfasında lojistik, stant ve seyahat hizmetleri ayrı başlıklarda yer alır; taşıma ücretleri ve son tarihler için ilgili sağlayıcıyla görüşülmesi istenir. Bu organizasyondaki hizmet düzeni başka Bakü fuarları için otomatik olarak geçerli sayılmamalıdır.",
      },
      {
        type: "h2",
        content: "Uygulanabilir hazırlık önerileri",
      },
      {
        type: "p",
        content:
          "Yerel üretim, kiralama ve Türkiye'den gönderim seçeneklerini toplam teslim maliyetiyle karşılaştırın. Sözleşmede para birimi, dahil işler ve ek ücretleri açık yazın. Bayi veya proje firması görüşmeleri için ürün uygulamaları ve tedarik kapasitenizi gösteren kısa dosyalar hazırlayın. Ziyaretçiyle anlaşılabilen dili seçin; yakın dillerin teknik terimlerde her zaman aynı anlama geldiğini varsaymayın.",
      },
      {
        type: "faq",
        faqs: [
          {
            question: "Azerbaycan'a kolay seyahat edilebilmesi numune taşımayı da kolaylaştırır mı?",
            answer:
              "Yolcu giriş koşulları ile ticari eşyanın gümrük işlemleri farklıdır. Ürün ve numuneler için gerekli belgeleri ayrıca kontrol edin. Yolcu kolaylığını, ticari ürünlerin belgesiz taşınabileceği şeklinde yorumlamayın.",
          },
          {
            question: "Bakü fuarlarında Türkçe yeterli olur mu?",
            answer:
              "Görüşülecek kişilere göre değişir. Azerbaycanca, Rusça veya İngilizce doküman ihtiyacı olabilir. Teknik ve ticari anlamın netliğini esas alın; önemli teklifleri karşı tarafın teyit ettiği dilde sunun.",
          },
          {
            question: "Bakü'de stant yaptırmak mı Türkiye'den göndermek mi uygun?",
            answer:
              "İki seçeneği üretim, taşıma, gümrük, kurulum ve söküm dahil değerlendirin. Yerel çözümde malzeme ve işçilik örneğini; Türkiye'den gönderimde teslim takvimi ve geri dönüş maliyetini kontrol edin.",
          },
          {
            question: "Azerbaycan'a karayoluyla ürün veya ekip gönderilebilir mi?",
            answer:
              "Planlanan tarihteki sınır ve taşıma koşulları teyit edilmelidir. Yolcu geçişi ile yük taşımacılığının kurallarını birbirine karıştırmayın. Güzergâhı yetkili taşıyıcı ve ilgili resmî kaynaklarla doğrulamadan kesin rezervasyon yapmayın.",
          },
          {
            question: "Bakü fuarında bayi veya proje müşterisi bulmak için ne hazırlamalıyız?",
            answer:
              "Hedef firma listesi, ilgili ürün grubu, uygulama örnekleri, teslim kapasitesi ve görüşme soruları hazırlayın. Toplantıda ihtiyaç ve karar sürecini öğrenin; fuar sonrasında numune, teklif veya teknik görüşme için tarih belirleyin.",
          },
        ],
      },
      {
        type: "sources",
        text: "Güncel sınır ve taşıma uygulaması için ilgili temsilcilik ve taşıyıcı teyidi ayrıca gereklidir.",
        links: [
          { label: "Automechanika Baku: Katılımcı bilgileri", href: "https://automechanika.az/en/information-for-exhibitors" },
          { label: "Dışişleri Bakanlığı: Vize ve giriş bilgileri", href: "https://www.mfa.gov.tr/turk-vatandaslarinin-tabi-oldugu-vize-uygulamalari.tr.mfa" },
        ],
      },
    ],
  },
];
