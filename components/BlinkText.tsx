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
  const [isDeleting, setIsDeleting] = React.useState(false)

  React.useEffect(() => {
    const text = platforms[currentIndex]
    let timeout: any

    if (typingStarted && currentText === text && !isDeleting) {
      setIsDeleting(true)
      timeout = setTimeout(() => {
        setIsDeleting(false)
      }, 1000)
    } else if (!isDeleting && currentText !== text) {
      timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1))
        if (!typingStarted) {
          setTypingStarted(true)
        }
      }, 300)
    } else if (isDeleting && currentText !== "") {
      timeout = setTimeout(() => {
        setCurrentText(currentText.slice(0, -1))
      }, 300)
    } else if (isDeleting && currentText === "") {
      setCurrentIndex((currentIndex + 1) % platforms.length)
      setIsDeleting(false)
      setCurrentText("")
      setTypingStarted(false)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, typingStarted, platforms, isDeleting])

  return (
    <span id="blink" className="overflow-hidden animate-typing whitespace-nowrap">
      {currentText}
      <span className="inline-block animate-caret font-normal">|</span>
    </span>
  )
}

export default BlinkText
