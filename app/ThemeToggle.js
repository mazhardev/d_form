"use client";

import { useEffect, useState } from "react";

// Light/dark toggle. The <head> script in layout.js sets the theme before
// paint (no flash); this button lets the viewer switch and remembers it.
export default function ThemeToggle() {
  const [theme, setTheme] = useState(null); // "light" | "dark" | null (follow device)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let saved = null;
    try {
      saved = localStorage.getItem("md-theme");
    } catch {}
    setTheme(saved === "light" || saved === "dark" ? saved : null);
  }, []);

  const systemDark =
    mounted && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const current = theme ?? (systemDark ? "dark" : "light");
  // Before mount, render the same thing the server did (light) to avoid a mismatch.
  const showDark = mounted && current === "dark";

  const toggle = () => {
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("md-theme", next);
    } catch {}
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={showDark ? "Switch to light theme" : "Switch to dark theme"}
      title={showDark ? "Light theme" : "Dark theme"}
    >
      {showDark ? (
        // Sun
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12H5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
        </svg>
      ) : (
        // Moon
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a7 7 0 1 0 10.5 10.5z" />
        </svg>
      )}
    </button>
  );
}
