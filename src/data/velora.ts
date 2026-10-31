// Velora yarışma sayfasının tek veri kaynağı. Kaynak: VELORA_Yarisma_ve_VSCode_Brifi.md (sürüm 0.2).
// Briefte "henüz belirlenmedi" olan konular burada kesin bilgiye çevrilmemeli; karar verildikçe güncellenmeli.

export const velora = {
  url: "https://leyonex.com/velora",
  updatedAt: "31 Ekim 2026",
  email: "info@leyonex.com",
  questionLimit: 2,
  title: "Geleceğin fuar standını tasarla",
  subject: "Hayali Velora parfüm markası için fuar standı tasarımı",
  organizer: "LEYONEX",
  audience: "Gazi Üniversitesi Mimarlık ve Endüstriyel Tasarım öğrencileri",
  participation: "Bireysel veya en fazla 2 kişilik ekip",
  software: "3ds Max veya SketchUp",
  deadline: "14 Aralık 2026",
  firstPrize: "15.000 TL",
  secondPrize: "5.000 TL",
  renderCount: 5,
  textLimit: { characters: "2.500", words: 400 },
  fictionNote: "Velora, bu proje yarışması için oluşturulmuş hayali bir parfüm markasıdır.",
  nextRound:
    "1. yarışmada tasarımı beğenilen ilk 5 katılımcı/ekip, gerçek firmalar ile düzenlenecek yarışmalara katılmaya hak kazanacaktır.",

  files: {
    video: "/velora/velora-tanitim.mp4",
    videoPoster: "/velora/velora-video-kapak.webp",
    logo: "/velora/velora-logo.png",
    icon: "/velora/velora-ikon.png",
  },

  brand: [
    { label: "Marka durumu", value: "Proje yarışması için oluşturulmuş hayali marka" },
    { label: "Sektör", value: "Parfüm" },
    { label: "Hedef tüketici", value: "Ürün gruplarına göre değişen, genç ve orta yaş grubundaki kadınlar" },
    { label: "Fiyat seviyesi", value: "Orta bant" },
    { label: "Öne çıkan özellikler", value: "Kalıcılık ve hoş kokular" },
    { label: "Fuar senaryosu", value: "BEAUTYISTANBUL / Beauty Istanbul katılımı" },
  ],

  goals: [
    "Yurt dışından, özellikle Batı Avrupa’dan distribütör bulmak.",
    "Pazarda marka farkındalığını prestijli bir biçimde artırmak.",
    "Zincir mağazalarla görüşmek ve ürünlerin bu satış noktalarında yer almasını sağlamak.",
  ],

  stand: [
    { label: "Alan tipi", value: "Yarım ada stant" },
    { label: "Ölçüler", value: "8 m × 10 m" },
    { label: "Toplam alan", value: "80 m²" },
    { label: "Açık cephe", value: "3" },
    { label: "Azami yükseklik", value: "4 m" },
    { label: "Stant içi kolon", value: "Yok" },
  ],

  needs: [
    { label: "Kapalı toplantı odası", value: "Mevcut müşterilerle görüşmek için 1 oda; 1 masa, 4 sandalye ve 1 adet 55 inç TV" },
    { label: "Açık VIP görüşme alanı", value: "Açık alanın kenarında, çok özel olmayan görüşmeler için 1 koltuk takımı ve 1 sehpa" },
    { label: "Genel görüşme masaları", value: "Kalan alana işlevsel biçimde yerleşebilecek sayıda masa; her masada 4 sandalye" },
    { label: "Depo / ikram hazırlık alanı", value: "Yaklaşık 4 m²" },
    { label: "Ürün rafları", value: "Parfümleri şık ve dikkat çekici biçimde sergileyen raflar" },
    { label: "Lightbox alanları", value: "Konum, miktar ve biçim bakımından tasarımcı serbest" },
    { label: "İlave ekranlar", value: "Kapalı odadaki TV dışında konum ve kullanım yaklaşımı tasarımcıya bırakılmıştır" },
    { label: "İlgi / deneyim alanı", value: "Banko, ürün denemesi, ikram veya farklı bir amaç odaklı öneri geliştirilebilir" },
  ],

  freedom: [
    "Stant içinde ikram sunulan bir banko, dış cepheye yönelen ürün deneme alanı veya farklı bir yaklaşım seçilebilir. Bu örnekler aynı anda yapılması gereken zorunlu elemanlar değildir.",
    "Genel görüşme masalarında önceden belirlenmiş bir adet yoktur. Kullanılabilirliği ve dolaşımı koruyarak kapasite oluşturulması beklenir.",
    "Toplantı, ürün inceleme, deneme ve servis işlevleri birbirini gereksiz yere aksatmamalıdır.",
    "Raf, ekran ve ışıklı görsel alanlarında gösterilecek ürün ve marka içerikleri mevcut kaynaklardan türetilmelidir.",
  ],

  cost: [
    "Oval veya eğrisel uygulamalar, özel üretim ve işçilik ihtiyacını artırabilir. Görsel katkısı güçlü, maliyet etkisi ölçülü bir odak noktası olarak kullanılabilir.",
    "Aynı değerlendirme logolar, ekranlar, lightboxlar, duvar biçimleri, kaplamalar ve aydınlatma için de geçerlidir.",
    "Tekrar eden ve üretimi kolay parçalar ile özel tasarım detayları dengelenebilir.",
    "En fazla ekran, en fazla eğri yüzey veya en fazla özel üretim kullanımı başlı başına bir başarı ölçütü değildir.",
    "İlk teslimde maliyet hesabı veya tedarikçi teklifi istenmemektedir. Maliyete duyarlı düşünme ve çözümlerin üretim mantığı değerlendirmede dikkate alınacaktır.",
  ],

  rules: [
    "Stant elemanları, tabela, aydınlatma, ürün rafları ve mobilyalar tanımlanan alan sınırları içinde kalmalıdır.",
    "Toplam yükseklik, en yüksek tabela ve dekoratif eleman dâhil 4 m’yi aşmamalıdır.",
    "Ziyaretçi girişleri, koridor bağlantıları ve acil kaçışa hizmet eden alanlar engellenmemelidir.",
    "Ekran, raf ve üst yapı gibi elemanların taşınması gerçekçi bir konstrüksiyon mantığıyla düşünülmelidir.",
    "Yapı elemanlarının fuar salonu zeminine veya duvarlarına zarar veren bağlantılara ihtiyaç duymaması gözetilmelidir.",
    "Elektrik ve ekran kabloları ziyaretçi dolaşımında takılma riski yaratmayacak şekilde çözümlenmelidir.",
    "İkram alanı, depo kullanımı ve servis erişimi tasarımda birlikte ele alınmalıdır.",
    "Komşuya veya koridora bakan görünen arka yüzler tasarımın bitmiş yüzeyi olarak düşünülmelidir.",
  ],

  explanationTopics: [
    "Ana tasarım fikri ve marka ile ilişkisi.",
    "Yerleşim, ziyaretçi akışı ve görüşme alanları için alınan kararlar.",
    "Ürün sergileme, deneme, dikkat çekme ve marka anlatımı yaklaşımı.",
    "Malzeme, aydınlatma ve özel detaylarda estetik–maliyet dengesinin nasıl gözetildiği.",
    "Araştırmadan edinilen ve tasarıma aktarılan önemli bir çıkarım.",
  ],

  criteria: [
    "Araştırma yapabilme ve yararlı çıkarımlar geliştirme.",
    "Öğrenmeye açıklık ve yeni bilgiyi tasarımda kullanabilme.",
    "Briefi anlama ve ihtiyaçları karşılayan bir düzen kurabilme.",
    "Fuar amaçları ile tasarım kararları arasında ilişki kurma.",
    "Estetik katkı ile üretim ve maliyet yükünü dengeleme.",
    "Kaynak materyali kullanabilme ve sonraki üretim çalışmasına elverişli bir model kurma.",
  ],

  // Karar verilince buradan çıkarılıp ilgili alana taşınmalı.
  pending: [
    "Son teslim saati",
    "Sonuç açıklama tarihi",
    "Jüri ve değerlendirme yöntemi",
    "Dosya türü, çözünürlük, dosya boyutu ve adlandırma",
    "Proje teslim kanalı",
    "Kapalı cephenin yönü, hol ve koridor planı",
    "Ortak teknik senaryonun son hâli",
  ],
};
