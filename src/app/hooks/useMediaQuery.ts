import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

/** ≥ 768 px (Tailwind `md`) */
export function useIsDesktop() {
  return useMediaQuery('(min-width: 768px)');
}

/** ≥ 640 px (Tailwind `sm`) */
export function useIsTablet() {
  return useMediaQuery('(min-width: 640px)');
}
