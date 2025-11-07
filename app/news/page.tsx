"use client";

import { useState } from "react";
import { news } from "@/data/news";
import NewsCard from "@/components/NewsCard";

const categories = ["All", "Tournament News", "Player Feature", "Course Guide"];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNews = news.filter(
    (article) => selectedCategory === "All" || article.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">News</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest tournament news, player features, and course updates
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                selectedCategory === category
                  ? "bg-[#00a859] text-white"
                  : "bg-white text-[#0a2540] hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}

