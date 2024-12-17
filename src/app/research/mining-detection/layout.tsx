import { cn } from "@/lib/utils"

interface ProductLayoutProps {
  children: React.ReactNode
}

export default function ProductLayout({ children }: ProductLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-background font-sans antialiased",
      "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]",
      "from-green-50from-green-50 via-white to-blue-50",
      "dark:from-green-950 dark:via-gray-900 dark:to-blue-950"
    )}>
      {children}
    </div>
  )
}

