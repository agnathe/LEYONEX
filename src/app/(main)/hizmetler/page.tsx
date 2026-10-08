import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BenefitsBand from "@/components/services/BenefitsBand";
import ProcessScope from "@/components/services/ProcessScope";
import {
  Kicker,
  Lead,
  SectionTitle,
  buttonClass,
} from "@/components/home/SectionHeading";
import { method } from "@/components/home/content";
import { getAllServices } from "@/lib/data";
import { serviceGroups, servicesFaq } from "@/data/services";

const BASE = "https://leyonex.com";

const definition =
  "LEYONEX, firmaların fuar katılım sürecini stratejiden saha yönetimine ve fuar sonrası değerlendirmeye kadar tek merkezden planlayan ve koordine eden bir fuar süreç yönetimi firmasıdır.";

export const metadata: Metadata = {
  title: "Fuar Hizmetleri: A’dan Z’ye Fuar Süreç Yönetimi",
  description:
    "Strateji, stant tasarımı, davet, saha hizmetleri, ziyaretçi kaydı ve değerlendirme: fuar sürecinizi benzer bütçe ve daha az iş yüküyle yönetin.",
  alternates: { canonical: `${BASE}/hizmetler` },
  openGraph: {
    title: "Fuar Hizmetleri: A’dan Z’ye Fuar Süreç Yönetimi | LEYONEX",
    description:
      "Operasyon, fuar sürecinin yalnızca bir parçası. LEYONEX fuar katılımınızı stratejiden fuar sonrası değerlendirmeye kadar tek merkezden yönetir.",
    url: `${BASE}/hizmetler`,
  },
};

export default function HizmetlerPage() {
  const services = getAllServices();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hizmetler",
          item: `${BASE}/hizmetler`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "LEYONEX fuar hizmetleri",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE}/hizmetler/${s.slug}`,
        name: s.title.tr,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: servicesFaq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Açılış: tanım paragrafı (doğrudan cevap) */}
        <section
          aria-labelledby="hizmetler-sayfa-baslik"
          className="relative overflow-hidden bg-lx-ink py-20 text-white lg:py-28"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
          >
            X
          </span>
          <div className="container relative mx-auto px-4 md:px-6">
            <nav
              aria-label="Sayfa konumu"
              className="text-[13px] text-lx-muted-dark"
            >
              <Link href="/" className="hover:text-white">
                Ana Sayfa
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-[#F2F2F2]">Hizmetler</span>
            </nav>
            <div className="mt-8">
              <Kicker dark>Fuar hizmetleri</Kicker>
            </div>
            <h1
              id="hizmetler-sayfa-baslik"
              className="mt-6 max-w-[48rem] text-balance font-display text-[clamp(34px,4.2vw,58px)] font-bold leading-[1.06] tracking-[-0.02em] text-[#F2F2F2]"
            >
              Fuar hizmetleri: A’dan Z’ye{" "}
              <span className="text-lx-red">fuar süreç yönetimi.</span>
            </h1>
            <p className="mt-7 max-w-[44rem] text-pretty text-[18px] leading-[1.65] text-lx-muted-dark">
              {definition}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/teklif-al" className={buttonClass.primary}>
                Fuarınızı birlikte planlayalım
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href="#hizmet-listesi" className={buttonClass.outlineLight}>
                Tüm hizmetler
              </a>
            </div>
          </div>
        </section>

        {/* Üç fayda ve partner yaklaşımı */}
        <section
          aria-labelledby="fayda-baslik"
          className="bg-lx-paper py-20 lg:py-24"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-[46rem]">
              <Kicker>Size faydası</Kicker>
              <SectionTitle id="fayda-baslik">
                Siz süreci yönetin, işi biz üstlenelim.
              </SectionTitle>
              <Lead>
                Firmanızla partner olarak çalışıyor, süreçteki ihtiyaçlarınıza
                birlikte çözüm üretiyoruz.
              </Lead>
            </div>
            <div className="mt-12">
              <BenefitsBand />
            </div>
          </div>
        </section>

        {/* Operasyon sürecin bir parçası */}
        <section
          aria-labelledby="kapsam-baslik"
          className="border-t border-lx-line bg-white py-20 lg:py-28"
        >
          <div className="container mx-auto px-4 md:px-6">
            <ProcessScope headingId="kapsam-baslik" />
          </div>
        </section>

        {/* Hizmetler: dört ana başlık */}
        <section
          id="hizmet-listesi"
          aria-labelledby="liste-baslik"
          className="scroll-mt-24 border-t border-lx-line bg-lx-paper py-20 lg:py-28"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-[46rem]">
              <Kicker>Hizmetler</Kicker>
              <SectionTitle id="liste-baslik">
                Dört başlıkta fuar hizmetleri.
              </SectionTitle>
            </div>
            <div className="mt-14 space-y-14">
              {serviceGroups.map((group, gi) => {
                const items = services.filter((s) => s.group === group.id);
                return (
                  <div
                    key={group.id}
                    className="grid gap-8 border-t border-lx-line pt-10 lg:grid-cols-12 lg:gap-10"
                  >
                    <div className="lg:col-span-3">
                      <span className="text-[13px] font-semibold tabular-nums text-lx-red">
                        {String(gi + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-display text-[22px] font-bold leading-snug text-lx-ink">
                        {group.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-lx-grey1">
                        {group.summary}
                      </p>
                    </div>
                    <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
                      {items.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/hizmetler/${s.slug}`}
                            className="group flex h-full flex-col border border-lx-line bg-white p-6 transition-[border-color,transform] ease-brand [transition-duration:250ms] hover:-translate-y-0.5 hover:border-lx-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
                          >
                            <span className="flex items-start justify-between gap-3">
                              <span className="font-display text-[18px] font-bold leading-snug text-lx-ink group-hover:text-lx-red">
                                {s.title.tr}
                              </span>
                              <ArrowUpRight
                                size={18}
                                strokeWidth={1.75}
                                className="mt-1 shrink-0 text-lx-grey3 transition-colors group-hover:text-lx-red"
                                aria-hidden="true"
                              />
                            </span>
                            <span className="mt-3 flex-1 text-[15px] leading-relaxed text-lx-grey1">
                              {s.shortDescription.tr}
                            </span>
                            {s.free && (
                              <span className="mt-5 self-start border border-lx-red px-2.5 py-1 text-[12px] font-semibold text-lx-red">
                                Birlikte çalıştığımız firmalara ücretsiz
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Çalışma modelleri */}
            <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
              <div className="lg:col-span-4">
                <h3 className="font-display text-[22px] font-bold text-lx-ink">
                  İhtiyacınıza göre hizmet
                </h3>
                <p className="mt-2 text-[15px] text-lx-grey1">
                  {method.modelsNote}
                </p>
              </div>
              <ul className="grid gap-px border border-lx-line bg-lx-line sm:grid-cols-3 lg:col-span-8">
                {method.models.map((model, i) => {
                  const last = i === method.models.length - 1;
                  return (
                    <li
                      key={model.title}
                      className={`p-6 ${last ? "bg-lx-ink" : "bg-white"}`}
                    >
                      <span
                        className={`block font-display text-[18px] font-bold ${last ? "text-[#F2F2F2]" : "text-lx-ink"}`}
                      >
                        {model.title}
                      </span>
                      <span
                        className={`mt-1.5 block text-[14px] ${last ? "text-lx-muted-dark" : "text-lx-grey1"}`}
                      >
                        {model.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section
          aria-labelledby="sss-baslik"
          className="border-t border-lx-line bg-white py-20 lg:py-28"
        >
          <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <Kicker>Sıkça sorulanlar</Kicker>
              <SectionTitle id="sss-baslik">
                Fuar süreç yönetimi hakkında.
              </SectionTitle>
            </div>
            <dl className="border-t border-lx-line lg:col-span-8">
              {servicesFaq.map((f) => (
                <div key={f.question} className="border-b border-lx-line py-6">
                  <dt className="font-display text-[18px] font-bold leading-snug text-lx-ink">
                    {f.question}
                  </dt>
                  <dd className="mt-3 text-[16px] leading-relaxed text-lx-grey1">
                    {f.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Kapanış */}
        <section className="border-t border-lx-line bg-lx-paper py-16">
          <div className="container mx-auto flex flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between md:px-6">
            <p className="max-w-[40rem] font-display text-[22px] font-bold leading-snug text-lx-ink">
              Benzer bütçeyle, daha az iş yüküyle ve daha profesyonel bir fuar
              katılımı için ilk adımı birlikte atalım.
            </p>
            <Link
              href="/teklif-al"
              className={`${buttonClass.primary} self-start sm:self-auto`}
            >
              Fuarınızı birlikte planlayalım
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
