export interface Partner {
  id: string;
  name: string;
  tier: "Title" | "Gold" | "Silver" | "Supporting";
  logoUrl: string;
  link?: string;
}

export const partners: Partner[] = [
  {
    id: "porsche",
    name: "Porsche",
    tier: "Title",
    logoUrl: "https://logo.clearbit.com/porsche.com",
  },
  {
    id: "emirates",
    name: "Emirates",
    tier: "Title",
    logoUrl: "https://logo.clearbit.com/emirates.com",
  },
  {
    id: "emaar",
    name: "Emaar Properties",
    tier: "Gold",
    logoUrl: "https://logo.clearbit.com/emaar.com",
  },
  {
    id: "lexus",
    name: "Lexus",
    tier: "Gold",
    logoUrl: "https://logo.clearbit.com/lexus.com",
  },
  {
    id: "landrover",
    name: "Land Rover",
    tier: "Silver",
    logoUrl: "https://logo.clearbit.com/landrover.com",
  },
  {
    id: "taylormade",
    name: "TaylorMade",
    tier: "Silver",
    logoUrl: "https://logo.clearbit.com/taylormadegolf.com",
  },
  {
    id: "titleist",
    name: "Titleist",
    tier: "Supporting",
    logoUrl: "https://logo.clearbit.com/titleist.com",
  },
];

