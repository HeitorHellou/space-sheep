import { getPost, getPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <time className="text-gray-600">{post.date}</time>
      
      <div className="prose mt-8">
        <Markdown>{post.content}</Markdown>
      </div>
      
      <a href="/" className="block mt-8 text-blue-600">← Back</a>
    </article>
  );
}