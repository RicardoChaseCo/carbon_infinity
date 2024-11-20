'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-20 dark:opacity-10"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(34, 197, 94)" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M ${-200 + i * 50} ${800 - i * 50} C ${400 + i * 50} ${600 - i * 50}, ${600 + i * 50} ${400 - i * 50}, ${1200 + i * 50} ${200 - i * 50}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            className="animate-wave"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function CarbonHero() {
  const companies = [
    { image: "/placeholder.svg", initials: "GE" },
    { image: "/placeholder.svg", initials: "SP" },
    { image: "/placeholder.svg", initials: "BP" },
    { image: "/placeholder.svg", initials: "SH" },
    { image: "/placeholder.svg", initials: "TE" },
  ]

  return (
    <div className="relative min-h-[calc(100vh-56px)] py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-green-100 dark:from-green-950 dark:to-gray-900">
        <WaveBackground />
      </div>

      {/* Hero Content */}
      <main className="relative max-w-2xl mx-auto px-4 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-white/70 dark:bg-green-900/70 backdrop-blur-lg rounded-full px-4 py-1 text-sm mb-8"
        >
          <span className="font-medium">EcoAI</span>
          <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-full px-2 py-0.5 text-xs">Beta Access</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-green-900 dark:text-green-50"
        >
          AI-Powered Carbon Management
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-green-700 dark:text-green-200 text-lg mb-12"
        >
          Harness the power of artificial intelligence to revolutionize your organization's approach to carbon reduction and sustainability.
        </motion.p>

        {/* Email Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/70 dark:bg-green-900/70 backdrop-blur-lg rounded-2xl p-3 mb-8"
        >
          <form className="flex flex-col sm:flex-row gap-2">
            <Input
              type="email"
              placeholder="Your work email..."
              className="bg-transparent border-0 focus-visible:ring-0 text-lg placeholder-green-600/50 dark:placeholder-green-300/50"
            />
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:text-green-950 dark:hover:bg-green-400">
              Request Beta Access
            </Button>
          </form>
        </motion.div>

        {/* Companies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-2">
            {companies.map((company, i) => (
              <Avatar key={i} className="border-2 border-white dark:border-green-900">
                <AvatarImage src={company.image} alt="Company" />
                <AvatarFallback className="bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">{company.initials}</AvatarFallback>
              </Avatar>
            ))}
          </div>
          <p className="text-green-700 dark:text-green-200">
            Join <span className="font-semibold">500+</span> companies already reducing their carbon footprint with EcoAI.
          </p>
        </motion.div>
      </main>

      <style jsx global>{`
        @keyframes wave {
          0% {
            transform: translateX(-10px) translateY(10px);
          }
          50% {
            transform: translateX(10px) translateY(-10px);
          }
          100% {
            transform: translateX(-10px) translateY(10px);
          }
        }
        .animate-wave {
          animation: wave 20s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}