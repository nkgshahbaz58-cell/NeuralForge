"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    q: "What does NeuralForge AI do?",
    a: "We design and build custom AI systems — agents, automations, chatbots, and internal tools — engineered to save your team time, reduce manual work, and increase revenue.",
  },
  {
    q: "Can you build custom AI agents?",
    a: "Yes. Custom agents are our specialty: sales co-pilots, receptionists, internal knowledge assistants, ops agents, and more — all tailored to your data, tools, and workflows.",
  },
  {
    q: "Do you work with small businesses?",
    a: "Absolutely. Our Starter Forge engagement is built specifically for small businesses and creators getting started with AI automation in a sensible, scoped way.",
  },
  {
    q: "How long does an AI automation project take?",
    a: "Most workflow automations ship in 1–3 weeks. Custom agents and dashboards typically take 3–8 weeks depending on scope, integrations, and review cycles.",
  },
  {
    q: "Can you integrate with my existing tools?",
    a: "Yes. We integrate with CRMs, calendars, payments, databases, and virtually any system that exposes an API or webhook. If it doesn't, we'll build the connector.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. Every build can be paired with an ongoing optimization retainer covering monitoring, evals, prompt tuning, and continuous improvements.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions, answered clearly."
          italicWord="clearly"
        />

        <div className="mx-auto mt-14 max-w-[820px]">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 60}>
                <div
                  className={`mb-3 overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
                    isOpen
                      ? "border-white/20 bg-white/[0.05]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-[15px] font-medium text-white md:text-[16.5px]">
                      {item.q}
                    </span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] transition-transform duration-500 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus size={14} className="text-white" />
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-500"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-[14px] leading-[1.7] text-white/60">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
