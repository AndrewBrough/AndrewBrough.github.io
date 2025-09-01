import { MenuIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export const Navigation = () => {
  const menuClasses = twMerge(
    "menu transition-opacity duration-300",
    "flex gap-4 justify-end",
    "opacity-0 scale-0",
    "group-focus-within:opacity-100 group-focus-within:scale-100",
  );
  return (
    <header className="fixed bottom-4 right-4 group text-right">
      <div className={menuClasses}>
        <a href="/">Home</a>
        <a href="/styles">Styles</a>
      </div>
      <button className="btn btn-outline">
        <MenuIcon className="text-base-content" />
      </button>
    </header>
  );
};
