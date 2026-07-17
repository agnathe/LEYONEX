'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Bus, Utensils } from 'lucide-react';

const PAGE_CSS = `
@font-face {
  font-family: 'TTSupermolot';
  src: url('/fonts/TT Supermolot Neue Trial Expanded Medium.ttf') format('truetype');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

html { scroll-behavior: smooth; }

.ic-wrap {
  font-family: var(--font-space-grotesk, 'Space Grotesk', system-ui, sans-serif);
  background: #F5F5F3;
  color: #4D4D4D;
  -webkit-font-smoothing: antialiased;
}
.ic-tt { font-family: 'TTSupermolot', 'Archivo', sans-serif; font-weight: 500; }

@keyframes icDrift {
  from { transform: translate(0, 0) rotate(0deg); }
  to   { transform: translate(-20px, 14px) rotate(2.5deg); }
}
@keyframes icFadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}

.ic-drift { animation: icDrift 12s ease-in-out infinite alternate; }
.ic-a0 { animation: icFadeUp 700ms cubic-bezier(.2,.6,.2,1)   0ms both; }
.ic-a1 { animation: icFadeUp 700ms cubic-bezier(.2,.6,.2,1) 120ms both; }
.ic-a2 { animation: icFadeUp 700ms cubic-bezier(.2,.6,.2,1) 240ms both; }
.ic-a3 { animation: icFadeUp 700ms cubic-bezier(.2,.6,.2,1) 360ms both; }
.ic-a4 { animation: icFadeUp 700ms cubic-bezier(.2,.6,.2,1) 480ms both; }

.ic-reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 600ms ease, transform 600ms ease;
}
.ic-reveal.ic-vis { opacity: 1; transform: translateY(0); }

/* ── NAV ── */
.ic-nav {
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid #E6E6E6;
  height: 64px; display: flex; align-items: center;
}
.ic-nav-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  width: 100%; display: flex; align-items: center; justify-content: space-between;
}
.ic-nav-eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #767676; }
.ic-logo { font-size: 20px; letter-spacing: 0.06em; color: #0D0D0D; text-decoration: none; }

/* ── BUTTONS ── */
.ic-btn {
  display: inline-block; text-decoration: none;
  font-size: 13px; font-weight: 600; cursor: pointer;
  transition: background-color 150ms, color 150ms, border-color 150ms;
}
.ic-btn-sm  { padding: 10px 20px; }
.ic-btn-lg  { padding: 14px 32px; }
.ic-red     { background: #E31B23; color: white; }
.ic-red:hover { background: #C4141B; }
.ic-white-ol { border: 2px solid white; color: white; }
.ic-white-ol:hover { background: white; color: #0D0D0D; }
.ic-dark-ol  { border: 2px solid #0D0D0D; color: #0D0D0D; }
.ic-dark-ol:hover  { background: #0D0D0D; color: white; }

/* ── LAYOUT HELPERS ── */
.ic-section    { padding: 96px 0; }
.ic-container  { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.ic-redline    { width: 40px; height: 3px; background: #E31B23; margin-bottom: 16px; }
.ic-h2 {
  font-size: 32px; letter-spacing: 0.02em; text-transform: uppercase;
  color: #0D0D0D; margin: 0; line-height: 1.2;
}
.ic-intro { color: #4D4D4D; font-size: 15px; line-height: 1.7; margin-top: 16px; max-width: 640px; }

/* ── HERO ── */
.ic-hero {
  background: #0D0D0D; position: relative; overflow: hidden;
  min-height: 85vh; display: flex; align-items: center;
}
.ic-hero-x {
  position: absolute; top: -80px; right: -60px; z-index: 1;
  font-size: 640px; line-height: 1;
  color: #E31B23; opacity: 0.12;
  user-select: none; pointer-events: none;
}
.ic-hero-content { position: relative; z-index: 2; padding: 96px 0; width: 100%; }
.ic-hero-h1 {
  font-family: 'Space Grotesk', system-ui, sans-serif;
  font-size: clamp(36px, 6vw, 72px);
  font-weight: 600; line-height: 1.08; letter-spacing: 0.01em;
  text-transform: uppercase; color: white; margin: 0 0 32px;
}
.ic-eyebrow { font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #767676; }
.ic-hero-para { color: #A3A3A3; font-size: 15px; line-height: 1.7; max-width: 520px; margin: 0 0 40px; }
.ic-hero-btns { display: flex; gap: 16px; flex-wrap: wrap; margin-bottom: 64px; }

/* Stat strip */
.ic-stat-grid { border: 1px solid #2E2E2E; display: grid; grid-template-columns: repeat(4,1fr); }
.ic-stat-item { padding: 20px 24px; border-right: 1px solid #2E2E2E; }
.ic-stat-item:last-child { border-right: none; }
.ic-stat-label { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: #767676; margin-bottom: 4px; }
.ic-stat-val   { font-size: 13px; font-weight: 500; color: white; }
.ic-stat-red   { color: #E31B23 !important; }

/* ── LOCATION ── */
.ic-loc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; margin-top: 40px; }
.ic-loc-card {
  background: white; border: 1px solid #E6E6E6; padding: 32px;
  transition: border-color 200ms;
}
.ic-loc-card:hover { border-color: #0D0D0D; }
.ic-loc-icon  { color: #4D4D4D; margin-bottom: 20px; }
.ic-loc-title { font-size: 15px; font-weight: 600; color: #0D0D0D; margin: 0 0 12px; }
.ic-loc-desc  { font-size: 14px; color: #4D4D4D; line-height: 1.7; margin: 0; }

/* ── HOTELS ── */
.ic-hotel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 40px; margin-bottom: 24px; }
.ic-hotel-card { background: white; border: 1px solid #E6E6E6; transition: border-color 200ms; }
.ic-hotel-card:hover { border-color: #0D0D0D; }
.ic-hotel-photos { display: grid; grid-template-columns: 1fr 1fr; height: 200px; overflow: hidden; }
.ic-hotel-photos img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.75); display: block; }
.ic-hotel-body    { padding: 24px; }
.ic-hotel-name-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }
.ic-hotel-name    { font-size: 17px; font-weight: 600; color: #0D0D0D; margin: 0; }
.ic-hotel-stars   { color: #E31B23; font-size: 14px; font-weight: 600; }
.ic-hotel-desc    { font-size: 14px; color: #4D4D4D; line-height: 1.7; margin: 0; }

.ic-photo-strip { display: grid; grid-template-columns: repeat(3,1fr); height: 180px; overflow: hidden; margin-bottom: 20px; }
.ic-photo-strip img { width: 100%; height: 100%; object-fit: cover; filter: saturate(0.75); display: block; }
.ic-footnote { font-size: 13px; color: #767676; line-height: 1.6; }

/* ── PRICING ── */
.ic-table-note { font-size: 13px; color: #767676; margin: 16px 0 24px; }
.ic-table-wrap { overflow-x: auto; }
.ic-table {
  width: 100%; border-collapse: collapse; background: white;
  border: 1px solid #E6E6E6; min-width: 480px;
}
.ic-table th {
  background: #0D0D0D; color: #767676;
  font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase;
  font-weight: 500; padding: 16px 20px; text-align: left;
}
.ic-table td { padding: 16px 20px; font-size: 14px; color: #4D4D4D; border-bottom: 1px solid #E6E6E6; }
.ic-table .ic-trow:last-child td { border-bottom: none; }
.ic-table .ic-trow:hover td { background: #F5F5F3; }
.ic-col-total { font-family: 'TTSupermolot','Archivo',sans-serif; font-weight: 500; color: #E31B23 !important; font-size: 15px !important; }

.ic-info-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 32px; }
.ic-info-card { background: white; border: 1px solid #E6E6E6; padding: 24px; }
.ic-info-card-alert { border-top: 3px solid #E31B23; }
.ic-info-title { font-size: 13px; font-weight: 600; color: #0D0D0D; margin: 0 0 8px; }
.ic-info-desc  { font-size: 13px; color: #767676; line-height: 1.6; margin: 0; }

/* ── DARK PAYMENT BLOCK ── */
.ic-dark-block {
  background: #0D0D0D; position: relative; overflow: hidden; padding: 64px;
}
.ic-dark-x {
  position: absolute; bottom: -80px; left: -50px; z-index: 0;
  font-size: 360px; line-height: 1; color: #E31B23; opacity: 0.12;
  user-select: none; pointer-events: none;
}
.ic-payment-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; position: relative; z-index: 1; }
.ic-payment-label { font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: #767676; margin: 0 0 16px; }
.ic-payment-text  { color: #A3A3A3; font-size: 14px; line-height: 1.7; margin: 0; }
.ic-payment-text strong { color: white; font-weight: 600; }

/* ── FINAL CTA ── */
.ic-final-cta { padding: 96px 0; background: #F5F5F3; text-align: center; }
.ic-final-redline { width: 40px; height: 3px; background: #E31B23; margin: 0 auto 16px; }
.ic-final-h2 {
  font-size: 28px; letter-spacing: 0.02em; text-transform: uppercase;
  color: #0D0D0D; margin: 0 0 16px;
}
.ic-final-sub  { font-size: 15px; color: #767676; line-height: 1.6; max-width: 480px; margin: 0 auto 32px; }
.ic-final-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

/* ── FOOTER ── */
.ic-footer { background: #0D0D0D; padding: 40px 0; }
.ic-footer-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 24px;
  display: flex; align-items: flex-start; justify-content: space-between;
  flex-wrap: wrap; gap: 24px;
}
.ic-footer-right    { text-align: right; }
.ic-footer-contact  { font-size: 12px; color: #767676; line-height: 2; }
.ic-footer-contact a { color: #767676; text-decoration: none; transition: color 150ms; }
.ic-footer-contact a:hover { color: white; }
.ic-footer-copy { font-size: 11px; color: #444; margin-top: 8px; }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .ic-hotel-grid  { grid-template-columns: 1fr; }
  .ic-loc-grid    { grid-template-columns: 1fr; }
  .ic-info-grid   { grid-template-columns: 1fr; }
  .ic-payment-grid { grid-template-columns: 1fr; gap: 40px; }
  .ic-dark-block  { padding: 48px 32px; }
}
@media (max-width: 680px) {
  .ic-nav-eyebrow { display: none; }
  .ic-section     { padding: 56px 0; }
  .ic-dark-block  { padding: 40px 20px; }
  .ic-stat-grid   { grid-template-columns: repeat(2,1fr); }
  .ic-stat-item:nth-child(2)  { border-right: none; }
  .ic-stat-item:nth-child(3),
  .ic-stat-item:nth-child(4)  { border-top: 1px solid #2E2E2E; }
  .ic-photo-strip { height: auto; grid-template-columns: 1fr; }
  .ic-photo-strip img { height: 160px; }
  .ic-hotel-photos { height: 150px; }
  .ic-h2 { font-size: 24px; }
  .ic-final-cta { padding: 64px 0; }
  .ic-footer-inner  { flex-direction: column; }
  .ic-footer-right  { text-align: left; }
  .ic-footer-copy   { text-align: left; }
}
`;

const STATS = [
  { label: 'Konaklama',      value: '12–17 Ekim / 5 gece',              red: false },
  { label: 'Kahvaltı',       value: 'Açık Büfe / dahil',                 red: false },
  { label: 'Fuar Transferi', value: '09:00 / 18:15 / günlük, ücretsiz', red: false },
  { label: 'Başlangıç',      value: '86 € / gece — kişi başı, KDV dahil', red: true },
];

const PRICES = [
  { otel: 'Ibis 3★',     tip: 'Single (tek kişilik)',           gecelik: '139 €', toplam: '695 €' },
  { otel: 'Ibis 3★',     tip: 'Twin (çift kişilik, kişi başı)', gecelik: '86 €',  toplam: '430 €' },
  { otel: 'Novotel 4★',  tip: 'Single (tek kişilik)',           gecelik: '185 €', toplam: '925 €' },
  { otel: 'Novotel 4★',  tip: 'Twin (çift kişilik, kişi başı)', gecelik: '111 €', toplam: '555 €' },
];

export default function InterCharm2026() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('ic-vis');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.ic-reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="ic-wrap">
      <style>{PAGE_CSS}</style>

      {/* ── STICKY NAV ── */}
      <nav className="ic-nav">
        <div className="ic-nav-inner">
          <Link href="/" className="ic-logo ic-tt">
            LEYONE<span style={{ color: '#E31B23' }}>X</span>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <span className="ic-nav-eyebrow">INTERCHARM 2026 · MOSKOVA</span>
            <a href="#fiyatlar" className="ic-btn ic-btn-sm ic-red">Fiyatları Gör</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="ic-hero">
        <div className="ic-hero-x ic-tt ic-drift">X</div>
        <div className="ic-container">
          <div className="ic-hero-content">

            <div className="ic-a0" style={{ marginBottom: 32 }}>
              <div className="ic-redline" />
              <span className="ic-eyebrow">OTEL + FUAR TRANSFERİ PAKET TEKLİFİ</span>
            </div>

            <h1 className="ic-hero-h1 ic-a1">
              INTERCHARM 2026<br />MOSKOVA
            </h1>

            <p className="ic-hero-para ic-a2">
              14–17 Ekim 2026 · Crocus Expo Uluslararası Fuar Merkezi. Türk katılımcı ve
              ziyaretçi firmalara özel otel + fuar transferi paketi. Siz yalnızca işinize
              odaklanın; konaklama ve ulaşımı LEYONEX yönetsin.
            </p>

            <div className="ic-hero-btns ic-a3">
              <a href="#fiyatlar" className="ic-btn ic-btn-lg ic-red">
                Paket Fiyatlarını İncele
              </a>
              <a
                href="mailto:burkay@leyonex.com?subject=InterCHARM%202026%20Rezervasyon%20Talebi"
                className="ic-btn ic-btn-lg ic-white-ol"
              >
                Rezervasyon Talebi
              </a>
            </div>

            <div className="ic-stat-grid ic-a4">
              {STATS.map((s, i) => (
                <div key={i} className="ic-stat-item">
                  <div className="ic-stat-label">{s.label}</div>
                  <div className={`ic-stat-val${s.red ? ' ic-stat-red' : ''}`}>{s.value}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── KONUM VE ULAŞIM ── */}
      <section className="ic-section" style={{ background: '#F5F5F3' }}>
        <div className="ic-container">
          <div className="ic-reveal">
            <div className="ic-redline" />
            <h2 className="ic-h2">KONUM VE ULAŞIM</h2>
            <p className="ic-intro">
              Novotel ve Ibis otelleri aynı yapı kompleksinde — Moskova şehir merkezine
              yürüme mesafesinde, elit ve güvenli Kievskaya bölgesinde.
            </p>
          </div>

          <div className="ic-loc-grid">
            {[
              {
                Icon: MapPin,
                title: 'Elit ve güvenli semt',
                desc: 'Şehir merkezine yürüme mesafesinde, Kievskaya bölgesinde güvenli bir noktada. Metro istasyonu otelin tam karşısında — şehrin her noktası dakikalar uzağınızda.',
              },
              {
                Icon: Bus,
                title: 'Kapıdan kapıya fuar transferi',
                desc: 'Fuar günlerinde sabah 09:00’da otelden Crocus Expo’ya, akşam 18:15’te fuardan otele — şehirler arası otobüs konforunda, ücretsiz. Ulaşım planlamasıyla uğraşmazsınız.',
              },
              {
                Icon: Utensils,
                title: 'Moskova rehberi',
                desc: 'Yeme-içme, eğlence, hediye alışverişi ve şehirdeki etkinlikler hakkında detaylı bilgilendirme konaklama süresince ekibimizce paylaşılır.',
              },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="ic-loc-card ic-reveal">
                <div className="ic-loc-icon"><Icon size={22} strokeWidth={1.75} /></div>
                <h3 className="ic-loc-title">{title}</h3>
                <p className="ic-loc-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTEL ALTERNATİFLERİ ── */}
      <section className="ic-section" style={{ background: 'white' }}>
        <div className="ic-container">
          <div className="ic-reveal">
            <div className="ic-redline" />
            <h2 className="ic-h2">OTEL ALTERNATİFLERİ</h2>
          </div>

          <div className="ic-hotel-grid">
            {/* Novotel */}
            <div className="ic-hotel-card ic-reveal">
              <div className="ic-hotel-photos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/novotel-single.png" alt="Novotel tek kişilik oda" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/novotel-twin-room.png" alt="Novotel twin oda" />
              </div>
              <div className="ic-hotel-body">
                <div className="ic-hotel-name-row">
                  <h3 className="ic-hotel-name">Novotel Moscow Kievskaya</h3>
                  <span className="ic-hotel-stars">4★</span>
                </div>
                <p className="ic-hotel-desc">
                  Daha geniş odalar; havuz, fitness merkezi ve sauna kullanımı ücretsiz.
                  Odalarda günlük yenilenen çay-kahve istasyonu.
                </p>
              </div>
            </div>

            {/* Ibis */}
            <div className="ic-hotel-card ic-reveal">
              <div className="ic-hotel-photos">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ibis-single.jpg" alt="Ibis tek kişilik oda" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/ibis-twin.png" alt="Ibis twin oda" />
              </div>
              <div className="ic-hotel-body">
                <div className="ic-hotel-name-row">
                  <h3 className="ic-hotel-name">Ibis Moscow Kievskaya</h3>
                  <span className="ic-hotel-stars">3★</span>
                </div>
                <p className="ic-hotel-desc">
                  Aynı kompleks içinde ekonomik alternatif; kompakt odalar. Havuz, fitness
                  ve sauna kullanımı opsiyoneldir.
                </p>
              </div>
            </div>
          </div>

          {/* Photo strip */}
          <div className="ic-photo-strip ic-reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/novotel-resepsiyon.png" alt="Novotel resepsiyon" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/havuz.png" alt="Havuz ve spa" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/ibis-resepsiyon.png" alt="Ibis resepsiyon" />
          </div>

          <p className="ic-footnote ic-reveal">
            Her iki otelde de tüm odalarda ve genel alanlarda ücretsiz yüksek hızlı
            Wi-Fi ve her katta su istasyonu bulunmaktadır.
          </p>
        </div>
      </section>

      {/* ── PAKET FİYATLARI ── */}
      <section id="fiyatlar" className="ic-section" style={{ background: '#F5F5F3' }}>
        <div className="ic-container">
          <div className="ic-reveal">
            <div className="ic-redline" />
            <h2 className="ic-h2">PAKET FİYATLARI</h2>
          </div>

          <p className="ic-table-note ic-reveal">
            Kişi başı · Kahvaltı + fuar transferi dahil · Fiyatlara KDV dahildir
          </p>

          <div className="ic-table-wrap ic-reveal">
            <table className="ic-table">
              <thead>
                <tr>
                  <th>Otel</th>
                  <th>Oda Tipi</th>
                  <th>Gecelik</th>
                  <th>5 Gece Toplam</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((row, i) => (
                  <tr key={i} className="ic-trow">
                    <td>{row.otel}</td>
                    <td>{row.tip}</td>
                    <td>{row.gecelik}</td>
                    <td className="ic-col-total">{row.toplam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ic-info-grid ic-reveal">
            <div className="ic-info-card">
              <h4 className="ic-info-title">Ibis havuz – spa – fitness</h4>
              <p className="ic-info-desc">
                Kişi başı günlük 18 € — Novotel konaklamalarında ücretsizdir.
              </p>
            </div>
            <div className="ic-info-card">
              <h4 className="ic-info-title">Erken giriş / geç çıkış (18:00&apos;e kadar)</h4>
              <p className="ic-info-desc">
                Bir gecelik oda bedelinin %50&apos;si (oda başına): Ibis single 70 € · Ibis
                twin 86 € · Novotel single 93 € · Novotel twin 111 €
              </p>
            </div>
            <div className="ic-info-card ic-info-card-alert">
              <h4 className="ic-info-title">Twin oda kontenjanı sınırlıdır</h4>
              <p className="ic-info-desc">
                Twin oda tercihlerinizin erken bildirilmesini önemle rica ederiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÖDEME KOLAYLIĞI + TEKLİF GEÇERLİLİĞİ ── */}
      <section style={{ background: '#F5F5F3', paddingBottom: 96 }}>
        <div className="ic-container">
          <div className="ic-dark-block ic-reveal">
            <div className="ic-dark-x ic-tt">X</div>
            <div className="ic-payment-grid">
              <div>
                <p className="ic-payment-label">ÖDEME KOLAYLIĞI</p>
                <p className="ic-payment-text">
                  Rusya&apos;ya yönelik uluslararası ödemelerde yaşanan banka ve kart kısıtlamaları
                  nedeniyle, tüm ödemeler Türkiye&apos;deki şirketimize Euro olarak yapılabilmektedir.
                  Rusya tarafındaki otel ve transfer ödemelerinin tamamı LEYONEX tarafından yönetilir;
                  tarafınıza <strong>tek fatura, tek muhatap</strong> kolaylığı sunulur.
                </p>
              </div>
              <div>
                <p className="ic-payment-label">TEKLİF GEÇERLİLİĞİ</p>
                <p className="ic-payment-text">
                  Bu teklif <strong>24 Temmuz 2026</strong> tarihine kadar geçerlidir. Oda
                  kontenjanları sınırlı olup rezervasyonlar talep sırasına göre
                  kesinleştirilecektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="ic-final-cta ic-reveal">
        <div className="ic-container">
          <div className="ic-final-redline" />
          <h2 className="ic-final-h2">REZERVASYONUNUZU BAŞLATALIM</h2>
          <p className="ic-final-sub">
            Kişi sayınızı ve oda tipi tercihlerinizi iletmeniz halinde rezervasyon
            sürecinizi hemen başlatabiliriz.
          </p>
          <div className="ic-final-btns">
            <a
              href="mailto:burkay@leyonex.com?subject=InterCHARM%202026%20Rezervasyon%20Talebi"
              className="ic-btn ic-btn-lg ic-red"
            >
              E-posta Gönderin
            </a>
            <a href="tel:+905439607076" className="ic-btn ic-btn-lg ic-dark-ol">
              +90 543 960 70 76
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ic-footer">
        <div className="ic-footer-inner">
          <Link href="/" className="ic-logo ic-tt" style={{ color: 'white', fontSize: 20 }}>
            LEYONE<span style={{ color: '#E31B23' }}>X</span>
          </Link>
          <div className="ic-footer-right">
            <div className="ic-footer-contact">
              Burkay KARTAL · Kurucu | Strateji ve Operasyon Direktörü<br />
              <a href="mailto:info@leyonex.com">info@leyonex.com</a>
              {' · '}
              <a href="tel:+905439607076">+90 543 960 70 76</a>
              {' · '}
              <a href="https://leyonex.com">leyonex.com</a>
            </div>
            <div className="ic-footer-copy">
              © 2026 Leyonex Fuarcılık A.Ş. · Ataşehir / İstanbul
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
