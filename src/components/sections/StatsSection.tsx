export default function StatsSection() {
  const stats = [
    { value: '15+', label: 'Yıllık marka ve pazarlama yönetimi' },
    { value: '10+', label: 'Yıllık fuar deneyimi' },
    { value: '100+', label: 'Tamamlanan proje' },
    { value: '%100', label: 'Memnuniyet' },
  ];

  return (
    <section className="relative bg-[#111111] py-20 overflow-hidden">
      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/stats-bg.png')", opacity: 0.18 }}
        aria-hidden="true"
      />
      {/* Giant X watermark */}
      <div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[#CB3234] font-black leading-none"
          style={{
            fontSize: 'clamp(240px, 35vw, 480px)',
            opacity: 0.08,
            transform: 'translateX(10%)',
            lineHeight: 1,
          }}
        >
          X
        </span>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#111111] px-8 py-12 flex flex-col justify-center"
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-[#999] leading-snug max-w-[140px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
