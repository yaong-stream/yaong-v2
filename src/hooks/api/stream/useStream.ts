import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { getStream, getLiveStreams } from '@/services';
import type { StreamDto } from '@/services';
import { streamKeys } from './keys';

export const useStream = (
  streamerName: string,
  options?: UseQueryOptions<StreamDto, Error, StreamDto, ReturnType<typeof streamKeys.detail>>
) => {
  return useQuery({
    queryKey: streamKeys.detail(streamerName),
    queryFn: () => getStream(streamerName),
    ...options,
  });
};

export const useLiveStreams = (
  options?: UseQueryOptions<StreamDto[], Error, StreamDto[], ReturnType<typeof streamKeys.lists>>
) => {
  return useQuery({
    queryKey: streamKeys.lists(),
    queryFn: getLiveStreams,
    ...options,
  });
}; 