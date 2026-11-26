export type HobbyProject = {
  name: string;
  description?: string;
  /** Source repository. Only set this for public repositories. */
  repoUrl?: string;
  demoUrl?: string;
};

export const hobbyProjects: HobbyProject[] = [
  {
    name: "mcdcompanion",
    demoUrl: "https://mcdcompanion.netlify.app/",
  },
  {
    name: "pokesort",
  },
  {
    name: "ts-game-engine",
    description: "Custom TypeScript game engine for small game projects",
  },
];
