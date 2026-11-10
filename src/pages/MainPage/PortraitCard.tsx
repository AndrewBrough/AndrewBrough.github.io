import portrait from "@/assets/portrait.png";

export const PortraitCard = () => (
  <div className="hidden md:flex justify-end">
    <div className="h-72 w-72 rounded-full border border-neutral-800 bg-neutral-900/60 overflow-hidden">
      <img
        src={portrait}
        alt="Andrew Brough"
        className="h-full w-full bg-gradient-to-br from-neutral-800 to-neutral-700"
      />
    </div>
  </div>
);
