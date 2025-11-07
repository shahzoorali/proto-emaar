import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-tour-navy-900 text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="font-heading text-sm tracking-[0.24em] uppercase mb-4 text-white">
              About
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/course" className="hover:text-[#00a859] transition">
                  The Course
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#00a859] transition">
                  Tournament News
                </Link>
              </li>
              <li>
                <Link href="/players" className="hover:text-[#00a859] transition">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-[#00a859] transition">
                  Schedule
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm tracking-[0.24em] uppercase mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <Link href="/register" className="hover:text-[#00a859] transition">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-[#00a859] transition">
                  Buy Tickets
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#00a859] transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/media" className="hover:text-[#00a859] transition">
                  Media Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm tracking-[0.24em] uppercase mb-4 text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Emaar Boulder Hills Golf Club</li>
              <li>Hyderabad, Telangana, India</li>
              <li>📧 info@hyderabadopen.com</li>
              <li>📞 +91 40 1234 5678</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-heading text-sm tracking-[0.24em] uppercase mb-4 text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full border border-white/10 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-white/10 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-white/10 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full border border-white/10 hover:border-[#ffb81c] hover:text-[#ffb81c] transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="font-heading text-sm tracking-[0.24em] uppercase mb-6 text-white">
            Official Partners
          </h3>
          <div className="flex flex-wrap gap-8 items-center opacity-80 text-sm">
            <span>Porsche</span>
            <span>Emirates</span>
            <span>Emaar</span>
            <span>Lexus</span>
            <span>Land Rover</span>
            <span>TaylorMade</span>
            <span>Titleist</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-xs uppercase tracking-[0.24em] text-white/60">
          <p>© 2026 Hyderabad Open Championship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

