import { getAllServices } from '@/lib/data';
import { coreBenefits, serviceGroups, servicesFaq } from '@/data/services';

// llms.txt: hizmet verisinden üretilir; hizmetler değiştiğinde kendiliğinden güncel kalır.
export const dynamic = 'force-static';

const BASE = 'https://leyonex.com';

export function GET() {
  const services = getAllServices();
  const lines: string[] = [
    '# LEYONEX — A’dan Z’ye Fuar Süreç Yönetimi',
    '',
    '> LEYONEX, firmaların yurt içi ve yurt dışı fuar katılım süreçlerini stratejiden stant tasarımına, davetten saha operasyonuna ve fuar sonrası değerlendirmeye kadar tek merkezden planlayan ve koordine eden fuar süreç yönetimi firmasıdır. Operasyon yönetimi bu sürecin yalnızca bir parçasıdır. LEYONEX firmayla partner olarak çalışır. Merkez: İstanbul (Ataşehir), şube: Ankara (Çankaya). Kurucu: Burkay Kartal. İletişim: info@leyonex.com / +90 543 960 70 76.',
    '',
    '## Firmalara sunulan üç fayda',
    '',
    ...coreBenefits.map((b) => `- **${b.title}**: ${b.text}`),
    '',
    '## Hizmetler',
    '',
  ];
  for (const group of serviceGroups) {
    lines.push(`### ${group.title}`, '', group.summary, '');
    for (const s of services.filter((x) => x.group === group.id)) {
      const free = s.free ? ' (Birlikte çalışılan firmalara ücretsiz.)' : '';
      lines.push(`- [${s.title.tr}](${BASE}/hizmetler/${s.slug}): ${s.shortDescription.tr}${free}`);
    }
    lines.push('');
  }
  lines.push(
    '## Sıkça sorulanlar',
    '',
    ...servicesFaq.flatMap((f) => [`**${f.question}**`, f.answer, '']),
    '## Öne çıkan sayfalar',
    '',
    `- Ana sayfa: ${BASE}/`,
    `- Hizmetler: ${BASE}/hizmetler`,
    `- Projeler: ${BASE}/projeler`,
    `- Fuar takvimi: ${BASE}/fuarlar`,
    `- Hakkımızda: ${BASE}/hakkimizda`,
    `- Teklif al: ${BASE}/teklif-al`,
    ''
  );
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
