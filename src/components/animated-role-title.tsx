"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
};

/** Role-page title motion — letter reveal + scan line (not the homepage shimmer/rotate). */
export function AnimatedRoleTitle({ title }: Props) {
  const characters = Array.from(title);

  return (
    <h1 className="display relative mt-4 text-4xl font-bold leading-[1.12] text-white sm:text-5xl">
      <span className="sr-only">{title}</span>
      <span aria-hidden className="relative inline-block">
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0, y: 18, rotateX: 50 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.08 + index * 0.028,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block origin-bottom"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute -bottom-2 left-0 h-[2px] w-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <span className="role-title-scan block h-full w-full bg-gradient-to-r from-transparent via-brand to-transparent" />
        </motion.span>
      </span>
    </h1>
  );
}
