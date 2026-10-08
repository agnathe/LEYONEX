import { coreBenefits } from "@/data/services";

/**
 * Üç fayda: daha profesyonel ve verimli katılım, daha az iş yükü, benzer bütçe.
 * lines verilirse başlıklar sabit kalır, açıklamalar hizmete özel olur.
 */
export default function BenefitsBand({
  dark = false,
  lines,
  headingLevel = "h3",
}: {
  dark?: boolean;
  lines?: readonly [string, string, string];
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  return (
    <ol
      className={`grid gap-px border sm:grid-cols-3 ${
        dark
          ? "border-lx-line-dark bg-lx-line-dark"
          : "border-lx-line bg-lx-line"
      }`}
    >
      {coreBenefits.map((b, i) => (
        <li
          key={b.title}
          className={`flex flex-col p-6 sm:p-7 ${dark ? "bg-lx-ink1" : "bg-white"}`}
        >
          <span className="text-[13px] font-semibold tabular-nums text-lx-red">
            {String(i + 1).padStart(2, "0")}
          </span>
          <Heading
            className={`mt-3 font-display text-[19px] font-bold leading-snug ${
              dark ? "text-[#F2F2F2]" : "text-lx-ink"
            }`}
          >
            {b.title}
          </Heading>
          <p
            className={`mt-2.5 text-[15px] leading-relaxed ${dark ? "text-lx-muted-dark" : "text-lx-grey1"}`}
          >
            {lines ? lines[i] : b.text}
          </p>
        </li>
      ))}
    </ol>
  );
}
