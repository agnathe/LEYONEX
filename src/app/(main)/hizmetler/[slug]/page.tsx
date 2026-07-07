import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getServiceBySlug, getAllServices } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Mail, Phone } from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

const phaseLabel: Record<string, string> = {
  'fuar-oncesi': 'FUAR ÖNCESİ',
  'fuar-zamani': 'FUAR ZAMANI',
  'fuar-sonrasi': 'FUAR SONRASI',
};

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-[#F8F8F6]">

        {/* Breadcrumb + hero */}
        <section className="bg-white border-b border-[#E5E5E3] py-14">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#999] hover:text-[#CB3234] transition-colors mb-8 uppercase tracking-wider"
            >
              <ArrowLeft size={14} />
              Tüm Hizmetler
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#CB3234]" />
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                {phaseLabel[service.phase] ?? 'Hizmet'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4 max-w-2xl">
              {service.title.tr}
            </h1>
            {service.shortDescription && (
              <p className="text-lg text-[#555] max-w-xl leading-relaxed">
                {service.shortDescription.tr}
              </p>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Main content */}
              <div className="lg:col-span-2">
                {service.fullDescription?.tr && (
                  <div className="mb-12">
                    <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">Hizmet Detayları</h2>
                    <p className="text-[#555] text-base leading-relaxed">
                      {service.fullDescription.tr}
                    </p>
                  </div>
                )}

                {service.subServices && service.subServices.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-black text-[#1a1a1a] mb-6">Kapsam</h2>
                    <div className="grid gap-3">
                      {service.subServices.map((sub: any, i: number) => (
                        <div key={i} className="bg-white border border-[#E5E5E3] rounded p-5 flex gap-4 items-start">
                          <div className="w-6 h-6 rounded-full bg-[#CB3234] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={13} className="text-white" strokeWidth={2.5} />
                          </div>
                          <div>
                            <h3 className="font-bold text-[#1a1a1a] mb-1">{sub.name.tr}</h3>
                            {sub.description?.tr && (
                              <p className="text-sm text-[#666]">{sub.description.tr}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-[#E5E5E3] rounded p-7 sticky top-24">
                  <h3 className="text-lg font-black text-[#1a1a1a] mb-2">Bu hizmet için teklif alın</h3>
                  <p className="text-sm text-[#666] mb-6">
                    24 saat içinde size özel fiyat hazırlayalım.
                  </p>
                  <Link
                    href="/teklif-al"
                    className="flex items-center justify-center gap-2 w-full bg-[#CB3234] text-white font-bold py-3.5 rounded hover:bg-[#A8282A] transition-colors text-sm"
                  >
                    Teklif Talep Formu
                    <ArrowRight size={15} />
                  </Link>

                  <div className="mt-8 pt-8 border-t border-[#E5E5E3] space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#999]">İletişim</h4>
                    <a href="mailto:info@leyonex.com" className="flex items-center gap-3 text-sm text-[#555] hover:text-[#CB3234] transition-colors">
                      <Mail size={14} className="text-[#CB3234]" />
                      info@leyonex.com
                    </a>
                    <a href="tel:+905439607076" className="flex items-center gap-3 text-sm text-[#555] hover:text-[#CB3234] transition-colors">
                      <Phone size={14} className="text-[#CB3234]" />
                      +90 543 960 70 76
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 bg-white border-t border-[#E5E5E3]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black text-[#1a1a1a] mb-1">Diğer Hizmetlerimizi Keşfedin</h2>
              <p className="text-sm text-[#666]">Fuar sürecinizin her adımı için çözümlerimiz var.</p>
            </div>
            <Link
              href="/hizmetler"
              className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold px-7 py-3 rounded hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm whitespace-nowrap"
            >
              Tüm Hizmetler
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return getAllServices().map(s => ({ slug: s.slug }));
}
