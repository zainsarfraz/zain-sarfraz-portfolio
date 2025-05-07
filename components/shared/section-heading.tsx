import type { ReactNode } from "react"

interface SectionHeadingProps {
  icon: ReactNode
  title: string
}

export function SectionHeading({ icon, title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-2 mb-6">
      {icon}
      <h2 className="text-3xl font-bold">{title}</h2>
    </div>
  )
}
