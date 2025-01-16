import { Metadata } from 'next'
import { StyleTranslator } from '@/components/tools/StyleTranslator'

export const metadata: Metadata = {
  title: 'RedNote Style Translator - Adapt Your Content for Chinese Social Media | RedNoteBridge',
  description: 'Transform your content for RedNote&apos;s Chinese audience. Our AI tool helps adapt your writing style while maintaining your authentic voice.',
  openGraph: {
    title: 'RedNote Style Translator - Adapt Your Content for Chinese Social Media',
    description: 'Transform your content to resonate with Chinese audiences while keeping your unique voice.',
    images: ['/images/tools-guide.svg'],
  }
}

export default function Page() {
  return (
    <div className="space-y-12">
      <StyleTranslator />
      
      {/* Marketing Section */}
      <section className="bg-white border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Why Use Our RedNote Style Translator?</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Cultural Adaptation</h3>
            <p className="text-gray-600">Transform your content to resonate with Chinese audiences while maintaining your authentic voice.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Context-Aware</h3>
            <p className="text-gray-600">Our AI understands different content categories and adjusts the style accordingly.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Tone Optimization</h3>
            <p className="text-gray-600">Choose from multiple writing styles to match your content&apos;s purpose and audience.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">RedNote Optimized</h3>
            <p className="text-gray-600">Get suggestions for trending hashtags and engagement-boosting phrases.</p>
          </div>
        </div>

        <div className="prose prose-red max-w-none">
          <h3>Content Adaptation for RedNote</h3>
          <p>
            Success on RedNote requires more than just translation - it needs cultural adaptation. 
            Chinese social media users have unique content preferences and engagement patterns. 
            Our tool helps bridge this cultural gap while preserving your message.
          </p>
          
          <h3>How Our Style Translator Works</h3>
          <ol>
            <li>Enter your original content</li>
            <li>Select your content category (Lifestyle, Food, Travel, etc.)</li>
            <li>Choose your desired tone (Casual, Professional, Trendy, etc.)</li>
            <li>Get culturally adapted content with suggested hashtags</li>
            <li>Review cultural notes and recommendations</li>
          </ol>

          <h3>Content Categories</h3>
          <ul>
            <li>Lifestyle: Personal stories and daily experiences</li>
            <li>Food: Culinary content and restaurant reviews</li>
            <li>Travel: Destination guides and travel tips</li>
            <li>Beauty: Skincare and makeup content</li>
            <li>Fashion: Style tips and trend updates</li>
            <li>Tech: Product reviews and digital trends</li>
          </ul>

          <h3>Writing Style Tips</h3>
          <ul>
            <li>Use appropriate emotional expressions for Chinese social media</li>
            <li>Include relevant cultural references</li>
            <li>Maintain authenticity while adapting to local preferences</li>
            <li>Consider timing and seasonal factors</li>
          </ul>

          <h3>Best Practices</h3>
          <p>
            Successful content on RedNote often combines personal authenticity with cultural awareness. 
            Our tool helps you achieve this balance by suggesting culturally appropriate phrases, 
            emotional expressions, and trending topics while keeping your unique perspective intact.
          </p>
        </div>
      </section>
    </div>
  )
} 