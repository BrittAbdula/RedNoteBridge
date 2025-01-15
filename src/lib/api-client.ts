import { NameGeneratorRequest, NameGeneratorResponse } from '@/types/name-generator'
import { NameTranslatorRequest, NameTranslatorResponse } from '@/types/name-translator'
import { StyleTranslatorRequest, StyleTranslatorResponse } from '@/types/style-translator'

export async function generateNames(data: NameGeneratorRequest): Promise<NameGeneratorResponse> {
  const response = await fetch('/api/generate-name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to generate names')
  }

  return response.json()
}

export async function translateName(data: NameTranslatorRequest): Promise<NameTranslatorResponse> {
  const response = await fetch('/api/translate-name', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to translate name')
  }

  return response.json()
}

export async function translateStyle(data: StyleTranslatorRequest): Promise<StyleTranslatorResponse> {
  const response = await fetch('/api/translate-style', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to translate style')
  }

  return response.json()
}