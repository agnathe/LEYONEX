import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  featuredReferenceIndexes,
  references,
  referencesIntro,
} from "./content";
import ReferenceGallery from "./ReferenceGallery";
import { Kicker, Lead, buttonClass } from "./SectionHeading";

export function ReferencesIntro({
  headingId,
  as = "h2",
}: {
  headingId: string;
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className="max-w-[46rem]">
      <Kicker dark>Referanslar</Kicker>
      <Heading
        id={headingId}
        className="mt-6 text-balance font-display text-[clamp(30px,3.1vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#F2F2F2]"
      >
        {referencesIntro.title}
      </Heading>
      <Lead dark>{referencesIntro.text}</Lead>
      <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-lx-muted-dark">
        {referencesIntro.sectors.map((sector) => (
          <li key={sector} className="flex items-center gap-2.5">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-lx-grey2" />
            {sector}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectStories() {
  const featured = featuredReferenceIndexes.map((i) => references[i]);
  return (
    <section
      aria-labelledby="referanslar-baslik"
      className="relative overflow-hidden bg-lx-ink py-24 text-white lg:py-32"
    >
      {/* Koyu yüzeyde kesilmiş dev X glifi (tasarım sistemi imzası) */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
      >
        X
      </span>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <ReferencesIntro headingId="referanslar-baslik" />
          <Link
            href="/projeler"
            className={`${buttonClass.outlineLight} self-start lg:self-auto`}
          >
            Tüm referanslar
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ReferenceGallery items={featured} className="mt-16" />

        <p className="mt-4 max-w-[44rem] text-[14px] leading-relaxed text-lx-muted-dark">
          {referencesIntro.privacy}
        </p>
      </div>
    </section>
  );
}
