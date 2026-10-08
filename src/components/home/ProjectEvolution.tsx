"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { EvolutionProject } from "./content";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red";

/** Bir standın önceki yıl → alternatifler → sonuç yolculuğu. Varsayılan olarak sonuç gösterilir. */
export default function ProjectEvolution({
  project,
  total,
}: {
  project: EvolutionProject;
  total: number;
}) {
  const last = project.steps.length - 1;
  const [index, setIndex] = useState(last);
  const step = project.steps[index];
  const go = (delta: number) =>
    setIndex((i) => Math.min(last, Math.max(0, i + delta)));
  const headingId = `donusum-${project.id}-baslik`;

  return (
    <article
      id={`donusum-${project.id}`}
      aria-labelledby={headingId}
      className="grid scroll-mt-28 gap-8 border-t border-lx-line-dark pt-12 lg:grid-cols-12 lg:gap-10 lg:pt-16"
    >
      <div className="lg:col-span-4">
        <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-lx-muted-dark">
          <span className="tabular-nums text-lx-red">{project.id}</span> /{" "}
          {String(total).padStart(2, "0")}
        </p>
        <h2
          id={headingId}
          className="mt-4 text-balance font-display text-[clamp(26px,2.4vw,34px)] font-bold leading-[1.12] tracking-[-0.02em] text-[#F2F2F2]"
        >
          {project.title}
        </h2>
        <p className="mt-5 text-pretty text-[16px] leading-relaxed text-lx-muted-dark">
          {project.insight}
        </p>

        {/* Dikey adım listesi (masaüstü) */}
        <ol className="mt-8 hidden border-l border-lx-line-dark lg:block">
          {project.steps.map((s, i) => {
            const active = i === index;
            return (
              <li key={s.label}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-pressed={active}
                  className={`-ml-px flex w-full items-center gap-3 border-l-2 py-2.5 pl-4 text-left text-[15px] font-medium transition-colors duration-150 ${focusRing} ${
                    active
                      ? "border-lx-red text-white"
                      : "border-transparent text-lx-muted-dark hover:text-white"
                  }`}
                >
                  <span className="w-5 text-[12px] tabular-nums text-lx-grey2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.label}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="lg:col-span-8">
        <figure className="relative border border-lx-line-dark bg-lx-ink2">
          <div className="aspect-[16/10] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={step.image.src}
              src={step.image.src}
              alt={`${project.title}: ${step.label}`}
              width={step.image.width}
              height={step.image.height}
              loading="lazy"
              className="h-full w-full object-contain duration-300 animate-in fade-in-0"
            />
          </div>
          <figcaption
            className={`absolute left-0 top-0 flex items-center gap-2 px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.12em] ${
              index === last
                ? "bg-lx-red text-white"
                : "bg-lx-ink/90 text-[#F2F2F2]"
            }`}
          >
            {step.label}
          </figcaption>
          <div className="absolute bottom-3 right-3 flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              disabled={index === 0}
              aria-label="Önceki adım"
              className={`flex h-10 w-10 items-center justify-center bg-lx-ink/85 text-white transition-colors hover:bg-lx-red disabled:pointer-events-none disabled:opacity-30 ${focusRing}`}
            >
              <ArrowLeft size={17} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              disabled={index === last}
              aria-label="Sonraki adım"
              className={`flex h-10 w-10 items-center justify-center bg-lx-ink/85 text-white transition-colors hover:bg-lx-red disabled:pointer-events-none disabled:opacity-30 ${focusRing}`}
            >
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </figure>

        {/* Adım şeridi: küçük görseller ve aralarında süreç çizgisi */}
        <ol
          className="mt-4 flex gap-3 overflow-x-auto pb-1"
          aria-label="Tasarım adımları"
        >
          {project.steps.map((s, i) => {
            const active = i === index;
            return (
              <li key={s.label} className="flex shrink-0 items-center gap-3">
                {i > 0 && (
                  <span
                    aria-hidden="true"
                    className={`h-px w-4 sm:w-6 ${i <= index ? "bg-lx-red" : "bg-lx-line-dark"}`}
                  />
                )}
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-pressed={active}
                  aria-label={s.label}
                  className={`group block text-left ${focusRing}`}
                >
                  <span
                    className={`block overflow-hidden border-2 transition-colors ${
                      active ? "border-lx-red" : "border-transparent"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.image.src}
                      alt=""
                      width={s.image.width}
                      height={s.image.height}
                      loading="lazy"
                      className={`h-14 w-24 object-cover transition-opacity sm:h-16 sm:w-28 ${
                        active ? "" : "opacity-55 group-hover:opacity-100"
                      }`}
                    />
                  </span>
                  <span
                    className={`mt-1.5 block text-[12px] font-medium ${
                      active ? "text-white" : "text-lx-muted-dark"
                    }`}
                  >
                    {s.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  );
}
