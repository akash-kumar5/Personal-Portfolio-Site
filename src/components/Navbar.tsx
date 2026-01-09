"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLink = (href: string) =>
    `transition ${
      pathname === href
        ? "text-foreground font-medium border-b-2 border-foreground pb-0.5"
        : "text-foreground-muted hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="font-semibold tracking-tight">
          Akash Kumar
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/projects" className={navLink("/projects")}>
            Projects
          </Link>
          <Link href="/about" className={navLink("/about")}>
            About
          </Link>
          <Link href="/contact" className={navLink("/contact")}>
            Contact
          </Link>

          <a
            href="https://linkedin.com/in/-akash-kumar"
            target="_blank"
            className="text-foreground-muted hover:text-foreground transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/akash-kumar5"
            target="_blank"
            className="text-foreground-muted hover:text-foreground transition"
          >
            GitHub
          </a>

          {/* Resume CTA */}
          <a
            href="/Akash_Kumar_Resume.pdf"
            target="_blank"
            className="ml-4 rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-5 bg-foreground transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-foreground transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-foreground transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-5 flex flex-col gap-4 text-sm">
            <Link href="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

            <div className="pt-3 border-t border-border flex flex-col gap-3">
              <a href="https://linkedin.com/in/-akash-kumar" target="_blank">
                LinkedIn
              </a>
              <a href="https://github.com/akash-kumar5" target="_blank">
                GitHub
              </a>
            </div>

            <a
              href="/Akash_Kumar_Resume.pdf"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-lg bg-foreground text-background px-4 py-2 text-center font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
