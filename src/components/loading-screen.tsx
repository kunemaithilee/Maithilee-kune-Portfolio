"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function LoadingScreen() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: "#E5D3B3" }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-4"
                style={{ background: "linear-gradient(135deg, #7e4a3d, rgba(61,44,42,0.5))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MK
              </motion.h1>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 200 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-0.5 rounded-full mx-auto"
              style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.8), rgba(255,255,255,0.2), transparent)" }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-dark/40 text-sm mt-4 font-mono"
            >
              Loading<span className="animate-pulse">...</span>
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
