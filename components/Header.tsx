"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/schedule", label: "Schedule" },
    { href: "/players", label: "Players" },
    { href: "/course", label: "Course" },
    { href: "/news", label: "News" },
    { href: "/shop", label: "Shop" },
    { href: "/register", label: "Register" },
    { href: "/tickets", label: "Tickets" },
  ];

  return (
    <header className="bg-tour-navy-900 text-white shadow-2xl">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-heading text-xl md:text-2xl tracking-[0.18em] text-white hover:text-[#ffb81c] transition"
          >
            Hyderabad Open 2026
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-semibold">
            {navItems.slice(0, 7).map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-[#ffb81c] transition">
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-3">
              <Link
                href="/register"
                className="rounded-full border border-white/25 px-4 py-2 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
              >
                Register
              </Link>
              <Link
                href="/tickets"
                className="rounded-full bg-[#ffb81c] px-4 py-2 font-bold text-tour-navy-900 hover:bg-white transition"
              >
                Tickets
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-3 py-2 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
              >
                <ShoppingCart className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <button
            className="lg:hidden rounded-full border border-white/20 p-2"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.18em]">
            {navItems.map((item) => (
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

