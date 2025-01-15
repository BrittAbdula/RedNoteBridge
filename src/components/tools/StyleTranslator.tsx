'use client'
import { useState } from 'react'
import { Loader2, Sparkles } from 'lucide-react'

interface StyleResult {
  content: string
  title: string
  tags: string[]
  tips: string
}

export default function StyleTranslator() {
  const [content, setContent] = useState('')
  const [tone, setTone] = useState('casual')
  const [category, setCategory] = useState('lifestyle')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<StyleResult | null>(null)

  const categories = [
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'food', label: 'Food & Dining' },
    { id: 'travel', label: 'Travel' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'tech', label: 'Technology' },
  ]

  const tones = [
    { id: 'casual', label: 'Casual & Relaxed' },
    { id: 'professional', label: 'Professional & Informative' },
    { id: 'trendy', label: 'Trendy & Modern' },
    { id: 'emotional', label: 'Emotional & Healing' },
  ]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/style-translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, tone, category }),
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error translating style:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">RedBook Style Transformer</h1>
          <p className="text-lg text-gray-600">
            Transform your content into engaging RedBook-style posts
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-medium text-gray-700">
                Your Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                rows={6}
                placeholder="Enter your content to be transformed into RedBook style..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Content Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">
                  Writing Tone
                </label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                >
                  {tones.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Transforming...
                </span>
              ) : (
                'Transform Content'
              )}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {result && (
          <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-rose-500" />
              Transformed Content
            </h3>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-500">Title</h4>
                <div className="text-2xl font-bold text-gray-900">{result.title}</div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-500">Content</h4>
                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {result.content}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-500">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {result.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-500">Optimization Tips</h4>
                <div className="text-gray-600 bg-gray-50 rounded-lg p-4 text-sm leading-relaxed">
                  {result.tips}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}