import { BlogList } from '@/components/blog/BlogList'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Latest Guides & Insights</h1>
          <BlogList />
        </div>
      </div>
      <Footer />
    </main>
  )
} 