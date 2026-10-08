import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactRequestForm from "@/components/forms/ContactRequestForm";
import { Kicker } from "@/components/home/SectionHeading";
import { contact } from "@/components/home/content";

// İlk temas yalnızca iletişim bilgilerini alır. Fuar ve ihtiyaç detayları ilk
// görüşmeden sonra birlikte netleştirilir (ayrıntılı form: /fuar-bilgi-formu).

const BASE = "https://leyonex.com";

export const metadata: Metadata = {
  title: "Teklif ve Görüşme Talebi",
  description:
    "İletişim bilgilerinizi bırakın, fuar planınızı birlikte değerlendirelim. Fuarınızı ve ihtiyaçlarınızı ilk görüşmede konuşuyoruz.",
  alternates: { canonical: `${BASE}/teklif-al` },
  openGraph: {
    title: "Teklif ve Görüşme Talebi | LEYONEX",
    url: `${BASE}/teklif-al`,
  },
};

const steps = [
  "İletişim bilgilerinizi bırakın.",
  "Sizi arayıp fuarınızı ve önceliklerinizi dinleyelim.",
  "Kapsamı ve teklifi birlikte netleştirelim.",
];

export default function TeklifAlPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-lx-paper pt-16 md:pt-20">
        <section className="relative overflow-hidden bg-lx-ink py-20 text-white lg:py-24">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
          >
            X
          </span>
          <div className="container relative mx-auto px-4 md:px-6">
            <Kicker dark>Görüşme talebi</Kicker>
            <h1 className="mt-6 max-w-[40rem] text-balance font-display text-[clamp(34px,4vw,56px)] font-bold leading-[1.06] tracking-[-0.02em] text-[#F2F2F2]">
              Bir sonraki fuarınızı birlikte planlayalım.
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[18px] leading-[1.6] text-lx-muted-dark">
              Fuarınızı ve ihtiyaçlarınızı ilk görüşmede birlikte konuşuyoruz.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-display text-[22px] font-bold text-lx-ink">
                Nasıl ilerliyoruz?
              </h2>
              <ol className="mt-6 border-t border-lx-line">
                {steps.map((s, i) => (
                  <li
                    key={s}
                    className="flex gap-4 border-b border-lx-line py-4 text-[16px] leading-relaxed text-lx-ink"
                  >
                    <span className="shrink-0 text-[13px] font-semibold tabular-nums leading-[1.75] text-lx-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <dl className="mt-10 grid gap-px border border-lx-line bg-lx-line sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div className="bg-lx-paper p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1">
                    E-posta
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[16px] font-medium text-lx-ink hover:text-lx-red"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
                <div className="bg-lx-paper p-5">
                  <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1">
                    Telefon
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={contact.phoneHref}
                      className="text-[16px] font-medium text-lx-ink hover:text-lx-red"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="order-first lg:order-none lg:col-span-6 lg:col-start-7">
              <ContactRequestForm source="teklif-al" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
