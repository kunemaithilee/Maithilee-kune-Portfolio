"use client"

import { motion } from "framer-motion"
import { Code2, Server, Terminal, Database, Brain } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "HTML", "CSS", "JavaScript"],
    color: "from-[#7e4a3d]/20 to-transparent",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Spring Boot", "Flask"],
    color: "from-[#7e4a3d]/20 to-transparent",
  },
  {
    title: "Programming",
    icon: Terminal,
    skills: ["Java", "Python", "C++", "Go"],
    color: "from-[#7e4a3d]/15 to-transparent",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MySQL"],
    color: "from-[#7e4a3d]/15 to-transparent",
  },
  {
    title: "AI",
    icon: Brain,
    skills: ["OpenAI API", "Hugging Face"],
    color: "from-[#7e4a3d]/20 to-transparent",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative">
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
              <span>Skills Ecosystem</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group"
                >
                  <div className="glass-card-strong rounded-2xl p-6 md:p-7 h-full flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} p-3.5 mb-5 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500`}
                      style={{ boxShadow: "0 0 30px rgba(255,255,255,0.08)" }}
                    >
                      <Icon className="h-full w-full text-dark" />
                    </div>
                    <h3 className="font-bold text-dark text-sm mb-5 tracking-wide uppercase">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {cat.skills.map((skill, j) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + j * 0.05 }}
                        >
                          <Badge variant="outline" className="text-xs px-3 py-1.5 border-dark/10 text-dark/50 group-hover:border-dark/20 group-hover:text-dark/80 transition-all bg-dark/[0.02]">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
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
