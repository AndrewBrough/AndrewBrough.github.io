import { ExperienceHighlights } from "./ExperienceHighlights";
import { hobbies } from "./hobbies";

export const HobbiesSection = () => (
  <div id="hobbies" className="my-8 border-t border-neutral-800/80 pt-4">
    <h2 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-50">Hobbies</h2>
    <ul className="mt-6 space-y-10 text-neutral-300">
      {hobbies.map(hobby => (
        <li key={hobby.name}>
          <h3 className="text-xl font-semibold text-neutral-50">{hobby.name}</h3>
          <ExperienceHighlights highlights={hobby.highlights} />
        </li>
      ))}
    </ul>
  </div>
);
