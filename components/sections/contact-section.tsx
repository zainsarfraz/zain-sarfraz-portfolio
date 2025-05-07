"use client"

import { Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/shared/section-heading"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/shared/social-links"

interface ContactFormProps {
  className?: string
}

export function ContactSection() {
  return (
    <section id="contact" className="bg-muted/50 dark:bg-muted/20 py-16 md:py-24">
      <div className="container">
        <div className="max-w-2xl mx-auto space-y-8">
          <SectionHeading icon={<Mail className="h-5 w-5 text-primary" />} title="Get In Touch" />

          <p className="text-muted-foreground">
            I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out using the
            form below or directly via email.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="transition-all focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="transition-all focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Subject of your message"
                      className="transition-all focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message"
                      className="min-h-[120px] transition-all focus:border-primary"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full transition-all hover:bg-primary/90">Send Message</Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="mailto:john.doe@example.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>john.doe@example.com</span>
            </Link>
            <SocialLinks className="flex justify-center" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
