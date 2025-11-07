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
        className="group relative h-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
      >
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="text-sm font-semibold text-[#00a859]">{article.category}</span>
          <h2 className="text-2xl font-bold mt-2 group-hover:text-[#00a859] transition">
            {article.title}
          </h2>
          <p className="text-sm mt-2 text-gray-200">{article.excerpt}</p>
          <p className="text-xs mt-4 text-gray-300">
            {new Date(article.publishDate).toLocaleDateString()}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/news/${article.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.heroImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-[#00a859]">{article.category}</span>
        <h3 className="text-lg font-bold text-[#0a2540] mt-2 group-hover:text-[#00a859] transition line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{article.excerpt}</p>
        <p className="text-xs text-gray-500 mt-3">
          {new Date(article.publishDate).toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
}

