"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  life: number
  maxLife: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  const createParticle = useCallback((width: number, height: number): Particle => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: Math.random() * 3 + 1,
    alpha: Math.random() * 0.4 + 0.1,
    life: 0,
    maxLife: Math.random() * 400 + 300,
  }), [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener("mousemove", handleMouse)

    const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 15000))
    particlesRef.current = Array.from({ length: count }, () => createParticle(canvas.width, canvas.height))

    let lastTime = 0
    const animate = (time: number) => {
      const dt = Math.min(time - lastTime, 32) / 16
      lastTime = time
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p, i) => {
        p.life += dt
        if (p.life > p.maxLife) {
          particlesRef.current[i] = createParticle(canvas.width, canvas.height)
          return
        }

        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.02
          p.vx += dx * force
          p.vy += dy * force
        }

        p.vx += (Math.random() - 0.5) * 0.03
        p.vy += (Math.random() - 0.5) * 0.03
        p.vx *= 0.98
        p.vy *= 0.98

        p.x += p.vx * dt
        p.y += p.vy * dt

        if (p.x < -10) p.x = canvas.width + 10
        if (p.x > canvas.width + 10) p.x = -10
        if (p.y < -10) p.y = canvas.height + 10
        if (p.y > canvas.height + 10) p.y = -10

        const lifeRatio = 1 - p.life / p.maxLife
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * lifeRatio})`
        ctx.fill()
      })

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const a = particlesRef.current[i]
          const b = particlesRef.current[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.08
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [createParticle])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  )
}
