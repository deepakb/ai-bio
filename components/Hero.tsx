import { Platforms } from "@/utils/types"
import React from "react"
import BlinkText from "./BlinkText"

interface HeroProps {
  platforms: Platforms
}

const Hero = ({ platforms }: HeroProps) => {
  return (
    <>
      <div className="max-w-xs xs:max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-5xl w-3/4 font-black text-secondary dark:text-white text-xl xs:text-xl sm:text-2xl md:text-3xl py-10 pb-10 text-center xs:text-left xs:w-full sm:text-center">
        Craft your perfect social bio with AI-powered precision, tailored for
        <span className="text-primary px-2 w-auto text-left">
          <BlinkText platforms={platforms} />
        </span>
      </div>
      <h2 className="max-w-xs xs:max-w-xs sm:max-w-lg md:max-w-2xl font-normal text-primary-light dark:text-white text-sm xs:text-sm md:text-lg py-1 pb-10 text-center xs:text-left xs:w-full sm:text-center">
        Welcome to AIBio, the smartest way to create a winning social media bio. Whether you are a
        business owner, influencer, or just want to stand out online, AIBio has the perfect bio for
        you.
      </h2>
    </>
  )
}

export default Hero
