'use client'

import { motion } from 'framer-motion'
import { TypeIcon as type, LucideIcon } from 'lucide-react'
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
        "group relative rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-green-200 dark:border-gray-800 dark:bg-black dark:hover:border-green-500",
        className
      )}
    >
      <div className="flex items-center gap-4">
        <Icon className="h-8 w-8 text-gray-600 group-hover:text-green-500 dark:text-gray-400 dark:group-hover:text-green-400" />
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-green-600 dark:text-white dark:group-hover:text-green-400">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      {children && (
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-900">
          {children}
        </div>
      )}
    </motion.div>
  )
}

