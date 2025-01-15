'use client'

import { useState } from 'react'
import { generateNames } from '@/lib/api-client'
import { GeneratedName, NameGeneratorRequest } from '@/types/name-generator'
import { Copy, Check } from 'lucide-react'
import { Slogan } from '@/components/Slogan'

const personalityTraits = [
  'Creative', 'Ambitious', 'Friendly', 'Elegant', 'Confident',
  'Gentle', 'Wise', 'Energetic', 'Peaceful', 'Cheerful'
]

const genderOptions = ['Neutral', 'Male', 'Female']
const styleOptions = ['Modern', 'Traditional', 'Creative']

export default function NameGeneratorPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [names, setNames] = useState<GeneratedName[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState<NameGeneratorRequest>({
    gender: 'neutral',
    style: 'modern',
    personality: [],
    interests: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await generateNames(formData)
      setNames(response.names)
    } catch (err) {
      console.error('Error generating names:', err)
      setError('Failed to generate names. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async (name: GeneratedName, index: number) => {
    try {
      const textToCopy = `${name.name} (${name.pinyin})\n${name.meaning}`
      await navigator.clipboard.writeText(textToCopy)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Chinese Name Generator</h1>
      <Slogan type="name-generator" />
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        {/* Gender Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Gender Preference</label>
          <div className="flex flex-wrap gap-2">
            {genderOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData(prev => ({ 
                  ...prev, 
                  gender: option.toLowerCase() as 'male' | 'female' | 'neutral' 
                }))}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  formData.gender === option.toLowerCase()
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-200 text-content-secondary hover:bg-surface-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Style Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Name Style</label>
          <div className="flex flex-wrap gap-2">
            {styleOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData(prev => ({ 
                  ...prev, 
                  style: option.toLowerCase() as 'modern' | 'traditional' | 'creative' 
                }))}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  formData.style === option.toLowerCase()
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-200 text-content-secondary hover:bg-surface-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Personality Traits */}
        <div>
          <label className="block text-sm font-medium mb-2">Personality Traits (select up to 3)</label>
          <div className="flex flex-wrap gap-2">
            {personalityTraits.map(trait => (
              <button
                key={trait}
                type="button"
                onClick={() => {
                  setFormData(prev => ({
                    ...prev,
                    personality: prev.personality.includes(trait)
                      ? prev.personality.filter(t => t !== trait)
                      : prev.personality.length < 3
                      ? [...prev.personality, trait]
                      : prev.personality
                  }))
                }}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  formData.personality.includes(trait)
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-200 text-content-secondary hover:bg-surface-300'
                }`}
              >
                {trait}
              </button>
            ))}
          </div>
        </div>

        {/* Interests/Additional Info */}
        <div>
          <label className="block text-sm font-medium mb-2">Interests or Additional Information</label>
          <textarea
            value={formData.interests}
            onChange={(e) => setFormData(prev => ({ ...prev, interests: e.target.value }))}
            className="input-field w-full border border-surface-300 rounded-lg p-2"
            rows={3}
            placeholder="E.g., content creator, food blogger, travel enthusiast..."
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 rounded-lg text-white font-medium bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </span>
          ) : (
            'Generate Names'
          )}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {names.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Generated Names</h2>
          <div className="grid gap-4">
            {names.map((name, index) => (
              <div key={index} className="bg-surface-50 border border-surface-300 rounded-lg p-6 relative group">
                <button
                  onClick={() => handleCopy(name, index)}
                  className="absolute top-4 right-4 p-1.5 rounded-full 
                    bg-surface-200 text-content-secondary
                    opacity-0 group-hover:opacity-100 hover:bg-surface-300 
                    transition-all duration-200"
                  title="Copy name details"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <div className="text-2xl font-bold mb-2">{name.name}</div>
                <div className="text-content-secondary mb-2">{name.pinyin}</div>
                <div className="text-content-tertiary">{name.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 