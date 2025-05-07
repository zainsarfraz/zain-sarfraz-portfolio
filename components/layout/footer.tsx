import { Code } from "lucide-react"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { SocialLinks } from "@/components/shared/social-links"

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          <span className="font-medium">John Doe</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
