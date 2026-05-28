"use client";

import { Compass, PencilRuler, Hammer, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    step: "01",
    icon: Compass,
    title: "Discover",
    body: "We analyze your business, workflows, and bottlenecks to find where AI delivers measurable leverage.",
  },
  {
    step: "02",
    icon: PencilRuler,
    title: "Design",
    body: "We map the ideal AI system, agent architecture, and data integrations — before we build anything.",
  },
  {
    step: "03",
    icon: Hammer,
    title: "Build",
    body: "We develop, integrate, and test your AI solution end-to-end with production-grade engineering.",
  },
  {
    step: "04",
    icon: TrendingUp,
    title: "Scale",
    body: "We monitor, optimize, and improve the system over time so it compounds value for your business.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Process"
          title="Four steps from idea to intelligent system."
          italicWord="intelligent"
          description="A clean, opinionated process designed to move fast while protecting quality at every step."
        />

        <div className="relative mt-20">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid gap-5 lg:grid-cols-4">
            {STEPS.map((s, i) => {
              const I = s.icon;
              return (
                <Reveal key={s.step} delay={i * 120}>
                  <div className="relative">
                    {/* Node */}
                    <div className="relative z-10 mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0A0C14]">
                      <I size={18} className="text-white" />
                      <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-violet-500/40 to-sky-500/30 blur-md" />
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/25">
                      <div className="flex items-baseline justify-between">
                        <span className="text-[12px] uppercase tracking-[0.18em] text-white/40">
                          Step {s.step}
                        </span>
                        <span className="font-instrument-serif text-[28px] leading-none text-white/25">
                          {s.step}
                        </span>
                      </div>
                      <h3 className="mt-4 text-[19px] font-medium text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-[1.6] text-white/55">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
