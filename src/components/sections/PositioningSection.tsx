import { Check, X, Minus } from 'lucide-react';

type Status = 'yes' | 'no' | 'partial';

interface Criterion {
  label: string;
  standFirmasi: Status;
  leyonex: Status;
  buyukAjans: Status;
  price?: { stand: [number, number]; leyonex: [number, number]; buyuk: [number, number] };
}

const criteria: Criterion[] = [
  {
    label: 'Fuar öncesi strateji danışmanlığı',
    standFirmasi: 'no',
    leyonex: 'yes',
    buyukAjans: 'partial',
  },
  {
    label: 'Tek fatura, tek muhatap',
    standFirmasi: 'no',
    leyonex: 'yes',
    buyukAjans: 'yes',
  },
  {
    label: 'Tedarikçi seçimi & sözleşme yönetimi',
    standFirmasi: 'no',
    leyonex: 'yes',
    buyukAjans: 'partial',
  },
  {
    label: 'Saha koordinasyonu (hostes, ikram, ulaşım)',
    standFirmasi: 'no',
    leyonex: 'yes',
    buyukAjans: 'partial',
  },
  {
    label: 'Fuar sonrası raporlama ve takip planı',
    standFirmasi: 'no',
    leyonex: 'yes',
    buyukAjans: 'partial',
  },
  {
    label: 'Ortalama fiyat',
    standFirmasi: 'yes',
    leyonex: 'yes',
    buyukAjans: 'no',
    price: { stand: [2, 3], leyonex: [2, 3], buyuk: [3, 4] },
  },
  {
    label: 'Devlet desteği başvuru danışmanlığı',
    standFirmasi: 'no',
    leyonex: 'yes',
    buyukAjans: 'no',
  },
];

const PriceDots = ({ filled, total, dark }: { filled: number; total: number; dark?: boolean }) => (
  <div className="flex items-center gap-1 justify-center">
    {Array.from({ length: total }).map((_, i) => (
      <span
        key={i}
        className={`inline-block w-2 h-2 rounded-full ${
          i < filled
            ? 'bg-[#CB3234]'
            : dark
            ? 'bg-white/20'
            : 'bg-[#E0E0E0]'
        }`}
      />
    ))}
  </div>
);

const StatusIcon = ({ status }: { status: Status }) => {
  if (status === 'yes') {
    return (
      <div className="flex items-center justify-center">
        <Check size={16} className="text-[#CB3234]" strokeWidth={2.5} />
      </div>
    );
  }
  if (status === 'no') {
    return (
      <div className="flex items-center justify-center">
        <X size={16} className="text-[#ccc]" strokeWidth={2} />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <Minus size={16} className="text-[#bbb]" strokeWidth={2} />
    </div>
  );
};

export default function PositioningSection() {
  return (
    <section className="py-24 bg-white overflow-x-auto">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#CB3234]" />
            <span className="text-sm font-semibold tracking-[0.15em] uppercase text-[#CB3234]">
              Neden Leyonex
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
            Stand Firması veya Büyük Ajans Değil — Süreç Ortağı
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            Leyonex, standı kuran firma da değil yüksek maliyetli büyük ajans da değil. Fuar sürecinizin tamamını yöneten tek muhataptır.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="min-w-[640px]">
          {/* Column Headers */}
          <div className="grid grid-cols-4 gap-px bg-[#E5E5E3] mb-px">
            <div className="bg-[#F8F8F6] px-6 py-4">
              <span className="text-xs font-semibold text-[#999] uppercase tracking-wider">Kriter</span>
            </div>
            <div className="bg-[#F8F8F6] px-6 py-4 text-center">
              <span className="text-xs font-semibold text-[#999] uppercase tracking-wider">Stand Firması</span>
              <p className="text-[10px] text-[#bbb] mt-1">Standı kurar, süreci size bırakır</p>
            </div>
            <div className="bg-[#111] px-6 py-4 text-center">
              <span className="text-xs font-bold text-white uppercase tracking-wider">LEYONEX</span>
              <p className="text-[10px] text-[#CB3234] mt-1 font-medium">Tüm süreci yönetir</p>
            </div>
            <div className="bg-[#F8F8F6] px-6 py-4 text-center">
              <span className="text-xs font-semibold text-[#999] uppercase tracking-wider">Büyük Ajans</span>
              <p className="text-[10px] text-[#bbb] mt-1">Geniş kadro, yüksek maliyet</p>
            </div>
          </div>

          {/* Rows */}
          {criteria.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-px bg-[#E5E5E3] hover:bg-[#CB3234]/5 transition-colors"
            >
              <div className="bg-white px-6 py-4 flex items-center">
                <span className="text-sm text-[#333] font-medium">{row.label}</span>
              </div>
              <div className="bg-white px-6 py-4 flex items-center justify-center">
                {row.price
                  ? <PriceDots filled={row.price.stand[0]} total={row.price.stand[1]} />
                  : <StatusIcon status={row.standFirmasi} />}
              </div>
              <div className="bg-[#111] px-6 py-4 flex items-center justify-center">
                {row.price
                  ? <PriceDots filled={row.price.leyonex[0]} total={row.price.leyonex[1]} dark />
                  : <StatusIcon status={row.leyonex} />}
              </div>
              <div className="bg-white px-6 py-4 flex items-center justify-center">
                {row.price
                  ? <PriceDots filled={row.price.buyuk[0]} total={row.price.buyuk[1]} />
                  : <StatusIcon status={row.buyukAjans} />}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="flex items-center gap-6 mt-6 px-1">
            <div className="flex items-center gap-2 text-xs text-[#777]">
              <Check size={13} className="text-[#CB3234]" strokeWidth={2.5} />
              <span>Evet</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#777]">
              <Minus size={13} className="text-[#bbb]" strokeWidth={2} />
              <span>Kısmi</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#777]">
              <X size={13} className="text-[#ccc]" strokeWidth={2} />
              <span>Hayır</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
