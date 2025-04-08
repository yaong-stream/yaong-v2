import { httpClient } from '@/lib';
import { CATEGORY_API_PATHS, CategoryDto } from './category.types';

/**
 * 카테고리 목록을 조회합니다.
 * @returns 카테고리 목록
 */
export async function getCategories(): Promise<CategoryDto[]> {
  const response = await httpClient.get<CategoryDto[]>(CATEGORY_API_PATHS.GET_CATEGORIES);
  return response.data;
} 