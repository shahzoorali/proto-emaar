import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
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
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Emaar Boulder Hills Golf Club</li>
              <li>Hyderabad, Telangana, India</li>
              <li>📧 info@boulderhillsgolf.com</li>
              <li>📞 +91 40 1234 5678</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-[#0d1f33] rounded hover:bg-[#00a859] transition"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#0d1f33] rounded hover:bg-[#00a859] transition"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#0d1f33] rounded hover:bg-[#00a859] transition"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-[#0d1f33] rounded hover:bg-[#00a859] transition"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-bold mb-4">Official Partners</h3>
          <div className="flex flex-wrap gap-6 items-center opacity-75">
            <div className="text-sm">Emaar Properties</div>
            <div className="text-sm">Hyderabad Golf Association</div>
            <div className="text-sm">Indian Golf Union</div>
            <div className="text-sm">TaylorMade</div>
            <div className="text-sm">Titleist</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© 2026 Emaar Boulder Hills National Tournament. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

