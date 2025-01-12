export default function AboutPage() {
  return (
    <div className="pt-14 last:min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="border-b dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1B5E20] dark:text-green-400">
              AshRegen, the company behind Carbon Infinity
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <div className="absolute inset-0">
          <img
            src="/aboutuspage.png"
            alt="Office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#1B5E20]">
            <div className="container mx-auto px-4 h-full flex items-center">
              <h2 className="text-white text-2xl font-semibold">About Us</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B5E20] dark:text-green-400 leading-tight">
              An innovative platform for planetary data.
            </h2>
          </div>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <p>
              AshRegen is a company that is dedicated to shipping planetary data to the world. We build the infrastructure to do so.
            </p>
            <p>
              To achieve this purpose, AshRegen partners with the world&apos;s most innovative thinkers to rethink the way leaders approach problems. We are a global community of researchers dedicated to providing a platform for the use of planetary data.
            </p>
            <p className="text-sm">
              Thank you for reading.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

