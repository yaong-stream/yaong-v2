import { httpClient } from '@/lib';
import {
  ActiveSession,
  AUTH_API_PATHS,
  LoginRequest,
  LogoutOtherDevicesRequest,
  LogoutResponse,
  RefreshTokenRequest,
  TokenResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from './auth.types';

export async function login(data: LoginRequest): Promise<TokenResponse> {
  const response = await httpClient.post<TokenResponse>(AUTH_API_PATHS.LOGIN, data);
  return response.data;
}

export async function verify(data: VerifyEmailRequest): Promise<VerifyEmailResponse> {
  const response = await httpClient.get<VerifyEmailResponse>(AUTH_API_PATHS.VERIFY, {
    params: data,
  });
  return response.data;
}

export async function reissueAccessToken(data: RefreshTokenRequest): Promise<TokenResponse> {
  const response = await httpClient.post<TokenResponse>(AUTH_API_PATHS.ACCESS_TOKEN, data);
  return response.data;
}

export async function reissueRefreshToken(data: RefreshTokenRequest): Promise<TokenResponse> {
  const response = await httpClient.post<TokenResponse>(AUTH_API_PATHS.REFRESH_TOKEN, data);
  return response.data;
}

export async function getActiveSessions(): Promise<ActiveSession[]> {
  const response = await httpClient.get<ActiveSession[]>(AUTH_API_PATHS.SESSIONS);
  return response.data;
}

export async function logout(): Promise<LogoutResponse> {
  const response = await httpClient.post<LogoutResponse>(AUTH_API_PATHS.LOGOUT);
  return response.data;
}

export async function logoutOtherDevices(data: LogoutOtherDevicesRequest): Promise<LogoutResponse> {
  const response = await httpClient.post<LogoutResponse>(AUTH_API_PATHS.LOGOUT_OTHER, null, {
    params: { device_ids: data.deviceIds },
  });
  return response.data;
} 