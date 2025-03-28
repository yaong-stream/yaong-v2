import { useMutation } from '@tanstack/react-query';
import { signup, withdraw } from '@/services/member/member.service';
import type { SignupRequest, WithdrawRequest } from '@/services/member/member.types';

export const useSignup = () => {
  return useMutation({
    mutationFn: signup,
  });
};

export const useWithdraw = () => {
  return useMutation({
    mutationFn: withdraw,
  });
}; 