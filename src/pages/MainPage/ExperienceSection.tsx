type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
};

export const ExperienceSection = () => (
  <div id="experience" className="mt-14">
    <div className="flex items-center gap-3 text-neutral-300">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-800 bg-neutral-900/60">
        🏢
      </span>
      <h2 className="text-lg font-medium">Experience</h2>
    </div>
    <ul className="mt-6 space-y-4 text-neutral-300">
      {experiences.map(item => (
        <li key={`${item.company}_${item.role}`}>
          <div className="font-medium">{item.company}</div>
          <div className="text-sm text-neutral-400">
            {item.role} ({item.duration})
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export type { ExperienceItem };

const experiences: ExperienceItem[] = [
  { company: "Kahi", role: "Senior Web Developer", duration: "2024–present" },
  { company: "Fullscript", role: "Senior UX Engineer", duration: "2022–2023" },
  { company: "Fullscript", role: "Web Developer", duration: "2018–2021" },
  {
    company: "Klashwerks / Raven Inc.",
    role: "Lead Web Developer",
    duration: "2017–2018",
  },
  {
    company: "Thinkwrap Solutions",
    role: "UI Integration Specialist",
    duration: "2015–2017",
  },
  {
    company: "Magmic",
    role: "Flash & Mobile Developer",
    duration: "2014–2015",
  },
];
