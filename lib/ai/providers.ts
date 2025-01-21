import { createOpenAI } from "@ai-sdk/openai"

export const orchestrationPrompt = `
You are an AI orchestrator. Your task is to analyze the user's request and determine which tools are needed to fulfill it.
Please return an array of tool names that will be required to handle the user's request.
`

export const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const orchestratorModel = openai("gpt-3.5-turbo")

