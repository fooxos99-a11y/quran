interface SectionHeaderProps {
  title: string
  description?: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className={`mb-12 border-r-[5px] border-primary pr-6 ${description ? 'block' : 'flex items-center min-h-[50px]'}`}>
      <h2 className="text-3xl font-extrabold text-foreground">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg mt-2">{description}</p>
      )}
    </div>
  )
}
