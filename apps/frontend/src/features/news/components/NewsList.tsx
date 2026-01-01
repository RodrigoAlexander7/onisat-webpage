'use client';

import { useState } from 'react';
import { deleteNews } from '@/features/news';
import type { News } from '@/features/news';

interface NewsListProps {
  initialNews: News[];
}

export default function NewsList({ initialNews }: NewsListProps) {
  const [news, setNews] = useState<News[]>(initialNews);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de que deseas eliminar esta noticia?')) {
      return;
    }

    setDeletingId(id);
    const result = await deleteNews(id);

    if (result.success) {
      setNews((prev) => prev.filter((item) => item.id !== id));
    } else {
      alert(result.error || 'Error al eliminar la noticia');
    }

    setDeletingId(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (news.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
        <p className="text-gray-500">No hay noticias publicadas aún.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {news.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mb-3 line-clamp-2 text-sm text-gray-600">
                {item.content}
              </p>
              <time className="text-xs text-gray-400">
                {formatDate(item.createdAt)}
              </time>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              disabled={deletingId === item.id}
              className="shrink-0 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {deletingId === item.id ? (
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                'Eliminar'
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
