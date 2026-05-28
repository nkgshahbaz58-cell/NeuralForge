"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper: fades + lifts children into view.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = {
    transform: visible ? "translate3d(0,0,0)" : `translate3d(0, ${y}px, 0)`,
    opacity: visible ? 1 : 0,
    transition: `transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "transform, opacity",
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
