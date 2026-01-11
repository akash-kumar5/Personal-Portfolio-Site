"use client";

// import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
function SunIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="5" fill="#FAFAF9" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#FAFAF9">
      <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else if (!stored) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
        setDark(true);
      }
    }
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);

    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="
    relative w-12 h-6 rounded-full
    border border-border
    bg-surface
    transition-colors
    flex items-center
    px-1
  "
    >
      <span
        className={`
      w-4 h-4 rounded-full
      bg-background
      shadow-sm
      flex items-center justify-center
      text-[10px]
      transition-transform
      ${dark ? "translate-x-6" : "translate-x-0"}
    `}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
