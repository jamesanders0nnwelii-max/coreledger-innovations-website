"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

/**
 * Full-bleed muted looping hero background.
 * React can drop the `muted` DOM attribute on hydration, which breaks autoplay —
 * we force muted + play() after mount so the video keeps running.
 */
export function HeroVideo({ className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Critical for autoplay policies after React hydration
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.playsInline = true;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) {
      video.pause();
      return;
    }

    let cancelled = false;

    const ensurePlaying = () => {
      if (cancelled || motionQuery.matches) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          window.setTimeout(() => {
            if (!cancelled && video.paused) {
              video.muted = true;
              void video.play().catch(() => undefined);
            }
          }, 100);
        });
      }
    };

    ensurePlaying();
    video.addEventListener("loadeddata", ensurePlaying);
    video.addEventListener("canplay", ensurePlaying);

    const onPause = () => {
      if (cancelled || motionQuery.matches) return;
      window.setTimeout(ensurePlaying, 30);
    };
    video.addEventListener("pause", onPause);

    const onVisibility = () => {
      if (document.visibilityState === "visible") ensurePlaying();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", ensurePlaying);
      video.removeEventListener("canplay", ensurePlaying);
      video.removeEventListener("pause", onPause);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div className={cn("overflow-hidden bg-[#070b14]", className)} aria-hidden>
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-110"
        autoPlay
        loop
        playsInline
        preload="auto"
        poster="/brand/hero-atmosphere.jpg"
        muted
      >
        <source src="/brand/blockchain-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
