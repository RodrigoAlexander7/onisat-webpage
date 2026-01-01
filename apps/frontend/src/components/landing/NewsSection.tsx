import Link from 'next/link';
import NewsCard from './NewsCard';
import { getNews } from '@/features/news';

export default async function NewsSection() {
  // Fetch news from the backend (limit to 3 for the landing page)
  const news = await getNews(3);

  return (
    <section id="noticias" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Últimas Actualizaciones
          </h2>
          <Link
            href="/noticias"
            className="group inline-flex items-center gap-2 text-base font-semibold text-onisat-blue transition-colors hover:text-onisat-navy"
          >
            Ver todas las publicaciones
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* News Grid */}
        {news.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                createdAt={item.createdAt}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-gray-200 bg-white p-12 text-center">
            <p className="text-gray-500">
              No hay noticias disponibles en este momento.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
