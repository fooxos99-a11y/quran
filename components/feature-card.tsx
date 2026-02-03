import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  large?: boolean
}

export function FeatureCard({ icon, title, description, large }: FeatureCardProps) {
  return (
    <div className={`group relative bg-card border border-border rounded-xl flex flex-col items-start text-right shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary overflow-hidden ${large ? 'p-10 rounded-2xl min-h-[220px]' : 'p-8'}`}>
      {/* Right border accent */}
      <div className="absolute right-0 top-1/4 h-1/2 w-1 bg-primary/30 rounded-l transition-all duration-300 group-hover:top-0 group-hover:h-full group-hover:bg-primary group-hover:w-[5px]" />
      
      {/* Icon box */}
      <div className={`bg-[var(--primary-light)] text-primary rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:text-white ${large ? 'w-16 h-16 text-2xl mb-6' : 'w-12 h-12 text-xl mb-5'}`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className={`font-bold text-card-foreground mb-3 ${large ? 'text-xl' : 'text-lg'}`}>{title}</h3>
      <p className={`text-muted-foreground leading-relaxed ${large ? 'text-base' : 'text-[15px]'}`}>{description}</p>
    </div>
  )
}
