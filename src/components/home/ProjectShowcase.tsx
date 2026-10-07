"use client";

import { useCallback, useEffect, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import type { ShowcaseProject } from "./content";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red";

/**
 * Proje vitrini: 3 kolonlu ızgarada bazı kartlar iki kolon kaplar
 * (wideIndexes), satırlar boşluksuz dolar. Kart tıklanınca proje galerisi açılır.
 */
export default function ProjectShowcase({
  projects,
  wideIndexes = [0],
}: {
  projects: ShowcaseProject[];
  wideIndexes?: number[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => {
          const wide = wideIndexes.includes(i);
          const cover = project.images[0];
          return (
            <li key={project.id} className={wide ? "lg:col-span-2" : undefined}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`${project.title}: ${project.images.length} görseli incele`}
                className={`group flex h-full w-full flex-col border border-lx-line-dark bg-lx-ink1 text-left transition-[border-color,transform] ease-brand [transition-duration:250ms] hover:-translate-y-0.5 hover:border-white/50 ${focusRing}`}
              >
                <span className="relative block aspect-[16/10] w-full overflow-hidden bg-lx-ink2 lg:aspect-auto lg:h-[300px] xl:h-[330px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cover.src}
                    alt=""
                    width={cover.width}
                    height={cover.height}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform ease-brand [transition-duration:450ms] group-hover:scale-[1.02]"
                  />
                  <span className="absolute left-0 top-0 bg-lx-ink px-3 py-2 text-[13px] font-semibold tabular-nums text-white">
                    {project.id}
                  </span>
                  <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-lx-ink/85 px-2.5 py-1.5 text-[12px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Expand size={13} aria-hidden="true" />
                    {project.images.length} görsel
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-display text-[19px] font-bold leading-snug text-[#F2F2F2]">
                    {project.title}
                  </span>
                  <span className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-lx-muted-dark">
                    {project.insight}
                  </span>
                  <span className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-grey3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 bg-lx-red"
                        />
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <ProjectLightbox
        projects={projects}
        index={openIndex}
        onIndexChange={setOpenIndex}
      />
    </>
  );
}

function ProjectLightbox({
  projects,
  index,
  onIndexChange,
}: {
  projects: ShowcaseProject[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const project = index === null ? null : projects[index];
  const total = project?.images.length ?? 0;

  useEffect(() => {
    setImageIndex(0);
  }, [index]);

  const step = useCallback(
    (delta: number) => {
      if (!total) return;
      setImageIndex((i) => (i + delta + total) % total);
    },
    [total]
  );

  const stepProject = (delta: number) => {
    if (index === null) return;
    onIndexChange((index + delta + projects.length) % projects.length);
  };

  return (
    <DialogPrimitive.Root
      open={project !== null}
      onOpenChange={(open) => !open && onIndexChange(null)}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-lx-ink/95 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-lx-ink text-white focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          {project && (
            <div className="container mx-auto flex min-h-full flex-col px-4 py-6 md:px-6 lg:py-10">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-lx-muted-dark">
                    <span className="tabular-nums text-lx-red">
                      {project.id}
                    </span>{" "}
                    / {String(projects.length).padStart(2, "0")}
                  </p>
                  <DialogPrimitive.Title className="mt-3 font-display text-[clamp(24px,2.6vw,36px)] font-bold leading-tight text-[#F2F2F2]">
                    {project.title}
                  </DialogPrimitive.Title>
                </div>
                <DialogPrimitive.Close
                  className={`flex h-11 w-11 shrink-0 items-center justify-center border border-lx-line-dark text-white transition-colors hover:border-white ${focusRing}`}
                  aria-label="Kapat"
                >
                  <X size={20} aria-hidden="true" />
                </DialogPrimitive.Close>
              </div>

              <div className="mt-6 grid flex-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <figure className="relative border border-lx-line-dark bg-lx-ink1">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      key={project.images[imageIndex].src}
                      src={project.images[imageIndex].src}
                      alt={`${project.title}, görsel ${imageIndex + 1} / ${total}`}
                      width={project.images[imageIndex].width}
                      height={project.images[imageIndex].height}
                      className="mx-auto max-h-[68vh] w-full object-contain duration-300 animate-in fade-in-0"
                    />
                    {total > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => step(-1)}
                          aria-label="Önceki görsel"
                          className={`absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-lx-ink/80 text-white transition-colors hover:bg-lx-red ${focusRing}`}
                        >
                          <ArrowLeft size={18} aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          onClick={() => step(1)}
                          aria-label="Sonraki görsel"
                          className={`absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-lx-ink/80 text-white transition-colors hover:bg-lx-red ${focusRing}`}
                        >
                          <ArrowRight size={18} aria-hidden="true" />
                        </button>
                      </>
                    )}
                  </figure>
                  {total > 1 && (
                    <ul className="mt-3 flex gap-3 overflow-x-auto pb-1">
                      {project.images.map((image, i) => (
                        <li key={image.src} className="shrink-0">
                          <button
                            type="button"
                            onClick={() => setImageIndex(i)}
                            aria-label={`Görsel ${i + 1}`}
                            aria-current={i === imageIndex ? "true" : undefined}
                            className={`block border-2 transition-colors ${i === imageIndex ? "border-lx-red" : "border-transparent opacity-60 hover:opacity-100"} ${focusRing}`}
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={image.src}
                              alt=""
                              width={image.width}
                              height={image.height}
                              loading="lazy"
                              className="h-16 w-28 object-cover"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-col lg:col-span-4">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-lx-muted-dark">
                    Bakış açımız
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-[3px] w-10 bg-lx-red"
                  />
                  <DialogPrimitive.Description className="mt-5 text-[17px] leading-relaxed text-[#E6E6E6]">
                    {project.insight}
                  </DialogPrimitive.Description>
                  <ul className="mt-7 border-t border-lx-line-dark">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex items-center gap-3 border-b border-lx-line-dark py-3 text-[15px] font-medium text-[#F2F2F2]"
                      >
                        <span
                          aria-hidden="true"
                          className="h-[2px] w-3 bg-lx-red"
                        />
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex gap-3 pt-8">
                    <button
                      type="button"
                      onClick={() => stepProject(-1)}
                      className={`inline-flex flex-1 items-center justify-center gap-2 border-2 border-lx-line-dark px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:border-white ${focusRing}`}
                    >
                      <ArrowLeft size={16} aria-hidden="true" />
                      Önceki proje
                    </button>
                    <button
                      type="button"
                      onClick={() => stepProject(1)}
                      className={`inline-flex flex-1 items-center justify-center gap-2 border-2 border-white px-4 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-white hover:text-lx-ink ${focusRing}`}
                    >
                      Sonraki proje
                      <ArrowRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
