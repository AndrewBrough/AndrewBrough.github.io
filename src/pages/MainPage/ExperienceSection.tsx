import { ExperienceEntry } from "./ExperienceEntry";
import { earlierExperiences, experiences } from "./experiences";

export const ExperienceSection = () => (
  <div id="experience" className="my-8 border-t border-neutral-800/80 pt-4">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Experience</h2>
    <ul className="mt-6 space-y-10 text-neutral-300">
      {experiences.map(experience => (
        <ExperienceEntry
          key={experience.company}
          experience={experience}
        />
      ))}
    </ul>
    <h3 className="mt-10 text-xl font-semibold text-neutral-50">Earlier work experience</h3>
    <ul className="mt-3 space-y-2 text-sm">
      {earlierExperiences.map(item => (
        <li key={item.company}>
          <span className="font-medium text-neutral-300">{item.company}</span>
          <span className="text-neutral-400">
            {" · "}
            {item.title} ({item.duration})
          </span>
        </li>
      ))}
    </ul>
  </div>
);
