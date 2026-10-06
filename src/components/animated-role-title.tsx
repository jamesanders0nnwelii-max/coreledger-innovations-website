"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
};

const wordsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const wordVariant = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/** Premium role-title treatment: restrained word rise + one-time underline draw. */
export function AnimatedRoleTitle({ title }: Props) {
  const words = title.split(" ");

  return (
    <h1 className="display relative mt-4 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
      <span className="sr-only">{title}</span>

      <motion.span
        aria-hidden
        className="relative inline-block"
        initial="hidden"
        animate="visible"
        variants={wordsContainer}
      >
        <span className="inline">
          {words.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              variants={wordVariant}
              className="mr-[0.3em] inline-block last:mr-0"
            >
              <span className="role-title-ink bg-gradient-to-b from-white via-white to-slate-300 bg-clip-text text-transparent">
                {word}
              </span>
            </motion.span>
          ))}
        </span>

        <motion.span
          aria-hidden
          className="mt-3 block h-px w-full origin-left bg-gradient-to-r from-brand via-brand/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.45 + words.length * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </motion.span>
    </h1>
  );
}
