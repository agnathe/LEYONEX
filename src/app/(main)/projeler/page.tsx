import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectsVideoSection from "@/components/sections/ProjectsVideoSection";
import MethodSection from "@/components/home/MethodSection";
import ReferenceGallery from "@/components/home/ReferenceGallery";
import { ReferencesIntro } from "@/components/home/ProjectStories";
import { referencesIntro } from "@/components/home/content";
import { buttonClass } from "@/components/home/SectionHeading";

export const metadata = {
  title: "Referanslar",
  description:
    "LEYONEX referans çalışmaları: savunma ve havacılık, elektronik ve haberleşme, yapı kimyasalları ve endüstriyel üretim sektörlerinden firmaların fuar süreçleri.",
  alternates: { canonical: "https://leyonex.com/projeler" },
};

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section
          aria-labelledby="referanslar-sayfa-baslik"
          className="relative overflow-hidden bg-lx-ink py-20 text-white lg:py-28"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-[8vw] -top-[14vw] select-none font-display text-[48vw] font-bold leading-none text-white opacity-[0.04]"
          >
            X
          </span>
          <div className="container relative mx-auto px-4 md:px-6">
            <ReferencesIntro headingId="referanslar-sayfa-baslik" as="h1" />
            <ReferenceGallery className="mt-16" />
            <p className="mt-4 max-w-[44rem] text-[14px] leading-relaxed text-lx-muted-dark">
              {referencesIntro.privacy}
            </p>
            <Link
              href="/teklif-al"
              className={`${buttonClass.primary} mt-10`}
            >
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
