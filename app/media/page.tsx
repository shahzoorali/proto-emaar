import Image from "next/image";
import Link from "next/link";
import { Download, Video, Image as ImageIcon, FileText } from "lucide-react";
import { videos } from "@/data/videos";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">Media Center</h1>
          <p className="text-lg text-gray-600">
            Resources for media professionals covering the Emaar Boulder Hills National Tournament
          </p>
        </div>

        {/* Media Accreditation */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-4">Media Accreditation</h2>
          <p className="text-gray-700 mb-6">
            Media professionals interested in covering the tournament must apply for accreditation.
            Please complete the form below to request media access.
          </p>
          <button className="bg-[#0a2540] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a859] transition">
            Request Media Access
          </button>
        </div>

        {/* Video Gallery */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Video className="w-6 h-6 text-[#00a859]" />
            <h2 className="text-2xl font-bold text-[#0a2540]">Video Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="group relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#0a2540] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <ImageIcon className="w-6 h-6 text-[#00a859]" />
            <h2 className="text-2xl font-bold text-[#0a2540]">Photo Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={`https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=400&fit=crop&sig=${i}`}
                  alt={`Gallery image ${i}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Press Releases */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-6 h-6 text-[#00a859]" />
            <h2 className="text-2xl font-bold text-[#0a2540]">Press Releases</h2>
          </div>
          <div className="space-y-4">
            {[
              "Tournament Announcement - January 2026",
              "Player Registration Opens - January 2026",
              "Course Preparation Update - February 2026",
            ].map((release, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
              >
                <div>
                  <h3 className="font-semibold text-[#0a2540]">{release}</h3>
                  <p className="text-sm text-gray-600">PDF Document</p>
                </div>
                <button className="flex items-center gap-2 text-[#00a859] hover:underline">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-[#0a2540] text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Email:</span> media@boulderhillsgolf.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +91 40 1234 5678
            </p>
            <p>
              <span className="font-semibold">Media Relations:</span> Available 9 AM - 6 PM IST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

