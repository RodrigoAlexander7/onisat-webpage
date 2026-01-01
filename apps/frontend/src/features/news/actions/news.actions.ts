'use server';

import { fetchAPI } from '@/lib/api-sever';
import { revalidatePath } from 'next/cache';
import type { News, CreateNewsDto, NewsActionResponse } from '../types';

/**
 * Fetches all news articles from the backend
 * Public endpoint - no authentication required
 */
export async function getNews(limit?: number): Promise<News[]> {
  try {
    const endpoint = limit ? `/news?limit=${limit}` : '/news';
    const news = await fetchAPI<News[]>(endpoint, {
      cache: 'no-store', // Always fetch fresh data
    });
    return news;
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
}

/**
 * Fetches a single news article by ID
 */
export async function getNewsById(id: string): Promise<News | null> {
  try {
    const news = await fetchAPI<News>(`/news/${id}`);
    return news;
  } catch (error) {
    console.error('Failed to fetch news by ID:', error);
    return null;
  }
}

/**
 * Creates a new news article
 * Protected endpoint - requires authentication
 */
export async function createNews(
  data: CreateNewsDto
): Promise<NewsActionResponse> {
  try {
    // Validate input
    if (!data.title || data.title.length < 3) {
      return {
        success: false,
        error: 'El título debe tener al menos 3 caracteres',
      };
    }

    if (!data.content || data.content.length < 10) {
      return {
        success: false,
        error: 'El contenido debe tener al menos 10 caracteres',
      };
    }

    const news = await fetchAPI<News>('/news', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    // Revalidate the news pages to show fresh data
    revalidatePath('/');
    revalidatePath('/admin/news');
    revalidatePath('/noticias');

    return {
      success: true,
      data: news,
    };
  } catch (error) {
    console.error('Failed to create news:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error al crear la noticia',
    };
  }
}

/**
 * Deletes a news article by ID
 * Protected endpoint - requires authentication
 */
export async function deleteNews(id: string): Promise<NewsActionResponse> {
  try {
    await fetchAPI<News>(`/news/${id}`, {
      method: 'DELETE',
    });

    // Revalidate the news pages
    revalidatePath('/');
    revalidatePath('/admin/news');
    revalidatePath('/noticias');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Failed to delete news:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Error al eliminar la noticia',
    };
  }
}
