import ContactRequestForm from "@/components/forms/ContactRequestForm";
import { contact } from "./content";
import { Kicker, SectionTitle } from "./SectionHeading";

export default function ContactSection() {
  return (
    <section
      id="iletisim-formu"
      aria-labelledby="iletisim-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto grid gap-14 px-4 md:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Kicker>Görüşme</Kicker>
          <SectionTitle id="iletisim-baslik">{contact.title}</SectionTitle>
          <dl className="mt-10 grid gap-px border border-lx-line bg-lx-line sm:grid-cols-2">
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
          {/* Kurşun kalem stant eskizi: kâğıt zemini sayfa rengiyle birleşir */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/eskiz/stant-plan-eskizi.webp"
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={872}
            height={941}
            className="mt-10 hidden w-full mix-blend-multiply lg:block"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <ContactRequestForm source="ana-sayfa" />
        </div>
      </div>
    </section>
  );
}
