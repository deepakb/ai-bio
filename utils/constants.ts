import { CharLimit, Platforms, Vibe, VibeType } from "./types"

export const platforms = ["Twitter", "Facebook", "Linkedin", "Instagram"] as Platforms
export const charLimit = { Twitter: 160, Facebook: 255, Linkedin: 255, Instagram: 150 } as CharLimit

export const vibes: Vibe = {
  Facebook: [
    { label: "Professional", icon: "testicon" },
    { label: "Casual", icon: "testicon" },
    { label: "Funny", icon: "testicon" },
    { label: "Inspirational", icon: "testicon" },
    { label: "Motivational", icon: "testicon" },
    { label: "Engaging", icon: "testicon" },
    { label: "Personal", icon: "testicon" },
  ] as Array<VibeType>,
  Twitter: [
    { label: "Professional", icon: "testicon" },
    { label: "Casual", icon: "testicon" },
    { label: "Witty", icon: "testicon" },
    { label: "Informative", icon: "testicon" },
    { label: "Opinionated", icon: "testicon" },
    { label: "Conversational", icon: "testicon" },
    { label: "Engaging", icon: "testicon" },
  ] as Array<VibeType>,
  Linkedin: [
    { label: "Professional", icon: "testicon" },
    { label: "Formal", icon: "testicon" },
    { label: "Business-oriented", icon: "testicon" },
    { label: "Career-focused", icon: "testicon" },
    { label: "Achievement-oriented", icon: "testicon" },
    { label: "Industry-specific", icon: "testicon" },
    { label: "Personal", icon: "testicon" },
  ] as Array<VibeType>,
  Instagram: [
    { label: "Fun", icon: "testicon" },
    { label: "Casual", icon: "testicon" },
    { label: "Quirky", icon: "testicon" },
    { label: "Trendy", icon: "testicon" },
    { label: "Artistic", icon: "testicon" },
    { label: "Inspirational", icon: "testicon" },
    { label: "Personal", icon: "testicon" },
  ] as Array<VibeType>,
}

export const aiPrompt = `Generate a "#3" "#1" bios with no hashtags for a "#2" with a "#3" context/way. Make sure the summary is detailed, catchy, trendy, descriptive adjectives and adverbs with a diverse vocabulary. Using this information, craft a bio at max of #4 characters that stands out and accurately captures the essence of the person behind the account.`
