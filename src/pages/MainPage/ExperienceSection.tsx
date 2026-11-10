type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
};

export const ExperienceSection = () => (
  <div id="experience" className="mt-14">
    <div className="flex items-center gap-3 text-neutral-300">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/60">
        🏢
      </span>
      <h2 className="text-lg font-medium">Experience</h2>
    </div>
    <ul className="mt-6 space-y-6 text-neutral-300">
      {experiences.map(item => (
        <li key={`${item.company}_${item.role}`}>
          <div className="font-medium">{item.company}</div>
          <div className="text-sm text-neutral-400">
            {item.role} ({item.duration})
          </div>
          <ul className="mt-2 space-y-1 text-sm text-neutral-400">
            {item.highlights.map(highlight => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden="true">–</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export type { ExperienceItem };

const experiences: ExperienceItem[] = [
  {
    company: "Kahi",
    role: "Senior Web Developer",
    duration: "2024–present",
    highlights: [
      "Migrating a reporting app from Angular to React with incremental releases",
      "Hired and led a frontend team of three, including planning and schedules",
      "Managing GitLab CI/CD across React, Angular, Vue, and Rails services",
    ],
  },
  {
    company: "Fullscript",
    role: "Senior UX Engineer",
    duration: "2021–2023",
    highlights: [
      "Shipped features with product and platform teams and advised on legacy systems",
      "Mentored junior, intermediate, and senior developers",
      "Part-time team lead for timelines, milestones, and updates to leadership",
    ],
  },
  {
    company: "Fullscript",
    role: "Web Developer",
    duration: "2018–2021",
    highlights: [
      "Migrated a Rails and Angular app into a new React single-page application",
      "Helped scale frontend from 4 engineers to 30+ across six product teams",
      "Set up GitLab pipelines, Git Flow, and Agile delivery for a growing team",
    ],
  },
  {
    company: "Klashwerks / Raven Inc.",
    role: "Web Developer",
    duration: "2017–2018",
    highlights: [
      "Built a live IoT monitoring app for the Raven smart dash camera",
      "Shaped APIs and device sensor data structures with the backend team",
      "Refined requirements with leadership, marketing, and operations",
    ],
  },
  {
    company: "Thinkwrap Solutions",
    role: "UI Integration Specialist",
    duration: "2015–2017",
    highlights: [
      "Built Oracle e-commerce storefronts for Sporting Life, Princess Auto, and Woolrich",
    ],
  },
  {
    company: "Magmic Games",
    role: "Gameplay Programmer",
    duration: "2014–2015",
    highlights: [
      "Shipped mobile game features for Mattel titles including Skip-Bo and Phase 10",
      "Supported iOS and Android release pipelines with Jenkins",
    ],
  },
];
