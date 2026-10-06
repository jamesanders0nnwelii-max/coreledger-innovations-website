import { NextResponse } from "next/server";
import { site } from "@/lib/site";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  project?: string;
};

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const name = body.name?.trim() || "";
  const email = body.email?.trim() || "";
  const company = body.company?.trim() || "";
  const project = body.project?.trim() || "";

  if (!name || !email || !project) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and project details are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const subject = encodeURIComponent(`CoreLedger inquiry from ${name}`);
  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Project details:",
    project,
  ].filter((line): line is string => line !== null);

  const mailto = `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(lines.join("\n"))}`;

  return NextResponse.json({
    ok: true,
    mailto,
    message: `Message prepared for ${site.email}.`,
  });
}
