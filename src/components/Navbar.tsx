'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0A192F]/90 backdrop-blur-sm border-b border-[#E2B148]/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-[#E2B148] font-serif font-bold text-xl leading-relaxed"
            >
              Project Zenith
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F6F9F8] hover:text-[#E2B148] focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:block">
            <div className="flex items-center space-x-8">
              <a
                href="/"
                className="text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors leading-relaxed py-2"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors leading-relaxed py-2"
              >
                About Us
              </a>
              <a
                href="/programs"
                className="text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors leading-relaxed py-2"
              >
                Programs
              </a>
              <a
                href="/events"
                className="text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors leading-relaxed py-2"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A192F] border-t border-[#E2B148]/20">
            <a
              href="/"
              className="block px-3 py-2 text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="/programs"
              className="block px-3 py-2 text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="/events"
              className="block px-3 py-2 text-[#F6F9F8] hover:text-[#E2B148] font-serif transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
