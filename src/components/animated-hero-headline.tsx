"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const rotatingPhrases = [
  "production risk",
  "protocol risk",
  "market risk",
  "on-chain systems",
] as const;

const leadWords = ["DeFi", "protocols", "engineered", "for", "real"] as const;

export function AnimatedHeroHeadline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % rotatingPhrases.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <h1 className="display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
      <span className="sr-only">
        DeFi protocols engineered for real {rotatingPhrases[index]}.
      </span>

      <span aria-hidden className="inline">
        {leadWords.map((word, wordIndex) => (
          <motion.span
            key={word}
            initial={{ y: "0.55em", opacity: 0, filter: "blur(8px)" }}
            animate={{ y: "0em", opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.65,
              delay: 0.12 + wordIndex * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hero-shimmer-word mr-[0.28em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </span>

      <span aria-hidden className="relative inline-flex min-h-[1.15em] min-w-[11ch] items-baseline overflow-hidden align-baseline sm:min-w-[13ch]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={rotatingPhrases[index]}
            initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative inline-block whitespace-nowrap text-brand"
          >
            {rotatingPhrases[index]}
            <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-brand via-brand/70 to-transparent sm:-bottom-1.5" />
          </motion.span>
        </AnimatePresence>
      </span>
      <span aria-hidden>.</span>
    </h1>
  );
}
