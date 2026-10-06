"use client";

import { FadeIn } from "@/components/motion";

export function BlockchainVideoSection() {
  return (
    <section className="section-pad border-t border-line py-20 sm:py-24">
      <div className="section-width">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            On-chain systems
          </p>
          <h2 className="display mt-3 text-3xl font-semibold sm:text-4xl">
            Blockchain networks in motion.
          </h2>
          <p className="mt-4 text-mist">
            DeFi protocols depend on connected markets, reliable state, and
            clear risk boundaries. This atmosphere piece reflects the networked
            systems we engineer around.
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-10">
          <div className="overflow-hidden border border-line bg-ink shadow-[0_0_0_1px_rgb(45_212_191_/_8%)]">
            <div className="relative aspect-video w-full bg-panel">
              <video
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                poster="/brand/hero-atmosphere.jpg"
                aria-label="Professional blockchain network visualization"
              >
                <source src="/brand/blockchain-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col gap-1 border-t border-line px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-slate-300">
                Network topology visualization · DeFi / protocol atmosphere
              </p>
              <p className="text-xs text-mist">
                Royalty-free stock footage adapted for CoreLedger Innovations
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
