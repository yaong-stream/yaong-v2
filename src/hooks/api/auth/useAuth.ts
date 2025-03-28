import { useQuery } from '@tanstack/react-query';
import { getActiveSessions } from '@/services/auth/auth.service';
import { authKeys } from './keys';

export const useActiveSessions = () => {
  return useQuery({
    queryKey: authKeys.sessions(),
    queryFn: getActiveSessions,
  });
}; 