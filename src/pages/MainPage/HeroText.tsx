import { MapPin } from "lucide-react";

export const HeroText = () => (
  <div>
    <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50">
      Andrew Brough
    </h1>
    <p className="mt-3 text-neutral-300">
      Senior UX + JS Developer — designing and building modern web apps and
      design systems with React, TypeScript, GraphQL, and friendly DX.
    </p>
    <p className="mt-3 text-neutral-400">
      Started building for the web in 2014. Previously Senior UX Engineer at
      Fullscript. When I'm not coding, I'm probably playing games, making music,
      or cooking.
    </p>
    <div className="mt-4 flex items-center gap-2 text-neutral-400">
      <MapPin className="h-4 w-4" />
      <span>Ottawa, Canada</span>
    </div>
  </div>
);
