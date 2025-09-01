import { ExperienceSection } from "./ExperienceSection";
import { HeroActions } from "./HeroActions";
import { HeroBadge } from "./HeroBadge";
import { HeroText } from "./HeroText";
import { PortraitCard } from "./PortraitCard";
import { SkillsSection } from "./SkillsSection";

export const Intro = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16 items-start">
        <div>
          <HeroBadge />
          <HeroText />
          <HeroActions />
          <SkillsSection />
          <ExperienceSection />
        </div>
        <PortraitCard />
      </div>
    </section>
  );
};
