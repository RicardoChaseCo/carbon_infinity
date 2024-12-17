'use client'

import { motion } from "framer-motion"
import { ArrowRight, Database, GitFork, LineChart, Zap, Cloud, Cpu, Globe } from 'lucide-react'
import { cn } from "@/lib/utils"
import Image from 'next/image'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

// ... (previous imports and animations remain unchanged)

export default function ProductIntroduction() {
  return (
    <div className={cn(
      "min-h-screen font-sans antialiased",
      "bg-background text-foreground"
    )}>
      <motion.div
        className="container px-4 py-12 mx-auto space-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="px-3 py-1 text-sm">
              Innovative Technology
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
              Advanced Mining Activity Monitoring System
            </h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing mining regulation with cutting-edge machine learning and cloud computing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="h-40 w-40 text-muted-foreground animate-pulse" />
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section variants={itemVariants} className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our system combines advanced technologies to provide comprehensive monitoring and analysis
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Database className="h-12 w-12 text-primary" />
                <CardTitle>Real-time Data Processing</CardTitle>
                <CardDescription>
                  Harness the power of cloud infrastructure for immediate insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Continuous data ingestion and analysis</li>
                  <li>Scalable architecture for handling large datasets</li>
                  <li>Low-latency processing for timely decision making</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <LineChart className="h-12 w-12 text-primary" />
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Leverage machine learning for precise activity detection
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Anomaly detection in mining patterns</li>
                  <li>Predictive modeling for environmental impact</li>
                  <li>Trend analysis for regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Image Gallery Section */}
        <motion.section variants={itemVariants} className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Monitoring in Action</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/graced_dashboard.png"
                    width={1000}
                    height={300}
                    alt="Carbon Infinity Dashboard"
                    className="rounded-lg shadow-md"
                  />
                <div className="absolute inset-0 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section variants={itemVariants} className="space-y-12">
          <h2 className="text-3xl font-bold text-center">How It Works</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Data Collection</h3>
                  <p className="text-muted-foreground">Gather multi-source data including satellite imagery and on-ground sensors</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Cloud Processing</h3>
                  <p className="text-muted-foreground">Utilize AWS services for scalable and efficient data processing</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI Analysis</h3>
                  <p className="text-muted-foreground">Apply machine learning models for accurate activity detection and prediction</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <GitFork className="h-40 w-40 text-primary animate-pulse" />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Technical Details Section */}
        <motion.section variants={itemVariants} className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Technical Implementation</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Framework & Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="framework" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="framework">Framework</TabsTrigger>
                    <TabsTrigger value="cloud">Cloud Architecture</TabsTrigger>
                  </TabsList>
                  <TabsContent value="framework">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>AWS Lambda for serverless computing</li>
                      <li>Step Functions for workflow orchestration</li>
                      <li>S3 for scalable data storage</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="cloud">
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Amazon EMR for big data processing</li>
                      <li>AWS Glue for ETL operations</li>
                      <li>Amazon SageMaker for ML model deployment</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="data-prep">
                    <AccordionTrigger>Data Preparation</AccordionTrigger>
                    <AccordionContent>
                      Utilize pySpark for efficient data cleaning, feature engineering, and preprocessing of large-scale geospatial datasets.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="model-training">
                    <AccordionTrigger>Model Training</AccordionTrigger>
                    <AccordionContent>
                      Implement ensemble methods combining Random Forest and Neural Networks for robust mining activity classification.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="deployment">
                    <AccordionTrigger>Deployment</AccordionTrigger>
                    <AccordionContent>
                      Deploy models using Amazon SageMaker for scalable inference and continuous model monitoring.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section variants={itemVariants} className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Industry Applications</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <p>Our system aids regulatory bodies in:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Monitoring adherence to mining permits and boundaries</li>
                      <li>Tracking reclamation efforts in post-mining areas</li>
                      <li>Identifying potential illegal mining activities</li>
                      <li>Assessing environmental impact compliance</li>
                    </ul>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Environmental Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                  <div className="space-y-4">
                    <p>Enhance environmental safeguarding through:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Real-time monitoring of deforestation rates</li>
                      <li>Water quality assessment in mining-affected areas</li>
                      <li>Prediction of potential landslide risks</li>
                      <li>Tracking rehabilitation of ecosystems post-mining</li>
                    </ul>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={itemVariants}
          className="text-center rounded-lg p-12 space-y-6 bg-muted"
        >
          <h2 className="text-3xl font-bold">Ready to Revolutionize Mining Monitoring?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in creating a more sustainable and responsible mining industry with cutting-edge technology.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

