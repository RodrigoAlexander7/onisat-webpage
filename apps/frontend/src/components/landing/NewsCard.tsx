import Link from 'next/link';

export interface NewsCardProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

/**
 * Formats a date string to a readable format in Spanish
 */
function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Truncates content to create an excerpt
 */
function createExcerpt(content: string, maxLength: number = 150): string {
  if (content.length <= maxLength) return content;
  return content.slice(0, maxLength).trim() + '...';
}

export default function NewsCard({
  id,
  title,
  content,
  createdAt,
}: NewsCardProps) {
  const excerpt = createExcerpt(content);
  const formattedDate = formatDate(createdAt);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
      {/* Placeholder for image - using gradient background */}
      <div className="relative aspect-16/10 overflow-hidden bg-linear-to-br from-onisat-blue/20 to-onisat-navy/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-16 w-16 text-onisat-blue/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date */}
        <time className="mb-2 text-sm text-gray-500">{formattedDate}</time>

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
          href={`/noticias/${id}`}
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
