"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="py-10 border-t border-dark/5">
      <div className="container-width px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.a
            href="#"
            className="text-lg font-bold tracking-tight text-dark"
            whileHover={{ scale: 1.05 }}
          >
            Maithilee<span className="text-dark/30 font-light">.dev</span>
          </motion.a>

          <div className="flex items-center gap-6 text-sm text-dark/30">
            <a href="#story" className="hover:text-dark/60 transition-colors">Story</a>
            <a href="#projects" className="hover:text-dark/60 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-dark/60 transition-colors">Contact</a>
          </div>

          <p className="text-xs text-dark/20">
            &copy; {new Date().getFullYear()} Maithilee Kune
          </p>
        </div>
      </div>
    </footer>
  )
}
