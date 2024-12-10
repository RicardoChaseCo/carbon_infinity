'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { BarChart3, Globe2, LineChart, Database, ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function Page() {
  return (
    <main className="flex min-h-screen pt-14 flex-col bg-white dark:bg-black items-center justify-center">
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
                Global Decision System for Commodity Trading
              </h1>
              <p className="max-w-[600px] text-base md:text-xl text-gray-600 dark:text-gray-400">
                Oversee global commodity flows and make data-driven decisions with our comprehensive dashboard
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
                src="/cargo.jpg"
                alt="cargo ship"
                width={600}
                height={400}
                className="rounded-lg border border-gray-200 dark:border-gray-800 w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="w-full bg-gray-50 dark:bg-black">
        <section className="container px-4 py-16 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" className="text-xs font-normal">New</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data Collection</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2 justify-center">
                    <Globe2 className="h-4 w-4 text-green-500" />
                    Monitor global shipping routes and volumes
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <BarChart3 className="h-4 w-4 text-green-500" />
                    Track commodity storage levels
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <LineChart className="h-4 w-4 text-green-500" />
                    Analyze market sentiment data
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <Database className="h-4 w-4 text-green-500" />
                    Support for real-time data feeds
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Button variant="link" className="p-0 h-auto font-normal text-sm text-green-500 hover:text-green-600">
                    Learn more <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="outline" className="text-xs font-normal">New</Badge>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analysis Engine</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2 justify-center">
                    <Globe2 className="h-4 w-4 text-green-500" />
                    Serve data closer to trading hubs
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <BarChart3 className="h-4 w-4 text-green-500" />
                    Provide data redundancy
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <LineChart className="h-4 w-4 text-green-500" />
                    Run complex queries
                  </li>
                  <li className="flex items-center gap-2 justify-center">
                    <Database className="h-4 w-4 text-green-500" />
                    Distribute load across various databases
                  </li>
                </ul>
                <div className="flex justify-center">
                  <Button variant="link" className="p-0 h-auto font-normal text-sm text-green-500 hover:text-green-600">
                    Learn more <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>

      {/* Dashboard Preview Section */}
      <section className="container px-4 py-16 text-center">
        <div className="mx-auto max-w-[800px] space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Intuitive Trading Dashboard
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Monitor global commodity flows and make data-driven decisions with our comprehensive dashboard
            </p>
          </div>
          <Tabs defaultValue="table" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-100 dark:bg-black p-1 rounded-md">
              <TabsTrigger value="table" className="rounded-sm">Table editor</TabsTrigger>
              <TabsTrigger value="sql" className="rounded-sm">SQL editor</TabsTrigger>
            </TabsList>
            <TabsContent value="table" className="mt-4">
              <Card className="border-0 shadow-lg">
                <div className="aspect-video rounded-lg bg-white dark:bg-black p-4">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Commodity Data</h4>
                      <Button size="sm">Add Row</Button>
                    </div>
                    <div className="flex-grow overflow-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <th className="text-left p-2 text-gray-600 dark:text-gray-300">Commodity</th>
                            <th className="text-left p-2 text-gray-600 dark:text-gray-300">Price</th>
                            <th className="text-left p-2 text-gray-600 dark:text-gray-300">Volume</th>
                            <th className="text-left p-2 text-gray-600 dark:text-gray-300">Trend</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-2 text-gray-900 dark:text-white">Crude Oil</td>
                            <td className="p-2 text-gray-900 dark:text-white">$75.32</td>
                            <td className="p-2 text-gray-900 dark:text-white">1,000,000 bbl</td>
                            <td className="p-2 text-green-500">↑ 2.3%</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="p-2 text-gray-900 dark:text-white">Natural Gas</td>
                            <td className="p-2 text-gray-900 dark:text-white">$2.87</td>
                            <td className="p-2 text-gray-900 dark:text-white">500,000 MMBtu</td>
                            <td className="p-2 text-red-500">↓ 1.5%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="sql" className="mt-4">
              <Card className="border-0 shadow-lg">
                <div className="aspect-video rounded-lg bg-gray-900 p-4 text-green-400 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">{`SELECT commodity, price, volume, 
       CASE WHEN price > prev_price THEN '↑' ELSE '↓' END || ' ' || 
       ROUND((price - prev_price) / prev_price * 100, 1) || '%' AS trend
FROM (
  SELECT *, LAG(price) OVER (PARTITION BY commodity ORDER BY date) AS prev_price
  FROM commodity_data
  WHERE date >= CURRENT_DATE - INTERVAL '7 days'
)
ORDER BY commodity, date DESC
LIMIT 10`}</pre>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="container px-4 py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          <span className="text-gray-600 dark:text-gray-400">Build your strategy</span>
          <span className="block text-gray-900 dark:text-white">scale to global markets</span>
        </h2>
        <div className="flex gap-4 justify-center mt-8 mb-16">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            Start your project
          </Button>
          <Button variant="outline">
            Request a demo
          </Button>
        </div>
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
            We protect your data.
            <Button variant="link" className="text-green-500 hover:text-green-600 h-auto p-0">
              More on Security
            </Button>
          </p>
          <div className="flex items-center gap-8 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-green-500"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>SOC2 Type 2</span>
              <Badge variant="secondary" className="ml-2">Certified</Badge>
            </div>
            <div className="flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 text-green-500"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>HIPAA</span>
              <Badge variant="secondary" className="ml-2">Compliant</Badge>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

