import React, { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Use a function for initial state to avoid localStorage during SSR
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      // Check if we're in the browser environment
      if (typeof window !== 'undefined' && window.localStorage) {
        const storedTheme = localStorage.getItem('theme');
        
        // First check stored preference
        if (storedTheme) {
          return storedTheme === 'dark';
        }
        
        // Then fall back to system preference
        return window.matchMedia && 
          window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
    return false;
  });

  useEffect(() => {
    try {
      const className = 'dark';
      // Access document only after component mounted
      if (typeof window !== 'undefined' && document) {
        const htmlElement = document.documentElement.classList;
        
        if (isDarkMode) {
          htmlElement.add(className);
        } else {
          htmlElement.remove(className);
        }
        
        // Ensure we store the theme in localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        console.log('Theme updated and saved to localStorage:', isDarkMode ? 'dark' : 'light');
      }
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};