"use client";

import Link from "next/link";
import DarkModeToggle from "@/components/theme/DarkModeToggle";
import AvatarDropDownMenu from "./AvatarDropDownMenu";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400">
              <span className="hover:scale-105 transition-transform duration-200 inline-block">My</span>
              <span className="hover:scale-105 transition-transform duration-200 inline-block">Uni</span>
              <span className="hover:scale-105 transition-transform duration-200 inline-block">Review</span>
            </h1>
          </div>

          {/* Navigation Links - Center on desktop */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href={'/'} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Feed
            </Link>
            <Link 
              href={'/find-uni'} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Find Uni
            </Link>
            <Link 
              href={'/about'} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href={'/blogs'} 
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Blogs
            </Link>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <DarkModeToggle />
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <AvatarDropDownMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;