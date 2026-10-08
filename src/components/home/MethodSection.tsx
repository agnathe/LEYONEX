import { method } from "./content";
import { Kicker, SectionTitle } from "./SectionHeading";

export default function MethodSection() {
  return (
    <section
      aria-labelledby="calisma-bicimi-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-[46rem]">
          <Kicker>Çalışma biçimimiz</Kicker>
          <SectionTitle id="calisma-bicimi-baslik">{method.title}</SectionTitle>
        </div>

        <ol className="mt-14 grid gap-px border border-lx-line bg-lx-line md:grid-cols-3">
          {method.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col bg-white p-7">
              <span className="text-[13px] font-semibold tabular-nums text-lx-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-[19px] font-bold leading-snug text-lx-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-lx-grey1">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-4">
            <h3 className="font-display text-[22px] font-bold text-lx-ink">
              İhtiyacınıza göre hizmet
            </h3>
            <p className="mt-2 text-[15px] text-lx-grey1">
              {method.modelsNote}
            </p>
          </div>
          <ul className="grid gap-px border border-lx-line bg-lx-line sm:grid-cols-3 lg:col-span-8">
            {method.models.map((model, i) => (
              <li
                key={model.title}
                className={`p-6 ${i === method.models.length - 1 ? "bg-lx-ink text-white" : "bg-white"}`}
              >
                <span
                  className={`block font-display text-[18px] font-bold ${i === method.models.length - 1 ? "text-[#F2F2F2]" : "text-lx-ink"}`}
                >
                  {model.title}
                </span>
                <span
                  className={`mt-1.5 block text-[14px] ${i === method.models.length - 1 ? "text-lx-muted-dark" : "text-lx-grey1"}`}
                >
                  {model.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
