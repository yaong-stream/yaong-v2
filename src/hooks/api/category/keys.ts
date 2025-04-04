export const categoryKeys = {
  all: ['category'] as const,
  lists: () => [...categoryKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...categoryKeys.lists(), { filters }] as const,
} as const; 