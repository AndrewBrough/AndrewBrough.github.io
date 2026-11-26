import { MapPin } from "lucide-react";
import portrait from "@/assets/portrait.png";

export const HeroText = () => (
  <div>
    <div className="flex flex-row gap-4 justify-between items-center">
      <div>
        <h1 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50">
          Andrew Brough
        </h1>
        <p className="mt-2 text-lg text-neutral-300">
          Senior Fullstack Developer &amp; Technical Lead
        </p>
      </div>
      <img
          src={portrait}
          alt="Portrait of Andrew Brough"
          className="h-32 w-32 rounded-full md:hidden"
        />
    </div>
    <p className="mt-5 text-neutral-200">
      I build tools that change how people work. For 11 years I&apos;ve designed
      and shipped customer-facing web applications in React, TypeScript, and Ruby on
      Rails, from
      a health care platform connecting practitioners and patients to live IoT
      monitoring for construction sites. I lead architecture, migrations, and
      teams, and I measure success by what changes for the people using the
      software.
    </p>
    <p className="mt-3 text-neutral-400">
      I&apos;ve seen what slows good work down: legacy systems, misaligned
      priorities, and process for its own sake. I bring clear direction, honest
      communication, and a bias for shipping, so teams spend their energy on the
      problem instead of the friction around it.
    </p>
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      <span className="inline-flex items-center gap-2 text-neutral-200">
        <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
        Available for consulting and technical leadership
      </span>
      <span className="inline-flex items-center gap-2 text-neutral-400">
        <MapPin className="h-4 w-4" />
        Ottawa, Canada · Remote friendly
      </span>
    </div>
    <p className="mt-4 text-sm text-neutral-500">
      Off the clock: loud hardcore shows, my home lab, and a black cat who
      supervises most of my commits.
    </p>
  </div>
);
