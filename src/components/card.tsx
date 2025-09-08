import Link from "next/link";

interface CardProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  href: string;
  image?: React.ReactNode;
  className?: string;
}

export function Card({
  title,
  author,
  date,
  excerpt,
  href,
  image,
  className,
}: CardProps) {
  return (
    <Link href={href}>
      <article
        className={`h-full border-2 border-black rounded-lg p-3 hover:shadow-lg transition-shadow cursor-pointer ${className ?? ""}`}
      >
        {image && <div className="relative w-full h-24 mb-3">{image}</div>}

        <h2 className="font-display font-bold text-sm leading-tight mb-2 line-clamp-2">
          {title}
        </h2>

        <div className="text-xs text-gray-600 mb-2">
          <span>{author}</span> • <span>{date}</span>
        </div>

        <p className="font-mono text-xs leading-relaxed text-gray-700 line-clamp-3">
          {excerpt}
        </p>
      </article>
    </Link>
  );
}
