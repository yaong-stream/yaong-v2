import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationOptions } from '@tanstack/react-query';
import { enableStream, disableStream, updateStreamInfo } from '@/services';
import type { StreamDto, UpdateStreamInfoRequest } from '@/services';
import { streamKeys } from './keys';

export const useEnableStream = (
  options?: UseMutationOptions<{ success: boolean }, Error, void>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: enableStream,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: streamKeys.all });
    },
    ...options,
  });
};

export const useDisableStream = (
  options?: UseMutationOptions<{ success: boolean }, Error, void>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: disableStream,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: streamKeys.all });
    },
    ...options,
  });
};

export const useUpdateStreamInfo = (
  options?: UseMutationOptions<StreamDto, Error, UpdateStreamInfoRequest>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateStreamInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: streamKeys.all });
    },
    ...options,
  });
}; 