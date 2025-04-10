import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function PhotoViewer({ 
  images = [], 
  initialIndex, 
  onClose = () => {},
  isOpen = false
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  const goToNext = () => {
    console.log('Close button clicked');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  // Handle keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    setCurrentIndex(initialIndex)
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        goToNext();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        goToPrevious();
      } else if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling while viewer is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, images.length, onClose]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white p-2 z-10 hover:bg-gray-800 rounded-full"
        aria-label="Close viewer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous button */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-1 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full transition"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Next button */}
      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-1 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full transition"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center p-4 md:p-8 overflow-hidden">
        <img 
          src={images[currentIndex]} 
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-h-full max-w-full object-contain select-none"
        />
      </div>
      
      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>,
    document.body
  );
}