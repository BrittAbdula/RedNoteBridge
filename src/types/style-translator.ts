export interface StyleTranslatorRequest {
  content: string
  style: 'lifestyle' | 'food' | 'travel' | 'beauty' | 'fashion' | 'tech'
  tone: 'casual' | 'professional' | 'trendy' | 'emotional'
}

export interface TranslatedStyle {
  title: string
  content: string
  hashtags: string[]
  notes: string
}

export interface StyleTranslatorResponse {
  translation: TranslatedStyle
} 