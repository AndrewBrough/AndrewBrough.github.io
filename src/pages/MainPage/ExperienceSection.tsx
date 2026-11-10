import { ExperienceEntry } from "./ExperienceEntry";
import { experiences } from "./experiences";

export const ExperienceSection = () => (
  <div id="experience" className="mt-14">
    <div className="flex items-center gap-3 text-neutral-300">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/60">
        🏢
      </span>
      <h2 className="text-lg font-medium">Experience</h2>
    </div>
    <ul className="mt-6 space-y-10 text-neutral-300">
      {experiences.map(experience => (
        <ExperienceEntry
          key={experience.company}
          experience={experience}
        />
      ))}
    </ul>
  </div>
);
