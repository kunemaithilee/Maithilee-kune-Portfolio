"use client"

import { useEffect, useRef } from "react"

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const trailPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const cursor = cursorRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    const isTouch = "ontouchstart" in window
    if (isTouch) {
      cursor.style.display = "none"
      trail.style.display = "none"
      return
    }

    const move = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const down = () => cursor.classList.add("scale-75")
    const up = () => cursor.classList.remove("scale-75")

    const handleLinks = () => {
      const links = document.querySelectorAll("a, button, [role='button'], input, textarea")
      links.forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("mix-blend-difference", "scale-150", "bg-white"))
        el.addEventListener("mouseleave", () => cursor.classList.remove("mix-blend-difference", "scale-150", "bg-white"))
      })
    }

    document.addEventListener("mousemove", move)
    document.addEventListener("mousedown", down)
    document.addEventListener("mouseup", up)
    handleLinks()

    const observer = new MutationObserver(handleLinks)
    observer.observe(document.body, { childList: true, subtree: true })

    const animateTrail = () => {
      trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.15
      trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.15
      trail.style.left = `${trailPosRef.current.x}px`
      trail.style.top = `${trailPosRef.current.y}px`
      rafRef.current = requestAnimationFrame(animateTrail)
    }
    rafRef.current = requestAnimationFrame(animateTrail)

    return () => {
      cancelAnimationFrame(rafRef.current)
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mousedown", down)
      document.removeEventListener("mouseup", up)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] transition-transform duration-150 hidden md:block mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/30 rounded-full pointer-events-none z-[9998] transition-colors duration-300 hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      />
    </>
  )
}
