import { Space_Grotesk } from 'next/font/google';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'InterCHARM 2026 Moskova | Otel + Fuar Transferi Paketi — LEYONEX',
  description:
    "InterCHARM 2026 Moskova için Türk firmalara özel otel + fuar transferi paketi. 5 gece konaklama, kahvaltı ve günlük Crocus Expo transferi dahil. Kişi başı 430 €'dan başlayan fiyatlarla.",
};

export default function IntercharmLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={spaceGrotesk.variable}
      style={{ fontFamily: "var(--font-space-grotesk, 'Space Grotesk', system-ui, sans-serif)" }}
    >
      {children}
    </div>
  );
}
