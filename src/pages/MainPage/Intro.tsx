import { ExperienceSection } from "./ExperienceSection";
import { HeroActions } from "./HeroActions";
import { HeroText } from "./HeroText";
import { PortraitCard } from "./PortraitCard";
import { SkillsSection } from "./SkillsSection";

export const Intro = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">
      <div className="flex flex-col gap-4 md:gap-10 items-start">
          <div className="flex flex-row gap-10 md:gap-16 items-start">
            <HeroText />
            <PortraitCard />
          </div>
          <div>
            <HeroActions />
            <SkillsSection />
            <ExperienceSection />
          </div>
      </div>
    </section>
  );
};
