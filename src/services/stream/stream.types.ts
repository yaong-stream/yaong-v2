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
  category?: Category;
  streamer: Member;
}

export interface  Category {
  id: number;
  name: string;
  thumbnailImage: string;
}

export interface UpdateStreamInfoRequest {
  name: string;
  description: string;
}

export interface FollowingsResponse {
  id: number;
  stream: StreamDto;
}

export interface IsFollowingResponse {
  isFollowing: boolean;
}
