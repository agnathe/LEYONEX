'use client';

import { useState } from 'react';
import { ArrowRight, Loader2, Check } from 'lucide-react';

export default function CTASection() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: '',
    email: '',
    phone: '',
    fair: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/quote-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: form.company,
          email: form.email,
          phone: form.phone,
          fairName: form.fair || 'Belirtilmedi',
          contactPerson: form.company,
          fairDate: '',
          fairLocation: '',
        }),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative X background — faint, right side */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 42%, rgba(203,50,52,0.04) 42%, rgba(203,50,52,0.04) 58%, transparent 58%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(225deg, transparent 42%, rgba(203,50,52,0.03) 42%, rgba(203,50,52,0.03) 58%, transparent 58%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#CB3234]" />
            <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
              Teklif Alın
            </span>
            <div className="w-8 h-px bg-[#CB3234]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
            Bir Sonraki Fuarınızı Konuşalım
          </h2>
          <p className="text-[#666] text-base leading-relaxed">
            Bilgilerinizi bırakın, 24 saat içinde size özel teklif hazırlayalım.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto">
          {sent ? (
            <div className="border border-[#E5E5E3] rounded-lg p-12 text-center bg-[#F8F8F6]">
              <div className="w-14 h-14 rounded-full bg-[#CB3234] flex items-center justify-center mx-auto mb-5">
                <Check size={24} className="text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Talebiniz Alındı</h3>
              <p className="text-[#666] text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-[#E5E5E3] rounded-lg p-8 md:p-10 bg-[#F8F8F6]"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                    Firma Adı *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.company}
                    onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                    className="w-full bg-white border border-[#E5E5E3] text-[#1a1a1a] placeholder:text-[#bbb] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#CB3234] transition-colors"
                    placeholder="Şirket adınız"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full bg-white border border-[#E5E5E3] text-[#1a1a1a] placeholder:text-[#bbb] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#CB3234] transition-colors"
                    placeholder="+90 5xx xxx xx xx"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                  E-posta *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white border border-[#E5E5E3] text-[#1a1a1a] placeholder:text-[#bbb] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#CB3234] transition-colors"
                  placeholder="ornek@sirket.com"
                />
              </div>

              <div className="mb-7">
                <label className="block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2">
                  Katılacağınız Fuar
                </label>
                <input
                  type="text"
                  value={form.fair}
                  onChange={e => setForm(f => ({ ...f, fair: e.target.value }))}
                  className="w-full bg-white border border-[#E5E5E3] text-[#1a1a1a] placeholder:text-[#bbb] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#CB3234] transition-colors"
                  placeholder="Fuar adı (opsiyonel)"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-[#CB3234] text-white font-bold py-4 rounded hover:bg-[#A8282A] disabled:opacity-60 transition-colors text-sm tracking-wide"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Teklif İsteyin
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

              <p className="text-xs text-[#aaa] text-center mt-4">
                Formu doldurarak{' '}
                <a href="/gizlilik" className="underline hover:text-[#666]">Gizlilik Politikası</a>
                {' '}ve{' '}
                <a href="/kvkk" className="underline hover:text-[#666]">KVKK</a>
                {' '}metinlerimizi kabul etmiş olursunuz.
              </p>
            </form>
          )}

          {/* Trust indicators below form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {[
              '24 saat içinde geri dönüş',
              'Bütçenize uygun çözüm',
              'Taahhüt gerektirmez',
            ].map(text => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CB3234] flex-shrink-0" />
                <span className="text-xs text-[#666]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
