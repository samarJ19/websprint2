import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/theme-context";

const folderTitles = {
  cloudparty: "Cloud Party",
  felicitation: "Felicitation Ceremony",
  techunleash: "Tech Unleash",
  "ui-uxWorkshop": "UI/UX Workshop",
};

export function GalleryHome() {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const loadGalleryData = async () => {
      try {
        const thumbnailModules = import.meta.glob("../../public/*.jpg", {
          eager: true,
        });
        const cloudpartyImages = import.meta.glob("../util/cloudparty/*.*", {
          eager: true,
        });
        const felicitationImages = import.meta.glob(
          "../util/felicitation/*.*",
          { eager: true }
        );
        const techunleashImages = import.meta.glob("../util/techunleash/*.*", {
          eager: true,
        });
        const uiuxImages = import.meta.glob("../util/ui-uxWorkshop/*.*", {
          eager: true,
        });

        const extractSortedImageUrls = (moduleObj) => {
          return Object.entries(moduleObj)
            .filter(([path]) => path.toLowerCase().endsWith(".jpg"))
            .sort(([pathA], [pathB]) => {
              const numA = parseInt(pathA.match(/(\d+)\.[^.]+$/i)?.[1] || "0");
              const numB = parseInt(pathB.match(/(\d+)\.[^.]+$/i)?.[1] || "0");
              return numA - numB;
            })
            .map(([_, module]) => module.default || module);
        };

        const findThumbnail = (name) => {
          const key = Object.keys(thumbnailModules).find((path) =>
            path.toLowerCase().includes(name.toLowerCase())
          );
          return key
            ? thumbnailModules[key].default || thumbnailModules[key]
            : null;
        };

        const mockData = [
          {
            folder: "cloudparty",
            thumbnail: findThumbnail("cloudparty"),
            images: extractSortedImageUrls(cloudpartyImages),
            para: "A dynamic event hosted by the Google Developer Group at the Institute of Engineering and Technology, Indore, focused on cloud technologies, offering hands-on sessions, expert talks, and networking opportunities for tech enthusiasts.",
          },
          {
            folder: "felicitation",
            thumbnail: findThumbnail("felicitation"),
            images: extractSortedImageUrls(felicitationImages),
            para: " A ceremony to recognize and honor the achievements of students, faculty, and distinguished guests at the Institute of Engineering and Technology, Indore, celebrating academic and extracurricular excellence.",
          },
          {
            folder: "techunleash",
            thumbnail: findThumbnail("tech"),
            images: extractSortedImageUrls(techunleashImages),
            para: "An innovative tech conference organized by the Google Developer Group at the Institute of Engineering and Technology, Indore, featuring talks, workshops, and demonstrations on the latest trends in technology, software development, and entrepreneurship.",
          },
          {
            folder: "ui-uxWorkshop",
            thumbnail: findThumbnail("uiuxworkshop"),
            images: extractSortedImageUrls(uiuxImages),
            para: "A hands-on workshop organized by the Google Developer Group at the Institute of Engineering and Technology, Indore, aimed at enhancing the skills of participants in designing intuitive and user-friendly interfaces, with guidance from industry experts.",
          },
        ];

        setGalleryData(mockData);
      } catch (error) {
        console.error("Error loading gallery data:", error);
      }
    };

    loadGalleryData();
  }, []);

  const handleCardClick = (images, title,para) => {
    navigate("/gallery/cards", {
      state: {
        images: images,
        title: title,
        para:para
      },
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`py-20 px-4 mx-auto max-w-6xl ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="flex justify-center items-center mb-8 space-x-4">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="https://pngimg.com/d/google_PNG19644.png"
          alt="GDSC Logo"
          className="w-36 h-16 mr-4"
        />
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Gallery
        </motion.h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {galleryData.map((gallery) => (
          <motion.div
            key={gallery.folder}
            variants={itemVariants}
            className={`border transition-transform duration-300 ease hover:scale-110 cursor-pointer group rounded-lg p-8 flex flex-col items-center text-center ${
              isDarkMode
                ? "border-gray-700 bg-gray-800"
                : "border-gray-200 bg-white"
            }`}
            onClick={() =>
              handleCardClick(gallery.images, folderTitles[gallery.folder],gallery.para)
            }
          >
            <div className="mb-6">
              <img
                src={gallery.thumbnail}
                alt={folderTitles[gallery.folder]}
                className="aspect-square min-w-[60%]"
              />
            </div>
            <h2
              className={`text-2xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {folderTitles[gallery.folder]}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
