import portrait from "@/assets/portrait.png";
import { MapPin } from "lucide-react";

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
          className="h-32 w-32 rounded-full border-3 border-neutral-800/80 md:hidden"
        />
    </div>
    <p className="mt-5 text-neutral-200">
      For 11 years I've designed and shipped customer-facing web applications in React,
      TypeScript, Ruby on Rails and many other stacks. I've played important roles at
      startups including Fullscript, Kahi and Raven - from health and wellness to real-time
      IoT monitoring, I love build high performance teams with cutting-edge tech.
    </p>
    <p className="mt-5 text-neutral-200">
      I lead with a user-experience mindset and care deeply of how my work affects people -
      users and my team. I always try to make the biggest positive impact while minimizing
      downsides.
    </p>
    <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
      <span className="inline-flex items-center gap-2 text-neutral-200">
        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
        Available for consulting and technical leadership
      </span>
      <span className="inline-flex items-center gap-2 text-neutral-400">
        <MapPin className="h-4 w-4" />
        Ottawa, Canada · Remote friendly
      </span>
    </div>
    <p className="mt-4 text-sm text-neutral-500">
      Off the clock: rock concerts, my home lab and a black cat who
      supervises Claude while I'm off having fun.
    </p>
  </div>
);
