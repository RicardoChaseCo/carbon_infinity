'use client'

import { useState } from "react"
import { Search } from 'lucide-react'

type ContentKey = "Introduction" | "Installation"

export default function DocsPage() {
  const [activeItem, setActiveItem] = useState<ContentKey>("Introduction")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const menuItems = {
    "Getting Started": ["Introduction", "Installation", "Quick Start Guide", "API Keys"],
    "Core Concepts": ["Carbon Footprint", "Emission Factors", "Data Sources", "Calculation Methods", "Reporting Standards"],
    "API Reference": ["Authentication", "Endpoints", "Rate Limits", "Error Handling", "Webhooks"],
    "Advanced Topics": ["Custom Integrations", "Bulk Data Processing", "Machine Learning Models", "Real-time Monitoring"],
  }

  const content: Record<ContentKey, JSX.Element> = {
    "Introduction": (
      <div>
        <h1 className="text-4xl font-bold mb-6 text-green-800">UNDER CONSTRUCTION NOW</h1>
        
      </div>
    ),
    "Installation": (
      <div>
        <h1 className="text-4xl font-bold mb-6 text-green-800">Installation</h1>
        <p className="text-xl mb-6 text-gray-600">Get started with the Carbon Data API in your project.</p>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Installation Steps</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li className="text-lg text-gray-700">Install the Carbon Data API client library</li>
            <li className="text-lg text-gray-700">Import the library in your project</li>
            <li className="text-lg text-gray-700">Initialize the API client with your API key</li>
          </ol>
        </div>
      </div>
    ),
  }

  const filteredMenuItems = Object.fromEntries(
    Object.entries(menuItems).map(([section, items]) => [
      section,
      items.filter(item => 
        item.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ]).filter(([,items]) => items.length > 0)
  )

  return (
    <div className="flex flex-col pt-14 md:flex-row min-h-screen bg-gradient-to-br from-green-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
      <button
        className="md:hidden p-4 text-white bg-green-600 dark:bg-green-700 rounded-lg shadow-lg hover:bg-green-700 dark:hover:bg-green-800 transition duration-300 ease-in-out transform hover:scale-105"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>
      <aside className={`w-full md:w-64 bg-white dark:bg-gray-900 p-4 border-r border-green-200 dark:border-gray-700 overflow-y-auto ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search docs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 pl-10 text-sm border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        </div>
        {Object.entries(filteredMenuItems).map(([section, items]) => (
          <div key={section} className="mb-4">
            <h4 className="font-semibold mb-2 text-green-800 dark:text-green-400">{section}</h4>
            <div>
              {(items as string[]).map((item: string) => (
                <button
                  key={item}
                  onClick={() => setActiveItem(item as ContentKey)}
                  className={`block w-full text-left px-2 py-1 rounded text-sm ${
                    activeItem === item 
                      ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 font-medium" 
                      : "text-gray-600 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>
      <main className="flex-1 p-8 overflow-y-auto dark:text-gray-200">
        <div className="max-w-3xl mx-auto">
          {content[activeItem] || (
            <div className="text-center text-gray-600 dark:text-gray-400 mt-20">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-xl">Content for "{activeItem}" is not available yet.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}