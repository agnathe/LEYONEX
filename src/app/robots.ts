import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Tüm arama motorları + AI arama botları
        userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider',
                    'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot', 'GPTBot'],
        allow: '/',
        disallow: ['/uye/', '/giris', '/kayit', '/api/'],
      },
      {
        // Diğer tüm botlar (genel kural)
        userAgent: '*',
        allow: '/',
        disallow: ['/uye/', '/giris', '/kayit', '/api/'],
      },
    ],
    sitemap: 'https://leyonex.com/sitemap.xml',
  };
}
