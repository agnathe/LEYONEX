"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import BlogCoverIllustration from "@/components/blog/BlogCoverIllustration";
// Yalnızca tipler: yazı verisinin tamamı tarayıcı paketine girmesin.
import type { BlogCategory, BlogPost } from "@/data/blog";

export type BlogCard = Pick<BlogPost, "slug" | "title" | "category" | "excerpt" | "readTime" | "publishDate">;
type Categories = Record<BlogCategory, string>;

interface BrowserProps {
  posts: BlogCard[];
  categories: Categories;
}

const CATEGORY_COLORS: Record<BlogCategory, string> = {
  "devlet-destekleri": "bg-blue-100 text-blue-800",
  "stand-tasarimi": "bg-red-100 text-[#E31B23]",
  "fuar-hazirligi": "bg-green-100 text-green-800",
  "uluslararasi-fuarlar": "bg-purple-100 text-purple-800",
  "roi-olcum": "bg-orange-100 text-orange-800",
};

const ACTIVE_FILTER = "border-[#1a1a1a] bg-[#1a1a1a] text-white";
const IDLE_FILTER = "border-[#E5E5E3] text-[#555] hover:border-[#E31B23] hover:text-[#E31B23]";

/** Adresteki ?kategori= değerini okur. Statik HTML'de (Suspense yedeği) bütün yazılar listelenir. */
export function BlogBrowserFromUrl({ posts, categories }: BrowserProps) {
  const value = useSearchParams().get("kategori");
  const category = value !== null && value in categories ? (value as BlogCategory) : null;
  return <BlogBrowser posts={posts} categories={categories} category={category} />;
}

export function BlogBrowser({ posts, categories, category }: BrowserProps & { category: BlogCategory | null }) {
  const visible = category ? posts.filter((p) => p.category === category) : posts;
  const featuredPost = visible[0];
  const restPosts = visible.slice(1);

  return (
    <>
      {/* Category Filter */}
      <section className="bg-white border-b border-[#E5E5E3]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            <Link
              href="/blog"
              scroll={false}
              aria-current={category === null ? "page" : undefined}
              className={`shrink-0 px-4 py-2 text-xs font-bold border-2 transition-colors ${category === null ? ACTIVE_FILTER : IDLE_FILTER}`}
            >
              Tümü
            </Link>
            {(Object.entries(categories) as [BlogCategory, string][]).map(([key, label]) => (
              <Link
                key={key}
                href={`/blog?kategori=${key}`}
                scroll={false}
                aria-current={category === key ? "page" : undefined}
                className={`shrink-0 px-4 py-2 text-xs font-bold border-2 transition-colors ${category === key ? ACTIVE_FILTER : IDLE_FILTER}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {!featuredPost && (
          <p className="text-sm text-[#666]">Bu kategoride henüz yazı yok.</p>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block bg-white border border-[#E5E5E3] hover:border-[#E31B23] transition-colors mb-10"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Category illustration */}
              <div className="relative min-h-[260px] md:min-h-[320px] flex items-end p-8 overflow-hidden">
                <BlogCoverIllustration category={featuredPost.category} />
                <div className="relative z-10">
                  <span className={`inline-block text-xs font-bold px-3 py-1 mb-4 ${CATEGORY_COLORS[featuredPost.category]}`}>
                    {categories[featuredPost.category]}
                  </span>
                  <p className="text-white/50 text-xs uppercase tracking-wider font-bold">Öne Çıkan</p>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-black text-[#1a1a1a] mb-4 leading-tight group-hover:text-[#E31B23] transition-colors">
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
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#E31B23] group-hover:gap-2.5 transition-all">
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
              className="group bg-white border border-[#E5E5E3] hover:border-[#E31B23] transition-colors flex flex-col"
            >
              {/* Card color strip */}
              <div className="h-1 bg-[#E31B23]" />
              <div className="p-7 flex flex-col flex-1">
                <span className={`inline-block text-xs font-bold px-2.5 py-1 mb-4 w-fit ${CATEGORY_COLORS[post.category]}`}>
                  {categories[post.category]}
                </span>
                <h2 className="text-base font-black text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#E31B23] transition-colors flex-1">
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
                  <ArrowRight size={13} className="text-[#E31B23] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
