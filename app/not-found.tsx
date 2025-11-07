import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0a2540] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#0a2540] mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#0a2540] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00a859] transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

