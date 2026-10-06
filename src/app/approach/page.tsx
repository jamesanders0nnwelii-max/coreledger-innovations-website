import type { Metadata } from "next";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink } from "@/components/button-link";
import { approachSteps, faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How CoreLedger Innovations maps, builds, hardens, and launches DeFi protocol systems.",
};

export default function ApproachPage() {
  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Approach
          </p>
          <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">
            Agree on the boundaries, then ship in testable steps.
          </h1>
          <p className="mt-5 text-lg text-mist">
            Architecture, implementation, and review stay connected so
            transaction state, on-chain behavior, and supporting data make sense
            together.
          </p>
        </FadeIn>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-2">
          {approachSteps.map((step) => (
            <StaggerItem key={step.step}>
              <div className="border-t border-line pt-6">
                <p className="font-mono text-sm text-brand">{step.step}</p>
                <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="mt-3 text-mist">{step.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-20 max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Trust is an engineering outcome.
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                title: "Threat-model first",
                body: "Permissions, economic assumptions, upgrade paths, and adversarial behavior are considered before implementation.",
              },
              {
                title: "Design for failure",
                body: "Provider outages, chain reorganizations, stale data, and partial transactions are treated as normal operating conditions.",
              },
              {
                title: "Make state visible",
                body: "Users and operators should understand what happened, what is pending, and what action is safe next.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-2 border-brand/50 pl-5">
                <h3 className="font-heading text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-mist">{item.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-20">
          <h2 className="font-heading text-3xl font-semibold tracking-tight">
            Questions before you choose a partner.
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="cursor-pointer list-none font-heading text-lg font-medium tracking-tight marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {faq.q}
                    <span className="text-brand transition group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-16">
          <ButtonLink
            href="/contact"
            className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
          >
            Start with a technical brief
          </ButtonLink>
        </FadeIn>
      </div>
    </div>
  );
}
