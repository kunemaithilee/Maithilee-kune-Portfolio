"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress"

export function ScrollProgressBar() {
  const progress = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9997] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-primary via-violet-500 to-secondary transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
