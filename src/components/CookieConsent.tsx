'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const CONSENT_KEY = 'leyonex-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      setVisible(true);
    } else if (stored === 'granted' && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        functionality_cookie: 'granted',
      });
    }
  }, []);

  const respond = (decision: 'granted' | 'denied') => {
    localStorage.setItem(CONSENT_KEY, decision);
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: decision,
        functionality_cookie: decision,
      });
    }
    if (decision === 'granted' && typeof window !== 'undefined') {
      // Microsoft Clarity — ilk kez onay verildiğinde anlık yükle
      if (!(window as any).clarity) {
        (function(c: any, l: any, a: string, r: string, i: string) {
          c[a] = c[a] || function(...args: unknown[]) { (c[a].q = c[a].q || []).push(args); };
          const t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
          const y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', 'y13co04nmg');
      }
      // LinkedIn Insight Tag — ilk kez onay verildiğinde anlık yükle
      (window as any)._linkedin_partner_id = '9775924';
      (window as any)._linkedin_data_partner_ids = (window as any)._linkedin_data_partner_ids || [];
      (window as any)._linkedin_data_partner_ids.push('9775924');
      if (!(window as any).lintrk) {
        (window as any).lintrk = function(a: unknown, b: unknown) {
          ((window as any).lintrk as { q: unknown[] }).q.push([a, b]);
        };
        (window as any).lintrk.q = [];
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
        const b = document.getElementsByTagName('script')[0];
        b.parentNode!.insertBefore(s, b);
      }
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#CB3234] shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="container mx-auto px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold text-[#1a1a1a] mb-1">Çerez Politikası</p>
          <p className="text-xs text-[#666] leading-relaxed">
            Ziyaret istatistiklerini analiz etmek amacıyla Google Analytics çerezi kullanıyoruz.
            KVKK kapsamında analitik çerezleri ancak onayınızla etkinleştirilebilir.{' '}
            <Link href="/iletisim" className="underline hover:text-[#CB3234] transition-colors">
              Daha fazla bilgi
            </Link>
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => respond('denied')}
            className="px-4 py-2 text-xs font-bold border border-[#C8C8C6] text-[#555] hover:bg-[#F8F8F6] transition-colors"
          >
            Reddet
          </button>
          <button
            onClick={() => respond('granted')}
            className="px-5 py-2 text-xs font-bold bg-[#CB3234] text-white hover:bg-[#A8282A] transition-colors"
          >
            Kabul Et
          </button>
        </div>
      </div>
    </div>
  );
}
