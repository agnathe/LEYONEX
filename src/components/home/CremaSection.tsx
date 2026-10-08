import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { crema } from "./content";
import { Kicker, Lead, SectionTitle, buttonClass } from "./SectionHeading";

// Açık X şerit görseli: şeritler sağda, metin solda sade zeminde kalır.
export default function CremaSection() {
  return (
    <section
      aria-labelledby="crema-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 md:bg-[url('/images/arka-plan/x-serit-acik.webp')] md:bg-cover md:bg-[position:62%_center] lg:py-28"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[36rem]">
          <Kicker>CReMa</Kicker>
          <SectionTitle id="crema-baslik">{crema.title}</SectionTitle>
          <Lead>{crema.text}</Lead>
          <Link href={crema.href} className={`${buttonClass.ghost} mt-8`}>
            Ziyaretçi kaydı hizmeti
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
