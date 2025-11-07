import Link from "next/link";
import Image from "next/image";
import { Player } from "@/data/players";

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link
      href={`/players/${player.id}`}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={player.imageUrl}
          alt={player.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-[#0a2540] text-white px-3 py-1 rounded-full text-sm font-semibold">
          HCP {player.handicap}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-[#0a2540] group-hover:text-[#00a859] transition">
          {player.name}
        </h3>
        <p className="text-sm text-gray-600 mt-1">{player.hometown}</p>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <span>{player.countryFlag}</span>
          <span>
            {player.country} ({player.countryCode})
          </span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{player.club}</p>
        <div className="mt-3 flex gap-4 text-sm">
          <div>
            <span className="text-gray-500">Avg Score:</span>
            <span className="font-semibold ml-1">{player.stats.scoringAvg}</span>
          </div>
          <div>
            <span className="text-gray-500">Driving:</span>
            <span className="font-semibold ml-1">{player.stats.drivingDist} yds</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

