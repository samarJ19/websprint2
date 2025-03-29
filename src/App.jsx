import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme-context';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
