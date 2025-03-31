import { MemberDto } from '../member/member.types';

export interface StreamInfo {
  name: string;
  description: string;
}

export interface StreamDto {
  name: string;
  description: string;
  thumbnailImage: string;
  isLive: boolean;
  streamer: MemberDto;
}

export interface UpdateStreamInfoRequest {
  name: string;
  description: string;
} 