type SkillGroup = {
  name: string;
  skills: string[];
};

const keySkills: string[] = [
  "Technical Leadership",
  "Interviewing",
  "Mentorship & Coaching",
  "Legacy Modernization",
  "TypeScript",
  "React",
  "Ruby on Rails",
  "AWS",
  "Claude Code",
];

const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: [
      "SPA",
      "PWA",
      "HTML",
      "CSS",
      "JavaScript",
      "Next.js",
      "Angular",
      "Vue",
      "Webpack",
      "Vite",
      "SWC",
      "React Compiler",
      "Apollo",
      "GraphQL",
      "TanStack",
      "Zustand",
      "Storybook",
      "jQuery",
      "Mapbox",
    ],
  },
  {
    name: "Backend",
    skills: [
      "REST API Development",
      "Node.js",
      "Python",
      "PHP",
      "Java",
      "C#",
      "MySQL",
      "PostgreSQL",
      "NoSQL",
      "MQTT",
    ],
  },
  {
    name: "Testing",
    skills: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Pytest",
      "Mock Service Worker",
      "Selenium",
      "BrowserStack",
      "Enzyme",
    ],
  },
  {
    name: "DevOps",
    skills: ["GitLab CI/CD", "Docker", "Kubernetes", "Netlify", "Git Flow", "Jenkins"],
  },
  {
    name: "UX & Design",
    skills: ["Figma", "Sketch", "Adobe Suite"],
  },
  {
    name: "Process & Tools",
    skills: [
      "SCRUM",
      "Agile",
      "Waterfall",
      "Product Board",
      "Jira",
      "Confluence",
      "GitLab Issues",
      "Trello",
      "Notion",
    ],
  },
  {
    name: "AI Development",
    skills: ["Cursor", "LM Studio", "Google Antigravity", "Windsurf", "Devin"],
  },
  {
    name: "Other",
    skills: ["Segment", "Recurly", "Unity", "ActionScript"],
  },
];

const pillClassName = "rounded-full border px-3 py-1 text-sm";

export const SkillsSection = () => (
  <div className="my-8 border-t border-neutral-800/80 pt-4">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Specializations</h2>
    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key skills">
      {keySkills.map(skill => (
        <li
          key={skill}
          className={`${pillClassName} border-neutral-100 bg-neutral-100 font-medium text-neutral-900`}
        >
          {skill}
        </li>
      ))}
    </ul>
    <div className="mt-6 space-y-4">
      {skillGroups.map(group => (
        <div key={group.name}>
          <h3 className="text-sm font-medium text-neutral-400">{group.name}</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {group.skills.map(skill => (
              <li
                key={skill}
                className={`${pillClassName} border-neutral-800 bg-neutral-900/60 text-neutral-300`}
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
