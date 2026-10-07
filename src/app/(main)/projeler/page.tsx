import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsVideoSection from "@/components/sections/ProjectsVideoSection";
import MethodSection from "@/components/home/MethodSection";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import {
  ProjectsIntro,
  ProjectsPrivacyNote,
} from "@/components/home/ProjectStories";
import { showcaseProjects } from "@/components/home/content";
import { buttonClass } from "@/components/home/SectionHeading";

export const metadata = {
  title: "Projeler",
  description:
    "LEYONEX proje seçkisi: farklı ölçeklerde ve farklı ihtiyaçlarla hazırlanan fuar stantları, alternatif tasarım yönleri ve pazarlama odaklı kararlar.",
  alternates: { canonical: "https://leyonex.com/projeler" },
};

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section
          aria-labelledby="projeler-sayfa-baslik"
          className="relative overflow-hidden bg-lx-ink py-20 text-white lg:py-28"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
          >
            X
          </span>
          <div className="container relative mx-auto px-4 md:px-6">
            <ProjectsIntro headingId="projeler-sayfa-baslik" as="h1" />
            <div className="mt-16">
              {/* 10 proje, 3 kolon: 0. ve 6. kartlar geniş → 4 dolu satır */}
              <ProjectShowcase
                projects={showcaseProjects}
                wideIndexes={[0, 6]}
              />
            </div>
            <ProjectsPrivacyNote />
            <Link href="/teklif-al" className={`${buttonClass.primary} mt-10`}>
              Fuarınızı birlikte planlayalım
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <MethodSection />
        <ProjectsVideoSection />
      </main>
      <Footer />
    </>
  );
}
