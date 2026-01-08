"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Download, ChevronDown } from "lucide-react";

export const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl rounded-2xl bg-surface/80 backdrop-blur-md border border-border px-6 py-3 flex items-center justify-between">
      {/* Name */}
      <Link href="/" className="font-semibold tracking-tight">
        Akash Kumar
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <Link href="/projects" className="text-foreground-muted hover:text-foreground transition">
          Projects
        </Link>
        <Link href="/about" className="text-foreground-muted hover:text-foreground transition">
          About
        </Link>

        {/* Connect */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setShowDropdown((v) => !v)}
            className="flex items-center gap-1 text-foreground-muted hover:text-foreground transition"
          >
            Connect <ChevronDown size={14} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 rounded-xl bg-surface border border-border shadow-lg overflow-hidden">
              <a
                href="https://github.com/akash-kumar5"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm hover:bg-surface-soft transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/-akash-kumar"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm hover:bg-surface-soft transition"
              >
                LinkedIn
              </a>
              <a
                href="mailto:akashsingh4152@gmail.com"
                className="block px-4 py-2 text-sm hover:bg-surface-soft transition"
              >
                Email
              </a>
            </div>
          )}
        </div>

        {/* Resume */}
        <a
          href="/Akash_Kumar_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl px-4 py-2 border border-border bg-background hover:bg-surface transition text-sm"
        >
          <Download size={14} /> Resume
        </a>
      </div>

      {/* Mobile */}
      <button
        className="md:hidden"
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="Toggle menu"
      >
        {openDrawer ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile drawer */}
      {openDrawer && (
        <div className="absolute top-16 right-4 w-48 rounded-xl bg-surface border border-border shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <Link
            href="/projects"
            onClick={() => setOpenDrawer(false)}
            className="text-sm text-foreground-muted hover:text-foreground"
          >
            Projects
          </Link>
          <Link
            href="/about"
            onClick={() => setOpenDrawer(false)}
            className="text-sm text-foreground-muted hover:text-foreground"
          >
            About
          </Link>

          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <a
              href="https://github.com/akash-kumar5"
              target="_blank"
              className="text-sm hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/-akash-kumar"
              target="_blank"
              className="text-sm hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="mailto:akashsingh4152@gmail.com"
              className="text-sm hover:text-foreground"
            >
              Email
            </a>
          </div>

          <a
            href="/Akash_Kumar_Resume.pdf"
            download
            target="_blank"
            onClick={() => setOpenDrawer(false)}
            className="mt-2 flex items-center gap-2 justify-center rounded-xl border border-border bg-background px-3 py-2 text-sm"
          >
            <Download size={14} /> Resume
          </a>
        </div>
      )}
    </nav>
  );
};
