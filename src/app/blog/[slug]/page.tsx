import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BlogPost } from '@/components/blog/BlogPost'
import { getBlogPost } from '@/lib/blog'
import { notFound } from 'next/navigation'


// 添加动态元数据
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug)
  if (!post) return { title: 'Not Found' }

  return {
    title: `${post.title} - RedNoteBridge`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

// 页面组件
export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
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
}

// 预生成静态路径
export function generateStaticParams() {
  return [
    { slug: 'RedNote-registration-guide' },
    { slug: 'content-creation-masterclass' },
    { slug: 'tools-guide' }
  ]
}