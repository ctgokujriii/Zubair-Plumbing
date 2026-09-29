'use client';

import { useSyncExternalStore } from 'react';
import { Moon, Sun } from 'lucide-react';

// The theme is the "dark" class on <html>. themeScript (lib/theme.ts)
// sets it before the page paints; this button flips it and remembers the
// choice. Until someone chooses, the site follows the phone's own setting.

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
};
const isDark = () => document.documentElement.classList.contains('dark');

export default function ThemeToggle({ className = '' }: { className?: string }) {
  // The server can't know the visitor's theme, so it renders the light-mode
  // icon and the client corrects it straight after hydration.
  const dark = useSyncExternalStore(subscribe, isDark, () => false);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Private browsing can refuse storage; the switch still works for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className={`p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-slate-700 transition-colors ${className}`}
    >
      {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

