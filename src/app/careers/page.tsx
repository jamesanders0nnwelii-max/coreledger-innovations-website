import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion";
import { careersProject, jobs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: `Join ${site.name} on Aether Protocol. Hiring Solidity Engineer, Technical Lead Engineer, and Backend Engineer.`,
};

export default function CareersPage() {
  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Careers
          </p>
          <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">
            Build Aether Protocol with us.
          </h1>
          <p className="mt-5 text-lg text-mist">{careersProject.summary}</p>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-12 border border-line bg-panel/40 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Project focus
          </p>
          <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight">
            {careersProject.name}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {careersProject.focus.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-300">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="mt-16">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
              Open roles
            </p>
            <h2 className="display mt-3 text-3xl font-semibold sm:text-4xl">
              Three engineering seats for Aether.
            </h2>
          </FadeIn>

          <Stagger className="mt-10 space-y-0">
            {jobs.map((job) => (
              <StaggerItem key={job.slug}>
                <Link
                  href={`/careers/${job.slug}`}
                  className="group block border-t border-line py-8 transition-colors hover:border-brand/40"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em]">
                        <span className="text-brand">{job.team}</span>
                        <span className="text-mist">{job.type}</span>
                        <span className="text-mist">{job.location}</span>
                      </div>
                      <h3 className="mt-3 font-heading text-2xl font-semibold tracking-tight group-hover:text-brand">
                        {job.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-mist">
                        {job.summary}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm text-foreground">
                      View role
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
            <div className="border-t border-line" />
          </Stagger>
        </div>

        <FadeIn className="mt-16 max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold tracking-tight">
            How to apply
          </h2>
          <p className="mt-3 text-mist">
            Send your resume, relevant protocol or backend work, and a short note
            on why Aether fits your background to{" "}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Aether Protocol career inquiry")}`}
              className="text-foreground underline decoration-brand/50 underline-offset-4 hover:text-brand"
            >
              {site.email}
            </a>
            . We reply within one business day.
          </p>
          <div className="mt-6">
            <ButtonLink
              href={`mailto:${site.email}?subject=${encodeURIComponent("Aether Protocol career inquiry")}`}
              className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
            >
              Email careers
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
