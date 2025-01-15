'use client'

import { useState } from 'react'
import { translateStyle } from '@/lib/api-client'
import { StyleTranslatorRequest, TranslatedStyle } from '@/types/style-translator'
import { Copy, Check } from 'lucide-react'
import { Slogan } from '@/components/Slogan'

const styleOptions = ['Lifestyle', 'Food', 'Travel', 'Beauty', 'Fashion', 'Tech']
const toneOptions = ['Casual', 'Professional', 'Trendy', 'Emotional']

export default function StyleTranslatorPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [translation, setTranslation] = useState<TranslatedStyle | null>(null)
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState<StyleTranslatorRequest>({
    content: '',
    style: 'lifestyle',
    tone: 'casual'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.content.trim()) {
      setError('Please enter content to translate')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await translateStyle(formData)
      setTranslation(response.translation)
    } catch (err) {
      console.error('Error translating style:', err)
      setError('Failed to translate style. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">RedNote Style Translator</h1>
      <Slogan type="style-translator" />
      
      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        {/* Content Input */}
        <div>
          <label className="block text-sm font-medium mb-2">Your Content</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
            className="input-field w-full border border-surface-300 rounded-lg p-2"
            rows={5}
            placeholder="Enter your content to be translated..."
          />
        </div>

        {/* Style Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Content Category</label>
          <div className="flex flex-wrap gap-2">
            {styleOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData(prev => ({ 
                  ...prev, 
                  style: option.toLowerCase() as StyleTranslatorRequest['style']
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

        {/* Tone Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Writing Tone</label>
          <div className="flex flex-wrap gap-2">
            {toneOptions.map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData(prev => ({ 
                  ...prev, 
                  tone: option.toLowerCase() as StyleTranslatorRequest['tone']
                }))}
                className={`px-3 py-1 rounded-full text-sm transition-all ${
                  formData.tone === option.toLowerCase()
                    ? 'bg-primary-500 text-white'
                    : 'bg-surface-200 text-content-secondary hover:bg-surface-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
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
            'Translate Style'
          )}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 text-red-500 p-4 rounded-lg mb-8">
          {error}
        </div>
      )}

      {translation && (
        <div className="space-y-6">
          <div className="bg-surface-50 border border-surface-300 rounded-lg p-6 relative group">
            {/* Title Copy Button */}
            <button
              onClick={() => {
                handleCopy(translation.title);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className={`absolute top-4 right-16 p-1.5 rounded-full 
                ${copied ? 'bg-green-500' : 'bg-surface-200'} text-content-secondary
                opacity-0 group-hover:opacity-100 hover:bg-surface-300 
                transition-all duration-200`}
              title="Copy title"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="text-2xl font-bold mb-4">{translation.title}</div>

            {/* Content Copy Button */}
            <button
              onClick={() => {
                handleCopy(translation.content);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className={`absolute top-16 right-16 p-1.5 rounded-full 
                ${copied ? 'bg-green-500' : 'bg-surface-200'} text-content-secondary
                opacity-0 group-hover:opacity-100 hover:bg-surface-300 
                transition-all duration-200`}
              title="Copy content"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
            <div className="whitespace-pre-wrap mb-4">{translation.content}</div>

            {/* Hashtags Copy Button */}
            <div className="flex flex-wrap gap-2 mb-4">
              {translation.hashtags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-surface-200 text-content-secondary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
              <button
                onClick={() => {
                  handleCopy(translation.hashtags.join(' '));
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
                className={`p-1.5 rounded-full 
                  ${copied ? 'bg-green-500' : 'bg-surface-200'} text-content-secondary
                  opacity-0 group-hover:opacity-100 hover:bg-surface-300 
                  transition-all duration-200`}
                title="Copy hashtags"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="text-sm bg-surface-100 p-3 rounded">
              <span className="font-medium">Cultural Notes:</span> {translation.notes}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 