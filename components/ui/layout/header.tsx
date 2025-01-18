'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/ui/layout/navbar';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-sm shadow-md' : ''
      }`}
    >
      {/* The header is transparent when not scrolled */}
      <div className="max-w-8xl mx-auto">
        <Navbar isScrolled={isScrolled} />
      </div>
    </header>
  );
}

