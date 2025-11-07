import Image from "next/image";
import { MapPin, Flag, Target } from "lucide-react";

const holes = [
  { number: 1, par: 4, yards: 420, difficulty: "Medium" },
  { number: 2, par: 5, yards: 550, difficulty: "Hard" },
  { number: 3, par: 3, yards: 185, difficulty: "Easy" },
  { number: 4, par: 4, yards: 395, difficulty: "Medium" },
  { number: 5, par: 4, yards: 410, difficulty: "Medium" },
  { number: 6, par: 3, yards: 170, difficulty: "Easy" },
  { number: 7, par: 5, yards: 585, difficulty: "Hard" },
  { number: 8, par: 4, yards: 400, difficulty: "Medium" },
  { number: 9, par: 4, yards: 425, difficulty: "Hard" },
  { number: 10, par: 4, yards: 415, difficulty: "Medium" },
  { number: 11, par: 3, yards: 195, difficulty: "Medium" },
  { number: 12, par: 5, yards: 560, difficulty: "Hard" },
  { number: 13, par: 4, yards: 405, difficulty: "Medium" },
  { number: 14, par: 4, yards: 390, difficulty: "Easy" },
  { number: 15, par: 3, yards: 180, difficulty: "Easy" },
  { number: 16, par: 5, yards: 575, difficulty: "Hard" },
  { number: 17, par: 4, yards: 430, difficulty: "Hard" },
  { number: 18, par: 4, yards: 445, difficulty: "Hard" },
];

export default function CoursePage() {
  const totalPar = holes.reduce((sum, hole) => sum + hole.par, 0);
  const totalYards = holes.reduce((sum, hole) => sum + hole.yards, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-4">The Course</h1>
          <p className="text-lg text-gray-600">
            Emaar Boulder Hills Golf Club - A Championship Test
          </p>
        </div>

        {/* Course Overview */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="relative h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920&h=800&fit=crop"
              alt="Emaar Boulder Hills Golf Course"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <h2 className="text-3xl font-bold text-[#0a2540] mb-4">
              Emaar Boulder Hills Golf Club
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nestled in the heart of Hyderabad, Emaar Boulder Hills Golf Club stands as one of
              India's premier golf destinations. The championship course features 18 holes of
              challenging yet playable golf, with stunning views and impeccable course conditions.
              Designed to test players of all skill levels, the course demands strategic thinking
              and precise execution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-gray-600">Par</p>
                <p className="text-3xl font-bold text-[#0a2540]">{totalPar}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Yardage</p>
                <p className="text-3xl font-bold text-[#0a2540]">{totalYards.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Holes</p>
                <p className="text-3xl font-bold text-[#0a2540]">18</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Design</p>
                <p className="text-lg font-semibold text-[#0a2540]">Championship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hole-by-Hole Guide */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0a2540] mb-6">Hole-by-Hole Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holes.map((hole) => (
              <div
                key={hole.number}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#0a2540]">Hole {hole.number}</h3>
                  <div className="flex items-center gap-2">
                    <Flag className="w-5 h-5 text-[#00a859]" />
                    <span className="text-lg font-semibold">Par {hole.par}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Target className="w-4 h-4" />
                    <span>{hole.yards} yards</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Difficulty: </span>
                    <span
                      className={`font-semibold ${
                        hole.difficulty === "Easy"
                          ? "text-green-600"
                          : hole.difficulty === "Medium"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {hole.difficulty}
                    </span>
                  </div>
                </div>
                <div className="mt-4 relative h-32 w-full rounded overflow-hidden bg-gray-200">
                  <Image
                    src={`https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=400&h=200&q=80&sig=${hole.number}`}
                    alt={`Hole ${hole.number}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Features */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#0a2540] mb-6">Course Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-[#0a2540] mb-3">Practice Facilities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Driving range with covered bays</li>
                <li>• Putting green and chipping area</li>
                <li>• Practice bunkers</li>
                <li>• Professional instruction available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#0a2540] mb-3">Clubhouse Amenities</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Pro shop with premium equipment</li>
                <li>• Fine dining restaurant</li>
                <li>• Locker rooms and showers</li>
                <li>• Event and banquet facilities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

