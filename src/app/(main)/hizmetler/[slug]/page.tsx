import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BenefitsBand from "@/components/services/BenefitsBand";
import { Kicker, buttonClass } from "@/components/home/SectionHeading";
import { contact } from "@/components/home/content";
import { getAllServices, getServiceBySlug } from "@/lib/data";
import {
  groupTitle,
  legacyServiceSlugs,
  phaseInfo,
  type ServicePhase,
} from "@/data/services";

const BASE = "https://leyonex.com";
const phases: ServicePhase[] = ["fuar-oncesi", "fuar-zamani", "fuar-sonrasi"];

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const url = `${BASE}/hizmetler/${slug}`;
  return {
    title: service.seoTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.seoTitle} | LEYONEX`,
      description: service.metaDescription,
      url,
    },
  };
}

export function generateStaticParams() {
  return getAllServices().map((s) => ({ slug: s.slug }));
}

const sectionTitle =
  "font-display text-[24px] font-bold leading-snug text-lx-ink";

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const legacy = legacyServiceSlugs[slug];
  if (legacy) permanentRedirect(`/hizmetler/${legacy}`);
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const all = getAllServices();
  const related = service.related
    .map((s) => all.find((x) => x.slug === s))
    .filter((s) => s !== undefined);
  const url = `${BASE}/hizmetler/${slug}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: service.h1,
      alternateName: service.title.tr,
      description: service.metaDescription,
      url,
      serviceType: service.title.tr,
      category: groupTitle(service.group),
      provider: { "@id": `${BASE}/#organization` },
      areaServed: [
        { "@type": "Country", name: "Türkiye" },
        { "@type": "Place", name: "Yurt dışı fuarlar" },
      ],
    },
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
        { "@type": "ListItem", position: 3, name: service.title.tr, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: service.geoBlock.question,
          acceptedAnswer: { "@type": "Answer", text: service.geoBlock.answer },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main className="bg-lx-paper pt-16 md:pt-20">
        {/* Açılış */}
        <section className="border-b border-lx-line bg-white py-14 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <nav
              aria-label="Sayfa konumu"
              className="text-[13px] text-lx-grey1"
            >
              <Link href="/" className="hover:text-lx-ink">
                Ana Sayfa
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <Link href="/hizmetler" className="hover:text-lx-ink">
                Hizmetler
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-lx-ink">{service.title.tr}</span>
            </nav>
            <div className="mt-8">
              <Kicker>{groupTitle(service.group)}</Kicker>
            </div>
            <h1 className="mt-6 max-w-[48rem] text-balance font-display text-[clamp(32px,3.8vw,52px)] font-bold leading-[1.08] tracking-[-0.02em] text-lx-ink">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-[44rem] text-pretty text-[18px] leading-[1.65] text-lx-grey1">
              {service.heroText}
            </p>
            {(service.free || service.pricingNote) && (
              <p className="mt-6 inline-flex border border-lx-red px-3 py-1.5 text-[13px] font-semibold text-lx-red">
                {service.free
                  ? "Birlikte çalıştığımız firmalara ücretsiz"
                  : service.pricingNote}
              </p>
            )}
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
            <div className="space-y-14 lg:col-span-8">
              {/* Doğrudan cevap (GEO) */}
              <div className="border-l-[3px] border-lx-red bg-white p-6 sm:p-8">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lx-red">
                  Kısaca
                </p>
                <h2 className="mt-3 font-display text-[22px] font-bold leading-snug text-lx-ink">
                  {service.geoBlock.question}
                </h2>
                <p className="mt-3 text-[16px] leading-relaxed text-lx-grey1">
                  {service.geoBlock.answer}
                </p>
              </div>

              <div>
                <h2 className={sectionTitle}>Hangi ihtiyacı karşılar?</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-lx-grey1">
                  {service.fullDescription.tr}
                </p>
              </div>

              {service.subServices.length > 0 && (
                <div>
                  <h2 className={sectionTitle}>Hizmet kapsamı</h2>
                  <ul className="mt-6 grid gap-px border border-lx-line bg-lx-line sm:grid-cols-2">
                    {service.subServices.map((sub, i, arr) => (
                      <li
                        key={sub.name.tr}
                        className={`flex gap-4 bg-white p-5 ${arr.length % 2 === 1 && i === arr.length - 1 ? "sm:col-span-2" : ""}`}
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[11px] h-[2px] w-3 shrink-0 bg-lx-red"
                        />
                        <span>
                          <span className="block font-medium text-lx-ink">
                            {sub.name.tr}
                          </span>
                          <span className="mt-0.5 block text-[15px] text-lx-grey1">
                            {sub.description.tr}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Üç fayda: bu hizmete özel */}
              <div>
                <h2 className={sectionTitle}>Bu hizmette size üç faydamız</h2>
                <div className="mt-6">
                  <BenefitsBand lines={service.benefits} />
                </div>
              </div>

              {/* Sürecin bir parçası: aşama şeridi ve A'dan Z'ye vurgusu */}
              <div className="border border-lx-line bg-white p-6 sm:p-8">
                <h2 className={sectionTitle}>Fuar sürecinin bir parçası</h2>
                <p className="mt-3 text-[16px] leading-relaxed text-lx-grey1">
                  {service.title.tr}, fuar süreç yönetiminin adımlarından
                  biridir. Bu hizmeti tek başına alabilir ya da sürecin tamamını
                  A’dan Z’ye LEYONEX’e bırakabilirsiniz.
                </p>
                <ol
                  className="mt-6 grid gap-2 sm:grid-cols-3"
                  aria-label="Fuar süreç aşamaları"
                >
                  {phases.map((p) => {
                    const active = p === service.phase;
                    return (
                      <li
                        key={p}
                        aria-current={active ? "step" : undefined}
                        className={`border px-4 py-3 text-[14px] font-semibold ${
                          active
                            ? "border-lx-ink bg-lx-ink text-white"
                            : "border-lx-line text-lx-grey1"
                        }`}
                      >
                        {phaseInfo[p].label}
                      </li>
                    );
                  })}
                </ol>
                <Link href="/hizmetler" className={`${buttonClass.ghost} mt-6`}>
                  Tüm süreci inceleyin
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Yan sütun */}
            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                <div className="border border-lx-line bg-white p-7">
                  <h2 className="font-display text-[19px] font-bold leading-snug text-lx-ink">
                    {service.ctaText}
                  </h2>
                  <p className="mt-2 text-[15px] text-lx-grey1">
                    İletişim bilgilerinizi bırakın, fuar planınızı birlikte
                    değerlendirelim.
                  </p>
                  <Link
                    href="/teklif-al"
                    className={`${buttonClass.primary} mt-6 w-full`}
                  >
                    Görüşme talep edin
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <div className="mt-6 space-y-3 border-t border-lx-line pt-6 text-[15px]">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-3 text-lx-ink hover:text-lx-red"
                    >
                      <Mail
                        size={16}
                        className="text-lx-red"
                        aria-hidden="true"
                      />
                      {contact.email}
                    </a>
                    <a
                      href={contact.phoneHref}
                      className="flex items-center gap-3 text-lx-ink hover:text-lx-red"
                    >
                      <Phone
                        size={16}
                        className="text-lx-red"
                        aria-hidden="true"
                      />
                      {contact.phone}
                    </a>
                  </div>
                </div>
                <nav
                  aria-label={`${groupTitle(service.group)} hizmetleri`}
                  className="border border-lx-line bg-white p-7"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lx-grey1">
                    {groupTitle(service.group)}
                  </p>
                  <ul className="mt-3">
                    {all
                      .filter((s) => s.group === service.group)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/hizmetler/${s.slug}`}
                            aria-current={
                              s.slug === service.slug ? "page" : undefined
                            }
                            className={`block py-1.5 text-[15px] ${
                              s.slug === service.slug
                                ? "font-semibold text-lx-red"
                                : "text-lx-ink hover:text-lx-red"
                            }`}
                          >
                            {s.title.tr}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </section>

        {/* İlgili hizmetler: iç bağlantı ağı */}
        {related.length > 0 && (
          <section
            aria-labelledby="ilgili-baslik"
            className="border-t border-lx-line bg-white py-16 lg:py-20"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <h2 id="ilgili-baslik" className={sectionTitle}>
                  Birlikte planlanan hizmetler
                </h2>
                <Link href="/hizmetler" className={buttonClass.ghost}>
                  <ArrowLeft size={16} aria-hidden="true" />
                  Tüm hizmetler
                </Link>
              </div>
              <ul className="mt-8 grid gap-4 md:grid-cols-3">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/hizmetler/${s.slug}`}
                      className="group flex h-full flex-col border border-lx-line bg-white p-6 transition-colors hover:border-lx-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
                    >
                      <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lx-red">
                        {groupTitle(s.group)}
                      </span>
                      <span className="mt-2 flex items-start justify-between gap-3 font-display text-[18px] font-bold leading-snug text-lx-ink group-hover:text-lx-red">
                        {s.title.tr}
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-lx-grey3 group-hover:text-lx-red"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-2 text-[15px] leading-relaxed text-lx-grey1">
                        {s.shortDescription.tr}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
