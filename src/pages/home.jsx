import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CommunityStats from "../components/ui/circles";
import { useTheme } from "../context/theme-context";
import Typed from "typed.js";
import { ArrowBottomRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";
import { ArrowBigRight, ArrowLeftRight, ArrowRight } from "lucide-react";

export function HomePage() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Developer's Student Club IET-DAVV, Indore",
        "Place for Innovation",
        "We Develop Communities",
        "We Build Together",
        "We Grow Together",
      ],
      typeSpeed: 50,
      loop: true,
      loopCount: Infinity,
      cursorChar: "_",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  // Use the theme context instead of local state
  const { isDarkMode, toggleDarkMode } = useTheme();

  // Dynamic styles based on dark mode from context
  const pageStyle = isDarkMode
    ? "min-h-screen bg-gray-900 text-white transition-colors duration-300"
    : "min-h-screen bg-white text-gray-800 transition-colors duration-300";

  const navStyle = isDarkMode
    ? "sticky top-0 z-10 bg-gray-800 text-white shadow-md transition-colors duration-300"
    : "sticky top-0 z-10 bg-white text-gray-800 shadow-md transition-colors duration-300";

  const cardStyle = isDarkMode
    ? "p-4  text-white rounded-lg transition-colors duration-300"
    : "p-4 bg-white text-gray-800 rounded-lg transition-colors duration-300";

  const sectionStyle = isDarkMode
    ? "py-16 border-t border-gray-800 transition-colors duration-300"
    : "py-16 border-t border-gray-200 transition-colors duration-300";

  return (
    <div className={pageStyle}>
      {/* Hero section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="px-4 py-16"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 max-w-6xl">
          <div className="w-full md:w-3/5">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <img
                src="https://pngimg.com/d/google_PNG19644.png"
                className="w-40 h-auto mb-6"
                alt="Google Logo"
              />
              <h1
                className={`text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 transition-colors duration-300 ${
                  isDarkMode ? "text-white" : "text-gray-800"
                }`}
              >
                {" "}
                <span ref={el} />{" "}
              </h1>

              <p
                className={`text-base md:text-lg text-center max-w-2xl mb-10 leading-relaxed transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                GDSC IET DAVV is a part of dynamic community where students from
                various backgrounds come together to explore the latest in
                technology, learn about Google's tools and platforms, and
                collaborate on innovative projects. GDSC is a place to grow as a
                developer, starting from a beginner developer to an advanced
                developer. It's not always about "programming" but also about
                connecting, learning together and growing together.
              </p>
            </motion.div>
          </div>

          <div className="w-full md:w-2/5">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className={`${cardStyle} p-8`}
            >
              <CommunityStats />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* "We Develop Communities" section with image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className={sectionStyle}
      >
        <div className="container mx-auto text-2xl px-4 max-w-6xl">
          <div className="mb-12">
            <h3 className="text-xl mb-2">
              At{" "}
              <span className="font-medium">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>{" "}
              Student Developer Club IET-DAVV
            </h3>
            <h2
              className={`text-4xl  font-semibold mb-12 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              We Develop Communities
            </h2>
          </div>

          <div className="mb-16 flex justify-center">
            <img
              src="https://gdsc.ietdavv.edu.in/_next/image?url=%2Ffelicitation-group-crop.jpg&w=1080&q=75"
              alt="GDSC Community"
              className="w-full md:w-4/5 lg:w-250 rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-6 md:px-12 mb-12">
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Mission
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-lg leading-relaxed`}
              >
                We're built different, so we build different. Our mission is to
                empower future developers by bringing students passionate about
                technology together and helping them grow their skills in tech,
                regardless of background.
              </p>
            </div>

            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Values
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-lg leading-relaxed`}
              >
                We believe you don't need to code to be a developer. We develop
                both products and people by making Google technologies
                accessible to everyone through workshops, events, and more.
                Dreamers, problem solvers, and tinkerers: That's who we are.
              </p>
            </div>
            
          </div>
          <div className="flex justify-center container max-w-6xl">
            <div className="w-full md:w-3/5 mx-4">
            <h3
                className={`text-2xl font-bold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our Events
              </h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } text-lg leading-relaxed`}
              >
                Immerse yourself in the future of technology at our cutting-edge
                events, where ideas become reality and innovation flourishes.
                Here, you'll discover workshops, resources, and networking
                opportunities designed to propel your career in the tech field.
              </p>
            </div>
              <div className="mt-16 mx-4 ">
                <div className="flex bg-[#4285F4] rounded-3xl px-4 py-0.5 w-100 h-10 cursor-pointer rounded-full hover:bg-blue-400 ">
                  <div className={`text-lg font-semibold pt-1 ${isDarkMode?"text-black":"text-white"}`}>JOIN US FOR OUR UPCOMING EVENTS</div> 
                <span><ArrowRight className={`relative top-2 mx-2 ${isDarkMode?"text-black":"text-white"}`}/></span>
                </div>
              </div>
            </div>
        </div>
      </motion.section>
    </div>
  );
}
