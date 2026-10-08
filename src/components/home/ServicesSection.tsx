import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getAllServices } from "@/lib/data";
import { serviceGroups } from "@/data/services";
import { servicesIntro } from "./content";
import { Kicker, Lead, SectionTitle, buttonClass } from "./SectionHeading";

// Dört ana başlık: masaüstünde ikiye iki, mobilde tek kolon. Başlıklar aynı hizadan başlar.
export default function ServicesSection() {
  const services = getAllServices();
  return (
    <section
      aria-labelledby="hizmetler-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[46rem]">
            <Kicker>A’dan Z’ye fuar süreç yönetimi</Kicker>
            <SectionTitle id="hizmetler-baslik">
              {servicesIntro.title}
            </SectionTitle>
            <Lead>{servicesIntro.text}</Lead>
          </div>
          <Link
            href="/hizmetler"
            className={`${buttonClass.outline} self-start lg:self-auto`}
          >
            Tüm hizmetler
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-16 grid gap-px border border-lx-line bg-lx-line md:grid-cols-2">
          {serviceGroups.map((group, i) => (
            <li key={group.id} className="flex flex-col bg-white p-7 sm:p-9">
              <span className="text-[13px] font-semibold tabular-nums text-lx-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[22px] font-bold leading-snug text-lx-ink">
                {group.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-lx-grey1">
                {group.summary}
              </p>
              <ul className="mt-6 border-t border-lx-line">
                {services
                  .filter((s) => s.group === group.id)
                  .map((s) => (
                    <li key={s.slug} className="border-b border-lx-line">
                      <Link
                        href={`/hizmetler/${s.slug}`}
                        className="group flex items-center justify-between gap-4 py-3 text-[15px] font-medium text-lx-ink transition-colors duration-150 ease-brand hover:text-lx-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
                      >
                        {s.title.tr}
                        <ArrowUpRight
                          size={17}
                          strokeWidth={1.75}
                          className="shrink-0 text-lx-grey3 transition-colors duration-150 group-hover:text-lx-red"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
