"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const phrases = [
  "production risk",
  "protocol risk",
  "market risk",
  "on-chain systems",
] as const;

export function AnimatedHeroPhrase() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % phrases.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex min-h-[1.15em] min-w-[11ch] items-baseline overflow-hidden align-baseline sm:min-w-[13ch]">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={phrases[index]}
          initial={{ y: "70%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-60%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block whitespace-nowrap text-brand"
        >
          {phrases[index]}
          <span
            aria-hidden
            className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-brand via-brand/70 to-transparent sm:-bottom-1.5"
          />
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
