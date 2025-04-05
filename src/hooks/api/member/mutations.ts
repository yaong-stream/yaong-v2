import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { signup, withdraw } from '@/services/member/member.service';
import { SignupRequest, SignupResponse } from '@/services';

export const useSignup = (
  options?: UseMutationOptions<SignupResponse, Error, SignupRequest>
) => {
  return useMutation({
    mutationFn: signup,
    ...options,
  });
};

export const useWithdraw = () => {
  return useMutation({
    mutationFn: withdraw,
  });
};
