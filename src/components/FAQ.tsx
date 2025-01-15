'use client'

import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is RedNoteBridge?",
    answer: "RedNoteBridge is your cultural bridge to China's social media platform RedNote. We provide AI-powered tools to help global creators adapt their content and presence for the Chinese market."
  },
  {
    question: "How does the Name Generator work?",
    answer: "Our Name Generator uses AI to create culturally appropriate Chinese names based on your preferences, personality, and content style. It considers both traditional naming conventions and modern trends popular on RedNote."
  },
  {
    question: "Is the Style Translator accurate?",
    answer: "The Style Translator is trained on successful RedNote content patterns and cultural nuances. While maintaining your authentic voice, it helps adapt your content to resonate with Chinese audiences."
  },
  {
    question: "Can I use RedNoteBridge for business?",
    answer: "Yes! RedNoteBridge is perfect for both individual creators and businesses looking to establish a presence on RedNote. Our tools help maintain brand consistency while adapting to Chinese social media conventions."
  },
  {
    question: "How often are the tools updated?",
    answer: "We regularly update our tools to reflect the latest trends and changes on RedNote. Our AI models are continuously trained on new data to ensure relevant and effective results."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-surface-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-surface-300 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-100 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-primary-500 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-4 bg-surface-100 border-t border-surface-300">
                    <p className="text-content-secondary">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 