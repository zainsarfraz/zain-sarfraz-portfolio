"use client"

import { User } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"

export function AboutSection() {
  return (
    <section id="about" className="bg-muted/50 dark:bg-muted/20 py-16 md:py-24">
      <div className="container space-y-6">
        <SectionHeading icon={<User className="h-5 w-5 text-primary" />} title="About Me" />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p>
              I'm a passionate software engineer with over 5 years of experience building web applications. I specialize
              in JavaScript/TypeScript, React, and Node.js, with a strong focus on creating performant and accessible
              user interfaces.
            </p>
            <p>
              My journey in software development began at University of Technology where I earned my Bachelor's degree
              in Computer Science. Since then, I've worked with startups and established companies to deliver
              high-quality software solutions.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, or contributing to open-source projects.
              I'm always eager to learn new technologies and improve my skills.
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Full-Stack Web Development Bootcamp</h4>
                <p className="text-sm text-muted-foreground">Code Academy, 2019</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold pt-4">Certifications</h3>
            <div className="space-y-2">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">AWS Certified Developer</h4>
                <p className="text-sm text-muted-foreground">Amazon Web Services, 2021</p>
              </div>
              <div className="border-l-2 border-primary pl-4 py-1">
                <h4 className="font-medium">Professional Scrum Master I</h4>
                <p className="text-sm text-muted-foreground">Scrum.org, 2020</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
