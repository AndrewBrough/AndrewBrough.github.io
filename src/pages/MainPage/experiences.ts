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
        duration: "Jan 2024 – Present",
        highlights: [
          "Leading the migration of a legacy Angular app to React for live temperature, humidity, and GPS sensor monitoring",
          "Built and deployed a Next.js microservice for internal customer support and feedback management",
          "Upgraded GitLab pipelines across 4+ web apps (Vue, React, HTML, Angular), adding staging and review environments",
          "Wrote Ruby on Rails API endpoints backed by AWS DynamoDB and PostgreSQL on EC2",
          "Mocked static and live hardware APIs with Mock Service Worker for frontend testing",
          "Interviewed and grew the frontend team from 1 to 3 developers",
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
        duration: "Oct 2021 – Dec 2023",
        highlights: [
          "Ran an internal mentorship program for junior, intermediate, and new senior developers",
          "Team lead for short-term projects, including automated practitioner tax forms and advanced practitioner-patient messaging",
          "Led interviews for junior through lead roles, helping grow frontend from 3 to 20+ developers in an 80+ person engineering department",
          "Reviewed and wrote GitLab CI/CD, Helm, Docker, and Kubernetes configs for staging and production",
        ],
      },
      {
        title: "Web Developer",
        duration: "Oct 2018 – Oct 2021",
        highlights: [
          "Migrated an Angular and Ruby on Rails app to a modern React SPA serving medical, non-medical, and patient users",
          "Built e-commerce features for supplements and wellness services: product pages, search, browsing, and Black Friday promotions",
          "Developed practitioner prescription tools, including patient messaging, wellness plans, and product prescriptions",
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
        duration: "Jul 2017 – Oct 2018",
        highlights: [
          "Solo-built the web app for the Raven smart dash camera, with live video, GPS, speed, and vehicle diagnostics",
          "Map-based fleet dashboard with live dashcam footage, GPS, and statistics",
          "Trip history with map routes, dashcam previews, video archives, timelapses, and OBD stats",
          "JWT authentication from the AWS backend, with features based on user roles and permissions",
          "Built all user-facing emails and created graphics and animations for Raven hardware and marketing",
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
  {
    company: "Thinkwrap Solutions",
    roles: [
      {
        title: "UI Integration Specialist",
        duration: "2015 – 2017",
        highlights: [
          "Built Oracle e-commerce storefronts for Sporting Life, Princess Auto, and Woolrich",
          "Integrated product details and business logic into product, search, home, and seasonal promotion pages",
          "Built on-site widgets in Angular and React: search filters, quick view, store locators, and surveys",
          "Integrated e-commerce emails for orders, receipts, shipping, and promotions",
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
        duration: "2014 – 2015",
        highlights: [
          "Developed mobile games for Mattel titles including Skip-Bo, Phase 10, and Apples to Apples",
        ],
      },
    ],
    images: [],
  },
];

export type EarlierExperienceItem = {
  company: string;
  title: string;
  duration: string;
};

export const earlierExperiences: EarlierExperienceItem[] = [
  {
    company: "Federation for the Humanities & Social Sciences",
    title: "Web & Media Designer",
    duration: "Summer 2013",
  },
  {
    company: "Canada Computers",
    title: "PC Hardware Sales Representative",
    duration: "May 2011 – Sept 2012",
  },
];
