import { Kalam } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const kalam = Kalam({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface ArticleCardProps {
  image: string;
  title: string;
  datePublished: string;
  author: string;
  text: string;
  link: string;
  size?: 'small' | 'wide' | 'tall' | 'large';
}

export function ArticleCard({
  image,
  title,
  datePublished,
  author,
  text,
  link,
  size = 'small'
}: ArticleCardProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    wide: 'col-span-2 row-span-1', 
    tall: 'col-span-1 row-span-2',
    large: 'col-span-2 row-span-2'
  };

  return (
    <Link href={link}>
      <article className={`${kalam.className} ${sizeClasses[size]} border-2 border-black rounded-lg p-3 bg-white hover:shadow-lg transition-shadow cursor-pointer`}>
        <div className="relative w-full h-24 mb-3">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded border border-gray-300"
          />
        </div>
        
        <h2 className="font-bold text-sm leading-tight mb-2 line-clamp-2">
          {title}
        </h2>
        
        <div className="text-xs text-gray-600 mb-2">
          <span>{author}</span> • <span>{datePublished}</span>
        </div>
        
        <p className="text-xs leading-relaxed text-gray-700 line-clamp-3">
          {text}
        </p>
      </article>
    </Link>
  );
}