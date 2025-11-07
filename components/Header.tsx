"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0a2540] text-white sticky top-0 z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#0d1f33] py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>📧 info@hyderabadopen.com</span>
            <span>📞 +91 40 1234 5678</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/register" className="hover:text-[#00a859] transition">
              Register
            </Link>
            <Link href="/tickets" className="hover:text-[#00a859] transition">
              Tickets
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-[#00a859] transition">
            Hyderabad Open 2026
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-[#00a859] transition font-medium">
              Home
            </Link>
            <Link href="/leaderboard" className="hover:text-[#00a859] transition font-medium">
              Leaderboard
            </Link>
            <Link href="/schedule" className="hover:text-[#00a859] transition font-medium">
              Schedule
            </Link>
            <Link href="/players" className="hover:text-[#00a859] transition font-medium">
              Players
            </Link>
            <Link href="/course" className="hover:text-[#00a859] transition font-medium">
              Course
            </Link>
            <Link href="/news" className="hover:text-[#00a859] transition font-medium">
              News
            </Link>
            <Link href="/shop" className="hover:text-[#00a859] transition font-medium">
              Shop
            </Link>
            <Link href="/shop" className="p-2 hover:bg-[#0d1f33] rounded transition">
              <ShoppingCart className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/leaderboard"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              href="/schedule"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="/players"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Players
            </Link>
            <Link
              href="/course"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Course
            </Link>
            <Link
              href="/news"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              News
            </Link>
            <Link
              href="/shop"
              className="block py-2 hover:text-[#00a859] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

