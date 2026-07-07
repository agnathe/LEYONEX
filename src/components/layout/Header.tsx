'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth, UserButton } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState<'tr' | 'en'>('tr');
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cookies = document.cookie.split(';');
    const googtrans = cookies.find(c => c.trim().startsWith('googtrans='));
    if (googtrans) {
      const lang = googtrans.split('/')[2];
      if (lang === 'en') setCurrentLang('en');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'tr' ? 'en' : 'tr';
    document.cookie = `googtrans=/tr/${newLang}; path=/; max-age=31536000`;
    document.cookie = `googtrans=/tr/${newLang}; domain=.leyonex.com; path=/; max-age=31536000`;
    setCurrentLang(newLang);
    window.location.reload();
  };

  const navLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/hakkimizda', label: 'Hakkımızda' },
    { href: '/hizmetler', label: 'Hizmetler' },
    { href: '/fuarlar', label: 'Fuar Takvimi' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-[#E5E5E3]' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="text-2xl tracking-tight text-[#1a1a1a]"
              style={{ fontFamily: "'TTSupermolot', sans-serif", fontWeight: 500 }}
            >
              LEYONE<span className="text-[#CB3234]">X</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#555] hover:text-[#CB3234] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* TR/EN Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 border border-[#E5E5E3] rounded-full px-3 py-1.5 text-xs font-semibold text-[#1a1a1a] hover:border-[#CB3234] transition-colors"
              aria-label="Dil değiştir"
            >
              <span className={currentLang === 'tr' ? 'text-[#CB3234]' : 'text-[#999]'}>TR</span>
              <span className="text-[#ccc]">|</span>
              <span className={currentLang === 'en' ? 'text-[#CB3234]' : 'text-[#999]'}>EN</span>
            </button>

            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/uye/dashboard"
                  className="text-sm font-medium text-[#555] hover:text-[#CB3234] transition-colors"
                >
                  Dashboard
                </Link>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link
                href="/teklif-al"
                className="bg-[#CB3234] text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-[#A8282A] transition-colors"
              >
                Teklif Alın
              </Link>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1a1a1a]"
            aria-label="Menü"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-[#E5E5E3] py-4 space-y-1 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-2.5 text-sm font-medium text-[#555] hover:text-[#CB3234] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 mt-3 border-t border-[#E5E5E3] flex items-center justify-between px-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 border border-[#E5E5E3] rounded-full px-3 py-1.5 text-xs font-semibold"
              >
                <span className={currentLang === 'tr' ? 'text-[#CB3234]' : 'text-[#999]'}>TR</span>
                <span className="text-[#ccc]">|</span>
                <span className={currentLang === 'en' ? 'text-[#CB3234]' : 'text-[#999]'}>EN</span>
              </button>

              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Link
                  href="/teklif-al"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#CB3234] text-white text-sm font-semibold px-4 py-2 rounded-md"
                >
                  Teklif Alın
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
