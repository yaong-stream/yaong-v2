export const streamKeys = {
  all: ['streams'] as const,
  followers: ()=> [...streamKeys.all, 'followers'] as const,
  lists: () => [...streamKeys.all, 'list'] as const,
  list: (filters: Record<string, unknown>) => [...streamKeys.lists(), { filters }] as const,
  details: () => [...streamKeys.all, 'detail'] as const,
  detail: (streamerName: string) => [...streamKeys.details(), streamerName] as const,
}; 