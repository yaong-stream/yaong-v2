import { httpClient } from '@/lib';
import {
  LoginRequest,
  TokenResponse,
  RefreshTokenRequest,
  ActiveSession,
  VerifyEmailRequest,
  LogoutResponse,
} from './auth.types';

const AUTH_API_PATH = '/api/v1/auth';

export async function login(data: LoginRequest): Promise<TokenResponse> {
  const { data: response } = await httpClient.post(`${AUTH_API_PATH}/login`, data);
  return response;
}

export async function signin(data: LoginRequest): Promise<void> {
  const { data: response } = await httpClient.post(`${AUTH_API_PATH}/signin`, data);
  return response;
}

export async function signout(): Promise<LogoutResponse> {
  const { data } = await httpClient.post(`${AUTH_API_PATH}/signout`);
  return data;
}

export async function reissueAccessToken(data: RefreshTokenRequest): Promise<TokenResponse> {
  const { data: response } = await httpClient.post(`${AUTH_API_PATH}/accesstoken`, data);
  return response;
}

export async function reissueRefreshToken(data: RefreshTokenRequest): Promise<TokenResponse> {
  const { data: response } = await httpClient.post(`${AUTH_API_PATH}/refreshtoken`, data);
  return response;
}

export async function getActiveSessions(): Promise<ActiveSession[]> {
  const { data } = await httpClient.get(`${AUTH_API_PATH}/sessions`);
  return data;
}

export async function logoutOtherDevices(deviceIds: string[]): Promise<{ success: boolean }> {
  const { data } = await httpClient.post(`${AUTH_API_PATH}/logout/other`, null, {
    params: { device_ids: deviceIds },
  });
  return data;
}

export async function logout(): Promise<{ success: boolean }> {
  const { data } = await httpClient.post(`${AUTH_API_PATH}/logout`);
  return data;
}

export async function verifyEmail(params: VerifyEmailRequest): Promise<{ success: boolean }> {
  const { data } = await httpClient.get(`${AUTH_API_PATH}/verify`, { params });
  return data;
}