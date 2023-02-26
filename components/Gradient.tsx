import React from "react"

const Gradient = () => {
  return (
    <div className="relative w-full max-w-lg flex dark:hidden -z-1">
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl  opacity-20 animate-blob"></div>
      <div className="absolute top-10 -left-4 w-72 h-72 bg-[#FF6E31] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="absolute top-20 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    </div>
  )
}

export default Gradient
