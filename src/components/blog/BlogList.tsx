import Image from 'next/image'
import Link from 'next/link'

const posts = [
  {
    slug: 'RedNote-registration-guide',
    title: 'Complete RedNote Registration Guide',
    description: 'Step-by-step tutorial on how to create and verify your RedNote account, including tips for profile optimization.',
    image: '/images/registration-guide.svg',
    date: '2025-01-11',
    readTime: '10 min read'
  },
  {
    slug: 'content-creation-masterclass',
    title: 'Content Creation Masterclass',
    description: 'Learn how to create engaging content that resonates with Chinese audiences while maintaining your authentic voice.',
    image: '/images/content-creation.svg',
    date: '2025-01-18',
    readTime: '15 min read'
  }
]

export function BlogList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
        >
          <div className="aspect-video relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <time dateTime={post.date}>{post.date}</time>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-red-500 transition">
              {post.title}
            </h2>
            <p className="text-gray-600 line-clamp-2">{post.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
} 