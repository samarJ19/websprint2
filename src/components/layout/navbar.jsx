import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ui/theme-toggle';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md">
      <div className="container mx-auto flex justify-around items-center p-4">
        <div className='flex items-center space-x-2'>
          <img src="https://gdgpatna.com/assets/gdgpatna.ccde6dd3.png" alt="#" className='w-10 h-6 ' />
          <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
          GDG IET-DAVV
        </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="nav-link">Events</Link>
          <Link to="/domains" className="nav-link">Gallery</Link>
          <Link to="/events" className="nav-link">Team</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <ThemeToggle />
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-white"></div>
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-white"></div>
            <div className="w-6 h-0.5 bg-gray-600 dark:bg-white"></div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg p-6"
            >
              <button 
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <div className="flex flex-col space-y-4 mt-12">
                <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/domains" className="nav-link" onClick={() => setIsOpen(false)}>Domains</Link>
                <Link to="/events" className="nav-link" onClick={() => setIsOpen(false)}>Events</Link>
                <ThemeToggle />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
