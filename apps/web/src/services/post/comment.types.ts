import { Member } from '../member/member.types';

export interface CreateCommentRequest {
  content: string;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface GetCommentsRequest {
  lastId?: number;
  limit?: number;
}

export interface GetRepliesRequest {
  firstId?: number;
  limit?: number;
}

export interface CommentResponse {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string | null;
  member: Member;
  likeCount: number;
  replyCount: number;
}

export interface ReplyResponse {
  id: number;
  content: string;
  createdAt: string;
  likeCount: number;
  updatedAt: string | null;
  member: Member;
}

export interface CommentActionResponse {
  success: boolean;
}

export const COMMENT_API_PATHS = {
  COMMENTS: (postId: number) => `/api/v1/posts/${postId}/comments`,
  COMMENT: (postId: number, commentId: number) => `/api/v1/posts/${postId}/comments/${commentId}`,
  COMMENT_LIKE: (postId: number, commentId: number) => `/api/v1/posts/${postId}/comments/${commentId}/like`,
  REPLIES: (postId: number, commentId: number) => `/api/v1/posts/${postId}/comments/${commentId}/replies`,
  REPLY: (postId: number, commentId: number, replyId: number) => `/api/v1/posts/${postId}/comments/${commentId}/replies/${replyId}`,
} as const; 