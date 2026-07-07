import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FeaturedProjects() {
  return (
    <section className="py-24 bg-[#F8F8F6]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-[#CB3234]" />
          <span className="text-sm font-semibold tracking-[0.15em] uppercase text-[#CB3234]">
            Referanslar
          </span>
        </div>

        {/* Clickable image → /projeler */}
        <Link href="/projeler" className="group block">

          {/* Image */}
          <div className="relative overflow-hidden border border-[#E5E5E3]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/referanslar.jpg"
              alt="Referans firmalar"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            />
            {/* Subtle dark veil on hover */}
            <div
              className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/8 transition-colors duration-300"
              aria-hidden="true"
            />
          </div>

          {/* CTA bar */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[#555] text-sm leading-relaxed">
              Referans projeler için iletişime geçin.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] group-hover:text-[#CB3234] transition-colors whitespace-nowrap">
              Projelerimizi Görün
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </Link>

      </div>
    </section>
  );
}
