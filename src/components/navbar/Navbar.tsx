"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "@/components/theme/DarkModeToggle";
import AvatarDropDownMenu from "./AvatarDropDownMenu";
import { useSession } from "next-auth/react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Feed', href: '/feed' },
    { name: 'Find Uni', href: '/find-uni' },
    { name: 'About', href: '/about' },
    { name: 'Blogs', href: '/blogs' },
  ];

  return (
    <nav className={`bg-white dark:bg-zinc-950 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 transition-all duration-300 w-full overflow-x-hidden ${
      scrolled ? 'shadow-md' : ''
    }`}>
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={'/'} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
                <span className="transition-transform duration-200 inline-block hover:scale-105">My</span>
                <span className="transition-transform duration-200 inline-block hover:scale-105">Uni</span>
                <span className="transition-transform duration-200 inline-block hover:scale-105">Review</span>
              </h1>
            </Link>
          </div>

          {/* Navigation Links - Center on desktop, hidden on mobile */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex-shrink-0">
              <DarkModeToggle />
            </div>
            <div className="hidden sm:block border-l border-gray-300 dark:border-zinc-700 h-6"></div>
            <div className="flex items-center">
              {!session ? (
                <Link
                  href={'/login'}
                  className="border p-1 px-2 text-white font-medium bg-indigo-500 hover:bg-indigo-600 rounded-md transition-colors duration-200"
                >
                  Login
                </Link>
              ) : (
                <div className="ml-2">
                  <AvatarDropDownMenu />
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} w-full overflow-hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-slate-700 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;