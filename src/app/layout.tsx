import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { trTR } from '@clerk/localizations';
import Script from 'next/script';
import GoogleTranslate from '@/components/GoogleTranslate';
import CookieConsent from '@/components/CookieConsent';
import "./globals.css";

const GA_ID = 'G-QMY8Q632RB';
const LI_PARTNER_ID = '9775924';
const CLARITY_ID = 'y13co04nmg';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://leyonex.com'),
  title: {
    template: '%s | LEYONEX',
    default: 'LEYONEX — Fuar Yönetimi ve Organizasyon Hizmetleri',
  },
  description:
    'Fuar stratejisinden stand tasarımına, saha operasyonundan raporlamaya — ' +
    'LEYONEX fuar sürecinizi uçtan uca yönetir. ' +
    'İstanbul merkezli, 10+ yıl sektör deneyimi.',
  keywords: [
    'fuar yönetimi', 'fuar organizasyonu', 'stand tasarımı', 'fuar danışmanlığı',
    'yurtdışı fuar', 'fuar operasyonu', 'exhibition management turkey',
    'fuar teşvik danışmanlığı', 'LEYONEX',
  ],
  authors: [{ name: 'Burkay Kartal', url: 'https://leyonex.com/hakkimizda' }],
  creator: 'LEYONEX Fuarcılık',
  publisher: 'LEYONEX Fuarcılık',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://leyonex.com',
    siteName: 'LEYONEX',
    title: 'LEYONEX — Fuar Yönetimi ve Organizasyon Hizmetleri',
    description:
      'Fuar stratejisinden stand tasarımına, saha operasyonundan raporlamaya — ' +
      'LEYONEX fuar sürecinizi uçtan uca yönetir.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEYONEX — Fuar Yönetimi',
    description: 'Fuar sürecinizi uçtan uca yöneten ortağınız.',
  },
  alternates: {
    canonical: 'https://leyonex.com',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'LEYONEX Fuarcılık',
  url: 'https://leyonex.com',
  logo: 'https://leyonex.com/logo.png',
  description:
    'Fuar stratejisi, stand tasarımı, saha operasyonu ve raporlama hizmetleriyle ' +
    'B2B fuarlarınızı uçtan uca yöneten İstanbul merkezli fuar yönetim şirketi.',
  foundingDate: '2014',
  founder: { '@type': 'Person', name: 'Burkay Kartal' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90-543-960-70-76',
    email: 'info@leyonex.com',
    contactType: 'customer service',
    availableLanguage: ['Turkish', 'English'],
  },
  areaServed: ['TR', 'DE', 'RU', 'IT', 'AE'],
  sameAs: ['https://www.linkedin.com/company/leyonex'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={trTR}>
      <html lang="tr">
        <body className={poppins.className}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
          />
          {/* Consent Mode v2 — varsayılan reddet, kullanıcı onayına kadar GA4 veri toplamaz */}
          <Script id="consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                functionality_cookie: 'denied',
                wait_for_update: 2000
              });
            `}
          </Script>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
          {/* Microsoft Clarity — sadece önceki oturumda onay verildiyse yüklenir */}
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function() {
                try {
                  if (localStorage.getItem('leyonex-cookie-consent') !== 'granted') return;
                  (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                  })(window,document,"clarity","script","${CLARITY_ID}");
                } catch(e){}
              })();
            `}
          </Script>
          {/* LinkedIn Insight Tag — sadece önceki oturumda onay verildiyse yüklenir */}
          <Script id="linkedin-insight" strategy="afterInteractive">
            {`
              (function() {
                try {
                  if (localStorage.getItem('leyonex-cookie-consent') !== 'granted') return;
                  window._linkedin_partner_id = "${LI_PARTNER_ID}";
                  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                  window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
                  (function(l){
                    if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[];}
                    var s=document.createElement('script');s.type='text/javascript';s.async=true;
                    s.src='https://snap.licdn.com/li.lms-analytics/insight.min.js';
                    var b=document.getElementsByTagName('script')[0];
                    b.parentNode.insertBefore(s,b);
                  })(window.lintrk);
                } catch(e){}
              })();
            `}
          </Script>
          <GoogleTranslate />
          {children}
          <CookieConsent />
        </body>
      </html>
    </ClerkProvider>
  );
}
