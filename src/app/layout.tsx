import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RedNoteBridge - Your Cultural Bridge to Chinas Social Media  RedNote',
  description: 'Navigate RedNote like a local with our AI-powered tools and cultural insights',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface-100">
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
