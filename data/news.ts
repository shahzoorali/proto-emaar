export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  body: string;
  publishDate: string;
  author: string;
  heroImage: string;
  tags: string[];
  relatedIds?: string[];
}

const newsImage = (url: string) => `${url}?auto=format&fit=crop&w=1200&h=600&q=85`;

export const news: NewsArticle[] = [
  {
    id: "1",
    title: "Emaar Boulder Hills Set to Host First National Tournament",
    category: "Tournament News",
    excerpt: "The prestigious Emaar Boulder Hills Golf Club in Hyderabad will host its inaugural national professional tournament from February 12-14, 2026.",
    body: "Emaar Boulder Hills Golf Club, one of India's premier golf destinations, is proud to announce its first-ever national professional tournament. The championship will feature top golfers from across India, competing for a significant prize purse and national recognition. The tournament marks a milestone for golf in the Hyderabad region, bringing together professionals with handicaps ranging from 0 to 18. Course preparations are underway, with the championship layout being finalized to challenge players while showcasing the course's natural beauty.",
    publishDate: "2026-01-15T10:00:00Z",
    author: "Tournament Committee",
    heroImage: newsImage("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    tags: ["tournament", "announcement", "hyderabad"],
  },
  {
    id: "2",
    title: "Rahul Sharma Leads After Round 1 with Stunning 68",
    category: "Tournament News",
    excerpt: "Mumbai's Rahul Sharma fired an impressive 4-under 68 to take the early lead in the opening round of the Emaar Boulder Hills National Tournament.",
    body: "Rahul Sharma, representing the Bombay Presidency Golf Club, showcased exceptional ball-striking and course management to card a 4-under 68 in the opening round. Starting on the back nine, Sharma birdied three of his first five holes, setting the tone for a solid round. His precision approach shots and steady putting kept him bogey-free until the 15th hole, where he made his only mistake of the day. Sharma's performance puts him one stroke ahead of a tightly packed leaderboard, with several players within three shots of the lead.",
    publishDate: "2026-02-12T18:30:00Z",
    author: "Tournament Media",
    heroImage: newsImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"),
    tags: ["leaderboard", "round 1", "rahul sharma"],
    relatedIds: ["1"],
  },
  {
    id: "3",
    title: "Course Spotlight: The Signature 7th Hole at Boulder Hills",
    category: "Course Guide",
    excerpt: "Discover the challenges and beauty of the par-5 7th hole, one of Boulder Hills' most memorable tests.",
    body: "The 7th hole at Emaar Boulder Hills is a stunning par-5 that plays 585 yards from the championship tees. This dogleg-left hole requires strategic thinking from tee to green. The tee shot must navigate a narrow fairway flanked by native vegetation, while the approach shot must carry a water hazard that guards the front of the green. The undulating green, protected by bunkers on both sides, demands precision with approach shots. Many players will attempt to reach this green in two, but the risk-reward element makes it one of the tournament's most exciting holes.",
    publishDate: "2026-01-20T14:00:00Z",
    author: "Course Staff",
    heroImage: newsImage("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    tags: ["course", "hole spotlight", "strategy"],
  },
  {
    id: "4",
    title: "Arjun Patel: Veteran Golfer Shares Tournament Preparation Tips",
    category: "Player Feature",
    excerpt: "Ahmedabad's Arjun Patel discusses his approach to tournament preparation and what makes Boulder Hills special.",
    body: "Arjun Patel, a veteran professional from Ahmedabad, has been preparing meticulously for the Emaar Boulder Hills National Tournament. In an exclusive interview, Patel shared his tournament preparation routine, emphasizing the importance of course knowledge and mental preparation. 'Boulder Hills presents unique challenges with its elevation changes and strategic bunkering,' Patel noted. 'I've spent time studying each hole and developing a game plan that plays to my strengths.' Patel's precision-based game and exceptional short game skills make him a strong contender for the championship.",
    publishDate: "2026-01-25T11:00:00Z",
    author: "Tournament Media",
    heroImage: newsImage("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"),
    tags: ["player feature", "preparation", "arjun patel"],
    relatedIds: ["2"],
  },
  {
    id: "5",
    title: "Registration Opens for Professional Golfers",
    category: "Tournament News",
    excerpt: "Professional golfers across India can now register for the Emaar Boulder Hills National Tournament. Limited spots available.",
    body: "Registration is now open for the Emaar Boulder Hills National Tournament, scheduled for February 12-14, 2026. The tournament is open to professional golfers with valid handicap certificates ranging from 0 to 18. Early registration is encouraged as field size is limited. The registration process includes verification of handicap status and golf association membership. Prize money and tournament details will be announced in the coming weeks. Interested players should visit the tournament website to complete their registration.",
    publishDate: "2026-01-10T09:00:00Z",
    author: "Tournament Committee",
    heroImage: newsImage("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    tags: ["registration", "announcement"],
  },
  {
    id: "6",
    title: "Local Favorite Siddharth Reddy Ready for Home Tournament",
    category: "Player Feature",
    excerpt: "Hyderabad's own Siddharth Reddy looks forward to competing on familiar turf at Emaar Boulder Hills.",
    body: "Siddharth Reddy, a professional golfer from Hyderabad, brings local knowledge and hometown support to the Emaar Boulder Hills National Tournament. Having played the course numerous times, Reddy understands the nuances of Boulder Hills better than most competitors. 'Playing at home gives me confidence, but it also adds pressure,' Reddy admitted. 'I want to perform well for the local fans.' Reddy's consistent ball-striking and course management skills make him a player to watch, especially on holes where local knowledge can provide an advantage.",
    publishDate: "2026-01-28T15:00:00Z",
    author: "Tournament Media",
    heroImage: newsImage("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"),
    tags: ["player feature", "local", "siddharth reddy"],
  },
  {
    id: "7",
    title: "Tournament Partners and Sponsors Announced",
    category: "Tournament News",
    excerpt: "Leading brands and organizations join as partners for the inaugural Emaar Boulder Hills National Tournament.",
    body: "The Emaar Boulder Hills National Tournament is proud to announce its official partners and sponsors. These organizations share our commitment to promoting professional golf in India and supporting the growth of the sport. Partnership opportunities include title sponsorship, hospitality packages, and media partnerships. The tournament provides excellent branding opportunities for companies looking to reach golf enthusiasts and sports fans across India. Interested organizations can contact the tournament committee for partnership information.",
    publishDate: "2026-01-18T12:00:00Z",
    author: "Tournament Committee",
    heroImage: newsImage("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    tags: ["sponsors", "partners", "announcement"],
  },
  {
    id: "8",
    title: "Weather Conditions Favor Low Scores on Day 2",
    category: "Tournament News",
    excerpt: "Perfect weather conditions greeted players for Round 2, with calm winds and ideal temperatures.",
    body: "Round 2 of the Emaar Boulder Hills National Tournament was played under near-perfect conditions. Calm winds, clear skies, and ideal temperatures allowed players to attack pins and post low scores. The scoring average improved significantly from Round 1, with several players taking advantage of the favorable conditions. Course officials noted that the greens were rolling true and fast, rewarding good approach shots. The weather forecast for the final round looks equally promising, setting the stage for an exciting finish to the championship.",
    publishDate: "2026-02-13T17:00:00Z",
    author: "Tournament Media",
    heroImage: newsImage("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    tags: ["weather", "round 2", "conditions"],
    relatedIds: ["2"],
  },
];

