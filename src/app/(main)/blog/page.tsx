import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllBlogPosts } from "@/lib/data";
import { BLOG_CATEGORIES } from "@/data/blog";
import { ArrowRight } from "lucide-react";
import { BlogBrowser, BlogBrowserFromUrl, type BlogCard } from "@/components/blog/BlogBrowser";

export const metadata: Metadata = {
  title: "Fuar Rehberi ve Uzman İçerikler",
  description:
    "Stand tasarımından devlet teşviklerine, fuar hazırlığından uluslararası fuarlara: fuar katılımınızı planlarken işinize yarayacak pratik içerikler.",
  keywords: [
    "fuar rehberi",
    "stand tasarımı ipuçları",
    "devlet fuar desteği",
    "fuar hazırlığı",
    "yurt dışı fuar katılımı",
    "LEYONEX blog",
  ],
  alternates: { canonical: "https://leyonex.com/blog" },
  openGraph: {
    title: "Fuar Rehberi ve Uzman İçerikler | LEYONEX",
    description:
      "Stand tasarımından devlet teşviklerine, fuar hazırlığından uluslararası fuarlara pratik içerikler.",
    url: "https://leyonex.com/blog",
  },
};

export default function BlogPage() {
  // Kartlar için yalnızca gereken alanlar istemciye gönderilir.
  const posts: BlogCard[] = getAllBlogPosts().map(({ slug, title, category, excerpt, readTime, publishDate }) => ({
    slug,
    title,
    category,
    excerpt,
    readTime,
    publishDate,
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-[#F8F8F6]">

        {/* Page Header */}
        <section className="bg-white border-b border-[#E5E5E3] py-14">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#E31B23]" />
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#E31B23]">
                Uzman İçerikler
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4 max-w-2xl">
              Fuar Rehberi
            </h1>
            <p className="text-lg text-[#555] max-w-xl leading-relaxed">
              Stand tasarımından devlet teşviklerine, fuar hazırlığından uluslararası fuarlara: fuar katılımınızı planlarken işinize yarayacak pratik içerikler.
            </p>
          </div>
        </section>

        <Suspense fallback={<BlogBrowser posts={posts} categories={BLOG_CATEGORIES} category={null} />}>
          <BlogBrowserFromUrl posts={posts} categories={BLOG_CATEGORIES} />
        </Suspense>

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
              className="shrink-0 inline-flex items-center gap-2 bg-[#E31B23] text-white font-bold px-7 py-3.5 hover:bg-[#C4141B] transition-colors text-sm"
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
