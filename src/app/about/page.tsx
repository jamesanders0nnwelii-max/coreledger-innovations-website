import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/motion";
import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "CoreLedger Innovations is a U.S.-based software company focused on DeFi protocol engineering and product delivery.",
};

export default function AboutPage() {
  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width">
        <FadeIn className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              About
            </p>
            <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">
              A U.S. software company built around DeFi delivery.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-mist">
              {site.name} partners with teams to design and build Solidity
              systems, wallet-connected applications, and the APIs and indexing
              that connect them. Our focus is DeFi: money markets, risk
              boundaries, and production-ready protocol software.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mist">
              We treat architecture, implementation, and review as one job. That
              means Hub and market design, oracle assumptions, liquidation
              paths, and application UX are considered together—not as isolated
              handoffs.
            </p>
          </div>

          <div className="border border-line bg-panel/60 p-6 sm:p-8">
            <Image
              src="/brand/logo.jpg"
              alt={`${site.name} logo`}
              width={320}
              height={320}
              className="mx-auto w-full max-w-[240px] rounded-lg"
            />
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brand">
                  Focus
                </dt>
                <dd className="mt-1 text-foreground">DeFi protocol engineering</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brand">
                  Region
                </dt>
                <dd className="mt-1 text-foreground">{site.region}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brand">
                  Contact
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-foreground hover:text-brand"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>

        <FadeIn className="mt-20 max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            What we are building
          </h2>
          <p className="mt-4 text-mist">
            Aether Protocol is our collateralized lending-market reference—Hub
            risk controls, AeToken markets, interest, liquidation, and AETH
            incentives. Orbit is our next application, currently in development
            and coming online after the next product upgrade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink
              href="/work"
              variant="outline"
              className="h-10 border-line px-4 hover:bg-accent"
            >
              See the work
            </ButtonLink>
            <ButtonLink
              href="/contact"
              className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
            >
              Get in touch
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
