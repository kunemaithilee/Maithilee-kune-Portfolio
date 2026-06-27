"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

const milestones = [
  { year: "2021", event: "Started Diploma in Information Technology", detail: "Launched my journey into the world of software engineering." },
  { year: "2024", event: "Completed Diploma with 85.50%", detail: "Graduated with distinction from Shri Siddheshwar Women's Polytechnic." },
  { year: "2024", event: "Joined BE Information Technology", detail: "Continuing my education at Sinhgad Institute of Technology." },
  { year: "2024", event: "Selected as Persistent Foundation Scholar", detail: "Recognized for technical excellence and leadership potential." },
  { year: "Present", event: "Building AI & Accessibility Solutions", detail: "Creating impactful products that make technology accessible to everyone." },
]

export function StorySection() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="story" className="section-padding relative">
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
              <span>My Story</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              The Journey So <span className="gradient-text">Far</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div ref={ref} className="relative max-w-3xl mx-auto">
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-dark/20 via-dark/10 to-transparent md:-translate-x-px" />

            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-start mb-14 last:mb-0 pl-14 md:pl-0 md:even:flex-row-reverse"
                >
                  <div className="hidden md:flex md:w-1/2 md:items-center md:justify-center">
                    <div className={`w-full ${isLeft ? "pr-14 text-right" : "pl-14 text-left"}`}>
                      <span className="text-5xl md:text-7xl font-black text-dark/5 select-none tracking-tighter">{m.year}</span>
                    </div>
                  </div>

                  <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 top-1 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#7e4a3d] to-[#7e4a3d] ring-[5px] ring-[#E5D3B3] z-10 shadow-lg shadow-[#7e4a3d]/30" />

                  <div className="md:w-1/2 md:px-14">
                    <div className="glass-card-strong rounded-2xl p-6 md:p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="md:hidden text-xs font-mono text-dark/60 bg-dark/8 border border-dark/10 rounded-full px-3 py-1">{m.year}</span>
                        <span className="text-xs font-mono text-dark/60 font-medium tracking-wider uppercase">{m.year}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-dark mb-2">{m.event}</h3>
                      <p className="text-sm text-dark/50 leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
