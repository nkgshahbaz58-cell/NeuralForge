"use client";

import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const ITEMS = [
  {
    quote:
      "NeuralForge built our lead-qualification agent in three weeks and it's now closing the gap our SDR team couldn't. The system pays for itself every month.",
    name: "Maya Chen",
    role: "Head of Growth, Northwind SaaS",
    initials: "MC",
  },
  {
    quote:
      "We replaced four manual processes with a single, well-designed AI workflow. The team finally gets to focus on the work that actually moves the business.",
    name: "Daniel Reyes",
    role: "COO, Lattice Logistics",
    initials: "DR",
  },
  {
    quote:
      "The level of craft is on another tier. It feels less like agency work and more like working with an in-house AI studio. The systems are quiet and they just work.",
    name: "Anika Patel",
    role: "Founder, Halo Aesthetics",
    initials: "AP",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by operators who measure outcomes."
          italicWord="operators"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {ITEMS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />
                <Quote size={22} className="text-white/30" />
                <p className="mt-5 text-[15px] leading-[1.65] text-white/80">
                  "{t.quote}"
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 text-[12px] font-medium text-white">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-medium text-white">
                      {t.name}
                    </div>
                    <div className="text-[12px] text-white/45">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
