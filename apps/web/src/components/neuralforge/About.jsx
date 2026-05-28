"use client";

import { Sparkles, Brain, Zap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="About"
          title="What is NeuralForge AI?"
          italicWord="NeuralForge"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl md:p-10">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />

              <p className="relative font-instrument-serif text-[28px] leading-[1.25] text-white/90 md:text-[34px]">
                A premium AI studio designing intelligent automation systems for
                businesses that want to move faster, reduce repetitive work, and
                scale with confidence.
              </p>

              <p className="relative mt-6 text-[14.5px] leading-[1.7] text-white/55 md:text-[15.5px]">
                We blend strategy, design, and applied AI engineering — building
                custom agents, workflow systems, and internal tools that feel
                native to how your team already works. Every system we forge is
                measured, monitored, and optimized for revenue impact.
              </p>

              <div className="relative mt-8 grid grid-cols-3 gap-3">
                {[
                  { k: "Avg. ROI", v: "5.8×" },
                  { k: "Builds shipped", v: "120+" },
                  { k: "Industries", v: "14" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4"
                  >
                    <div className="font-instrument-serif text-[30px] leading-none text-white">
                      {s.v}
                    </div>
                    <div className="mt-1 text-[11.5px] text-white/45">
                      {s.k}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {[
              {
                icon: Brain,
                title: "Strategy first",
                body: "We map the workflow, the bottleneck, and the AI surface that creates real leverage — before a single line of code.",
              },
              {
                icon: Sparkles,
                title: "Crafted, not templated",
                body: "Every agent, dashboard, and integration is custom-built to feel native to your team and your data.",
              },
              {
                icon: Zap,
                title: "Operate, don't just deploy",
                body: "We monitor, evaluate, and continuously improve your AI systems so they keep compounding value.",
              },
            ].map((c, i) => {
              const I = c.icon;
              return (
                <Reveal key={c.title} delay={i * 100}>
                  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20">
                    <div className="flex items-start gap-4">
                      <div className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent">
                        <I size={18} className="text-white" />
                        <span className="absolute inset-0 -z-10 rounded-xl bg-violet-500/15 blur-md" />
                      </div>
                      <div>
                        <div className="text-[16px] font-medium text-white">
                          {c.title}
                        </div>
                        <div className="mt-1.5 text-[13.5px] leading-[1.6] text-white/55">
                          {c.body}
                        </div>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-violet-500/0 via-transparent to-sky-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
