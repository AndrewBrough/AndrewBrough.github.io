export type ExperienceHighlightsProps = {
  highlights: string[];
};

export const ExperienceHighlights = ({
  highlights,
}: ExperienceHighlightsProps) => (
  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-400">
    {highlights.map(highlight => (
      <li key={highlight}>{highlight}</li>
    ))}
  </ul>
);
