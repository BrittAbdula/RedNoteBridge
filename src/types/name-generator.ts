export interface NameGeneratorRequest {
  gender: 'male' | 'female' | 'neutral'
  style: 'modern' | 'traditional' | 'creative'
  personality: string[]
  interests: string
}

export interface GeneratedName {
  name: string
  pinyin: string
  meaning: string
}

export interface NameGeneratorResponse {
  names: GeneratedName[]
} 