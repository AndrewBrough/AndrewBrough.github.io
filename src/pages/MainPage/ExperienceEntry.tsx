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
        <div className="font-medium text-neutral-200">{experience.company}</div>
        {hasMultipleRoles ? (
          <div className="mt-4 space-y-5">
            {experience.roles.map(role => (
              <div key={role.title}>
                <h3 className="text-sm font-medium text-neutral-300">
                  {role.title}{" "}
                  <span className="font-normal text-neutral-400">
                    ({role.duration})
                  </span>
                </h3>
                <ExperienceHighlights highlights={role.highlights} />
              </div>
            ))}
          </div>
        ) : (
          experience.roles.map(role => (
            <div key={role.title}>
              <div className="text-sm text-neutral-400">
                {role.title} ({role.duration})
              </div>
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
