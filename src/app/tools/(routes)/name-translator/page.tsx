import { Metadata } from 'next'
import { NameTranslator } from '@/components/tools/NameTranslator'

export const metadata: Metadata = {
  title: 'RedNote Name Translator - Convert Your Name to Chinese | RedNoteBridge',
  description: 'Translate your name into Chinese for RedNote with cultural authenticity. Our AI tool provides accurate translations with proper characters and pronunciation.',
  openGraph: {
    title: 'RedNote Name Translator - Convert Your Name to Chinese',
    description: 'Get a culturally authentic Chinese translation of your name for RedNote, complete with pronunciation and meaning.',
    images: ['/images/tools-guide.svg'],
  }
}

export default function Page() {
  return (
    <div className="space-y-12">
      <NameTranslator />
      
      {/* Marketing Section */}
      <section className="bg-white border rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6">Why Use Our RedNote Name Translator?</h2>
        
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Cultural Accuracy</h3>
            <p className="text-gray-600">Get translations that respect both your original name&apos;s meaning and Chinese naming conventions.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Pronunciation Guide</h3>
            <p className="text-gray-600">Each translation includes pinyin pronunciation to help you read and share your name.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">Meaning Preservation</h3>
            <p className="text-gray-600">We strive to maintain the essence and meaning of your original name in the translation.</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold">RedNote Ready</h3>
            <p className="text-gray-600">Translations are optimized for RedNote&apos;s platform and Chinese social media use.</p>
          </div>
        </div>

        <div className="prose prose-red max-w-none">
          <h3>The Importance of Name Translation for RedNote</h3>
          <p>
            Having a properly translated Chinese name shows respect for the culture and helps you 
            connect better with RedNote&apos;s community. A good translation considers phonetics, 
            meaning, and cultural context to create a name that feels natural to Chinese users.
          </p>
          
          <h3>How Our Name Translator Works</h3>
          <ol>
            <li>Enter your name in your native language</li>
            <li>Add context or meaning you&apos;d like to preserve (optional)</li>
            <li>Choose your preferred translation style</li>
            <li>Receive multiple translation options with explanations</li>
            <li>Select the translation that best fits your identity</li>
          </ol>

          <h3>Translation Style Guidelines</h3>
          <ul>
            <li>Modern: Contemporary Chinese characters and naming patterns</li>
            <li>Traditional: Classic Chinese naming conventions</li>
            <li>Creative: Artistic interpretations while maintaining meaning</li>
            <li>Each style considers both sound and meaning</li>
          </ul>

          <h3>Cultural Notes</h3>
          <p>
            Chinese names typically consist of 2-3 characters, with the surname first. 
            Our translator respects these conventions while adapting your name appropriately. 
            We also provide cultural context to help you understand the significance of your 
            translated name in Chinese culture.
          </p>
        </div>
      </section>
    </div>
  )
} 