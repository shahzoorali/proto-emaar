import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Trophy } from "lucide-react";
import { leaderboard } from "@/data/leaderboard";
import { players } from "@/data/players";
import { news } from "@/data/news";
import { videos } from "@/data/videos";
import { partners } from "@/data/partners";
import LeaderboardTable from "@/components/LeaderboardTable";
import PlayerCard from "@/components/PlayerCard";
import NewsCard from "@/components/NewsCard";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  const featuredNews = news.slice(0, 1)[0];
  const recentNews = news.slice(1, 4);
  const topPlayers = players.slice(0, 6);
  const featuredProducts = products.slice(0, 4);
  const featuredVideos = videos.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            title="Hyderabad Open 2026 Preview"
            src="https://www.youtube.com/embed/ztU13nUGwOI?autoplay=1&mute=1&controls=0&loop=1&playlist=ztU13nUGwOI&modestbranding=1&showinfo=0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 w-[130%] h-[130%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2540]/95 via-[#0a2540]/75 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hyderabad Open 2026
              <br />
              Championship
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">
              India's Premier Professional Golf Championship
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00a859]" />
                <span>Feb 12-14, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#00a859]" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#00a859]" />
                <span>Professional Players</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="bg-[#00a859] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a4a] transition"
              >
                Register Now
              </Link>
              <Link
                href="/tickets"
                className="bg-white text-[#0a2540] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-[#00a859] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0a2540] mb-2">₹50 Lakhs</h3>
              <p className="text-gray-600">Prize Purse</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[#00a859] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0a2540] mb-2">60+ Players</h3>
              <p className="text-gray-600">Professional Field</p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-[#00a859] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-[#0a2540] mb-2">3 Days</h3>
              <p className="text-gray-600">Championship Format</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">Leaderboard</h2>
            <Link
              href="/leaderboard"
              className="text-[#00a859] font-semibold hover:underline"
            >
              View Full Leaderboard →
            </Link>
          </div>
          <LeaderboardTable leaderboard={leaderboard} />
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">Featured Players</h2>
            <Link
              href="/players"
              className="text-[#00a859] font-semibold hover:underline"
            >
              View All Players →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* Course Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8">Course Spotlight</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1200&h=800&fit=crop"
                alt="Emaar Boulder Hills Golf Course"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0a2540] mb-4">
                Emaar Boulder Hills Golf Club
              </h3>
              <p className="text-gray-700 mb-4">
                Nestled in the heart of Hyderabad, Emaar Boulder Hills Golf Club is one of India's
                premier golf destinations. The championship course features 18 holes of challenging
                yet playable golf, with stunning views and impeccable course conditions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-600">Par</p>
                  <p className="text-2xl font-bold text-[#0a2540]">72</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Yardage</p>
                  <p className="text-2xl font-bold text-[#0a2540]">7,200</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Holes</p>
                  <p className="text-2xl font-bold text-[#0a2540]">18</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Designer</p>
                  <p className="text-lg font-semibold text-[#0a2540]">Championship</p>
                </div>
              </div>
              <Link
                href="/course"
                className="inline-block bg-[#0a2540] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a859] transition"
              >
                Explore Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">Latest News</h2>
            <Link
              href="/news"
              className="text-[#00a859] font-semibold hover:underline"
            >
              View All News →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-2">
              {featuredNews && <NewsCard article={featuredNews} featured />}
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8">Video Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVideos.map((video) => (
              <div key={video.id} className="group relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#0a2540] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">Shop</h2>
            <Link
              href="/shop"
              className="text-[#00a859] font-semibold hover:underline"
            >
              View All Products →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-8 text-center">
            Official Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="relative w-32 h-16 grayscale hover:grayscale-0 transition"
              >
                <Image
                  src={partner.logoUrl}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0a2540] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us for India's Premier Golf Championship
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience world-class golf at Emaar Boulder Hills. Register as a player or secure your
            spectator tickets today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="bg-[#00a859] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#008a4a] transition"
            >
              Register as Player
            </Link>
            <Link
              href="/tickets"
              className="bg-white text-[#0a2540] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
