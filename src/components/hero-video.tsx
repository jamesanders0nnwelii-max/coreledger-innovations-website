"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export function HeroVideo({ className }: Props) {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <div className={className} aria-hidden>
      {/* Static fallback / poster while video loads */}
      <Image
        src="/brand/hero-atmosphere.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {!reduceMotion ? (
        <video
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/brand/hero-atmosphere.jpg"
        >
          <source src="/brand/blockchain-hero.mp4" type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
