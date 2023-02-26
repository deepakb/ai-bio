import { aiPrompt, charLimit } from "@/utils/constants"
import { createPrompt } from "@/utils/helper"
import { Platforms, PlatformType, Vibe } from "@/utils/types"
import React from "react"
import { MdOutlineContentCopy } from "react-icons/md"

interface CreateBioProps {
  platforms: Platforms
  vibes: Vibe
}

const CreateBio = ({ platforms, vibes }: CreateBioProps) => {
  const [error, setError] = React.useState({ mood: false, desc: false })
  const [isFetching, setIsFetching] = React.useState(false)
  const [valPlatform, setValPlatform] = React.useState<PlatformType>(platforms[0])
  const [valVibe, setValVibe] = React.useState<string | "">("")
  const [valDesc, setValDesc] = React.useState<string>("")
  const [bio, setBio] = React.useState<string | null>("")
  const [copy, setCopy] = React.useState(false)
  const platformVibes = vibes[valPlatform]

  const scrollToBottom = () => {
    const isBrowser = () => typeof window !== "undefined"
    if (!isBrowser()) return
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight)
    }, 1000)
  }

  const handlePlatformChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as PlatformType
    console.log({ value })
    setValPlatform(value)
    setValVibe("")
  }

  const handleVibeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setValVibe(value)
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setValDesc(value)
  }

  const handleReset = () => {
    setValPlatform(platforms[0])
    setValVibe("")
    setValDesc("")
    setBio("")
  }

  const handleCopyText = async () => {
    if (bio) await navigator.clipboard.writeText(bio)
    setCopy(true)

    setTimeout(() => {
      setCopy(false)
    }, 2000)
  }

  const handleSubmit = async () => {
    setError({ mood: valVibe === "", desc: valDesc === "" })

    if (valVibe !== "" && valDesc !== "") {
      setIsFetching(true)
      const prompt = createPrompt(
        aiPrompt,
        valPlatform,
        valDesc,
        valVibe,
        `${charLimit[valPlatform]}`,
      )
      await fetch(`/api/generate`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({ prompt }),
      })
        .then(result => result.json())
        .then(response => {
          setIsFetching(false)
          setBio(response.text)
          scrollToBottom()
        })
    }
  }

  const errorMoodText = error.mood ? `text-red-600` : `text-gray-700`
  const errorDescText = error.desc ? `text-red-600` : `text-gray-700`

  return (
    <section className="max-w-2xl xs:max-w-xs sm:max-w-lg md:max-w-2xl w-full flex flex-col gap-5 z-10">
      <div className="flex flex-col xs:flex-col sm:flex-row item-center justify-center">
        <h3 className="block text-xs font-semibold mt-auto mb-auto md:mt-0 w-[150px]">Platform:</h3>
        <ul className="items-center w-full text-xs font-normal text-gray bg-white border border-light rounded-lg flex flex-col xs:flex-col sm:flex-row">
          {platforms.map((platform, index) => (
            <li
              key={index}
              className="w-full border-b border-light sm:border-b-0 sm:border-r last:border-none"
            >
              <div className="flex items-center pl-3">
                <input
                  type="radio"
                  value={platform}
                  checked={platform === valPlatform}
                  name="platform"
                  className="w-4 h-4 bg-gray-100 border-light"
                  onChange={handlePlatformChange}
                />
                <label className="w-full py-3 ml-2 text-xs font-normal text-gray">{platform}</label>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col xs:flex-col sm:flex-row item-center justify-left">
        <label
          htmlFor="mood"
          className={`block text-xs font-semibold w-[150px] mt-auto mb-auto md:mt-0 ${errorMoodText}`}
        >
          Mood:
        </label>
        <div className="w-full">
          <select
            name="mood"
            id="mood"
            className="text-xs font-normal"
            value={valVibe}
            onChange={handleVibeChange}
          >
            <option value="">Please select</option>
            {platformVibes.map((vibe, index) => (
              <option key={index} value={vibe.label}>
                {vibe.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col xs:flex-col sm:flex-row item-center justify-left">
        <label
          htmlFor="message"
          className={`block text-xs font-semibold w-[150px] mt-auto mb-auto md:mt-0 ${errorDescText}`}
        >
          <span>Describe</span> <span>Yourself:</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="block p-2.5 w-full text-xs text-gray bg-white rounded-lg border border-light focus:ring-[#FF6E31] focus:border-[#FF6E31]"
          placeholder="Tell us a little about yourself, your skills, and your interests"
          value={valDesc}
          onChange={handleDescriptionChange}
        ></textarea>
      </div>

      <div className="flex item-center justify-left">
        <label
          htmlFor="message"
          className="block text-xs font-normal text-gray-700 w-0 sm:w-[150px]"
        ></label>
        <div className="w-full flex flex-col xs:flex-row xs:items-start gap-5">
          {isFetching ? (
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              disabled
            >
              Generating...
            </button>
          ) : (
            <button
              type="button"
              className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={handleSubmit}
            >
              Generate Bio
            </button>
          )}
          <button
            type="button"
            className="inline-block rounded bg-primary-light px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={handleReset}
            disabled={isFetching}
          >
            Reset
          </button>
        </div>
      </div>
      {bio && (
        <div className="h-auto mb-4 rounded-lg border-2 border-primary shadow-xl py-5 px-6 text-base font-normal relative ">
          {copy ? (
            <div className="text-primary absolute right-10 top-2 w-[25px] h-[25px] text-xs font-normal">
              Copied
            </div>
          ) : (
            <MdOutlineContentCopy
              className="absolute right-2 top-2 w-[25px] h-[25px] text-secondary dark:text-primary hover:text-primary-light cursor-pointer"
              title="Copy Bio"
              onClick={handleCopyText}
            />
          )}
          {bio}
        </div>
      )}
    </section>
  )
}

export default CreateBio
