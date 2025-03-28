import { Member } from '../member/member.types';

export interface CreatePostRequest {
  content: string;
}

export interface UpdatePostRequest {
  content: string;
}

export interface GetPostsRequest {
  streamer: string;
  lastId?: number;
  limit?: number;
}

export interface GetPostRequest {
  postId: number;
  streamer: string;
}

export interface PostResponse {
  id: number;
  content: string;
  likeCount: number;
  member: Member;
  createdAt: string;
  updatedAt: string;
}

export interface PostActionResponse {
  success: boolean;
}

export const POST_API_PATHS = {
  POSTS: '/api/v1/posts',
  POST: (postId: number) => `/api/v1/posts/${postId}`,
  POST_LIKE: (postId: number) => `/api/v1/posts/${postId}/like`,
} as const; 