import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { players } from "@/data/players";
import { ArrowLeft, MapPin, Users, Trophy } from "lucide-react";

export default async function PlayerPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const player = players.find((p) => p.id === id);

  if (!player) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/players"
          className="inline-flex items-center gap-2 text-[#00a859] hover:underline mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Players
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            <div className="lg:col-span-1">
              <div className="relative h-96 w-full rounded-lg overflow-hidden">
                <Image
                  src={player.imageUrl}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="mb-4">
                <span className="inline-block bg-[#0a2540] text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  Handicap {player.handicap}
                </span>
                <h1 className="text-4xl font-bold text-[#0a2540] mt-2">{player.name}</h1>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#00a859]" />
                  <span>{player.hometown}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <span className="text-2xl" aria-hidden>
                    {player.countryFlag}
                  </span>
                  <span className="font-semibold">
                    {player.country} ({player.countryCode})
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Users className="w-5 h-5 text-[#00a859]" />
                  <span>{player.club}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="font-semibold">Age:</span>
                  <span>{player.age}</span>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-[#0a2540] mb-2">Bio</h2>
                <p className="text-gray-700">{player.bio}</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Scoring Avg</p>
                  <p className="text-2xl font-bold text-[#0a2540]">{player.stats.scoringAvg}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Driving Dist</p>
                  <p className="text-2xl font-bold text-[#0a2540]">{player.stats.drivingDist} yds</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">GIR %</p>
                  <p className="text-2xl font-bold text-[#0a2540]">{player.stats.gir}%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Putting Avg</p>
                  <p className="text-2xl font-bold text-[#0a2540]">{player.stats.puttingAvg}</p>
                </div>
              </div>

              {player.recentResults.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-[#0a2540] mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-[#00a859]" />
                    Recent Results
                  </h2>
                  <div className="space-y-2">
                    {player.recentResults.map((result, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <p className="font-semibold text-[#0a2540]">{result.tournament}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-[#00a859]">T{result.position}</p>
                          <p className="text-sm text-gray-600">
                            {result.score > 0 ? "+" : ""}
                            {result.score}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

