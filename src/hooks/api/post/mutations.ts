import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  createPost,
  deletePost,
  likePost,
  unlikePost,
  updatePost,
} from '@/services/post/post.service';
import type { CreatePostRequest, UpdatePostRequest } from '@/services/post/post.types';
import { postKeys } from './keys';

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: postKeys.lists() });
    },
  });
};

export const useUpdatePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: UpdatePostRequest) => updatePost(postId, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: postKeys.detail(postId, '') });
    },
  });
};

export const useDeletePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.lists() });
    },
  });
};

export const useLikePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => likePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.detail(postId, '') });
    },
  });
};

export const useUnlikePost = (postId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => unlikePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: postKeys.detail(postId, '') });
    },
  });
}; 