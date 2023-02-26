import React from "react"
import { useTheme } from "next-themes"
import { RxPencil2 } from "react-icons/rx"
import { BsCloudSunFill, BsCloudMoonFill } from "react-icons/bs"

const Header = () => {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()
  const isLight = theme === "light"

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="h-[50px] max-w-4xl xs:max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl py-10 w-full flex flex-row gap-2 justify-center items-center">
      <RxPencil2 className="w-[15px] h-[15px] xs:w-[20px] xs:h-[20px] md:w-[25px] md:h-[25px] text-primary" />
      <a className="font-bold text-primary text-xs xs:text-xs md:text-lg flex-auto hover:text-primary-light cursor-pointer">
        AIBio
      </a>
      <div
        className="justify-end cursor-pointer"
        onClick={() => setTheme(isLight ? "dark" : "light")}
      >
        <BsCloudMoonFill className="w-[15px] h-[15px] xs:w-[20px] xs:h-[20px] md:w-[25px] md:h-[25px] text-black block dark:hidden" />
        <BsCloudSunFill className="w-[15px] h-[15px] xs:w-[20px] xs:h-[20px] md:w-[25px] md:h-[25px] text-primary hidden dark:block" />
      </div>
    </header>
  )
}

export default Header
