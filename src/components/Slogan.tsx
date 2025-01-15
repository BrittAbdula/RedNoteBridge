interface SloganProps {
  type: 'name-generator' | 'name-translator' | 'style-translator'
}

export function Slogan({ type }: SloganProps) {
  const slogans = {
    'name-generator': 'Create authentic Chinese names that resonate with your RedNote persona',
    'name-translator': 'Transform your name into Chinese with cultural authenticity for RedNote',
    'style-translator': 'Craft engaging RedNote content that connects with Chinese social media audiences'
  }

  return (
    <p className="text-gray-600 mt-2 mb-8">
      {slogans[type]}
    </p>
  )
} 