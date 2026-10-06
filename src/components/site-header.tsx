"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-background/80 backdrop-blur-xl">
      <div className="section-width section-pad flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-mark.svg"
            alt=""
            width={36}
            height={36}
            className="size-9 transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <span className="font-heading text-[15px] font-semibold leading-tight tracking-tight text-foreground sm:text-base">
            {site.shortName}
            <span className="ml-1.5 hidden font-sans text-xs font-normal tracking-wide text-mist sm:inline">
              Innovations
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active =
              pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active ? "text-brand" : "text-mist hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <ButtonLink
            href="/contact"
            size="sm"
            className="h-8 bg-brand text-brand-foreground hover:bg-brand/90"
          >
            Start a conversation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-panel md:hidden">
          <nav className="section-pad flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href="/contact"
              className="mt-2 h-10 justify-center bg-brand text-brand-foreground hover:bg-brand/90"
            >
              Start a conversation
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
