"use client"

import { Code } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { SkillCard } from "@/components/cards/skill-card"

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "Vercel", "Jest", "Cypress"],
  },
  {
    title: "UI/UX",
    skills: ["Responsive Design", "Figma", "Accessibility", "UI Animation", "Design Systems"],
  },
  {
    title: "Methodologies",
    skills: ["Agile/Scrum", "Test-Driven Development", "CI/CD", "Microservices", "RESTful Design"],
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management", "Mentoring"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container space-y-8">
        <SectionHeading icon={<Code className="h-5 w-5 text-primary" />} title="Skills & Technologies" />

        <p className="text-muted-foreground max-w-[800px]">
          I've worked with a variety of technologies throughout my career. Here are some of the key skills and tools I
          use regularly:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <SkillCard title={category.title} skills={category.skills} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
