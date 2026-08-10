import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getBlogPostBySlug, getBlogSlugs, getAllBlogPosts } from "@/lib/data";
import { BLOG_CATEGORIES, type BlogSection } from "@/data/blog";
import { ArrowLeft, ArrowRight, Clock, Calendar, Mail, Phone } from "lucide-react";
import { format } from "date-fns";
import { tr } from "date-fns/locale";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const BASE = "https://leyonex.com";

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: {
      title: `${post.title} | LEYONEX`,
      description: post.seo.description,
      url: `${BASE}/blog/${slug}`,
    },
  };
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2 key={idx} className="text-xl font-black text-[#1a1a1a] mt-10 mb-4">
          {section.content}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="text-base font-bold text-[#1a1a1a] mt-6 mb-3">
          {section.content}
        </h3>
      );
    case "p":
      return (
        <p key={idx} className="text-[#444] text-base leading-relaxed mb-5">
          {section.content}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="mb-6 space-y-2.5">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-3 items-start text-[#444] text-sm leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#CB3234] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={idx} className="mb-6 space-y-4">
          {section.items?.map((item, i) => (
            <li key={i} className="flex gap-4 items-start text-[#444] text-sm leading-relaxed">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#CB3234] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto mb-8">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#1a1a1a] text-white">
                {section.headers?.map((h, i) => (
                  <th key={i} className="text-left px-4 py-3 font-bold text-xs uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-[#F8F8F6]"}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-[#444] border-b border-[#E5E5E3]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      if (section.variant === "info") {
        return (
          <div key={idx} className="bg-[#F8F8F6] border border-[#E5E5E3] p-6 mb-8">
            {section.title && (
              <p className="text-xs font-bold uppercase tracking-wider text-[#CB3234] mb-2">
                {section.title}
              </p>
            )}
            <pre className="text-sm text-[#444] leading-relaxed whitespace-pre-wrap font-sans">
              {section.text}
            </pre>
          </div>
        );
      }
      return (
        <div key={idx} className="bg-[#CB3234] p-7 mb-8 mt-10">
          {section.title && (
            <h3 className="text-white font-black text-lg mb-2">{section.title}</h3>
          )}
          <p className="text-white/90 text-sm leading-relaxed mb-5">{section.text}</p>
          {section.buttonText && section.buttonHref && (
            <Link
              href={section.buttonHref}
              className="inline-flex items-center gap-2 bg-white text-[#CB3234] font-bold text-sm px-6 py-2.5 hover:bg-white/90 transition-colors"
            >
              {section.buttonText}
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts();
  const related = allPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 2);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${BASE}/blog/${slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.seo.description,
    author: { "@type": "Organization", name: "LEYONEX Fuarcılık", url: BASE },
    publisher: { "@type": "Organization", name: "LEYONEX Fuarcılık", url: BASE },
    datePublished: post.publishDate,
    url: `${BASE}/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="min-h-screen pt-20 bg-[#F8F8F6]">

        {/* Article Header */}
        <section className="bg-white border-b border-[#E5E5E3] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#999] hover:text-[#CB3234] transition-colors mb-8 uppercase tracking-wider"
            >
              <ArrowLeft size={14} />
              Tüm Yazılar
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold px-2.5 py-1 bg-red-100 text-[#CB3234]">
                {BLOG_CATEGORIES[post.category]}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-5 max-w-3xl leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-xs text-[#999]">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {format(new Date(post.publishDate), "d MMMM yyyy", { locale: tr })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {post.readTime} dakika okuma
              </span>
              <span className="font-bold text-[#CB3234]">LEYONEX Ekibi</span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Main Content */}
              <article className="lg:col-span-2">
                <div className="bg-white border border-[#E5E5E3] p-8 md:p-10">
                  {post.sections.map((section, idx) => renderSection(section, idx))}
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-white border border-[#E5E5E3] text-[#666]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-base font-black text-[#1a1a1a] mb-5 uppercase tracking-wider text-xs text-[#999]">
                      Benzer Yazılar
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {related.map((rp) => (
                        <Link
                          key={rp.slug}
                          href={`/blog/${rp.slug}`}
                          className="group bg-white border border-[#E5E5E3] hover:border-[#CB3234] transition-colors p-6"
                        >
                          <p className="text-xs font-bold text-[#CB3234] mb-2">
                            {BLOG_CATEGORIES[rp.category]}
                          </p>
                          <h3 className="text-sm font-black text-[#1a1a1a] leading-snug group-hover:text-[#CB3234] transition-colors mb-3">
                            {rp.title}
                          </h3>
                          <span className="flex items-center gap-1 text-xs text-[#999]">
                            <Clock size={11} /> {rp.readTime} dk
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="space-y-5 sticky top-24">
                  {/* CTA Card */}
                  <div className="bg-[#1a1a1a] p-7">
                    <h3 className="text-white font-black text-base mb-2">
                      Fuarınızı Birlikte Planlayalım
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed mb-5">
                      24 saat içinde size özel dönüş yapıyoruz.
                    </p>
                    <Link
                      href="/teklif-al"
                      className="flex items-center justify-center gap-2 w-full bg-[#CB3234] text-white font-bold py-3 hover:bg-[#A8282A] transition-colors text-sm"
                    >
                      Teklif Talep Formu
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Contact */}
                  <div className="bg-white border border-[#E5E5E3] p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#999] mb-4">
                      İletişim
                    </h4>
                    <div className="space-y-3">
                      <a
                        href="mailto:info@leyonex.com"
                        className="flex items-center gap-3 text-sm text-[#555] hover:text-[#CB3234] transition-colors"
                      >
                        <Mail size={14} className="text-[#CB3234]" />
                        info@leyonex.com
                      </a>
                      <a
                        href="tel:+905439607076"
                        className="flex items-center gap-3 text-sm text-[#555] hover:text-[#CB3234] transition-colors"
                      >
                        <Phone size={14} className="text-[#CB3234]" />
                        +90 543 960 70 76
                      </a>
                    </div>
                  </div>

                  {/* All blog posts link */}
                  <div className="bg-white border border-[#E5E5E3] p-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#999] mb-4">
                      Tüm Yazılar
                    </h4>
                    <div className="space-y-3">
                      {getAllBlogPosts()
                        .filter((p) => p.slug !== slug)
                        .slice(0, 4)
                        .map((p) => (
                          <Link
                            key={p.slug}
                            href={`/blog/${p.slug}`}
                            className="block text-xs text-[#555] hover:text-[#CB3234] transition-colors leading-snug"
                          >
                            → {p.title}
                          </Link>
                        ))}
                      <Link
                        href="/blog"
                        className="block text-xs font-bold text-[#CB3234] hover:underline mt-2"
                      >
                        Tüm yazıları gör →
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}
