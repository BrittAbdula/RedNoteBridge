'use client'

import { useState } from 'react'
import { translateName } from '@/lib/api-client'
import { TranslatedName, NameTranslatorRequest } from '@/types/name-translator'
import { Copy, Check } from 'lucide-react'
import { Slogan } from '@/components/Slogan'

const styleOptions = ['Modern', 'Traditional', 'Creative']

export default function NameTranslatorPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [translations, setTranslations] = useState<TranslatedName[]>([])
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState<NameTranslatorRequest>({
    name: '',
    context: '',
    style: 'modern'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim()) {
      setError('Please enter a name to translate')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await translateName(formData)
      setTranslations(response.translations)
    } catch (err) {
      console.error('Error translating name:', err)
      setError('Failed to translate name. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async (translation: TranslatedName, index: number) => {
    try {
      const textToCopy = `${translation.name} (${translation.pinyin})\n${translation.meaning}\n\nCultural Notes: ${translation.cultural_notes}`
      await navigator.clipboard.writeText(textToCopy)
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Chinese Name Translator</h1>
      <Slogan type="name-translator" />
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium mb-2">Your Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="input-field w-full"
            placeholder="Enter your name..."
          />
        </div>

        {/* Style Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Translation Style</label>
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

        {/* Context Input */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Additional Context <span className="text-content-tertiary">(optional)</span>
          </label>
          <textarea
            value={formData.context}
            onChange={(e) => setFormData(prev => ({ ...prev, context: e.target.value }))}
            className="input-field w-full border border-surface-300 rounded-lg p-2"
            rows={3}
            placeholder="E.g., your background, interests, or any specific meaning you'd like to preserve..."
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
              Translating...
            </span>
          ) : (
            'Translate Name'
          )}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {translations.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Translated Names</h2>
          <div className="grid gap-4">
            {translations.map((translation, index) => (
              <div key={index} className="bg-surface-50 border border-surface-300 rounded-lg p-6 relative group">
                <button
                  onClick={() => handleCopy(translation, index)}
                  className="absolute top-4 right-4 p-1.5 rounded-full 
                    bg-surface-200 text-content-secondary
                    opacity-0 group-hover:opacity-100 hover:bg-surface-300 
                    transition-all duration-200"
                  title="Copy translation details"
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
                <div className="text-2xl font-bold mb-2">{translation.name}</div>
                <div className="text-content-secondary mb-2">{translation.pinyin}</div>
                <div className="text-content-tertiary mb-4">{translation.meaning}</div>
                <div className="text-sm bg-surface-100 p-3 rounded">
                  <span className="font-medium">Cultural Notes:</span> {translation.cultural_notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 