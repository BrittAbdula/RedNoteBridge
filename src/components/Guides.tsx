import Image from 'next/image'
import Link from 'next/link'

const guides = [
  {
    title: 'Complete RedNote Registration Guide',
    description: 'Step-by-step tutorial on how to create and verify your RedNote account, including tips for profile optimization.',
    image: '/images/registration-guide.svg',
    slug: 'RedNote-registration-guide'
  },
  {
    title: 'Content Creation Masterclass',
    description: 'Learn how to create engaging content that resonates with Chinese audiences while maintaining your authentic voice.',
    image: '/images/content-creation.svg',
    slug: 'content-creation-masterclass'
  }
]

export function Guides() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Guides & Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <Link 
              key={guide.title}
              href={`/blog/${guide.slug}`}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <Image
                src={guide.image}
                alt={guide.title}
                width={400}
                height={300}
                className="w-full mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">{guide.title}</h3>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <span className="text-red-500 font-medium">Read Guide →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 