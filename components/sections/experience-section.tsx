"use client"

import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { ExperienceCard } from "@/components/cards/experience-card"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description:
      "Lead the frontend development team in building a SaaS platform. Implemented new features, improved performance, and mentored junior developers.",
    responsibilities: [
      "Architected and developed the frontend of a complex SaaS application using React and TypeScript",
      "Improved application performance by 40% through code optimization and lazy loading",
      "Implemented CI/CD pipelines using GitHub Actions",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2019 - 2021",
    description:
      "Worked on multiple client projects developing both frontend and backend solutions. Collaborated with designers and product managers to deliver high-quality applications.",
    responsibilities: [
      "Developed RESTful APIs using Node.js and Express",
      "Built responsive user interfaces with React and Tailwind CSS",
      "Implemented authentication and authorization systems",
      "Worked with SQL and NoSQL databases",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "WebCraft Agency",
    period: "2017 - 2019",
    description:
      "Started as an intern and grew into a full-time role. Worked on various client websites and web applications.",
    responsibilities: [
      "Developed and maintained client websites using HTML, CSS, and JavaScript",
      "Collaborated with designers to implement pixel-perfect designs",
      "Optimized websites for maximum speed and scalability",
      "Assisted in troubleshooting and fixing bugs",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container space-y-8">
        <SectionHeading icon={<Briefcase className="h-5 w-5 text-primary" />} title="Work Experience" />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
