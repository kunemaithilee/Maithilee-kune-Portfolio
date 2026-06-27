"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, Mic, Youtube } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Blind Education",
    tagline: "Voice-Controlled Learning Platform",
    icon: Mic,
    description: "Voice-controlled learning platform designed for visually impaired users. Built with accessibility-first principles to make education truly inclusive.",
    features: ["Voice Navigation", "OpenAI Integration", "Hands-free Learning", "Accessibility-first Design"],
    tags: ["React", "Node.js", "OpenAI API"],
    github: "https://github.com/kunemaithilee",
    gradient: "from-[#7e4a3d]/10 to-transparent",
  },
  {
    title: "YouTube Summarizer",
    tagline: "AI-Powered Video Summaries",
    icon: Youtube,
    description: "Chrome Extension that generates AI-powered summaries from YouTube transcripts. Reduces content consumption time while preserving key information.",
    features: ["Transcript Extraction", "AI Summarization", "Hugging Face NLP", "Flask Backend"],
    tags: ["Flask", "Python", "Hugging Face", "JavaScript"],
    github: "https://github.com/kunemaithilee",
    gradient: "from-[#7e4a3d]/10 to-transparent",
    achievement: "Reduced consumption time by 70%",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative">
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
              <span>Featured Projects</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark">
              What I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-[#7e4a3d] to-transparent rounded-full mt-6" />
          </div>

          <div className="space-y-8">
            {projects.map((project, i) => {
              const Icon = project.icon
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <div className="glass-card-strong rounded-2xl overflow-hidden group border-dark/8 hover:border-dark/15">
                    <div className="grid md:grid-cols-5 gap-0">
                      <div className={`md:col-span-2 p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-dark/[0.03] blur-3xl" />
                        <div className="relative z-10">
                          <div className="w-14 h-14 rounded-2xl bg-dark/10 backdrop-blur-sm flex items-center justify-center mb-5 border border-dark/10">
                            <Icon className="h-7 w-7 text-dark" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-dark mb-1">{project.title}</h3>
                          <p className="text-dark/50 text-sm mb-4">{project.tagline}</p>
                          {project.achievement && (
                            <div className="inline-flex items-center gap-2 text-xs text-dark/70 bg-dark/8 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4 border border-dark/10">
                              <Sparkles className="h-3 w-3 text-dark/60" />
                              {project.achievement}
                            </div>
                          )}
                          <div className="flex gap-3">
                            <Button variant="secondary" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2" /> Code
                              </a>
                            </Button>
                            <Button variant="secondary" size="sm" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-2" /> Live
                              </a>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                        <p className="text-dark/50 leading-relaxed mb-6 text-sm">
                          {project.description}
                        </p>
                        <div className="space-y-3 mb-6">
                          {project.features.map((f) => (
                            <div key={f} className="flex items-center gap-3 text-sm text-dark/60">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#7e4a3d]/60 shrink-0" />
                              {f}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs border-dark/10 text-dark/50 bg-dark/[0.02]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
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
