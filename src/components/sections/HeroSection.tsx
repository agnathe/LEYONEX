'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';
import { ChevronDown, Target, LayoutGrid, Users, Briefcase, Car, Gift, BarChart2, Calendar, MapPin } from 'lucide-react';

const E = 'cubic-bezier(.4,0,.2,1)';
const SPRING = 'cubic-bezier(.34,1.56,.64,1)';

function anim(name: string, dur: number, delay: number, easing = E): CSSProperties {
  return {
    animation: `${name} ${dur}s ${easing} ${delay}s both`,
  };
}

const services = [
  { Icon: Target,    label: 'Strateji' },
  { Icon: LayoutGrid, label: 'Stand' },
  { Icon: Users,     label: 'Saha Operasyonu' },
  { Icon: Briefcase, label: 'Seyahat & Konaklama' },
  { Icon: Car,       label: 'Transfer' },
  { Icon: Gift,      label: 'Promosyon & İkram' },
  { Icon: BarChart2, label: 'Raporlama' },
];

const steps = [
  { Icon: Calendar, num: '01', label: 'Pre-Fair',  sub: 'Planlama & hazırlık' },
  { Icon: MapPin,   num: '02', label: 'On-Site',   sub: 'Uygulama & saha yönetimi' },
  { Icon: BarChart2,num: '03', label: 'Post-Fair', sub: 'Raporlama & iyileştirme' },
];

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

          {/* ── RIGHT: cards ── */}
          <div className="flex flex-col gap-3">

            {/* Services card */}
            <div className="bg-white rounded-xl shadow-[0_2px_24px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden"
                 style={{ ...anim('hero-reveal-down', .44, 1.28), clipPath: 'inset(0 0 100% 0)' }}>
              <div className="px-5 py-4 border-b border-[#E5E5E3]">
                <p className="text-[13px] font-extrabold text-[#1a1a1a] mb-1">Hizmetlerimiz</p>
                <div className="w-6 h-0.5 bg-[#CB3234]" />
              </div>
              {services.map(({ Icon, label }, i) => (
                <div key={label}
                     className="flex items-center gap-3.5 px-5 py-[9px] border-b border-[#F4F4F2] last:border-0"
                     style={{ ...anim('hero-slide-up', .30, 1.66 + i * 0.16), opacity: 0 }}>
                  <Icon size={17} stroke="#CB3234" strokeWidth={1.6} className="flex-shrink-0" />
                  <span className="text-[12.5px] font-medium text-[#1a1a1a]">{label}</span>
                </div>
              ))}
            </div>

            {/* Process card */}
            <div className="bg-white rounded-xl shadow-[0_2px_24px_rgba(0,0,0,0.07),0_0_0_1px_rgba(0,0,0,0.04)] px-5 py-4"
                 style={{ ...anim('hero-fade-in', .4, 2.9), opacity: 0 }}>
              <p className="text-[13px] font-extrabold text-[#1a1a1a] mb-1">Süreç Yönetimi</p>
              <div className="w-5 h-0.5 bg-[#CB3234] mb-4" />

              {/* Timeline */}
              <div className="grid gap-0" style={{ gridTemplateColumns: '1fr 48px 1fr 48px 1fr' }}>
                {steps.flatMap(({ Icon, num, label, sub }, i) => [
                  <div key={num} className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full border-2 border-[#CB3234] bg-white flex items-center justify-center mb-2"
                         style={{ ...anim('hero-pop-in', .38, 3.20 + i * 0.60, SPRING), opacity: 0 }}>
                      <Icon size={14} stroke="#CB3234" strokeWidth={1.6} />
                    </div>
                    <div className="text-center" style={{ ...anim('hero-fade-in', .30, 3.46 + i * 0.60), opacity: 0 }}>
                      <p className="text-[9.5px] font-bold text-[#CB3234] tracking-wide mb-0.5">{num}</p>
                      <p className="text-[11px] font-bold text-[#1a1a1a] mb-0.5">{label}</p>
                      <p className="text-[9.5px] text-[#666] leading-snug">{sub}</p>
                    </div>
                  </div>,
                  ...(i < 2 ? [
                    <div key={`line-${i}`}
                         className="h-px bg-[#CB3234]"
                         style={{ marginTop: '17px', ...anim('hero-draw-right', .34, 3.56 + i * 0.60), clipPath: 'inset(0 100% 0 0)' }} />
                  ] : []),
                ])}
              </div>
            </div>

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
