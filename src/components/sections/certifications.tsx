"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Award, Terminal } from "lucide-react"

const certifications = [
  {
    title: "Quantum Computing Program",
    issuer: "Persistent Foundation",
    icon: BadgeCheck,
  },
  {
    title: "i4C Training",
    issuer: "Innovation & Incubation Center",
    icon: Award,
  },
  {
    title: "Semicolon Hackathon",
    issuer: "Participant",
    icon: Terminal,
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="section-padding relative">
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
              <span>Achievements</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              Badges & <span className="gradient-text">Recognition</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {certifications.map((cert, i) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="glass-card-strong rounded-2xl p-8 md:p-9 h-full flex flex-col items-center text-center border-dark/8 hover:border-dark/15 group">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7e4a3d]/15 to-[#7e4a3d]/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
                      style={{ boxShadow: "0 0 30px rgba(255,255,255,0.06)" }}
                    >
                      <Icon className="h-7 w-7 text-dark" />
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-2">{cert.title}</h3>
                    <p className="text-sm text-dark/50">{cert.issuer}</p>
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
