import type { Metadata } from "next";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactRequestForm from "@/components/forms/ContactRequestForm";
import TrackedLink from "@/components/forms/TrackedLink";
import { Kicker } from "@/components/home/SectionHeading";
import { contact } from "@/components/home/content";

const BASE = "https://leyonex.com";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "LEYONEX iletişim bilgileri: e-posta, telefon, LinkedIn ve İstanbul ile Ankara ofisleri. Bilgilerinizi bırakın, fuar planınızı birlikte değerlendirelim.",
  alternates: { canonical: `${BASE}/iletisim` },
  openGraph: { title: "İletişim | LEYONEX", url: `${BASE}/iletisim` },
};

const itemLabel =
  "text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey1";
const itemLink =
  "text-[16px] font-medium text-lx-ink transition-colors duration-150 hover:text-lx-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red";

export default function IletisimPage() {
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
            <Kicker dark>İletişim</Kicker>
            <h1 className="mt-6 max-w-[40rem] text-balance font-display text-[clamp(34px,4vw,56px)] font-bold leading-[1.06] tracking-[-0.02em] text-[#F2F2F2]">
              Bize ulaşın.
            </h1>
            <p className="mt-6 max-w-[34rem] text-pretty text-[18px] leading-[1.6] text-lx-muted-dark">
              Sorularınız ve fuar planlarınız için formu kullanabilir ya da
              bize doğrudan yazabilirsiniz.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto grid gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-display text-[22px] font-bold text-lx-ink">
                İletişim bilgileri
              </h2>
              <ul className="mt-6 border-t border-lx-line">
                <li className="flex gap-4 border-b border-lx-line py-5">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-lx-red"
                    aria-hidden="true"
                  />
                  <div>
                    <p className={itemLabel}>E-posta</p>
                    <a href={`mailto:${contact.email}`} className={itemLink}>
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 border-b border-lx-line py-5">
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-lx-red"
                    aria-hidden="true"
                  />
                  <div>
                    <p className={itemLabel}>Telefon</p>
                    <TrackedLink
                      href={contact.phoneHref}
                      event="phone_click"
                      eventParams={{ location: "iletisim_page" }}
                      className={itemLink}
                    >
                      {contact.phone}
                    </TrackedLink>
                  </div>
                </li>
                <li className="flex gap-4 border-b border-lx-line py-5">
                  <Linkedin
                    size={18}
                    className="mt-0.5 shrink-0 text-lx-red"
                    aria-hidden="true"
                  />
                  <div>
                    <p className={itemLabel}>Sosyal medya</p>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={itemLink}
                    >
                      LinkedIn
                      <span className="sr-only"> (yeni sekmede açılır)</span>
                    </a>
                  </div>
                </li>
                <li className="flex gap-4 border-b border-lx-line py-5">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-lx-red"
                    aria-hidden="true"
                  />
                  <div className="space-y-4 text-[15px] leading-relaxed text-lx-ink">
                    <div>
                      <p className={itemLabel}>İstanbul</p>
                      <p className="mt-1">
                        Küçükbakkalköy Mah. Bakırcı Sk. Yusuf Bey Plaza No: 8A,
                        Ataşehir / İstanbul
                      </p>
                    </div>
                    <div>
                      <p className={itemLabel}>Ankara</p>
                      <p className="mt-1">
                        Üniversiteler, 1597. Cd. Bilkent Center AVM No:3/127,
                        Çankaya / Ankara
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="order-first lg:order-none lg:col-span-6 lg:col-start-7">
              <ContactRequestForm source="iletisim" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
