import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogPost } from '@/components/blog/BlogPost'
import { getBlogPost } from '@/lib/blog'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const post = await getBlogPost(params.slug)
    
    if (!post) {
      notFound()
    }

    return (
      <main className="min-h-screen">
        <Header />
        <article className="pt-24 pb-16">
          <BlogPost post={post} />
        </article>
        <Footer />
      </main>
    )
  } catch (error) {
    console.error('Error loading blog post:', error)
    notFound()
  }
}

export async function generateStaticParams() {
  return [
    { slug: 'RedNote-registration-guide' },
    { slug: 'content-creation-masterclass' }
  ]
} 