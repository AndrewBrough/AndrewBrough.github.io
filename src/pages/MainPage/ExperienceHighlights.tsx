export type ExperienceHighlightsProps = {
  highlights: string[];
};

export const ExperienceHighlights = ({
  highlights,
}: ExperienceHighlightsProps) => (
  <ul className="mt-2 space-y-1 text-sm text-neutral-400">
    {highlights.map(highlight => (
      <li key={highlight} className="flex gap-2">
        <span aria-hidden="true">–</span>
        <span>{highlight}</span>
      </li>
    ))}
  </ul>
);
