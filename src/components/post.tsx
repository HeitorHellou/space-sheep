import Image from "next/image";

interface PostProps {
  title: string;
  author: string;
  date: string;
  content: React.ReactNode;
}

interface PostMediaProps {
  src: string;
  alt: string;
  type: "image" | "gif" | "video";
  caption?: string;
  width?: number;
  height?: number;
}

export function PostMedia({ src, alt, type, caption, width = 600, height = 400 }: PostMediaProps) {
  const mediaContent = () => {
    switch (type) {
      case "video":
        return (
          <video 
            controls 
            className="w-full h-auto rounded border-2 border-black"
            width={width}
            height={height}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "gif":
      case "image":
        return (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto rounded border-2 border-black"
          />
        );
      default:
        return null;
    }
  };

  return (
    <figure className="my-6">
      {mediaContent()}
      {caption && (
        <figcaption className="text-xs text-gray-600 mt-2 font-mono italic text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function PostContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose prose-sm max-w-none font-mono text-gray-800 leading-relaxed">
      {children}
    </div>
  );
}

export function Post({ title, author, date, content }: PostProps) {
  return (
    <article className="max-w-4xl mx-auto p-4">
      <header className="mb-8 border-b-2 border-black pb-4">
        <h1 className={`font-ui text-2xl md:text-3xl font-bold mb-3 leading-tight`}>
          {title}
        </h1>
        
        <div className="text-sm text-gray-600 font-mono">
          <span className="font-semibold">{author}</span>
          <span className="mx-2">•</span>
          <time dateTime={date}>{date}</time>
        </div>
      </header>

      <PostContent>
        {content}
      </PostContent>

      <footer className="mt-12 pt-6 border-t border-gray-300">
        <div className="text-xs text-gray-500 font-mono">
          <p>← <a href="/" className="hover:underline">Back to posts</a></p>
        </div>
      </footer>
    </article>
  );
}