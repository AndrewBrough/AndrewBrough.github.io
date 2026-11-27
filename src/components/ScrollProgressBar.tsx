import { useEffect, useRef } from "react";

/**
 * A 5px white bar fixed to the top of the page that fills with dark grey as
 * the page is scrolled. It recalculates on scroll, on window resize, and
 * whenever the page's content changes height (e.g. expanding a section).
 */
export const ScrollProgressBar = () => {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const scrollable = root.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      if (fillRef.current) fillRef.current.style.transform = `scaleX(${progress})`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const resizeObserver = new ResizeObserver(schedule);
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-[2px] bg-white" aria-hidden="true">
      {/* Starts empty via inline style: Tailwind v4's scale-x-* utilities set the
          separate `scale` property, which would multiply with this transform
          and keep the fill at zero. */}
      <div
        ref={fillRef}
        className="h-full w-full origin-left bg-primary"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
};
