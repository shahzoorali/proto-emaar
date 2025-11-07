export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  category: string;
  duration?: string;
}

const videoThumbnail = (url: string) => `${url}?auto=format&fit=crop&w=800&h=450&q=85`;

export const videos: Video[] = [
  {
    id: "1",
    title: "Emaar Boulder Hills Golf Course Tour",
    description: "Take a virtual tour of the stunning Emaar Boulder Hills Golf Club in Hyderabad, India.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: videoThumbnail("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    category: "Course",
  },
  {
    id: "2",
    title: "Professional Golf Swing Analysis",
    description: "In-depth analysis of professional golf swing techniques and fundamentals.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: videoThumbnail("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"),
    category: "Instruction",
  },
  {
    id: "3",
    title: "Tournament Preparation: Practice Round Highlights",
    description: "Watch players prepare for the championship during practice rounds at Boulder Hills.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: videoThumbnail("https://images.unsplash.com/photo-1535131749006-b7f58c99034b"),
    category: "Tournament",
  },
  {
    id: "4",
    title: "Short Game Mastery: Chipping and Putting Tips",
    description: "Learn essential short game techniques from professional instructors.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: videoThumbnail("https://images.unsplash.com/photo-1593111774240-d529f12cf98f"),
    category: "Instruction",
  },
  {
    id: "5",
    title: "Round 1 Highlights: Emaar Boulder Hills National Tournament",
    description: "Relive the best moments from Round 1 of the championship.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: videoThumbnail("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"),
    category: "Tournament",
  },
  {
    id: "6",
    title: "Driving Distance: Power vs Accuracy",
    description: "Professional insights on balancing power and accuracy off the tee.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: videoThumbnail("https://images.unsplash.com/photo-1500648767791-00dcc994a43e"),
    category: "Instruction",
  },
];

