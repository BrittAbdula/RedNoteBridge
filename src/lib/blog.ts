import fs from 'fs/promises'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'

export interface BlogPost {
  slug: string
  title: string
  description: string
  image: string
  date: string
  readTime: string
  content: any // MDX content
}

const POSTS_DIR = path.join(process.cwd(), 'content/blog')

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
    const fileContent = await fs.readFile(filePath, 'utf8')
    
    // Parse frontmatter and serialize MDX content
    const { frontmatter, content } = await parseMDX(fileContent)
    
    return {
      slug,
      ...frontmatter,
      content
    }
  } catch (error) {
    return null
  }
}

async function parseMDX(source: string) {
  const mdxSource = await serialize(source, {
    parseFrontmatter: true
  })
  
  return {
    frontmatter: mdxSource.frontmatter as Omit<BlogPost, 'slug' | 'content'>,
    content: mdxSource
  }
} 