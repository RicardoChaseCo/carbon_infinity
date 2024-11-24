'use client'

export const GridBackground = () => {
  return (
    <div 
      className="fixed inset-x-0 top-0 h-[60vh] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 100%)',
      }}
    />
  )
} 