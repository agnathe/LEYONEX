import { crema } from "./content";
import { Kicker, Lead, SectionTitle } from "./SectionHeading";

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
          <ol className="mt-9 border-t border-lx-line">
            {crema.steps.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 border-b border-lx-line bg-lx-paper/90 py-4 text-[15px] leading-relaxed text-lx-ink"
              >
                <span className="shrink-0 text-[13px] font-semibold tabular-nums leading-[1.6] text-lx-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
