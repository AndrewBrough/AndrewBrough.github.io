export const SkillsSection = () => (
  <div className="mt-10 border-t border-neutral-800/80 pt-6">
    <p className="text-sm text-neutral-400">Specialized in</p>
    <ul className="mt-4 flex flex-wrap gap-2">
      {skills.map(skill => (
        <li
          key={skill}
          className="rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-300"
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const skills: string[] = [
  "TypeScript",
  "React",
  "Next.js",
  "Vite",
  "TanStack Query",
  "GraphQL",
  "Apollo",
  "Tailwind CSS",
  "Storybook",
  "Node.js",
  "Jest",
  "React Testing Library",
  "Playwright",
  "Cypress",
  "Docker",
  "Kubernetes",
  "GitLab CI",
  "Figma",
  "Angular",
];
