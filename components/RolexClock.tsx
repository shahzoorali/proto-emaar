"use client";

import { useEffect, useState } from "react";

interface RolexClockProps {
  city: string;
  timezone: string;
}

const formatTime = (date: Date, timezone: string) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  }).format(date);

const formatDate = (date: Date, timezone: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    weekday: "short",
    timeZone: timezone,
  }).format(date);

export default function RolexClock({ city, timezone }: RolexClockProps) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0a2540] text-white rounded-2xl shadow-lg border border-[#1e3556] w-full max-w-xs">
      <div className="px-6 pt-4 pb-3 border-b border-[#1e3556]">
        <p className="text-xs uppercase tracking-[0.35em] text-[#a3d6a5]">ROLEX</p>
        <p className="text-sm text-gray-300 mt-1">Official Timekeeper</p>
      </div>
      <div className="px-6 py-5">
        <p className="text-sm uppercase tracking-wide text-gray-300">{city}</p>
        <p className="text-4xl font-semibold mt-2 leading-none">{formatTime(now, timezone)}</p>
        <p className="text-xs text-gray-400 mt-3">{formatDate(now, timezone)}</p>
      </div>
    </div>
  );
}
