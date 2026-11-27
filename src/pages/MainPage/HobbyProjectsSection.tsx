import { ExternalLink, Github } from "lucide-react";
import { type HobbyProject, hobbyProjects } from "./hobbyProjects";

const pillBase = "inline-flex items-center gap-1.5 border px-3 py-1 text-sm transition-colors";
const namePill = `${pillBase} border-neutral-100 bg-neutral-100 font-medium text-neutral-900`;
const demoPill = `${pillBase} border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:bg-primary`;

const ProjectPill = ({ project }: { project: HobbyProject }) => {
  const { name, repoUrl, demoUrl } = project;
  const nameShape = demoUrl ? "rounded-l-full" : "rounded-full";

  return (
    <div className="inline-flex">
      {repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on GitHub`}
          className={`${namePill} ${nameShape} hover:bg-white`}
        >
          <Github className="h-3.5 w-3.5" aria-hidden="true" />
          {name}
        </a>
      ) : (
        <span className={`${namePill} ${nameShape}`}>{name}</span>
      )}
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} live demo`}
          className={`${demoPill} rounded-r-full border-l-0`}
        >
          Live demo
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
};

export const HobbyProjectsSection = () => (
  <div id="projects" className="mb-8">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Hobby Projects</h2>
    <ul className="mt-4 flex flex-wrap gap-2">
      {hobbyProjects.map(project => (
        <li key={project.name} title={project.description}>
          <h3 className="contents">
            <ProjectPill project={project} />
          </h3>
        </li>
      ))}
    </ul>
  </div>
);
