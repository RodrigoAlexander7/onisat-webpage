'use client';

import { useState } from 'react';
import { createNews } from '@/features/news';

interface CreateNewsFormProps {
  onSuccess?: () => void;
}

export default function CreateNewsForm({ onSuccess }: CreateNewsFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const result = await createNews({ title, content });

    if (result.success) {
      setSuccess(true);
      setTitle('');
      setContent('');
      onSuccess?.();
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setError(result.error || 'Error desconocido');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error message */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Success message */}
      {success && (
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-600">
          ¡Noticia creada exitosamente!
        </div>
      )}

      {/* Title field */}
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Título
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ingresa el título de la noticia"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-onisat-blue focus:outline-none focus:ring-2 focus:ring-onisat-blue/20"
          required
          minLength={3}
          disabled={loading}
        />
      </div>

      {/* Content field */}
      <div>
        <label
          htmlFor="content"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          Contenido
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe el contenido de la noticia..."
          rows={8}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 text-gray-900 focus:border-onisat-blue focus:outline-none focus:ring-2 focus:ring-onisat-blue/20"
          required
          minLength={10}
          disabled={loading}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-onisat-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-onisat-navy focus:outline-none focus:ring-2 focus:ring-onisat-blue/50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
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
            Creando...
          </span>
        ) : (
          'Crear Noticia'
        )}
      </button>
    </form>
  );
}
