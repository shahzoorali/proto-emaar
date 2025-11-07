"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Leaderboard, LeaderboardEntry } from "@/data/leaderboard";
import { players } from "@/data/players";

type LeaderboardView = "total" | "r1" | "r2" | "r3";

interface LeaderboardTableProps {
  leaderboard: Leaderboard;
}

const ROUND_PAR = 72;

export default function LeaderboardTable({ leaderboard }: LeaderboardTableProps) {
  const [view, setView] = useState<LeaderboardView>("total");

  const entries = useMemo(() => {
    const sorted = [...leaderboard.entries];
    switch (view) {
      case "r1":
        return sorted.sort((a, b) => a.round1 - b.round1);
      case "r2":
        return sorted.sort((a, b) => a.round2 - b.round2);
      case "r3":
        return sorted.sort((a, b) => (a.round3 ?? 999) - (b.round3 ?? 999));
      default:
        return sorted.sort((a, b) => a.total - b.total);
    }
  }, [leaderboard.entries, view]);

  const getPlayer = (id: string) => players.find((p) => p.id === id);

  const getRoundLabel = () => {
    switch (view) {
      case "r1":
        return "R1";
      case "r2":
        return "R2";
      case "r3":
        return "R3";
      default:
        return "TOTAL";
    }
  };

  const formatScoreToPar = (toPar?: number) => {
    if (toPar === undefined || Number.isNaN(toPar)) {
      return "--";
    }

    if (toPar === 0) {
      return "E";
    }

    return `${toPar > 0 ? "+" : ""}${toPar}`;
  };

  const formatPosition = (entry: LeaderboardEntry, index: number) => {
    if (view === "total") {
      const tied = entries.filter((e) => e.scoreToPar === entry.scoreToPar).length > 1;
      return `${tied ? "T" : ""}${entry.position}`;
    }

    const rank = index + 1;
    const tied = entries.filter((e) => {
      const roundScore = view === "r1" ? e.round1 : view === "r2" ? e.round2 : e.round3;
      const entryScore = view === "r1" ? entry.round1 : view === "r2" ? entry.round2 : entry.round3;
      return roundScore === entryScore;
    }).length;

    return `${tied > 1 ? "T" : ""}${rank}`;
  };

  const getRoundScore = (entry: LeaderboardEntry) => {
    switch (view) {
      case "r1":
        return entry.round1;
      case "r2":
        return entry.round2;
      case "r3":
        return entry.round3;
      default:
        return entry.total;
    }
  };

  const getScoreToPar = (entry: LeaderboardEntry) => {
    if (view === "total") {
      return entry.scoreToPar;
    }
    const roundScore = getRoundScore(entry);
    if (!roundScore) {
      return undefined;
    }
    return roundScore - ROUND_PAR;
  };

  const updatedTime = useMemo(() => {
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
      .format(new Date(leaderboard.updatedAt))
      .toUpperCase();
  }, [leaderboard.updatedAt]);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
      {/* View Switcher */}
      <div className="bg-[#0a2540] px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2 text-white text-sm font-semibold uppercase tracking-wide">
          {([
            { label: "Total", value: "total" },
            { label: "Round 1", value: "r1" },
            { label: "Round 2", value: "r2" },
            { label: "Round 3", value: "r3" },
          ] as const).map((tab) => (
            <button
              key={tab.value}
              onClick={() => setView(tab.value)}
              className={`px-4 py-1.5 rounded-full transition ${
                view === tab.value
                  ? "bg-white text-[#0a2540]"
                  : "bg-[#112b4a] text-gray-200 hover:bg-[#16365a]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span className="text-sm text-gray-300">Last updated {updatedTime}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-tour-cloud text-tour-navy-900 border-b border-tour-cloud/80 uppercase text-xs tracking-wider">
            <tr>
              <th className="px-4 py-3 text-left">Pos</th>
              <th className="px-4 py-3 text-left">Player</th>
              <th className="px-3 py-3 text-center">To Par</th>
              <th className="px-3 py-3 text-center">Today</th>
              <th className="px-3 py-3 text-center">Thru</th>
              <th className="px-3 py-3 text-center">R1</th>
              <th className="px-3 py-3 text-center">R2</th>
              <th className="px-3 py-3 text-center">R3</th>
              <th className="px-3 py-3 text-center">{getRoundLabel()}</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => {
              const player = getPlayer(entry.playerId);
              const toPar = getScoreToPar(entry);
              const roundScore = getRoundScore(entry);
              const isLeader = index === 0 && view === "total";

              return (
                <tr
                  key={entry.playerId}
                  className={`border-b border-tour-cloud transition ${
                    isLeader
                      ? "bg-[#f0fff4]"
                      : index % 2 === 0
                        ? "bg-white"
                        : "bg-tour-cloud"
                  } hover:bg-[#e0f0ff]`}
                >
                  <td className="px-4 py-3 font-semibold text-[#0a2540]">{formatPosition(entry, index)}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        {player ? (
                          <Link
                            href={`/players/${player.id}`}
                            className="font-semibold text-[#0a2540] leading-tight hover:text-[#00a859] transition"
                          >
                            {player.name}
                          </Link>
                        ) : (
                          <span className="font-semibold text-[#0a2540] leading-tight">Unknown Player</span>
                        )}
                        {player && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <span aria-hidden>{player.countryFlag}</span>
                            <span>
                              {player.country} ({player.countryCode})
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td
                    className={`px-3 py-3 text-center font-bold ${
                      toPar !== undefined && toPar < 0
                        ? "text-[#047857]"
                        : toPar !== undefined && toPar > 0
                          ? "text-[#b91c1c]"
                          : "text-tour-navy-900"
                    }`}
                  >
                    {formatScoreToPar(toPar)}
                  </td>
                  <td className="px-3 py-3 text-center font-semibold text-[#0a2540]">
                    {entry.today > 0 ? `+${entry.today}` : entry.today === 0 ? "E" : entry.today}
                  </td>
                  <td className="px-3 py-3 text-center text-gray-600">{entry.thru}</td>
                  <td className="px-3 py-3 text-center text-gray-700">{entry.round1}</td>
                  <td className="px-3 py-3 text-center text-gray-700">{entry.round2}</td>
                  <td className="px-3 py-3 text-center text-gray-700">{entry.round3 ?? "--"}</td>
                  <td className="px-3 py-3 text-center font-semibold text-[#0a2540]">
                    {roundScore ?? "--"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

