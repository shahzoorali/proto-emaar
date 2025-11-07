# Emaar Boulder Hills National Tournament 2026

A professional golf tournament website prototype inspired by PGA TOUR design, featuring tournament information, player profiles, leaderboard, ecommerce shop, and more.

## Features

- **Tournament Hub**: Homepage with hero section, leaderboard preview, featured players, news, and videos
- **Leaderboard**: Live scoring with round-by-round breakdown
- **Players**: Comprehensive player profiles with stats, bio, and recent results
- **Schedule**: Tee times and pairings for all three rounds
- **Course Guide**: Hole-by-hole guide with course statistics
- **News**: Tournament news, player features, and course updates
- **Ecommerce Shop**: Curated golf equipment and apparel catalog with mock checkout
- **Registration**: Player registration form
- **Tickets**: Ticket purchasing options
- **Media Center**: Resources for media professionals

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Radix UI** components for accessible UI
- **Lucide React** for icons

## Design Inspiration

The website design is inspired by [PGA TOUR](https://www.pgatour.com/) with:
- Clean, elegant layout
- Professional color scheme (Navy #0a2540, Green #00a859)
- Responsive design for all devices
- Modern card-based components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── leaderboard/       # Leaderboard page
│   ├── players/            # Players listing and detail pages
│   ├── shop/              # Ecommerce shop pages
│   ├── news/              # News listing and article pages
│   ├── schedule/          # Tournament schedule
│   ├── course/            # Course guide
│   ├── tickets/           # Ticket purchasing
│   ├── register/         # Player registration
│   └── media/             # Media center
├── components/            # Reusable React components
├── data/                 # Mock data files
└── public/               # Static assets
```

## Mock Data

The website includes comprehensive mock data:
- **20 Indian professional golfers** with realistic names, stats, and images
- **25 curated golf products** from major brands
- **Tournament leaderboard** with round-by-round scores
- **News articles** covering tournament updates
- **Videos** linking to YouTube content
- **Tee sheets** for all three rounds

## Features in Detail

### Player Profiles
- Indian professional golfers (Handicap 0-18)
- Player stats (scoring average, driving distance, GIR, putting)
- Recent tournament results
- Filterable by handicap range and search

### Ecommerce Shop
- Curated product catalog (25 items)
- Categories: Clubs, Golf Balls, Shoes, Apparel, Tech, Gear
- Product detail pages with specifications
- Mock checkout flow (no payment processing)

### Leaderboard
- Live scoring display
- Round-by-round breakdown
- Score to par calculations
- Responsive table design

## Notes

- All images use Unsplash stock photos
- Product data is curated from PGA TOUR Superstore structure
- Checkout is a mock experience (no actual payment processing)
- All player names are Indian names
- Tournament dates: February 12-14, 2026

## License

This is a prototype project for demonstration purposes.
