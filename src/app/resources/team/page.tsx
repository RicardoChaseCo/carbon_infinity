'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import { GridBackground } from '@/components/grid-background'

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
  location: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Zequn Yang",
    role: "CEO & Founder",
    image: "/teammember1.png",
    bio: "UChicago.",
    linkedin: "https://linkedin.com",
    location: "Boston, USA"
  },
  {
    name: "Zimu Zhang",
    role: "CFO",
    image: "/teammember1.png",
    bio: "University of Chinese Academy of Sciences.",
    linkedin: "https://linkedin.com",
    location: "Beijing, China"
  },
  {
    name: "Jiale Zhou",
    role: "COO",
    image: "/teammember2.png",
    bio: "Uchicago.",
    linkedin: "https://linkedin.com",
    location: "Chicago, USA"
  },
  {
    name: "Vanessa Wang",
    role: "CMO",
    image: "/teammember2.png",
    bio: "Uchicago.",
    linkedin: "https://linkedin.com",
    location: "Beijing, China"
  },
  {
    name: "Yuxuan Cai",
    role: "Member of Technical Staff",
    image: "/teammember1.png",
    bio: "Uchicago.",
    linkedin: "https://linkedin.com",
    location: "Chicago, USA"
  },
  {
    name: "Yu Hui",
    role: "Member of Technical Staff",
    image: "/teammember2.png",
    bio: "Uchicago.",
    linkedin: "https://linkedin.com",
    location: "Chicago, USA"
  },
  {
    name: "Yanzheng Lin",
    role: "Member of Technical Staff",
    image: "/teammember1.png",
    bio: "Fudan.",
    linkedin: "https://linkedin.com",
    location: "Shanghai, China"
  },
  {
    name: "Xingnan Jiang",
    role: "Member of Technical Staff",
    image: "/xingnanjiang.png",
    bio: "Mr. Jiang holds a Master's degree in Computer Science from Johns Hopkins University. Previously, he was a software engineer at Discover, Baidu and NVIDIA. He primarily focuses on the development of our web apps and backend services.",
    linkedin: "https://www.linkedin.com/in/xingnan/",
    location: "Shanghai, China"
  },
]

const advisors: TeamMember[] = [
  {
    name: "Zhu Liu",
    role: "Professor, Tsinghua",
    image: "/zhuliu.png",
    bio: "Professor of Environmental Science at Tsinghua University. 20+ years research experience in climate change.",
    linkedin: "https://linkedin.com",
    location: "Beijing, China"
  },
  {
    name: "Charlene Balfour",
    role: "MD, Wells Fargo",
    image: "/char.png",
    bio: "She is a seasoned executive with over 20 years of experience in the financial services industry, including roles at Wells Fargo and Bank of America.",
    linkedin: "https://linkedin.com",
    location: "New York, USA"
  },
  {
    name: "Jamey Rosenfield",
    role: "SVP, S&P Global",
    image: "/jamey.png",
    bio: "James Rosenfield is Senior Vice President, S&P Global. He is Founder and Co-Chairman of CERAWeek, whose evolution he has overseen for over four decades. He is Co-Founder with Daniel Yergin of Cambridge Energy Research Associates (CERA) and led its strategy and growth. CERA was acquired in 2004 by IHS and subsequently S&P Global..",
    linkedin: "https://linkedin.com",
    location: "New York, USA"
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-50 dark:from-emerald-900/40 dark:to-gray-900 text-gray-900 dark:text-gray-100 relative">
      <GridBackground />
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            We are the people
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Dedicated to revolutionizing carbon management through innovative technology and data-driven solutions. Our diverse team brings together expertise from climate science, technology, and business.
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <button className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full hover:bg-blue-200 transition-colors">
              Talk to us
            </button>
            <button className="bg-green-100 text-green-700 px-6 py-2 rounded-full hover:bg-green-300 transition-colors">
              Join our team
            </button>
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Our Global Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {teamMembers.map((member) => (
              <Card 
                key={member.name} 
                className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer dark:bg-emerald-800 w-full"
                onClick={() => setSelectedMember(member)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-emerald-900 text-white dark:bg-emerald-700">
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-emerald-100">{member.role}</p>
                    <div className="flex items-center mt-2 text-emerald-200">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{member.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">Our Global Advisors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {advisors.map((advisor) => (
              <Card 
                key={advisor.name} 
                className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer dark:bg-emerald-800 w-full"
                onClick={() => setSelectedMember(advisor)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 bg-emerald-800 text-white dark:bg-emerald-700">
                    <h3 className="font-semibold">{advisor.name}</h3>
                    <p className="text-emerald-100">{advisor.role}</p>
                    <div className="flex items-center mt-2 text-emerald-200">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{advisor.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="dark:bg-gray-800 dark:text-white">
          <DialogHeader>
            <DialogTitle>{selectedMember?.name}</DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              {selectedMember?.role} • {selectedMember?.location}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-start space-x-4 pt-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={selectedMember?.image} alt={selectedMember?.name} />
              <AvatarFallback>{selectedMember?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm dark:text-gray-300">{selectedMember?.bio}</p>
              {selectedMember?.linkedin && (
                <a 
                  href={selectedMember.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline mt-2 inline-block"
                >
                  LinkedIn Profile
                </a>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

