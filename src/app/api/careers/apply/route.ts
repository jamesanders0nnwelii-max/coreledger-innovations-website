import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { getJob, site } from "@/lib/site";

type ApplyBody = {
  roleSlug?: string;
  name?: string;
  email?: string;
  employmentType?: string;
  links?: string;
  experience?: string;
  resumeUrl?: string;
};

type StoredApplication = {
  id: string;
  submittedAt: string;
  roleSlug: string;
  roleTitle: string;
  name: string;
  email: string;
  employmentType: string;
  links: string;
  experience: string;
  resumeUrl: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "applications.json");

async function readApplications(): Promise<StoredApplication[]> {
  try {
    const raw = await readFile(dataFile, "utf8");
    const parsed = JSON.parse(raw) as StoredApplication[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function POST(request: Request) {
  let body: ApplyBody;

  try {
    body = (await request.json()) as ApplyBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const roleSlug = body.roleSlug?.trim() || "";
  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const employmentType = body.employmentType?.trim() || "";
  const links = body.links?.trim() || "";
  const experience = body.experience?.trim() || "";
  const resumeUrl = body.resumeUrl?.trim() || "";

  const job = getJob(roleSlug);
  if (!job) {
    return NextResponse.json({ ok: false, error: "Unknown role." }, { status: 400 });
  }

  if (!name || !email || !employmentType || !experience) {
    return NextResponse.json(
      {
        ok: false,
        error: "Name, email, employment type, and experience are required.",
      },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!job.employmentTypes.includes(employmentType as (typeof job.employmentTypes)[number])) {
    return NextResponse.json(
      { ok: false, error: "Employment type must be Full-time or Contract." },
      { status: 400 },
    );
  }

  const application: StoredApplication = {
    id: `app_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    submittedAt: new Date().toISOString(),
    roleSlug: job.slug,
    roleTitle: job.title,
    name,
    email,
    employmentType,
    links,
    experience,
    resumeUrl,
  };

  try {
    await mkdir(dataDir, { recursive: true });
    const existing = await readApplications();
    existing.push(application);
    await writeFile(dataFile, JSON.stringify(existing, null, 2), "utf8");
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Unable to store the application right now. Please try again.",
      },
      { status: 500 },
    );
  }

  const subject = encodeURIComponent(
    `Application: ${job.title} — ${employmentType} — Aether Protocol`,
  );
  const lines = [
    `New Aether Protocol application`,
    ``,
    `Role: ${job.title}`,
    `Employment type: ${employmentType}`,
    `Name: ${name}`,
    `Email: ${email}`,
    links ? `Links: ${links}` : null,
    resumeUrl ? `Resume: ${resumeUrl}` : null,
    ``,
    `Experience / note:`,
    experience,
    ``,
    `Application ID: ${application.id}`,
    `Submitted: ${application.submittedAt}`,
  ].filter((line): line is string => line !== null);

  const mailto = `mailto:${site.careersEmail}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;

  return NextResponse.json({
    ok: true,
    id: application.id,
    mailto,
    message: `Application received for ${job.title}.`,
  });
}
