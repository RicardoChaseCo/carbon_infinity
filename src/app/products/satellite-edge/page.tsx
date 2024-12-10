'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Lock, Shield, ShieldCheck, Satellite, Zap, Globe, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className="min-h-screen pt-14 w-full bg-white dark:bg-black text-gray-900 dark:text-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="py-12 md:py-20 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4"
            >
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Real-Time Satellite Edge Computing for Energy Trading
              </h1>
              <p className="max-w-[600px] text-base md:text-xl text-gray-600 dark:text-gray-400">
                Harness the power of satellite clusters and edge computing for instant energy market insights and trading opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-800 dark:hover:bg-green-700 dark:text-green-100">
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
                alt="Satellite Cluster Energy Data Visualization"
                width={600}
                height={400}
                className="rounded-lg border border-gray-200 dark:border-gray-800 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Edge Computing Section */}
      <section className="py-12 md:py-24 bg-gray-50 dark:bg-gray-900 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-6">
            <div className="max-w-[800px] text-center mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Advanced Satellite Cluster Edge Computing
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Our distributed satellite network processes energy data in real-time, providing traders with millisecond-level insights for optimal decision-making.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Real-time Analysis Card */}
              <div className="rounded-lg border border-green-100 dark:border-green-800 bg-white dark:bg-black p-6">
                <div className="h-[140px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md mb-4">
                  <Zap className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Energy Analysis</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Process global energy production and consumption data in real-time for immediate market insights.
                </p>
              </div>

              {/* Satellite Cluster Card */}
              <div className="rounded-lg border border-green-100 dark:border-green-800 bg-white dark:bg-black p-6">
                <div className="h-[140px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md mb-4">
                  <div className="flex items-center gap-4">
                    <Satellite className="h-8 w-8 text-green-500" />
                    <Activity className="h-8 w-8 text-green-500" />
                    <Globe className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Satellite Network</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Leverage our vast network of satellites for comprehensive energy market coverage and analysis.
                </p>
              </div>

              {/* Integration Card */}
              <div className="rounded-lg border border-green-100 dark:border-green-800 bg-white dark:bg-black p-6">
                <div className="h-[140px] flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-md mb-4">
                  <div className="grid grid-cols-4 gap-2">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-12 h-6 rounded bg-green-100 dark:bg-green-800"
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Seamless Integrations</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Connect with major energy trading platforms and exchanges for streamlined operations and execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Documentation Section */}
      <section className="py-12 md:py-24 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-8">
            <div className="max-w-[800px] text-center mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Powerful Satellite Cluster APIs
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
                Access real-time energy data with our intuitive APIs. Designed for both edge computing in space and ground-based trading systems.
              </p>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="border-green-100 dark:border-green-800">
                  Explore documentation
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="rounded-lg border border-green-100 dark:border-green-800 bg-white dark:bg-black p-4 overflow-x-auto">
                <pre className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg overflow-x-auto">
                  <code className="text-sm text-gray-600 dark:text-gray-400">
{`import { createSatelliteCluster } from '@energy-edge/cluster-js'

const cluster = createSatelliteCluster('CLUSTER_ID', 'API_KEY')
const energyStream = cluster
  .stream('getEnergyMetricsStream')
  .on('energy_data', {
    event: 'UPDATE',
    region: 'global',
    metric: 'production_consumption'
  }, payload => {
    console.log('Real-time energy data:', payload)
    // Process data for trading decisions
  })
  .subscribe()`}
                  </code>
                </pre>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-bold">Transform energy trading with satellite intelligence</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="w-full sm:w-auto bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-800 dark:hover:bg-green-700 dark:text-green-100">
                      Start your project
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto border-green-100 dark:border-green-800">
                      Request a demo
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Secure satellite-to-ground transmission.
                    <span className="text-green-600 dark:text-green-400">More on Security</span>
                  </p>
                  <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm">AES-256 Encryption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm">SOC 2 Type II Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

