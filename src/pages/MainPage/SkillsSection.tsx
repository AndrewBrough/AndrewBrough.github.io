import { ChevronDown } from "lucide-react";
import { useId, useState } from "react";

type SkillGroup = {
  name: string;
  primary: string[];
  secondary: string[];
};

const keySkills: string[] = [
  "Technical Leadership",
  "Interviewing",
  "Mentorship & Coaching",
  "Legacy Modernization",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "GitLab CI/CD",
];

const secondaryKeySkills: string[] = ["Docker", "Unity", "Ruby on Rails"];

const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    primary: ["SPA App Development", "Vite", "TanStack", "Apollo"],
    secondary: [
      "HTML",
      "CSS",
      "JavaScript",
      "Angular",
      "Vue",
      "Webpack",
      "SWC",
      "React Compiler",
      "GraphQL",
      "Zustand",
      "Storybook",
      "jQuery",
      "Mapbox",
    ],
  },
  {
    name: "Backend",
    primary: ["PHP", "C#"],
    secondary: [
      "REST API Development",
      "GraphQL",
      "Python",
      "Java",
      "MySQL",
      "PostgreSQL",
      "NoSQL",
      "AWS",
      "MQTT",
    ],
  },
  {
    name: "Testing",
    primary: ["Jest", "React Testing Library", "Playwright"],
    secondary: ["Cypress", "Pytest", "Mock Service Worker", "Selenium", "BrowserStack"],
  },
  {
    name: "DevOps",
    primary: ["Docker", "Netlify"],
    secondary: ["Next.js", "Kubernetes", "Git Flow", "Jenkins"],
  },
  {
    name: "UX & Design",
    primary: ["Figma", "Adobe Suite"],
    secondary: ["Sketch"],
  },
  {
    name: "Process & Tools",
    primary: ["Agile", "Jira", "GitLab Issues", "Notion"],
    secondary: ["SCRUM", "Waterfall", "Product Board", "Confluence", "Trello", "Segment", "Recurly"],
  },
  {
    name: "AI Development",
    primary: ["Claude Code"],
    secondary: ["Cursor", "LM Studio", "Google Antigravity", "Windsurf"],
  },
];

const pillClassName = "rounded-full border px-3 py-1 text-sm";
const primaryPillClassName = `${pillClassName} border-neutral-100 bg-neutral-100 font-medium text-neutral-900`;
const secondaryPillClassName = `${pillClassName} border-neutral-800 bg-neutral-900/60 text-neutral-300`;

const SkillPills = ({ primary, secondary }: { primary: string[]; secondary: string[] }) => (
  <>
    {primary.map(skill => (
      <li key={skill} className={primaryPillClassName}>
        {skill}
      </li>
    ))}
    {secondary.map(skill => (
      <li key={skill} className={secondaryPillClassName}>
        {skill}
      </li>
    ))}
  </>
);

export const SkillsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const groupsId = useId();

  return (
    <div className="my-8 border-t border-neutral-800/80 pt-4">
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Specializations</h2>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Key skills">
        <SkillPills primary={keySkills} secondary={secondaryKeySkills} />
      </ul>
      <div
        id={groupsId}
        inert={!expanded}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pt-6">
            {skillGroups.map(group => (
              <div key={group.name}>
                <h3 className="text-sm font-medium text-neutral-400">{group.name}</h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  <SkillPills primary={group.primary} secondary={group.secondary} />
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setExpanded(value => !value)}
        aria-expanded={expanded}
        aria-controls={groupsId}
        aria-label={expanded ? "Show fewer skills" : "Show all skills"}
        className="group relative mt-6 flex h-8 w-full cursor-pointer items-center justify-center"
      >
        <span className="absolute inset-x-0 top-1/2 border-t border-neutral-800 group-hover:border-primary" aria-hidden="true" />
        <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-neutral-100 group-focus-visible:border-neutral-400">
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
};
