import { ExternalLink, Github } from "lucide-react";
import { type HobbyProject, hobbyProjects } from "./hobbyProjects";

const defaultPill =
  "inline-flex items-center gap-1.5 border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors";
const primaryPill =
  "inline-flex items-center gap-1.5 border border-neutral-100 bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-900 hover:bg-white transition-colors";

const ProjectLinks = ({ project }: { project: HobbyProject }) => {
  const { name, repoUrl, demoUrl } = project;
  if (!repoUrl && !demoUrl) return null;

  return (
    <div className="inline-flex">
      {repoUrl && (
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} on GitHub`}
          className={`${primaryPill} ${demoUrl ? "rounded-l-full" : "rounded-full"}`}
        >
          <Github className="h-3.5 w-3.5" />
          GitHub
        </a>
      )}
      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${name} live demo`}
          className={`${defaultPill} ${repoUrl ? "rounded-r-full border-l-0" : "rounded-full"}`}
        >
          Live demo
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
};

export const HobbyProjectsSection = () => (
  <div id="projects" className="my-8 border-t border-neutral-800/80 pt-4">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Hobby Projects</h2>
    <ul className="mt-4 space-y-3">
      {hobbyProjects.map(project => (
        <li
          key={project.name}
          className="flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <h3 className="font-medium text-neutral-50">{project.name}</h3>
          {project.description && (
            <span className="text-sm text-neutral-400">{project.description}</span>
          )}
          <ProjectLinks project={project} />
        </li>
      ))}
    </ul>
  </div>
);
