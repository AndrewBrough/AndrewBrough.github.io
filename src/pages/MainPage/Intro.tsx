import { ExperienceSection } from "./ExperienceSection";
import { HeroActions } from "./HeroActions";
import { HeroText } from "./HeroText";
import { PortraitCard } from "./PortraitCard";
import { SkillsSection } from "./SkillsSection";

export const Intro = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 md:px-8 py-4 md:py-8 lg:py-20">
      <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-row gap-10 md:gap-16 items-center">
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
