import { CharLimit, Platforms, Vibe, VibeType } from "./types"

export const platforms = ["Twitter", "Facebook", "Linkedin", "Instagram"] as Platforms
export const charLimit = { Twitter: 160, Facebook: 255, Linkedin: 255, Instagram: 150 } as CharLimit

export const vibes: Vibe = {
  Facebook: [
    { label: "Professional" },
    { label: "Casual" },
    { label: "Funny" },
    { label: "Inspirational" },
    { label: "Motivational" },
    { label: "Engaging" },
    { label: "Personal" },
  ] as Array<VibeType>,
  Twitter: [
    { label: "Professional" },
    { label: "Casual" },
    { label: "Witty" },
    { label: "Informative" },
    { label: "Opinionated" },
    { label: "Conversational" },
    { label: "Engaging" },
  ] as Array<VibeType>,
  Linkedin: [
    { label: "Professional" },
    { label: "Formal" },
    { label: "Business-oriented" },
    { label: "Career-focused" },
    { label: "Achievement-oriented" },
    { label: "Industry-specific" },
    { label: "Personal" },
  ] as Array<VibeType>,
  Instagram: [
    { label: "Fun" },
    { label: "Casual" },
    { label: "Quirky" },
    { label: "Trendy" },
    { label: "Artistic" },
    { label: "Inspirational" },
    { label: "Personal" },
  ] as Array<VibeType>,
}

export const aiPrompt = `Generate a "#3" "#1" bios with no hashtags for a "#2" with a "#3" context/way. Make sure the summary is detailed, catchy, trendy, descriptive adjectives and adverbs with a diverse vocabulary. Using this information, craft a bio at max of #4 characters that stands out and accurately captures the essence of the person behind the account.`
