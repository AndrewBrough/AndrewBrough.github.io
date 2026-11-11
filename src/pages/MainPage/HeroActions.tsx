import { Download, Github, Linkedin, Mail } from "lucide-react";

export const HeroActions = () => (
  <div className="mt-4 flex flex-wrap gap-3">
    <a
      href="mailto:andrew.jm.brough@gmail.com"
      className="inline-flex items-center gap-2 rounded-xl bg-neutral-100 text-neutral-900 px-4 py-2 font-medium hover:bg-white transition-colors"
    >
      <Mail className="h-4 w-4" />
      Let's Work Together
    </a>
    <a
      href="https://www.linkedin.com/in/andrewjbrough/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-900 transition-colors"
    >
      <Linkedin className="h-4 w-4" />
      LinkedIn Profile
    </a>
    <a
      href="https://github.com/AndrewBrough"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-900 transition-colors"
    >
      <Github className="h-4 w-4" />
      GitHub Profile
    </a>
    <a
      href="#experience"
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-900 transition-colors"
    >
      View My Work
    </a>
    <a
      href="/Andrew%20Brough%20Resume%202026.pdf"
      download="Andrew Brough Resume 2026.pdf"
      className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-900 transition-colors"
    >
      <Download className="h-4 w-4" />
      Download CV
    </a>
  </div>
);
