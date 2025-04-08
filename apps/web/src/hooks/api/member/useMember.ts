import { getMe } from '@/services';
import { memberKey } from '@/hooks/api/member/key';
import { useQuery } from '@tanstack/react-query';

export const useMe = ()=> {
  return useQuery({
    queryKey: memberKey.me(),
    queryFn: ()=> getMe(),
    retry: false,
  });
};
