"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useAnimationControls, useMotionValue } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Database, LineChart, ArrowRight } from 'lucide-react'

export default function CarbonDataFlowLandingComponent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const controls = useAnimationControls()
  const x = useMotionValue(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const steps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Collection",
      description: "Gathering carbon emissions data from multiple sources",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Processing",
      description: "Clean and normalize environmental data",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Analysis",
      description: "Machine learning models analyze patterns",
    },
    {
      icon: <ArrowRight className="w-8 h-8" />,
      title: "Insights",
      description: "Generate actionable sustainability insights",
    },
  ]

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.scrollWidth / 3)
    }
  }, [])

  const handleHoverStart = () => {
    controls.stop()
  }

  const handleHoverEnd = () => {
    startAnimation()
  }

  const startAnimation = useCallback(() => {
    const currentX = x.get()
    
    controls.start({
      x: [-containerWidth, -containerWidth * 2],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        initialProgress: Math.abs(currentX / containerWidth)
      },
    })
  }, [containerWidth, controls, x])

  useEffect(() => {
    if (containerWidth > 0) {
      controls.start({
        x: [-containerWidth, -containerWidth * 2],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      })
    }
  }, [containerWidth, controls])

  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-8">
          <h2 className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
            Carbon Data Processing
          </h2>
          <h3 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            AI-Powered Carbon Analytics
          </h3>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Advanced processing pipeline that transforms raw carbon data into actionable insights using cutting-edge AI
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative max-w-[1200px] w-full" onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}>
            <motion.div
              ref={containerRef}
              className="flex space-x-8 py-8"
              animate={controls}
              style={{ x }}
            >
              {[...steps, ...steps, ...steps].map((step, index) => (
                <Card
                  key={index}
                  className="relative flex flex-col items-center p-6 min-w-[300px] space-y-4 bg-card hover:shadow-lg transition-shadow"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {step.icon}
                  </div>
                  <h4 className={`text-xl font-semibold transition-colors duration-200 ${hoveredIndex === index ? 'text-green-500' : ''}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-center">
                    {step.description}
                  </p>
                  <motion.div
                    className="absolute -z-10 inset-0 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button variant="default">View Details</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </div>
  )
}