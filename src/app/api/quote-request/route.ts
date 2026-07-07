import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: 'Sistem hatası: API key bulunamadı.'
        },
        { status: 500 }
      );
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    // E-posta HTML içeriği
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          h2 { color: #f97316; }
          h3 { color: #1e293b; margin-top: 20px; }
          ul { list-style: none; padding: 0; }
          li { padding: 5px 0; }
          strong { color: #475569; }
        </style>
      </head>
      <body>
        <h2>🎯 Yeni Fuar Organizasyon Talebi</h2>

        <h3>👤 Firma Bilgileri</h3>
        <ul>
          <li><strong>Firma:</strong> ${formData.companyName}</li>
          <li><strong>Yetkili:</strong> ${formData.contactPerson}</li>
          <li><strong>E-posta:</strong> ${formData.email}</li>
          <li><strong>Telefon:</strong> ${formData.phone}</li>
          ${formData.taxNumber ? `<li><strong>Vergi No:</strong> ${formData.taxNumber}</li>` : ''}
        </ul>

        <h3>🎪 Fuar Bilgileri</h3>
        <ul>
          <li><strong>Fuar:</strong> ${formData.fairName}</li>
          <li><strong>Tarih:</strong> ${formData.fairDate}</li>
          <li><strong>Lokasyon:</strong> ${formData.fairLocation}</li>
          ${formData.standSize ? `<li><strong>Stand Alanı:</strong> ${formData.standSize} m²</li>` : ''}
        </ul>

        <h3>🛠️ Seçilen Hizmetler</h3>
        <ul>
          ${formData.standDesign ? `<li>✅ <strong>Stand Tasarımı:</strong> ${formData.standTypes?.join(', ') || 'Belirtilmedi'}</li>` : ''}
          ${formData.hostesService ? `<li>✅ <strong>Hostes & Personel:</strong> ${formData.hostesCount || '-'} kişi, Diller: ${formData.hostesLanguages?.join(', ') || '-'}</li>` : ''}
          ${formData.accommodationService ? `<li>✅ <strong>Konaklama:</strong> ${formData.accommodationParticipants || '-'} kişi, ${formData.accommodationDuration || '-'}</li>` : ''}
          ${formData.cateringService ? `<li>✅ <strong>İkram Hizmetleri:</strong> ${formData.cateringTypes?.join(', ') || '-'}</li>` : ''}
          ${formData.photographyService ? `<li>✅ <strong>Fotoğraf & Video:</strong> ${formData.photographyTypes?.join(', ') || '-'}</li>` : ''}
          ${formData.transportationService ? `<li>✅ <strong>Ulaşım:</strong> ${formData.transportationTypes?.join(', ') || '-'}</li>` : ''}
          ${formData.giftService ? `<li>✅ <strong>Kurumsal Hediye:</strong> ${formData.giftQuantity || '-'} adet</li>` : ''}
          ${formData.galaService ? `<li>✅ <strong>Gala & Etkinlik:</strong> ${formData.galaType || '-'}, ${formData.galaParticipants || '-'} kişi</li>` : ''}
          ${formData.consultingService ? `<li>✅ <strong>Danışmanlık:</strong> ${formData.consultingTypes?.join(', ') || '-'}</li>` : ''}
        </ul>

        ${formData.budget ? `<h3>💰 Bütçe</h3><p>${formData.budget}</p>` : ''}

        ${formData.generalNotes ? `<h3>📝 Notlar</h3><p style="white-space: pre-wrap;">${formData.generalNotes}</p>` : ''}

        <hr style="margin: 30px 0; border: none; border-top: 2px solid #e2e8f0;">
        <p style="color: #64748b; font-size: 12px;">
          Bu e-posta www.leyonex.com teklif formundan otomatik olarak gönderilmiştir.
        </p>
      </body>
      </html>
    `;

    // E-posta gönder - TEST MODUNDA SADECE SENİN E-POSTANA GİDECEK
    const { data, error } = await resend.emails.send({
      from: 'Leyonex Teklif Sistemi <onboarding@resend.dev>',
      to: ['burkay@leyonex.com'],
      replyTo: formData.email,
      subject: `Yeni Teklif: ${formData.companyName} - ${formData.fairName}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          success: false,
          message: `E-posta gönderilemedi: ${error.message}`
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Talebiniz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
      emailId: data?.id
    });

  } catch (error: any) {
    console.error('Quote request error:', error);
    return NextResponse.json(
      {
        success: false,
        message: `Sistem hatası: ${error.message}`
      },
      { status: 500 }
    );
  }
}
