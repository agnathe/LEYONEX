import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectEvolution from "@/components/home/ProjectEvolution";
import ProjectGallery from "@/components/home/ProjectGallery";
import {
  ProjectsDisclosure,
  ProjectsIntro,
} from "@/components/home/ProjectStories";
import {
  evolutionProjects,
  galleryItems,
  projectsIntro,
} from "@/components/home/content";
import { Kicker, Lead, buttonClass } from "@/components/home/SectionHeading";

export const metadata = {
  title: "Projeler",
  description:
    "Alternatiflerden gerçeğe: LEYONEX'in önceki yıl tasarımından alternatif yönlere ve sonuca uzanan stant projeleri.",
  alternates: { canonical: "https://leyonex.com/projeler" },
};

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <main className="bg-lx-ink pt-16 text-white md:pt-20">
        <section
          aria-labelledby="projeler-sayfa-baslik"
          className="relative overflow-hidden py-20 lg:py-28"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
          >
            X
          </span>
          <div className="container relative mx-auto px-4 md:px-6">
            <ProjectsIntro headingId="projeler-sayfa-baslik" as="h1" />
            <div className="mt-12">
              <ProjectsDisclosure />
            </div>
            <div className="mt-16 space-y-16 lg:space-y-24">
              {evolutionProjects.map((project) => (
                <ProjectEvolution
                  key={project.id}
                  project={project}
                  total={evolutionProjects.length}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="diger-calismalar-baslik"
          className="border-t border-lx-line-dark py-20 lg:py-28"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-[46rem]">
              <Kicker dark>Seçki</Kicker>
              <h2
                id="diger-calismalar-baslik"
                className="mt-6 font-display text-[clamp(28px,2.8vw,38px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#F2F2F2]"
              >
                {projectsIntro.galleryTitle}
              </h2>
              <Lead dark>{projectsIntro.galleryText}</Lead>
            </div>
            <div className="mt-12">
              <ProjectGallery items={galleryItems} />
            </div>
            <p className="mt-8 text-[14px] text-lx-muted-dark">
              {projectsIntro.note}
            </p>
            <Link href="/teklif-al" className={`${buttonClass.primary} mt-8`}>
              Fuarınızı birlikte planlayalım
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
