import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  slug: string;
  colSpan: 1 | 2 | 3;
  title: string;
  date: string;
  author: string;
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
        colSpan: data.colspan,
        title: data.title || slug,
        date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }) : new Date().toISOString().split('T')[0],
        author: data.author,
        excerpt: data.excerpt || content.substring(0, 150).replace(/[#*_`]/g, '') + '...',
        content
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post | undefined {
  const posts = getPosts();
  return posts.find(post => post.slug === slug);
}