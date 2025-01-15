'use client'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface FormData {
  gender: 'male' | 'female' | 'neutral'
  style: 'modern' | 'traditional' | 'creative'
  personality: string[]
  interests: string
}

export default function NameGenerator() {
  const [formData, setFormData] = useState<FormData>({
    gender: 'neutral',
    style: 'modern', 
    personality: [],
    interests: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<Array<{
    name: string
    pinyin: string
    meaning: string
  }> | null>(null)

  const personalityTraits = [
    'Elegant', 'Lively', 'Steady', 'Creative',
    'Gentle', 'Strong', 'Wise', 'Humorous'
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/generate-name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      setResults(data.names)
    } catch (error) {
      console.error('Error generating names:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Chinese Name Generator</h1>
        <p className="text-lg text-gray-600">
          Create a perfect Chinese name that resonates with your identity and RedNote presence.
        </p>
      </div>

      {/* Tool Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Gender Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Gender Preference
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                { value: 'male', label: 'Masculine' },
                { value: 'female', label: 'Feminine' },
                { value: 'neutral', label: 'Neutral' }
              ].map((gender) => (
                <button
                  key={gender.value}
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    gender: gender.value as FormData['gender']
                  })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${formData.gender === gender.value 
                      ? 'bg-rose-100 text-rose-700 border-2 border-rose-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {gender.label}
                </button>
              ))}
            </div>
          </div>

          {/* Style Selection */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Name Style
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                { value: 'modern', label: 'Modern' },
                { value: 'traditional', label: 'Traditional' },
                { value: 'creative', label: 'Creative' }
              ].map((style) => (
                <button
                  key={style.value}
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    style: style.value as FormData['style']
                  })}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${formData.style === style.value 
                      ? 'bg-rose-100 text-rose-700 border-2 border-rose-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
          </div>

          {/* Personality Traits */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Personality Traits (Choose up to 3)
            </label>
            <div className="flex flex-wrap gap-3">
              {personalityTraits.map((trait) => (
                <button
                  key={trait}
                  type="button"
                  onClick={() => {
                    const isSelected = formData.personality.includes(trait)
                    const newTraits = isSelected
                      ? formData.personality.filter(t => t !== trait)
                      : [...formData.personality, trait].slice(0, 3)
                    setFormData({ ...formData, personality: newTraits })
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${formData.personality.includes(trait)
                      ? 'bg-rose-100 text-rose-700 border-2 border-rose-500'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>

          {/* Interests/Additional Info */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Interests & Additional Information
            </label>
            <textarea
              value={formData.interests}
              onChange={(e) => setFormData({
                ...formData,
                interests: e.target.value
              })}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              rows={4}
              placeholder="Share your interests, hobbies, or specific meanings you'd like your name to reflect..."
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                Generating...
              </span>
            ) : (
              'Generate Names'
            )}
          </button>
        </form>
      </div>

      {/* Results Section */}
      {results && (
        <div className="space-y-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 space-y-4"
            >
              <div className="text-3xl font-bold text-rose-600">
                {result.name}
              </div>
              <div className="text-gray-700">
                <span className="font-semibold">Pinyin:</span> {result.pinyin}
              </div>
              <div className="text-gray-600 leading-relaxed">
                {result.meaning}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}