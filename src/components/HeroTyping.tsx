"use client";

import { useEffect, useState } from "react";

const lines = [
  "Turn Imperfect Data Into Grounded Decisions.",
  "Deploy Legal AI With Citation-Backed Logic.",
  "Detect Market Regimes In Noisy Environments.",
  "Expose Complexity Through Intuitive Interfaces.",
  "Automate Workflows Where Correctness Is Critical.",
  "Bridge The Gap Between Models And Shipped Products.",
];

const TYPING_SPEED = 55;
const DELETING_SPEED = 30;
const HOLD_AFTER_TYPE = 1800;
const HOLD_AFTER_DELETE = 400;

export default function HeroTyping() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [mode, setMode] = useState<"typing" | "holding" | "deleting">("typing");

  useEffect(() => {
    const fullLine = lines[lineIndex];
    let timeout: NodeJS.Timeout;

    if (mode === "typing") {
      if (text.length < fullLine.length) {
        timeout = setTimeout(() => {
          setText(fullLine.slice(0, text.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setMode("holding");
        }, HOLD_AFTER_TYPE);
      }
    }

    if (mode === "holding") {
      timeout = setTimeout(() => {
        setMode("deleting");
      }, HOLD_AFTER_TYPE);
    }

    if (mode === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(fullLine.slice(0, text.length - 1));
        }, DELETING_SPEED);
      } else {
        timeout = setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % lines.length);
          setMode("typing");
        }, HOLD_AFTER_DELETE);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, mode, lineIndex]);

  return (
    <div className="min-h-[1.6em] flex items-center justify-center">
      <p className="text-xl lg:text-2xl font-normal text-foreground-muted tracking-tight">
        {text}
        <span className="cursor">|</span>
      </p>

      <style jsx>{`
        .cursor {
          margin-left: 4px;
          animation: blink 1.2s steps(1) infinite;
          color: var(--accent);
        }

        @keyframes blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
