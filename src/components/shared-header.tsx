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
    </header>
  )
} 