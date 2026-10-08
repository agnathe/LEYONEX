"use client";

import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import type { GalleryItem } from "./content";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red";

/** Ek proje görselleri: iki kolonlu ızgara, tıklanınca büyük görüntüleme. */
export default function ProjectGallery({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const item = open === null ? null : items[open];
  const step = (delta: number) =>
    setOpen((i) =>
      i === null ? i : (i + delta + items.length) % items.length
    );

  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2">
        {items.map((g, i) => (
          <li key={g.image.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`${g.title}: büyük görüntüle`}
              className={`group block w-full border border-lx-line-dark bg-lx-ink1 text-left transition-[border-color,transform] ease-brand [transition-duration:250ms] hover:-translate-y-0.5 hover:border-white/50 ${focusRing}`}
            >
              <span className="relative block aspect-[16/10] overflow-hidden bg-lx-ink2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.image.src}
                  alt={g.alt}
                  width={g.image.width}
                  height={g.image.height}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform ease-brand [transition-duration:450ms] group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-lx-ink/85 px-2.5 py-1.5 text-[12px] font-medium text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Expand size={13} aria-hidden="true" />
                  Büyüt
                </span>
              </span>
              <span className="block px-5 py-4 font-display text-[17px] font-bold text-[#F2F2F2]">
                {g.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <DialogPrimitive.Root
        open={item !== null}
        onOpenChange={(o) => !o && setOpen(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-lx-ink" />
          <DialogPrimitive.Content
            className="fixed inset-0 z-[60] flex flex-col bg-lx-ink text-white focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") step(1);
              if (e.key === "ArrowLeft") step(-1);
            }}
          >
            {item && (
              <div className="container mx-auto flex h-full flex-col px-4 py-6 md:px-6">
                <div className="flex items-center justify-between gap-6">
                  <DialogPrimitive.Title className="font-display text-[clamp(20px,2vw,28px)] font-bold text-[#F2F2F2]">
                    {item.title}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="sr-only">
                    {item.alt}
                  </DialogPrimitive.Description>
                  <DialogPrimitive.Close
                    aria-label="Kapat"
                    className={`flex h-11 w-11 shrink-0 items-center justify-center border border-lx-line-dark transition-colors hover:border-white ${focusRing}`}
                  >
                    <X size={20} aria-hidden="true" />
                  </DialogPrimitive.Close>
                </div>
                <div className="relative mt-5 flex min-h-0 flex-1 items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    key={item.image.src}
                    src={item.image.src}
                    alt={item.alt}
                    width={item.image.width}
                    height={item.image.height}
                    className="max-h-full max-w-full object-contain duration-300 animate-in fade-in-0"
                  />
                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Önceki görsel"
                    className={`absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-lx-ink/80 transition-colors hover:bg-lx-red ${focusRing}`}
                  >
                    <ArrowLeft size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Sonraki görsel"
                    className={`absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-lx-ink/80 transition-colors hover:bg-lx-red ${focusRing}`}
                  >
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
