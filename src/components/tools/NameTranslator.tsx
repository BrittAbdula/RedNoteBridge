'use client'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'

interface TranslationResult {
  chinese: string
  pinyin: string
  meaning: string
  cultural_notes: string
}

export default function NameTranslator() {
  const [name, setName] = useState('')
  const [context, setContext] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<TranslationResult[]>([])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/translate-name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, context }),
      })

      const data = await response.json()
      setResults(data.translations)
    } catch (error) {
      console.error('Error translating name:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Name Translator</h1>
          <p className="text-lg text-gray-600">
            Transform your name into meaningful Chinese characters
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Enter your name..."
                required
              />
            </div>

            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Additional Context (Optional)
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                rows={4}
                placeholder="Tell us about yourself, name meaning, or preferences..."
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
                  Translating...
                </span>
              ) : (
                'Translate Name'
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center">
              Translation Options
            </h3>
            <div className="space-y-6">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 space-y-4 hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="text-3xl font-bold text-rose-600">
                    {result.chinese}
                  </div>
                  <div className="space-y-2">
                    <div className="text-gray-700">
                      <span className="font-semibold">Pinyin:</span> {result.pinyin}
                    </div>
                    <div className="text-gray-700">
                      <span className="font-semibold">Meaning:</span> {result.meaning}
                    </div>
                    <div className="text-gray-600 text-sm bg-gray-50 rounded-lg p-4">
                      <span className="font-semibold">Cultural Notes:</span><br />
                      {result.cultural_notes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}