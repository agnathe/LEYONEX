import { references, type ReferenceImage } from "./content";

// Firma bilgisi içermeyen referans galerisi (sütunlu, farklı oranlı kareler).
export default function ReferenceGallery({
  items = references,
  className = "",
}: {
  items?: ReferenceImage[];
  className?: string;
}) {
  return (
    <ul className={`columns-1 gap-6 sm:columns-2 lg:columns-3 ${className}`}>
      {items.map((item) => (
        <li key={item.src} className="mb-6 break-inside-avoid">
          <figure className="group border border-lx-line-dark bg-lx-ink1">
            <div className="overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                className="duration-[450ms] h-auto w-full grayscale-[0.85] transition-[filter,transform] ease-brand group-hover:scale-[1.015] group-hover:grayscale-0"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
              <span className="text-[15px] font-medium text-[#F2F2F2]">
                {item.label}
              </span>
              <span className="flex shrink-0 items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-lx-muted-dark">
                {item.kind === "Saha uygulaması" && (
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-lx-red" />
                )}
                {item.kind}
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
