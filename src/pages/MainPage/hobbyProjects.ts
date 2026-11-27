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
    repoUrl: "https://github.com/AndrewBrough/mcd2-crawler-companion",
    demoUrl: "https://mcdcompanion.netlify.app/",
  },
  {
    name: "pokesort",
    repoUrl: "https://github.com/AndrewBrough/pokesort",
    demoUrl: "https://pokesort.andrewbrough.ca/",
  },
  {
    name: "ts-game-engine",
    repoUrl: "https://github.com/AndrewBrough/ts-game-engine",
    description: "Custom TypeScript game engine for small game projects",
  },
];
