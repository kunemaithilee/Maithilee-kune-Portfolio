"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle2, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const highlights = [
  "Technical Documentation",
  "Project Presentations",
  "Industry Training",
  "Problem Solving",
  "Leadership",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative">
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
              <span>Experience</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              Professional <span className="gradient-text">Journey</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-strong rounded-2xl overflow-hidden group border-dark/8 hover:border-dark/15"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7e4a3d] via-[#7e4a3d] to-transparent" />
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7e4a3d]/20 to-[#7e4a3d]/10 p-3.5 flex items-center justify-center"
                        style={{ boxShadow: "0 0 30px rgba(255,255,255,0.08)" }}
                      >
                        <Award className="h-full w-full text-dark" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-dark">Persistent Foundation Scholar</h3>
                        <p className="text-sm text-dark/50">Kiran Scholars Training Program</p>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-2 shrink-0 border-dark/10 text-dark/50 bg-dark/[0.02]">
                    <Calendar className="h-3 w-3" />
                    Jul 2024 - Present
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center gap-3 text-sm text-dark/50 p-3.5 rounded-xl bg-dark/[0.03] border border-dark/5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#7e4a3d]/70 shrink-0" />
                      {h}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
