import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { JobApplicationForm } from "@/components/job-application-form";
import { getJob, jobs, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Role not found" };
  return {
    title: job.title,
    description: job.summary,
  };
}

export default async function JobPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <div className="section-pad py-16 sm:py-24">
      <div className="section-width max-w-3xl">
        <FadeIn>
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-mist hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            All roles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em]">
            <span className="text-brand">{job.team}</span>
            <span className="text-mist">
              {job.employmentTypes.join(" · ")}
            </span>
            <span className="text-mist">{job.location}</span>
          </div>

          <h1 className="display mt-4 text-4xl font-bold sm:text-5xl">
            {job.title}
          </h1>
          <p className="mt-5 text-lg text-mist">{job.summary}</p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-line bg-ink/40 p-5 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
                Full-time
              </p>
              <p className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                {job.compensation.fullTime}
              </p>
              <p className="mt-1 text-sm text-mist">
                {job.compensation.fullTimeNote}
              </p>
            </div>
            <div className="border border-line bg-ink/40 p-5 backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
                Contract
              </p>
              <p className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground">
                {job.compensation.contract}
              </p>
              <p className="mt-1 text-sm text-mist">
                {job.compensation.contractNote}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <JobApplicationForm
              roleSlug={job.slug}
              roleTitle={job.title}
              employmentTypes={job.employmentTypes}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.05} className="mt-14 space-y-12">
          <section>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Employment type
            </h2>
            <p className="mt-4 text-mist leading-relaxed">
              This role is open as{" "}
              <span className="text-foreground">Full-time</span> or{" "}
              <span className="text-foreground">Contract</span>. Choose your
              preferred engagement in the application form and submit to{" "}
              <a
                href={`mailto:${site.careersEmail}`}
                className="text-foreground underline decoration-brand/50 underline-offset-4 hover:text-brand"
              >
                {site.careersEmail}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              About the role
            </h2>
            <p className="mt-4 text-mist leading-relaxed">{job.about}</p>
          </section>

          <section className="border-t border-line pt-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Responsibilities
            </h2>
            <ul className="mt-5 space-y-3">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-line pt-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Requirements
            </h2>
            <ul className="mt-5 space-y-3">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-line pt-10">
            <h2 className="font-heading text-2xl font-semibold tracking-tight">
              Nice to have
            </h2>
            <ul className="mt-5 space-y-3">
              {job.niceToHave.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-line bg-panel/40 p-6 sm:p-8">
            <h2 className="font-heading text-xl font-semibold tracking-tight">
              Ready to apply?
            </h2>
            <p className="mt-3 text-sm text-mist">
              Use <span className="text-foreground">Apply for this role</span>{" "}
              above to open the application form, edit your details, and submit
              to {site.careersEmail}.
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
