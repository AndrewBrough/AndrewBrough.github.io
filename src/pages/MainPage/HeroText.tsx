import { MapPin } from "lucide-react";
import portrait from "@/assets/portrait.png";

export const HeroText = () => (
  <div>
    <div className="flex flex-row gap-4 justify-between items-center">
      <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50">
        Andrew Brough
      </h1>
      <img
          src={portrait}
          alt="Andrew Brough"
          className="h-32 w-32 rounded-full md:hidden"
        />
    </div>
    <p className="mt-3 text-neutral-300">
      Senior Frontend Developer with 11 years building customer-facing web
      applications in React and TypeScript. I lead architecture and migrations,
      work with product and engineering to shape requirements, and carry
      features from design through implementation and release.
    </p>
    <p className="mt-3 text-neutral-400">
      I build software people can rely on: clear interfaces for complex
      information, live data, and well-tested releases. I work across technical
      and non-technical teams, mentor other developers, and use practical
      engineering — including AI-assisted workflows — to keep products
      maintainable.
    </p>
    <div className="mt-4 flex items-center gap-2 text-neutral-400">
      <MapPin className="h-4 w-4" />
      <span>Ottawa, Canada</span>
    </div>
  </div>
);
