"use client";

import {
  ArrowUpRight,
  ArrowRight,
  Bot,
  Workflow,
  MessageSquare,
  Cpu,
  TrendingUp,
} from "lucide-react";
import Reveal from "./Reveal";

const TAGS = [
  { label: "AI Automation", icon: Workflow },
  { label: "Custom AI Agents", icon: Bot },
  { label: "Chatbots", icon: MessageSquare },
  { label: "Workflow Systems", icon: Cpu },
  { label: "Business Growth", icon: TrendingUp },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-[140px] md:pt-[170px]">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        {/* Eyebrow */}
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[12px] tracking-wide text-white/70">
              Now accepting Q3 2026 AI builds
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <Reveal delay={80}>
          <h1 className="mx-auto mt-7 max-w-[1000px] text-center text-[42px] font-medium leading-[1.04] tracking-[-0.03em] text-white sm:text-[56px] md:text-[72px] lg:text-[84px]">
            Forge intelligent systems
            <br className="hidden md:block" /> that{" "}
            <span className="font-instrument-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-violet-300">
              automate
            </span>
            , scale, and grow your business.
          </h1>
        </Reveal>

        {/* Sub */}
        <Reveal delay={180}>
          <p className="mx-auto mt-7 max-w-[680px] text-center text-[15px] leading-[1.6] text-white/55 md:text-[17px]">
            NeuralForge AI builds custom AI agents, automation workflows,
            chatbots, and intelligent business systems designed to save time,
            reduce manual work, and increase revenue.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={260}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-[#06070D] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10">
                Request a Free AI Strategy Call
              </span>
              <ArrowUpRight
                size={16}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
            >
              <span>Explore Services</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>

        {/* Trust tags */}
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {TAGS.map((t) => {
              const I = t.icon;
              return (
                <div
                  key={t.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-white/65 backdrop-blur-md"
                >
                  <I size={12} className="text-white/55" />
                  {t.label}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Hero visual */}
        <Reveal delay={440} y={48}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1100px]">
      {/* Glow */}
      <div
        className="absolute -inset-x-20 -top-10 -bottom-10 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.35) 0%, rgba(56,189,248,0.18) 40%, transparent 70%)",
        }}
      />

      {/* Main glass card */}
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-2xl shadow-[0_50px_120px_-30px_rgba(99,102,241,0.5)]">
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#06080F]">
          {/* Dashboard mock */}
          <div className="grid gap-4 p-5 md:grid-cols-[260px_1fr] md:p-6">
            <div className="hidden flex-col gap-2 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 md:flex">
              <div className="mb-2 flex items-center gap-2">
                <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 to-violet-500" />
                <div className="text-[12.5px] text-white/80">Forge Console</div>
              </div>
              {[
                "Agents",
                "Workflows",
                "Integrations",
                "Knowledge",
                "Analytics",
              ].map((it, i) => (
                <div
                  key={it}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 text-[12.5px] ${
                    i === 1 ? "bg-white/[0.06] text-white" : "text-white/45"
                  }`}
                >
                  <span>{it}</span>
                  {i === 1 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                  )}
                </div>
              ))}
              <div className="mt-auto rounded-xl border border-white/[0.06] bg-gradient-to-br from-indigo-500/10 to-violet-500/10 p-3">
                <div className="text-[11px] text-white/55">Active Agents</div>
                <div className="font-instrument-serif text-[28px] leading-none text-white">
                  12
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { k: "Tasks automated", v: "8,420" },
                  { k: "Avg. response", v: "1.2s" },
                  { k: "Time saved / wk", v: "37h" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <div className="text-[10.5px] uppercase tracking-wider text-white/40">
                      {m.k}
                    </div>
                    <div className="mt-1 font-instrument-serif text-[24px] leading-none text-white">
                      {m.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative h-[220px] overflow-hidden rounded-xl border border-white/[0.06] bg-[#070912] p-4 md:h-[260px]">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-[12px] text-white/65">
                    Agent activity · last 24h
                  </div>
                  <div className="flex gap-2">
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] text-white/55">
                      Live
                    </span>
                  </div>
                </div>
                <Wave />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[12px] text-white/70">
                  <div className="mb-1 text-white/45">Latest agent</div>
                  <div className="text-white">Sales-Qualifier-03</div>
                  <div className="mt-1 text-[11px] text-emerald-300/80">
                    + 34 leads qualified today
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-[12px] text-white/70">
                  <div className="mb-1 text-white/45">Workflow</div>
                  <div className="text-white">Email follow-up · v2</div>
                  <div className="mt-1 text-[11px] text-sky-300/80">
                    98.4% delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -left-4 top-24 hidden w-[230px] rotate-[-6deg] rounded-2xl border border-white/10 bg-[#0A0C14]/80 p-3 backdrop-blur-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] md:block animate-floatA">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-400 to-indigo-500" />
          <div>
            <div className="text-[12px] text-white">Chatbot deployed</div>
            <div className="text-[10.5px] text-white/45">
              Replies in 1.1s avg.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 top-48 hidden w-[240px] rotate-[5deg] rounded-2xl border border-white/10 bg-[#0A0C14]/80 p-3 backdrop-blur-xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] md:block animate-floatB">
        <div className="text-[11px] text-white/45">AI Agent</div>
        <div className="mt-1 text-[13px] text-white">Receptionist · live</div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-400 to-sky-400" />
        </div>
        <div className="mt-1 text-[10.5px] text-white/45">
          Booked 18 calls today
        </div>
      </div>

      <style jsx global>{`
        @keyframes floatA {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-12px) rotate(-6deg); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-floatA { animation: floatA 6s ease-in-out infinite; }
        .animate-floatB { animation: floatB 7s ease-in-out infinite 1s; }
      `}</style>
    </div>
  );
}

function Wave() {
  return (
    <svg
      viewBox="0 0 600 200"
      className="h-full w-full"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lg1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(139,92,246,0.5)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0)" />
        </linearGradient>
        <linearGradient id="lg2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <path
        d="M0,140 C80,90 140,170 220,120 C300,70 360,150 440,100 C520,60 580,130 600,110 L600,200 L0,200 Z"
        fill="url(#lg1)"
      />
      <path
        d="M0,140 C80,90 140,170 220,120 C300,70 360,150 440,100 C520,60 580,130 600,110"
        stroke="url(#lg2)"
        strokeWidth="2"
        fill="none"
      />
      {[
        [80, 122],
        [220, 120],
        [360, 130],
        [440, 100],
        [580, 120],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="4" fill="#fff" />
          <circle cx={x} cy={y} r="9" fill="rgba(139,92,246,0.25)" />
        </g>
      ))}
    </svg>
  );
}
