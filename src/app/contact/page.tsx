import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} at ${site.email} for DeFi protocol and application engineering.`,
};

export default function ContactPage() {
  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <FadeIn>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Contact
          </p>
          <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">
            Start a technical conversation.
          </h1>
          <p className="mt-5 text-lg text-mist">
            Share the product, constraint, or protocol problem. We map the most
            direct path to a secure production outcome.
          </p>

          <dl className="mt-10 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-brand">
                Direct channel
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
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-brand">
                Response
              </dt>
              <dd className="mt-1 text-foreground">{site.responseTime}</dd>
            </div>
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
          </dl>
        </FadeIn>

        <ContactForm />
      </div>
    </div>
  );
}
