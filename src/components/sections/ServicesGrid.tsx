'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Box, Users, Hotel, Coffee, Camera, Car,
  Gift, Utensils, Lightbulb, FileText, Phone, Award, ChevronDown,
} from 'lucide-react';

interface ServiceDef {
  id: string;
  Icon: LucideIcon;
  title: string;
  shortDescription: string;
  longDescription: string;
}

interface PhaseDef {
  id: string;
  label: string;
  intro: string;
  bg: string;
  labelColor: string;
  // Tailwind grid-cols classes tailored per phase item count
  gridCols: string;
  services: ServiceDef[];
}

const phases: PhaseDef[] = [
  {
    id: 'oncesi',
    label: 'Fuar Öncesi',
    intro: 'Strateji, hazırlık ve lojistik planlama',
    bg: 'bg-[#F8F8F6]',
    labelColor: 'text-[#1a1a1a]',
    gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    services: [
      {
        id: 'danismanlik',
        Icon: Lightbulb,
        title: 'Fuar Danışmanlığı',
        shortDescription: 'Fuar seçimi, bütçe planlama, strateji ve analiz.',
        longDescription:
          'Doğru fuarı seçmek yalnızca takvimde yer almak değildir; hedef pazar, ziyaretçi profili, bütçe ve beklenen görüşme çıktısı birlikte değerlendirilmelidir. Bu hizmette fuar seçimi, katılım hedefleri, bütçe çerçevesi, zaman planı ve operasyon akışı birlikte kurgulanır. Böylece katılım kararı ölçülebilir bir ticari hedefe bağlanır.',
      },
      {
        id: 'stand-tasarim',
        Icon: Box,
        title: 'Stand Tasarımı & Kurulumu',
        shortDescription: 'Modüler, orta seviye, premium ve dijital ekranlı çözümlerin tedarik yönetimi.',
        longDescription:
          'Stand tasarımı sadece estetik değil, ziyaretçi akışı, ürün sergileme ve görüşme kalitesi için de stratejik bir alandır. Marka kimliği, metrekare kullanımı, toplantı alanları, depolama, dijital ekranlar ve uygulama detayları birlikte ele alınır. Üretim, nakliye, kurulum ve söküm tarafı tek koordinasyon akışıyla yönetilir.',
      },
      {
        id: 'otel',
        Icon: Hotel,
        title: 'Otel & Konaklama',
        shortDescription: 'Fuar alanına yakın 3–5 yıldız konaklama çözümleri.',
        longDescription:
          'Fuar alanına yakınlık, ekip büyüklüğü, VIP ihtiyaçlar ve bütçe dengesi birlikte değerlendirilerek konaklama planı hazırlanır. Amaç yalnızca rezervasyon yapmak değil, fuar temposunu aksatmayacak konforlu ve kontrollü bir akış kurmaktır.',
      },
      {
        id: 'ulasim',
        Icon: Car,
        title: 'Ulaşım & Shuttle',
        shortDescription: 'Günlük shuttle, VIP araç ve havalimanı transferleri.',
        longDescription:
          'Havaalanı transferleri, otel-fuar alanı arası shuttle planı, VIP araç tahsisi ve günlük saha ulaşımı tek program üzerinden yönetilir. Böylece ekip ve misafir tarafında son dakika ulaşım stresi minimize edilir.',
      },
      {
        id: 'hediye',
        Icon: Gift,
        title: 'Kurumsal Hediye & Promosyon',
        shortDescription: 'Klasik ve premium VIP promosyon ürünleri.',
        longDescription:
          'Promosyon ürünleri yalnızca dağıtım için değil, marka hafızasını uzatmak için seçilir. Hedef kitleye, bütçeye ve marka algısına uygun klasik veya premium alternatifler hazırlanır. Gerekirse VIP özel set ve stand dağıtım planı da kurgulanır.',
      },
    ],
  },
  {
    id: 'zamani',
    label: 'Fuar Zamanı',
    intro: 'Saha operasyonu ve ziyaretçi deneyimi',
    bg: 'bg-white',
    labelColor: 'text-[#CB3234]',
    gridCols: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4',
    services: [
      {
        id: 'hostes',
        Icon: Users,
        title: 'Hostes & Personel',
        shortDescription: 'VIP, servis ve İngilizce bilen profesyonel ekip.',
        longDescription:
          'Stand üzerindeki ilk temas marka algısını doğrudan etkiler. Karşılama, yönlendirme, yabancı dil desteği, servis ve saha koordinasyonu için uygun ekip planlanır. Personel seçimi fuarın profiline ve markanın temsil seviyesine göre yapılır.',
      },
      {
        id: 'ikram',
        Icon: Coffee,
        title: 'Stand İkramları',
        shortDescription: 'Çay/kahve, ikram ve premium servis seçenekleri.',
        longDescription:
          'İkram hizmeti ziyaretçinin stantta kalış süresini ve deneyimini destekler. Çay, kahve, su, atıştırmalık ve premium servis seçenekleri marka konumuna uygun şekilde planlanır. Amaç gereksiz kalabalık değil, kaliteli görüşme ortamı oluşturmaktır.',
      },
      {
        id: 'fotograf',
        Icon: Camera,
        title: 'Fotoğraf & Video',
        shortDescription: 'Stand, ürün, röportaj ve drone çekimleri.',
        longDescription:
          'Fuar yatırımı yalnızca etkinlik günüyle sınırlı kalmamalı, sonrasında da pazarlama ve iletişim içeriğine dönüşmelidir. Stand çekimleri, ürün detayları, röportajlar, sosyal medya videoları ve ihtiyaç halinde profesyonel kurgu çıktıları planlanır.',
      },
      {
        id: 'gala',
        Icon: Utensils,
        title: 'Akşam Yemeği & Gala',
        shortDescription: 'Gala, cocktail ve VIP masa organizasyonları.',
        longDescription:
          'Fuar sonrası akşam programları, ilişkileri güçlendiren önemli temas alanlarıdır. Müşteri yemeği, bayi buluşması, VIP masa planı ve networking odaklı akşam organizasyonları profesyonel şekilde kurgulanır.',
      },
    ],
  },
  {
    id: 'sonrasi',
    label: 'Fuar Sonrası',
    intro: 'Takip, raporlama ve destek süreçleri',
    bg: 'bg-[#F8F8F6]',
    labelColor: 'text-[#555]',
    gridCols: 'grid-cols-1 md:grid-cols-3',
    services: [
      {
        id: 'raporlama',
        Icon: FileText,
        title: 'Raporlama & Analiz',
        shortDescription: 'Kapsamlı hizmet raporu ve iyileştirme anketi.',
        longDescription:
          'Fuar bittikten sonra yalnızca kartvizit değil, anlamlı içgörü çıkmalıdır. Yapılan görüşmeler, öne çıkan talepler, ziyaretçi profili, ekip geri bildirimleri ve geliştirme alanları bir hizmet raporuna dönüştürülür. Böylece sonraki fuarlar veriyle planlanır.',
      },
      {
        id: 'takip',
        Icon: Phone,
        title: 'Hızlı Takip Planı',
        shortDescription: 'Fuar sonrası 48 saat içinde temas planı.',
        longDescription:
          'Fuar sonrası ilk 48 saat sıcak temasların korunması için kritik kabul edilir. Lead listesinin önceliklendirilmesi, teşekkür e-postaları, tekliflenecek kontakların ayrıştırılması, toplantı planları ve gerekiyorsa CRM aktarımı bu süreçte ele alınır.',
      },
      {
        id: 'devlet',
        Icon: Award,
        title: 'Devlet Desteği Danışmanlığı',
        shortDescription: 'KOSGEB, TİM, TOBB teşvik başvuru yönetimi.',
        longDescription:
          'Katılım sonrası destek başvurusu, evrak kontrolü, DYS süreci, sonuç raporu takibi ve gerekli belge akışlarının yönetimi konusunda destek sağlanır. Amaç, fuar sonrası teşvik ve destek süreçlerinin eksiksiz ilerlemesini sağlamaktır.',
      },
    ],
  },
];

// ── Service Card ──────────────────────────────────────────────────────────────

function ServiceCard({ service, open, onToggle }: {
  service: ServiceDef;
  open: boolean;
  onToggle: () => void;
}) {
  const { Icon } = service;

  return (
    <div
      className={`
        relative bg-white border transition-all duration-200 overflow-hidden
        ${open
          ? 'border-[#CB3234]/25 shadow-[0_4px_24px_rgba(203,50,52,0.07)]'
          : 'border-[#E5E5E3] hover:border-[#CB3234]/20 hover:shadow-[0_2px_12px_rgba(0,0,0,0.05)]'
        }
      `}
    >
      {/* Red accent bar — slides in when open */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-[#CB3234] transition-transform duration-300 origin-left ${open ? 'scale-x-100' : 'scale-x-0'}`}
        aria-hidden="true"
      />

      {/* Trigger */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`detail-${service.id}`}
        className="group w-full text-left p-6 flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CB3234] focus-visible:ring-inset"
      >
        {/* Icon row */}
        <div className="flex items-start justify-between mb-5">
          <div className="w-9 h-9 flex items-center justify-center">
            <Icon
              size={20}
              strokeWidth={1.5}
              className={`transition-colors duration-200 ${open ? 'text-[#CB3234]' : 'text-[#1a1a1a] group-hover:text-[#CB3234]'}`}
            />
          </div>
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-all duration-300 ${open ? 'rotate-180 text-[#CB3234]' : 'text-[#C0C0BE]'}`}
          />
        </div>

        {/* Title */}
        <h3 className={`text-sm font-bold mb-2 leading-snug transition-colors duration-200 ${open ? 'text-[#CB3234]' : 'text-[#1a1a1a]'}`}>
          {service.title}
        </h3>

        {/* Short desc */}
        <p className="text-xs text-[#888] leading-relaxed">
          {service.shortDescription}
        </p>
      </button>

      {/* Expandable detail — grid-rows animation, no layout shift */}
      <div
        id={`detail-${service.id}`}
        role="region"
        aria-label={`${service.title} detay`}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">
            <div className="pt-4 border-t border-[#F0F0EE]">
              <p className="text-xs text-[#555] leading-[1.85]">
                {service.longDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Phase Section ─────────────────────────────────────────────────────────────

function PhaseSection({ phase, expanded, onToggle }: {
  phase: PhaseDef;
  expanded: Set<string>;
  onToggle: (id: string) => void;
}) {
  return (
    <div className={`${phase.bg} py-14 md:py-20`}>
      <div className="container mx-auto px-4 md:px-6">

        {/* Phase header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-1 mb-8">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-5 h-px bg-[#CB3234]" />
              <span className={`text-sm font-bold tracking-[0.15em] uppercase ${phase.labelColor}`}>
                {phase.label}
              </span>
            </div>
            <p className="text-[#999] text-xs">{phase.intro}</p>
          </div>
          <span className="text-[10px] text-[#C8C8C6] font-medium tracking-wider">
            {phase.services.length} hizmet
          </span>
        </div>

        {/* Cards — per-phase column count, gap-based (no gap-px), items-start */}
        <div className={`grid ${phase.gridCols} gap-3 items-start`}>
          {phase.services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              open={expanded.has(service.id)}
              onToggle={() => onToggle(service.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── ServicesGrid ──────────────────────────────────────────────────────────────

export default function ServicesGrid() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Phase sections */}
      {phases.map((phase) => (
        <PhaseSection
          key={phase.id}
          phase={phase}
          expanded={expanded}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}
