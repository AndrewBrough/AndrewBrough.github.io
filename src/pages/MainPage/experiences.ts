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
  description?: string;
  roles: ExperienceRole[];
  images: ExperienceImage[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Kahi",
    description:
      "Remote job site monitoring for construction, using wireless sensors to track conditions like temperature and humidity.",
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
    description:
      "A health care platform that helps practitioners recommend supplements, order lab tests, and manage patient treatment plans. Patients can order their supplements online and have them delivered to their doorstep within days.",
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
    images: [
      {
        src: "/raven/raven-apps.png",
        alt: "Raven vehicle tracking on desktop and mobile, with the dash camera",
      },
      {
        src: "/raven/raven-bluetooth.png",
        alt: "Raven dash camera mounted on a vehicle dashboard",
      },
    ],
  },
];

export type EarlierExperienceItem = {
  company: string;
  title: string;
  duration: string;
};

export const earlierExperiences: EarlierExperienceItem[] = [
  {
    company: "Thinkwrap Solutions",
    title: "UI Integration Specialist",
    duration: "2015–2017",
  },
  {
    company: "Magmic Games",
    title: "Gameplay Programmer",
    duration: "2014–2015",
  },
  {
    company: "Canada Computers",
    title: "PC Hardware Sales",
    duration: "2011–2014, part-time",
  },
];
