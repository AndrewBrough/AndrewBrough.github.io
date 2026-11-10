import type { ExperienceImage } from "./experiences";

export type ExperienceImagesProps = {
  images: ExperienceImage[];
};

export const ExperienceImages = ({ images }: ExperienceImagesProps) => (
  <div className="grid w-full shrink-0 grid-cols-1 gap-3 sm:grid-cols-2 md:w-72 md:grid-cols-1">
    {images.map(image => (
      <img
        key={image.src}
        src={image.src}
        alt={image.alt}
        className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/60"
      />
    ))}
  </div>
);
