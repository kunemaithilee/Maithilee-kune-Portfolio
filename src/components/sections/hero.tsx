"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, Download, Eye, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTypewriter } from "@/hooks/use-typewriter"

const roles = [
  "Full Stack Developer",
  "Java Developer",
  "React Enthusiast",
  "AI Builder",
  "Accessibility Advocate",
]

function GlowOrb({ size = 300, x = "50%", y = "50%", delay = 0 }: { size?: number; x?: string; y?: string; delay?: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: `radial-gradient(circle, rgba(126,74,61,0.04) 0%, transparent 70%)`,
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  )
}

function FloatingShape({ index = 0 }: { index: number }) {
  const xPos = ["10%", "85%", "75%", "15%"][index]
  const yPos = ["20%", "15%", "75%", "80%"][index]
  const size = [80, 60, 100, 50][index]
  const duration = [7, 9, 6, 8][index]

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: xPos, top: yPos, width: size, height: size }}
      animate={{
        y: [0, -size * 0.3, 0],
        rotate: [0, 15, 0],
      }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `rgba(61,44,42,0.03)`,
          border: "1px solid rgba(61,44,42,0.06)",
          backdropFilter: "blur(4px)",
        }}
      />
    </motion.div>
  )
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const typedText = useTypewriter(roles, 60, 35, 2000)

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
      <GlowOrb size={600} x="50%" y="40%" delay={0} />
      <GlowOrb size={400} x="20%" y="70%" delay={2} />
      <GlowOrb size={300} x="80%" y="30%" delay={4} />

      <FloatingShape index={0} />
      <FloatingShape index={1} />
      <FloatingShape index={2} />
      <FloatingShape index={3} />

      <div className="absolute inset-0 bg-subtle-grid pointer-events-none" />

      <motion.div style={{ y, opacity }} className="container-width relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2.5 mb-10 px-5 py-2 rounded-full bg-dark/5 border border-dark/10 text-sm text-dark/80 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-dark/40" />
            <span>Building Intelligent Digital Experiences</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-dark/50 mb-5 font-medium tracking-wide uppercase"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-[0.85] mb-6"
          >
            <span className="gradient-text">MAITHILEE</span>
            <br />
            <span className="gradient-text">KUNE</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-12 mb-10"
          >
            <span className="text-lg md:text-xl text-dark/60 font-mono">
              <span className="text-dark/80 font-semibold">$ </span>
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-dark/80 font-light"
              >_</motion.span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button variant="premium" size="xl" asChild>
              <a href="#story"><Sparkles className="mr-2 h-5 w-5" /> Explore My Journey</a>
            </Button>
            <Button variant="magnetic" size="xl" asChild>
              <a href="#projects"><Eye className="mr-2 h-5 w-5" /> View Projects</a>
            </Button>
            <Button variant="ghost" size="xl" asChild>
              <a href="/resume.pdf" download><Download className="mr-2 h-5 w-5" /> Resume</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#story"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-dark/30 hover:text-dark/60 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</span>
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
