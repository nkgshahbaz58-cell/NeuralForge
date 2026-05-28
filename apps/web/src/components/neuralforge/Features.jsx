"use client";

import {
  Plug,
  ShieldCheck,
  Activity,
  AudioLines,
  ScanEye,
  Layers,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const FEATURES = [
  {
    icon: Plug,
    title: "Seamless API Integrations",
    body: "Connect to any tool in your stack — CRMs, data warehouses, calendars, payments, and beyond.",
    size: "lg",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Automation Architecture",
    body: "Built with auth, logging, retries, and fallbacks. Production-grade from day one.",
  },
  {
    icon: Activity,
    title: "Real-Time Data Processing",
    body: "Stream, transform, and act on data the moment it lands — no batch delays.",
  },
  {
    icon: AudioLines,
    title: "AI Speech & Chat Interfaces",
    body: "Voice and text agents that sound natural, stay on-brand, and resolve real outcomes.",
  },
  {
    icon: ScanEye,
    title: "Vision & Document AI",
    body: "Parse contracts, invoices, IDs, and forms with extraction your team can actually trust.",
  },
  {
    icon: Layers,
    title: "Optimized UX for AI Tools",
    body: "Operator-grade interfaces that turn raw model output into confident daily workflows.",
  },
];

export default function Features() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Capabilities"
          title="Packed with intelligence."
          italicWord="intelligence"
          description="The technical foundation behind every NeuralForge build — engineered for reliability, scale, and feel."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6">
          {FEATURES.map((f, i) => {
            const I = f.icon;
            const span = f.size === "lg" ? "md:col-span-3" : "md:col-span-3";
            const isLg = i === 0;
            return (
              <Reveal key={f.title} delay={(i % 3) * 80}>
                <div
                  className={`group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-white/25 ${span} md:col-span-2 ${
                    isLg ? "md:col-span-3" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-violet-500/20" />
                  <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0A0C14]">
                    <I size={18} className="text-white" />
                    <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-sky-500/20 blur-md opacity-60" />
                  </div>
                  <h3 className="mt-6 text-[19px] font-medium text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-[520px] text-[13.5px] leading-[1.65] text-white/55">
                    {f.body}
                  </p>

                  {isLg ? (
                    <div className="mt-7 grid grid-cols-3 gap-2">
                      {[
                        "Slack",
                        "HubSpot",
                        "Stripe",
                        "Notion",
                        "Gmail",
                        "Calendly",
                      ].map((t) => (
                        <div
                          key={t}
                          className="flex items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[11.5px] text-white/65"
                        >
                          {t}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
