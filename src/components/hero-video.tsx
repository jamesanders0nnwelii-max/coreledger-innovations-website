"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Hero background video rendered as raw HTML so React hydration cannot
 * strip the `muted` attribute (a common cause of autoplay dying after load).
 */
export function HeroVideo({ className }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const video = host.querySelector("video");
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const kick = () => {
      if (motionQuery.matches) {
        video.pause();
        return;
      }
      video.defaultMuted = true;
      video.muted = true;
      video.playsInline = true;
      void video.play().catch(() => undefined);
    };

    kick();

    const onPause = () => {
      if (!motionQuery.matches && video.paused) {
        window.setTimeout(kick, 40);
      }
    };

    video.addEventListener("pause", onPause);
    video.addEventListener("loadeddata", kick);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") kick();
    });
    window.addEventListener("focus", kick);

    return () => {
      video.removeEventListener("pause", onPause);
      video.removeEventListener("loadeddata", kick);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={cn("overflow-hidden bg-[#070b14]", className)}
      aria-hidden
      dangerouslySetInnerHTML={{
        __html: `
<video
  class="absolute inset-0 h-full w-full object-cover brightness-110 contrast-110"
  autoplay
  muted
  loop
  playsinline
  preload="auto"
  poster="/brand/hero-atmosphere.jpg"
>
  <source src="/brand/blockchain-hero.mp4" type="video/mp4" />
</video>`,
      }}
    />
  );
}
