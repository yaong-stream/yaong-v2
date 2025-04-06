import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query';
import {
  signup,
  updateMe,
  withdraw,
  SignupRequest,
  SignupResponse,
  updatePassword,
  WithdrawResponse,
  WithdrawRequest,
} from '@/services';
import {
  memberKey,
} from './key';

export const useSignup = (
  options?: UseMutationOptions<SignupResponse, Error, SignupRequest>
) => {
  return useMutation({
    mutationFn: signup,
    ...options,
  });
};

export const useWithdraw = (
  options?: UseMutationOptions<WithdrawResponse, Error, WithdrawRequest>
) => {
  return useMutation({
    mutationFn: withdraw,
    ...options,
  });
};

export const useUpdateMe = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateMe,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: memberKey.me() });
    },
  });
};

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword,
  });
};
