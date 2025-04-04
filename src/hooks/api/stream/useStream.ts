import { useQuery } from '@tanstack/react-query';
import type { UseQueryOptions } from '@tanstack/react-query';
import { getStream, getLiveStreams, getFollowings, FollowingsResponse, isFollowingStream } from '@/services';
import type { StreamDto } from '@/services';
import { streamKeys } from './keys';

export const useStream = (
  streamerName: string,
  options?: UseQueryOptions<StreamDto, Error, StreamDto, ReturnType<typeof streamKeys.detail>>,
) => {
  return useQuery({
    queryKey: streamKeys.detail(streamerName),
    queryFn: () => getStream(streamerName),
    ...options,
  });
};

export const useLiveStreams = (
  options?: UseQueryOptions<StreamDto[], Error, StreamDto[], ReturnType<typeof streamKeys.lists>>,
) => {
  return useQuery({
    queryKey: streamKeys.lists(),
    queryFn: getLiveStreams,
    ...options,
  });
};

export const useFollowings = (
  options?: UseQueryOptions<FollowingsResponse[], Error, FollowingsResponse[], ReturnType<typeof streamKeys.followers>>,
) => {
  return useQuery({
    queryKey: streamKeys.followers(),
    queryFn: getFollowings,
    ...options,
  });
};

// export const useIsFollowingStream = (streamId: number,
//                                      options?: UseQueryOptions<FollowingsResponse[], Error, FollowingsResponse[], ReturnType<typeof streamKeys.lists>>
// ) => {
//   return useQuery({
//     queryKey: streamKeys.details(),
//     queryFn: isFollowingStream,
//   });
// };