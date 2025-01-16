import { Metadata } from 'next'
import { StyleTranslator } from '@/components/tools/StyleTranslator'

export const metadata: Metadata = {
  title: 'RedNote Style Translator - Convert Your Content Style | RedNoteBridge',
  description: 'Transform your content style for RedNote. Our AI tool helps adapt your writing to resonate with Chinese social media audiences.',
  keywords: [
    'RedNote style translator',
    'Chinese content style',
    'Social media localization',
    'RedNote content adaptation',
    'Chinese writing style',
    'Content localization'
  ],
  openGraph: {
    title: 'RedNote Style Translator - Convert Your Content Style',
    description: 'Transform your content style for RedNote. Adapt your writing to resonate with Chinese social media audiences.',
    images: ['/images/tools-guide.svg'],
  }
}


export default function Page() {
    return <StyleTranslator />
  } 