import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs';
import { trTR } from '@clerk/localizations';
import Script from 'next/script';
import GoogleTranslate from '@/components/GoogleTranslate';
import CookieConsent from '@/components/CookieConsent';
import "./globals.css";

const GA_ID = 'G-QMY8Q632RB';

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
          <GoogleTranslate />
          {children}
          <CookieConsent />
        </body>
      </html>
    </ClerkProvider>
  );
}
