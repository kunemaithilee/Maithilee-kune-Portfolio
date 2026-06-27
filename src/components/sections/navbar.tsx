"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const ids = navLinks.map((l) => l.href.slice(1))
      for (const id of ids.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(id)
          return
        }
      }
      setActiveSection("")
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#E5D3B3]/80 backdrop-blur-2xl border-b border-dark/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="container-width flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
        <motion.a
          href="#"
          className="relative text-xl md:text-2xl font-bold tracking-tight text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Maithilee<span className="text-dark/40 font-light">.dev</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                activeSection === link.href.slice(1)
                  ? "text-dark bg-dark/8"
                  : "text-dark/50 hover:text-dark/80 hover:bg-dark/5"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <motion.a
            href="/resume.pdf"
            download
            className="hidden md:block"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <button className="inline-flex items-center justify-center h-9 rounded-lg px-4 text-sm font-medium transition-all duration-300 bg-dark/8 border border-dark/10 text-dark/70 hover:text-dark hover:bg-dark/12 hover:border-dark/20 gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </button>
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-dark/8 border border-dark/10 flex items-center justify-center text-dark/70 hover:text-dark hover:bg-dark/12 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-dark/5 overflow-hidden bg-[#E5D3B3]/95 backdrop-blur-2xl"
          >
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    activeSection === link.href.slice(1)
                      ? "text-dark bg-dark/8"
                      : "text-dark/50 hover:text-dark hover:bg-dark/5"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <a href="/resume.pdf" download className="mt-2">
                <button className="inline-flex items-center justify-center w-full h-10 rounded-lg px-4 text-sm font-medium transition-all duration-300 bg-dark/8 border border-dark/10 text-dark/70 hover:text-dark hover:bg-dark/12 gap-2">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  Download Resume
                </button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
