import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login, logout, logoutOtherDevices, verify } from '@/services/auth/auth.service';
import type {
  LoginRequest,
  LogoutOtherDevicesRequest,
  VerifyEmailRequest,
} from '@/services/auth/auth.types';
import { authKeys } from './keys';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: verify,
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};

export const useLogoutOtherDevices = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutOtherDevices,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: authKeys.sessions() });
    },
  });
}; 