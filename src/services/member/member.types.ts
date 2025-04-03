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

export interface Member {
  id: number;
  nickname: string;
  profileImage: string;
}

export const MEMBER_API_PATHS = {
  SIGNUP: '/api/v1/members/signup',
  WITHDRAW: '/api/v1/members/withdraw',
  ME: '/api/v1/members',
} as const;
