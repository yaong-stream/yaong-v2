import { httpClient } from '@/lib';
import {
  Member,
  MEMBER_API_PATHS,
  SignupRequest,
  SignupResponse,
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
  const response = await httpClient.get<Member>(MEMBER_API_PATHS.ME);
  return response.data;
}
