import { Member } from '../member/member.types';

export interface StreamInfo {
  name: string;
  description: string;
}

export interface StreamDto {
  id: number;
  name: string;
  description: string;
  thumbnailImage: string;
  isLive: boolean;
  streamKey: string;
  streamer: Member;
}

export interface UpdateStreamInfoRequest {
  name: string;
  description: string;
} 