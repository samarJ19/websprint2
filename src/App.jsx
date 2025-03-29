import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/theme-context';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import Events from './pages/events';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
