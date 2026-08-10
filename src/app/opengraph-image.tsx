import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'LEYONEX — Fuar Yönetimi ve Organizasyon Hizmetleri';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top accent */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '40px', height: '4px', background: '#CB3234' }} />
          <span
            style={{
              color: '#CB3234',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Fuar Yönetimi ve Organizasyonu
          </span>
        </div>

        {/* Main wordmark + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '96px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-3px',
              lineHeight: 1,
              display: 'flex',
            }}
          >
            LEYONE
            <span style={{ color: '#CB3234' }}>X</span>
          </div>
          <div
            style={{
              fontSize: '26px',
              color: '#999',
              fontWeight: 400,
              maxWidth: '680px',
              lineHeight: 1.45,
            }}
          >
            Fuar stratejisinden stand tasarımına, saha operasyonundan raporlamaya — uçtan uca fuar yönetimi
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ color: '#555', fontSize: '16px', fontWeight: 500 }}>
            leyonex.com
          </span>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['Stand Tasarımı', 'Fuar Danışmanlığı', 'Devlet Teşviki', 'Lojistik'].map((tag) => (
              <div
                key={tag}
                style={{
                  background: '#2a2a2a',
                  color: '#888',
                  fontSize: '13px',
                  fontWeight: 500,
                  padding: '8px 16px',
                  borderRadius: '2px',
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
