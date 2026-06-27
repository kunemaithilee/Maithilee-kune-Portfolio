"use client"

import { motion } from "framer-motion"
import { Accessibility, Brain, Code2, Heart, Quote } from "lucide-react"

const focuses = [
  {
    icon: Accessibility,
    label: "Accessibility",
    desc: "Building for everyone, regardless of ability",
  },
  {
    icon: Brain,
    label: "Artificial Intelligence",
    desc: "Integrating AI to create smarter experiences",
  },
  {
    icon: Code2,
    label: "Full Stack Development",
    desc: "End-to-end solutions with modern tech stacks",
  },
  {
    icon: Heart,
    label: "Human-Centered Design",
    desc: "Putting people at the core of every product",
  },
]

export function WhyBuildSection() {
  return (
    <section id="why-build" className="section-padding relative">
      <div className="absolute inset-0 bg-subtle-grid pointer-events-none" />
      <div className="container-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 mb-5 px-5 py-2 rounded-full bg-dark/5 border border-dark/10 text-sm text-dark/70 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-dark/30" />
              <span>Why I Build</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              Built with <span className="gradient-text">Purpose</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center mb-20 p-10 md:p-14 rounded-2xl glass-card-strong border-dark/10 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#7e4a3d] to-[#7e4a3d] flex items-center justify-center shadow-lg shadow-[#7e4a3d]/30">
                <Quote className="h-4 w-4 text-dark" />
              </div>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.3] text-balance text-dark/90 mt-4">
                &ldquo;I believe technology should be <span className="gradient-text font-bold">accessible to everyone</span>.&rdquo;
              </blockquote>
              <p className="text-dark/40 mt-6 max-w-lg mx-auto text-sm leading-relaxed">
                Every project I build starts with a simple question — how can this make someone&apos;s life better?
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-4">
              {focuses.map((f, i) => {
                const Icon = f.icon
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -3 }}
                  >
                    <div className="glass-card rounded-2xl p-6 md:p-7 border-dark/8 hover:border-dark/15 group h-full">
                      <div className="flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7e4a3d]/15 to-[#7e4a3d]/5 p-3 shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ boxShadow: "0 0 20px rgba(255,255,255,0.05)" }}
                        >
                          <Icon className="h-full w-full text-dark" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-dark mb-1">{f.label}</h3>
                          <p className="text-sm text-dark/50 leading-relaxed">{f.desc}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
