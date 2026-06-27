"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Linkedin, Github, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

const contactMethods = [
  { icon: Mail, label: "Email", value: "maithileekune@gmail.com", href: "mailto:maithileekune@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/maithilee-kune", href: "https://linkedin.com/in/maithilee-kune" },
  { icon: Github, label: "GitHub", value: "github.com/kunemaithilee", href: "https://github.com/kunemaithilee" },
]

function validateForm(data: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {}
  if (!data.name.trim()) errors.name = "Name is required"
  if (!data.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email"
  }
  if (!data.message.trim()) {
    errors.message = "Message is required"
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  }
  return errors
}

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const updateField = useCallback((field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError(null)

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSending(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error("Failed to send message")
      setSent(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSent(false), 5000)
    } catch {
      setSubmitError("Something went wrong. Please try again later.")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section-padding relative">
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
              <span>Get In Touch</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-dark mb-3">
              Let&apos;s Build Something <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-dark/40 text-lg max-w-xl mx-auto">
              Have a project in mind? Let&apos;s create something that makes a difference.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-2 space-y-4">
              {contactMethods.map((method, i) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={method.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      <div className="glass-card rounded-2xl p-5 border-dark/8 hover:border-dark/15 group">
                        <div className="flex items-center gap-4">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#7e4a3d]/15 to-[#7e4a3d]/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                            style={{ boxShadow: "0 0 20px rgba(255,255,255,0.05)" }}
                          >
                            <Icon className="h-5 w-5 text-dark" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs text-dark/40 mb-0.5">{method.label}</p>
                            <p className="font-medium text-dark/80 text-sm truncate">{method.value}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card-strong rounded-2xl p-6 md:p-8 border-dark/8 hover:border-dark/15">
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {submitError && (
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400" role="alert">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {submitError}
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium mb-2 text-dark/40">Name</label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium mb-2 text-dark/40">Email</label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-2 text-dark/40">Message</label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell me about your project or idea..."
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                  </div>
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button type="submit" variant="premium" size="lg" className="w-full gap-2" disabled={sending}>
                      {sending ? (
                        <span className="flex items-center gap-2">
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                            <Send className="h-5 w-5" />
                          </motion.span>
                          Sending
                        </span>
                      ) : sent ? (
                        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5" /> Message Sent!
                        </motion.span>
                      ) : (
                        <><Send className="h-5 w-5" /> Send Message</>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
