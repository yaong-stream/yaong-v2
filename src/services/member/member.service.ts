import { httpClient } from '@/lib';
import {
  MEMBER_API_PATHS,
  MemberInfoResponse,
  SignupRequest,
  SignupResponse,
  UpdateMeRequest,
  UpdateMeResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  WithdrawRequest,
  WithdrawResponse,
} from './member.types';

export async function signup(data: SignupRequest): Promise<SignupResponse> {
  const response = await httpClient.post<SignupResponse>(MEMBER_API_PATHS.SIGNUP, data);
  return response.data;
}

export async function withdraw(data: WithdrawRequest): Promise<WithdrawResponse> {
  const response = await httpClient.post<WithdrawResponse>(MEMBER_API_PATHS.WITHDRAW, data);
  return response.data;
}

export async function getMe() {
  const response = await httpClient.get<MemberInfoResponse>(MEMBER_API_PATHS.ME);
  return response.data;
}

export async function updateMe(data: UpdateMeRequest): Promise<UpdateMeResponse> {
  const response = await httpClient.patch<UpdateMeResponse>(MEMBER_API_PATHS.ME, data);
  return response.data;
}

export async function updatePassword(data: UpdatePasswordRequest): Promise<UpdatePasswordResponse> {
  const response = await httpClient.patch<UpdatePasswordResponse>(MEMBER_API_PATHS.PASSWORD, data);
  return response.data;
}
