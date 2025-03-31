export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  accessToken: string;
  accessTokenExpireDate: string;
  refreshToken: string;
  refreshTokenExpireDate: string;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface ActiveSession {
  deviceId: string;
  ipAddress: string;
  deviceType: string;
  browserName: string;
  browserVersion: string;
  loginAt: string;
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
}

export interface VerifyEmailResponse {
  success: boolean;
}

export interface LogoutResponse {
  success: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const AUTH_API_PATHS = {
  LOGIN: '/api/v1/auth/login',
  VERIFY: '/api/v1/auth/verify',
  ACCESS_TOKEN: '/api/v1/auth/accesstoken',
  REFRESH_TOKEN: '/api/v1/auth/refreshtoken',
  SESSIONS: '/api/v1/auth/sessions',
  LOGOUT: '/api/v1/auth/logout',
  LOGOUT_OTHER: '/api/v1/auth/logout/other',
} as const; 