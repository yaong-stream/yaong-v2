import { useQuery } from '@tanstack/react-query';
import { getPost, getPosts } from '@/services/post/post.service';
import type { GetPostsRequest } from '@/services/post/post.types';
import { postKeys } from './keys';

export const usePosts = (params: GetPostsRequest) => {
  return useQuery({
    queryKey: postKeys.list({ streamer: params.streamer }),
    queryFn: () => getPosts(params),
  });
};

export const usePost = (postId: number, streamer: string) => {
  return useQuery({
    queryKey: postKeys.detail(postId, streamer),
    queryFn: () => getPost({ postId, streamer }),
  });
}; 