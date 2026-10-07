import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { serviceGroups, servicesIntro } from "./content";
import { Kicker, Lead, SectionTitle, buttonClass } from "./SectionHeading";

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="hizmetler-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[46rem]">
          <Kicker>Birbiriyle uyumlu hizmetler</Kicker>
          <SectionTitle id="hizmetler-baslik">
            {servicesIntro.title}
          </SectionTitle>
          <Lead>{servicesIntro.text}</Lead>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <figure className="lg:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/maket/sahne-3.webp"
              alt="Hizmet noktalarının ortak koordinasyon noktasına bağlandığı stant maketi"
              loading="lazy"
              width={1254}
              height={1086}
              className="h-auto w-full"
            />
            <figcaption className="mt-3 text-[13px] text-lx-grey1">
              Temsili süreç maketi
            </figcaption>
          </figure>

          <div className="grid content-start gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-10">
            {serviceGroups.map((group) => (
              <div
                key={group.phase}
                className={
                  group.phase === "Fuar öncesi" ? "xl:row-span-2" : undefined
                }
              >
                <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-lx-red">
                  {group.phase}
                </h3>
                <ul className="mt-4 border-t border-lx-line">
                  {group.items.map((item) => (
                    <li key={item.href} className="border-b border-lx-line">
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-4 py-4 text-[16px] font-medium text-lx-ink transition-colors duration-150 ease-brand hover:text-lx-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
                      >
                        {item.label}
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.75}
                          className="shrink-0 text-lx-grey3 transition-colors duration-150 group-hover:text-lx-red"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="self-end">
              <Link href="/hizmetler" className={buttonClass.outline}>
                Tüm hizmetler
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
