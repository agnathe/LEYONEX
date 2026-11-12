import { NextRequest, NextResponse } from 'next/server';
import { velora } from '@/data/velora';

// Velora yarışması ön kayıt formu. Kayıt bir bildirim e-postası olarak ekibe gider; katılımcıya da
// yarışma özetini içeren bir onay e-postası gönderilir. Ön kayıt katılım şartı değildir.

const BOLUMLER = ['Mimarlık', 'Endüstriyel Tasarım', 'Diğer'];
const SINIFLAR = ['1. sınıf', '2. sınıf', '3. sınıf', '4. sınıf', 'Yüksek lisans / doktora', 'Mezun'];
const MEZUNIYET_YILLARI = [
  ...Array.from({ length: 2026 - 2010 + 1 }, (_, i) => String(2026 - i)),
  '2009 veya önce',
];
const KATILIM = ['Bireysel', '2 kişilik ekip'];
const KAYNAKLAR = ['Afiş / QR kod', 'Hoca veya bölüm duyurusu', 'Arkadaş', 'Sosyal medya', 'Diğer'];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

function row(label: string, raw: string) {
  if (!raw) return '';
  return `
    <tr>
      <td style="padding:8px 12px;font-size:13px;color:#555;font-weight:600;width:180px;background:#fafafa;border-bottom:1px solid #e8e8e8">${label}</td>
      <td style="padding:8px 12px;font-size:13px;color:#1a1a1a;border-bottom:1px solid #e8e8e8">${escapeHtml(raw)}</td>
    </tr>`;
}

const shell = (title: string, body: string) => `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f3;font-family:Arial,sans-serif">
<div style="max-width:620px;margin:32px auto;background:#fff;border:1px solid #e0e0e0">
  <div style="background:#1a1a1a;padding:24px 28px">
    <div style="font-size:22px;font-weight:700;color:#fff;letter-spacing:0.04em">LEYONEX</div>
    <div style="font-size:11px;color:#aaa;letter-spacing:0.18em;margin-top:4px">${title}</div>
  </div>
  ${body}
</div>
</body>
</html>`;

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
    if (!body) {
      return NextResponse.json({ success: false, message: 'Geçersiz istek.' }, { status: 400 });
    }
    const get = (k: string) => (typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, 200) : '');

    // Bot tuzağı: görünmeyen alan doluysa kayıt sessizce yok sayılır.
    if (get('website')) return NextResponse.json({ success: true });

    const adSoyad = get('adSoyad');
    const eposta = get('eposta');
    const bolum = get('bolum');
    const sinif = get('sinif');
    const mezuniyetYili = sinif === 'Mezun' ? get('mezuniyetYili') : '';
    const katilim = get('katilim');
    const ekipArkadasi = katilim === '2 kişilik ekip' ? get('ekipArkadasi') : '';
    const kaynak = get('kaynak');
    const onay = body.onay === true;

    if (!adSoyad || !eposta || !BOLUMLER.includes(bolum) || !SINIFLAR.includes(sinif) || !KATILIM.includes(katilim)) {
      return NextResponse.json({ success: false, message: 'Lütfen zorunlu alanları doldurun.' }, { status: 400 });
    }
    if (sinif === 'Mezun' && !MEZUNIYET_YILLARI.includes(mezuniyetYili)) {
      return NextResponse.json({ success: false, message: 'Lütfen mezuniyet yılınızı seçin.' }, { status: 400 });
    }
    if (!EMAIL.test(eposta)) {
      return NextResponse.json({ success: false, message: 'E-posta adresi geçerli görünmüyor.' }, { status: 400 });
    }
    if (kaynak && !KAYNAKLAR.includes(kaynak)) {
      return NextResponse.json({ success: false, message: 'Geçersiz seçim.' }, { status: 400 });
    }
    if (!onay) {
      return NextResponse.json({ success: false, message: 'Devam etmek için onay kutusunu işaretleyin.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, message: 'Sistem hatası.' }, { status: 500 });
    }
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const zaman = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });

    const ekipHtml = shell(
      'VELORA ÖN KAYIT',
      `<table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
        ${row('Ad soyad', adSoyad)}
        ${row('E-posta', eposta)}
        ${row('Bölüm', bolum)}
        ${row('Sınıf', sinif)}
        ${row('Mezuniyet yılı', mezuniyetYili)}
        ${row('Katılım', katilim)}
        ${row('Ekip arkadaşı', ekipArkadasi)}
        ${row('Nereden duydu', kaynak)}
        ${row('Kayıt zamanı', zaman)}
      </table>
      <div style="padding:16px 28px;background:#f5f5f3;border-top:1px solid #e0e0e0;font-size:11px;color:#999">
        www.leyonex.com/velora · Ön kayıt formu
      </div>`
    );

    const { error } = await resend.emails.send({
      from: 'Leyonex <noreply@crema.leyonex.com>',
      to: ['burkay@leyonex.com'],
      replyTo: eposta,
      subject: `Velora ön kayıt: ${adSoyad} (${bolum}, ${mezuniyetYili ? `${mezuniyetYili} mezunu` : sinif})`,
      html: ekipHtml,
    });
    if (error) {
      console.error('VELORA_ON_KAYIT_RESEND_ERROR:', JSON.stringify(error));
      return NextResponse.json({ success: false, message: 'Kayıt iletilemedi.' }, { status: 500 });
    }

    // Katılımcıya onay e-postası. Başarısız olsa da kayıt ekibe ulaştığı için hata döndürülmez.
    const ilkAd = escapeHtml(adSoyad.split(/\s+/)[0]);
    const katilimciHtml = shell(
      'VELORA STANT TASARIM YARIŞMASI',
      `<div style="padding:24px 28px;font-size:15px;line-height:1.6;color:#2d2d2d">
        <p style="margin:0 0 14px">Merhaba ${ilkAd},</p>
        <p style="margin:0 0 14px">Velora Stant Tasarım Yarışması için ön kaydınız bize ulaştı. Ön kayıt katılım şartı değildir; bu yalnızca katılmayı düşündüğünüzü bilmemizi sağlar.</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:18px 0">
          ${row('Son teslim', velora.deadline)}
          ${row('Teslim', `${velora.submissionFormat}: ${velora.renderCount} render + en fazla ${velora.characterLimit} karakter açıklama`)}
          ${row('Teslim adresi', velora.email)}
          ${row('Sonuçlar', velora.resultsDate)}
        </table>
        <p style="margin:0 0 14px">Yarışmanın tüm ayrıntıları ve kaynak dosyalar: <a href="${velora.url}" style="color:#E31B23">${velora.url.replace('https://', '')}</a></p>
        <p style="margin:0">Sorularınızı bu e-postayı yanıtlayarak ya da ${velora.email} adresine yazarak iletebilirsiniz (en fazla ${velora.questionLimit} soru). Ön kayıt e-postası soru hakkınızdan sayılmaz.</p>
      </div>`
    );
    const confirm = await resend.emails.send({
      from: 'Leyonex <noreply@crema.leyonex.com>',
      to: [eposta],
      replyTo: velora.email,
      subject: 'Velora yarışması ön kaydınız alındı',
      html: katilimciHtml,
    });
    if (confirm.error) console.error('VELORA_ON_KAYIT_CONFIRM_ERROR:', JSON.stringify(confirm.error));

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error('Velora ön kayıt error:', err instanceof Error ? err.message : err);
    return NextResponse.json({ success: false, message: 'Sistem hatası.' }, { status: 500 });
  }
}
