'use client'

import { useState, useEffect } from "react"
import { Database, Brain, Lightbulb, LineChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function HowItWorksComponent() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const steps = [
    {
      number: 1,
      title: "Data Collection",
      description: "Integrate with your existing systems or use our IoT sensors to collect emissions data.",
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 2,
      title: "Analysis",
      description: "Our AI algorithms process and analyze your data to provide actionable insights.",
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      number: 3,
      title: "Strategize",
      description: "Develop data-driven strategies to reduce emissions and improve efficiency.",
      icon: Lightbulb,
      color: "from-teal-500 to-cyan-500"
    },
    {
      number: 4,
      title: "Implement & Monitor",
      description: "Put your plans into action and track progress in real-time.",
      icon: LineChart,
      color: "from-cyan-500 to-blue-500"
    }
  ]

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-down">How Carbon Infinity Works</h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={step.number}
              className={`transform transition-all duration-500 ease-in-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Card
                className="relative overflow-hidden cursor-pointer group hover:shadow-lg transition-shadow duration-300"
                onMouseEnter={() => setActiveStep(index)}
              >
                <CardContent className="p-6">
                  <div 
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r opacity-75 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${step.color})`
                    }}
                  />
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center text-white
                      bg-gradient-to-br ${step.color} transform group-hover:scale-110 transition-transform duration-300
                    `}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="font-semibold text-xl group-hover:text-green-600 transition-colors duration-300">{step.title}</div>
                  </div>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {step.description}
                  </p>
                  <div className={`
                    absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transform scale-x-0 
                    group-hover:scale-x-100 transition-transform duration-500 ${step.color}
                  `} />
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>
      <div className="mt-12 flex justify-center gap-2">
        {steps.map((_, index) => (
          <button
            key={index}
            className={`
              w-3 h-3 rounded-full cursor-pointer transition-all duration-300
              ${activeStep === index ? 'bg-green-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'}
            `}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </div>
    </div>
  )
} 