import { Download } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-background">
    <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
      {/* Identity */}
      <div>
        <p className="font-semibold tracking-tight">Akash Kumar</p>
        
        <p className="text-sm text-foreground-muted mt-1">
          Designing systems for real-world decisions.
        </p>
        <p className="text-sm text-foreground-muted mt-2">
          Contact:{" "}
          <a
            href="mailto:akash.kumar.devs@gmail.com"
            className="hover:text-foreground transition font-medium underline"
          >
            akash.kumar.devs@gmail.com
          </a>
        </p>

        <p className="text-xs text-foreground-muted/70 mt-3">
          © {new Date().getFullYear()} Akash Kumar
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/-akash-kumar"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            border border-border
            px-4 py-2
            text-sm
            hover:-translate-y-[1px] hover:shadow-md transition-all
            hover:bg-surface
          "
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/akash-kumar5"
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            border border-border
            px-4 py-2
            text-sm
            hover:bg-surface
            hover:-translate-y-[1px] hover:shadow-md transition-all

          "
        >
          GitHub
        </a>
        <a
          href="/Akash_Kumar_Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2
            rounded-full
            bg-foreground text-background
            px-4 py-2
            text-sm font-medium
            hover:opacity-90
            hover:-translate-y-[1px] hover:shadow-md transition-all

          "
        >
          <Download size={14} /> Resume
        </a>
      </div>
    </div>
  </footer>
);
