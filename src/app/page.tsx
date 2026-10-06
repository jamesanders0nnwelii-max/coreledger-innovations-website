"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { HeroVideo } from "@/components/hero-video";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { projects, services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <HeroVideo className="absolute inset-0 z-0" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink/70 via-ink/35 to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />

        <div className="section-width section-pad relative z-[2] flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-3">
              <Image
                src="/brand/logo-mark.svg"
                alt=""
                width={56}
                height={56}
                className="size-14"
                priority
              />
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {site.shortName}
                </p>
                <p className="text-sm tracking-[0.22em] text-brand uppercase">
                  Innovations
                </p>
              </div>
            </div>

            <h1 className="display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              DeFi protocols engineered for real production risk.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              We design and build money markets, smart contracts, and the
              applications around them for teams shipping on-chain systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink
                href="/contact"
                size="lg"
                className="h-11 gap-2 bg-brand px-5 text-brand-foreground hover:bg-brand/90"
              >
                Start a technical conversation
                <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href="/work"
                variant="outline"
                size="lg"
                className="h-11 border-white/20 bg-white/5 px-5 text-white hover:bg-white/10"
              >
                View our work
              </ButtonLink>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad border-t border-line py-20 sm:py-24">
        <div className="section-width">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Capabilities
            </p>
            <h2 className="display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
              From protocol boundaries to product surfaces.
            </h2>
            <p className="mt-4 max-w-2xl text-mist">
              CoreLedger focuses on DeFi systems where market risk, contract
              design, and application behavior have to agree.
            </p>
          </FadeIn>

          <Stagger className="mt-12 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="border-t border-line pt-6">
                  <h3 className="font-heading text-xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {service.summary}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section-pad border-t border-line bg-panel/40 py-20 sm:py-24">
        <div className="section-width">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Selected work
            </p>
            <h2 className="display mt-3 text-3xl font-semibold sm:text-4xl">
              Projects that define how we build.
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.08}>
                <LinkPanel
                  href={`/work#${project.slug}`}
                  name={project.name}
                  status={project.status}
                  category={project.category}
                  summary={project.summary}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-line py-20 sm:py-24">
        <div className="section-width">
          <FadeIn className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Engagement
            </p>
            <h2 className="display mt-3 text-3xl font-semibold sm:text-4xl">
              Bring a protocol problem or a product constraint.
            </h2>
            <p className="mt-4 text-mist">
              Share the stack, timeline, and risk surface. We map the most
              direct path to a secure production outcome and reply within one
              business day.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/contact"
                size="lg"
                className="h-11 gap-2 bg-brand px-5 text-brand-foreground hover:bg-brand/90"
              >
                Contact {site.shortName}
                <ArrowRight className="size-4" />
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function LinkPanel({
  href,
  name,
  status,
  category,
  summary,
}: {
  href: string;
  name: string;
  status: string;
  category: string;
  summary: string;
}) {
  return (
    <a
      href={href}
      className="group block border border-line bg-background/40 p-6 transition-colors hover:border-brand/40 hover:bg-background/70 sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em]">
        <span className="text-brand">{status}</span>
        <span className="text-mist">{category}</span>
      </div>
      <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight group-hover:text-brand">
        {name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">{summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm text-foreground">
        View project
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
