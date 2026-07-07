'use client';

import { useEffect, useState } from 'react';

function getLangFromCookie(): 'tr' | 'en' {
  if (typeof document === 'undefined') return 'tr';
  const match = document.cookie.match(/googtrans=([^;]+)/);
  if (match) {
    const val = decodeURIComponent(match[1]); // e.g. "/tr/en"
    if (val.endsWith('/en')) return 'en';
  }
  return 'tr';
}

export default function AboutVideo() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  useEffect(() => {
    setLang(getLangFromCookie());
  }, []);

  const src = lang === 'en' ? '/about-leyonex.mp4' : '/leyonex-hakkinizda.mp4';

  return (
    <div className="max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.12)]">
      <video
        key={src}
        controls
        preload="metadata"
        className="w-full aspect-video object-cover bg-[#111]"
      >
        <source src={src} type="video/mp4" />
        Tarayıcınız video oynatmayı desteklemiyor.
      </video>
    </div>
  );
}
