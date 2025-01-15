import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { NameGeneratorRequest } from '@/types/name-generator'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { gender, style, personality, interests } = await req.json() as NameGeneratorRequest

    const prompt = `Generate 3 Chinese names based on the following preferences:
    - Gender: ${gender}
    - Style: ${style}
    - Personality traits: ${personality.join(', ')}
    - Interests/Additional info: ${interests}

    For each name, provide:
    1. Chinese characters
    2. Pinyin with tone marks
    3. Meaning and cultural significance

    Format the response as JSON with the following structure:
    {
      "names": [
        {
          "name": "Chinese characters",
          "pinyin": "pinyin with tones",
          "meaning": "detailed explanation"
        }
      ]
    }`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a Chinese naming expert who understands both traditional naming conventions and modern trends. You specialize in creating names that work well on social media while maintaining cultural authenticity."
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
    console.error('Error generating names:', error)
    return NextResponse.json(
      { error: 'Failed to generate names' },
      { status: 500 }
    )
  }
}