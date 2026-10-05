"use client";
import { useEffect, useState } from "react";

const links = ["about", "skills", "projects", "education", "contact"];

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-stone-50/80 backdrop-blur dark:border-stone-800 dark:bg-stone-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#" className="font-display text-xl font-extrabold text-orange-500">Dip.</a>

        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} className="capitalize transition hover:text-orange-500">{l}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="rounded-lg border-2 border-stone-300 px-3 py-1 text-sm font-semibold transition hover:border-orange-500 dark:border-stone-700">
            {dark ? "Light mode" : "Dark mode"}
          </button>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="rounded-lg border-2 border-stone-300 px-3 py-1 text-sm font-semibold md:hidden dark:border-stone-700">
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-stone-200 px-5 py-3 md:hidden dark:border-stone-800">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l}`} onClick={() => setOpen(false)} className="block py-2 capitalize">{l}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
