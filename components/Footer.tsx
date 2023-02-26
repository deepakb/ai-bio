import React from "react"
import { SiTailwindcss, SiOpenai } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaGithub } from "react-icons/fa"
import { RxTwitterLogo } from "react-icons/rx"

const Footer = () => {
  return (
    <footer className="h-[40px] max-w-4xl w-full flex flex-row gap-2 justify-start items-center font-extrabold text-xs mb:5">
      <div className="w-full flex flex-row gap-2 justify-start items-center">
        Powered by
        <span className="flex flex-row items-center justify-center gap-1">
          <SiOpenai />
          openai
        </span>
        <span className="flex flex-row items-center justify-center gap-1">
          <TbBrandNextjs className="text-black dark:text-white" />
          next.js
        </span>
        <span className="flex flex-row items-center justify-center gap-1">
          <SiTailwindcss color="#38BDF8" />
          tailwindcss
        </span>
      </div>
      <a
        href="https://twitter.com/de2pak83"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer justify-end text-[#1D9BF0] mx-auto"
      >
        <RxTwitterLogo className="h-[20px] w-[20px]" />
      </a>
      <a
        href="https://github.com/deepakb"
        target="_blank"
        rel="noreferrer"
        className="cursor-pointer justify-end text-black dark:text-white mx-auto"
      >
        <FaGithub className="h-[20px] w-[20px]" />
      </a>
    </footer>
  )
}

export default Footer
