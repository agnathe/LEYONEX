import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllBlogPosts } from "@/lib/data";
import { BLOG_CATEGORIES, type BlogCategory } from "@/data/blog";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

export const metadata: Metadata = {
  title: "Fuar Rehberi ve Uzman İçerikler",
  description:
    "Stand tasarımından devlet teşviklerine, ROI hesaplamadan uluslararası fuar rehberlerine — Leyonex fuar ekibinin deneyiminden derlenen pratik içerikler.",
  keywords: [
    "fuar rehberi",
    "stand tasarımı ipuçları",
    "devlet fuar desteği",
    "fuar ROI",
    "yurt dışı fuar katılımı",
    "LEYONEX blog",
  ],
  alternates: { canonical: "https://leyonex.com/blog" },
  openGraph: {
    title: "Fuar Rehberi ve Uzman İçerikler | LEYONEX",
    description:
      "Stand tasarımından devlet teşviklerine, ROI hesaplamadan uluslararası fuar rehberlerine kadar uzman içerikler.",
    url: "https://leyonex.com/blog",
  },
};

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  "devlet-destekleri": "bg-blue-100 text-blue-800",
  "stand-tasarimi": "bg-red-100 text-[#CB3234]",
  "fuar-hazirligi": "bg-green-100 text-green-800",
  "uluslararasi-fuarlar": "bg-purple-100 text-purple-800",
  "roi-olcum": "bg-orange-100 text-orange-800",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-[#F8F8F6]">

        {/* Page Header */}
        <section className="bg-white border-b border-[#E5E5E3] py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#CB3234]" />
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                Uzman İçerikler
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4 max-w-2xl">
              Fuar Rehberi
            </h1>
            <p className="text-lg text-[#555] max-w-xl leading-relaxed">
              Stand tasarımından devlet teşviklerine, ROI hesaplamadan uluslararası fuar operasyonuna — saha deneyimimizden derlenen pratik içerikler.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-white border-b border-[#E5E5E3]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              <Link
                href="/blog"
                className="shrink-0 px-4 py-2 text-xs font-bold border-2 border-[#1a1a1a] bg-[#1a1a1a] text-white transition-colors"
              >
                Tümü
              </Link>
              {(Object.entries(BLOG_CATEGORIES) as [BlogCategory, string][]).map(([key, label]) => (
                <Link
                  key={key}
                  href={`/blog?kategori=${key}`}
                  className="shrink-0 px-4 py-2 text-xs font-bold border-2 border-[#E5E5E3] text-[#555] hover:border-[#CB3234] hover:text-[#CB3234] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-12">

          {/* Featured Post */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white border border-[#E5E5E3] hover:border-[#CB3234] transition-colors mb-10"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Visual placeholder */}
                <div className="bg-[#1a1a1a] min-h-[260px] md:min-h-[320px] flex items-end p-8">
                  <div>
                    <span className={`inline-block text-xs font-bold px-3 py-1 mb-4 ${CATEGORY_COLORS[featuredPost.category]}`}>
                      {BLOG_CATEGORIES[featuredPost.category]}
                    </span>
                    <p className="text-white/50 text-xs uppercase tracking-wider font-bold">Öne Çıkan</p>
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#CB3234] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#555] text-sm leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-[#999]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {format(new Date(featuredPost.publishDate), "d MMM yyyy", { locale: tr })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {featuredPost.readTime} dk okuma
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#CB3234] group-hover:gap-2.5 transition-all">
                      Oku <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-[#E5E5E3] hover:border-[#CB3234] transition-colors flex flex-col"
              >
                {/* Card color strip */}
                <div className="h-1 bg-[#CB3234]" />
                <div className="p-7 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 mb-4 w-fit ${CATEGORY_COLORS[post.category]}`}>
                    {BLOG_CATEGORIES[post.category]}
                  </span>
                  <h2 className="text-base font-black text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#CB3234] transition-colors flex-1">
                    {post.title}
                  </h2>
                  <p className="text-xs text-[#666] leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-[#E5E5E3]">
                    <div className="flex items-center gap-3 text-xs text-[#999]">
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime} dk
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {format(new Date(post.publishDate), "d MMM", { locale: tr })}
                      </span>
                    </div>
                    <ArrowRight size={13} className="text-[#CB3234] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="py-14 bg-white border-t border-[#E5E5E3]">
          <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-black text-[#1a1a1a] mb-1">
                Fuarınızı Birlikte Planlayalım
              </h2>
              <p className="text-sm text-[#666]">
                Sorularınızı danışmanlarımıza iletin, size özel çözüm gelsin.
              </p>
            </div>
            <Link
              href="/teklif-al"
              className="shrink-0 inline-flex items-center gap-2 bg-[#CB3234] text-white font-bold px-7 py-3.5 hover:bg-[#A8282A] transition-colors text-sm"
            >
              Teklif Alın
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
