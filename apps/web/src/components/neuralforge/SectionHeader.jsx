"use client";

import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  italicWord,
  description,
  align = "center",
}) {
  const titleParts = italicWord ? title.split(italicWord) : null;
  return (
    <div
      className={`mx-auto ${align === "center" ? "text-center" : "text-left"} max-w-[820px]`}
    >
      {eyebrow ? (
        <Reveal>
          <div
            className={`${
              align === "center" ? "mx-auto" : ""
            } inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md`}
          >
            <span className="h-1 w-1 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.9)]" />
            <span className="text-[11.5px] uppercase tracking-[0.18em] text-white/65">
              {eyebrow}
            </span>
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <h2 className="mt-5 text-[34px] font-medium leading-[1.06] tracking-[-0.02em] text-white sm:text-[44px] md:text-[56px]">
          {titleParts ? (
            <>
              {titleParts[0]}
              <span className="font-instrument-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-violet-300">
                {italicWord}
              </span>
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={140}>
          <p className="mt-5 text-[14.5px] leading-[1.6] text-white/55 md:text-[16px]">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
