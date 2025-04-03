export const memberKey = {
  all: ['members'] as const,
  me: () => [...memberKey.all, 'me'] as const,
} as const;
