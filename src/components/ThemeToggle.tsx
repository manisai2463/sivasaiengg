"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full border border-gray-200 dark:border-white/10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-[#111827] dark:hover:bg-[#1f2937] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-all shadow-sm relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
    </button>
  );
}
