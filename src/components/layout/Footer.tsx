import Link from 'next/link';
import { Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 md:px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col leading-none mb-5">
              <span
                className="text-2xl tracking-tight text-white"
                style={{ fontFamily: "'TTSupermolot', sans-serif", fontWeight: 500 }}
              >
                LEYONE<span className="text-[#CB3234]">X</span>
              </span>
            </Link>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              Fuar sürecinizin tamamını yöneten tek muhatap. Strateji, tedarik, saha operasyonu ve raporlama.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/leyonex-expo/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center border border-white/10 rounded hover:border-[#CB3234] hover:text-[#CB3234] text-[#666] transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Şirket */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#999] mb-5">Şirket</h3>
            <ul className="space-y-3">
              {[
                { href: '/hakkimizda', label: 'Hakkımızda' },
                { href: '/projeler', label: 'Projeler' },
                { href: '/fuarlar', label: 'Fuar Takvimi' },
                { href: '/iletisim', label: 'İletişim' },
                { href: '/giris', label: 'Üye Girişi' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#666] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#999] mb-5">Hizmetler</h3>
            <ul className="space-y-3">
              {[
                'Fuar Danışmanlığı',
                'Stand Tasarımı & Kurulumu',
                'Hostes & Personel',
                'Otel & Konaklama',
                'Fotoğraf & Video',
                'Devlet Desteği',
              ].map(service => (
                <li key={service}>
                  <Link href="/hizmetler" className="text-sm text-[#666] hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase text-[#999] mb-5">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-[#CB3234] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#666] leading-relaxed">
                  Küçükbakkalköy Mah. Bakırcı Sk.<br />
                  Yusuf Bey Plaza No: 8A<br />
                  Ataşehir / İstanbul
                  <span className="block mt-2">
                    Üniversiteler, 1597. Cd. Bilkent Center<br />
                    AVM No:3/127, Çankaya / Ankara
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#CB3234] flex-shrink-0" />
                <a href="tel:+905439607076" className="text-sm text-[#666] hover:text-white transition-colors">
                  +90 543 960 70 76
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#CB3234] flex-shrink-0" />
                <a href="mailto:info@leyonex.com" className="text-sm text-[#666] hover:text-white transition-colors">
                  info@leyonex.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#555]">
              © 2026 Bukartal Gıda ve Tekstil Dış Ticaret Ltd. Tüm hakları saklıdır.
            </p>
            <p className="text-[10px] text-[#444]">
              MERSİS: 0608-1234-5678-0001
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/gizlilik" className="text-xs text-[#555] hover:text-[#999] transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kvkk" className="text-xs text-[#555] hover:text-[#999] transition-colors">
              KVKK Aydınlatma Metni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
