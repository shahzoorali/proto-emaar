import { teeSheets } from "@/data/teeSheets";
import { players } from "@/data/players";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function SchedulePage() {
  const getPlayerName = (playerId: string) => {
    return players.find((p) => p.id === playerId)?.name || "Unknown";
  };

  const rounds = [1, 2, 3];
  const roundNames = ["Round 1", "Round 2", "Final Round"];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">Tournament Schedule</h1>
          <p className="text-lg text-gray-600">
            Tee times and pairings for the Emaar Boulder Hills National Tournament
          </p>
        </div>

        {rounds.map((round) => {
          const roundTeeSheets = teeSheets.filter((ts) => ts.day === round);
          const roundDate = roundTeeSheets[0]?.date || "";

          return (
            <div key={round} className="mb-12">
              <div className="bg-[#0a2540] text-white p-6 rounded-t-lg">
                <div className="flex items-center gap-4">
                  <Calendar className="w-6 h-6" />
                  <div>
                    <h2 className="text-2xl font-bold">{roundNames[round - 1]}</h2>
                    <p className="text-gray-300">
                      {new Date(roundDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-b-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#0a2540]">
                          <Clock className="w-4 h-4 inline mr-2" />
                          Time
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#0a2540]">
                          <MapPin className="w-4 h-4 inline mr-2" />
                          Hole
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#0a2540]">
                          Group
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-[#0a2540]">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {roundTeeSheets.map((teeSheet, index) => (
                        <tr
                          key={index}
                          className="border-b hover:bg-gray-50 transition"
                        >
                          <td className="px-6 py-4 font-semibold text-[#0a2540]">
                            {teeSheet.startTime}
                          </td>
                          <td className="px-6 py-4 text-gray-700">Hole {teeSheet.hole}</td>
                          <td className="px-6 py-4">
                            <div className="space-y-1">
                              {teeSheet.group.map((playerId) => (
                                <div key={playerId} className="text-gray-700">
                                  {getPlayerName(playerId)}
                                </div>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {teeSheet.notes || "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

