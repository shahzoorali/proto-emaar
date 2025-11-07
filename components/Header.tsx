"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-tour-navy-900/95 text-white shadow-2xl">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-xs uppercase tracking-[0.24em] font-semibold">
          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <span>info@hyderabadopen.com</span>
            <span>+91 40 1234 5678</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/register" className="hover:text-[#ffb81c] transition">
              Register
            </Link>
            <Link href="/tickets" className="hover:text-[#ffb81c] transition">
              Tickets
            </Link>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="font-heading text-2xl md:text-3xl tracking-[0.2em] text-white hover:text-[#ffb81c] transition">
            Hyderabad Open 2026
          </Link>

          <div className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-[0.2em] font-semibold">
            {[
              { href: "/", label: "Home" },
              { href: "/leaderboard", label: "Leaderboard" },
              { href: "/schedule", label: "Schedule" },
              { href: "/players", label: "Players" },
              { href: "/course", label: "Course" },
              { href: "/news", label: "News" },
              { href: "/shop", label: "Shop" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative hover:text-[#ffb81c] transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
            >
              <ShoppingCart className="h-4 w-4" />
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md border border-white/20"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm uppercase tracking-[0.18em]">
            {[
              { href: "/", label: "Home" },
              { href: "/leaderboard", label: "Leaderboard" },
              { href: "/schedule", label: "Schedule" },
              { href: "/players", label: "Players" },
              { href: "/course", label: "Course" },
              { href: "/news", label: "News" },
              { href: "/shop", label: "Shop" },
              { href: "/register", label: "Register" },
              { href: "/tickets", label: "Tickets" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-full bg-white/5 px-4 py-2 text-white hover:bg-white/10 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

