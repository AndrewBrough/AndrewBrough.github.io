import { ExperienceHighlights } from "./ExperienceHighlights";
import { ExperienceImages } from "./ExperienceImages";
import type { ExperienceItem } from "./experiences";

export type ExperienceEntryProps = {
  experience: ExperienceItem;
};

export const ExperienceEntry = ({ experience }: ExperienceEntryProps) => {
  const hasMultipleRoles = experience.roles.length > 1;

  return (
    <li className="flex flex-col items-start gap-6 md:flex-row md:gap-10">
      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-semibold text-neutral-50">{experience.company}</h3>
        {experience.description && (
          <p className="mt-1 mb-2 text-sm text-neutral-300">{experience.description}</p>
        )}
        {hasMultipleRoles ? (
          <div className="mt-4 space-y-5">
            {experience.roles.map(role => (
              <div key={role.title}>
                <h4 className="text-sm font-medium text-neutral-300">
                  {role.title}{" "}
                  <span className="font-normal text-neutral-400">
                    ({role.duration})
                  </span>
                </h4>
                <ExperienceHighlights highlights={role.highlights} />
              </div>
            ))}
          </div>
        ) : (
          experience.roles.map(role => (
            <div key={role.title}>
              <h4 className="text-sm font-medium text-neutral-300">
                {role.title}{" "}
                <span className="font-normal text-neutral-400">
                  ({role.duration})
                </span>
              </h4>
              <ExperienceHighlights highlights={role.highlights} />
            </div>
          ))
        )}
      </div>
      {experience.images.length > 0 && (
        <ExperienceImages images={experience.images} />
      )}
    </li>
  );
};
