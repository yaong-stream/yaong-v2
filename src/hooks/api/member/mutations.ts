import { useMutation } from '@tanstack/react-query';
import { signup, withdraw } from '@/services/member/member.service';

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
