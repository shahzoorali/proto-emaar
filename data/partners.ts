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
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4d/Porsche_hood.jpg/320px-Porsche_hood.jpg",
  },
  {
    id: "emirates",
    name: "Emirates",
    tier: "Title",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Emirates_logo.svg",
  },
  {
    id: "emaar",
    name: "Emaar Properties",
    tier: "Gold",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/57/Emaar_Properties_logo.svg",
  },
  {
    id: "lexus",
    name: "Lexus",
    tier: "Gold",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Lexus_division_emblem.svg",
  },
  {
    id: "landrover",
    name: "Land Rover",
    tier: "Silver",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Land_Rover_logo.png",
  },
  {
    id: "taylormade",
    name: "TaylorMade",
    tier: "Silver",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5d/TaylorMade_logo.svg",
  },
  {
    id: "titleist",
    name: "Titleist",
    tier: "Supporting",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/26/Titleist_logo.svg",
  },
];

