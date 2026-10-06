"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion";
import { site } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      project: String(data.get("project") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        mailto?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      if (result.mailto) {
        window.location.href = result.mailto;
      }

      setStatus("success");
      setMessage(
        `Thanks. A draft email to ${site.email} should open in your mail client—send it to complete the request.`,
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Email us directly instead.",
      );
    }
  }

  return (
    <FadeIn>
      <form onSubmit={onSubmit} className="space-y-5 border border-line bg-panel/40 p-6 sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" htmlFor="name">
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
              placeholder="you@company.com"
              className="h-10"
              disabled={status === "loading"}
            />
          </Field>
        </div>

        <Field label="Company" htmlFor="company">
          <Input
            id="company"
            name="company"
            placeholder="Organization or protocol"
            className="h-10"
            disabled={status === "loading"}
          />
        </Field>

        <Field label="Project details" htmlFor="project">
          <Textarea
            id="project"
            name="project"
            required
            placeholder="Share the product, constraint, or protocol problem."
            className="min-h-32"
            disabled={status === "loading"}
          />
        </Field>

        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-10 bg-brand px-4 text-brand-foreground hover:bg-brand/90"
        >
          {status === "loading" ? "Preparing message…" : "Send message"}
        </Button>

        {status === "success" ? (
          <p className="text-sm text-brand" role="status">
            {message}
          </p>
        ) : null}
        {status === "error" ? (
          <p className="text-sm text-red-300" role="alert">
            {message}{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        ) : null}
        {status === "idle" ? (
          <p className="text-xs text-mist">
            Prefer email? Write directly to{" "}
            <a className="text-foreground underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        ) : null}
      </form>
    </FadeIn>
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
