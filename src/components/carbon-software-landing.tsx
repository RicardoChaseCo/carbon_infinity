'use client'

import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Globe, Zap, ArrowRight, Check, LineChart, PieChart, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import CarbonDataFlowLanding from "@/components/carbon-data-flow-landing"

export function CarbonSoftwareLandingComponent() {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveSpotlight = () => {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      setSpotlightPosition({ x, y })
    }

    const intervalId = setInterval(moveSpotlight, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden min-h-screen pt-16">
          {/* Background elements */}
          <div className="absolute inset-0 w-full transition-all duration-1000 ease-in-out">
            {/* Multi-color Spotlight Gradients */}
            <div 
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{
                background: `
                  radial-gradient(circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, rgba(0,255,127,0.15), transparent 50%),
                  radial-gradient(circle at ${spotlightPosition.x - 400}px ${spotlightPosition.y + 200}px, rgba(0,200,255,0.15), transparent 50%),
                  radial-gradient(circle at ${spotlightPosition.x + 200}px ${spotlightPosition.y - 300}px, rgba(200,100,255,0.1), transparent 50%)
                `
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/30 backdrop-blur-[100px]" />
            
            {/* Animated floating elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
              <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>
          </div>
          
          {/* Content container */}
          <div className="container max-w-[1600px] mx-auto px-4 md:px-6 relative">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center min-h-[calc(100vh-4rem)] py-12">
              <div className="space-y-6 lg:space-y-8 max-w-2xl text-center mx-auto lg:text-left lg:mx-0">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 animate-fade-in-up">
                  Revolutionize Your Carbon Management
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl animate-fade-in-up animation-delay-300">
                  Empower your organization with cutting-edge software to track, reduce, and offset your carbon footprint. 
                  Join the fight against climate change with Carbon Infinity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-600">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    Get Started
                  </Button>
                  <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 w-full sm:w-auto">
                    Book a Demo
                  </Button>
                </div>
              </div>
              <div className="relative w-full lg:h-[800px] -right-1/3 hidden lg:block self-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-50 rounded-3xl blur-3xl transform -rotate-6 animate-pulse" />
                <Image
                  src="/golfonbuilding2.jpg"
                  width={800}
                  height={900}
                  alt="Industrial carbon management facility"
                  className="relative rounded-3xl shadow-2xl animate-float"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </section>

        {/* Key Features Section */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-[1920px] mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Comprehensive Carbon Management</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: BarChart, title: "Emissions Tracking", description: "Real-time monitoring and reporting of your organization's carbon emissions across all operations." },
                { icon: Globe, title: "Global Compliance", description: "Stay compliant with international carbon regulations and reporting standards with our up-to-date database." },
                { icon: Zap, title: "Reduction Strategies", description: "AI-powered recommendations for effective carbon reduction strategies tailored to your business." },
                { icon: LineChart, title: "Predictive Analytics", description: "Forecast future emissions and set achievable reduction targets based on historical data." },
                { icon: PieChart, title: "Scope Breakdown", description: "Detailed breakdown of Scope 1, 2, and 3 emissions to identify key areas for improvement." },
                { icon: Users, title: "Stakeholder Engagement", description: "Tools to engage employees, suppliers, and customers in your sustainability efforts." }
              ].map((feature, index) => (
                <Card key={index} className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <feature.icon className="w-12 h-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add Carbon Data Flow Section here */}
        <CarbonDataFlowLanding />

        {/* How It Works Section */}
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">How Carbon Infinity Works</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Data Collection", description: "Integrate with your existing systems or use our IoT sensors to collect emissions data." },
                { title: "Analysis", description: "Our AI algorithms process and analyze your data to provide actionable insights." },
                { title: "Strategize", description: "Develop data-driven strategies to reduce emissions and improve efficiency." },
                { title: "Implement & Monitor", description: "Put your plans into action and track progress in real-time." }
              ].map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center animate-fade-in-up relative" style={{ animationDelay: `${index * 200}ms` }}>
                  {/* Spotlight background for the entire card */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent rounded-lg" />
                  
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 relative z-10">
                    <span className="text-2xl font-bold text-green-600">{index + 1}</span>
                  </div>
                  
                  {/* Title with spotlight effect */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-xl font-semibold mb-2 relative z-10">{step.title}</h3>
                  </div>
                  
                  {/* Description with spotlight effect */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <p className="text-gray-600 relative z-10">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Software Information */}
        <section className="relative w-full py-24 lg:py-32 bg-gray-50 overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Carbon Infinity Platform</h2>
            <Tabs defaultValue="dashboard" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="reporting">Reporting</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
              </TabsList>
              <div className="bg-white rounded-lg shadow-lg p-6 min-h-[500px]">
                <TabsContent value="dashboard" className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-4">Intuitive Dashboard</h3>
                  <p className="text-gray-600 mb-4">Get a bird's-eye view of your organization's carbon footprint with our intuitive dashboard. Visualize key metrics, track progress towards goals, and identify areas for improvement at a glance.</p>
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    width={600}
                    height={300}
                    alt="Carbon Infinity Dashboard"
                    className="rounded-lg shadow-md"
                  />
                </TabsContent>
                <TabsContent value="reporting" className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-4">Comprehensive Reporting</h3>
                  <p className="text-gray-600 mb-4">Generate detailed reports that comply with global standards such as GHG Protocol, CDP, and TCFD. Our reporting tools make it easy to communicate your sustainability efforts to stakeholders.</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Customizable report templates</li>
                    <li>Automated data collection and verification</li>
                    <li>Export in multiple formats (PDF, Excel, CSV)</li>
                    <li>Benchmarking against industry standards</li>
                  </ul>
                </TabsContent>
                <TabsContent value="integration" className="animate-fade-in">
                  <h3 className="text-2xl font-semibold mb-4">Seamless Integration</h3>
                  <p className="text-gray-600 mb-4">Carbon Infinity integrates with your existing systems and data sources to provide a comprehensive view of your carbon footprint. Our platform supports a wide range of integrations, including:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span>ERP Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span>IoT Devices</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span>Energy Management Systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Check className="text-green-500" />
                      <span>Supply Chain Management Tools</span>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative w-full py-24 lg:py-32 bg-green-100 overflow-hidden">
          <div className="max-w-[1920px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">Ready to Transform Your Carbon Management?</h2>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-300">Join the growing number of organizations using Carbon Infinity to make a real impact on climate change.</p>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 animate-fade-in-up animation-delay-600">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-white text-gray-800 py-12 border-t border-gray-100">
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">API</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Partners</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Webinars</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Support</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-green-600 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-green-600 transition-colors">GDPR Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p>&copy; 2024 Carbon Infinity. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}