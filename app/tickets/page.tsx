import Link from "next/link";
import { Check, Calendar, Users, MapPin } from "lucide-react";

const ticketTypes = [
  {
    name: "Daily Pass",
    price: 500,
    description: "Access to tournament grounds for one day",
    features: [
      "Grounds access",
      "Leaderboard viewing",
      "Food & beverage access",
      "Parking included",
    ],
  },
  {
    name: "Weekend Pass",
    price: 1200,
    description: "Access for all three days of the tournament",
    features: [
      "All daily pass benefits",
      "3-day access",
      "Preferred viewing areas",
      "Tournament program",
    ],
    popular: true,
  },
  {
    name: "VIP Hospitality",
    price: 5000,
    description: "Premium experience with exclusive access",
    features: [
      "VIP tent access",
      "Complimentary food & beverages",
      "Meet & greet with players",
      "Premium parking",
      "Tournament merchandise",
    ],
  },
];

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">Tickets</h1>
          <p className="text-lg text-gray-600">
            Secure your spot at the Emaar Boulder Hills National Tournament
          </p>
        </div>

        {/* Tournament Info */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 text-[#00a859] mb-2" />
              <h3 className="font-semibold text-[#0a2540] mb-1">Dates</h3>
              <p className="text-gray-600">Feb 12-14, 2026</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-[#00a859] mb-2" />
              <h3 className="font-semibold text-[#0a2540] mb-1">Location</h3>
              <p className="text-gray-600">Hyderabad, India</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-[#00a859] mb-2" />
              <h3 className="font-semibold text-[#0a2540] mb-1">Format</h3>
              <p className="text-gray-600">3-Day Championship</p>
            </div>
          </div>
        </div>

        {/* Ticket Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.name}
              className={`bg-white rounded-lg shadow-lg p-8 ${
                ticket.popular ? "ring-2 ring-[#00a859]" : ""
              }`}
            >
              {ticket.popular && (
                <div className="bg-[#00a859] text-white text-center py-1 rounded-t-lg -mt-8 -mx-8 mb-4 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <h2 className="text-2xl font-bold text-[#0a2540] mb-2">{ticket.name}</h2>
              <p className="text-gray-600 mb-4">{ticket.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#0a2540]">₹{ticket.price}</span>
                {ticket.name === "Weekend Pass" && (
                  <span className="text-gray-500 ml-2">/person</span>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#00a859] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#0a2540] text-white py-3 rounded-lg font-semibold hover:bg-[#00a859] transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#0a2540] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[#0a2540] mb-2">What is included with my ticket?</h3>
              <p className="text-gray-700">
                All tickets include access to the tournament grounds, leaderboard viewing, and
                access to food and beverage vendors. VIP tickets include additional amenities as
                listed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a2540] mb-2">Can I bring children?</h3>
              <p className="text-gray-700">
                Children under 12 are admitted free with a paying adult. Children 12 and over require
                a ticket.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a2540] mb-2">Is parking available?</h3>
              <p className="text-gray-700">
                Yes, parking is included with all ticket types. VIP tickets include premium parking
                closer to the entrance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#0a2540] mb-2">What is the refund policy?</h3>
              <p className="text-gray-700">
                Tickets are non-refundable but can be transferred to another person. Contact us for
                transfer requests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

