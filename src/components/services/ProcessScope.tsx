import Link from "next/link";

// "Operasyon, fuar sürecinin yalnızca bir parçası": fuar operasyonunu tüm sürecin içinde gösterir.
const segments: {
  title: string;
  text: string;
  href: string;
  operation?: boolean;
}[] = [
  {
    title: "Hedef ve strateji",
    text: "Amaçlar, öncelikler, mesaj",
    href: "/hizmetler/fuar-strateji-kurumsal-hazirlik",
  },
  {
    title: "Fuar ve bütçe",
    text: "Doğru fuar, katılım modeli",
    href: "/hizmetler/fuar-danismanligi",
  },
  {
    title: "Tasarım ve tedarik",
    text: "Alternatifler, tedarikçi seçimi",
    href: "/hizmetler/stand-tasarimi",
  },
  {
    title: "Davet",
    text: "Hedef pazarda doğru muhataplar",
    href: "/hizmetler/fuar-davet-yonetimi",
  },
  {
    title: "Saha operasyonu",
    text: "Kurulum, konaklama, transfer, personel, ikram",
    href: "/hizmetler/otel-konaklama",
    operation: true,
  },
  {
    title: "Ziyaretçi kaydı",
    text: "Dijital kayıt, hazır liste",
    href: "/hizmetler/fuar-ziyaretci-kayit-sistemi",
  },
  {
    title: "Gelişim raporu",
    text: "Gözlemler, sonraki fuar",
    href: "/hizmetler/raporlama-analiz",
  },
];

export default function ProcessScope({ headingId }: { headingId: string }) {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-lx-grey1">
            A’dan Z’ye
          </p>
          <span
            aria-hidden="true"
            className="mt-4 block h-[3px] w-10 bg-lx-red"
          />
          <h2
            id={headingId}
            className="mt-6 text-balance font-display text-[clamp(28px,3vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-lx-ink"
          >
            Operasyon, fuar sürecinin yalnızca bir parçası.
          </h2>
        </div>
        <p className="text-pretty text-[17px] leading-relaxed text-lx-grey1 lg:col-span-5">
          Çoğu firma fuarı stant, otel, transfer ve ikramdan oluşan bir
          operasyon olarak yönetir. Oysa fuarın sonucu, operasyon başlamadan
          verilen kararlarla ve fuardan sonra çıkarılan derslerle belirlenir.
          LEYONEX fuar sürecinin tamamını yönetir; ister tek bir hizmet alın,
          ister süreci A’dan Z’ye bize bırakın.
        </p>
      </div>

      <div className="mt-12">
        {/* Masaüstü: operasyonun sürecin içindeki yeri */}
        <div aria-hidden="true" className="hidden grid-cols-7 gap-2 lg:grid">
          {segments.map((s) => (
            <div key={s.title} className="flex justify-center">
              {s.operation && (
                <span className="border border-dashed border-lx-grey2 px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1">
                  Fuar operasyonu
                </span>
              )}
            </div>
          ))}
        </div>
        <ol
          className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-7"
          aria-label="Fuar süreç yönetiminin adımları"
        >
          {segments.map((s, i) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className={`group flex h-full flex-col border p-4 transition-colors duration-150 ease-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red ${
                  s.operation
                    ? "border-dashed border-lx-grey2 bg-lx-paper2 hover:border-lx-ink"
                    : "border-lx-line bg-white hover:border-lx-ink"
                }`}
              >
                <span className="text-[12px] font-semibold tabular-nums text-lx-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 font-display text-[16px] font-bold leading-snug text-lx-ink group-hover:text-lx-red">
                  {s.title}
                </span>
                <span className="mt-1.5 text-[13px] leading-snug text-lx-grey1">
                  {s.text}
                </span>
                {s.operation && (
                  <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-lx-grey2 lg:hidden">
                    Fuar operasyonu
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ol>
        <div className="mt-3 flex items-center gap-4">
          <span aria-hidden="true" className="h-[3px] flex-1 bg-lx-red" />
          <span className="shrink-0 text-[13px] font-semibold uppercase tracking-[0.14em] text-lx-ink">
            LEYONEX: A’dan Z’ye fuar süreç yönetimi
          </span>
          <span
            aria-hidden="true"
            className="hidden h-[3px] w-16 bg-lx-red sm:block"
          />
        </div>
      </div>
    </div>
  );
}
