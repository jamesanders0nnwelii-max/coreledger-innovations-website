"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  roleSlug: string;
  roleTitle: string;
  employmentTypes: readonly string[];
};

type Status = "idle" | "loading" | "success" | "error";

export function JobApplicationForm({
  roleSlug,
  roleTitle,
  employmentTypes,
}: Props) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [employmentType, setEmploymentType] = useState(employmentTypes[0] ?? "Full-time");
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [open]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      roleSlug,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      employmentType,
      links: String(data.get("links") || ""),
      resumeUrl: String(data.get("resumeUrl") || ""),
      experience: String(data.get("experience") || ""),
    };

    try {
      const response = await fetch("/api/careers/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        mailto?: string;
        id?: string;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to submit your application.");
      }

      setStatus("success");
      setMessage(
        result.message ||
          `Application submitted. We will follow up from ${site.careersEmail}.`,
      );
      form.reset();
      setEmploymentType(employmentTypes[0] ?? "Full-time");

      // Open a prefilled mail draft so the hiring inbox also receives the application.
      if (result.mailto) {
        window.setTimeout(() => {
          window.location.href = result.mailto!;
        }, 400);
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email us directly.",
      );
    }
  }

  return (
    <div className="space-y-4">
      <Button
        type="button"
        className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
        onClick={() => {
          setOpen(true);
          setStatus("idle");
          setMessage("");
        }}
      >
        Apply for this role
      </Button>

      {open ? (
        <div
          ref={panelRef}
          id="apply"
          className="scroll-mt-28 border border-line bg-ink/55 p-6 backdrop-blur-md sm:p-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-brand">
                Application
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight">
                Apply for {roleTitle}
              </h2>
              <p className="mt-2 text-sm text-mist">
                Review and edit your details below, then submit. Applications go
                to {site.careersEmail}.
              </p>
            </div>
            <button
              type="button"
              className="text-sm text-mist hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>

          {status === "success" ? (
            <div className="mt-8 space-y-4" role="status">
              <p className="text-sm text-brand">{message}</p>
              <p className="text-sm text-mist">
                If your mail client opened, send the draft to complete delivery
                to our hiring inbox. You can also email{" "}
                <a
                  className="text-foreground underline"
                  href={`mailto:${site.careersEmail}`}
                >
                  {site.careersEmail}
                </a>{" "}
                directly.
              </p>
              <Button
                type="button"
                variant="outline"
                className="h-10 border-line"
                onClick={() => {
                  setStatus("idle");
                  setMessage("");
                  formRef.current?.reset();
                }}
              >
                Submit another application
              </Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={onSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" htmlFor="name">
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="h-10"
                    disabled={status === "loading"}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="h-10"
                    disabled={status === "loading"}
                  />
                </Field>
              </div>

              <Field label="Employment type" htmlFor="employmentType">
                <div className="flex flex-wrap gap-2">
                  {employmentTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      disabled={status === "loading"}
                      onClick={() => setEmploymentType(type)}
                      className={cn(
                        "h-10 border px-4 text-sm transition-colors",
                        employmentType === type
                          ? "border-brand bg-brand/15 text-brand"
                          : "border-line text-mist hover:border-brand/40 hover:text-foreground",
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Portfolio / GitHub / LinkedIn" htmlFor="links">
                <Input
                  id="links"
                  name="links"
                  placeholder="https://github.com/you · https://linkedin.com/in/you"
                  className="h-10"
                  disabled={status === "loading"}
                />
              </Field>

              <Field label="Resume link (optional)" htmlFor="resumeUrl">
                <Input
                  id="resumeUrl"
                  name="resumeUrl"
                  type="url"
                  placeholder="https://drive.google.com/..."
                  className="h-10"
                  disabled={status === "loading"}
                />
              </Field>

              <Field label="Relevant experience" htmlFor="experience">
                <Textarea
                  id="experience"
                  name="experience"
                  required
                  placeholder="Share DeFi, Solidity, backend, or protocol experience relevant to Aether Protocol."
                  className="min-h-36"
                  disabled={status === "loading"}
                />
              </Field>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
                >
                  {status === "loading" ? "Submitting…" : "Submit application"}
                </Button>
                <p className="text-xs text-mist">
                  Submitting saves your application and opens a draft to{" "}
                  {site.careersEmail}.
                </p>
              </div>

              {status === "error" ? (
                <p className="text-sm text-red-300" role="alert">
                  {message}{" "}
                  <a
                    className="underline"
                    href={`mailto:${site.careersEmail}`}
                  >
                    {site.careersEmail}
                  </a>
                </p>
              ) : null}
            </form>
          )}
        </div>
      ) : null}
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
