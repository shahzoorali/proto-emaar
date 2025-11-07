"use client";

import { useState } from "react";
import { players } from "@/data/players";
import PlayerCard from "@/components/PlayerCard";

export default function PlayersPage() {
  const [selectedHandicap, setSelectedHandicap] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlayers = players.filter((player) => {
    const matchesHandicap =
      selectedHandicap === "all" ||
      (selectedHandicap === "0-5" && player.handicap <= 5) ||
      (selectedHandicap === "6-10" && player.handicap >= 6 && player.handicap <= 10) ||
      (selectedHandicap === "11-18" && player.handicap >= 11);
    const matchesSearch =
      searchTerm === "" ||
      player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.hometown.toLowerCase().includes(searchTerm.toLowerCase()) ||
      player.club.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesHandicap && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">Players</h1>
          <p className="text-lg text-gray-600">
            Meet the professional golfers competing in the Emaar Boulder Hills National Tournament
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                Search Players
              </label>
              <input
                type="text"
                placeholder="Search by name, hometown, or club..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                Handicap Range
              </label>
              <select
                value={selectedHandicap}
                onChange={(e) => setSelectedHandicap(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
              >
                <option value="all">All Handicaps</option>
                <option value="0-5">0-5</option>
                <option value="6-10">6-10</option>
                <option value="11-18">11-18</option>
              </select>
            </div>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No players found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

