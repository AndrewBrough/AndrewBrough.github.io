import portrait from "@/assets/portrait.png";

export const PortraitCard = () => (
  <div className="hidden md:flex justify-end">
    <div className="h-72 w-72">
      <img
        src={portrait}
        alt="Portrait of Andrew Brough"
        className="h-full w-full rounded-full border-4 border-neutral-800/80"
      />
    </div>
  </div>
);
