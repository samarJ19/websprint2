import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhotoViewer from "../components/ui/photoViewer";
import { useTheme } from "../context/theme-context";

export default function MainGallery() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const {
    images = [],
    title = "Shooting Spaces",
    para = "Placeholder paragraph",
  } = location.state || {};

  const [isVisible, setIsVisible] = useState({
    header: false,
  });

  const [imageVisibility, setImageVisibility] = useState({});
  const [columns, setColumns] = useState(3);
  const [imageInfo, setImageInfo] = useState([]);

  // Photo viewer state
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const refs = {
    header: useRef(),
  };

  const imageRefs = useRef([]);

  useEffect(() => {
    // If no images were passed, redirect back to gallery home
    if (images.length === 0) {
      navigate("/gallery");
      return;
    }

    // Preload images to get their natural dimensions
    const preloadImages = async () => {
      const imageDetails = await Promise.all(
        images.map((src, index) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              // Use natural aspect ratio of the image itself
              resolve({
                url: src,
                index,
                aspectRatio: img.naturalWidth / img.naturalHeight,
              });
            };
            img.onerror = () => {
              // Default aspect ratio if image fails to load
              resolve({
                url: src,
                index,
                aspectRatio: 4 / 3,
              });
            };
            img.src = src;
          });
        })
      );

      setImageInfo(imageDetails);
    };

    preloadImages();

    // Initialize image visibility state
    const initialImageVisibility = {};
    images.forEach((_, index) => {
      initialImageVisibility[`image${index}`] = false;
    });
    setImageVisibility(initialImageVisibility);

    // Set up intersection observers
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observers = [];

    // Observer for header
    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, header: true }));
          headerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (refs.header.current) {
      headerObserver.observe(refs.header.current);
      observers.push(headerObserver);
    }

    // Update columns based on screen width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Immediately show header
    setIsVisible((prev) => ({ ...prev, header: true }));

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("resize", handleResize);
    };
  }, [images, navigate]);

  // Set up observers for images when imageInfo is ready
  useEffect(() => {
    if (imageInfo.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observers = [];

    // Observers for images
    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageVisibility((prev) => ({
              ...prev,
              [`image${index}`]: true,
            }));
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [imageInfo]);

  // Handle image click to open viewer
  const handleImageClick = async (index) => {
    setSelectedImageIndex(index);
    setViewerOpen(true);
  };

  // Distribute images into columns using their actual aspect ratios
  const distributeImages = () => {
    if (imageInfo.length === 0) {
      return Array.from({ length: columns }, () => []);
    }

    const columnArrays = Array.from({ length: columns }, () => []);

    // Calculate column heights in terms of aspect ratio sum
    const columnHeights = Array(columns).fill(0);

    // Distribute images to maintain balanced columns
    imageInfo.forEach((image) => {
      // Find column with minimum height
      const minHeightColumnIndex = columnHeights.indexOf(
        Math.min(...columnHeights)
      );

      // Add image to that column
      columnArrays[minHeightColumnIndex].push(image);

      // Update the column height (add the inverse of aspect ratio to simulate height)
      columnHeights[minHeightColumnIndex] += 1 / image.aspectRatio;
    });

    return columnArrays;
  };

  const imageColumns = distributeImages();

  return (
    <>
      <div
        className={`max-w-6xl mx-auto px-4 py-20 ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        } transition-colors duration-300`}
      >
        <div
          ref={refs.header}
          className={`text-center mb-16 transition-opacity duration-1000 ease-in ${
            isVisible.header ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1
            className={`text-4xl font-medium mb-2 inline-block relative ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400"></div>
          </h1>
          <p
            className={`mt-6 text-center max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {para}
          </p>
        </div>

        {/* Gallery grid with natural image dimensions */}
        <div className="flex flex-wrap -mx-2">
          {imageColumns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className="px-2 w-full sm:w-1/2 lg:w-1/3"
            >
              <div className="flex flex-col space-y-4">
                {column.map((image) => {
                  const delay = image.index * 70 + 200;
                  return (
                    <div
                      key={image.index}
                      ref={(el) => (imageRefs.current[image.index] = el)}
                      className={`w-full overflow-hidden rounded-lg shadow-md transition-all duration-1000 ease-in cursor-pointer ${
                        isDarkMode ? "shadow-gray-700" : "shadow-gray-300"
                      }`}
                      style={{
                        opacity: imageVisibility[`image${image.index}`] ? 1 : 0,
                        transform: imageVisibility[`image${image.index}`]
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transitionDelay: `${delay}ms`,
                        backgroundColor: isDarkMode ? "#2d3748" : "#f5f5f5",
                      }}
                      onClick={() => handleImageClick(image.index)}
                    >
                      <div
                        className="relative w-full"
                        style={{
                          paddingBottom: `${(1 / image.aspectRatio) * 100}%`, // Use actual image aspect ratio
                        }}
                      >
                        <img
                          src={image.url}
                          alt={`Gallery image ${image.index + 1}`}
                          className="absolute inset-0 h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate("/galleryhome")}
            className={`px-6 py-2 ${
              isDarkMode
                ? "bg-yellow-500 text-gray-900 hover:bg-yellow-600"
                : "bg-yellow-400 text-black hover:bg-yellow-500"
            } font-medium rounded transition`}
          >
            Back to Gallery
          </button>
        </div>
      </div>
      {/* Photo Viewer */}
      <PhotoViewer
        images={images}
        initialIndex={selectedImageIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        isDarkMode={isDarkMode}
      />
    </>
  );
}
