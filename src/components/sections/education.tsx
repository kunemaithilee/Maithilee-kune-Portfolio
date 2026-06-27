"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    degree: "BE Information Technology",
    school: "Sinhgad Institute of Technology",
    period: "2024 - 2027",
    score: "CGPA: 7.08",
    icon: GraduationCap,
  },
  {
    degree: "Diploma Information Technology",
    school: "Shri Siddheshwar Women's Polytechnic",
    period: "2021 - 2024",
    score: "85.50%",
    icon: Award,
  },
  {
    degree: "SSC",
    school: "Secondary School Certificate",
    period: "2020 - 2021",
    score: "84.60%",
    icon: Award,
  },
]

export function EducationSection() {
  return (
    <section id="education" className="section-padding relative">
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
              <span>Education</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              Academic <span className="gradient-text">Background</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div className="max-w-3xl mx-auto">
            {education.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative pl-14 pb-10 last:pb-0"
                >
                  <div className="absolute left-[19px] top-3 bottom-0 w-px bg-gradient-to-b from-dark/15 to-transparent last:hidden" />
                  <div className="absolute left-[11px] top-1 w-[18px] h-[18px] rounded-full bg-gradient-to-br from-[#7e4a3d] to-[#7e4a3d] ring-[5px] ring-[#E5D3B3] z-10 shadow-lg shadow-[#7e4a3d]/20" />

                  <div className="glass-card rounded-2xl p-5 md:p-6 border-dark/8 hover:border-dark/15 group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-dark mb-1">{item.degree}</h3>
                        <p className="text-sm text-dark/50 mb-3">{item.school}</p>
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="text-xs border-dark/10 text-dark/50 bg-dark/[0.02]">
                            {item.period}
                          </Badge>
                          <span className="text-sm font-semibold text-dark/60">{item.score}</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-dark/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-dark/10 transition-all duration-300">
                        <Icon className="h-5 w-5 text-dark/60" />
                      </div>
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
