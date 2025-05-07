import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  responsibilities: string[]
}

export function ExperienceCard({ title, company, period, description, responsibilities }: ExperienceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="text-base">{company}</CardDescription>
          </div>
          <Badge variant="outline" className="w-fit">
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{description}</p>
        <div>
          <h4 className="font-medium mb-2">Key Responsibilities:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {responsibilities.map((item, index) => (
              <li key={index} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
