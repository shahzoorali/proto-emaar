"use client";

import { useMemo, useState } from "react";
import { news } from "@/data/news";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const categories = ["All", "Tournament News", "Player Feature", "Course Guide"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = useMemo(() => {
    return news.filter(
      (article) => selectedCategory === "All" || article.category === selectedCategory
    );
  }, [selectedCategory]);

  const heroArticle = filteredNews[0];
  const spotlightArticles = filteredNews.slice(1, 4);
  const remainingArticles = filteredNews.slice(4);

  return (
    <div className="min-h-screen bg-gradient-to-br from-tour-surface via-white to-tour-cloud py-14">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Hero */}
        {heroArticle && (
          <section className="relative overflow-hidden rounded-3xl border border-tour-gold/30 bg-gradient-to-br from-[#f4d688] via-[#d9a441] to-[#b27f2b] text-tour-navy-900 shadow-[0_30px_60px_rgba(178,127,43,0.28)]">
            <div className="absolute inset-0">
              <Image
                src={heroArticle.heroImage}
                alt={heroArticle.title}
                fill
                className="object-cover opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tour-navy-900/80 via-tour-navy-800/60 to-transparent" />
            </div>

            <div className="relative grid gap-10 p-10 lg:grid-cols-[1.6fr_1fr]">
              <div className="space-y-6 text-white">
                <span className="headline-pill bg-white/20 border border-white/40">
                  {heroArticle.category}
                </span>
                <h1 className="font-heading text-4xl md:text-5xl tracking-[0.12em] leading-tight drop-shadow-lg">
                  {heroArticle.title}
                </h1>
                <p className="text-lg text-white/85 leading-relaxed max-w-2xl drop-shadow">
                  {heroArticle.excerpt}
                </p>
                <div className="flex flex-wrap gap-6 text-sm text-white/80 uppercase tracking-[0.2em]">
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(heroArticle.publishDate).toLocaleDateString()}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {heroArticle.author}
                  </span>
                </div>
                <Link
                  href={`/news/${heroArticle.id}`}
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-green hover:text-white transition shadow-lg"
                >
                  Read Feature
                </Link>
              </div>

              <div className="space-y-4 lg:border-l lg:border-white/20 lg:pl-8">
                <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-white/80">
                  Spotlight Stories
                </h2>
                <div className="space-y-3">
                  {spotlightArticles.map((article) => (
                    <Link
                      key={article.id}
                      href={`/news/${article.id}`}
                      className="flex gap-4 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
                    >
                      <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl">
                        <Image src={article.heroImage} alt={article.title} fill className="object-cover" />
                      </div>
                      <div className="space-y-1 text-white">
                        <p className="text-xs uppercase tracking-[0.24em] text-white/70">{article.category}</p>
                        <p className="text-sm font-semibold leading-snug line-clamp-2">{article.title}</p>
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-white/60">
                          {new Date(article.publishDate).toLocaleDateString()}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="card-elevated bg-white border border-tour-cloud/70 px-8 py-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-5 py-2 font-heading text-xs uppercase tracking-[0.18em] transition ${
                    isActive
                      ? "bg-tour-navy-900 text-white shadow-lg"
                      : "bg-tour-cloud text-tour-muted hover:bg-tour-navy-900 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {/* Remaining Articles */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.length === 0 ? (
            <p className="col-span-full text-center text-tour-muted/80">
              No stories in this category yet. Check back soon for more Hyderabad Open coverage.
            </p>
          ) : (
            <>
              {remainingArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
              {remainingArticles.length === 0 && (
                <p className="col-span-full text-center text-tour-muted/80">
                  You're all caught up on today's spotlight coverage.
                </p>
              )}
            </>
          )}
        </section>
      </div>
    </div>
  );
}

