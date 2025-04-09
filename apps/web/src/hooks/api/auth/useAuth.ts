import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { getActiveSessions } from '@/services';
import type { ActiveSession } from '@/services';
import { authKeys } from './keys';

export const useActiveSessions = (
  options?: UseQueryOptions<ActiveSession[], Error, ActiveSession[], ReturnType<typeof authKeys.sessions>>
) => {
  return useQuery({
    queryKey: authKeys.sessions(),
    queryFn: getActiveSessions,
    ...options,
  });
}; 