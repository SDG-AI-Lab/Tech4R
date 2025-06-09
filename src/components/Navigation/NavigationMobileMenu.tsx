'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigationRoutes } from '@/lib/routes';

export const NavigationMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden relative">
      <button 
        onClick={toggleMenu}
        className="text-white p-2"
        aria-label="Toggle mobile menu"
      >
        <div className="h-5 w-5 relative flex flex-col justify-center items-center">
          <span 
            className={`block h-0.5 w-4 bg-white transition-all duration-300 ease-in-out absolute ${
              isOpen 
                ? 'rotate-45' 
                : '-translate-y-1'
            }`}
          />
          <span 
            className={`block h-0.5 w-4 bg-white transition-all duration-300 ease-in-out absolute ${
              isOpen 
                ? 'opacity-0 scale-0' 
                : 'opacity-100 scale-100'
            }`}
          />
          <span 
            className={`block h-0.5 w-4 bg-white transition-all duration-300 ease-in-out absolute ${
              isOpen 
                ? '-rotate-45' 
                : 'translate-y-1'
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 top-28 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      <div className={`fixed top-28 left-0 right-0 bg-color-02 z-50 transition-all duration-150 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div>
          {navigationRoutes.main.map((item, index) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`px-6 block text-white px-4 py-6 text-lg font-normal active:bg-white/10 transition-colors ${
                index < navigationRoutes.main.length - 1 ? 'border-b border-white/10' : ''
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 