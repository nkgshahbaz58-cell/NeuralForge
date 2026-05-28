"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 md:px-8">
        <div
          className={`relative flex items-center justify-between rounded-full border border-white/10 px-4 py-2.5 backdrop-blur-xl transition-all duration-500 md:px-5 ${
            scrolled
              ? "bg-[#06070D]/70 shadow-[0_10px_40px_-15px_rgba(99,102,241,0.35)]"
              : "bg-white/[0.04]"
          }`}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 pl-1">
            <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-sky-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]">
              <Sparkles size={14} className="text-white" strokeWidth={2.5} />
            </span>
            <span className="text-[15px] font-medium tracking-tight text-white">
              NeuralForge<span className="text-white/50"> AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="rounded-full px-3.5 py-1.5 text-[13.5px] text-white/65 transition-colors duration-300 hover:bg-white/[0.06] hover:text-white"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="group relative hidden overflow-hidden rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#06070D] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] md:inline-flex"
            >
              <span className="relative z-10">Request AI Solution</span>
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] z-40 mx-5 origin-top rounded-2xl border border-white/10 bg-[#06070D]/95 p-4 backdrop-blur-xl transition-all duration-500 ${
          open
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
        style={{ transformOrigin: "top center" }}
      >
        <nav className="flex flex-col">
          {NAV.map((n, i) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-[15px] text-white/75 transition-colors hover:bg-white/[0.06] hover:text-white"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-full bg-white px-4 py-3 text-[14px] font-medium text-[#06070D]"
          >
            Request AI Solution
          </a>
        </nav>
      </div>
    </header>
  );
}
