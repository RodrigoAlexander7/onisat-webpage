import Link from 'next/link';
import { getNews, CreateNewsForm, NewsList } from '@/features/news';

export const dynamic = 'force-dynamic';

export default async function AdminNewsPage() {
  const news = await getNews();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Administrar Noticias
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Crea y gestiona las noticias del sitio
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            >
              Ver sitio
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Create news form */}
          <section>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-xl font-semibold text-gray-900">
                Crear nueva noticia
              </h2>
              <CreateNewsForm />
            </div>
          </section>

          {/* News list */}
          <section>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Noticias publicadas
                </h2>
                <span className="rounded-full bg-onisat-blue/10 px-3 py-1 text-sm font-medium text-onisat-blue">
                  {news.length} {news.length === 1 ? 'noticia' : 'noticias'}
                </span>
              </div>
              <NewsList initialNews={news} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
