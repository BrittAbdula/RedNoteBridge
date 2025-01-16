import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RedNote Tools - RedNoteBridge',
  description: 'Free tools to help you succeed on RedNote. Name generator, translator, and more tools designed for RedNote creators.',
  keywords: [
    'RedNote tools',
    'RedNote name generator',
    'RedNote name translator',
    'RedNote username',
    'Chinese name generator',
    'Chinese social media tools',
    'RedNote creator tools',
    'RedNote profile optimization',
    'RedNote account setup',
    'Chinese social media assistant'
  ],
  openGraph: {
    title: 'RedNote Tools - RedNoteBridge',
    description: 'Free tools to help you succeed on RedNote. Name generator, translator, and more tools designed for RedNote creators.',
    images: ['/images/tools-guide.svg'],
  }
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tool Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Tips & Best Practices */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="flex items-center text-xl font-bold mb-4">
                <Sparkles className="h-5 w-5 text-[#FE2C55] mr-2" />
                RedNote Tips & Best Practices
              </h2>
              <div className="space-y-2">
                <ul className="space-y-2 list-none pl-0">
                  <li>Keep your content authentic and engaging</li>
                  <li>Use trending hashtags strategically</li>
                  <li>Engage with your audience regularly</li>
                  <li>Post consistently to build presence</li>
                </ul>
              </div>
            </div>

            {/* Related Guides */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="flex items-center text-xl font-bold mb-4">
                <Sparkles className="h-5 w-5 text-[#FE2C55] mr-2" />
                Related Guides
              </h2>
              <div className="space-y-4">
                <Link 
                  href="/blog/content-creation-masterclass" 
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-medium mb-1">Content Creation Masterclass</h3>
                  <p className="text-sm">Learn how to create engaging content that resonates with Chinese audiences.</p>
                </Link>
                <Link 
                  href="/blog/RedNote-registration-guide" 
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-medium mb-1">RedNote Registration Guide</h3>
                  <p className="text-sm">Step-by-step guide to setting up your RedNote account.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 