export type PlatformType = "Twitter" | "Facebook" | "Linkedin" | "Instagram"
export type Platforms = Array<PlatformType>
export type VibeType = { label: string }
export type Vibe = { [key in PlatformType]: Array<VibeType> }
export type CharLimit = { [key in PlatformType]: number }
