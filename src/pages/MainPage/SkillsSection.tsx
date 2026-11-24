type SkillGroup = {
  name: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "TanStack Query",
      "GraphQL",
      "Apollo",
      "Tailwind CSS",
      "Storybook",
      "Angular",
    ],
  },
  {
    name: "Testing & quality",
    skills: ["Jest", "React Testing Library", "Playwright", "Cypress"],
  },
  {
    name: "Delivery & platform",
    skills: ["Node.js", "Docker", "Kubernetes", "GitLab CI", "Figma"],
  },
];

export const SkillsSection = () => (
  <div className="my-8 border-t border-neutral-800/80 pt-4">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Specializations</h2>
    <div className="mt-4 space-y-4">
      {skillGroups.map(group => (
        <div key={group.name}>
          <h3 className="text-sm font-medium text-neutral-400">{group.name}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {group.skills.map(skill => (
              <li
                key={skill}
                className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
