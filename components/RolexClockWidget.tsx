"use client";

import { useEffect, useMemo, useState } from "react";
import { Globe } from "lucide-react";

interface RolexClockWidgetProps {
  cityName: string;
  cityTimeZone: string;
  localLabel?: string;
  variant?: "card" | "compact";
}

function formatTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone,
  }).format(date);
}

export default function RolexClockWidget({
  cityName,
  cityTimeZone,
  localLabel = "Your Time",
  variant = "card",
}: RolexClockWidgetProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const cityTime = useMemo(() => formatTime(now, cityTimeZone), [now, cityTimeZone]);
  const localTime = useMemo(() => formatTime(now, userTimeZone), [now, userTimeZone]);

  if (variant === "compact") {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-xs uppercase tracking-[0.3em] text-tour-muted/80 flex items-center gap-2">
          <span className="text-tour-green">Rolex</span>
          <span className="text-tour-muted">Official Timekeeper</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-tour-cloud px-5 py-4">
            <span className="uppercase text-xs tracking-[0.2em] text-tour-muted flex items-center gap-2">
              <Globe className="h-3.5 w-3.5 text-tour-green" />
              {cityName}
            </span>
            <p className="text-2xl font-heading tracking-[0.12em] text-tour-navy-900 mt-2">
              {cityTime}
            </p>
          </div>
          <div className="rounded-2xl border border-tour-cloud px-5 py-4">
            <span className="uppercase text-xs tracking-[0.2em] text-tour-muted">{localLabel}</span>
            <p className="text-2xl font-heading tracking-[0.12em] text-tour-navy-900 mt-2">
              {localTime}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-elevated overflow-hidden grid grid-cols-1 md:grid-cols-[200px_auto] bg-tour-navy-900 text-white">
      <div className="flex flex-col items-center justify-center gap-4 bg-tour-navy-800/80 py-10 px-6">
        <a
          href="https://www.rolex.com"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 hover:opacity-80 transition"
        >
          <span className="text-[#a3d6a5] uppercase tracking-[0.35em] text-xs font-semibold">ROLEX</span>
          <span className="text-white/60 text-xs">Official Timekeeper</span>
        </a>
        <div className="relative h-32 w-32 rounded-full border-4 border-white/20 flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-2 border-white/40" />
        </div>
      </div>
      <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <button className="text-left rounded-2xl bg-white/5 hover:bg-white/10 transition px-6 py-4">
          <span className="uppercase text-xs tracking-[0.2em] text-white/70 flex items-center gap-2">
            <Globe className="h-3.5 w-3.5 text-tour-green" />
            {cityName}
          </span>
          <p className="text-3xl font-heading tracking-[0.12em] text-white mt-2">{cityTime}</p>
        </button>
        <button className="text-left rounded-2xl bg-white/5 hover:bg-white/10 transition px-6 py-4">
          <span className="uppercase text-xs tracking-[0.2em] text-white/70">{localLabel}</span>
          <p className="text-3xl font-heading tracking-[0.12em] text-white mt-2">{localTime}</p>
        </button>
      </div>
    </div>
  );
}
