"use client";

import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const TIERS = [
  {
    name: "Starter Forge",
    description: "For small businesses starting with AI automation.",
    price: "From $1.5k",
    features: [
      "Workflow audit & opportunity map",
      "1 production AI automation",
      "Basic AI chatbot",
      "Setup support & handoff",
    ],
    accent: "from-white/10 to-white/5",
    highlighted: false,
  },
  {
    name: "Growth Forge",
    description: "For growing businesses needing multiple AI systems.",
    price: "From $4.5k",
    features: [
      "Advanced multi-step automations",
      "CRM & data integrations",
      "Custom AI agent setup",
      "Internal dashboard",
      "Ongoing optimization sprints",
    ],
    accent: "from-violet-500/25 to-sky-500/15",
    highlighted: true,
  },
  {
    name: "Enterprise Forge",
    description: "For companies needing custom AI infrastructure.",
    price: "Custom",
    features: [
      "Custom AI agent fleets",
      "Bespoke API & system integrations",
      "Internal tools & dashboards",
      "Security-first architecture",
      "Dedicated support & SLAs",
    ],
    accent: "from-white/10 to-white/5",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Pricing"
          title="Investment that pays for itself."
          italicWord="pays"
          description="Transparent engagements scoped to outcomes — not headcount or hours. Request a quote and we'll tailor a build to your goals."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`relative h-full overflow-hidden rounded-[24px] border p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 ${
                  t.highlighted
                    ? "border-white/20 bg-white/[0.05] shadow-[0_30px_80px_-30px_rgba(139,92,246,0.55)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/25"
                }`}
              >
                {/* Animated gradient border for highlighted */}
                {t.highlighted ? (
                  <div className="pointer-events-none absolute inset-0 -z-10 rounded-[24px]">
                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-sky-400/20 opacity-60" />
                  </div>
                ) : null}

                <div
                  className={`absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${t.accent} blur-3xl`}
                />

                {t.highlighted ? (
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-300/30 bg-violet-400/[0.12] px-2.5 py-1 text-[10.5px] uppercase tracking-[0.18em] text-violet-200">
                    Most chosen
                  </div>
                ) : null}

                <h3 className="text-[22px] font-medium tracking-tight text-white">
                  {t.name}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-white/55">
                  {t.description}
                </p>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-instrument-serif text-[44px] leading-none text-white">
                    {t.price}
                  </span>
                </div>

                <ul className="mt-7 space-y-3">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-[13.5px] text-white/70"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04]">
                        <Check size={11} className="text-white" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[13.5px] font-medium transition-all duration-300 ${
                    t.highlighted
                      ? "bg-white text-[#06070D] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)]"
                      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                  }`}
                >
                  Request Quote
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
