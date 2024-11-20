'use client'

import { Button } from "@/components/ui/button"
import { Leaf, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 flex items-center bg-background/70 backdrop-blur-md border-b border-border z-50">
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-[auto,1fr,auto] items-center gap-4">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
          <span className="ml-2 text-lg sm:text-2xl font-bold text-foreground">Carbon Infinity</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-green-600 transition-colors">
              Products
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/products" className="w-full">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/data-dashboard" className="w-full">
                  Data Dashboard
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/online-database" className="w-full">
                  Online Database
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-green-600 transition-colors">
              Solutions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/solutions" className="w-full">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/solutions/carbon-consulting" className="w-full">
                  Carbon Consulting
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/solutions/showcase" className="w-full">
                  Showcase
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-green-600 transition-colors">
              Developers
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/developers" className="w-full">
                  Overview
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/developers/docs" className="w-full">
                  Documentation
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/developers/developer" className="w-full">
                  Developer Portal
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-green-600 transition-colors">
              Resources
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/resources/about" className="w-full">
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/vision" className="w-full">
                  Our Vision
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/team" className="w-full">
                  Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/blogs" className="w-full">
                  Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/faqs" className="w-full">
                  FAQs
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
        <div className="flex items-center gap-2 justify-end">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/signin">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-green-600 text-white hover:bg-green-700" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background border-b border-border shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
            <div className="flex flex-col gap-2 p-4 border-b border-border">
              <Button variant="ghost" size="sm" asChild className="justify-center">
                <Link href="/signin">Sign In</Link>
              </Button>
              <Button size="sm" className="bg-green-600 text-white hover:bg-green-700 justify-center" asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products
                <svg
                  className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {productsOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-100">
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/products"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/products/data-dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Data Dashboard
                  </Link>
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/products/online-database"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Online Database
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                onClick={() => setSolutionsOpen(!solutionsOpen)}
              >
                Solutions
                <svg
                  className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {solutionsOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-100">
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/solutions"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/solutions/carbon-consulting"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Carbon Consulting
                  </Link>
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/solutions/showcase"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Showcase
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
                onClick={() => setDevelopersOpen(!developersOpen)}
              >
                Developers
                <svg
                  className={`w-4 h-4 transition-transform ${developersOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {developersOpen && (
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-100">
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/developers"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Overview
                  </Link>
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/developers/docs"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link 
                    className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                    href="/developers/developer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Developer Portal
                  </Link>
                </div>
              )}
            </div>

            <button
              className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md"
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              Resources
              <svg
                className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {resourcesOpen && (
              <div className="ml-4 mt-2 space-y-2 border-l-2 border-green-100">
                <Link 
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                  href="/resources/about"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                  href="/resources/vision"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Vision
                </Link>
                <Link 
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                  href="/resources/team"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </Link>
                <Link 
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                  href="/resources/blogs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  className="block px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
                  href="/resources/faqs"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}