export interface Service {
  id: number;
  title: { tr: string; en: string };
  slug: string;
  phase: 'fuar-oncesi' | 'fuar-zamani' | 'fuar-sonrasi';
  shortDescription: { tr: string; en: string };
  fullDescription: { tr: string; en: string };
  heroText?: string;
  processText?: string;
  geoBlock?: { question: string; answer: string };
  ctaText?: string;
  icon: string;
  order: number;
  subServices: Array<{
    name: { tr: string; en: string };
    description: { tr: string; en: string };
  }>;
}

export const services: Service[] = [
  {
    id: 9,
    title: { tr: 'Fuar Danışmanlığı', en: 'Fair Consulting' },
    slug: 'fuar-danismanligi',
    phase: 'fuar-oncesi',
    shortDescription: {
      tr: 'Doğru fuar seçimi, katılım stratejisi, bütçe planlaması ve KPI belirleme.',
      en: 'Right fair selection, participation strategy, budget planning and KPI setting.',
    },
    fullDescription: {
      tr: 'Bir fuarın büyük veya popüler olması tek başına şirketiniz için doğru fuar olduğu anlamına gelmez. Hedef pazar, ziyaretçi profili, karar verici yoğunluğu, rakiplerin katılımı, ülke ve sektör dinamikleri, toplam katılım maliyeti ve fuardan beklenen ticari sonuç birlikte değerlendirilmelidir.',
      en: 'A fair being large or popular does not alone mean it is the right fair for your company. Target market, visitor profile, decision-maker density, competitor participation, country and sector dynamics, total participation cost and expected business outcome must be evaluated together.',
    },
    heroText: 'Fuara katılmak bir organizasyon kararı değil, yatırım kararıdır. Hangi fuara, hangi hedefle, ne büyüklükte standla ve hangi ekiple katılmanız gerektiğini birlikte planlıyor; bütçenizi ziyaretçi sayısından çok doğru müşteriye ulaşmaya odaklıyoruz.',
    processText: 'Sürece önce şirketinizi ve fuardan beklentinizi anlayarak başlıyoruz. Hedef ülke ve sektörleri, müşteri profilinizi, bütçenizi, satış hedeflerinizi ve geçmiş fuar performansınızı değerlendiriyoruz. Ardından alternatif fuarları karşılaştırıyor; stand alanından personel planına, konaklamadan ulaşım ve promosyonlara kadar toplam katılım bütçesini oluşturuyoruz. Amacımız "fuara katılmanızı sağlamak" değil; fuar sonunda hangi çıktıyı başarılı kabul edeceğinizi daha fuar başlamadan belirlemektir.',
    geoBlock: {
      question: 'Fuar danışmanlığı ne sağlar?',
      answer: 'Fuar danışmanlığı, bir şirketin hangi fuara neden katılması gerektiğini belirler ve katılım bütçesini stand, personel, seyahat, tanıtım ve satış hedefleriyle birlikte planlar. Böylece fuar katılımı bağımsız operasyonlardan oluşan bir gider olmaktan çıkarak ölçülebilir bir pazarlama ve iş geliştirme projesi hâline gelir.',
    },
    ctaText: 'Katılmayı düşündüğünüz fuarı birlikte değerlendirelim',
    icon: 'lightbulb',
    order: 1,
    subServices: [],
  },
  {
    id: 1,
    title: { tr: 'Stand Tasarımı & Kurulumu', en: 'Stand Design & Installation' },
    slug: 'stand-tasarimi',
    phase: 'fuar-oncesi',
    shortDescription: {
      tr: 'Modüler, orta seviye, premium ve dijital ekranlı stand çözümlerinin tedarik yönetimi.',
      en: 'Modular, medium, premium and digital display stand solutions procurement management.',
    },
    fullDescription: {
      tr: 'Stand tasarımı sadece estetik değil, ziyaretçi akışı, ürün sergileme ve görüşme kalitesi için de stratejik bir alandır. Marka kimliği, metrekare kullanımı, toplantı alanları, depolama, dijital ekranlar ve uygulama detayları birlikte ele alınır. Üretim, nakliye, kurulum ve söküm tarafı tek koordinasyon akışıyla yönetilir.',
      en: 'Stand design is not only aesthetic but also a strategic area for visitor flow, product display and meeting quality. Brand identity, square meter usage, meeting areas, storage, digital screens and application details are addressed together.',
    },
    heroText: 'Standınız yalnızca markanızın bulunduğu alan değil, ziyaretçinin markanızla karşılaştığı fiziksel deneyimdir. Marka kimliğinize, ürünlerinize, ziyaretçi akışına ve ticari hedeflerinize uygun fuar standlarını tasarlıyor, üretiyor ve sahada kuruyoruz.',
    processText: 'Öncelikle standın metrekaresine değil, standın ne yapması gerektiğine odaklanıyoruz. Ürün sergilenecek mi? Demo yapılacak mı? VIP müşteri görüşmeleri olacak mı? Depolama alanı gerekiyor mu? Kaç personel aynı anda çalışacak? Dijital ekran kullanılacak mı? Bu ihtiyaçlardan hareketle ziyaretçi akışını, karşılama noktasını, ürün alanlarını, oturma ve toplantı alanlarını, depoyu, grafik uygulamalarını ve teknik altyapıyı tasarlıyoruz. Onay sonrasında üretim, lojistik, kurulum ve fuar sonu söküm süreçlerini koordine ediyoruz.',
    geoBlock: {
      question: 'Fuar stand tasarımı nedir?',
      answer: 'Fuar stand tasarımı; marka kimliği, ziyaretçi akışı, ürün sergileme, toplantı ihtiyacı, teknik altyapı ve fuar kurallarının birlikte değerlendirilerek markaya özel fiziksel alan oluşturulması sürecidir. Hizmet; tasarım, görselleştirme, üretim, nakliye, kurulum ve sökümü kapsayabilir.',
    },
    ctaText: 'Stand alanınızı ve fuarınızı paylaşın, size uygun stand konseptini oluşturalım',
    icon: 'box',
    order: 2,
    subServices: [
      {
        name: { tr: 'Modüler Stand', en: 'Modular Stand' },
        description: { tr: 'Ekonomik ve pratik modüler stand çözümleri', en: 'Economic and practical modular stand solutions' },
      },
      {
        name: { tr: 'Orta Seviye Stand', en: 'Medium Level Stand' },
        description: { tr: 'Dengeli fiyat-performans sunan standlar', en: 'Stands offering balanced price-performance' },
      },
      {
        name: { tr: 'Premium Stand', en: 'Premium Stand' },
        description: { tr: 'Özel tasarım, yüksek kalite premium standlar', en: 'Custom design, high quality premium stands' },
      },
      {
        name: { tr: 'Dijital Ekranlı Stand', en: 'Digital Display Stand' },
        description: { tr: 'LED ekran ve dijital görsel entegrasyonlu standlar', en: 'Stands with LED screen and digital visual integration' },
      },
    ],
  },
  {
    id: 3,
    title: { tr: 'Otel & Konaklama', en: 'Hotel & Accommodation' },
    slug: 'otel-konaklama',
    phase: 'fuar-oncesi',
    shortDescription: {
      tr: 'Fuar alanına yakın 3–5 yıldız konaklama çözümleri ve grup rezervasyonu koordinasyonu.',
      en: 'Accommodation solutions close to the fair area and group reservation coordination.',
    },
    fullDescription: {
      tr: 'Fuar alanına yakınlık, ekip büyüklüğü, VIP ihtiyaçlar ve bütçe dengesi birlikte değerlendirilerek konaklama planı hazırlanır. Amaç yalnızca rezervasyon yapmak değil, fuar temposunu aksatmayacak konforlu ve kontrollü bir akış kurmaktır.',
      en: 'Accommodation plan is prepared by evaluating proximity to the fair area, team size, VIP needs and budget balance together.',
    },
    heroText: 'Fuar ekibinizin güne trafikte değil, müşteriye hazır başlamasını sağlayın. Fuar alanına erişim, bütçe, ekip büyüklüğü ve konfor beklentilerine göre 3, 4 ve 5 yıldızlı konaklama alternatifleri oluşturuyoruz.',
    processText: 'Fuar tarihini, ekip sayısını, stand ekibinin çalışma saatlerini ve ulaşım planını değerlendirerek alternatif oteller oluşturuyoruz. Sadece oda fiyatını değil; fuar alanına ulaşım süresini, kahvaltı saatlerini, ekip için ulaşım kolaylığını, toplantı imkânlarını ve toplam seyahat maliyetini birlikte değerlendiriyoruz. Grup rezervasyonlarında oda listelerinin takibi, giriş–çıkış koordinasyonu, değişikliklerin yönetimi ve gerektiğinde transferlerle konaklama programının entegrasyonunu sağlıyoruz.',
    geoBlock: {
      question: 'Fuar konaklama organizasyonu ne kapsar?',
      answer: 'Fuar konaklama organizasyonu, fuara katılan şirket ekipleri için otel seçimi, grup rezervasyonu, oda listelerinin yönetimi ve ulaşım planının koordinasyonunu kapsar. Otel seçiminde yalnızca gecelik fiyat değil, fuar alanına erişim ve ekibin günlük operasyonu da dikkate alınır.',
    },
    ctaText: 'Fuarınızı, tarihleri ve ekip sayınızı gönderin, konaklama seçeneklerini hazırlayalım',
    icon: 'hotel',
    order: 3,
    subServices: [
      {
        name: { tr: '5 Yıldız Otel', en: '5 Star Hotel' },
        description: { tr: 'Premium konfor ve VIP misafirler için', en: 'Premium comfort for VIP guests' },
      },
      {
        name: { tr: '4 Yıldız Otel', en: '4 Star Hotel' },
        description: { tr: 'Konfor ve uygun fiyat dengesi', en: 'Balance of comfort and affordable price' },
      },
      {
        name: { tr: '3 Yıldız / Ekonomik', en: '3 Star / Budget' },
        description: { tr: 'Bütçe odaklı ekip konaklaması', en: 'Budget-focused team accommodation' },
      },
    ],
  },
  {
    id: 6,
    title: { tr: 'Ulaşım & Shuttle', en: 'Transportation & Shuttle' },
    slug: 'ulasim-shuttle',
    phase: 'fuar-oncesi',
    shortDescription: {
      tr: 'Günlük shuttle, VIP araç ve havalimanı transfer hizmetleri.',
      en: 'Daily shuttle, VIP vehicle and airport transfer services.',
    },
    fullDescription: {
      tr: 'Havaalanı transferleri, otel-fuar alanı arası shuttle planı, VIP araç tahsisi ve günlük saha ulaşımı tek program üzerinden yönetilir. Böylece ekip ve misafir tarafında son dakika ulaşım stresi minimize edilir.',
      en: 'Airport transfers, hotel-fair area shuttle plan, VIP vehicle assignment and daily field transportation are managed on a single program.',
    },
    heroText: 'Havalimanından otele, otelden fuar alanına ve akşam programlarına kadar tüm ulaşım zincirini tek plan altında yönetiyoruz.',
    processText: 'Uçuş saatlerini, otel lokasyonunu, fuar giriş saatlerini, ekip büyüklüğünü ve varsa VIP misafir programlarını bir araya getirerek ulaşım çizelgesi oluşturuyoruz. Günlük shuttle, havalimanı transferi, şoförlü VIP araç ve grup taşımacılığı ihtiyaçlarını tek merkezden koordine ediyoruz. Operasyon öncesinde araç–sürücü–yolcu listelerini hazırlıyor, pickup noktalarını netleştiriyor ve saha ekibiyle değişiklikleri takip ediyoruz.',
    geoBlock: {
      question: 'Fuar shuttle hizmeti nedir?',
      answer: 'Fuar shuttle hizmeti, otel ile fuar merkezi arasında katılımcı ekibin belirlenen saatlerde toplu olarak taşınmasıdır. Daha kapsamlı fuar ulaşım hizmetlerinde havalimanı transferleri, VIP araçlar, grup taşımacılığı ve etkinlik sonrası ulaşım programı da aynı operasyon planına dahil edilebilir.',
    },
    ctaText: 'Ekip ve uçuş planınızı paylaşın, transfer programınızı oluşturalım',
    icon: 'car',
    order: 4,
    subServices: [
      {
        name: { tr: 'Havalimanı Transferi', en: 'Airport Transfer' },
        description: { tr: 'Varış ve dönüş transferleri', en: 'Arrival and return transfers' },
      },
      {
        name: { tr: 'Günlük Shuttle', en: 'Daily Shuttle' },
        description: { tr: 'Otel–fuar arası toplu ulaşım', en: 'Hotel-fair collective transportation' },
      },
      {
        name: { tr: 'VIP Araç', en: 'VIP Vehicle' },
        description: { tr: 'Şoförlü özel araç hizmeti', en: 'Chauffeured private vehicle service' },
      },
    ],
  },
  {
    id: 7,
    title: { tr: 'Kurumsal Hediye & Promosyon', en: 'Corporate Gifts & Promotion' },
    slug: 'kurumsal-hediye',
    phase: 'fuar-oncesi',
    shortDescription: {
      tr: 'Marka kimliğine uygun ziyaretçi promosyonları ve VIP kurumsal hediyeler.',
      en: 'Visitor promotions and VIP corporate gifts aligned with brand identity.',
    },
    fullDescription: {
      tr: 'Promosyon ürünleri yalnızca dağıtım için değil, marka hafızasını uzatmak için seçilir. Hedef kitleye, bütçeye ve marka algısına uygun klasik veya premium alternatifler hazırlanır. Gerekirse VIP özel set ve stand dağıtım planı da kurgulanır.',
      en: 'Promotional products are chosen not only for distribution but to extend brand memory. Classic or premium alternatives suitable for the target audience, budget and brand perception are prepared.',
    },
    heroText: 'Masada unutulan değil, kullanılmaya devam eden promosyonlar tasarlıyoruz. Stand ziyaretçileriniz, potansiyel müşterileriniz ve VIP iş ortaklarınız için marka kimliğinize uygun promosyon ve kurumsal hediye çözümleri oluşturuyoruz.',
    processText: 'Önce promosyonun kime verileceğini belirliyoruz. Genel ziyaretçiye dağıtılacak yüksek adetli ürünlerle, nitelikli potansiyel müşterilere veya VIP yöneticilere verilecek hediyeleri aynı kategoride değerlendirmiyoruz. Hedef kitleye göre ürün alternatifleri, marka uygulaması, ambalaj, adet ve teslim süresini planlıyor; ürünleri fuar standına veya belirlenen teslimat noktasına hazır hale getiriyoruz.',
    geoBlock: {
      question: 'Fuar promosyon ürünleri nasıl seçilir?',
      answer: 'Fuar promosyon ürünleri, markanın ziyaretçilerle fiziksel temasını fuar sonrasına taşıyan markalı ürünlerdir. En etkili seçim ürünün fiyatından çok hedef kitleye uygunluğu, kullanışlılığı, marka uyumu, dağıtılacak kişi sayısı ve lojistik gereksinimler dikkate alınarak yapılır.',
    },
    ctaText: 'Hedef kitlenizi ve bütçenizi paylaşın, ürün alternatiflerini hazırlayalım',
    icon: 'gift',
    order: 5,
    subServices: [
      {
        name: { tr: 'Ziyaretçi Promosyonları', en: 'Visitor Promotions' },
        description: { tr: 'Yüksek adetli, markalı genel dağıtım ürünleri', en: 'High quantity branded general distribution products' },
      },
      {
        name: { tr: 'Premium Müşteri Hediyeleri', en: 'Premium Customer Gifts' },
        description: { tr: 'Nitelikli potansiyel müşteriler için özel hediyeler', en: 'Special gifts for qualified potential customers' },
      },
      {
        name: { tr: 'VIP Kurumsal Hediyeler', en: 'VIP Corporate Gifts' },
        description: { tr: 'Üst düzey yöneticiler için premium hediye setleri', en: 'Premium gift sets for senior executives' },
      },
    ],
  },
  {
    id: 2,
    title: { tr: 'Hostes & Personel', en: 'Hostess & Staff' },
    slug: 'hostes-personel',
    phase: 'fuar-zamani',
    shortDescription: {
      tr: 'Karşılama, lead kayıt, yabancı dil desteği ve saha koordinasyonu için profesyonel ekip.',
      en: 'Professional team for reception, lead recording, foreign language support and field coordination.',
    },
    fullDescription: {
      tr: 'Stand üzerindeki ilk temas marka algısını doğrudan etkiler. Karşılama, yönlendirme, yabancı dil desteği, servis ve saha koordinasyonu için uygun ekip planlanır. Personel seçimi fuarın profiline ve markanın temsil seviyesine göre yapılır.',
      en: 'The first contact on the stand directly affects brand perception. An appropriate team is planned for reception, guidance, foreign language support, service and field coordination.',
    },
    heroText: 'İyi tasarlanmış bir stand, doğru ekip olmadan potansiyelini kullanamaz. Karşılama, ziyaretçi yönlendirme, lead toplama, servis ve yabancı dil ihtiyaçlarınıza uygun profesyonel fuar personeli sağlıyoruz.',
    processText: 'Görevlendirmeden önce standdaki rolü tanımlıyoruz: karşılama, kayıt, ürün yönlendirmesi, lead toplama, çeviri desteği, servis veya VIP misafir koordinasyonu. Personeli marka, ürün, stand planı, ziyaretçi profili ve iletişim dili konusunda brief ediyoruz. Gerektiğinde vardiya planı, dress code ve sorumlu saha koordinatörü oluşturuyoruz.',
    geoBlock: {
      question: 'Fuar stand personeli ne yapar?',
      answer: 'Fuar stand personeli; ziyaretçi karşılama, yönlendirme, lead kaydı, ürün veya hizmet hakkında temel bilgi aktarımı, yabancı dil desteği ve saha operasyonlarını yürütmek üzere görevlendirilen eğitimli ekipten oluşur. Personel seçimi fuarın ülkesi, ziyaretçi profili ve standdaki görevlere göre yapılmalıdır.',
    },
    ctaText: 'Fuar, dil ve görev ihtiyacınızı belirtin, uygun ekip planını oluşturalım',
    icon: 'users',
    order: 6,
    subServices: [
      {
        name: { tr: 'Karşılama & Yönlendirme', en: 'Reception & Guidance' },
        description: { tr: 'Ziyaretçi karşılama ve stand içi yönlendirme', en: 'Visitor reception and in-stand guidance' },
      },
      {
        name: { tr: 'Lead Kayıt Personeli', en: 'Lead Recording Staff' },
        description: { tr: 'Ziyaretçi bilgisi toplama ve kayıt', en: 'Visitor information collection and recording' },
      },
      {
        name: { tr: 'Yabancı Dil Desteği', en: 'Foreign Language Support' },
        description: { tr: 'İngilizce ve diğer dillerde iletişim', en: 'Communication in English and other languages' },
      },
      {
        name: { tr: 'VIP Misafir Koordinasyonu', en: 'VIP Guest Coordination' },
        description: { tr: 'Üst düzey misafirler için özel karşılama', en: 'Special reception for senior guests' },
      },
    ],
  },
  {
    id: 4,
    title: { tr: 'Stand İkramları', en: 'Stand Catering' },
    slug: 'stand-ikramlari',
    phase: 'fuar-zamani',
    shortDescription: {
      tr: 'Çay, kahve ve premium ikram organizasyonu ile ziyaretçi deneyimini güçlendirin.',
      en: 'Strengthen the visitor experience with tea, coffee and premium catering organization.',
    },
    fullDescription: {
      tr: 'İkram hizmeti ziyaretçinin stantta kalış süresini ve deneyimini destekler. Çay, kahve, su, atıştırmalık ve premium servis seçenekleri marka konumuna uygun şekilde planlanır. Amaç gereksiz kalabalık değil, kaliteli görüşme ortamı oluşturmaktır.',
      en: 'Catering service supports the visitor\'s duration and experience at the stand. Tea, coffee, water, snacks and premium service options are planned according to brand position.',
    },
    heroText: 'Bir fincan kahveden VIP müşteri ağırlamasına kadar standınızdaki ikram deneyimini markanıza ve ziyaretçi profilinize göre planlıyoruz.',
    processText: 'Stand büyüklüğü, günlük ziyaretçi tahmini, VIP toplantı sayısı ve fuar saatlerine göre ikram planı çıkarıyoruz. Standart çay/kahve servisinden premium kahve çözümlerine, soğuk içeceklerden finger food ve müşteri toplantısı ikramlarına kadar alternatifleri bütçeye göre oluşturuyoruz. Servis ekipmanı, sarf malzemeleri, günlük yenileme, personel ve gerekiyorsa fuar alanının catering kuralları operasyon planına dahil ediliyor.',
    geoBlock: {
      question: 'Fuar stand catering hizmeti nedir?',
      answer: 'Fuar stand catering hizmeti, ziyaretçilere ve müşterilere stand alanında yiyecek–içecek sunulmasının planlanması ve yönetilmesidir. İkram türü stand büyüklüğü, ziyaretçi sayısı, toplantı yoğunluğu, fuar kuralları ve marka pozisyonuna göre belirlenebilir.',
    },
    ctaText: 'Stand büyüklüğü ve ziyaretçi hedefinizi gönderin, günlük ikram planınızı hazırlayalım',
    icon: 'coffee',
    order: 7,
    subServices: [
      {
        name: { tr: 'Çay & Kahve Servisi', en: 'Tea & Coffee Service' },
        description: { tr: 'Günlük standart ikram servisi', en: 'Daily standard catering service' },
      },
      {
        name: { tr: 'Premium Kahve Çözümleri', en: 'Premium Coffee Solutions' },
        description: { tr: 'Barista kalitesinde kahve hizmeti', en: 'Barista quality coffee service' },
      },
      {
        name: { tr: 'VIP Toplantı İkramları', en: 'VIP Meeting Catering' },
        description: { tr: 'Özel müşteri görüşmeleri için premium servis', en: 'Premium service for special client meetings' },
      },
    ],
  },
  {
    id: 5,
    title: { tr: 'Fotoğraf & Video', en: 'Photography & Video' },
    slug: 'fotograf-video',
    phase: 'fuar-zamani',
    shortDescription: {
      tr: 'Stand, ürün, röportaj ve drone çekimleri ile fuar yatırımınızı içerik bankasına dönüştürün.',
      en: 'Turn your fair investment into a content bank with stand, product, interview and drone shootings.',
    },
    fullDescription: {
      tr: 'Fuar yatırımı yalnızca etkinlik günüyle sınırlı kalmamalı, sonrasında da pazarlama ve iletişim içeriğine dönüşmelidir. Stand çekimleri, ürün detayları, röportajlar, sosyal medya videoları ve ihtiyaç halinde profesyonel kurgu çıktıları planlanır.',
      en: 'Fair investment should not be limited to the day of the event but should turn into marketing and communication content afterwards.',
    },
    heroText: 'Bir fuarın etkisi fuar kapıları kapandığında bitmek zorunda değil. Standınızı, ürünlerinizi, müşteri etkileşimlerini ve röportajları fotoğraf ve video içeriklerine dönüştürüyoruz.',
    processText: 'Çekim planını "fuarda bol bol görüntü alalım" şeklinde değil, içerik hedeflerine göre hazırlıyoruz. Stand genel görüntüleri, ürün detayları, ziyaretçi etkileşimleri, yönetici röportajları, müşteri görüşleri, kısa dikey videolar ve gerektiğinde drone görüntülerini önceden shot listine bağlıyoruz. Böylece fuar sonunda yalnızca bir arşiv değil; LinkedIn paylaşımları, web sitesi referansları, reels/shorts, basın içerikleri ve sonraki fuar kampanyalarında kullanılabilecek bir içerik bankası oluşuyor.',
    geoBlock: {
      question: 'Fuar fotoğraf ve video çekimi nedir?',
      answer: 'Fuar fotoğraf ve video çekimi; standın, ürünlerin, ekibin, ziyaretçi etkileşimlerinin ve röportajların profesyonel olarak kaydedilmesidir. İçerikler fuar sonrası sosyal medya, kurumsal web sitesi, satış sunumları, PR ve sonraki fuar kampanyalarında tekrar kullanılabilir.',
    },
    ctaText: 'Fuar programınızı paylaşın, size özel çekim planını oluşturalım',
    icon: 'camera',
    order: 8,
    subServices: [
      {
        name: { tr: 'Stand & Atmosfer Çekimi', en: 'Stand & Atmosphere Shooting' },
        description: { tr: 'Genel stand ve fuar alanı görüntüleri', en: 'General stand and fair area visuals' },
      },
      {
        name: { tr: 'Ürün & Demo Çekimi', en: 'Product & Demo Shooting' },
        description: { tr: 'Ürün detay ve demo görüntüleri', en: 'Product detail and demo visuals' },
      },
      {
        name: { tr: 'Röportaj & Yönetici Çekimi', en: 'Interview & Executive Shooting' },
        description: { tr: 'Yönetici ve müşteri röportajları', en: 'Executive and customer interviews' },
      },
      {
        name: { tr: 'Drone Çekimi', en: 'Drone Shooting' },
        description: { tr: 'Kuş bakışı fuar ve stand görüntüleri', en: 'Bird\'s eye fair and stand visuals' },
      },
    ],
  },
  {
    id: 8,
    title: { tr: 'Akşam Yemeği & Gala', en: 'Dinner & Gala' },
    slug: 'aksam-yemegi-gala',
    phase: 'fuar-zamani',
    shortDescription: {
      tr: 'Müşteri yemeği, bayi buluşması ve VIP networking organizasyonları.',
      en: 'Customer dinner, dealer meeting and VIP networking organizations.',
    },
    fullDescription: {
      tr: 'Fuar sonrası akşam programları, ilişkileri güçlendiren önemli temas alanlarıdır. Müşteri yemeği, bayi buluşması, VIP masa planı ve networking odaklı akşam organizasyonları profesyonel şekilde kurgulanır.',
      en: 'Post-fair evening programs are important contact areas that strengthen relationships.',
    },
    heroText: 'En değerli görüşmelerin bazıları fuar salonunun dışında gerçekleşir. Müşterileriniz, distribütörleriniz, yönetim ekibiniz ve VIP misafirleriniz için kurumsal akşam yemeği, cocktail ve gala organizasyonları planlıyoruz.',
    processText: 'Öncelikle gecenin amacını belirliyoruz: müşteri ağırlama, distribütör ilişkileri, ekip motivasyonu, yeni potansiyel müşterilerle networking veya VIP yönetici buluşması. Misafir profiline ve bütçeye göre restoran veya venue seçimi, menü, transfer, karşılama, masa planı, branding, teknik ekipman ve gerektiğinde eğlence programını koordine ediyoruz.',
    geoBlock: {
      question: 'Fuar gala organizasyonu nedir?',
      answer: 'Fuar gala ve kurumsal akşam yemeği organizasyonu, fuar kapsamında müşteriler, iş ortakları, distribütörler veya şirket ekipleri için düzenlenen özel networking etkinliğidir. Mekân, ulaşım, menü, masa planı, teknik ihtiyaçlar ve misafir yönetimi tek bir operasyon altında koordine edilebilir.',
    },
    ctaText: 'Misafir sayınızı ve organizasyon hedefinizi paylaşın, gece programını birlikte kurgulayalım',
    icon: 'utensils',
    order: 9,
    subServices: [
      {
        name: { tr: 'Müşteri Akşam Yemeği', en: 'Customer Dinner' },
        description: { tr: 'Özel restoranlar ve private dining organizasyonu', en: 'Special restaurants and private dining organization' },
      },
      {
        name: { tr: 'Cocktail & Networking', en: 'Cocktail & Networking' },
        description: { tr: 'Ayaküstü networking etkinlikleri', en: 'Standing networking events' },
      },
      {
        name: { tr: 'VIP Gala', en: 'VIP Gala' },
        description: { tr: 'Büyük grup ve kurumsal gala organizasyonları', en: 'Large group and corporate gala organizations' },
      },
    ],
  },
  {
    id: 11,
    title: { tr: 'Raporlama & Analiz', en: 'Reporting & Analysis' },
    slug: 'raporlama-analiz',
    phase: 'fuar-sonrasi',
    shortDescription: {
      tr: 'Fuar performansını lead, toplantı, bütçe ve iyileştirme önerileriyle raporluyoruz.',
      en: 'We report fair performance with lead, meeting, budget and improvement recommendations.',
    },
    fullDescription: {
      tr: 'Fuar bittikten sonra yalnızca kartvizit değil, anlamlı içgörü çıkmalıdır. Yapılan görüşmeler, öne çıkan talepler, ziyaretçi profili, ekip geri bildirimleri ve geliştirme alanları bir hizmet raporuna dönüştürülür. Böylece sonraki fuarlar veriyle planlanır.',
      en: 'After the fair ends, not just business cards but meaningful insights should emerge.',
    },
    heroText: 'Fuarda kaç kartvizit topladığınız değil, hangi ticari sonuçlara yaklaştığınız önemlidir. Fuar operasyonunu, ziyaretçi verilerini, lead kalitesini ve ekip geri bildirimlerini tek raporda değerlendiriyoruz.',
    processText: 'Fuar sonunda operasyon ekibinden, satış ekibinden ve mevcutsa dijital lead sistemlerinden verileri topluyoruz. Ziyaretçi sayısı, nitelikli lead sayısı, toplantı sayısı, talep edilen ürünler, hedef pazar dağılımı, teklif potansiyeli, saha sorunları ve iyileştirme alanlarını raporluyoruz. Böylece sonraki fuar için "daha büyük stand yapalım" gibi sezgisel kararlar yerine, hangi uygulamanın işe yaradığını gösteren verilerle hareket edebilirsiniz.',
    geoBlock: {
      question: 'Fuar performans raporu nedir?',
      answer: 'Fuar performans raporu; katılımın ziyaretçi, lead, toplantı, satış fırsatı, operasyon ve bütçe sonuçlarını değerlendiren çalışmadır. Amaç yalnızca geçmiş fuarı raporlamak değil, sonraki fuarın bütçe ve stratejisini veriye dayalı olarak iyileştirmektir.',
    },
    ctaText: 'Fuar yatırımınızın sonucunu görün, fuar performans raporu talep edin',
    icon: 'file-text',
    order: 10,
    subServices: [
      {
        name: { tr: 'Lead & Ziyaretçi Analizi', en: 'Lead & Visitor Analysis' },
        description: { tr: 'Nitelikli lead ve ziyaretçi profili değerlendirmesi', en: 'Qualified lead and visitor profile assessment' },
      },
      {
        name: { tr: 'Bütçe Gerçekleşme Raporu', en: 'Budget Realization Report' },
        description: { tr: 'Planlanan vs. gerçekleşen bütçe analizi', en: 'Planned vs. realized budget analysis' },
      },
      {
        name: { tr: 'İyileştirme Önerileri', en: 'Improvement Recommendations' },
        description: { tr: 'Sonraki fuar için aksiyon planı', en: 'Action plan for the next fair' },
      },
    ],
  },
  {
    id: 12,
    title: { tr: 'Hızlı Takip Planı', en: 'Fast Follow-up Plan' },
    slug: 'hizli-takip',
    phase: 'fuar-sonrasi',
    shortDescription: {
      tr: 'Fuar sonrası 48 saat içinde lead önceliklendirme ve temas planı.',
      en: 'Lead prioritization and contact plan within 48 hours after the fair.',
    },
    fullDescription: {
      tr: 'Fuar sonrası ilk 48 saat sıcak temasların korunması için kritik kabul edilir. Lead listesinin önceliklendirilmesi, teşekkür e-postaları, tekliflenecek kontakların ayrıştırılması, toplantı planları ve gerekiyorsa CRM aktarımı bu süreçte ele alınır.',
      en: 'The first 48 hours after the fair are considered critical for maintaining warm contacts.',
    },
    heroText: 'Fuar bittikten sonraki ilk iş günü, satış sürecinin başladığı gündür. Toplanan leadleri sınıflandırıyor, sorumlulara dağıtıyor ve ilk temasların hızla yapılabilmesi için 48 saatlik takip planı oluşturuyoruz.',
    processText: 'Fuar sırasında toplanan kişileri yalnızca Excel listesinde birleştirmek yerine satın alma ihtiyacı, ilgi alanı, görüşmenin niteliği ve sonraki aksiyona göre sınıflandırıyoruz. Öncelikli fırsatlar satış ekibine aktarılır; ürün bilgisi isteyenlere ilgili materyaller hazırlanır; daha uzun vadeli potansiyeller nurture grubuna alınır. Gerektiğinde follow-up e-posta şablonları, görüşme notları ve görev listesi oluşturulur.',
    geoBlock: {
      question: 'Fuar sonrası lead takibi nasıl yapılır?',
      answer: 'Fuar sonrası lead takibi, fuarda edinilen potansiyel müşterilerin öncelik ve ilgi düzeyine göre sınıflandırılması, satış ekibine atanması ve uygun iletişimle takip edilmesi sürecidir. Etkili takip için ziyaretçi bilgileriyle birlikte görüşme notlarının ve sonraki aksiyonun da kaydedilmesi gerekir.',
    },
    ctaText: 'Topladığınız leadleri bekletmeyin, 48 saatlik takip planınızı oluşturalım',
    icon: 'phone',
    order: 11,
    subServices: [
      {
        name: { tr: 'Lead Sınıflandırma', en: 'Lead Classification' },
        description: { tr: 'Öncelik ve ilgi düzeyine göre segmentasyon', en: 'Segmentation by priority and interest level' },
      },
      {
        name: { tr: 'Follow-up Planı', en: 'Follow-up Plan' },
        description: { tr: 'İlk temas şablonları ve görev listesi', en: 'First contact templates and task list' },
      },
      {
        name: { tr: 'CRM Entegrasyonu', en: 'CRM Integration' },
        description: { tr: 'Lead verilerinin CRM\'e aktarımı', en: 'Lead data transfer to CRM' },
      },
    ],
  },
  {
    id: 10,
    title: { tr: 'Devlet Desteği Danışmanlığı', en: 'Government Support Consulting' },
    slug: 'devlet-destegi-danismanligi',
    phase: 'fuar-sonrasi',
    shortDescription: {
      tr: 'KOSGEB ve Ticaret Bakanlığı fuar destekleri için uygunluk kontrolü ve başvuru takibi.',
      en: 'Eligibility check and application tracking for KOSGEB and Ministry of Trade fair supports.',
    },
    fullDescription: {
      tr: 'Fuar desteklerinde en sık yapılan hata, fuar bittikten sonra "bu gider destekleniyor mu?" diye araştırmaya başlamaktır. Oysa fuarın destek kapsamı, şirket uygunluğu, harcamanın türü, faturalandırma şekli ve başvuru belgeleri sürecin başında değerlendirilmelidir.',
      en: 'The most common mistake in fair supports is starting to research "is this expense supported?" after the fair ends.',
    },
    heroText: 'Fuar katılımınız destek kapsamındaysa, süreci en başından doğru planlayın. İlgili fuarın ve şirketinizin uygunluğunu kontrol ediyor; destek kapsamındaki giderleri, gerekli belgeleri ve başvuru sürecini takip ediyoruz.',
    processText: 'Öncelikle katılacağınız fuarın güncel destek listelerindeki durumunu kontrol ediyoruz. Ardından şirket ve katılım modeli açısından uygunluk değerlendirmesi yapıyor; hangi giderlerin hangi program kapsamında değerlendirilmesi gerektiğini belirliyoruz. Fatura, ödeme, katılım ve başvuru belgelerinin hazırlanmasını takip ediyor; şirketiniz ile ilgili kurum veya birlik arasındaki süreci koordine ediyoruz. Nihai destek kararı ilgili kamu kurumu tarafından verilir.',
    geoBlock: {
      question: 'Fuar devlet desteği danışmanlığı nedir?',
      answer: 'Fuar devlet desteği danışmanlığı, şirketin ve katılacağı fuarın mevcut destek programlarına uygunluğunun kontrol edilmesi, destek kapsamındaki giderlerin belirlenmesi ve başvuru belgelerinin hazırlanmasının takip edilmesidir. Destek oranı, üst limit ve şartlar programa ve başvuru dönemine göre değişebilir.',
    },
    ctaText: 'Katılacağınız fuarı bize gönderin, destek kapsamını kontrol edelim',
    icon: 'award',
    order: 12,
    subServices: [
      {
        name: { tr: 'KOSGEB Fuar Desteği', en: 'KOSGEB Fair Support' },
        description: { tr: 'KOSGEB yurt içi fuar desteği uygunluk ve başvuru takibi', en: 'KOSGEB domestic fair support eligibility and application tracking' },
      },
      {
        name: { tr: 'Ticaret Bakanlığı Destekleri', en: 'Ministry of Trade Supports' },
        description: { tr: 'Yurt dışı fuar katılım desteği süreci', en: 'International fair participation support process' },
      },
      {
        name: { tr: 'Belge & Başvuru Takibi', en: 'Document & Application Tracking' },
        description: { tr: 'Gerekli belgelerin toplanması ve başvuru koordinasyonu', en: 'Collection of required documents and application coordination' },
      },
    ],
  },
];
