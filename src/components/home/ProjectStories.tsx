import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { evolutionProjects, projectsIntro } from "./content";
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

/** Stant görsellerinden önce: paylaşılanın tasarım tarafı olduğu, detayların firmaya özel kaldığı. */
export function ProjectsDisclosure() {
  const d = projectsIntro.disclosure;
  return (
    <aside
      aria-label="Paylaşılan projeler hakkında"
      className="grid gap-8 border border-lx-line-dark bg-lx-ink1 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10"
    >
      <div className="lg:col-span-5">
        <span aria-hidden="true" className="block h-[3px] w-10 bg-lx-red" />
        <p className="mt-5 text-balance font-display text-[20px] font-bold leading-snug text-[#F2F2F2] sm:text-[22px]">
          {d.title}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-lx-muted-dark">
          {d.text}
        </p>
      </div>
      <ul className="grid gap-px self-center border border-lx-line-dark bg-lx-line-dark sm:grid-cols-2 lg:col-span-7">
        {d.items.map((item, i) => (
          <li
            key={item}
            className={`flex items-start gap-3 bg-lx-ink1 px-5 py-4 text-[15px] leading-snug text-[#F2F2F2] ${
              i === d.items.length - 1 ? "sm:col-span-2" : ""
            }`}
          >
            <span className="mt-0.5 shrink-0 text-[12px] font-semibold tabular-nums text-lx-red">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

/** Ana sayfa: her proje için önceki yıl ve sonuç yan yana. */
export default function ProjectStories() {
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

        <div className="mt-12">
          <ProjectsDisclosure />
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {evolutionProjects.map((project) => {
            const before = project.steps[0];
            const after = project.steps[project.steps.length - 1];
            const alternatives = project.steps.length - 2;
            return (
              <li key={project.id}>
                <Link
                  href={`/projeler#donusum-${project.id}`}
                  className="group block border border-lx-line-dark bg-lx-ink1 transition-[border-color,transform] ease-brand [transition-duration:250ms] hover:-translate-y-0.5 hover:border-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
                >
                  <span className="relative grid h-[220px] grid-cols-5 gap-px bg-lx-line-dark sm:h-[280px]">
                    <span className="relative col-span-2 overflow-hidden bg-lx-ink2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={before.image.src}
                        alt={`${project.title}: önceki yıl tasarımı`}
                        width={before.image.width}
                        height={before.image.height}
                        loading="lazy"
                        className="h-full w-full object-cover grayscale-[0.6] transition-[filter] [transition-duration:450ms] group-hover:grayscale-0"
                      />
                      <span className="absolute bottom-0 left-0 bg-lx-ink/90 px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#F2F2F2]">
                        Önceki yıl
                      </span>
                    </span>
                    <span className="relative col-span-3 overflow-hidden bg-lx-ink2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={after.image.src}
                        alt={`${project.title}: sonuç tasarımı`}
                        width={after.image.width}
                        height={after.image.height}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform ease-brand [transition-duration:450ms] group-hover:scale-[1.02]"
                      />
                      <span className="absolute bottom-0 left-0 bg-lx-red px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                        Sonuç
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute left-[40%] top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white text-lx-ink"
                    >
                      <ArrowRight size={16} />
                    </span>
                  </span>
                  <span className="flex items-start justify-between gap-4 p-6">
                    <span>
                      <span className="block text-[13px] font-semibold tabular-nums text-lx-red">
                        {project.id}
                      </span>
                      <span className="mt-2 block font-display text-[20px] font-bold leading-snug text-[#F2F2F2]">
                        {project.title}
                      </span>
                    </span>
                    <span className="mt-1 shrink-0 border border-lx-line-dark px-2.5 py-1 text-[12px] font-semibold text-lx-muted-dark">
                      {alternatives > 0
                        ? `${alternatives} alternatif`
                        : "Önceki yıl → Sonuç"}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 max-w-[46rem] text-[14px] leading-relaxed text-lx-muted-dark">
          {projectsIntro.note}
        </p>
      </div>
    </section>
  );
}
