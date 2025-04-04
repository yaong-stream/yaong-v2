import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { CategoryDto } from '@/services';
import { getCategories } from '@/services';
import { categoryKeys } from './keys';

export const useCategories = (
  options?: UseQueryOptions<CategoryDto[], Error>
) => {
  return useQuery({
    queryKey: categoryKeys.lists(),
    queryFn: getCategories,
    ...options,
  });
}; 