'use client'

import Image from 'next/image'
import { BlogPostDef } from '@/types/blog'
import Markdown from 'react-markdown'

interface BlogPostProps {
  post: BlogPostDef
}

export function BlogPost({ post }: BlogPostProps) {
  const imageUrl = post.image || '/images/default-blog-image.svg'
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
          <Image
            src={imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600 space-x-4">
            <time dateTime={post.date}>{formattedDate}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <div className="prose max-w-none">
          <Markdown>{post.content}</Markdown>
        </div>
      </div>
    </div>
  )
} 