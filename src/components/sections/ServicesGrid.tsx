import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Box, Users, Hotel, Coffee, Camera, Car,
  Gift, Utensils, Lightbulb, FileText, Phone, Award,
} from 'lucide-react';

interface ServiceDef {
  id: string;
  slug: string;
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
        slug: 'fuar-danismanligi',
        Icon: Lightbulb,
        title: 'Fuar Danışmanlığı',
        shortDescription: 'Fuar seçimi, bütçe planlama, strateji ve analiz.',
        longDescription:
          'Doğru fuarı seçmek yalnızca takvimde yer almak değildir; hedef pazar, ziyaretçi profili, bütçe ve beklenen görüşme çıktısı birlikte değerlendirilmelidir. Bu hizmette fuar seçimi, katılım hedefleri, bütçe çerçevesi, zaman planı ve operasyon akışı birlikte kurgulanır. Böylece katılım kararı ölçülebilir bir ticari hedefe bağlanır.',
      },
      {
        id: 'stand-tasarim',
        slug: 'stand-tasarimi',
        Icon: Box,
        title: 'Stand Tasarımı & Kurulumu',
        shortDescription: 'Modüler, orta seviye, premium ve dijital ekranlı çözümlerin tedarik yönetimi.',
        longDescription:
          'Stand tasarımı sadece estetik değil, ziyaretçi akışı, ürün sergileme ve görüşme kalitesi için de stratejik bir alandır. Marka kimliği, metrekare kullanımı, toplantı alanları, depolama, dijital ekranlar ve uygulama detayları birlikte ele alınır. Üretim, nakliye, kurulum ve söküm tarafı tek koordinasyon akışıyla yönetilir.',
      },
      {
        id: 'otel',
        slug: 'otel-konaklama',
        Icon: Hotel,
        title: 'Otel & Konaklama',
        shortDescription: 'Fuar alanına yakın 3–5 yıldız konaklama çözümleri.',
        longDescription:
          'Fuar alanına yakınlık, ekip büyüklüğü, VIP ihtiyaçlar ve bütçe dengesi birlikte değerlendirilerek konaklama planı hazırlanır. Amaç yalnızca rezervasyon yapmak değil, fuar temposunu aksatmayacak konforlu ve kontrollü bir akış kurmaktır.',
      },
      {
        id: 'ulasim',
        slug: 'ulasim-shuttle',
        Icon: Car,
        title: 'Ulaşım & Shuttle',
        shortDescription: 'Günlük shuttle, VIP araç ve havalimanı transferleri.',
        longDescription:
          'Havaalanı transferleri, otel-fuar alanı arası shuttle planı, VIP araç tahsisi ve günlük saha ulaşımı tek program üzerinden yönetilir. Böylece ekip ve misafir tarafında son dakika ulaşım stresi minimize edilir.',
      },
      {
        id: 'hediye',
        slug: 'kurumsal-hediye',
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
        slug: 'hostes-personel',
        Icon: Users,
        title: 'Hostes & Personel',
        shortDescription: 'VIP, servis ve İngilizce bilen profesyonel ekip.',
        longDescription:
          'Stand üzerindeki ilk temas marka algısını doğrudan etkiler. Karşılama, yönlendirme, yabancı dil desteği, servis ve saha koordinasyonu için uygun ekip planlanır. Personel seçimi fuarın profiline ve markanın temsil seviyesine göre yapılır.',
      },
      {
        id: 'ikram',
        slug: 'stand-ikramlari',
        Icon: Coffee,
        title: 'Stand İkramları',
        shortDescription: 'Çay/kahve, ikram ve premium servis seçenekleri.',
        longDescription:
          'İkram hizmeti ziyaretçinin stantta kalış süresini ve deneyimini destekler. Çay, kahve, su, atıştırmalık ve premium servis seçenekleri marka konumuna uygun şekilde planlanır. Amaç gereksiz kalabalık değil, kaliteli görüşme ortamı oluşturmaktır.',
      },
      {
        id: 'fotograf',
        slug: 'fotograf-video',
        Icon: Camera,
        title: 'Fotoğraf & Video',
        shortDescription: 'Stand, ürün, röportaj ve drone çekimleri.',
        longDescription:
          'Fuar yatırımı yalnızca etkinlik günüyle sınırlı kalmamalı, sonrasında da pazarlama ve iletişim içeriğine dönüşmelidir. Stand çekimleri, ürün detayları, röportajlar, sosyal medya videoları ve ihtiyaç halinde profesyonel kurgu çıktıları planlanır.',
      },
      {
        id: 'gala',
        slug: 'aksam-yemegi-gala',
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
        slug: 'raporlama-analiz',
        Icon: FileText,
        title: 'Raporlama & Analiz',
        shortDescription: 'Kapsamlı hizmet raporu ve iyileştirme anketi.',
        longDescription:
          'Fuar bittikten sonra yalnızca kartvizit değil, anlamlı içgörü çıkmalıdır. Yapılan görüşmeler, öne çıkan talepler, ziyaretçi profili, ekip geri bildirimleri ve geliştirme alanları bir hizmet raporuna dönüştürülür. Böylece sonraki fuarlar veriyle planlanır.',
      },
      {
        id: 'takip',
        slug: 'hizli-takip',
        Icon: Phone,
        title: 'Hızlı Takip Planı',
        shortDescription: 'Fuar sonrası 48 saat içinde temas planı.',
        longDescription:
          'Fuar sonrası ilk 48 saat sıcak temasların korunması için kritik kabul edilir. Lead listesinin önceliklendirilmesi, teşekkür e-postaları, tekliflenecek kontakların ayrıştırılması, toplantı planları ve gerekiyorsa CRM aktarımı bu süreçte ele alınır.',
      },
      {
        id: 'devlet',
        slug: 'devlet-destegi-danismanligi',
        Icon: Award,
        title: 'Devlet Desteği Danışmanlığı',
        shortDescription: 'KOSGEB, TİM, TOBB teşvik başvuru yönetimi.',
        longDescription:
          'Katılım sonrası destek başvurusu, evrak kontrolü, DYS süreci, sonuç raporu takibi ve gerekli belge akışlarının yönetimi konusunda destek sağlanır. Amaç, fuar sonrası teşvik ve destek süreçlerinin eksiksiz ilerlemesini sağlamaktır.',
      },
    ],
  },
];

function ServiceCard({ service }: { service: ServiceDef }) {
  const { Icon } = service;
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="group bg-white border border-[#E5E5E3] hover:border-[#CB3234]/40 hover:shadow-[0_4px_16px_rgba(203,50,52,0.08)] transition-all duration-200 p-6 flex flex-col"
    >
      <div className="w-9 h-9 flex items-center justify-center mb-5">
        <Icon size={20} strokeWidth={1.5} className="text-[#1a1a1a] group-hover:text-[#CB3234] transition-colors" />
      </div>
      <h3 className="text-sm font-bold mb-2 leading-snug text-[#1a1a1a]">
        {service.title}
      </h3>
      <p className="text-xs text-[#888] leading-relaxed flex-1">
        {service.shortDescription}
      </p>
      <span className="mt-4 text-[10px] font-bold uppercase tracking-wider text-[#CB3234] opacity-0 group-hover:opacity-100 transition-opacity">
        Detayları Gör →
      </span>
    </Link>
  );
}

function PhaseSection({ phase }: { phase: PhaseDef }) {
  return (
    <div className={`${phase.bg} py-14 md:py-20`}>
      <div className="container mx-auto px-4 md:px-6">
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

        <div className={`grid ${phase.gridCols} gap-3`}>
          {phase.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <div>
      {phases.map((phase) => (
        <PhaseSection key={phase.id} phase={phase} />
      ))}

      <div className="bg-[#F8F8F6] py-10 border-t border-[#E5E5E3]">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-[#555]">
            Her hizmetin detaylı bilgisi ve referansları için:
          </p>
          <Link
            href="/hizmetler"
            className="inline-flex items-center gap-2 border border-[#1a1a1a] text-[#1a1a1a] font-bold px-6 py-2.5 text-sm hover:bg-[#1a1a1a] hover:text-white transition-colors"
          >
            Tüm Hizmetler →
          </Link>
        </div>
      </div>
    </div>
  );
}
