"use client"

import { ParticleBackground } from "@/components/particle-background"
import { AnimatedCursor } from "@/components/animated-cursor"
import { ScrollProgressBar } from "@/components/scroll-progress"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <AnimatedCursor />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </>
  )
}
