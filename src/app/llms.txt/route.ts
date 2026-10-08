import { getAllServices } from '@/lib/data';
import { coreBenefits, phaseInfo, servicesFaq, type ServicePhase } from '@/data/services';

// llms.txt: hizmet verisinden üretilir; hizmetler değiştiğinde kendiliğinden güncel kalır.
export const dynamic = 'force-static';

const BASE = 'https://leyonex.com';
const phases: ServicePhase[] = ['fuar-oncesi', 'fuar-zamani', 'fuar-sonrasi'];

export function GET() {
  const services = getAllServices();
  const lines: string[] = [
    '# LEYONEX — A’dan Z’ye Fuar Süreç Yönetimi',
    '',
    '> LEYONEX, firmaların yurt içi ve yurt dışı fuar katılım süreçlerini stratejiden stant tasarımına, davetten saha operasyonuna ve fuar sonrası gelişim raporuna kadar tek merkezden yöneten fuar süreç yönetimi firmasıdır. Operasyon yönetimi bu sürecin yalnızca bir parçasıdır. LEYONEX firmayla partner olarak çalışır. Merkez: İstanbul (Ataşehir), şube: Ankara (Çankaya). Kurucu: Burkay Kartal. İletişim: info@leyonex.com / +90 543 960 70 76.',
    '',
    '## Firmalara sunulan üç fayda',
    '',
    ...coreBenefits.map((b) => `- **${b.title}**: ${b.text}`),
    '',
    '## Hizmetler',
    '',
  ];
  for (const phase of phases) {
    lines.push(`### ${phaseInfo[phase].label}`, '');
    for (const s of services.filter((x) => x.phase === phase)) {
      const free = s.free ? ' (Birlikte çalışılan firmalara ücretsiz.)' : '';
      lines.push(`- [${s.title.tr}](${BASE}/hizmetler/${s.slug}): ${s.shortDescription.tr}${free}`);
    }
    lines.push('');
  }
  lines.push(
    '## Kapsam',
    '',
    '- Türkiye: yurt içi fuarlarda hazırlık, davet, saha ve raporlama süreçlerinin tamamı.',
    '- Global: yurt dışı fuarlarda aynı sistem, aynı tek muhatap, tek rapor.',
    '',
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
