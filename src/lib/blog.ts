import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getBlogPost(slug: string) {
  try {
    // 读取 MDX 文件
    const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
    const source = fs.readFileSync(filePath, 'utf8')
    
    // 解析 frontmatter 和内容
    const { data, content } = matter(source)
    
    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      date: data.date,
      readTime: data.readTime,
      content
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
} 