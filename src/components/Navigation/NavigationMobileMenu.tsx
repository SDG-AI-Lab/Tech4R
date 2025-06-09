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
      {/* Mobile menu button */}
      <button 
        onClick={toggleMenu}
        className="text-white hover:opacity-70 p-2 transition-opacity"
        aria-label="Toggle mobile menu"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {/* Blur Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 top-28 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Navigation Menu */}
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