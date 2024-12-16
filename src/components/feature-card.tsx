'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  children,
  className
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={cn(
        "group relative rounded-lg border border-gray-200 bg-white p-4 sm:p-6 w-full max-w-[100vw-2rem] sm:max-w-none transition-colors hover:border-green-200 dark:border-gray-800 dark:bg-black dark:hover:border-green-500",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 group-hover:text-green-500 dark:text-gray-400 dark:group-hover:text-green-400" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">{description}</p>
      {children && (
        <div className="mt-4 rounded-md bg-gray-50 p-3 sm:p-4 dark:bg-gray-900 overflow-x-auto">
          {children}
        </div>
      )}
    </motion.div>
  )
}

