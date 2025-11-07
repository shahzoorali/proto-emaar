"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    handicap: "",
    club: "",
    hometown: "",
    association: "",
    preferredTeeTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-12 text-center max-w-md">
          <CheckCircle className="w-16 h-16 text-[#00a859] mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-[#0a2540] mb-4">Registration Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for registering. We'll review your application and contact you within 48
            hours with confirmation and further details.
          </p>
          <a
            href="/"
            className="inline-block bg-[#0a2540] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00a859] transition"
          >
            Return to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">
            Player Registration
          </h1>
          <p className="text-lg text-gray-600">
            Register to compete in the Emaar Boulder Hills National Tournament
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                Handicap (0-18) *
              </label>
              <input
                type="number"
                min="0"
                max="18"
                required
                value={formData.handicap}
                onChange={(e) => setFormData({ ...formData, handicap: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">Home Club *</label>
                <input
                  type="text"
                  required
                  value={formData.club}
                  onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0a2540] mb-2">Hometown *</label>
                <input
                  type="text"
                  required
                  value={formData.hometown}
                  onChange={(e) => setFormData({ ...formData, hometown: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                Golf Association Membership *
              </label>
              <input
                type="text"
                required
                value={formData.association}
                onChange={(e) => setFormData({ ...formData, association: e.target.value })}
                placeholder="e.g., Indian Golf Union, State Golf Association"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#0a2540] mb-2">
                Preferred Tee Time
              </label>
              <select
                value={formData.preferredTeeTime}
                onChange={(e) => setFormData({ ...formData, preferredTeeTime: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00a859] focus:border-transparent"
              >
                <option value="">No Preference</option>
                <option value="early">Early Morning (7:00-8:00 AM)</option>
                <option value="mid">Mid Morning (8:00-9:00 AM)</option>
                <option value="afternoon">Afternoon (12:00-1:00 PM)</option>
              </select>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                * Required fields. By submitting this form, you confirm that all information
                provided is accurate and that you meet the tournament eligibility requirements.
                Handicap verification may be required.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a2540] text-white py-3 rounded-lg font-semibold hover:bg-[#00a859] transition"
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

