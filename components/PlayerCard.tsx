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
      className="group card-elevated overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={player.imageUrl}
          alt={player.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 rounded-full bg-tour-navy-900/90 px-4 py-1 font-heading text-xs tracking-[0.24em] text-white">
          HCP {player.handicap}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-heading text-lg tracking-[0.2em] text-tour-navy-900 group-hover:text-tour-green transition">
          {player.name}
        </h3>
        <p className="text-sm text-tour-muted">{player.hometown}</p>
        <p className="text-xs text-tour-muted flex items-center gap-2 uppercase tracking-[0.24em]">
          <span aria-hidden>{player.countryFlag}</span>
          <span>
            {player.country} ({player.countryCode})
          </span>
        </p>
        <div className="flex items-center gap-6 text-sm text-tour-muted/80">
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.2em] text-xs">Avg Score</span>
            <span className="text-tour-navy-900 font-semibold">{player.stats.scoringAvg}</span>
          </div>
          <div className="flex flex-col">
            <span className="uppercase tracking-[0.2em] text-xs">Driving</span>
            <span className="text-tour-navy-900 font-semibold">{player.stats.drivingDist} yds</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

