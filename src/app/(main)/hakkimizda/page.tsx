import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutVideo from "@/components/sections/AboutVideo";
import { Target, TrendingUp, Shield, Users, Heart, Lightbulb, CheckCircle2, XCircle } from "lucide-react";

export const metadata = {
  title: "Hakkımızda - Leyonex",
  description: "Fuar süreçlerini stratejik bir büyüme ve markalaşma yatırımı olarak ele alıyoruz.",
};

// Ortak stil sabitleri
const sectionLight = "py-16 md:py-20 bg-[#F8F8F6]";
const sectionWhite = "py-16 md:py-20 bg-white";
const heading2 = "text-3xl md:text-4xl font-black text-[#1a1a1a] mb-6";
const body = "text-[#555] text-base leading-relaxed";

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-white border-b border-[#E5E5E3]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Hakkımızda
                </span>
                <div className="w-8 h-px bg-[#CB3234]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a] leading-tight mb-4">
                Fuarları stratejik yatırım<br />olarak ele alıyoruz
              </h1>
              <p className={`${body} max-w-xl mx-auto`}>
                Fuar süreçlerini yalnızca operasyonel bir hizmet alanı değil, firmalar için
                stratejik bir büyüme ve markalaşma yatırımı olarak kurguladık.
              </p>
            </div>

            {/* Video — dil algılayan client component */}
            <AboutVideo />
          </div>
        </section>

        {/* ── Ana Giriş ────────────────────────────────────────────────── */}
        <section className={sectionLight}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-5">
              <p className={body}>
                Leyonex, fuar süreçlerini yalnızca operasyonel bir hizmet alanı olarak değil,
                <strong className="text-[#1a1a1a] font-semibold"> firmalar için stratejik bir büyüme ve markalaşma yatırımı</strong> olarak
                ele almak amacıyla kurulmuştur.
              </p>
              <p className={body}>
                <strong className="text-[#1a1a1a] font-semibold">15+ yıllık pazarlama ve marka yönetimi tecrübemiz</strong>;
                %50 Avrupa ortaklı bir yapıda, beş farklı markanın yönetildiği kurumsal bir organizasyonda
                edinilmiş, sahada test edilmiş ve sonuç üretmiş bir birikime dayanmaktadır. Bunun yanında
                <strong className="text-[#1a1a1a] font-semibold"> 10+ yılı aşkın süredir</strong>, yurt içi ve yurt dışı fuar
                süreçlerini A&apos;dan Z&apos;ye; planlama, kurulum, operasyon, yönetim ve analiz aşamalarıyla
                birebir deneyimleme fırsatı bulduk.
              </p>
            </div>
          </div>
        </section>

        {/* ── Sorun Tespiti ────────────────────────────────────────────── */}
        <section className={sectionWhite}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Gördüğümüz Problem
                </span>
              </div>
              <h2 className={heading2}>Bu süreçlerde şunu net şekilde gördük</h2>
              <div className="border-l-2 border-[#CB3234] pl-6 space-y-4">
                <p className={body}>
                  Firmalar, fuar öncesi ve sırasında operasyonel yükün ağırlığı nedeniyle asıl odaklanmaları
                  gereken konuya —<strong className="text-[#1a1a1a] font-semibold"> fuarın verimliliğine ve stratejik katkısına</strong>— yeterince
                  zaman ve enerji ayıramıyor.
                </p>
                <p className={body}>
                  Daha da önemlisi, <em>&quot;Bu fuardan daha fazla nasıl kazanım elde edebiliriz?&quot;</em> sorusu
                  çoğu zaman sistematik bir yaklaşımla ele alınmıyor.
                </p>
              </div>
              <div className="mt-8 py-5 border-t border-[#E5E5E3]">
                <p className="text-xl font-black text-[#CB3234]">
                  Leyonex tam olarak bu noktada devreye giriyor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stratejik Fuar Yönetimi ──────────────────────────────────── */}
        <section className={sectionLight}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Target size={22} className="text-[#CB3234]" strokeWidth={1.8} />
                </div>
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Yaklaşımımız
                </span>
              </div>
              <h2 className={heading2}>Operasyondan öte: Stratejik fuar yönetimi</h2>
              <div className="space-y-4">
                <p className={body}>
                  Bizim için fuar; <strong className="text-[#1a1a1a] font-semibold">yeni pazar bulma, mevcut pazarda tutunma ve
                  marka algısını güçlendirme</strong> sürecinin önemli bir parçasıdır.
                </p>
                <p className={body}>
                  Doğru fuarı seçmek, doğru hedefle katılmak ve süreci doğru planlamak; hem toplam maliyeti
                  düşüren hem de fuar verimliliğini ciddi şekilde artıran bir yaklaşımdır.
                </p>
                <p className={body}>
                  Farklı sektörlerde ve farklı firmalarda edindiğimiz deneyimleri, çapraz bir bakış açısıyla
                  müşterilerimize aktarıyor; her firmanın kendi iç dinamiklerine uygun, gerçekçi ve ölçülebilir
                  fuar stratejileri oluşturuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Optimum Denge ────────────────────────────────────────────── */}
        <section className={sectionWhite}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <TrendingUp size={22} className="text-[#CB3234]" strokeWidth={1.8} />
                </div>
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Karar Alma Yaklaşımımız
                </span>
              </div>
              <h2 className={heading2}>Optimum denge</h2>
              <p className={`${body} mb-6`}>
                Mühendislik, Pazarlama ve Marka yönetim tecrübesine sahip ekiplerimizin bileşimi, karar
                alma sürecimizin mantığını oluşturur. Bizim için kritik kavram{" "}
                <strong className="text-[#CB3234] font-black text-lg">&quot;optimum&quot;</strong>dur.
                Çünkü birlikte çalıştığımızda her şeyi dengeli ve optimum seviyede ilerletmeye
                çalıştığımızı göreceksiniz.
              </p>
              <div className="bg-[#F8F8F6] border border-[#E5E5E3] rounded-lg p-6 space-y-3">
                <p className={body}>
                  Sadece en düşük maliyet ya da sadece en iyi iş anlayışı, doğru sonucu garanti etmez.
                  Önemli olan; <strong className="text-[#1a1a1a] font-semibold">olabilecek en iyi işi, en doğru maliyetle
                  hayata geçirebilmektir.</strong>
                </p>
                <p className={body}>
                  Mühendislik bakış açısı bu dengeyi kurmamızı sağlarken, pazarlama perspektifi ise ortaya
                  çıkan işin markaya en doğru şekilde yansıtılmasını mümkün kılar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Şeffaflık ve Kontrol ─────────────────────────────────────── */}
        <section className={sectionLight}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Shield size={22} className="text-[#CB3234]" strokeWidth={1.8} />
                </div>
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Prensibimiz
                </span>
              </div>
              <h2 className={heading2}>Şeffaflık ve kontrol</h2>
              <p className={`${body} mb-8`}>
                Leyonex&apos;te maliyetler kalem kalem ele alınır. Finansal riskler gizli maliyet olarak eklenmez,
                operasyonel belirsizlikler &quot;koruma payı&quot; adı altında fiyatlara yansıtılmaz.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E3] mb-8">
                {[
                  "Doğru tedarikçi",
                  "Gerçek piyasa fiyatı",
                  "Makul ve sürdürülebilir kârlılık",
                ].map((item) => (
                  <div key={item} className="bg-white p-6 flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#CB3234] flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-sm font-semibold text-[#1a1a1a]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="border border-[#CB3234]/20 bg-white rounded-lg px-8 py-5 text-center">
                <p className="text-[#1a1a1a] font-semibold text-base">
                  &quot;Leyonex bu fiyatı verdiyse, bu işin ederi budur.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Uzun Vadeli İş Ortaklığı ─────────────────────────────────── */}
        <section className={sectionWhite}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Lightbulb size={22} className="text-[#CB3234]" strokeWidth={1.8} />
                </div>
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Ortaklık Anlayışımız
                </span>
              </div>
              <h2 className={heading2}>Uzun vadeli iş ortaklığı</h2>
              <p className={`${body} mb-6`}>
                Amacımız, firmaların fuar süreçlerine tek seferlik değil, <strong className="text-[#1a1a1a] font-semibold">bütüncül
                ve uzun vadeli bir bakışla</strong> dahil olmaktır.
              </p>
              <p className={`${body} mb-4`}>&quot;Bu yıl hangi fuara katılalım?&quot; sorusundan başlayarak:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E5E5E3]">
                {[
                  "Genel fuar stratejisinin oluşturulması",
                  "Marka ile uyumlu ana tasarım dilinin belirlenmesi",
                  "Farklı metrekarelerde stand tasarımı revizyonları",
                  "Erken planlama ile otel ve uçuş optimizasyonları",
                  "Hostes, ikram, lojistik standartlaştırılması",
                  "Devlet teşviklerinin değerlendirilmesi",
                ].map((item) => (
                  <div key={item} className="bg-white p-5 flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CB3234] flex-shrink-0 mt-2" />
                    <span className={`${body} text-sm`}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Kiminle Çalışıyoruz ──────────────────────────────────────── */}
        <section className={sectionLight}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Users size={22} className="text-[#CB3234]" strokeWidth={1.8} />
                </div>
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Hedef Kitlemiz
                </span>
              </div>
              <h2 className={heading2}>Her firma için doğru partner olmayabiliriz</h2>

              <div className="space-y-4 mb-8">
                <p className={body}>
                  LEYONEX olarak fuar süreçlerine yalnızca operasyonel bir iş olarak bakmıyoruz.
                </p>
                <p className={body}>
                  Bizim için fuar; markanın pazardaki duruşunu güçlendirdiği, yeni iş fırsatları oluşturduğu,
                  mevcut ilişkilerini geliştirdiği ve doğru yönetildiğinde ciddi geri dönüş sağlayabilen{" "}
                  <strong className="text-[#1a1a1a] font-semibold">stratejik bir pazarlama yatırımıdır.</strong>
                </p>
                <p className={body}>
                  Bu nedenle her firma ile çalışmayı değil, aynı bakış açısını paylaşabildiğimiz firmalarla
                  uzun vadeli, güvene dayalı ve verimli iş birlikleri kurmayı önemsiyoruz.
                </p>
              </div>

              {/* İki sütun: kimlerle çalışıyoruz / çalışmıyoruz */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

                {/* Uyumlu olduğumuz profil */}
                <div className="bg-white border border-[#E5E5E3] rounded-lg p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-[#1a1a1a] mb-5">
                    Kimlerle daha verimli çalışıyoruz?
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "Fuar katılımını yalnızca \"stant kurmak\" değil, marka ve iş geliştirme sürecinin önemli bir parçası olarak gören",
                      "Planlama, strateji, bütçe yönetimi, ziyaretçi deneyimi ve fuar sonrası değerlendirme gibi başlıkların sürece değer kattığını bilen",
                      "Dışarıdan gelen tecrübenin kendi ekibine yük değil, destek sağlayacağını anlayan",
                      "Karşılıklı güven, açık iletişim ve uzun vadeli iş birliğine önem veren",
                      "Fuar sürecinin hem verimli hem de profesyonel bir şekilde yönetilmesini isteyen",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={15} className="text-[#CB3234] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-sm text-[#555] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Uyumsuz profil */}
                <div className="bg-white border border-[#E5E5E3] rounded-lg p-6">
                  <p className="text-xs font-bold tracking-wider uppercase text-[#999] mb-5">
                    Hangi yaklaşımlarla uyumlu çalışmıyoruz?
                  </p>
                  <ul className="space-y-3.5">
                    {[
                      "Sadece \"en ucuz olsun\" ya da analiz yapmadan \"en iyisi olsun\" yaklaşımıyla karar verilen süreçler",
                      "Hedef, ziyaretçi planı, bütçe dengesi netleşmeden yalnızca \"bu yıl da katılalım\" anlayışıyla ilerlenen projeler",
                      "Sürece katkı sağlayabilecek önerileri dinlemeye kapalı, \"biz zaten yıllardır böyle yapıyoruz\" duruşunun değişmeyeceği durumlar",
                      "Kararların stratejik ihtiyaçlardan çok anlık yönlendirmelerle veya plansız şekilde değiştiği süreçler",
                      "Ekibimize, tedarikçilerimize veya iş ortaklarımıza karşı saygılı iletişim zemininin korunmadığı projeler",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <XCircle size={15} className="text-[#C0C0BE] flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                        <span className="text-sm text-[#888] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Kapanış */}
              <div className="border-l-2 border-[#CB3234] pl-6 space-y-3">
                <p className={body}>
                  Çünkü biz yaptığımız işi severek yapıyoruz.
                </p>
                <p className={body}>
                  Doğru planlandığında fuarların sadece yorucu bir operasyon değil; markalar için
                  ölçülebilir, geliştirilebilir ve{" "}
                  <strong className="text-[#1a1a1a] font-semibold">keyifli bir büyüme alanı</strong> olduğuna inanıyoruz.
                  Bu bakış açısını paylaşan firmalarla aynı masada olmaktan mutluluk duyarız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── İnsan Odaklı Yaklaşım ────────────────────────────────────── */}
        <section className={sectionWhite}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Heart size={22} className="text-[#CB3234]" strokeWidth={1.8} />
                </div>
                <div className="w-6 h-px bg-[#CB3234]" />
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                  Değerlerimiz
                </span>
              </div>
              <h2 className={heading2}>İnsan odaklı yaklaşım</h2>
              <div className="space-y-4 mb-6">
                <p className={body}>
                  Bizim için <strong className="text-[#1a1a1a] font-semibold">ticaret, kişi kazanımının önüne geçmez.</strong>
                </p>
                <p className={body}>
                  15 yıllık kurumsal üst düzey yöneticilik kariyerini geride bırakıp bu yapıyı kurmamızın
                  temel sebebi; yaptığımız işi yalnızca ticari bir faaliyet değil, keyif aldığımız ve değer
                  ürettiğimiz bir iş modeli olarak sürdürme isteğidir.
                </p>
              </div>
              <div className="bg-[#F8F8F6] border border-[#E5E5E3] rounded-lg p-6">
                <p className="text-xs font-bold tracking-wider uppercase text-[#999] mb-4">Amacımız</p>
                <ul className="space-y-3">
                  {[
                    "Çalıştığımız firmaların üzerindeki stres ve iş yükünü azaltmak",
                    "Süreci şeffaf ve kontrollü şekilde yönetmek",
                    "Her yıl bir öncekinden daha iyi fuar deneyimleri üretmek",
                    "Tüm bu süreci, mevcut bütçenize benzer bir bütçe ile yönetmek",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#CB3234] flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className={`${body} text-sm`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Kapanış ──────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#111111]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-white text-xl md:text-2xl leading-relaxed font-medium">
                Leyonex ile bir kez çalıştığınızda,{" "}
                <strong className="text-[#CB3234]">başka bir firma ile görüşmek bile istemeyeceğinize</strong>{" "}
                eminiz.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
