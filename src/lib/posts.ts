import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  slug: string;
  title: string;
  date: string;
  content: string;
  excerpt?: string;
};

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fn => fn.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      
      return {
        slug,
        title: data.title || slug,
        date: data.date || fileName.substring(0, 10),
        excerpt: data.excerpt || content.substring(0, 150) + '...',
        content
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post | undefined {
  const posts = getPosts();
  return posts.find(post => post.slug === slug);
}
