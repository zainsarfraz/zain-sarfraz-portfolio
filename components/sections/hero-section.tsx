"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container py-24 md:py-32">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="px-3 py-1 text-sm">Available for hire</Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm Zain Sarfraz</h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            Software Engineer & Full-Stack Developer
          </h2>
          <p className="text-muted-foreground max-w-[600px]">
            I build accessible, user-friendly web applications with modern technologies. Passionate about creating
            elegant solutions to complex problems.
          </p>
          <div className="flex gap-4 pt-4">
            <Button asChild>
              <Link href="#projects">
                View My Work <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="John Doe"
              width={320}
              height={320}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
