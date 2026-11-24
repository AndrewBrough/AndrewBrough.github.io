export type HobbyItem = {
  name: string;
  highlights: string[];
};

export const hobbies: HobbyItem[] = [
  {
    name: "Computer Building",
    highlights: [
      "Custom PC builds and maintenance for myself and friends",
      "The go-to computer guy among my friends",
    ],
  },
  {
    name: "Home Lab",
    highlights: [
      "Manage a cluster of home servers for storage and self-hosted sites, apps, and games",
      "Services separated by concern and protected with Cloudflare and layered security",
    ],
  },
  {
    name: "Game Development",
    highlights: [
      "A creative outlet for the ideas always running through my head",
      "Simple game projects in Unity, Godot, or TypeScript with my own custom game engine",
    ],
  },
];
