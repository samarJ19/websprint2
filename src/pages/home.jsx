import React from 'react';
import { motion } from 'framer-motion';

export function HomePage() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 dark:bg-gray-800 pt-16 px-4"
    >
      <div className="container mx-auto">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Google Developer Groups
        </motion.h1>
        
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
        >
          <p className="text-gray-600 dark:text-gray-300">
            We're built different, so we build different. Our mission is to empower 
            future developers by bringing students passionate about technology together.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
