"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Loader2, Check, Mail, Phone, MapPin } from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSent(true);
    } catch {
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  const field = "w-full bg-white border border-[#E5E5E3] text-[#1a1a1a] placeholder:text-[#bbb] rounded px-4 py-3 text-sm focus:outline-none focus:border-[#CB3234] transition-colors";
  const label = "block text-xs font-bold text-[#1a1a1a] uppercase tracking-wider mb-2";

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-[#F8F8F6]">

        {/* Hero */}
        <div className="bg-white border-b border-[#E5E5E3] py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#CB3234]" />
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                İletişim
              </span>
              <div className="w-8 h-px bg-[#CB3234]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">
              Bize Ulaşın
            </h1>
            <p className="text-[#666] max-w-md mx-auto text-sm leading-relaxed">
              Sorularınız, proje talepleriniz veya işbirliği için aşağıdaki formu doldurun.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234] mb-5">
                  İletişim Bilgileri
                </p>
                <div className="space-y-4">
                  {[
                    { Icon: Mail,  label: 'E-posta',  value: 'info@leyonex.com' },
                    { Icon: Phone, label: 'Telefon',  value: '+90 543 960 70 76' },
                    { Icon: MapPin,label: 'Konum',    value: 'Ankara & İstanbul, Türkiye' },
                  ].map(({ Icon, label: l, value }) => (
                    <div key={l} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded bg-[#CB3234]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-[#CB3234]" strokeWidth={1.8} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#999] mb-0.5">{l}</p>
                        <p className="text-sm text-[#1a1a1a] font-medium">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {sent ? (
                <div className="border border-[#E5E5E3] rounded-lg p-12 text-center bg-white">
                  <div className="w-14 h-14 rounded-full bg-[#CB3234] flex items-center justify-center mx-auto mb-5">
                    <Check size={24} className="text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Mesajınız Alındı</h3>
                  <p className="text-[#666] text-sm">En kısa sürede sizinle iletişime geçeceğiz.</p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white border border-[#E5E5E3] rounded-lg p-8 md:p-10 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={label}>Ad Soyad *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={field}
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={label}>Telefon</label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={field}
                        placeholder="+90 5xx xxx xx xx"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={label}>E-posta *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className={field}
                      placeholder="ornek@sirket.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={label}>Mesaj *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`${field} resize-none`}
                      placeholder="Mesajınızı buraya yazın..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#CB3234] text-white font-bold py-3.5 rounded hover:bg-[#A8282A] disabled:opacity-60 transition-colors text-sm tracking-wide"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>Gönder <ArrowRight size={15} /></>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
