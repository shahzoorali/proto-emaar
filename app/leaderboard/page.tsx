import Image from "next/image";
import LeaderboardTable from "@/components/LeaderboardTable";
import { leaderboard } from "@/data/leaderboard";
import RolexClock from "@/components/RolexClock";
import Link from "next/link";
import { Wind, Droplet, Umbrella, Sun, MapPin } from "lucide-react";

const EVENT_NAME = "Hyderabad Open 2026";
const COURSE_NAME = "Emaar Boulder Hills Golf Club";
const LOCATION = "Hyderabad, India";
const EVENT_DATES = "February 12 - 14, 2026";

const currentConditions = {
  temperature: "31°C",
  condition: "Mostly Sunny",
  wind: "18 km/h",
  windDirection: "WNW",
  humidity: "49%",
  precipitation: "1%",
};

export default function LeaderboardPage() {
  const roundLabel = `R${leaderboard.round}`;

  return (
    <div className="min-h-screen bg-tour-surface py-8">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Event Header Card */}
        <div className="card-elevated overflow-hidden border border-tour-cloud/60">
          <div className="bg-gradient-to-br from-[#f4d688] via-[#d9a441] to-[#b27f2b] text-tour-navy-900">
            <div className="px-6 py-8 md:px-12 md:py-10">
              <div className="flex flex-col xl:flex-row gap-10">
                {/* Left: Logo + Event Info */}
                <div className="flex flex-1 gap-6">
                  <div className="relative h-24 w-24 md:h-28 md:w-28 bg-tour-navy-800 rounded-2xl overflow-hidden flex-shrink-0">
                    <Image
                      src="/logo-hyderabad-open.svg"
                      alt="Hyderabad Open 2026"
                      fill
                      className="object-contain p-2"
                      priority
                    />
                  </div>
                  <div className="space-y-4 flex-1">
                    <div className="inline-flex items-center gap-3 bg-tour-navy-900/80 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em]">
                      <span>{roundLabel}</span>
                      <span>In Progress</span>
                    </div>
                    <h1 className="font-heading text-3xl md:text-4xl tracking-[0.18em] text-tour-navy-900 leading-tight">
                      {EVENT_NAME}
                    </h1>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                      <div>
                        <p className="uppercase text-tour-navy-900/60 text-xs tracking-[0.2em]">
                          Course
                        </p>
                        <p className="text-tour-navy-900/90">{COURSE_NAME}</p>
                      </div>
                      <div>
                        <p className="uppercase text-tour-navy-900/60 text-xs tracking-[0.2em]">
                          Location
                        </p>
                        <p className="text-tour-navy-900/90">{LOCATION}</p>
                      </div>
                      <div>
                        <p className="uppercase text-tour-navy-900/60 text-xs tracking-[0.2em]">
                          Dates
                        </p>
                        <p className="text-tour-navy-900/90">{EVENT_DATES}</p>
                      </div>
                      <div>
                        <p className="uppercase text-tour-navy-900/60 text-xs tracking-[0.2em]">
                          Purse
                        </p>
                        <p className="text-tour-navy-900/90">₹50,00,000</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Current Conditions + Rolex */}
                <div className="flex flex-col gap-6 xl:w-80">
                  {/* Current Conditions Compact */}
                  <div className="rounded-2xl bg-white/80 p-6 space-y-4 text-tour-navy-900">
                    <p className="text-xs uppercase tracking-[0.24em] text-tour-muted/80">
                      Current Conditions
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Wind className="h-4 w-4 text-tour-gold" />
                          <span className="text-sm text-tour-navy-900/90">
                            {currentConditions.wind}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplet className="h-4 w-4 text-tour-gold" />
                          <span className="text-sm text-tour-navy-900/90">
                            {currentConditions.humidity}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Umbrella className="h-4 w-4 text-tour-gold" />
                          <span className="text-sm text-tour-navy-900/90">
                            {currentConditions.precipitation}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Sun className="h-8 w-8 text-tour-gold" />
                        <span className="text-2xl font-heading tracking-[0.12em] text-tour-navy-900">
                          {currentConditions.temperature}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-tour-muted/80">
                      <MapPin className="h-3.5 w-3.5 text-tour-gold" />
                      <span>
                        {COURSE_NAME}, {LOCATION}
                      </span>
                    </div>
                  </div>

                  {/* Rolex Clock */}
                  <RolexClock city="Hyderabad" timezone="Asia/Kolkata" />
                </div>
              </div>

              {/* Watch/Listen/Coverage Tiles */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-white">
                <button className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Watch</p>
                    <p className="text-sm font-semibold text-white">FanCode • Live</p>
                  </div>
                  <span className="text-xs font-semibold text-white/80">1:30 AM</span>
                </button>
                <button className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Listen</p>
                    <p className="text-sm font-semibold text-white">Radio</p>
                  </div>
                  <span className="text-xs font-semibold text-white/80">Live</span>
                </button>
                <Link
                  href="/media"
                  className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Coverage</p>
                    <p className="text-sm font-semibold text-white">Highlights</p>
                  </div>
                </Link>
                <Link
                  href="/tickets"
                  className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">Tickets</p>
                    <p className="text-sm font-semibold text-white">Buy Now</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white px-6 md:px-12 py-5 border-t border-tour-cloud/30">
              <div className="flex flex-wrap items-center gap-3 font-heading text-xs uppercase tracking-[0.2em]">
                <span className="px-5 py-2.5 rounded-full bg-tour-navy-900 text-white shadow-lg">
                  Leaderboard
                </span>
                <Link
                  href="/schedule"
                  className="px-5 py-2.5 rounded-full text-tour-muted border border-tour-cloud hover:border-tour-navy-900 hover:text-tour-navy-900 transition"
                >
                  Tee Times
                </Link>
                <Link
                  href="/media"
                  className="px-5 py-2.5 rounded-full text-tour-muted border border-tour-cloud hover:border-tour-navy-900 hover:text-tour-navy-900 transition"
                >
                  Highlights
                </Link>
                <Link
                  href="/news"
                  className="px-5 py-2.5 rounded-full text-tour-muted border border-tour-cloud hover:border-tour-navy-900 hover:text-tour-navy-900 transition"
                >
                  News
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <LeaderboardTable leaderboard={leaderboard} />
      </div>
    </div>
  );
}
