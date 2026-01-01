/**
 * News entity type matching backend model
 */
export interface News {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * DTO for creating a new news article
 */
export interface CreateNewsDto {
  title: string;
  content: string;
}

/**
 * Response type for news actions
 */
export interface NewsActionResponse {
  success: boolean;
  data?: News;
  error?: string;
}
