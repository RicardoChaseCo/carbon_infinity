"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { Database, Brain, Lightbulb, LineChart } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function HowItWorksComponent() {
  const controls = useAnimation()

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start("visible")
    }
    startAnimation()

    return () => {
      controls.stop()
    }
  }, [controls])

  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description: "Integrate with your existing systems or use our IoT sensors to collect emissions data.",
      icon: Database,
      lightGradient: "from-blue-100 via-blue-200 to-blue-300",
      darkGradient: "dark:from-blue-900 dark:via-blue-800 dark:to-blue-700",
      hoverLight: "hover:from-blue-200 hover:via-blue-300 hover:to-blue-400",
      hoverDark: "dark:hover:from-blue-800 dark:hover:via-blue-700 dark:hover:to-blue-600"
    },
    {
      number: 2,
      title: "Analysis",
      description: "Our AI algorithms process and analyze your data to provide actionable insights.",
      icon: Brain,
      lightGradient: "from-yellow-100 via-yellow-200 to-orange-200",
      darkGradient: "dark:from-yellow-900 dark:via-yellow-800 dark:to-orange-800",
      hoverLight: "hover:from-yellow-200 hover:via-yellow-300 hover:to-orange-300",
      hoverDark: "dark:hover:from-yellow-800 dark:hover:via-yellow-700 dark:hover:to-orange-700"
    },
    {
      number: 3,
      title: "Strategize",
      description: "Develop data-driven strategies to reduce emissions and improve efficiency.",
      icon: Lightbulb,
      lightGradient: "from-pink-100 via-purple-200 to-indigo-200",
      darkGradient: "dark:from-pink-900 dark:via-purple-800 dark:to-indigo-800",
      hoverLight: "hover:from-pink-200 hover:via-purple-300 hover:to-indigo-300",
      hoverDark: "dark:hover:from-pink-800 dark:hover:via-purple-700 dark:hover:to-indigo-700"
    },
    {
      number: 4,
      title: "Implement & Monitor",
      description: "Put your plans into action and track progress in real-time.",
      icon: LineChart,
      lightGradient: "from-teal-100 via-teal-200 to-emerald-200",
      darkGradient: "dark:from-teal-900 dark:via-teal-800 dark:to-emerald-800",
      hoverLight: "hover:from-teal-200 hover:via-teal-300 hover:to-emerald-300",
      hoverDark: "dark:hover:from-teal-800 dark:hover:via-teal-700 dark:hover:to-emerald-700"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <div className="relative py-12 px-4 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,1000 C300,800 400,600 500,600 C600,600 700,800 1000,1000"
            fill="none"
            stroke="rgb(22, 163, 74)"
            strokeWidth="1"
            className="animate-wave"
            style={{ animationDelay: "0.2s" }}
          />
          <motion.path
            d="M0,800 C200,1000 300,900 500,800 C700,700 800,900 1000,800"
            fill="none"
            stroke="rgb(22, 163, 74)"
            strokeWidth="1"
            className="animate-wave"
            style={{ animationDelay: "0.2s" }}
          />
          <motion.path
            d="M0,600 C100,500 300,700 500,600 C700,500 900,700 1000,600"
            fill="none"
            stroke="rgb(22, 163, 74)"
            strokeWidth="1"
            className="animate-wave"
            style={{ animationDelay: "0.2s" }}
          />
        </svg>
      </div>

      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-12 text-foreground"
        >
          How Carbon Infinity Works
        </motion.h2>
        
        <motion.div 
          className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card className={cn(
                  "relative h-[400px] overflow-hidden cursor-pointer",
                  "bg-gradient-to-br transition-all duration-500",
                  step.lightGradient,
                  step.darkGradient,
                  step.hoverLight,
                  step.hoverDark
                )}>
                  <motion.div 
                    className="absolute inset-0 bg-background/10 backdrop-blur-[2px]"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  <div className="relative h-full p-6 flex flex-col">
                    <motion.div 
                      className="text-foreground/80 mb-auto"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Icon className="w-8 h-8" />
                    </motion.div>
                    
                    <div className="mt-auto">
                      <motion.h3 
                        className="text-2xl font-semibold text-foreground mb-2"
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p 
                        className="text-foreground/80 text-sm"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}