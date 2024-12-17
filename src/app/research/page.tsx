'use client'

import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { BarChart, Globe, Users, Building2, Briefcase, CloudCog } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-gradient-to-br from-green-400/30 to-green-600/30">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                  Comprehensive Carbon Management Solutions
                </h1>
                <p className="max-w-[600px] text-gray-700 md:text-xl mx-auto">
                  Discover how Carbon Infinity can help your organization achieve its sustainability goals with our range of innovative solutions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-green-700 text-white hover:bg-green-800">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-green-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Solutions</h2>
            <div className="grid gap-6 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <CloudCog className="h-12 w-12 text-green-700" />
                  <h3 className="text-2xl font-bold text-center">Carbon Management SaaS</h3>
                  <p className="text-gray-500 text-center">
                    Our cloud-based platform provides real-time carbon emissions tracking, reporting, and reduction strategies for businesses of all sizes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Building2 className="h-12 w-12 text-green-700" />
                  <h3 className="text-2xl font-bold text-center">Government Consulting</h3>
                  <p className="text-gray-500 text-center">
                    We offer expert guidance to government agencies on developing and implementing effective carbon reduction policies and programs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Briefcase className="h-12 w-12 text-green-700" />
                  <h3 className="text-2xl font-bold text-center">Corporate Sustainability Strategy</h3>
                  <p className="text-gray-500 text-center">
                    Our team helps businesses develop comprehensive sustainability strategies aligned with their corporate goals and global standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-100 to-green-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored Solutions for Every Sector</h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl">
                  At CarbonSoft, we understand that each industry faces unique challenges in carbon management. Our solutions are customized to meet the specific needs of various sectors.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-4">
                    <Globe className="h-8 w-8 text-green-700" />
                    <h3 className="text-xl font-bold text-center">Energy & Utilities</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-4">
                    <BarChart className="h-8 w-8 text-green-700" />
                    <h3 className="text-xl font-bold text-center">Manufacturing</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-4">
                    <Users className="h-8 w-8 text-green-700" />
                    <h3 className="text-xl font-bold text-center">Transportation</h3>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex flex-col items-center space-y-2 p-4">
                    <Building2 className="h-8 w-8 text-green-700" />
                    <h3 className="text-xl font-bold text-center">Real Estate</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-200/50 to-green-300/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center max-w-3xl mx-auto">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Take Action?</h2>
                <p className="max-w-[600px] text-gray-700 md:text-xl mx-auto">
                  Let&apos;s work together to reduce your carbon footprint and build a sustainable future. Contact us today to learn more about our solutions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-green-700 text-white hover:bg-green-800">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-700">© 2024 Carbon Infinity. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}