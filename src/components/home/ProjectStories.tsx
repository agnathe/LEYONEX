import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjectIds, projectsIntro, showcaseProjects } from "./content";
import ProjectShowcase from "./ProjectShowcase";
import { Kicker, Lead, buttonClass } from "./SectionHeading";

export function ProjectsIntro({
  headingId,
  as = "h2",
}: {
  headingId: string;
  as?: "h1" | "h2";
}) {
  const Heading = as;
  return (
    <div className="max-w-[46rem]">
      <Kicker dark>Projeler</Kicker>
      <Heading
        id={headingId}
        className="mt-6 text-balance font-display text-[clamp(30px,3.1vw,42px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#F2F2F2]"
      >
        {projectsIntro.title}
      </Heading>
      <Lead dark>{projectsIntro.text}</Lead>
    </div>
  );
}

export function ProjectsPrivacyNote() {
  return (
    <p className="mt-8 max-w-[46rem] text-[14px] leading-relaxed text-lx-muted-dark">
      {projectsIntro.privacy}
    </p>
  );
}

export default function ProjectStories() {
  const featured = featuredProjectIds
    .map((id) => showcaseProjects.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <section
      aria-labelledby="projeler-baslik"
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
          <ProjectsIntro headingId="projeler-baslik" />
          <Link
            href="/projeler"
            className={`${buttonClass.outlineLight} self-start lg:self-auto`}
          >
            Tüm projeler
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-16">
          <ProjectShowcase projects={featured} wideIndexes={[0]} />
        </div>

        <ProjectsPrivacyNote />
      </div>
    </section>
  );
}
