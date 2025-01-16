import { Metadata } from 'next'
import { NameTranslator } from '@/components/tools/NameTranslator'

export const metadata: Metadata = {
  title: 'RedNote Name Translator - Translate Your Name to Chinese | RedNoteBridge',
  description: 'Translate your name into Chinese for RedNote. Our tool provides accurate Chinese translations with proper characters and pronunciation.',
  keywords: [
    'RedNote name translator',
    'English to Chinese name',
    'Chinese name translation',
    'RedNote username translator',
    'Chinese character name',
    'Name in Chinese'
  ],
  openGraph: {
    title: 'RedNote Name Translator - Translate Your Name to Chinese',
    description: 'Translate your name into Chinese for RedNote. Get accurate translations with proper characters and pronunciation.',
    images: ['/images/tools-guide.svg'],
  }
}

export default function Page() {
  return <NameTranslator />
} 