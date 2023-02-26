import type { NextApiRequest, NextApiResponse } from "next"
import { Configuration, OpenAIApi } from "openai"

type Response = { text: string }

interface GenerateNextApiRequest extends NextApiRequest {
  body: {
    prompt: string
  }
}

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req: GenerateNextApiRequest, res: NextApiResponse<Response>) {
  const prompt = req.body.prompt

  if (!prompt || prompt === "") {
    return new Response("Please send your prompt", { status: 400 })
  }

  const aiResponse = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    max_tokens: 2048,
    temperature: 0.9,
  })

  const response = aiResponse.data.choices[0].text?.trim() || "Sorry, there was a problem!"
  res.status(200).json({ text: response })
}
