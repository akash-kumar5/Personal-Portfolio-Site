import { Download } from "lucide-react";

export const Footer = () => (
  <footer className=" border-t border-border bg-background">
    <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
      
      {/* Copyright */}
      <p className="text-foreground-muted">
        © {new Date().getFullYear()} Akash Kumar. All rights reserved.
      </p>

      {/* Links */}
      <div className="flex items-center gap-3">
        <a
          href="/Akash_Kumar_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-foreground hover:bg-surface transition"
        >
          <Download size={14} /> Resume
        </a>

        <a
          href="https://www.linkedin.com/in/-akash-kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border px-3 py-1.5 text-xs text-foreground hover:bg-surface transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/akash-kumar5"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-border px-3 py-1.5 text-xs text-foreground hover:bg-surface transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </footer>
);
