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
  const recentNews = news.slice(1, 5);
  const newsroomUpdates = news.slice(5, 9);
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
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl tracking-[0.12em] text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] leading-tight">
              Hyderabad Open 2026
              <br />
              Championship
            </h1>
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] leading-relaxed">
              India&apos;s Premier Professional Golf Championship
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white/90">
                <Calendar className="w-5 h-5 text-tour-green" />
                <span className="font-medium">Feb 12-14, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="w-5 h-5 text-tour-green" />
                <span className="font-medium">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <Users className="w-5 h-5 text-tour-green" />
                <span className="font-medium">Professional Players</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="inline-flex items-center rounded-full bg-tour-green px-8 py-3 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-[#02c56f] transition shadow-lg"
              >
                Register Now
              </Link>
              <Link
                href="/tickets"
                className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-8 py-3 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-white transition shadow-lg"
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="section-shell bg-tour-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-[#00a859] mx-auto mb-4" />
              <h3 className="font-heading text-xl tracking-[0.2em] text-tour-navy-900 mb-2">
                ₹50 Lakhs
              </h3>
              <p className="text-tour-muted uppercase tracking-[0.24em] text-xs">Prize Purse</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-[#00a859] mx-auto mb-4" />
              <h3 className="font-heading text-xl tracking-[0.2em] text-tour-navy-900 mb-2">
                60+ Players
              </h3>
              <p className="text-tour-muted uppercase tracking-[0.24em] text-xs">
                Professional Field
              </p>
            </div>
            <div className="text-center">
              <Calendar className="w-12 h-12 text-[#00a859] mx-auto mb-4" />
              <h3 className="font-heading text-xl tracking-[0.2em] text-tour-navy-900 mb-2">3 Days</h3>
              <p className="text-tour-muted uppercase tracking-[0.24em] text-xs">
                Championship Format
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="section-title">
              <span className="headline-pill">Leaderboard</span>
              <h2>Hyderabad Open Standings</h2>
            </div>
            <Link
              href="/leaderboard"
              className="inline-flex items-center rounded-full border border-tour-navy-900 px-5 py-2.5 font-heading tracking-[0.2em] text-xs uppercase hover:bg-tour-navy-900 hover:text-white transition"
            >
              View Full Leaderboard
            </Link>
          </div>
          <LeaderboardTable leaderboard={leaderboard} />
        </div>
      </section>

      {/* Featured Players */}
      <section className="section-shell bg-tour-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="section-title">
              <span className="headline-pill">Player Spotlight</span>
              <h2>Featured Professionals</h2>
            </div>
            <Link
              href="/players"
              className="inline-flex items-center rounded-full border border-tour-navy-900 px-5 py-2.5 font-heading tracking-[0.2em] text-xs uppercase hover:bg-tour-navy-900 hover:text-white transition"
            >
              View All Players
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
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-title">
            <span className="headline-pill">Course Spotlight</span>
            <h2>Emaar Boulder Hills Golf Club</h2>
          </div>
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
              <p className="text-tour-muted uppercase tracking-[0.24em] text-xs mb-4">
                Championship Venue
              </p>
              <p className="text-tour-text/80 mb-6 text-lg leading-8">
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
                className="inline-flex items-center rounded-full bg-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase hover:bg-tour-green transition"
              >
                Explore Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-shell bg-tour-cloud">
        <div className="max-w-7xl mx-auto px-6 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="section-title">
              <span className="headline-pill">Newsroom</span>
              <h2>Latest Headlines</h2>
            </div>
            <Link
              href="/news"
              className="inline-flex items-center rounded-full border border-tour-navy-900 px-5 py-2.5 font-heading tracking-[0.2em] text-xs uppercase hover:bg-tour-navy-900 hover:text-white transition"
            >
              View All News
            </Link>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              {featuredNews && (
                <div className="w-full">
                  <NewsCard article={featuredNews} featured />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentNews.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
            </div>

            <aside className="card-elevated px-6 py-8 flex flex-col gap-6 bg-white/90">
              <div className="space-y-3">
                <span className="headline-pill bg-tour-cloud text-tour-navy-900 text-[0.6rem]">
                  News Desk
                </span>
                <h3 className="font-heading text-lg tracking-[0.18em] text-tour-navy-900">
                  Top Stories & Updates
                </h3>
              </div>

              <div className="space-y-4">
                {newsroomUpdates.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="block rounded-2xl border border-tour-cloud/80 px-4 py-3 hover:border-tour-navy-900 transition"
                  >
                    <p className="text-sm font-semibold text-tour-navy-900 line-clamp-2">
                      {article.title}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-tour-muted/80 mt-2">
                      {new Date(article.publishDate).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>

              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-full bg-tour-navy-900 px-6 py-3 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-tour-green transition"
              >
                Browse Newsroom
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="section-title">
            <span className="headline-pill">Watch & Listen</span>
            <h2>Video Highlights</h2>
          </div>
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
      <section className="section-shell bg-tour-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="section-title">
              <span className="headline-pill">Tournament Shop</span>
              <h2>Featured Gear</h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center rounded-full border border-tour-navy-900 px-5 py-2.5 font-heading tracking-[0.2em] text-xs uppercase hover:bg-tour-navy-900 hover:text-white transition"
            >
              View All Products
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
      <section className="section-shell bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-center tracking-[0.2em] text-sm uppercase text-tour-muted mb-10">
            Official Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
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
      <section className="section-shell bg-tour-navy-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <span className="headline-pill bg-white/10 text-white">Tournament Access</span>
            <h2 className="text-white">Join India&apos;s Premier Championship</h2>
            <p className="text-white/70 text-lg leading-8 max-w-2xl mx-auto">
              Experience world-class golf at Emaar Boulder Hills. Register as a professional player
              or secure your hospitality passes today.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="inline-flex items-center rounded-full bg-tour-green px-8 py-3 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-[#02c56f] transition"
            >
              Register as Player
            </Link>
            <Link
              href="/tickets"
              className="inline-flex items-center rounded-full bg-white/10 px-8 py-3 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-white/20 transition"
            >
              Buy Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
