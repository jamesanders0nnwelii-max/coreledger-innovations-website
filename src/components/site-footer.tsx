import Image from "next/image";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-panel/60">
      <div className="section-width section-pad grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src="/brand/logo-mark.svg"
              alt=""
              width={32}
              height={32}
              className="size-8"
            />
            <span className="font-heading text-lg font-semibold tracking-tight">
              {site.name}
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            {site.description}
          </p>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Navigate
          </p>
          <ul className="space-y-2 text-sm text-mist">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-mist">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>{site.region}</li>
            <li>{site.responseTime}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="section-width section-pad flex flex-col gap-2 py-5 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>DeFi protocol engineering · U.S. based</p>
        </div>
      </div>
    </footer>
  );
}
