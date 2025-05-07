"use client"

import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { ProjectCard } from "@/components/cards/project-card"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team workspaces.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances with data visualization and budget planning tools.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "D3.js", "Express", "PostgreSQL"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location-based services and interactive maps.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "OpenWeather API", "Mapbox", "CSS Modules"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support and SEO optimization.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile-first application for tracking workouts and fitness progress with data visualization.",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React Native", "Firebase", "Chart.js", "Redux"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/50 dark:bg-muted/20 py-16 md:py-24">
      <div className="container space-y-8">
        <SectionHeading icon={<Briefcase className="h-5 w-5 text-primary" />} title="Featured Projects" />

        <p className="text-muted-foreground max-w-[800px]">
          Here are some of the projects I've worked on. Each project represents different challenges and solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
