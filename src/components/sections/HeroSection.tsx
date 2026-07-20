'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const E = 'cubic-bezier(.4,0,.2,1)';
const SPRING = 'cubic-bezier(.34,1.56,.64,1)';

function anim(name: string, dur: number, delay: number, easing = E): CSSProperties {
  return {
    animation: `${name} ${dur}s ${easing} ${delay}s both`,
  };
}


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#F2F2F0]">

      {/* X background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 24%, rgba(255,255,255,.82) 24%, rgba(255,255,255,.82) 57%, transparent 57%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(225deg, transparent 24%, rgba(255,255,255,.62) 24%, rgba(255,255,255,.62) 57%, transparent 57%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, transparent 53%, rgba(203,50,52,.14) 53%, rgba(203,50,52,.14) 57%, transparent 57%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(225deg, transparent 53%, rgba(203,50,52,.09) 53%, rgba(203,50,52,.09) 57%, transparent 57%)' }} />
        {/* dot grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="1.5" cy="1.5" r="1.5" fill="#1a1a1a"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      {/* Hero body */}
      <div className="relative z-10 flex-1 container mx-auto px-4 md:px-8 pt-28 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">

          {/* ── LEFT ── */}
          <div className="pt-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6" style={anim('hero-slide-up', .5, .28)}>
              <div className="w-8 h-px bg-[#CB3234]" />
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                End to End Exhibition Partner
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-black leading-[1.06] tracking-tight text-[#1a1a1a] mb-5"
                style={{ fontSize: 'clamp(36px, 4.5vw, 62px)' }}>
              <span className="block" style={anim('hero-slide-up', .45, .46)}>Fuarınızı biz</span>
              <span className="block text-[#CB3234]" style={anim('hero-slide-up', .45, .59)}>yönetelim,</span>
              <span className="block" style={anim('hero-slide-up', .45, .72)}>siz satışa odaklanın.</span>
            </h1>

            {/* Description */}
            <p className="text-[15px] text-[#555] leading-relaxed max-w-md mb-8"
               style={anim('hero-slide-up', .45, .88)}>
              LEYONEX stand kurmaz — fuar sürecinizi yönetir. Strateji, doğru tedarikçi seçimi,
              saha operasyonu ve raporlama: aynı bütçeyle daha iyi sonuç.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3" style={anim('hero-slide-up', .45, 1.02)}>
              <Link href="/teklif-al"
                className="inline-flex items-center justify-center gap-2 bg-[#CB3234] text-white font-bold px-8 py-3.5 rounded hover:bg-[#A8282A] transition-colors text-sm tracking-wide">
                Teklif Alın →
              </Link>
              <Link href="/hizmetler"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold px-8 py-3.5 rounded hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm tracking-wide">
                Sürecimizi İnceleyin
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Hero image ── */}
          <div
            className="relative overflow-hidden rounded-xl shadow-[0_8px_48px_rgba(0,0,0,0.14)]"
            style={{ ...anim('hero-reveal-down', .5, 0.9), clipPath: 'inset(0 0 100% 0)', minHeight: 420 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.jpg"
              alt="LEYONEX fuar yönetimi"
              className="w-full h-full object-cover"
              style={{ minHeight: 420 }}
            />
            {/* Subtle bottom gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        className="relative z-10 mb-6 mx-auto flex flex-col items-center gap-1 text-[#999] hover:text-[#CB3234] transition-colors"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown size={22} className="animate-bounce" />
      </button>
    </section>
  );
}
