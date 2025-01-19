'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '@/components/ui/layout/navbar';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-8xl mx-auto px-0 sm:px-0 lg:px-0">
        <Navbar isScrolled={isScrolled} />
      </div>
    </header>
  );
}

