import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const tools = [
  {
    title: 'Chinese Name Generator',
    description: 'Create a culturally appropriate Chinese name that resonates with RedNote users.',
    href: '/tools/name-generator',
    color: 'red'
  },
  {
    title: 'Name Translator',
    description: 'Transform your existing name into Chinese while preserving its meaning and essence.',
    href: '/tools/name-translator',
    color: 'blue'
  },
  {
    title: 'RedBook-Style Translator',
    description: 'Convert your content into engaging RedNote posts with optimized structure and hashtags.',
    href: '/tools/style-translator',
    color: 'green'
  }
]

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="prose max-w-none mb-8">
          <h1>RedNoteBridge Tools</h1>
          <p className="lead">
            Our AI-powered tools help you create authentic connections with Chinese 
            audiences on RedNote. Choose a tool to get started:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold mb-2">{tool.title}</h2>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <span className="inline-flex items-center text-red-500 font-medium group-hover:gap-1.5 transition-all">
                Get Started <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 