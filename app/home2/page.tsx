import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Users, Trophy, ArrowRight, Play } from "lucide-react";
import { leaderboard } from "@/data/leaderboard";
import { players } from "@/data/players";
import { news } from "@/data/news";
import { videos } from "@/data/videos";
import { partners } from "@/data/partners";
import { products } from "@/data/products";

export default function Home2() {
  const topLeaders = leaderboard.entries.slice(0, 5);
  const featuredPlayers = players.slice(0, 4);
  const latestNews = news.slice(0, 4);
  const featuredVideos = videos.slice(0, 3);
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Screen Split */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&h=1080&fit=crop"
            alt="Golf Course"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tour-navy-900/95 via-tour-navy-900/75 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-6 py-2 rounded-full bg-tour-gold text-tour-navy-900 font-heading text-sm tracking-[0.3em] uppercase font-bold">
                February 12-14, 2026
              </span>
              <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] text-white leading-none">
                HYDERABAD
                <br />
                OPEN
                <br />
                <span className="text-tour-gold">2026</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl">
                India's Premier Professional Golf Championship at Emaar Boulder Hills
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/register"
                className="group inline-flex items-center gap-3 rounded-full bg-tour-gold px-8 py-4 font-heading tracking-[0.2em] text-sm uppercase text-tour-navy-900 hover:bg-white transition shadow-2xl"
              >
                Register Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
              <Link
                href="/leaderboard"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 px-8 py-4 font-heading tracking-[0.2em] text-sm uppercase text-white hover:bg-white/20 transition"
              >
                View Leaderboard
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <p className="text-tour-gold font-heading text-3xl tracking-wider">₹50L</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Prize Purse</p>
              </div>
              <div>
                <p className="text-tour-gold font-heading text-3xl tracking-wider">60</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Players</p>
              </div>
              <div>
                <p className="text-tour-gold font-heading text-3xl tracking-wider">3</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
        </div>
      </section>

      {/* Live Leaderboard Strip */}
      <section className="bg-tour-navy-900 border-y border-tour-gold/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <h2 className="font-heading text-lg tracking-[0.2em] uppercase text-white">
                Live Leaderboard
              </h2>
            </div>
            <Link
              href="/leaderboard"
              className="text-tour-gold hover:text-white transition text-sm uppercase tracking-wider"
            >
              Full Board →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {topLeaders.map((entry, index) => {
              const player = players.find((p) => p.id === entry.playerId);
              return (
                <div
                  key={entry.playerId}
                  className="flex items-center gap-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/10 transition"
                >
                  <div className="font-heading text-2xl text-tour-gold">{index + 1}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white truncate">{player?.name}</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider">
                      {entry.scoreToPar < 0 ? "" : "+"}
                      {entry.scoreToPar}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Players */}
      <section className="py-20 bg-gradient-to-b from-white to-tour-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="headline-pill">Player Spotlight</span>
            <h2 className="font-heading text-4xl md:text-5xl tracking-[0.14em] text-tour-navy-900 mt-4">
              Featured Professionals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlayers.map((player) => (
              <Link
                key={player.id}
                href={`/players/${player.id}`}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition"
              >
                <div className="aspect-[3/4] relative">
                  <Image
                    src={player.imageUrl}
                    alt={player.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tour-navy-900 via-tour-navy-900/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-tour-gold mb-2">
                    Handicap {player.handicap}
                  </p>
                  <h3 className="font-heading text-2xl tracking-[0.14em]">{player.name}</h3>
                  <p className="text-sm text-white/80">{player.club}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News & Media Grid */}
      <section className="py-20 bg-tour-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Latest News */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-3xl tracking-[0.14em]">Latest News</h2>
                <Link
                  href="/news"
                  className="text-tour-gold hover:text-white transition text-sm uppercase tracking-wider"
                >
                  All News →
                </Link>
              </div>
              <div className="space-y-4">
                {latestNews.map((article) => (
                  <Link
                    key={article.id}
                    href={`/news/${article.id}`}
                    className="group flex gap-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/10 transition"
                  >
                    <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={article.heroImage}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-110 transition"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-tour-gold uppercase tracking-wider mb-2">
                        {article.category}
                      </p>
                      <h3 className="font-semibold text-white line-clamp-2 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-xs text-white/60">
                        {new Date(article.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Video Highlights */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-heading text-3xl tracking-[0.14em]">Video Highlights</h2>
                <Link
                  href="/media"
                  className="text-tour-gold hover:text-white transition text-sm uppercase tracking-wider"
                >
                  Watch All →
                </Link>
              </div>
              <div className="space-y-4">
                {featuredVideos.map((video) => (
                  <div
                    key={video.id}
                    className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-110 transition"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-tour-gold/90 flex items-center justify-center group-hover:scale-110 transition">
                        <Play className="w-8 h-8 text-tour-navy-900 ml-1" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-semibold">{video.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Showcase */}
      <section className="py-20 bg-gradient-to-b from-tour-cloud to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="headline-pill">Tournament Shop</span>
            <h2 className="font-heading text-4xl md:text-5xl tracking-[0.14em] text-tour-navy-900 mt-4">
              Premium Golf Gear
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.id}`}
                className="group card-elevated overflow-hidden hover:shadow-2xl transition"
              >
                <div className="aspect-square relative bg-tour-cloud">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                  {product.badge && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-tour-gold text-tour-navy-900 text-xs font-bold uppercase tracking-wider">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <p className="text-xs text-tour-muted uppercase tracking-wider mb-2">
                    {product.brand}
                  </p>
                  <h3 className="font-heading text-lg tracking-[0.14em] text-tour-navy-900 mb-3">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    {product.salePrice ? (
                      <>
                        <span className="text-2xl font-bold text-tour-green">
                          ₹{product.salePrice.toLocaleString()}
                        </span>
                        <span className="text-sm text-tour-muted line-through">
                          ₹{product.price.toLocaleString()}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-tour-navy-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center gap-3 rounded-full bg-tour-navy-900 px-8 py-4 font-heading tracking-[0.2em] text-sm uppercase text-white hover:bg-tour-green transition"
            >
              Browse All Products
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white border-t border-tour-cloud">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-heading text-center tracking-[0.2em] text-sm uppercase text-tour-muted mb-10">
            Official Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
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
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&h=800&fit=crop"
            alt="Golf Tournament"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tour-navy-900/95 via-tour-navy-900/85 to-tour-navy-900/95" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white space-y-8">
          <span className="inline-block px-6 py-2 rounded-full bg-tour-gold/20 border border-tour-gold/40 text-tour-gold font-heading text-sm tracking-[0.3em] uppercase font-bold">
            Join The Championship
          </span>
          <h2 className="font-heading text-5xl md:text-6xl tracking-[0.14em]">
            Compete at India's
            <br />
            Premier Golf Event
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Register now to secure your spot in the Hyderabad Open 2026. Limited field of 60
            professional players competing for ₹50 Lakhs in prize money.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/register"
              className="inline-flex items-center gap-3 rounded-full bg-tour-gold px-10 py-5 font-heading tracking-[0.2em] text-sm uppercase text-tour-navy-900 hover:bg-white transition shadow-2xl"
            >
              Register as Player
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/tickets"
              className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 px-10 py-5 font-heading tracking-[0.2em] text-sm uppercase text-white hover:bg-white/20 transition"
            >
              Buy Spectator Tickets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

