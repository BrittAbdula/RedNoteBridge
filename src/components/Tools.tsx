import Image from 'next/image'
import Link from 'next/link'

const tools = [
  {
    title: 'Chinese Name Generator',
    description: 'Create your perfect Chinese name based on your personality, interests, and cultural preferences.',
    image: '/images/name-generator.svg',
    action: 'Try Now',
    link: '/tools/name-generator'
  },
  {
    title: 'Name Translator',
    description: 'Translate your existing name into Chinese with cultural context and proper pronunciation.',
    image: '/images/name-translator.svg',
    action: 'Try Now',
    link: '/tools/name-translator'
  },
  {
    title: 'Style Translator',
    description: 'Transform your content into Chinese social media style with cultural context awareness.',
    image: '/images/style-translator.svg',
    action: 'Try Now',
    link: '/tools/style-translator'
  }
]

export function Tools() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Essential Tools for Your RedNote Journey
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div 
              key={tool.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="mb-4">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <Link href={tool.link} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
                {tool.action}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 