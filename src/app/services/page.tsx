import type { Metadata } from "next";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { ButtonLink } from "@/components/button-link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DeFi protocol development, smart contract engineering, Web3 applications, and security review from CoreLedger Innovations.",
};

export default function ServicesPage() {
  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Services
          </p>
          <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">
            DeFi software development, from contracts to applications.
          </h1>
          <p className="mt-5 text-lg text-mist">
            Bring a defined technical problem or a product idea. We can own a
            system boundary or work alongside your engineering team.
          </p>
        </FadeIn>

        <Stagger className="mt-16 grid gap-10 lg:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <article className="h-full border-t border-line pt-6">
                <h2 className="font-heading text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="mt-3 text-mist">{service.summary}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-300">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-20 border border-line bg-panel/50 p-8 sm:p-10">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            Ready to scope a DeFi engagement?
          </h2>
          <p className="mt-3 max-w-2xl text-mist">
            Tell us about the protocol, application, or integration you need to
            ship. We will map ownership, milestones, and the first delivery
            slice.
          </p>
          <div className="mt-6">
            <ButtonLink
              href="/contact"
              className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
            >
              Contact us
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
