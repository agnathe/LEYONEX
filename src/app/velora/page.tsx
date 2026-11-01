import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { velora } from "@/data/velora";

// Yarışma sayfasına yalnızca afiş ve QR ile gelinir: site içinden link verilmez, site haritasına
// eklenmez ve arama sonuçlarında görünmez.
export const metadata: Metadata = {
  title: "Velora Stant Tasarım Yarışması",
  description: `${velora.audience} için LEYONEX stant tasarım yarışması. Son başvuru ve proje teslimi: ${velora.deadline}.`,
  alternates: { canonical: velora.url },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Velora Stant Tasarım Yarışması | LEYONEX",
    description: `${velora.title}. Birincilik ${velora.firstPrize}, ikincilik ${velora.secondPrize}. Son teslim: ${velora.deadline}.`,
    url: velora.url,
  },
};

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[#d9d6cc] py-10 md:py-14">
      <div className="grid gap-5 md:grid-cols-[220px_1fr] md:gap-10">
        <h2 className="font-display text-2xl font-semibold leading-tight text-[#2d2d2d]">{title}</h2>
        <div className="min-w-0 space-y-5 leading-relaxed text-[#444444]">{children}</div>
      </div>
    </section>
  );
}

function Facts({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="divide-y divide-[#e2dfd6] border-y border-[#e2dfd6]">
      {rows.map((row) => (
        <div key={row.label} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
          <dt className="text-sm font-semibold text-[#2d2d2d]">{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-primary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function Numbered({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-primary">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

const textLink = "font-semibold text-primary underline underline-offset-2";

export default function VeloraPage() {
  const { characterLimit, renderCount, submissionFormat } = velora;

  return (
    <div className="min-h-screen bg-[#F1F0EA]">
      <header className="border-b border-[#d9d6cc]">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Image src="/brand/leyonex-logo.png" alt="LEYONEX" width={960} height={140} className="h-5 w-auto" priority />
          <span className="text-right text-xs text-[#555555]">Yarışmayı düzenleyen</span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="py-10 md:py-16">
          <p className="text-sm font-semibold text-primary">Velora Stant Tasarım Yarışması</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[#2d2d2d] md:text-6xl">
            {velora.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#444444]">{velora.audience} için.</p>

          <div className="mt-8 border-l-4 border-primary bg-white p-5 leading-relaxed text-[#444444] md:p-7">
            <h2 className="font-display text-xl font-semibold text-[#2d2d2d]">Başlamadan önce</h2>
            <div className="mt-3 space-y-3">
              <p>
                Bu yarışma, öğrencilerin daha önce profesyonel bir fuar standı tasarlamamış olabileceği dikkate alınarak
                hazırlanmıştır. Tasarım programını kullanabilmeniz önemlidir; bu becerinin deneyimle gelişeceğinin
                farkındayız. Önceliğimiz araştırma kabiliyetiniz, öğrenmeye açıklığınız ve verilen briefi anlayarak
                ihtiyaçlara uygun çözümler geliştirebilmenizdir. Çalışmanızı bu yaklaşım doğrultusunda hazırlamanızı
                bekliyoruz.
              </p>
              <p>
                Fikir geliştirmek ve farklı çözümleri incelemek için{" "}
                <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className={textLink}>
                  Behance
                </a>{" "}
                gibi platformlarda benzer sektörlerden fuar stantlarını araştırabilirsiniz. Örneklerdeki yerleşim,
                sergileme, ziyaretçi deneyimi ve marka anlatımı kararlarını inceleyerek Velora’nın ihtiyaçlarına uygun
                özgün bir yaklaşım geliştirin.
              </p>
              <p>
                Yarışma hakkında merak ettiğiniz konuları veya önceden paylaşarak görüş almak istediğiniz düşüncelerinizi{" "}
                <a href={`mailto:${velora.email}`} className={textLink}>
                  {velora.email}
                </a>{" "}
                adresine gönderebilirsiniz. Her katılımcının en fazla {velora.questionLimit} soru hakkı bulunmaktadır.
              </p>
            </div>
          </div>
        </div>

        <Section title="Yarışma özeti">
          <div className="grid gap-px overflow-hidden border border-[#d9d6cc] bg-[#d9d6cc] sm:grid-cols-3">
            <div className="bg-white p-5">
              <p className="text-sm text-[#555555]">Birincilik</p>
              <p className="mt-1 font-display text-3xl font-bold text-primary">{velora.firstPrize}</p>
            </div>
            <div className="bg-white p-5">
              <p className="text-sm text-[#555555]">İkincilik</p>
              <p className="mt-1 font-display text-3xl font-bold text-primary">{velora.secondPrize}</p>
            </div>
            <div className="bg-white p-5">
              <p className="text-sm text-[#555555]">Son başvuru ve proje teslimi</p>
              <p className="mt-1 font-display text-3xl font-bold text-[#2d2d2d]">{velora.deadline}</p>
            </div>
          </div>
          <Facts
            rows={[
              { label: "Konu", value: velora.subject },
              { label: "Düzenleyen", value: velora.organizer },
              { label: "Katılımcılar", value: velora.audience },
              { label: "Katılım biçimi", value: velora.participation },
              { label: "Programlar", value: velora.software },
              {
                label: "Teslim",
                value: `${submissionFormat}: ${renderCount} farklı açıdan render + en fazla ${characterLimit} karakter açıklama`,
              },
              { label: "Teslim adresi", value: velora.email },
              { label: "Sonuç açıklama tarihi", value: velora.resultsDate },
            ]}
          />
          <p>Ödüller ekip başınadır; ekip üyesi başına ayrı ödül olarak sunulmaz.</p>
          <p>
            <strong className="text-[#2d2d2d]">{velora.nextRound}</strong> İki kişilik bir ekip, seçildiğinde bir
            katılımcı/ekip kontenjanı olarak değerlendirilir.
          </p>
        </Section>

        <Section title="Velora tanıtım videosu">
          <video
            controls
            playsInline
            preload="metadata"
            poster={velora.files.videoPoster}
            className="aspect-[71/40] w-full bg-black"
          >
            <source src={velora.files.video} type="video/mp4" />
            Tarayıcınız videoyu oynatamıyor.
          </video>
          <p className="text-sm text-[#555555]">
            Video sessizdir. Ürün görsellerini incelemek için duraklatabilir, ileri ve geri sarabilir, tam ekran
            izleyebilirsiniz. Video markanın genel ürün gamını gösterir; standda hangi ürünlere ne kadar yer verileceği
            aşağıda açıklanmıştır.
          </p>
          <p className="font-semibold text-[#2d2d2d]">{velora.fictionNote}</p>
        </Section>

        <Section title="Marka ve fuar hedefleri">
          <div className="flex items-center justify-center bg-[#f5efe6] px-6 py-8">
            <Image src={velora.files.logo} alt="Velora logosu" width={960} height={265} className="h-auto w-full max-w-sm" />
          </div>
          <Facts rows={velora.brand} />
          <h3 className="font-semibold text-[#2d2d2d]">Bu fuarda hangi ürünler öne çıkacak?</h3>
          <p>
            Velora genel bir kozmetik markasıdır, ancak bu fuarda ağırlığı parfüm ürünlerine vermek istemektedir.
            Kozmetik sektöründe parfüm ile cilt bakım ürünleri birbirinden çok farklı alanlardır.
          </p>
          <Bullets items={velora.productFocus} />
          <h3 className="font-semibold text-[#2d2d2d]">Velora’nın fuara katılmak için 3 ana nedeni</h3>
          <Numbered items={velora.goals} />
          <p>
            Mevcut müşterilerle görüşme ihtiyacı, kapalı toplantı odasının gerekçesidir. Tasarımın genel yaklaşımı; bu
            ticari hedefleri, ürünle etkileşimi ve markanın orta bant fiyat seviyesine rağmen prestijli görünme amacını
            birlikte desteklemelidir.
          </p>
          <p className="text-sm text-[#555555]">
            Bu senaryo, Velora’nın gerçek bir fuar katılımcısı veya BEAUTYISTANBUL’un yarışmanın ortağı olduğu anlamına
            gelmez.
          </p>
        </Section>

        <Section title="Stant briefi">
          <p>Bütün katılımcılar aynı alan ve aynı koşullar üzerinden çalışacaktır.</p>
          <Facts rows={velora.stand} />
          <h3 className="font-semibold text-[#2d2d2d]">Hol planı</h3>
          <Image
            src={velora.files.plan}
            alt="Salon 3 planı: Velora standı 312A, 120 metrekare; üst kenarı ve iki yanı koridora açık, alt kenarı komşu standa bitişik"
            width={1740}
            height={1056}
            className="h-auto w-full border border-[#d9d6cc]"
          />
          <div className="border-l-4 border-primary bg-white p-5">
            <p className="font-semibold text-[#2d2d2d]">Not</p>
            <p className="mt-2">{velora.technicalNote}</p>
          </div>
          <h3 className="font-semibold text-[#2d2d2d]">Mekânsal ve işlevsel ihtiyaçlar</h3>
          <Facts rows={velora.needs} />
          <h3 className="font-semibold text-[#2d2d2d]">Tasarımcıya tanınan özgürlük</h3>
          <p>Amaç; tasarım kararlarının fuar hedeflerine hizmet etmesidir.</p>
          <Bullets items={velora.freedom} />
          <h3 className="font-semibold text-[#2d2d2d]">Maliyet ve tasarım yaklaşımı</h3>
          <p>
            Sayısal bütçe açıklanmamıştır. Beklenti, maliyetine göre güçlü bir estetik sonuç elde etmektir.
          </p>
          <Bullets items={velora.cost} />
          <h3 className="font-semibold text-[#2d2d2d]">Teknik çerçeve</h3>
          <p>
            Bu kurallar yarışmaya özel, gerçek fuar kurallarından esinlenen bir çerçevedir; BEAUTYISTANBUL’un resmî
            teknik şartnamesi değildir.
          </p>
          <Numbered items={velora.rules} />
        </Section>

        <Section title="Kaynak dosyalar">
          <div className="grid gap-px border border-[#d9d6cc] bg-[#d9d6cc] md:grid-cols-3">
            <a href={velora.files.logo} download className="group flex items-center gap-4 bg-white p-4">
              <Image src={velora.files.logo} alt="" width={960} height={265} className="h-10 w-24 object-contain" />
              <span className="font-semibold text-[#2d2d2d] group-hover:text-primary">Logoyu indir (PNG)</span>
            </a>
            <a href={velora.files.icon} download className="group flex items-center gap-4 bg-white p-4">
              <Image src={velora.files.icon} alt="" width={400} height={385} className="h-10 w-24 object-contain" />
              <span className="font-semibold text-[#2d2d2d] group-hover:text-primary">İkonu indir (PNG)</span>
            </a>
            <a href={velora.files.plan} download className="group flex items-center gap-4 bg-white p-4">
              <Image src={velora.files.plan} alt="" width={1740} height={1056} className="h-10 w-24 object-contain" />
              <span className="font-semibold text-[#2d2d2d] group-hover:text-primary">Hol planını indir (PNG)</span>
            </a>
          </div>
          <Bullets
            items={[
              "Logo ve ikon raster görsel olarak sunulur; hazır vektörel logo dosyası verilmez.",
              "Şişe görsellerini tanıtım videosundan çıkarmanız beklenir. Hazır vektörel şişe çizimi, teknik ürün çizimi veya 3B şişe modeli sağlanmaz.",
              "Bu tercih bilinçlidir: gerçek müşterilerden gelen görsel kaynaklar her zaman kullanıma hazır olmayabilir. Mevcut materyali inceleme, uygun görseli elde etme ve tasarıma uyarlama kabiliyeti de gözlemlenecektir.",
            ]}
          />
        </Section>

        <Section title="Teslim ve değerlendirme">
          <p>
            Projenizi tek bir {submissionFormat} dosyası olarak{" "}
            <a href={`mailto:${velora.email}`} className={textLink}>
              {velora.email}
            </a>{" "}
            adresine göndermenizi bekliyoruz. Sunumda {renderCount} farklı açıdan hazırlanmış render ve stant tasarımınızın
            arkasındaki düşünceleri anlatan, boşluklar dâhil en fazla {characterLimit} karakterlik bir yazı bulunmalıdır.
            Bu sınır slayt başına değil, tüm sunumdaki yazıların toplamı içindir.
          </p>
          <p>
            Alt karakter sınırı yoktur; daha kısa ve yeterli açıklamalar kabul edilir. Tam üretim dosyası, ilave teknik
            plan veya kesit, ayrı araştırma raporu ya da maliyet tablosu istenmez. Beş açı için zorunlu bir kamera listesi
            yoktur; açı seçimleri tasarımı ve gerekli alanları anlaşılır göstermelidir.
          </p>
          <h3 className="font-semibold text-[#2d2d2d]">Açıklamada ele alabileceğiniz konular</h3>
          <Bullets items={velora.explanationTopics} />
          <p>
            Bu maddeler ayrı ayrı doldurulması gereken zorunlu alt başlıklar değildir; metin sınırı içinde kendi
            çözümünüzün en önemli kararlarını seçerek anlatabilirsiniz.
          </p>
          <h3 className="font-semibold text-[#2d2d2d]">Değerlendirmede önem verdiklerimiz</h3>
          <Numbered items={velora.criteria} />
          <p>
            İleri seviye yazılım hâkimiyeti veya gösterişli render tek başına belirleyici değildir. Beş render ve kısa
            tasarım açıklaması birlikte değerlendirilir.
          </p>
          <p>
            <strong className="text-[#2d2d2d]">{velora.jury}</strong> Sonuçlar {velora.resultsDate} tarihinde
            açıklanacaktır.
          </p>
          <h3 className="font-semibold text-[#2d2d2d]">Kazananın üretim hazırlığı çalışması</h3>
          <p>
            Kazanandan, tüm standın eksiksiz uygulama projesi değil, LEYONEX’in belirleyeceği sınırlı alanlar veya
            elemanlar için ölçülendirme ve üretim anlatımı istenecektir. Öngörümüz, muhtemelen yüz yüze bir görüşmede
            yaklaşık 30 dakikada hazırlanabilecek kapsamda bir çalışmadır; kesin yöntem, süre ve seçilecek elemanlar
            daha sonra duyurulacaktır. Bu nedenle modelinizde ayrı parçalar ve elemanlar üzerinde çalışabilmeniz ve
            bunları ölçülendirebilmeniz önemlidir.
          </p>
        </Section>

        <Section title="Başvuru ve proje teslimi">
          <div className="bg-white p-5">
            <Numbered
              items={[
                `Projenizi ${submissionFormat} dosyası olarak hazırlayın: ${renderCount} farklı açıdan render ve en fazla ${characterLimit} karakter yazı.`,
                `Dosyanızı ${velora.deadline} tarihine kadar ${velora.email} adresine gönderin.`,
                `Sonuçlar ${velora.resultsDate} tarihinde açıklanacaktır.`,
              ]}
            />
          </div>
          <p>
            Katılmayı düşünüyorsanız{" "}
            <a href={`mailto:${velora.email}`} className={textLink}>
              {velora.email}
            </a>{" "}
            adresine yazabilirsiniz. Ön kayıt katılım şartı değildir ve bu e-posta soru hakkınızdan sayılmaz.
          </p>
        </Section>

        <Section title="Soru ve iletişim">
          <p>
            Sorularınızı{" "}
            <a href={`mailto:${velora.email}`} className={textLink}>
              {velora.email}
            </a>{" "}
            adresine gönderebilirsiniz. Her katılımcının en fazla {velora.questionLimit} soru hakkı bulunmaktadır.
          </p>
        </Section>
      </main>

      <footer className="border-t border-[#d9d6cc]">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-[#555555] md:px-6">
          Düzenleyen: {velora.organizer} · Son güncelleme: {velora.updatedAt}
        </div>
      </footer>
    </div>
  );
}
