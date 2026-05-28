"use client";

import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const RESULTS = [
  {
    value: "70%",
    label: "Reduction in manual admin work",
    caption: "Across operations & finance teams",
  },
  {
    value: "90%",
    label: "Faster lead response time",
    caption: "Average across deployed funnels",
  },
  {
    value: "1,200+",
    label: "Support queries automated / mo.",
    caption: "Resolved without human in the loop",
  },
  {
    value: "30h",
    label: "Saved per week, per team",
    caption: "Time returned to high-value work",
  },
];

export default function Results() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Results"
          title="Numbers our systems quietly produce."
          italicWord="quietly"
          description="A snapshot of the measurable outcomes our AI builds generate for the businesses we partner with."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r, i) => (
            <Reveal key={r.label} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25">
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl transition-opacity duration-500 group-hover:bg-violet-500/25" />
                <div className="font-instrument-serif text-[56px] leading-none text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-100 to-violet-300 md:text-[68px]">
                  {r.value}
                </div>
                <div className="mt-4 text-[14.5px] font-medium text-white">
                  {r.label}
                </div>
                <div className="mt-1.5 text-[12.5px] text-white/45">
                  {r.caption}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
