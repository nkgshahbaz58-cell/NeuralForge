"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-36">
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl md:p-20">
            {/* glow */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
            <div
              className="absolute inset-0 -z-10 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
              }}
            />

            <div className="relative text-center">
              <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
                <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)]" />
                <span className="text-[11.5px] uppercase tracking-[0.18em] text-white/65">
                  Build with NeuralForge
                </span>
              </div>

              <h2 className="mx-auto mt-7 max-w-[820px] text-[36px] font-medium leading-[1.05] tracking-[-0.02em] text-white sm:text-[48px] md:text-[64px]">
                Ready to forge your{" "}
                <span className="font-instrument-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-violet-300">
                  AI advantage
                </span>
                ?
              </h2>
              <p className="mx-auto mt-5 max-w-[620px] text-[14.5px] leading-[1.6] text-white/55 md:text-[16px]">
                Let NeuralForge AI design the intelligent systems your business
                needs to move faster, scale further, and operate smarter.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[14px] font-medium text-[#06070D] transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                >
                  Request Your AI Solution
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-[14px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
