import { Metadata } from 'next'
import { NameGenerator } from '@/components/tools/NameGenerator'

export const metadata: Metadata = {
  title: 'RedNote Chinese Name Generator - Create Your Perfect Username | RedNoteBridge',
  description: 'Generate authentic Chinese names for your RedNote profile. Our AI-powered tool creates culturally appropriate names that resonate with Chinese audiences.',
  openGraph: {
    title: 'RedNote Chinese Name Generator - Create Your Perfect Username',
    description: 'Generate authentic Chinese names for your RedNote profile that resonate with local audiences.',
    images: ['/images/tools-guide.svg'],
  }
}

export default function Page() {
  return (
    <div className="space-y-12">
      <NameGenerator />
      
      {/* Marketing Section */}
      <section className="bg-white border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Why Choose Our RedNote Name Generator?</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Culturally Authentic Names</h3>
            <p className="text-gray-600">Generate names that resonate with Chinese audiences while maintaining your personal identity.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">AI-Powered Suggestions</h3>
            <p className="text-gray-600">Our advanced algorithms create meaningful names based on your preferences and personality.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Cultural Context</h3>
            <p className="text-gray-600">Each name comes with meaning explanations and cultural significance.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">RedNote Optimized</h3>
            <p className="text-gray-600">Names are designed to work well on RedNote&apos;s platform and appeal to its community.</p>
          </div>
        </div>

        <div className="prose prose-red max-w-none">
          <h3>Understanding Chinese Names on RedNote</h3>
          <p>
            A well-chosen Chinese name can significantly impact your success on RedNote. 
            Unlike Western platforms, RedNote users often prefer profiles with authentic-feeling 
            Chinese names that show cultural appreciation and understanding.
          </p>
          
          <h3>How Our Name Generator Works</h3>
          <ol>
            <li>Select your preferred gender association and style preferences</li>
            <li>Choose personality traits that match your content style</li>
            <li>Add your interests or content focus (optional)</li>
            <li>Get multiple name suggestions with meanings and pronunciation</li>
            <li>Pick your favorite and start using it on RedNote</li>
          </ol>

          <h3>Best Practices for RedNote Names</h3>
          <ul>
            <li>Choose names that are easy to pronounce and remember</li>
            <li>Ensure the meaning aligns with your content theme</li>
            <li>Avoid potentially sensitive or controversial characters</li>
            <li>Consider how the name looks visually in RedNote&apos;s interface</li>
          </ul>
        </div>
      </section>
    </div>
  )
} 