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

export function SharedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-14 flex items-center bg-white/70 backdrop-blur-md border-b border-gray-200/20 z-50">
      <div className="w-full max-w-[1920px] mx-auto px-4 lg:px-6 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Carbon Infinity</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm font-medium hover:text-green-600 transition-colors">
              Solutions
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/solutions" className="w-full">
                  Solutions
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
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/apis">
            APIs
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/online-database">
            Database
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/data-dashboard">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/resources">
            Resources
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
          <nav className="flex flex-col p-4">
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
                    Solutions
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
            
            <Link 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
              href="/apis"
              onClick={() => setMobileMenuOpen(false)}
            >
              APIs
            </Link>
            <Link 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
              href="/online-database"
              onClick={() => setMobileMenuOpen(false)}
            >
              Database
            </Link>
            <Link 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
              href="/data-dashboard"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              className="px-4 py-2 text-sm font-medium hover:bg-gray-100 rounded-md" 
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
} 