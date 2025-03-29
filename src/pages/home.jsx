import React from "react";
import { motion } from "framer-motion";
import CommunityStats from "../components/ui/circles";

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4"
    >
      <div className="container flex justify-around items-center mx-auto mt-10 mb-10">
        <div className="w-[65%]">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center text-gray-800 mb-8"
          >
            <img
              src="https://pngimg.com/d/google_PNG19644.png"
              className="w-60 h-auto relative left-36 m-2"
              alt="#"
            />
            <h1>Developer's Student Club IET-DAVV, Indore</h1>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold text-center text-black w-[70%] mb-8"
          >
            <p className="text-center">
              GDSC IET DAVV is a part of dynamic community where students from
              various backgrounds come together to explore the latest in
              technology, learn about Google's tools and platforms, and
              collaborate on innovative projects. GDSC is a place to grow as a
              developer, starting from a beginner developer to an advanced
              developer. It's not always about “programming” but also about
              connecting, learning together and growing together.
            </p>
          </motion.p>
        </div>
        <div className="w-[35%]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className=" p-6"
          >
            <CommunityStats />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
