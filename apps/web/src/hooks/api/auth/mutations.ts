import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { UseMutationOptions } from '@tanstack/react-query';
import {
  login,
  signin,
  signout,
  logoutOtherDevices,
  reissueAccessToken,
  reissueRefreshToken,
  verifyEmail,
} from '@/services';
import type {
  LoginRequest,
  TokenResponse,
  RefreshTokenRequest,
  VerifyEmailRequest
} from '@/services';
import { authKeys } from './keys';

export const useLogin = (
  options?: UseMutationOptions<TokenResponse, Error, LoginRequest>
) => {
  return useMutation({
    mutationFn: login,
    ...options,
  });
};

export const useSignin = (
  options?: UseMutationOptions<void, Error, LoginRequest>
) => {
  return useMutation({
    mutationFn: signin,
    ...options,
  });
};

export const useSignout = (
  options?: UseMutationOptions<{ success: boolean }, Error, void>
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: signout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    ...options,
  });
};

export const useLogoutOtherDevices = (
  options?: UseMutationOptions<{ success: boolean }, Error, string[]>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutOtherDevices,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.sessions() });
    },
    ...options,
  });
};

export const useReissueAccessToken = (
  options?: UseMutationOptions<TokenResponse, Error, RefreshTokenRequest>
) => {
  return useMutation({
    mutationFn: reissueAccessToken,
    ...options,
  });
};

export const useReissueRefreshToken = (
  options?: UseMutationOptions<TokenResponse, Error, RefreshTokenRequest>
) => {
  return useMutation({
    mutationFn: reissueRefreshToken,
    ...options,
  });
};

export const useVerifyEmail = (
  options?: UseMutationOptions<{ success: boolean }, Error, VerifyEmailRequest>
) => {
  return useMutation({
    mutationFn: verifyEmail,
    ...options,
  });
};