export interface NameTranslatorRequest {
  name: string
  context?: string
  style: 'modern' | 'traditional' | 'creative'
}

export interface TranslatedName {
  name: string
  pinyin: string
  meaning: string
  cultural_notes: string
}

export interface NameTranslatorResponse {
  translations: TranslatedName[]
} 