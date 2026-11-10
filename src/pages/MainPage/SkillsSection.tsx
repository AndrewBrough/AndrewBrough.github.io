export const SkillsSection = () => (
  <div className="my-8 border-t border-neutral-800/80 pt-4">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Specializations</h2>
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
