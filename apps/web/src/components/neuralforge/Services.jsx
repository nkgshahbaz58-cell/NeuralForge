"use client";

import {
  Workflow,
  MessageSquare,
  Bot,
  Users,
  Globe,
  LayoutDashboard,
  Plug,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const SERVICES = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    body: "Replace repetitive manual work with intelligent automations that run 24/7 across your stack.",
  },
  {
    icon: MessageSquare,
    title: "Custom AI Chatbots",
    body: "Branded, knowledge-aware chat assistants that answer, qualify, and convert visitors instantly.",
  },
  {
    icon: Bot,
    title: "AI Agents for Operations",
    body: "Autonomous agents that handle scheduling, follow-ups, research, reporting and beyond.",
  },
  {
    icon: Users,
    title: "CRM & Lead Automation",
    body: "Capture, enrich, route and nurture leads automatically — straight into your sales pipeline.",
  },
  {
    icon: Globe,
    title: "AI-Powered Websites & Apps",
    body: "Conversion-grade products with AI built into the core experience, not bolted on.",
  },
  {
    icon: LayoutDashboard,
    title: "Internal Dashboards & Tools",
    body: "Operator-grade interfaces that surface the right data and actions to the right people.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    body: "Seamless connections between your tools, data warehouses, and AI models — built to last.",
  },
  {
    icon: Compass,
    title: "AI Consulting & Strategy",
    body: "Senior strategy on where AI creates real leverage in your business — without the hype.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Intelligence, engineered for your business."
          italicWord="engineered"
          description="From single workflow automations to full AI infrastructure — we forge the systems that quietly run your business in the background."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const I = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 4) * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]">
                  {/* gradient border on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(400px 200px at var(--mx,50%) 0%, rgba(139,92,246,0.18), transparent 70%)",
                    }}
                  />
                  <div className="flex items-center justify-between">
                    <div className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0A0C14]">
                      <I size={18} className="text-white" />
                      <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-violet-500/30 to-sky-500/20 blur-md opacity-60" />
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-white/30 transition-all duration-500 group-hover:rotate-0 group-hover:text-white"
                    />
                  </div>
                  <h3 className="mt-6 text-[17px] font-medium tracking-tight text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-white/55">
                    {s.body}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                  <div className="mt-3 flex items-center justify-between text-[11.5px] text-white/40">
                    <span>
                      0{i + 1} / 0{SERVICES.length}
                    </span>
                    <span className="font-instrument-serif italic">Forge</span>
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
