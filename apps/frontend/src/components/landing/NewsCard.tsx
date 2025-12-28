import Image from 'next/image';
import Link from 'next/link';

export interface NewsCardProps {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

export default function NewsCard({
  image,
  title,
  excerpt,
  date,
  category,
  slug,
}: NewsCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        {/* Category Badge */}
        <div className="absolute left-4 top-4">
          <span className="rounded-full bg-onisat-blue/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date */}
        <time className="mb-2 text-sm text-gray-500">{date}</time>

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900 transition-colors group-hover:text-onisat-blue">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/noticias/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-onisat-blue transition-colors hover:text-onisat-navy"
        >
          Leer más
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
