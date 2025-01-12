"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CarbonHero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 800], [1, 0]);
  const y = useTransform(scrollY, [0, 800], [0, -200]);

  const backers = [
    { name: "Harvard", logo: "/harvard.png" },
    { name: "Tsinghua", logo: "/tsinghua2.png" },
    { name: "S&P Global", logo: "/sp500.jpg" },
    { name: "Wells Fargo", logo: "/wf.png" },
  ];

  return (
    <motion.div 
      style={{ opacity, y }}
      className="relative pt-14 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-100 dark:opacity-80"
      >
        <source src="/52517-469172773.mp4" type="video/mp4" />
        <source src="/52517-469172773.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-full px-4 py-1 text-sm mb-8 shadow-lg"
        >
          <span className="font-medium text-black dark:text-green-400">Carbon Infinity <span className="font-medium text-black dark:text-green-400">v1.0</span> (Data + AI + Infrastructure)</span>
          <span className="bg-green-300 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full px-2 py-0.5 text-xs font-semibold">
            Beta Access
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r text-white dark:from-green-400 dark:to-teal-300"
        >
          Discovering the Value of Underestimated Planetary Data
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white dark:text-white text-lg sm:text-xl mb-12 max-w-3xl mx-auto"
        >
          Monitoring vital earth activities to expose key earth signals for any use case.
        </motion.p>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-3 sm:p-4 mb-8 sm:mb-16 shadow-md max-w-2xl mx-auto"
        >
          <form className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Input
              type="email"
              placeholder="Your work email..."
              className="bg-transparent focus-visible:ring-green-500 text-base sm:text-lg placeholder-gray-400 dark:placeholder-gray-500 flex-grow dark:text-white"
            />
            <Button
              size="default"
              className="bg-gradient-to-r from-green-600 to-teal-500 text-white hover:from-green-700 hover:to-teal-600 dark:from-green-500 dark:to-teal-400 dark:text-green-950 dark:hover:from-green-400 dark:hover:to-teal-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Request Beta Access
            </Button>
          </form>
        </motion.div>

        {/* Backers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="w-full max-w-2xl mx-auto bg-gray-50/40 dark:bg-gray-800/30 border-none">
            <CardHeader className="text-center py-2 sm:py-6">
              <CardTitle className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-200">
                Backed by Industry Leaders
              </CardTitle>
            </CardHeader>
            <CardContent className="py-1 sm:py-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center items-center gap-2 sm:gap-8 md:gap-12"
              >
                {backers.map((backer, index) => (
                  <motion.div
                    key={backer.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex flex-col items-center space-y-1 sm:space-y-2"
                  >
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full">
                      <Image
                        src={backer.logo}
                        alt={`${backer.name} logo`}
                        layout="fill"
                        objectFit="contain"
                        className="p-1.5 sm:p-2"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-black dark:text-gray-400">
                      {backer.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </motion.div>
  );
}

