'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const stages = [
  {
    number: '01',
    phase: 'Fuar Öncesi',
    tag: 'STRATEJİ VE HAZIRLIK',
    items: [
      'Fuar stratejisi ve amaç belirleme',
      'Bütçe stratejisi ve optimizasyonu',
      'Stand tasarım yönetimi',
      'Tedarikçi seçimi ve aksiyon planlaması',
    ],
    expanded: true,
  },
  {
    number: '02',
    phase: 'Fuar Zamanı',
    tag: 'SAHA OPERASYONU',
    items: [
      'Operasyon ve toplantı yönetimi',
      'İkram, personel, konaklama ve ulaşım koordinasyonu',
      'Ücretsiz müşteri kayıt yazılımı desteği',
      'Anlık sorun çözümü',
    ],
    expanded: false,
  },
  {
    number: '03',
    phase: 'Fuar Sonrası',
    tag: 'TAKİP VE RAPORLAMA',
    items: [
      'Kayıtlı müşterilere hızlı dönüş yönlendirmesi',
      'Kapsamlı fuar inceleme ve iyileştirme raporu',
      'Bir sonraki fuar için somut öneriler',
      'Devlet teşviki başvurularının yönetimi',
    ],
    expanded: false,
  },
];

export default function ProcessManagement() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#CB3234]" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-[#CB3234]">
              Süreç Yönetimi
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a]">
            Üç Aşama, Tek Sistem
          </h2>
        </div>

        {/* Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stages.map((stage, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className={`text-left p-8 border rounded-lg transition-all duration-200 ${
                activeStage === i
                  ? 'border-[#CB3234] bg-white shadow-lg'
                  : 'border-[#E5E5E3] bg-[#F8F8F6] hover:border-[#CB3234]/40'
              }`}
            >
              {/* Stage number + arrow */}
              <div className="flex items-start justify-between mb-6">
                <span className={`text-sm font-bold ${activeStage === i ? 'text-[#CB3234]' : 'text-[#999]'}`}>
                  {stage.number}
                </span>
                <ArrowRight
                  size={16}
                  className={`transition-colors mt-0.5 ${activeStage === i ? 'text-[#CB3234]' : 'text-[#ccc]'}`}
                />
              </div>

              {/* Phase title */}
              <h3 className="text-xl font-black text-[#1a1a1a] mb-1">{stage.phase}</h3>
              <p className="text-xs font-semibold tracking-wider text-[#999] uppercase mb-6">
                {stage.tag}
              </p>

              {/* Items — only shown for active stage */}
              {activeStage === i ? (
                <ul className="space-y-3">
                  {stage.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#555]">
                      <div className="w-4 h-4 rounded-full bg-[#CB3234] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[#bbb]">Detaylar için tıklayın</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
