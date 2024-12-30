import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Lock, Zap, HardDrive, Radio, Box, PiIcon as Api } from 'lucide-react'

function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -translate-y-24">
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 700 Q 400 600 800 750 T 1600 700"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
        />
        <path
          d="M 0 750 Q 300 650 600 800 T 1200 750"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
          style={{ animationDelay: "0.2s" }}
        />
        <path
          d="M 0 800 Q 400 700 800 850 T 1600 800"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
          style={{ animationDelay: "0.4s" }}
        />
        <path
          d="M 0 850 Q 300 750 600 900 T 1200 850"
          fill="none"
          stroke="rgb(22, 163, 74)"
          strokeWidth="2"
          className="animate-wave"
          style={{ animationDelay: "0.6s" }}
        />
      </svg>
    </div>
  )
}

export default function Component() {
  const features = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Postgres Database",
      description: "Every project is a full Postgres database, the world's most trusted relational database.",
      bulletPoints: ["100% portable", "Built-in Auth with RLS", "Easy to extend"],
      illustration: (
        <div className="w-full flex items-center justify-center p-4 h-24">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full" />
        </div>
      ),
      wide: true
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Authentication",
      description: "Add user sign ups and logins, securing your data with Row Level Security.",
      illustration: (
        <div className="space-y-2">
          <div className="h-8 bg-gray-100 rounded" />
          <div className="h-8 bg-gray-100 rounded" />
        </div>
      )
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Edge Functions",
      description: "Easily write custom code without deploying or scaling servers.",
      illustration: (
        <div className="relative w-full aspect-square">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-lg" />
        </div>
      )
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Storage",
      description: "Store, organize, and serve large files, from videos to images.",
      illustration: (
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-100 rounded" />
          ))}
        </div>
      )
    },
    {
      icon: <Radio className="h-6 w-6" />,
      title: "Realtime",
      description: "Build multiplayer experiences with real-time data synchronization.",
      illustration: (
        <div className="space-y-2">
          <div className="h-2 w-24 bg-gray-100 rounded-full ml-auto" />
          <div className="h-2 w-32 bg-gray-100 rounded-full" />
        </div>
      )
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Vector",
      description: "Integrate your favorite ML models to store, index and search vector embeddings.",
      badges: ["OpenAI", "Hugging Face"],
      illustration: (
        <div className="relative w-full aspect-square">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-lg" />
        </div>
      )
    },
    {
      icon: <Api className="h-6 w-6" />,
      title: "Data APIs",
      description: "Instant ready-to-use Restful APIs.",
      illustration: (
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 w-16 bg-gray-100 rounded-full" />
              <div className="h-2 w-24 bg-gray-100 rounded-full" />
            </div>
          ))}
        </div>
      )
    }
  ]

  return (
    <section className="pt-0 pb-24 px-4 bg-gray-50 dark:bg-black relative">
      <WaveBackground />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <Card 
              key={i} 
              className={`border-gray-100 hover:border-gray-200 transition-colors ${
                feature.wide ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {feature.icon}
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </div>
                <p className="text-sm text-gray-500">{feature.description}</p>
                {feature.bulletPoints && (
                  <ul className="mt-4 space-y-2">
                    {feature.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg
                          className="h-4 w-4 text-emerald-500 shrink-0"
                          fill="none"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
                {feature.badges && (
                  <div className="flex gap-2 mt-4">
                    {feature.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>{feature.illustration}</CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center mt-12 text-gray-600">
          <span className="font-semibold">Use one or all.</span> Best of breed products. Integrated as a platform.
        </p>
      </div>
    </section>
  )
}