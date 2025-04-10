import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './context/theme-context';
import { Navbar } from './components/layout/navbar';
import { HomePage } from './pages/home';
import Events from './pages/events';
import { DomainsSection } from './pages/domain';
import Footer from './components/layout/footer';
import { GalleryHome } from './pages/galleryHome';
import MainGallery from './pages/mainGallery';

function App() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (

      <Router>
        <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/domains" element={<DomainsSection />} />
            <Route path="/galleryhome" element={<GalleryHome />} />
            <Route path="/gallery/cards" element={<MainGallery />} />
          </Routes>
          <Footer darkMode={isDarkMode} />
        </div>
      </Router>
  );
}

export default App;
