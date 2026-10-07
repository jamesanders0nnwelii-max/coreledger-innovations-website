import type { Metadata } from "next";
import { FadeIn } from "@/components/motion";
import { ButtonLink } from "@/components/button-link";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected DeFi and application work from CoreLedger Innovations, including Aether Protocol and Quay.",
};

export default function WorkPage() {
  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width">
        <FadeIn className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand">
            Work
          </p>
          <h1 className="display mt-3 text-4xl font-bold sm:text-5xl">
            Protocol and product work in progress.
          </h1>
          <p className="mt-5 text-lg text-mist">
            Aether Protocol is our DeFi money-market reference. Quay is an
            application currently in development.
          </p>
        </FadeIn>

        <div className="mt-16 space-y-16">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <article
                id={project.slug}
                className="scroll-mt-28 border-t border-line pt-10"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em]">
                  <span className="text-brand">{project.status}</span>
                  <span className="text-mist">{project.category}</span>
                </div>
                <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                  {project.name}
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-mist">
                  {project.detail}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="border border-line px-3 py-1 text-xs tracking-wide text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <ul className="mt-8 max-w-2xl space-y-3 text-sm text-slate-300">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20">
          <ButtonLink
            href="/contact"
            className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
          >
            Discuss a similar project
          </ButtonLink>
        </FadeIn>
      </div>
    </div>
  );
}
