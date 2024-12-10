'use client'

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CarbonDataFlowLanding from "@/components/carbon-data-flow-landing"
import HowItWorksComponent from "@/components/how-it-works"
import LandingBlocks from "@/components/landing-blocks"
import CarbonHero from "@/components/carbon-hero"
import { SharedWaveBackground } from "@/components/shared-wave-background"

export default function CarbonSoftwareLandingComponent() {
  return (
    <div className="flex flex-col pt-14 dark:bg-gray-900">
      <main className="flex-1">
        {/* Hero Section */}
        <CarbonHero />

        {/* Features and Data Flow sections with shared background */}
        <div className="relative bg-gray-50 dark:bg-gray-900">
          <SharedWaveBackground />
          <div className="relative z-10">
            <LandingBlocks />
            <CarbonDataFlowLanding />
          </div>
        </div>

        {/* How It Works Section */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gray-50 dark:bg-gray-900">
          <div className="max-w-[1920px] mx-auto">
            <HowItWorksComponent />
          </div>
        </section>

        {/* Detailed Software Information */}
        <section className="relative w-full py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up dark:text-white">Carbon Infinity Platform</h2>
            <Tabs defaultValue="dashboard" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-gray-100 dark:bg-gray-800">
                <TabsTrigger value="dashboard" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Dashboard</TabsTrigger>
                <TabsTrigger value="reporting" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Reporting</TabsTrigger>
                <TabsTrigger value="integration" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">Integration</TabsTrigger>
              </TabsList>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 min-h-[500px]">
                <TabsContent value="dashboard" className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Intuitive Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Get a bird's-eye view of your organization's carbon footprint with our intuitive dashboard. Visualize key metrics, track progress towards goals, and identify areas for improvement at a glance.</p>
                  <Image
                    src="/graced_dashboard.png"
                    width={1000}
                    height={300}
                    alt="Carbon Infinity Dashboard"
                    className="rounded-lg shadow-md"
                  />
                </TabsContent>
                <TabsContent value="reporting" className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Comprehensive Reporting</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Generate detailed reports that comply with global standards such as GHG Protocol, CDP, and TCFD. Our reporting tools make it easy to communicate your sustainability efforts to stakeholders.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Customizable report templates</li>
                    <li>Automated data collection and verification</li>
                    <li>Export in multiple formats (PDF, Excel, CSV)</li>
                    <li>Benchmarking against industry standards</li>
                  </ul>
                </TabsContent>
                <TabsContent value="integration" className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-4 dark:text-white">Seamless Integration</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Carbon Infinity integrates with your existing systems and data sources to provide a comprehensive view of your carbon footprint. Our platform supports a wide range of integrations, including:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span className="dark:text-gray-300">ERP Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span className="dark:text-gray-300">IoT Devices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span className="dark:text-gray-300">Energy Management Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span className="dark:text-gray-300">Supply Chain Management Tools</span>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative w-full py-24 lg:py-32 bg-green-100 dark:bg-green-900 overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">Ready to Transform Your Carbon Management?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-300">Join the growing number of organizations using Carbon Infinity to make a real impact on climate change.</p>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 animate-fade-in-up animation-delay-600">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Partners</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Webinars</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-green-600 dark:hover:text-green-400 transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 dark:border-gray-700 text-center">
            <p className="dark:text-gray-400">&copy; 2024 Carbon Infinity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}