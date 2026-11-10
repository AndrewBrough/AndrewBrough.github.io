export type ExperienceRole = {
  title: string;
  duration: string;
  highlights: string[];
};

export type ExperienceImage = {
  src: string;
  alt: string;
};

export type ExperienceItem = {
  company: string;
  roles: ExperienceRole[];
  images: ExperienceImage[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Kahi",
    roles: [
      {
        title: "Senior Web Developer",
        duration: "2024–present",
        highlights: [
          "Migrating a reporting app from Angular to React with incremental releases",
          "Hired and led a frontend team of three, including planning and schedules",
          "Managing GitLab CI/CD across React, Angular, Vue, and Rails services",
        ],
      },
    ],
    images: [
      {
        src: "/kahi/kahi-apps.webp",
        alt: "Kahi job site monitoring on a laptop and phone",
      },
      {
        src: "/kahi/kahi-enviro-sensor.webp",
        alt: "Kahi enviro sensor with its probe and cable",
      },
    ],
  },
  {
    company: "Fullscript",
    roles: [
      {
        title: "Senior UX Engineer",
        duration: "2021–2023",
        highlights: [
          "Shipped features with product and platform teams and advised on legacy systems",
          "Mentored junior, intermediate, and senior developers",
          "Part-time team lead for timelines, milestones, and updates to leadership",
        ],
      },
      {
        title: "Web Developer",
        duration: "2018–2021",
        highlights: [
          "Migrated a Rails and Angular app into a new React single-page application",
          "Helped scale frontend from 4 engineers to 30+ across six product teams",
          "Set up GitLab pipelines, Git Flow, and Agile delivery for a growing team",
        ],
      },
    ],
    images: [
      {
        src: "/fullscript/fullscript-plan.webp",
        alt: "Fullscript review plan screen with a plan summary",
      },
      {
        src: "/fullscript/fullscript-patient-insights.webp",
        alt: "Fullscript patient health insights dashboard",
      },
    ],
  },
  {
    company: "Klashwerks / Raven Inc.",
    roles: [
      {
        title: "Web Developer",
        duration: "2017–2018",
        highlights: [
          "Built a live IoT monitoring app for the Raven smart dash camera",
          "Shaped APIs and device sensor data structures with the backend team",
          "Refined requirements with leadership, marketing, and operations",
        ],
      },
    ],
    images: [],
  },
  {
    company: "Thinkwrap Solutions",
    roles: [
      {
        title: "UI Integration Specialist",
        duration: "2015–2017",
        highlights: [
          "Built Oracle e-commerce storefronts for Sporting Life, Princess Auto, and Woolrich",
        ],
      },
    ],
    images: [],
  },
  {
    company: "Magmic Games",
    roles: [
      {
        title: "Gameplay Programmer",
        duration: "2014–2015",
        highlights: [
          "Shipped mobile game features for Mattel titles including Skip-Bo and Phase 10",
          "Supported iOS and Android release pipelines with Jenkins",
        ],
      },
    ],
    images: [],
  },
];
