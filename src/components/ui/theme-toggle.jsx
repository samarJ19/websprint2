import React from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from '../../context/theme-context';

export function ThemeToggle() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <button 
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
