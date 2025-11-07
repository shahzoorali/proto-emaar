import Link from "next/link";
import Image from "next/image";
import { NewsArticle } from "@/data/news";

interface NewsCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  if (featured) {
    return (
      <Link
        href={`/news/${article.id}`}
        className="group relative min-h-[500px] overflow-hidden rounded-3xl shadow-2xl transition"
      >
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white space-y-4">
          <span className="inline-block headline-pill bg-white/15 text-white backdrop-blur-sm">
            {article.category}
          </span>
          <h2 className="font-heading text-2xl md:text-3xl tracking-[0.2em] text-white group-hover:text-tour-green transition leading-tight line-clamp-3">
            {article.title}
          </h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            {new Date(article.publishDate).toLocaleDateString()}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${article.id}`}
      className="group card-elevated overflow-hidden transition"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-3">
        <span className="headline-pill bg-tour-cloud text-tour-navy-900 text-[0.6rem]">{article.category}</span>
        <h3 className="font-heading text-base tracking-[0.16em] text-tour-navy-900 group-hover:text-tour-green transition line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-tour-muted line-clamp-2">{article.excerpt}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-tour-muted/80">
          {new Date(article.publishDate).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}

