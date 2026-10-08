import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/data";
import { BLOG_CATEGORIES } from "@/data/blog";
import { Kicker, SectionTitle, buttonClass } from "./SectionHeading";

export default function GuideSection() {
  const posts = getAllBlogPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="rehber-baslik"
      className="border-t border-lx-line bg-lx-paper py-24 lg:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[40rem]">
            <Kicker>Fuar rehberi</Kicker>
            <SectionTitle id="rehber-baslik">
              Hazırlık sürecine dair notlar.
            </SectionTitle>
          </div>
          <Link
            href="/blog"
            className={`${buttonClass.outline} self-start lg:self-auto`}
          >
            Tüm yazılar
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col border border-lx-line bg-white p-8 transition-[border-color,transform] ease-brand [transition-duration:250ms] hover:-translate-y-0.5 hover:border-lx-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lx-red"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-lx-grey1">
                {BLOG_CATEGORIES[post.category]}
              </span>
              <h3 className="mt-5 flex-1 font-display text-[20px] font-bold leading-snug text-lx-ink">
                {post.title}
              </h3>
              <p className="mt-4 line-clamp-2 text-[15px] leading-relaxed text-lx-grey1">
                {post.excerpt}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-lx-line pt-5 text-[13px] text-lx-grey1">
                {post.readTime} dk okuma
                <ArrowRight
                  size={18}
                  strokeWidth={1.75}
                  className="text-lx-grey3 transition-[color,transform] duration-150 group-hover:translate-x-0.5 group-hover:text-lx-red"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
