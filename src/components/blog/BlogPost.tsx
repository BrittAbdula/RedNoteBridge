'use client'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import type { BlogPost as BlogPostType } from '@/lib/blog'

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold my-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold my-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold my-2" {...props} />,
  p: (props: any) => <p className="my-2" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-6 my-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-6 my-2" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
}

export function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="aspect-video relative rounded-xl overflow-hidden mb-8">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <time dateTime={post.date}>{post.date}</time>
        <span className="mx-2">•</span>
        <span>{post.readTime}</span>
      </div>

      <div className="prose prose-lg max-w-none">
        <MDXRemote {...post.content} components={components} />
      </div>
    </div>
  )
} 