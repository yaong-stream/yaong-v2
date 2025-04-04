export interface CategoryDto {
  id: number;
  name: string;
  thumbnailImage: string;
}

export interface GetCategoriesResponse {
  categories: CategoryDto[];
}

export const CATEGORY_API_PATHS = {
  GET_CATEGORIES: '/api/v1/categories',
} as const; 