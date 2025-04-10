import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/theme-context';



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme(); // Get the theme state

  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} z-50 shadow-md`}>
      <div className="container mx-auto flex justify-around items-center p-4">
        <div className='flex items-center space-x-2'>
          <img src="https://gdgpatna.com/assets/gdgpatna.ccde6dd3.png" alt="GDG Logo" className='w-10 h-6' />
          <Link to="/" className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            GDG IET-DAVV
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <a href="https://websprintadmin.vercel.app/" referrerPolicy='no-referrer' rel='noopener' className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} >Login</a>
          <Link to="/events" className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Events</Link>
          <Link to="/domains" className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Domains</Link>
          <Link to="/galleryhome" className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`}>Gallery</Link>
          <ThemeToggle />
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-600'}`}></div>
            <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-600'}`}></div>
            <div className={`w-6 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-gray-600'}`}></div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className={`fixed top-0 right-0 w-64 h-full ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg p-6`}
            >
              <button 
                className={`absolute top-4 right-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                onClick={closeMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
              <div className="flex flex-col space-y-4 mt-12">
                <Link to="/" className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={closeMenu}>Home</Link>
                <Link to="/domains" className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={closeMenu}>Domains</Link>
                <Link to="/events" className={`nav-link ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`} onClick={closeMenu}>Events</Link>
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}