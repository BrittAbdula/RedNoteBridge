import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import { NameTranslatorRequest } from '@/types/name-translator'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request) {
  try {
    const { name, context, style } = await req.json() as NameTranslatorRequest

    const prompt = `Translate the name "${name}" into Chinese with the following preferences:
    - Style: ${style}
    ${context ? `- Context/Background: ${context}` : ''}

    Provide 3 different translations. For each translation, include:
    1. Chinese characters
    2. Pinyin with tone marks
    3. Meaning and cultural significance
    4. Cultural context and notes

    Format the response as JSON with the following structure:
    {
      "translations": [
        {
          "name": "Chinese characters",
          "pinyin": "pinyin with tones",
          "meaning": "literal meaning and significance",
          "cultural_notes": "additional cultural context"
        }
      ]
    }`

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a Chinese name translation expert who understands both phonetic translation and cultural adaptation. You specialize in creating meaningful translations that preserve the essence of original names while making them culturally appropriate for Chinese contexts."
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
    console.error('Error translating name:', error)
    return NextResponse.json(
      { error: 'Failed to translate name' },
      { status: 500 }
    )
  }
} 