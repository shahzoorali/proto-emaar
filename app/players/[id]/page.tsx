import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";
import type { Player } from "@/data/players";
import {
  Activity,
  ArrowLeft,
  Award,
  Calendar,
  Flag,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";

const statLabels: Array<{ label: string; key: keyof Player["stats"]; unit: string }> = [
  { label: "Scoring Average", key: "scoringAvg", unit: "" },
  { label: "Driving Distance", key: "drivingDist", unit: " yds" },
  { label: "GIR Percentage", key: "gir", unit: "%" },
  { label: "Putting Average", key: "puttingAvg", unit: "" },
];

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = players.find((p) => p.id === id);

  if (!player) {
    notFound();
  }

  const handicapLabel =
    player.handicap > 0 ? `+${player.handicap.toFixed(1)}` : player.handicap.toFixed(1);

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-gradient-to-br from-tour-gold via-amber-300 to-amber-100 text-tour-navy-900">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <Link
            href="/players"
            className="mb-10 inline-flex items-center gap-2 text-tour-navy-800 transition hover:text-tour-navy-950"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Players
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 shrink-0 rounded-full ring-4 ring-white/50 overflow-hidden shadow-[0_20px_60px_rgba(10,37,64,0.25)]">
              <Image
                src={player.imageUrl}
                alt={player.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 176px, 224px"
                priority
              />
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-tour-navy-700">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-tour-navy-900">
                    <Award className="w-4 h-4 text-tour-navy-900" />
                    Handicap {handicapLabel}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-tour-navy-900">
                    <Calendar className="w-4 h-4 text-tour-navy-900" />
                    Age {player.age}
                  </span>
                </div>

                <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-tour-navy-950">
                  {player.name}
                </h1>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/70 px-5 py-4">
                  <span aria-hidden className="text-3xl">
                    {player.countryFlag}
                  </span>
                  <div>
                    <p className="text-xs uppercase text-tour-navy-600">Nationality</p>
                    <p className="text-base font-semibold text-tour-navy-950">
                      {player.country} <span className="text-tour-navy-600">({player.countryCode})</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/70 px-5 py-4">
                  <MapPin className="w-6 h-6 text-tour-navy-900" />
                  <div>
                    <p className="text-xs uppercase text-tour-navy-600">Hometown</p>
                    <p className="text-base font-semibold text-tour-navy-950">{player.hometown}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/70 px-5 py-4">
                  <Users className="w-6 h-6 text-tour-navy-900" />
                  <div>
                    <p className="text-xs uppercase text-tour-navy-600">Club</p>
                    <p className="text-base font-semibold text-tour-navy-950">{player.club}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statLabels.map(({ label, key, unit }) => (
              <div
                key={key}
                className="rounded-2xl border border-white/70 bg-white/70 px-6 py-5 shadow-[0_18px_40px_rgba(10,37,64,0.18)]"
              >
                <p className="text-xs uppercase tracking-wide text-tour-navy-600">{label}</p>
                <p className="mt-3 text-3xl font-semibold text-tour-navy-950">
                  {player.stats[key].toString()}
                  {unit}
                </p>
                <p className="mt-1 text-xs text-tour-navy-500">Season-to-date</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex gap-6 overflow-x-auto py-4 text-sm font-medium text-slate-600">
            <a href="#overview" className="hover:text-slate-950">
              Overview
            </a>
            <a href="#season-stats" className="hover:text-slate-950">
              Season Stats
            </a>
            <a href="#recent-results" className="hover:text-slate-950">
              Recent Results
            </a>
            <a href="#insights" className="hover:text-slate-950">
              Insights
            </a>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 space-y-16">
        <section id="overview" className="grid gap-8 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Player Bio</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">{player.bio}</p>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Quick Facts
              </h3>
              <dl className="mt-4 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2 font-medium">
                    <Flag className="w-4 h-4 text-teal-500" />
                    Nationality
                  </dt>
                  <dd>
                    {player.country} ({player.countryCode})
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2 font-medium">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    Residence
                  </dt>
                  <dd>{player.hometown}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2 font-medium">
                    <Users className="w-4 h-4 text-teal-500" />
                    Club
                  </dt>
                  <dd>{player.club}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2 font-medium">
                    <Activity className="w-4 h-4 text-teal-500" />
                    Handicap
                  </dt>
                  <dd>{handicapLabel}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section id="season-stats" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Season Snapshot</h2>
              <p className="mt-1 text-sm text-slate-500">
                Key performance indicators mirroring the PGA TOUR stats layout.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {statLabels.map(({ label, key, unit }) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                    <p className="mt-1 text-sm text-slate-600">Tour Benchmark</p>
                  </div>
                  <p className="text-2xl font-semibold text-slate-900">
                    {player.stats[key].toString()}
                    {unit}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-teal-500/10 via-white to-slate-50 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Performance Narrative
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {player.name.split(" ")[0]} continues to offer a balanced profile with a{" "}
                <span className="font-semibold text-slate-900">{player.stats.drivingDist} yds</span>{" "}
                driving average while maintaining a{" "}
                <span className="font-semibold text-slate-900">{player.stats.gir}%</span> greens-in-regulation
                rate. The scoring average of{" "}
                <span className="font-semibold text-slate-900">{player.stats.scoringAvg}</span> suggests strong
                consistency across tournament play, echoing the PGA TOUR emphasis on well-rounded
                metrics.
              </p>
            </div>
          </div>
        </section>

        <section
          id="recent-results"
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-teal-500" />
                Recent Results
              </h2>
              <p className="text-sm text-slate-500">
                Tournament finishes formatted similar to the PGA TOUR leaderboard recap.
              </p>
            </div>
          </div>

          {player.recentResults.length > 0 ? (
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full divide-y divide-slate-100 text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-5 py-3 font-medium">Tournament</th>
                    <th className="px-5 py-3 font-medium text-right">Position</th>
                    <th className="px-5 py-3 font-medium text-right">Score</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                  {player.recentResults.map((result, index) => (
                    <tr key={index} className="hover:bg-slate-50/70">
                      <td className="px-5 py-4 font-medium text-slate-900">{result.tournament}</td>
                      <td className="px-5 py-4 text-right font-semibold text-teal-600">
                        T{result.position}
                      </td>
                      <td className="px-5 py-4 text-right">
                        {result.score > 0 ? `+${result.score}` : result.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="mt-6 rounded-xl bg-slate-50 px-4 py-5 text-sm text-slate-500">
              No recent results recorded for this player.
            </p>
          )}
        </section>

        <section id="insights" className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">Course Fit & Strategy</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              With a reliable combination of distance and accuracy, {player.name} profiles well for
              courses that reward precise approach play. The greens-in-regulation percentage of{" "}
              <span className="font-semibold text-slate-900">{player.stats.gir}%</span> is a key indicator of
              scoring opportunities, while the putting average keeps momentum on the greens. Expect a
              steady performance on layouts favoring strategic ball placement.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 text-white shadow-lg shadow-slate-950/20">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-teal-300" />
              Form Guide
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/80">
              Recent finishes illustrate a confident rhythm reminiscent of the PGA TOUR form tracker.
              Maintaining top placings like T{player.recentResults[0]?.position ?? "—"} keeps the player
              firmly in contention. Tracking these data points over time will inform schedule decisions
              and preparation windows.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

