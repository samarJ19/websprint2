import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/theme-context";

export function DomainsSection() {
  const { isDarkMode } = useTheme();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <img
          src="https://pngimg.com/d/google_PNG19644.png"
          alt="GDSC Logo"
          className="w-36 h-16 mr-4"
        />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-5xl font-semibold ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Domains
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`text-center mb-16 text-lg max-w-4xl mx-auto ${
          isDarkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        We're built different, so we build different. Our mission is to empower
        future developers by bringing students passionate about technology
        together and helping them grow their skills in tech, regardless of
        background.
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 "
      >
        {/* Web Development Domain Card */}
        <motion.div
          variants={itemVariants}
          className={`border transition-transform duration-300 ease hover:scale-110 hover:bg-cyan-500 hover:shadow-cyan-500/150 hover:text-white group rounded-lg p-8 flex flex-col items-center text-center ${
            isDarkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="mb-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="80"
                fill={isDarkMode ? "#1F2937" : "white"}
                className="group-hover:fill-cyan-500"
              />
              <path
                d="M46 28H34C31.8 28 30 29.8 30 32V48C30 50.2 31.8 52 34 52H46C48.2 52 50 50.2 50 48V32C50 29.8 48.2 28 46 28ZM48 48C48 49.1 47.1 50 46 50H34C32.9 50 32 49.1 32 48V32C32 30.9 32.9 30 34 30H46C47.1 30 48 30.9 48 32V48Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 36H44V38H36V36Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 40H44V42H36V40Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 44H44V46H36V44Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M50 40C52.2 40 54 41.8 54 44C54 46.2 52.2 48 50 48V50C53.3 50 56 47.3 56 44C56 40.7 53.3 38 50 38V40Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
            </svg>
          </div>
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            } group-hover:text-white`}
          >
            Web Development
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } group-hover:text-white`}
          >
            Bridging the gap between vision and reality, web development
            includes translating creative concepts into dynamic online
            experiences in the form of websites, driving user engagement and
            shaping the digital landscape.
          </p>
        </motion.div>

        {/* Competitive Programming Domain Card */}
        <motion.div
          variants={itemVariants}
          className={`border transition-transform duration-300 ease hover:scale-110 hover:bg-red-500 hover:shadow-cyan-500/150 hover:text-white group rounded-lg p-8 flex flex-col items-center text-center ${
            isDarkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="mb-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="80"
                fill={isDarkMode ? "#1F2937" : "white"}
                className="group-hover:fill-red-500"
              />
              <path
                d="M46 28H34C31.8 28 30 29.8 30 32V48C30 50.2 31.8 52 34 52H46C48.2 52 50 50.2 50 48V32C50 29.8 48.2 28 46 28ZM48 48C48 49.1 47.1 50 46 50H34C32.9 50 32 49.1 32 48V32C32 30.9 32.9 30 34 30H46C47.1 30 48 30.9 48 32V48Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 36H44V38H36V36Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 40H44V42H36V40Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 44H44V46H36V44Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M50 40C52.2 40 54 41.8 54 44C54 46.2 52.2 48 50 48V50C53.3 50 56 47.3 56 44C56 40.7 53.3 38 50 38V40Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
            </svg>
          </div>
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            } group-hover:text-white`}
          >
            Competitive Programming
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } group-hover:text-white`}
          >
            Hone your logic and algorithm design skills in the arena of
            competitive programming! This intense challenge aims to push the
            boundaries of software development, shaping the future of efficient
            and robust code.
          </p>
        </motion.div>

        {/* Cloud Development Domain Card */}
        <motion.div
          variants={itemVariants}
          className={`border transition-transform duration-300 ease hover:scale-110 hover:bg-yellow-300 hover:shadow-cyan-500/150 hover:text-white group rounded-lg p-8 flex flex-col items-center text-center ${
            isDarkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="mb-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="80"
                fill={isDarkMode ? "#1F2937" : "white"}
                className="group-hover:fill-yellow-300"
              />
              <path
                d="M46 28H34C31.8 28 30 29.8 30 32V48C30 50.2 31.8 52 34 52H46C48.2 52 50 50.2 50 48V32C50 29.8 48.2 28 46 28ZM48 48C48 49.1 47.1 50 46 50H34C32.9 50 32 49.1 32 48V32C32 30.9 32.9 30 34 30H46C47.1 30 48 30.9 48 32V48Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 36H44V38H36V36Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 40H44V42H36V40Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 44H44V46H36V44Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M50 40C52.2 40 54 41.8 54 44C54 46.2 52.2 48 50 48V50C53.3 50 56 47.3 56 44C56 40.7 53.3 38 50 38V40Z"
                className={`${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
            </svg>
          </div>
          <h2
            className={`text-2xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-black"
            } group-hover:text-white`}
          >
            Cloud Development
          </h2>
          <p
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } group-hover:text-white`}
          >
            Embrace the limitless flexibility and scalability of the cloud via
            migrating applications to the vast online network, empowering
            businesses with global reach and agile infrastructure.
          </p>
        </motion.div>

        {/* Machine Learning Domain Card */}
        <motion.div
          variants={itemVariants}
          className={`border transition-transform duration-300 ease hover:scale-110 hover:bg-green-500 hover:shadow-cyan-500/150 hover:text-white group border-gray-200 rounded-lg p-8 flex flex-col items-center text-center ${
            isDarkMode
              ? "border-gray-700 bg-gray-800"
              : "border-gray-200 bg-white"
          }`}
        >
          <div className="mb-6">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="80"
                fill={isDarkMode ? "#1F2937" : "white"}
                className="group-hover:fill-green-500"
              />
              <path
                d="M46 28H34C31.8 28 30 29.8 30 32V48C30 50.2 31.8 52 34 52H46C48.2 52 50 50.2 50 48V32C50 29.8 48.2 28 46 28ZM48 48C48 49.1 47.1 50 46 50H34C32.9 50 32 49.1 32 48V32C32 30.9 32.9 30 34 30H46C47.1 30 48 30.9 48 32V48Z"
                className={`fill-black ${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 36H44V38H36V36Z"
                className={`fill-black ${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 40H44V42H36V40Z"
                className={`fill-black ${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M36 44H44V46H36V44Z"
                className={`fill-black ${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
              <path
                d="M50 40C52.2 40 54 41.8 54 44C54 46.2 52.2 48 50 48V50C53.3 50 56 47.3 56 44C56 40.7 53.3 38 50 38V40Z"
                className={`fill-black ${
                  isDarkMode ? "fill-white" : "fill-black"
                } group-hover:fill-white`}
              />
            </svg>
          </div>
          <h2 className={`text-2xl ${
              isDarkMode ? "text-white" : "text-black"
            } text-black group-hover:text-white font-bold mb-4`}>
            Cyber Security
          </h2>
          <p className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } group-hover:text-white`}>
            Bridging the gap between vision and reality, web development
            includes translating creative concepts into dynamic online
            experiences in the form of websites, driving user engagement and
            shaping the digital landscape.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
