"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function HeroVideo({ className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let cancelled = false;

    const prefersReducedMotion = () => motionQuery.matches;

    const tryPlay = async () => {
      if (cancelled || prefersReducedMotion()) return;
      try {
        video.muted = true;
        video.defaultMuted = true;
        await video.play();
        if (!cancelled) setVideoPlaying(true);
      } catch {
        if (!cancelled) setVideoPlaying(false);
      }
    };

    const onPlaying = () => {
      if (!cancelled) setVideoPlaying(true);
    };

    // Browsers sometimes pause background video after hydration; resume it.
    const onPause = () => {
      if (cancelled || prefersReducedMotion()) return;
      window.setTimeout(() => {
        if (!cancelled && video.paused && !prefersReducedMotion()) {
          void tryPlay();
        }
      }, 50);
    };

    video.addEventListener("playing", onPlaying);
    video.addEventListener("pause", onPause);
    video.addEventListener("canplay", tryPlay);
    void tryPlay();

    const onVisibility = () => {
      if (document.visibilityState === "visible") void tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const onMotionChange = () => {
      if (prefersReducedMotion()) {
        video.pause();
        setVideoPlaying(false);
      } else {
        void tryPlay();
      }
    };
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      cancelled = true;
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("pause", onPause);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div className={cn("overflow-hidden bg-ink", className)} aria-hidden>
      <img
        src="/brand/hero-atmosphere.jpg"
        alt=""
        className={cn(
          "absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-700",
          videoPlaying ? "opacity-0" : "opacity-100",
        )}
      />
      <video
        ref={videoRef}
        className="absolute inset-0 z-[1] h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/brand/hero-atmosphere.jpg"
      >
        <source src="/brand/blockchain-hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
