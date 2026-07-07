export default function ProjectsVideoSection() {
  return (
    <section className="bg-[#111111] min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">

        {/* Başlık */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#CB3234]" />
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
              Projelerimiz
            </span>
            <div className="w-8 h-px bg-[#CB3234]" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Hayallerimizi,<br />gerçeğe taşıyalım.
          </h1>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-[0_8px_64px_rgba(0,0,0,0.6)]">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/N43uEoLjwt8?rel=0&modestbranding=1"
              title="Leyonex Projeler"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Alt metin */}
        <div className="text-center mt-10 max-w-xl mx-auto space-y-4">
          <p className="text-[#888] text-sm leading-relaxed">
            Daha fazla proje örneği ya da referans bilgisi için lütfen iletişime geçin.
          </p>
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/20 hover:border-[#CB3234] hover:text-[#CB3234] px-6 py-2.5 rounded transition-colors"
          >
            İletişime Geçin →
          </a>
        </div>

      </div>
    </section>
  );
}
