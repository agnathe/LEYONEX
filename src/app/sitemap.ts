import type { MetadataRoute } from 'next';
import { getAllServices, getAllFairs, getAllProjects, getAllBlogPosts } from '@/lib/data';

const BASE = 'https://leyonex.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const services = getAllServices();
  const fairs = getAllFairs();
  const projects = getAllProjects();
  const blogPosts = getAllBlogPosts();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/hizmetler`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/fuarlar`,       lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/projeler`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/hakkimizda`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/iletisim`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/teklif-al`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/intercharm-2026`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/blog`,            lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/hizmetler/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const fairPages: MetadataRoute.Sitemap = fairs.map((f) => ({
    url: `${BASE}/fuarlar/${f.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE}/projeler/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.publishDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages, ...fairPages, ...projectPages, ...blogPages];
}
