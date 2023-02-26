"use client"
import { Platforms } from "@/utils/types"
import React from "react"

interface BlinkTextProps {
  platforms: Platforms
}

const BlinkText = ({ platforms }: BlinkTextProps) => {
  const [currentText, setCurrentText] = React.useState("")
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [typingStarted, setTypingStarted] = React.useState(false)

  React.useEffect(() => {
    const text = platforms[currentIndex]
    if (typingStarted && currentText === text) {
      const timeout = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % platforms.length)
        setCurrentText("")
        setTypingStarted(false)
      }, 1000)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1))
        if (!typingStarted) {
          setTypingStarted(true)
        }
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [currentText, currentIndex, typingStarted, platforms])

  const caret = typingStarted ? <span className="inline-block animate-caret">|</span> : null

  return (
    <span id="blink" className="overflow-hidden animate-typing whitespace-nowrap">
      {currentText}
      {caret}
    </span>
  )
}

export default BlinkText
