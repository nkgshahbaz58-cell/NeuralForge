"use client";

import { Sparkles, Twitter, Linkedin, Github, Instagram } from "lucide-react";

const QUICK = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  "AI Workflow Automation",
  "Custom AI Chatbots",
  "AI Agents",
  "CRM Automation",
  "AI Websites & Apps",
  "Internal Dashboards",
  "API Integrations",
  "AI Consulting",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-20 pb-10">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                <Sparkles size={15} className="text-white" strokeWidth={2.5} />
              </span>
              <span className="text-[17px] font-medium tracking-tight text-white">
                NeuralForge<span className="text-white/50"> AI</span>
              </span>
            </a>
            <p className="mt-5 max-w-[360px] text-[13.5px] leading-[1.7] text-white/50">
              NeuralForge AI is a premium AI automation and AI agent agency
              helping startups, creators, and enterprises forge intelligent
              systems that save time and grow revenue.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {[Twitter, Linkedin, Github, Instagram].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-all duration-300 hover:border-white/25 hover:text-white"
                >
                  <I size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/40">
              Navigate
            </div>
            <ul className="mt-5 space-y-3">
              {QUICK.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13.5px] text-white/65 transition hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/40">
              Services
            </div>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[13.5px] text-white/65 transition hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11.5px] uppercase tracking-[0.18em] text-white/40">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-[13.5px] text-white/65">
              <li>
                <a
                  href="mailto:hello@neuralforge.ai"
                  className="transition hover:text-white"
                >
                  hello@neuralforge.ai
                </a>
              </li>
              <li>Remote — Worldwide</li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Request a strategy call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <div className="text-[12px] text-white/40">
            © {new Date().getFullYear()} NeuralForge AI. All rights reserved.
          </div>
          <div className="flex items-center gap-5 text-[12px] text-white/40">
            <a href="#" className="transition hover:text-white/70">
              Privacy
            </a>
            <a href="#" className="transition hover:text-white/70">
              Terms
            </a>
            <a href="#" className="transition hover:text-white/70">
              Security
            </a>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="pointer-events-none mt-12 select-none overflow-hidden">
          <div
            className="whitespace-nowrap text-center font-instrument-serif italic leading-none text-transparent"
            style={{
              fontSize: "clamp(80px, 18vw, 240px)",
              WebkitTextStroke: "1px rgba(255,255,255,0.08)",
            }}
          >
            NeuralForge AI
          </div>
        </div>
      </div>
    </footer>
  );
}
