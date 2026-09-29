// Runs inline in <head> before first paint, so a dark-mode visitor never sees
// a white flash. It lives here rather than beside ThemeToggle because anything
// exported from a 'use client' file reaches server code as a reference, not a
// string. Kept tiny and self-contained: it runs before React exists.
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;
