import Image from "next/image";
import LeaderboardTable from "@/components/LeaderboardTable";
import { leaderboard } from "@/data/leaderboard";
import RolexClock from "@/components/RolexClock";
import Link from "next/link";

const EVENT_NAME = "Hyderabad Open 2026";
const COURSE_NAME = "Emaar Boulder Hills Golf Club";
const LOCATION = "Hyderabad, India";
const EVENT_DATES = "February 12 - 14, 2026";

export default function LeaderboardPage() {
  const roundLabel = `R${leaderboard.round}`;

  return (
    <div className="min-h-screen bg-tour-cloud py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-tour-cloud/60">
          <div className="bg-tour-navy-900 text-white px-6 py-10 md:px-12 md:py-12">
            <div className="flex flex-col xl:flex-row gap-12">
              <div className="flex flex-1 gap-6">
                <div className="relative h-24 w-24 md:h-28 md:w-28 bg-tour-navy-800 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo-hyderabad-open.svg"
                    alt="Hyderabad Open 2026"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="space-y-4 flex-1">
                  <div className="inline-flex items-center gap-3 bg-[#112c4c] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">
                    <span>{roundLabel}</span>
                    <span>In Progress</span>
                  </div>
                  <h1 className="font-heading text-3xl md:text-4xl tracking-[0.18em] text-white leading-tight drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
                    {EVENT_NAME}
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-white/85">
                    <div>
                      <p className="uppercase text-white/60 text-xs tracking-[0.2em]">Course</p>
                      <p>{COURSE_NAME}</p>
                    </div>
                    <div>
                      <p className="uppercase text-white/60 text-xs tracking-[0.2em]">Location</p>
                      <p>{LOCATION}</p>
                    </div>
                    <div>
                      <p className="uppercase text-white/60 text-xs tracking-[0.2em]">Dates</p>
                      <p>{EVENT_DATES}</p>
                    </div>
                    <div>
                      <p className="uppercase text-white/60 text-xs tracking-[0.2em]">Purse</p>
                      <p>₹50,00,000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-stretch xl:w-72">
                <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-white/85">
                  <div>
                    <p className="uppercase text-white/60 tracking-[0.2em] text-xs">Field</p>
                    <p className="font-semibold">60 Professionals</p>
                  </div>
                  <div>
                    <p className="uppercase text-white/60 tracking-[0.2em] text-xs">Cut</p>
                    <p className="font-semibold">Top 40 & ties</p>
                  </div>
                </div>
                <RolexClock city="Hyderabad" timezone="Asia/Kolkata" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3">
              <button className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Watch</p>
                  <p className="text-sm font-semibold text-white">FanCode • Live Coverage</p>
                </div>
                <span className="text-xs font-semibold text-white/80">Sat 1:30 AM IST</span>
              </button>
              <button className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Listen</p>
                  <p className="text-sm font-semibold text-white">Hyderabad Open Radio</p>
                </div>
                <span className="text-xs font-semibold text-white/80">Live</span>
              </button>
              <Link
                href="/media"
                className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Coverage</p>
                  <p className="text-sm font-semibold text-white">View All Highlights</p>
                </div>
                <span className="text-xs font-semibold text-white/80">Media Center</span>
              </Link>
              <Link
                href="/tickets"
                className="flex items-center justify-between gap-3 bg-white/10 hover:bg-white/20 transition rounded-xl px-5 py-4 text-left"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">Tickets</p>
                  <p className="text-sm font-semibold text-white">Secure Your Spot</p>
                </div>
                <span className="text-xs font-semibold text-white/80">Buy Now</span>
              </Link>
            </div>
          </div>

          <div className="bg-white px-6 md:px-10 py-5 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-3 font-heading text-xs uppercase tracking-[0.2em]">
              <span className="px-5 py-2.5 rounded-full bg-tour-navy-900 text-white">Leaderboard</span>
              <span className="px-5 py-2.5 rounded-full text-tour-muted border border-tour-cloud hover:border-tour-navy-900 hover:text-tour-navy-900 transition cursor-pointer">
                Tee Times
              </span>
              <span className="px-5 py-2.5 rounded-full text-tour-muted border border-tour-cloud hover:border-tour-navy-900 hover:text-tour-navy-900 transition cursor-pointer">
                Highlights
              </span>
            </div>
          </div>
        </div>

        <LeaderboardTable leaderboard={leaderboard} />
      </div>
    </div>
  );
}

