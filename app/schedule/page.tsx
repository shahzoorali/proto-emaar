"use client";

import { useMemo, useState } from "react";
import { teeSheets } from "@/data/teeSheets";
import { players } from "@/data/players";
import { Calendar, Clock, Download, MapPin, Users } from "lucide-react";

const roundMeta = [
  { label: "Round 1", description: "Opening round pairings and tee times.", color: "bg-tour-navy-900" },
  { label: "Round 2", description: "Moving day tee sheet and pairings.", color: "bg-tour-navy-800" },
  { label: "Final Round", description: "Championship Sunday tee times.", color: "bg-tour-navy-700" },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const formatTime = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute);
  return date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
};

export default function SchedulePage() {
  const [selectedRound, setSelectedRound] = useState(1);

  const groups = useMemo(
    () => teeSheets.filter((slot) => slot.day === selectedRound),
    [selectedRound]
  );

  const firstTee = groups.length
    ? groups.reduce((earliest, current) =>
        current.startTime < earliest.startTime ? current : earliest
      )
    : null;

  const participants = useMemo(() => {
    const ids = new Set<string>();
    groups.forEach((g) => g.group.forEach((id) => ids.add(id)));
    return ids.size;
  }, [groups]);

  const getPlayerName = (playerId: string) =>
    players.find((p) => p.id === playerId)?.name || "Unknown";

  return (
    <div className="min-h-screen bg-tour-surface py-10">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        {/* Hero Card */}
        <section className="card-elevated overflow-hidden border border-tour-cloud/70">
          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] bg-white">
            <div className="p-8 md:p-10 space-y-6">
              <span className="headline-pill">Schedule & Pairings</span>
              <div className="space-y-3">
                <h1 className="font-heading text-4xl tracking-[0.14em] text-tour-navy-900">
                  Hyderabad Open Tee Sheet
                </h1>
                <p className="text-tour-muted/90 text-lg leading-relaxed">
                  Follow official pairings, tee times, and hole assignments for each round of the Hyderabad Open 2026.
                  Stay updated with the latest changes and download the master tee sheet for on-course reference.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-tour-muted/90">
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-tour-green" />
                  <div>
                    <p className="uppercase tracking-[0.18em] text-xs text-tour-muted/70">Players</p>
                    <p className="font-semibold text-tour-navy-900">60 Professionals</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-tour-green" />
                  <div>
                    <p className="uppercase tracking-[0.18em] text-xs text-tour-muted/70">Tournament Dates</p>
                    <p className="font-semibold text-tour-navy-900">{formatDate(teeSheets[0].date)}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-full bg-tour-navy-900 px-6 py-2.5 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-tour-green transition">
                  <Download className="h-4 w-4" />
                  Download PDF
                </button>
                <button className="inline-flex items-center gap-2 rounded-full border border-tour-navy-900 px-6 py-2.5 font-heading tracking-[0.2em] text-xs uppercase text-tour-navy-900 hover:bg-tour-navy-900 hover:text-white transition">
                  Add to Calendar
                </button>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-gradient-to-br from-[#f4d688] via-[#d9a441] to-[#b27f2b] text-tour-navy-900 space-y-6">
              <p className="uppercase text-xs tracking-[0.24em] text-tour-navy-900/70">Round Snapshot</p>
                <div className="space-y-3">
                <p className="text-lg font-heading tracking-[0.16em] text-tour-navy-900/80">
                  {roundMeta[selectedRound - 1].label}
                </p>
                <h2 className="text-3xl font-heading tracking-[0.12em] text-tour-navy-900">
                  {groups.length} Groups • {participants} Players
                </h2>
                {firstTee && (
                  <div className="rounded-2xl bg-white/80 px-5 py-4 space-y-1">
                    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-tour-muted">
                      <Clock className="h-3.5 w-3.5" />
                      First Group
                    </div>
                    <p className="text-lg font-semibold text-tour-navy-900">
                      {formatTime(firstTee.startTime)} • Hole {firstTee.hole}
                    </p>
                    <p className="text-xs text-tour-muted/80">
                      {firstTee.group
                        .map((id) => getPlayerName(id))
                        .slice(0, 3)
                        .join(" · ")}
                    </p>
                  </div>
                )}
              </div>
              <div className="rounded-2xl bg-white/80 px-5 py-4 space-y-1">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-tour-muted">
                  <MapPin className="h-3.5 w-3.5" />
                  Venue
                </div>
                <p className="text-lg font-semibold text-tour-navy-900">Emaar Boulder Hills Golf Club</p>
                <p className="text-xs text-tour-muted/80">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Round Selector */}
        <section className="card-elevated bg-white border border-tour-cloud/70 p-6 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {roundMeta.map((round, idx) => {
              const value = idx + 1;
              const isActive = selectedRound === value;
              return (
                <button
                  key={round.label}
                  onClick={() => setSelectedRound(value)}
                  className={`inline-flex items-center gap-3 rounded-full border px-5 py-2.5 font-heading tracking-[0.18em] text-xs uppercase transition ${
                    isActive
                      ? "border-tour-navy-900 bg-tour-navy-900 text-white shadow-lg"
                      : "border-tour-cloud text-tour-muted hover:border-tour-navy-900 hover:text-tour-navy-900"
                  }`}
                >
                  {round.label}
                </button>
              );
            })}
          </div>
          <p className="text-sm text-tour-muted/90">
            {roundMeta[selectedRound - 1].description} Tee times are subject to change based on weather
            conditions and tournament operations.
          </p>

          {/* Tee Sheets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {groups.map((group, idx) => (
              <div
                key={`${group.startTime}-${group.hole}-${idx}`}
                className="rounded-2xl border border-tour-cloud bg-white px-6 py-5 shadow-sm hover:shadow-md transition"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-tour-muted/70">Tee Time</p>
                    <p className="text-lg font-heading tracking-[0.1em] text-tour-navy-900">
                      {formatTime(group.startTime)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs uppercase tracking-[0.2em] text-tour-muted/70">Starting Hole</p>
                    <p className="text-lg font-heading tracking-[0.1em] text-tour-navy-900">Hole {group.hole}</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {group.group.map((playerId) => (
                    <div
                      key={playerId}
                      className="rounded-xl border border-tour-cloud/70 px-4 py-3 flex items-center justify-between"
                    >
                      <span className="font-semibold text-tour-navy-900">{getPlayerName(playerId)}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-tour-muted/70">IND • Pro</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-tour-muted/70">
                  <span>{group.notes || "Standard grouping"}</span>
                  <span>Group #{idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

