import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

interface SocialLinksProps {
  className?: string
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={className}>
      <Link
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
        aria-label="GitHub Profile"
      >
        <Github className="h-5 w-5 hover:text-primary transition-colors" />
      </Link>
      <Link
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
      </Link>
      <Link
        href="mailto:john.doe@example.com"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors"
        aria-label="Email"
      >
        <Mail className="h-5 w-5 hover:text-primary transition-colors" />
      </Link>
    </div>
  )
}
