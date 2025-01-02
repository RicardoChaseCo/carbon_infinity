'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Copy } from 'lucide-react'

type JobPosition = {
  id: string
  title: string
  description: string
  team: string
  location: string
  flag: string
  email: string
  materials: string[]
}

const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Research Analyst Intern",
    description: "Position Overview: Conduct comprehensive market research and analysis; Collect, organize, and analyze data from various sources; Prepare research reports and presentations. Required Skills: Proficiency in Excel; Strong research and literature review capabilities; Excellent analytical and writing skills; Attention to details; Good communication skills",
    team: "Research",
    location: "Prefer Remote in United States",
    flag: "🇺🇸",
    email: "jialezhou@ashregen.com",
    materials: ["Resume"]
  },
]

const teams = ["All Teams", "Engineering", "Product", "Design", "Sales"]
const locations = ["All Locations", "New York", "London", "Berlin", "Singapore", "Amsterdam", "Remote"]

export default function CareersPage() {
  const [selectedTeam, setSelectedTeam] = useState("All Teams")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null)
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null)

  const filteredJobs = jobPositions.filter(job => {
    const matchesTeam = selectedTeam === "All Teams" || job.team === selectedTeam
    const matchesLocation = selectedLocation === "All Locations" || job.location.includes(selectedLocation)
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTeam && matchesLocation && matchesSearch
  })

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email)
    setCopiedEmail(email)
    setTimeout(() => setCopiedEmail(null), 2000)
  }

  return (
    <div className="min-h-screen pt-14 bg-white dark:bg-black">
      {/* Dotted background pattern - more visible now */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.1
        }}
      />
      
      <div className="relative container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Join the Carbon Infinity Team
        </h1>
        <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-400">
          Work anywhere in the world
        </p>

        {/* Filters - Mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input
            placeholder="Search for a job"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white dark:bg-black border-gray-200 dark:border-gray-800"
          />
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger className="bg-white dark:bg-black border-gray-200 dark:border-gray-800">
              <SelectValue placeholder="Select Team" />
            </SelectTrigger>
            <SelectContent>
              {teams.map(team => (
                <SelectItem key={team} value={team}>{team}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="bg-white dark:bg-black border-gray-200 dark:border-gray-800">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Jobs table - Mobile responsive */}
        <div className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-4 gap-4 px-6 py-3 bg-gray-50 dark:bg-black">
            <div className="font-medium text-gray-900 dark:text-white">Role</div>
            <div className="font-medium text-gray-900 dark:text-white">Team</div>
            <div className="font-medium text-gray-900 dark:text-white">Location</div>
            <div className="font-medium text-gray-900 dark:text-white">Apply</div>
          </div>

          {/* Table Body - Responsive layout */}
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {filteredJobs.map((job) => (
              <div key={job.id} className="flex flex-col md:grid md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                <div className="order-1">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="text-green-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 font-medium"
                  >
                    {job.title}
                  </button>
                </div>
                <div className="order-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">{job.team}</div>
                <div className="order-3 text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  <span className="mr-2">{job.flag}</span>
                  {job.location}
                </div>
                <div className="order-4 flex items-center gap-2 text-sm md:text-base">
                  <span className="text-gray-600 dark:text-gray-400 hidden md:inline">{job.email}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8"
                    onClick={() => copyEmail(job.email)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    <span className="md:hidden">Copy Email</span>
                  </Button>
                  {copiedEmail === job.email && (
                    <span className="text-sm text-green-600 dark:text-green-400">Copied!</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Job description dialog - Mobile responsive */}
        <Dialog open={!!selectedJob} onOpenChange={() => setSelectedJob(null)}>
          <DialogContent className="sm:max-w-[600px] bg-white dark:bg-black">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-white text-xl">{selectedJob?.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div>
                  <span className="font-medium">Team:</span> {selectedJob?.team}
                </div>
                <div>
                  <span className="font-medium">Location:</span> {selectedJob?.flag} {selectedJob?.location}
                </div>
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {selectedJob?.description}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-medium">Required Materials:</span> {selectedJob?.materials.join(", ")}
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm text-gray-600 dark:text-gray-400">Apply to: {selectedJob?.email}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => selectedJob && copyEmail(selectedJob.email)}
                  className="w-full sm:w-auto"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Email
                </Button>
                {copiedEmail === selectedJob?.email && (
                  <span className="text-sm text-green-600 dark:text-green-400">Copied!</span>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

