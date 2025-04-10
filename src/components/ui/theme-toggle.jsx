import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../context/theme-context';

export function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  return (
    <button
      onClick={toggleDarkMode}
      className={`flex items-center gap-2 px-3 py-2 rounded-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} transition-colors`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <>
          <SunIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Light Mode</span>
        </>
      ) : (
        <>
          <MoonIcon className="h-5 w-5" />
          <span className="text-sm font-medium">Dark Mode</span>
        </>
      )}
    </button>
  );
}