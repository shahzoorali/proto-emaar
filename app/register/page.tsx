"use client";

import { useState } from "react";
import { Award, CalendarDays, CheckCircle, Globe, MapPin, Phone, ShieldCheck, Trophy } from "lucide-react";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  handicap: "",
  category: "",
  club: "",
  hometown: "",
  association: "",
  worldRanking: "",
  preferredTeeTime: "",
  shirtSize: "",
  achievements: "",
  travelNotes: "",
  medicalNotes: "",
  coachName: "",
  coachPhone: "",
  socialHandle: "",
  caddieName: "",
  caddiePhone: "",
  termsAccepted: false,
};

type FormState = typeof INITIAL_FORM;

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms & conditions to proceed.");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-tour-surface py-16 flex items-center justify-center">
        <div className="card-elevated max-w-lg text-center px-12 py-14 space-y-6 border border-tour-cloud/70">
          <CheckCircle className="w-16 h-16 text-tour-green mx-auto" />
          <div className="space-y-3">
            <h1 className="font-heading text-4xl tracking-[0.14em] text-tour-navy-900">
              Registration Complete
            </h1>
            <p className="text-tour-muted/90 text-lg leading-relaxed">
              Thank you for submitting your credentials. Our championship committee will review your
              profile and share the official confirmation within 48 hours.
            </p>
          </div>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-tour-navy-900 px-8 py-3 font-heading tracking-[0.2em] text-xs uppercase text-white hover:bg-tour-green transition"
          >
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-tour-surface via-white to-tour-cloud py-14">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Hero / Details */}
        <section className="relative overflow-hidden rounded-3xl border border-tour-gold/30 bg-gradient-to-br from-[#f4d688] via-[#d9a441] to-[#b27f2b] p-10 text-tour-navy-900 shadow-[0_30px_80px_rgba(178,127,43,0.35)] space-y-10">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),_transparent_60%)]" />
          <div className="relative space-y-6">
            <span className="headline-pill bg-tour-navy-900/80 text-white border border-white/20">
              Player Entry
            </span>
            <h1 className="font-heading text-4xl md:text-5xl tracking-[0.14em] text-tour-navy-900 leading-tight">
              Hyderabad Open Registration
            </h1>
            <p className="text-base leading-relaxed text-tour-navy-900/85 max-w-3xl">
              Submit your credentials to compete at Emaar Boulder Hills Golf Club. Open to elite
              professionals and top amateurs (Handicap 0-18). Invitations are confirmed after
              committee review.
            </p>
          </div>

          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Trophy,
                title: "₹50 Lakhs Purse",
                description: "72-hole stroke play with cut after Round 2.",
              },
              {
                icon: ShieldCheck,
                title: "IGU Sanctioned",
                description: "World Amateur Golf Ranking points available.",
              },
              {
                icon: CalendarDays,
                title: "February 12 - 14",
                description: "Practice round access from Feb 10th.",
              },
              {
                icon: Award,
                title: "Field: 60 players",
                description: "Top qualifiers + international invitations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-sm"
              >
                <item.icon className="mt-1 h-6 w-6 flex-shrink-0 text-tour-navy-900" />
                <div className="space-y-1">
                  <p className="font-heading text-sm tracking-[0.18em] uppercase text-tour-navy-900">
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed text-tour-navy-900/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-4 space-y-2 rounded-3xl border border-white/40 bg-white/60 px-6 py-5 backdrop-blur-sm">
            <p className="text-xs uppercase tracking-[0.24em] text-tour-navy-900/70">Need Assistance?</p>
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-sm text-tour-navy-900/85">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-tour-navy-900" /> +91 40 1234 5678
              </span>
              <span className="inline-flex items-center gap-2">
                <Globe className="h-4 w-4 text-tour-navy-900" /> players@hyderabadopen.com
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-tour-navy-900" /> Player Concierge, Tournament Office
              </span>
            </div>
          </div>
        </section>

        {/* Form */}
        <section className="card-elevated bg-white border border-tour-cloud/70 px-8 py-10 space-y-8">
          <header className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-tour-muted">
              Step 1 • Player Information
            </p>
            <h2 className="font-heading text-3xl tracking-[0.14em] text-tour-navy-900">
              Submit Your Credentials
            </h2>
            <p className="text-sm text-tour-muted/90">
              Complete the form below. Items marked with * are required for eligibility review.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <section className="space-y-4">
              <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-tour-muted">
                Personal Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  label="First Name *"
                  value={formData.firstName}
                  onChange={(value) => handleChange("firstName", value)}
                  autoComplete="given-name"
                  required
                />
                <TextField
                  label="Last Name *"
                  value={formData.lastName}
                  onChange={(value) => handleChange("lastName", value)}
                  autoComplete="family-name"
                  required
                />
                <TextField
                  label="Email *"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleChange("email", value)}
                  autoComplete="email"
                  required
                />
                <TextField
                  label="Mobile Number *"
                  type="tel"
                  value={formData.phone}
                  onChange={(value) => handleChange("phone", value)}
                  autoComplete="tel"
                  required
                />
                <TextField
                  label="Date of Birth *"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(value) => handleChange("dateOfBirth", value)}
                  required
                />
                <SelectField
                  label="Player Category *"
                  value={formData.category}
                  onChange={(value) => handleChange("category", value)}
                  options={[
                    { label: "Select Category", value: "" },
                    { label: "Professional", value: "pro" },
                    { label: "Amateur", value: "amateur" },
                    { label: "International Invitee", value: "international" },
                  ]}
                  required
                />
              </div>
            </section>

            {/* Competitive Credentials */}
            <section className="space-y-4">
              <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-tour-muted">
                Competitive Credentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  label="Handicap (0-18) *"
                  type="number"
                  min={0}
                  max={18}
                  value={formData.handicap}
                  onChange={(value) => handleChange("handicap", value)}
                  required
                />
                <SelectField
                  label="Preferred Tee Block"
                  value={formData.preferredTeeTime}
                  onChange={(value) => handleChange("preferredTeeTime", value)}
                  options={[
                    { label: "No Preference", value: "" },
                    { label: "Early Morning (07:00 - 08:00)", value: "early" },
                    { label: "Mid Morning (08:00 - 09:30)", value: "mid" },
                    { label: "Afternoon (12:00 - 13:00)", value: "afternoon" },
                  ]}
                />
                <TextField
                  label="Home Club *"
                  value={formData.club}
                  onChange={(value) => handleChange("club", value)}
                  required
                />
                <TextField
                  label="Hometown *"
                  value={formData.hometown}
                  onChange={(value) => handleChange("hometown", value)}
                  required
                />
                <TextField
                  label="Golf Association Membership *"
                  value={formData.association}
                  onChange={(value) => handleChange("association", value)}
                  placeholder="Indian Golf Union, State Golf Association, etc."
                  required
                />
                <TextField
                  label="World / National Ranking"
                  value={formData.worldRanking}
                  onChange={(value) => handleChange("worldRanking", value)}
                  placeholder="Optional"
                />
                <SelectField
                  label="Tournament Apparel Size"
                  value={formData.shirtSize}
                  onChange={(value) => handleChange("shirtSize", value)}
                  options={[
                    { label: "Select Size", value: "" },
                    { label: "Small", value: "S" },
                    { label: "Medium", value: "M" },
                    { label: "Large", value: "L" },
                    { label: "XL", value: "XL" },
                    { label: "XXL", value: "XXL" },
                  ]}
                />
              </div>
            </section>

            {/* Additional Information */}
            <section className="space-y-4">
              <h3 className="font-heading text-sm tracking-[0.2em] uppercase text-tour-muted">
                Supporting Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextField
                  label="Coach / Manager Name"
                  value={formData.coachName}
                  onChange={(value) => handleChange("coachName", value)}
                />
                <TextField
                  label="Coach / Manager Phone"
                  value={formData.coachPhone}
                  onChange={(value) => handleChange("coachPhone", value)}
                />
                <TextField
                  label="Caddie Name"
                  value={formData.caddieName}
                  onChange={(value) => handleChange("caddieName", value)}
                />
                <TextField
                  label="Caddie Phone"
                  value={formData.caddiePhone}
                  onChange={(value) => handleChange("caddiePhone", value)}
                />
                <TextField
                  label="Primary Social Handle"
                  value={formData.socialHandle}
                  onChange={(value) => handleChange("socialHandle", value)}
                  placeholder="@hyderabadpro or URL"
                />
              </div>
              <div className="grid grid-cols-1 gap-6">
                <TextareaField
                  label="Recent Achievements & Tournament Highlights"
                  value={formData.achievements}
                  onChange={(value) => handleChange("achievements", value)}
                  placeholder="List notable finishes, awards, or other highlights from the last 24 months."
                />
                <TextareaField
                  label="Travel & Accommodation Notes"
                  value={formData.travelNotes}
                  onChange={(value) => handleChange("travelNotes", value)}
                  placeholder="Arrival plans, airport transfers, special requirements."
                />
                <TextareaField
                  label="Medical or Dietary Notes"
                  value={formData.medicalNotes}
                  onChange={(value) => handleChange("medicalNotes", value)}
                  placeholder="Optional — emergency contacts, medication, dietary needs."
                />
              </div>
            </section>

            {/* Terms */}
            <section className="rounded-3xl bg-tour-cloud px-6 py-5 space-y-4 border border-tour-cloud/70">
              <div className="flex items-start gap-3">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-tour-muted text-tour-green focus:ring-tour-green"
                  checked={formData.termsAccepted}
                  onChange={(e) => handleChange("termsAccepted", e.target.checked)}
                />
                <label htmlFor="terms" className="text-sm text-tour-muted/90 leading-relaxed">
                  I confirm that all submitted information is accurate, I meet tournament eligibility
                  requirements, and I agree to the Hyderabad Open 2026 competition policies.
                </label>
              </div>
              <p className="text-xs text-tour-muted/70">
                Personal data is protected under the Hyderabad Open privacy framework. Handicap or
                ranking verification may be requested by the tournament committee.
              </p>
            </section>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-full bg-tour-navy-900 px-6 py-3 font-heading tracking-[0.24em] text-xs uppercase text-white hover:bg-tour-green transition"
            >
              Submit Registration
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  min?: number;
  max?: number;
  required?: boolean;
}

function TextField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  autoComplete,
  min,
  max,
  required,
}: TextFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-semibold text-tour-navy-900">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        min={min}
        max={max}
        required={required}
        className="w-full rounded-2xl border border-tour-cloud px-4 py-3 text-tour-navy-900 shadow-sm focus:border-tour-navy-900 focus:ring-2 focus:ring-tour-green/40 transition"
      />
    </label>
  );
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  required?: boolean;
}

function SelectField({ label, value, onChange, options, required }: SelectFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-semibold text-tour-navy-900">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full rounded-2xl border border-tour-cloud px-4 py-3 text-tour-navy-900 shadow-sm focus:border-tour-navy-900 focus:ring-2 focus:ring-tour-green/40 transition"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function TextareaField({ label, value, onChange, placeholder }: TextareaFieldProps) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="font-semibold text-tour-navy-900">{label}</span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-2xl border border-tour-cloud px-4 py-3 text-tour-navy-900 shadow-sm focus:border-tour-navy-900 focus:ring-2 focus:ring-tour-green/40 transition resize-none"
      />
    </label>
  );
}

