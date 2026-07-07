'use client';

import { useEffect, useState } from 'react';

const VIDEOS = {
  tr: 'L9JHz3ZK1HE',
  en: '0PK3CMghxfQ',
};

function getLangFromCookie(): 'tr' | 'en' {
  if (typeof document === 'undefined') return 'tr';
  const match = document.cookie.match(/googtrans=([^;]+)/);
  if (match && decodeURIComponent(match[1]).endsWith('/en')) return 'en';
  return 'tr';
}

export default function AboutVideo() {
  const [videoId, setVideoId] = useState(VIDEOS.tr);

  useEffect(() => {
    setVideoId(VIDEOS[getLangFromCookie()]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-12 rounded-xl overflow-hidden shadow-[0_8px_48px_rgba(0,0,0,0.12)]">
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          key={videoId}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="Leyonex Hakkımızda"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
