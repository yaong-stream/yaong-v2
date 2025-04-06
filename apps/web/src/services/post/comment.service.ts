import { httpClient } from '@/lib';
import {
  COMMENT_API_PATHS,
  CommentActionResponse,
  CommentResponse,
  CreateCommentRequest,
  GetCommentsRequest,
  GetRepliesRequest,
  ReplyResponse,
  UpdateCommentRequest,
} from './comment.types';

export async function createComment(
  postId: number,
  data: CreateCommentRequest,
): Promise<CommentResponse> {
  const response = await httpClient.post<CommentResponse>(COMMENT_API_PATHS.COMMENTS(postId), data);
  return response.data;
}

export async function getComments(
  postId: number,
  params: GetCommentsRequest,
): Promise<CommentResponse[]> {
  const response = await httpClient.get<CommentResponse[]>(COMMENT_API_PATHS.COMMENTS(postId), {
    params,
  });
  return response.data;
}

export async function updateComment(
  postId: number,
  commentId: number,
  data: UpdateCommentRequest,
): Promise<CommentResponse> {
  const response = await httpClient.patch<CommentResponse>(
    COMMENT_API_PATHS.COMMENT(postId, commentId),
    data,
  );
  return response.data;
}

export async function deleteComment(
  postId: number,
  commentId: number,
): Promise<CommentActionResponse> {
  const response = await httpClient.delete<CommentActionResponse>(
    COMMENT_API_PATHS.COMMENT(postId, commentId),
  );
  return response.data;
}

export async function createReply(
  postId: number,
  commentId: number,
  data: CreateCommentRequest,
): Promise<ReplyResponse> {
  const response = await httpClient.post<ReplyResponse>(
    COMMENT_API_PATHS.REPLIES(postId, commentId),
    data,
  );
  return response.data;
}

export async function getReplies(
  postId: number,
  commentId: number,
  params: GetRepliesRequest,
): Promise<ReplyResponse[]> {
  const response = await httpClient.get<ReplyResponse[]>(
    COMMENT_API_PATHS.REPLIES(postId, commentId),
    { params },
  );
  return response.data;
}

export async function updateReply(
  postId: number,
  commentId: number,
  replyId: number,
  data: UpdateCommentRequest,
): Promise<ReplyResponse> {
  const response = await httpClient.patch<ReplyResponse>(
    COMMENT_API_PATHS.REPLY(postId, commentId, replyId),
    data,
  );
  return response.data;
}

export async function likeComment(
  postId: number,
  commentId: number,
): Promise<CommentActionResponse> {
  const response = await httpClient.post<CommentActionResponse>(
    COMMENT_API_PATHS.COMMENT_LIKE(postId, commentId),
  );
  return response.data;
}

export async function unlikeComment(
  postId: number,
  commentId: number,
): Promise<CommentActionResponse> {
  const response = await httpClient.delete<CommentActionResponse>(
    COMMENT_API_PATHS.COMMENT_LIKE(postId, commentId),
  );
  return response.data;
} 