export interface SignupRequest {
  email: string;
  password: string;
  nickname: string;
}

export interface WithdrawRequest {
  password: string;
}

export interface SignupResponse {
  success: boolean;
}

export interface WithdrawResponse {
  success: boolean;
}

export interface UpdateMeRequest {
  nickname: string;
  profileImage: string;
}

export interface UpdateMeResponse {
  success: boolean;
}

export interface Member {
  id: number;
  nickname: string;
  profileImage: string;
}

export interface MemberInfoResponse {
  id: number;
  nickname: string;
  profileImage: string;
  email: string;
  isEmailVerified: boolean;
  createdAt: Date;
}

export interface UpdatePasswordRequest {
  previousPassword: string;
  password: string;
}

export interface UpdatePasswordResponse {
  success: boolean;
}

export const MEMBER_API_PATHS = {
  SIGNUP: '/api/v1/members/signup',
  WITHDRAW: '/api/v1/members/withdraw',
  ME: '/api/v1/members',
  PASSWORD: '/api/v1/members/password',
} as const;
