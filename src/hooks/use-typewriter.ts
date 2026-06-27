"use client"

import { useState, useEffect } from "react"

export function useTypewriter(texts: string[], speed = 50, deleteSpeed = 30, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.slice(0, charIndex + 1))
            setCharIndex((prev) => prev + 1)
          } else {
            setIsPaused(true)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.slice(0, charIndex - 1))
            setCharIndex((prev) => prev - 1)
          } else {
            setIsDeleting(false)
            setTextIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    )
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, isPaused, textIndex, texts, speed, deleteSpeed, pauseDuration])

  return displayText
}
