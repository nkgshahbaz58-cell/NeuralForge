"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const PROJECTS = [
  {
    title: "AI Receptionist",
    subtitle: "For service-based businesses",
    description:
      "A 24/7 voice + chat agent that answers calls, books appointments, and qualifies inquiries.",
    metric: "+ 312% bookings captured after hours",
    tags: ["Voice AI", "Scheduling", "Integrations"],
    accent: "from-indigo-500/30 to-violet-500/20",
  },
  {
    title: "Lead Qualification Chatbot",
    subtitle: "B2B SaaS funnel",
    description:
      "Conversational qualifier that scores, routes, and warms inbound leads before sales sees them.",
    metric: "− 68% time-to-first-response",
    tags: ["Chatbot", "CRM", "Routing"],
    accent: "from-sky-400/30 to-indigo-500/20",
  },
  {
    title: "Email Follow-Up System",
    subtitle: "Outbound automation",
    description:
      "Adaptive sequences that personalize at scale and pause based on prospect signals.",
    metric: "× 2.4 reply rate vs. baseline",
    tags: ["Automation", "Personalization"],
    accent: "from-violet-500/30 to-fuchsia-500/20",
  },
  {
    title: "AI Sales Assistant",
    subtitle: "Rep co-pilot",
    description:
      "Live deal-room agent that drafts emails, summarizes calls, and surfaces the next best action.",
    metric: "+ 41% pipeline coverage",
    tags: ["Agent", "RAG", "Sales"],
    accent: "from-emerald-400/25 to-sky-500/20",
  },
  {
    title: "Internal Knowledge Assistant",
    subtitle: "Company-wide RAG",
    description:
      "A private, source-cited assistant trained on your docs, wikis, and product knowledge.",
    metric: "− 73% repetitive support questions",
    tags: ["RAG", "Search", "Internal"],
    accent: "from-amber-300/20 to-violet-500/20",
  },
  {
    title: "Automated Reporting Dashboard",
    subtitle: "Ops & finance",
    description:
      "Real-time AI-generated reports across data sources, with anomaly detection and weekly digests.",
    metric: "Saved 30+ hours / week",
    tags: ["Dashboard", "Analytics"],
    accent: "from-cyan-400/25 to-indigo-500/20",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow="Featured Solutions"
          title="A portfolio of intelligent systems."
          italicWord="intelligent"
          description="Selected solutions we've architected and shipped — engineered to move quiet, compound revenue, and outlast the hype cycle."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25">
                {/* Visual top */}
                <div
                  className={`relative mb-6 h-[160px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.accent}`}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                      maskImage:
                        "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
                      WebkitMaskImage:
                        "radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-white/30 to-white/5 blur-xl" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-10 w-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-md transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[10.5px] text-white/75 backdrop-blur-md">
                    <span className="h-1 w-1 rounded-full bg-emerald-400" />
                    Case study
                  </div>
                  <div className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/80 backdrop-blur-md transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="text-[11.5px] uppercase tracking-[0.16em] text-white/40">
                  {p.subtitle}
                </div>
                <h3 className="mt-2 text-[20px] font-medium tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-white/55">
                  {p.description}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-[12px] text-emerald-200/90">
                  {p.metric}
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/55"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
