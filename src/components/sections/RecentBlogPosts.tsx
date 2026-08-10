import Link from "next/link";
import { getAllBlogPosts } from "@/lib/data";
import { BLOG_CATEGORIES } from "@/data/blog";
import { ArrowRight, Clock } from "lucide-react";

const CATEGORY_COLORS: Record<string, string> = {
  "devlet-destekleri": "bg-blue-100 text-blue-800",
  "stand-tasarimi": "bg-red-100 text-[#CB3234]",
  "fuar-hazirligi": "bg-green-100 text-green-800",
  "uluslararasi-fuarlar": "bg-purple-100 text-purple-800",
  "roi-olcum": "bg-orange-100 text-orange-800",
};

export default function RecentBlogPosts() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="py-20 bg-[#F8F8F6]">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#CB3234]" />
              <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#CB3234]">
                Fuar Rehberi
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight max-w-lg">
              Sektör Deneyimimizden
              <br />Uzman İçerikler
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold px-6 py-3 hover:bg-[#1a1a1a] hover:text-white transition-colors text-sm shrink-0"
          >
            Tüm Yazılar
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[#E5E5E3] hover:border-[#CB3234] transition-colors flex flex-col"
            >
              {/* Top accent */}
              <div className={`h-1 ${idx === 0 ? "bg-[#CB3234]" : "bg-[#E5E5E3] group-hover:bg-[#CB3234] transition-colors"}`} />
              <div className="p-7 flex flex-col flex-1">
                <span className={`inline-block text-xs font-bold px-2.5 py-1 mb-5 w-fit ${CATEGORY_COLORS[post.category]}`}>
                  {BLOG_CATEGORIES[post.category]}
                </span>
                <h3 className="text-base font-black text-[#1a1a1a] leading-snug mb-3 group-hover:text-[#CB3234] transition-colors flex-1">
                  {post.title}
                </h3>
                <p className="text-xs text-[#666] leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-[#E5E5E3]">
                  <span className="flex items-center gap-1.5 text-xs text-[#999]">
                    <Clock size={11} />
                    {post.readTime} dk okuma
                  </span>
                  <ArrowRight
                    size={13}
                    className="text-[#CB3234] group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
