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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "TanStack",
  "TailwindCSS",
  "Node.js",
  "Vite",
  "Vitest",
  "Redux",
  "React Query",
  "shadcn/ui",
  "Radix",
  "Chakra UI",
  "ESLint",
  "Prettier",
  "Firebase",
  "React Native",
  "Flutter",
];
