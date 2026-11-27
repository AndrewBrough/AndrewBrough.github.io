import { HeroActions } from "./HeroActions";

export const Footer = () => (
  <footer className="flex flex-col text-center border-t border-neutral-800/80 py-8 md:py-16">
    <p className="text-lg text-sm text-neutral-300">Thanks for reading {":)"}</p>
    <div className="m-auto">
      <HeroActions />
    </div>
  </footer>
);
