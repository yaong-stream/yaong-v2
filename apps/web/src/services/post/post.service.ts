import { httpClient } from '@/lib';
import {
  CreatePostRequest,
  GetPostRequest,
  GetPostsRequest,
  POST_API_PATHS,
  PostActionResponse,
  PostResponse,
  UpdatePostRequest,
} from './post.types';

export async function createPost(data: CreatePostRequest): Promise<PostResponse> {
  const response = await httpClient.post<PostResponse>(POST_API_PATHS.POSTS, data);
  return response.data;
}

export async function getPosts(params: GetPostsRequest): Promise<PostResponse[]> {
  const response = await httpClient.get<PostResponse[]>(POST_API_PATHS.POSTS, { params });
  return response.data;
}

export async function getPost({ postId, streamer }: GetPostRequest): Promise<PostResponse> {
  const response = await httpClient.get<PostResponse>(POST_API_PATHS.POST(postId), {
    params: { streamer },
  });
  return response.data;
}

export async function updatePost(postId: number, data: UpdatePostRequest): Promise<PostResponse> {
  const response = await httpClient.patch<PostResponse>(POST_API_PATHS.POST(postId), data);
  return response.data;
}

export async function deletePost(postId: number): Promise<PostActionResponse> {
  const response = await httpClient.delete<PostActionResponse>(POST_API_PATHS.POST(postId));
  return response.data;
}

export async function likePost(postId: number): Promise<PostActionResponse> {
  const response = await httpClient.post<PostActionResponse>(POST_API_PATHS.POST_LIKE(postId));
  return response.data;
}

export async function unlikePost(postId: number): Promise<PostActionResponse> {
  const response = await httpClient.delete<PostActionResponse>(POST_API_PATHS.POST_LIKE(postId));
  return response.data;
} 