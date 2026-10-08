import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import BenefitsBand from "@/components/services/BenefitsBand";
import { getAllServices } from "@/lib/data";
import { phaseInfo, type ServicePhase } from "@/data/services";
import { servicesIntro } from "./content";
import { Kicker, Lead, SectionTitle, buttonClass } from "./SectionHeading";

const phases: ServicePhase[] = ["fuar-oncesi", "fuar-zamani", "fuar-sonrasi"];

export default function ServicesSection() {
  const services = getAllServices();
  return (
    <section
      aria-labelledby="hizmetler-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[46rem]">
          <Kicker>A’dan Z’ye fuar süreç yönetimi</Kicker>
          <SectionTitle id="hizmetler-baslik">
            {servicesIntro.title}
          </SectionTitle>
          <Lead>{servicesIntro.text}</Lead>
        </div>

        <div className="mt-12">
          <BenefitsBand />
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
              Operasyon, sürecin yalnızca bir parçası: her hizmet aynı plana
              bağlanır.
            </figcaption>
          </figure>

          <div className="grid content-start gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1 xl:grid-cols-2 xl:gap-x-10">
            {phases.map((phase) => (
              <div
                key={phase}
                className={
                  phase === "fuar-oncesi" ? "xl:row-span-2" : undefined
                }
              >
                <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.16em] text-lx-red">
                  {phaseInfo[phase].label}
                </h3>
                <ul className="mt-4 border-t border-lx-line">
                  {services
                    .filter((s) => s.phase === phase)
                    .map((s) => (
                      <li key={s.slug} className="border-b border-lx-line">
                        <Link
                          href={`/hizmetler/${s.slug}`}
                          className="group flex items-center justify-between gap-4 py-4 text-[16px] font-medium text-lx-ink transition-colors duration-150 ease-brand hover:text-lx-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
                        >
                          {s.title.tr}
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
