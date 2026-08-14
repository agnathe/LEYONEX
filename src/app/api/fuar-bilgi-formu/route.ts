import { NextRequest, NextResponse } from 'next/server';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

function row(label: string, value: string | undefined) {
  if (!value) return '';
  return `
    <tr>
      <td style="padding:8px 12px;font-size:13px;color:#555;font-weight:600;width:220px;background:#fafafa;border-bottom:1px solid #e8e8e8;white-space:nowrap">${label}</td>
      <td style="padding:8px 12px;font-size:13px;color:#1a1a1a;border-bottom:1px solid #e8e8e8">${value}</td>
    </tr>`;
}

function section(title: string, rows: string) {
  if (!rows.trim()) return '';
  return `
    <tr>
      <td colspan="2" style="padding:14px 12px 8px;font-size:11px;font-weight:700;letter-spacing:0.15em;color:#CB3234;background:#fff3f3;border-bottom:2px solid #CB3234">
        ${title}
      </td>
    </tr>
    ${rows}`;
}

export async function POST(request: NextRequest) {
  try {
    const fd = await request.formData();

    const get = (key: string) => String(fd.get(key) ?? '').trim();
    const getAll = (key: string) => fd.getAll(key).filter(v => typeof v === 'string' && (v as string).trim()).map(String);

    // Dosya eki
    const files = fd.getAll('ekler') as File[];
    const validFiles = files.filter(f => f && f.size > 0);
    const totalSize = validFiles.reduce((s, f) => s + f.size, 0);

    if (totalSize > MAX_FILE_SIZE) {
      return NextResponse.json(
        { success: false, message: 'Toplam dosya boyutu 10 MB sınırını aşıyor.' },
        { status: 400 }
      );
    }

    const attachments = await Promise.all(
      validFiles.map(async (f) => ({
        filename: f.name,
        content: Buffer.from(await f.arrayBuffer()),
      }))
    );

    // Yüzde alanları
    const amacFields: [string, string][] = [
      ['amac_yeniMusteri', 'Yeni müşteri / ihracat'],
      ['amac_bayi', 'Bayi / distribütör'],
      ['amac_lansman', 'Ürün / teknoloji lansmanı'],
      ['amac_marka', 'Marka bilinirliği'],
      ['amac_mevcut', 'Mevcut müşteri ilişkileri'],
      ['amac_analiz', 'Pazar ve rakip analizi'],
    ];
    const pazarFields: [string, string][] = [
      ['pazar_tr', 'Türkiye'], ['pazar_avrupa', 'Avrupa'],
      ['pazar_ortadogu', 'Orta Doğu ve Körfez'], ['pazar_afrika', 'Kuzey Afrika'],
      ['pazar_amerika', 'Amerika'], ['pazar_asya', 'Asya-Pasifik'], ['pazar_bdt', 'BDT ülkeleri'],
    ];
    const shtFields: [string, string][] = [
      ['iht_toplanti', 'Kapalı toplantı odası'], ['iht_banko', 'Karşılama bankosu'],
      ['iht_depo', 'Depo'], ['iht_mutfak', 'Mutfak / ikram alanı'],
      ['iht_vitrin', 'Ürün sergileme rafı / vitrin'], ['iht_ekran', 'LED ekran / TV'],
      ['iht_sunum', 'Sunum / demo alanı'], ['iht_bar', 'Bar / ağırlama alanı'],
      ['iht_ciftkat', 'Çift kat'],
    ];

    const amacLines = amacFields
      .map(([k, l]) => { const v = get(k); return v ? `${l}: %${v}` : ''; })
      .filter(Boolean).join('<br>');
    const pazarLines = pazarFields
      .map(([k, l]) => { const v = get(k); return v ? `${l}: %${v}` : ''; })
      .filter(Boolean).join('<br>');

    const mustLines = shtFields.filter(([k]) => get(k) === 'Olmazsa olmaz').map(([, l]) => l).join(', ');
    const niceLines = shtFields.filter(([k]) => get(k) === 'Olsa iyi olur').map(([, l]) => l).join(', ');

    const kapsam = getAll('kapsam').join(', ');

    const emailHtml = `<!DOCTYPE html>
<html lang="tr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f3;font-family:Arial,sans-serif">
<div style="max-width:680px;margin:32px auto;background:#fff;border:1px solid #e0e0e0">

  <!-- Header -->
  <div style="background:#1a1a1a;padding:28px 32px">
    <div style="font-size:22px;font-weight:700;color:#fff;letter-spacing:0.04em">LEYONEX</div>
    <div style="font-size:11px;color:#aaa;letter-spacing:0.18em;margin-top:4px">FUAR BİLGİ FORMU — EXHIBITION BRIEF</div>
  </div>

  <!-- Tablo -->
  <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">

    ${section('01 · İLETİŞİM BİLGİLERİ', [
      row('Ad Soyad', [get('ad'), get('soyad')].filter(Boolean).join(' ')),
      row('Firma', get('firma')),
      row('Unvan', get('unvan')),
      row('E-posta', get('eposta')),
      row('Telefon', get('telefon')),
      row('Web sitesi', get('web')),
    ].join(''))}

    ${section('02 · FUAR VE STAND', [
      row('Fuar adı', get('fuar')),
      row('Şehir / Ülke', get('sehir')),
      row('Tarihler', get('tarih')),
      row('Stand alanı (m²)', get('alan')),
      row('Hol / Stand no', get('standNo')),
      row('Stand tipi', get('standTipi')),
    ].join(''))}

    ${section('03 · AMAÇ VE HEDEF KİTLE', [
      row('Katılım amacı dağılımı', amacLines),
      row('Hedef pazar dağılımı', pazarLines),
      row('Müşteri profili', get('musteriProfili')),
      row('Sergilenecek ürünler', get('urunler')),
      row('Öne çıkarılacaklar', get('oneCikan')),
    ].join(''))}

    ${section('04 · MARKA', [
      row('Ayırt edici özellik 1', get('fark1')),
      row('Ayırt edici özellik 2', get('fark2')),
      row('Ayırt edici özellik 3', get('fark3')),
      row('Logo / kurumsal kimlik', get('kimlik')),
    ].join(''))}

    ${section('05 · PLANLAR, GÖRSELLER, ÖNCEKİ DENEYİM', [
      row('Mevcut stand planı', get('standPlani')),
      row('Önceki stand görselleri', get('eskiStand')),
      row('Beğenilen örnekler', get('referans')),
      row('Memnun kalınan konular', get('memnun')),
      row('Memnun kalınmayan konular', get('memnunsuz')),
    ].join(''))}

    ${section('06 · STAND İHTİYAÇLARI', [
      row('Olmazsa olmaz', mustLines),
      row('Olsa iyi olur', niceLines),
      row('Diğer ihtiyaç', get('ihtiyacDiger')),
    ].join(''))}

    ${section('07 · KAPSAM VE SONRAKİ ADIM', [
      row('Beklenen kapsam', kapsam),
      row('Olmazsa olmazlar', get('olmazsaOlmaz')),
      row('Olsa iyi olur', get('olsaIyiOlur')),
      row('Bir sonraki görüşme', get('gorusme')),
      row('Tercih edilen tarih/saat', get('gorusmeZaman')),
      row('Karar tarihi', get('karar')),
    ].join(''))}

  </table>

  ${attachments.length > 0 ? `
  <div style="padding:16px 32px;background:#fffbf0;border-top:1px solid #e0e0e0;font-size:13px;color:#555">
    <strong>Ek dosya(lar):</strong> ${attachments.map(a => a.filename).join(', ')}
  </div>` : ''}

  <!-- Footer -->
  <div style="padding:20px 32px;background:#f5f5f3;border-top:1px solid #e0e0e0">
    <div style="font-size:11px;color:#999;letter-spacing:0.06em">www.leyonex.com — Fuar Bilgi Formu</div>
  </div>

</div>
</body>
</html>`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, message: 'Sistem hatası: API key bulunamadı.' }, { status: 500 });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const firma = get('firma');
    const fuar = get('fuar');
    const eposta = get('eposta');

    const { error } = await resend.emails.send({
      from: 'Leyonex <noreply@crema.leyonex.com>',
      to: ['burkay@leyonex.com'],
      replyTo: eposta,
      subject: `Fuar Bilgi Formu: ${firma}${fuar ? ` — ${fuar}` : ''}`,
      html: emailHtml,
      attachments,
    });

    if (error) {
      console.error('RESEND_FULL_ERROR:', JSON.stringify(error));
      return NextResponse.json({ success: false, message: 'E-posta gönderilemedi.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Bilinmeyen hata';
    console.error('Fuar bilgi formu error:', message);
    return NextResponse.json({ success: false, message: `Sistem hatası: ${message}` }, { status: 500 });
  }
}
