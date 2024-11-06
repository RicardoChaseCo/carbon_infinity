'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Server, Cpu, Brain, AppWindow, ChevronRight } from 'lucide-react'

const stages = [
  { id: 'sources', name: 'Data Sources', icon: Database, gradient: 'from-green-200 to-green-400', description: 'Collect data from various sources including satellite imagery, IoT sensors, and industrial reports.' },
  { id: 'collection', name: 'Data Collection', icon: Server, gradient: 'from-green-300 to-green-500', description: 'Aggregate and store collected data in our secure cloud infrastructure.' },
  { id: 'processing', name: 'Data Processing', icon: Cpu, gradient: 'from-green-400 to-green-600', description: 'Clean, normalize, and prepare data for analysis using advanced algorithms.' },
  { id: 'ai', name: 'Carbon AI Model', icon: Brain, gradient: 'from-green-500 to-green-700', description: 'Apply machine learning models to predict and analyze carbon emissions.' },
  { id: 'applications', name: 'Applications', icon: AppWindow, gradient: 'from-green-600 to-green-800', description: 'Deliver insights through user-friendly dashboards and reports.' },
]

export default function CarbonDataFlowLandingComponent() {
  const [activeStage, setActiveStage] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isAutoPlay) {
      timer = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % stages.length)
      }, 5000)
    }
    return () => clearInterval(timer)
  }, [isAutoPlay])

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          Carbon Data Processing & AI Flow
        </h2>
        <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
          Discover how our cutting-edge technology transforms raw data into actionable insights for a greener future.
        </p>
        <Card className="p-6 md:p-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl">
          <div className="relative mb-8">
            <svg className="w-full" viewBox="0 0 800 120">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#22c55e" />
                </marker>
              </defs>
              <line x1="50" y1="60" x2="750" y2="60" stroke="#22c55e" strokeWidth="2" strokeDasharray="5,5" markerEnd="url(#arrowhead)" />
              {stages.map((stage, index) => (
                <g key={stage.id}>
                  <circle 
                    cx={50 + index * 175} 
                    cy="60" 
                    r="30" 
                    className={`fill-current ${stage.gradient} opacity-20`} 
                  />
                  <motion.foreignObject
                    x={50 + index * 175 - 25}
                    y={60 - 25}
                    width="50"
                    height="50"
                    initial={{ scale: 1 }}
                    animate={{ scale: activeStage === index ? 1.2 : 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${stage.gradient} rounded-full shadow-lg`}>
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.foreignObject>
                </g>
              ))}
            </svg>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mb-8">
            {stages.map((stage, index) => (
              <Button
                key={stage.id}
                variant={activeStage === index ? "default" : "outline"}
                className={`flex items-center justify-center p-2 ${activeStage === index ? 'ring-2 ring-green-500 ring-offset-2' : ''}`}
                onClick={() => {
                  setActiveStage(index)
                  setIsAutoPlay(false)
                }}
              >
                <stage.icon className="w-4 h-4 mr-2" />
                <span className="text-xs md:text-sm">{stage.name}</span>
              </Button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-8"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
                {stages[activeStage].name}
              </h3>
              <p className="text-green-600 dark:text-green-400">
                {stages[activeStage].description}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center">
            <Button 
              variant="outline"
              className="flex items-center"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
            >
              {isAutoPlay ? 'Pause' : 'Auto Play'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            Learn More About Our Technology
          </Button>
        </div>
      </div>
    </section>
  )
}