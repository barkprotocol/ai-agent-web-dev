'use client';

import { useEffect, useState, useCallback } from 'react';

export function useMediaQuery(query: string): boolean {
  const getMatches = useCallback((query: string): boolean => {
    // Prevent a hydration mismatch by checking if window is defined
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const handleChange = () => setMatches(getMatches(query));

    const matchMedia = window.matchMedia(query);
    // Set the initial value
    handleChange();

    // Listen for subsequent changes
    matchMedia.addEventListener('change', handleChange);

    // Clean up the listener on component unmount
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query, getMatches]);

  return matches;
}

