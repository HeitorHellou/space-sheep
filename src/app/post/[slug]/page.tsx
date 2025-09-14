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
      <header className="mb-8 border-b-2 border-black pb-4">
        <h1 className={`font-ui text-2xl md:text-3xl font-bold mb-3 leading-tight`}>
          {post.title}
        </h1>
        
        <div className="text-sm text-gray-600 font-mono">
          <span className="font-semibold">{post.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.date}>{post.date}</time>
        </div>
      </header>
      
      <div className="prose mt-8">
        <Markdown>{post.content}</Markdown>
      </div>
      
      <footer className="mt-12 pt-6 border-t border-gray-300">
        <div className="text-xs text-gray-500 font-mono">
          <p>← <a href="/" className="hover:underline">Back to posts</a></p>
        </div>
      </footer>
    </article>
  );
}