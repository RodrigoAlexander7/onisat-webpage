import Link from 'next/link';
import NewsCard, { NewsCardProps } from './NewsCard';

// Mock data for news articles
const mockNews: NewsCardProps[] = [
  {
    id: '1',
    image: '/images/news/news-1.svg',
    title: 'ONISAT clasificado para la fase final del CanSat 2026',
    excerpt:
      'Nuestro equipo ha superado la fase de diseño preliminar y avanza hacia la construcción del prototipo funcional del satélite.',
    date: '15 de diciembre, 2025',
    category: 'Logros',
    slug: 'clasificacion-cansat-2026',
  },
  {
    id: '2',
    image: '/images/news/news-2.svg',
    title: 'Sistema de autogiro: innovación en el descenso controlado',
    excerpt:
      'Desarrollamos un novedoso sistema de autogiro que garantiza un descenso estable y controlado del CanSat, protegiendo la carga útil.',
    date: '10 de diciembre, 2025',
    category: 'Tecnología',
    slug: 'sistema-autogiro-descenso',
  },
  {
    id: '3',
    image: '/images/news/news-3.svg',
    title: 'Taller de fotografía estereoscópica en la Facultad de Ingeniería',
    excerpt:
      'Impartimos un taller sobre los principios de la fotografía 3D y su aplicación en misiones espaciales a estudiantes de la UNAM.',
    date: '5 de diciembre, 2025',
    category: 'Eventos',
    slug: 'taller-fotografia-estereoscopica',
  },
];

export default function NewsSection() {
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mockNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
}
