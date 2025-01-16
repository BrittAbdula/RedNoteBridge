import { Metadata } from 'next'
import { NameGenerator } from '@/components/tools/NameGenerator'

export const metadata: Metadata = {
  title: 'RedNote Name Generator - Create Your Chinese Username | RedNoteBridge',
  description: 'Generate a unique Chinese username for your RedNote account. Our AI-powered tool helps create authentic Chinese names that resonate with local audiences.',
  keywords: [
    'RedNote name generator',
    'Chinese username generator',
    'RedNote username',
    'Chinese name creator',
    'RedNote profile name',
    'Chinese social media name'
  ],
  openGraph: {
    title: 'RedNote Name Generator - Create Your Chinese Username',
    description: 'Generate a unique Chinese username for your RedNote account. Our AI-powered tool helps create authentic Chinese names.',
    images: ['/images/tools-guide.svg'],
  }
}

export default function Page() {
  return <NameGenerator />
} 