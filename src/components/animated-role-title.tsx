"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
};

/**
 * Continuously moving role title — soft float + flowing gradient.
 * Intentionally different from the homepage word-cycle headline.
 */
export function AnimatedRoleTitle({ title }: Props) {
  return (
    <h1 className="display relative mt-4 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl">
      <span className="sr-only">{title}</span>
      <motion.span
        aria-hidden
        className="relative inline-block"
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: 1,
          y: [0, -4, 0],
        }}
        transition={{
          opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          },
        }}
      >
        <span className="role-title-flow">{title}</span>
        <span
          aria-hidden
          className="mt-3 block h-px w-full bg-gradient-to-r from-brand via-brand/40 to-transparent opacity-80"
        />
      </motion.span>
    </h1>
  );
}
