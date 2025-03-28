export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (params: { streamer: string }) => [...postKeys.lists(), params] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (postId: number, streamer: string) => [...postKeys.details(), { postId, streamer }] as const,
} as const; 