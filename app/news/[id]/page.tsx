import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Share2, MapPin, Clock3 } from "lucide-react";
import { news } from "@/data/news";
import NewsCard from "@/components/NewsCard";

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = news.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const relatedArticles = news
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category === article.category || a.relatedIds?.includes(article.id))
    )
    .slice(0, 3);

  const bodyParagraphs = article.body.split("\n").filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-tour-surface via-white to-tour-cloud py-14">
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 font-heading tracking-[0.2em] text-xs uppercase text-tour-muted hover:text-tour-navy-900 transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Newsroom
        </Link>

        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border border-tour-gold/30 bg-gradient-to-br from-[#f4d688] via-[#d9a441] to-[#b27f2b] text-tour-navy-900 shadow-[0_30px_60px_rgba(178,127,43,0.28)]">
          <div className="absolute inset-0">
            <Image
              src={article.heroImage}
              alt={article.title}
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-tour-navy-900/85 via-tour-navy-800/65 to-transparent" />
          </div>
          <div className="relative grid gap-8 p-10 lg:grid-cols-[1.6fr_1fr] text-white">
            <div className="space-y-6">
              <span className="headline-pill bg-white/10 border border-white/30">
                {article.category}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl tracking-[0.12em] leading-tight drop-shadow-lg">
                {article.title}
              </h1>
              <p className="text-lg text-white/85 leading-relaxed max-w-3xl drop-shadow">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.24em] text-white/70">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.publishDate).toLocaleDateString()}
                </span>
                <span className="inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {article.author}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  6 min read
                </span>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/15 px-6 py-5 backdrop-blur-sm">
              <h2 className="font-heading text-sm uppercase tracking-[0.2em] text-white/80">
                Tournament Snapshot
              </h2>
              <div className="space-y-3 text-sm text-white/80">
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Emaar Boulder Hills Golf Club • Hyderabad, India
                </p>
                <p>
                  Daily updates direct from the championship course, including player interviews,
                  course reports, and tournament operations.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-xs font-heading uppercase tracking-[0.2em] text-white hover:bg-white hover:text-tour-navy-900 transition">
                <Share2 className="h-4 w-4" />
                Share Update
              </button>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <article className="card-elevated bg-white border border-tour-cloud/70 px-8 py-10 space-y-8">
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div className="space-y-6 text-lg text-tour-muted/90 leading-relaxed">
              {bodyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <aside className="space-y-6 rounded-3xl bg-tour-cloud px-6 py-6 border border-tour-cloud/70">
              <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-tour-muted">
                Inside the Ropes
              </h3>
              <ul className="space-y-3 text-sm text-tour-muted/90">
                <li className="rounded-2xl bg-white px-4 py-3">
                  <strong>Tournament Status:</strong> In-progress – Round 2 coverage
                </li>
                <li className="rounded-2xl bg-white px-4 py-3">
                  <strong>Feature Player:</strong> {article.author}
                </li>
                <li className="rounded-2xl bg-white px-4 py-3">
                  <strong>Media Center:</strong> Interviews available post-round at 5:30 PM IST
                </li>
              </ul>
              <div className="rounded-2xl border border-tour-cloud/70 bg-white px-4 py-4 text-sm text-tour-muted/80">
                Subscribe to the Hyderabad Open media bulletin for immediate post-round updates,
                scoring notes, and broadcast schedules.
              </div>
            </aside>
          </div>
        </article>

        {/* Related */}
        {relatedArticles.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-3xl tracking-[0.1em] text-tour-navy-900">
                More from the Championship
              </h2>
              <Link
                href="/news"
                className="inline-flex items-center rounded-full border border-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-navy-900 hover:text-white transition"
              >
                Back to Newsroom
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((related) => (
                <NewsCard key={related.id} article={related} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

