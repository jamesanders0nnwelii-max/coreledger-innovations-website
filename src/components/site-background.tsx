"use client";

import { HeroVideo } from "@/components/hero-video";

/** Fixed blockchain video backdrop shared across every page. */
export function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <HeroVideo className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/50" />
      <div className="absolute inset-0 bg-ink/25" />
    </div>
  );
}
