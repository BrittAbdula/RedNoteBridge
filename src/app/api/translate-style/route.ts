import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { StyleTranslatorRequest } from '@/types/style-translator'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { content, style, tone } = await req.json() as StyleTranslatorRequest

    const prompt = `Transform this content into a RedNote (小红书) style post:
    Content: "${content}"
    Category: ${style}
    Tone: ${tone}

    Please provide:
    1. An engaging title in Chinese
    2. Transformed content in Chinese
    3. Relevant hashtags
    4. Cultural adaptation notes

    Format the response as JSON with the following structure:
    {
      "translation": {
        "title": "Chinese title",
        "content": "Chinese content",
        "hashtags": ["hashtag1", "hashtag2", ...],
        "notes": "cultural adaptation notes in English"
      }
    }`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a RedNote content expert who understands both Chinese social media trends and cross-cultural communication. You specialize in adapting content to fit RedNote's unique style while maintaining authenticity."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      response_format: { type: "json_object" }
    })

    const response = completion.choices[0].message.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    return NextResponse.json(JSON.parse(response))
  } catch (error) {
    console.error('Error translating style:', error)
    return NextResponse.json(
      { error: 'Failed to translate style' },
      { status: 500 }
    )
  }
} 