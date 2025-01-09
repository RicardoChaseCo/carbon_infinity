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
    name: "Ash",
    role: "CEO & Founder",
    image: "/boyavatar.png",
    bio: "Ash graduated from the University of Chicago and is currently a serial entrepreneur. He has been active in the Venture Capital industry for half a decade.",
    location: "Boston, USA"
  },
  {
    name: "Zimu Zhang",
    role: "CFO",
    image: "/boyavatar.png",
    bio: "Zimu Zhang is currently studying in the MBA program at the University of Chinese Academy of Sciences and has 3 years of banking experience. He is also a Chinese Certified Public Accountant",
    location: "Beijing, China"
  },
  {
    name: "Charlotte Zhou",
    role: "COO",
    image: "/girlavatar.png",
    bio: "Charlotte Zhou holds an M.A. in Computational Social Science (Economics) from the University of Chicago and a B.B.A. in Applied Economics from The Chinese University of Hong Kong. With experience spanning government consulting, securities analysis, and research roles at leading institutions including the University of Chicago Booth School of Business, she excels at leveraging technology and analytics to drive organizational transformation and business growth.",
    location: "Chicago, USA"
  },
  {
    name: "Vanessa",
    role: "CMO",
    image: "/girlavatar.png",
    bio: "Vanessa is currently pursuing a Master of Public Policy degree at Harvard University. She holds a Bachelor's degree in Communication from the University of Southern California. She has worked in Venture Capital, FA, and startups before, with years of experience and expertise in marketing and business development.",
    location: "Beijing, China"
  },
]

const engineers: TeamMember[] = [
  {
    name: "Yuxuan Cai",
    role: "Data Scientist",
    image: "/boyavatar.png",
    bio: "PhD Candidate at University of Chicago",
    location: "Chicago, USA"
  },
  {
    name: "Yu Hui",
    role: "Data Scientist",
    image: "/girlavatar.png",
    bio: "Yu Hui is an MA candidate in Computational Social Science at the University of Chicago with a strong foundation in applied economics, data science, and public finance. She has professional experience as a Business Analyst Intern at Deloitte Consulting. Yu is passionate about using data-driven methods to address real-world challenges and improve policy outcomes.",
    location: "Chicago, USA"
  },
  {
    name: "Simon",
    role: "Algorithm Engineer",
    image: "/boyavatar.png",
    bio: "Simon is an AI tutor of the alumni association of the top 3 universities in China, a former senior algorithm engineer of a Big Tech company, and a cooperative independent developer of the Damo Academy",
    location: "Shanghai, China"
  },
  {
    name: "Ricardo",
    role: "Software Engineer",
    image: "/boyavatar.png",
    bio: "Xingnan Jiang holds a M.S. in Computer Science Degree from a Top 10 University in the United States. Previously, he was a Software Engineer at several Big Tech companies. He is a full stack engineer with a passion for building scalable and efficient systems.",
    location: "Shanghai, China"
  }
]

const researchers: TeamMember[] = [
  {
    name: "Xiaokang Fu",
    role: "Researcher",
    image: "/boyavatar.png",
    bio: "Xiaokang Fu is a postdoctoral fellow at Harvard University. He was a postdoctoral researcher in State Key Laboratory of Information Engineering in Surveying, Mapping and Remote Sensing, Wuhan University, and a Visiting Fellow at the CGA. His research interests include Geostatistics and Geoinformatics (GIS), Urban Computing, Social Media Data Mining, Emergency Response, and healthy cities. Since 2020, as one of the core members, he has participated in the workflow-based spatial analysis platform project and COVID-19 quick response project initiated by the CGA.",
    location: "Boston, USA"
  },
]

const advisors: TeamMember[] = [
  {
    name: "Zhu Liu",
    role: "Professor, Tsinghua",
    image: "/zhuliu.png",
    bio: "Professor of Environmental Science at Tsinghua University. 20+ years research experience in climate change.",
    location: "Beijing, China"
  },
  {
    name: "Charlene Balfour",
    role: "Executive, Wells Fargo",
    image: "/char.png",
    bio: "She is a seasoned executive with over 20 years of experience in the financial services industry, including roles at Wells Fargo and Bank of America.",
    location: "New York, USA"
  },
  {
    name: "Jamey Rosenfield",
    role: "SVP, S&P Global",
    image: "/jamey.png",
    bio: "James Rosenfield is Senior Vice President, S&P Global. He is Founder and Co-Chairman of CERAWeek, whose evolution he has overseen for over four decades. He is Co-Founder with Daniel Yergin of Cambridge Energy Research Associates (CERA) and led its strategy and growth. CERA was acquired in 2004 by IHS and subsequently S&P Global..",
    location: "New York, USA"
  },
]

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <div className="min-h-screen pt-14 bg-gradient-to-b from-gray-50 to-gray-50 dark:from-black dark:to-black text-gray-900 dark:text-gray-100 relative">
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
          <h2 className="text-2xl font-semibold mb-8">Our Management Team</h2>
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
                  <div className="p-4 bg-emerald-900 text-white dark:bg-gray-900">
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

        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Our Engineering Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {engineers.map((member) => (
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
                  <div className="p-4 bg-emerald-900 text-white dark:bg-gray-900">
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


        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Our Research Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {researchers.map((member) => (
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
                  <div className="p-4 bg-emerald-900 text-white dark:bg-gray-900">
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
                  <div className="p-4 bg-emerald-800 text-white dark:bg-gray-900">
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
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

