'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Satellite, Database, Brain, BarChart3, Globe2, Building2, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { FeatureCard } from '@/components/feature-card'
import { FlowChart } from '@/components/flow-chart'

export default function Page() {
  return (
    <div className="min-h-screen pt-14 w-full bg-gray-50 dark:bg-black text-gray-900 dark:text-white">

      <section className="py-12 md:py-20 w-full relative">
        {/* Add video background container */}
        <div className="absolute top-0 left-0 w-full h-[94%] overflow-hidden z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover w-full h-full opacity-100 dark:opacity-80"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none'
            }}
          >
            <source src="/83628-585600443.mp4" type="video/mp4" />
            <source src="/83628-585600443.webm" type="video/webm" />
          </video>
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Update container to have relative positioning and text colors */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                Satellite Edge Computing for Energy Trading
              </h1>
              <p className="max-w-[600px] text-base md:text-xl text-gray-200">
                Harness the power of satellite clusters and edge computing for instant energy market insights and trading opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto bg-green-100 hover:bg-green-200 text-green-800 dark:bg-bg-black dark:hover:bg-black dark:text-green-100">
                  Explore Platform
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:block pl-0 md:pl-16 mt-8 lg:mt-0"
            >
              <Image
                src="/satellite.jpg"
                alt="cargo ship"
                width={600}
                height={400}
                className="rounded-lg border border-gray-200 dark:border-gray-800 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-black relative z-10">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Revolutionize Your Commodity Trading
            </h2>
            <p className="text-gray-600 dark:text-gray-400 md:text-xl mb-8">
              Our cutting-edge platform predicts commodity prices and supply changes by analyzing high-precision CO₂ emissions data from industrial clusters. Gain a competitive edge with our satellite-powered insights.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <FeatureCard
              icon={Satellite}
              title="Advanced Data Collection"
              description="Leverage high-precision CO₂ emissions data from OCO-2/3 and TROPOMI satellites, combined with NOAA GML and ICOS ground stations for unparalleled market insights."
              className="lg:col-span-2"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">OCO-2/3</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">TROPOMI</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">NOAA GML</span>
              </div>
            </FeatureCard>
            
            <FeatureCard
              icon={Database}
              title="Intelligent Data Processing"
              description="Our advanced Radiation Transfer Models (RTM) correct and refine satellite data, providing you with the most accurate industrial activity indicators at the factory level."
              className="lg:col-span-1"
            >
              <pre className="text-sm text-gray-600 dark:text-gray-400">
                <code>RTM + Ground Calibration → Factory-Level Data</code>
              </pre>
            </FeatureCard>

            <FeatureCard
              icon={Brain}
              title="AI-Powered Predictions"
              description="Harness the power of XGBoost and LSTM models, optimized through Bayesian techniques and AutoML, to forecast production capacity and commodity prices with unprecedented accuracy."
              className="lg:col-span-1"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">XGBoost</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">LSTM</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">AutoML</span>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={BarChart3}
              title="Robust Model Validation"
              description="Trust in our predictions with comprehensive validation against industry statistics and advanced interpretability tools like SHAP and LIME."
              className="lg:col-span-2"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">SHAP</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800 dark:bg-green-900 dark:text-green-200">LIME</span>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Globe2}
              title="Global Market Coverage"
              description="Stay ahead with our worldwide monitoring of industrial clusters and regular model updates adapting to market changes."
              className="lg:col-span-2"
            >
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-6 rounded bg-green-100 dark:bg-green-900"
                  />
                ))}
              </div>
            </FeatureCard>

            <FeatureCard
              icon={Building2}
              title="Tailored Industry Solutions"
              description="Access customized data feeds and APIs designed specifically for hedge funds and energy trading companies, with quarterly and monthly updates of capacity and price prediction data."
              className="lg:col-span-1"
            >
              <pre className="text-sm text-gray-600 dark:text-gray-400">
                <code>REST API + Real-time WebSocket feeds</code>
              </pre>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Data Pipeline Section */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-8 text-center">Our Advanced Data Pipeline</h2>
          <FeatureCard
            icon={Workflow}
            title="End-to-End Processing"
            description="From satellite data acquisition to ML model deployment, our pipeline ensures the highest quality insights for your trading decisions."
            className="w-full"
          >
            <pre className="text-sm text-gray-600 dark:text-gray-400">
              <code>{`Satellite Data → RTM Processing
→ Feature Extraction → ML Training
→ Validation → Deployment`}</code>
            </pre>
          </FeatureCard>
          
          <div className="mt-12">
            <FlowChart />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter mb-4">
              Ready to Transform Your Trading Strategy?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8">
              Join the future of commodity trading with our innovative satellite-powered analytics platform.
            </p>
            <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white dark:bg-green-400 dark:hover:bg-green-500 dark:text-black">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

