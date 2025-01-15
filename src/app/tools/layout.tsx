import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        {children}
      </div>
      <Footer />
    </main>
  )
} 