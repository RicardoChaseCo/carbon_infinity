'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { Leaf, BarChart, Globe, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function CarbonSoftwareLandingComponent() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full pt-14">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-30"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9Ii4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMCAwaDIwMHYyMDBIMHoiIGZpbGw9InVybCgjZykiLz48L3N2Zz4=')]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
            <div className="absolute inset-0">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px w-full bg-gradient-to-r from-transparent via-green-200 to-transparent opacity-30"
                  style={{
                    top: `${20 * (i + 1)}%`,
                    left: '-100%',
                    animation: `shine 3s ease-in-out ${i * 0.5}s infinite`,
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Revolutionize Your Carbon Management
                  </h1>
                  <p className="max-w-[600px] text-gray-700 md:text-xl">
                    Empower your organization with cutting-edge software to track, reduce, and offset your carbon footprint.
                    Join the fight against climate change with Carbon Infinity.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-green-700 text-white hover:bg-green-800">Get Started</Button>
                  <Button variant="outline" className="text-green-700 border-green-700 hover:bg-green-700 hover:text-white">Book a Demo</Button>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl opacity-20 blur-xl"></div>
                <Image
                  alt="Carbon Management Dashboard"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="550"
                  src="/green_factory.jpg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Features</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <BarChart className="h-12 w-12 text-green-700" />
                  <h3 className="text-2xl font-bold text-center">Precise Tracking</h3>
                  <p className="text-gray-500 text-center">
                    Accurately measure and monitor your organization's carbon emissions across all operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Globe className="h-12 w-12 text-green-700" />
                  <h3 className="text-2xl font-bold text-center">Global Compliance</h3>
                  <p className="text-gray-500 text-center">
                    Stay compliant with international carbon regulations and reporting standards effortlessly.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-green-700" />
                  <h3 className="text-2xl font-bold text-center">Collaborative Platform</h3>
                  <p className="text-gray-500 text-center">
                    Engage your entire team in sustainability efforts with our user-friendly, collaborative tools.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    See how Carbon Infinity is helping companies around the world achieve their sustainability goals.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Card>
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Image
                      alt="Company Logo"
                      className="rounded-full"
                      height="80"
                      src="/placeholder.svg?height=80&width=80"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <blockquote className="text-lg font-semibold">
                      "Carbon Infinity has transformed our approach to sustainability. We've reduced our carbon footprint by 30% in
                      just one year."
                    </blockquote>
                    <p className="text-sm text-gray-500">- Jane Doe, CEO of GreenTech Industries</p>
                  </CardContent>
                </Card>
                <div className="flex flex-col justify-center space-y-4">
                  <ul className="grid gap-6">
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">50+ Global Clients</h3>
                        <p className="text-gray-500">Trusted by companies across various industries worldwide.</p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">1M+ Tons CO₂ Reduced</h3>
                        <p className="text-gray-500">Our clients have collectively reduced over a million tons of CO₂ emissions.</p>
                      </div>
                    </li>
                    <li>
                      <div className="grid gap-1">
                        <h3 className="text-xl font-bold">24/7 Expert Support</h3>
                        <p className="text-gray-500">Round-the-clock assistance from our team of sustainability experts.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 text-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Make a Difference?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Join the growing number of companies taking decisive action against climate change. Start your journey with
                  Carbon Infinity today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-green-700 text-white hover:bg-green-800" type="submit">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Carbon Infinity. All rights reserved.</p>
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