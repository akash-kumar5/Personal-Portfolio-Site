"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const email = "akash.kumar.devs@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const LinkedinIcon = () => (
    <svg
      className="w-5 h-5 text-foreground-muted"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
        clip-rule="evenodd"
      />
      <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg
      className="w-5 h-5 text-gray-800 text-foreground-muted"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
        clip-rule="evenodd"
      />
    </svg>
  );

  return (
    <main className="min-h-screen bg-background px-6 py-24 flex justify-center">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-20 items-start"
      >
        {/* LEFT — visual anchor (replace div with image later) */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-[260px] h-[340px] bg-surface border border-border rounded-2xl flex items-center justify-center text-foreground-muted">
            Headshot
          </div>
        </div>

        {/* RIGHT — content */}
        <div>
          <h1 className="text-4xl font-semibold mb-6">Contact</h1>

          <p className="text-lg text-foreground-muted leading-relaxed max-w-xl mb-12">
            If you&apos;re working on a system where decisions, constraints, and
            correctness matter, I&apos;m open to thoughtful conversations.
          </p>

          {/* Email */}
          <div className="mb-12">
            <div className="text-sm uppercase tracking-wide text-foreground-muted mb-2">
              Email
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="text-lg font-medium underline underline-offset-4 hover:opacity-80 transition"
              >
                {email}
              </a>

              <button
                onClick={copyEmail}
                className="text-sm px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-surface-soft transition"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          {/* Social cards */}
          <div>
            <div className="text-sm uppercase tracking-wide text-foreground-muted mb-4">
              Elsewhere
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a className="group rounded-xl border border-border bg-surface p-5 hover:bg-surface-soft transition">
                <div className="flex items-center gap-2 mb-1">
                  <LinkedinIcon />

                  <span className="font-medium">LinkedIn</span>
                </div>
                <p className="text-sm text-foreground-muted">
                  Professional profile →
                </p>
              </a>

              <a className="group rounded-xl border border-border bg-surface p-5 hover:bg-surface-soft transition">
                <div className="flex items-center gap-2 mb-1">
                  <GithubIcon />
                  <span className="font-medium">GitHub</span>
                </div>
                <p className="text-sm text-foreground-muted">
                  Code & systems →
                </p>
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
