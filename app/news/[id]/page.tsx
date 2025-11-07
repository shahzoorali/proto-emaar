import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/data/news";
import { ArrowLeft, Calendar, User } from "lucide-react";
import NewsCard from "@/components/NewsCard";

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = news.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const relatedArticles = news
    .filter((a) => a.id !== article.id && (a.category === article.category || a.relatedIds?.includes(article.id)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-[#00a859] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <Image src={article.heroImage} alt={article.title} fill className="object-cover" />
          </div>
          <div className="p-8">
            <span className="inline-block bg-[#00a859] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">{article.title}</h1>
            <div className="flex items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
            </div>
            <div className="prose max-w-none text-gray-700">
              <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>
              <div className="space-y-4">
                {article.body.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </article>

        {relatedArticles.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-[#0a2540] mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <NewsCard key={related.id} article={related} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

