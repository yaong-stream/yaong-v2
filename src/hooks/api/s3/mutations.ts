import {
  createPresignedUrl,
  CreatePresignedUrlRequest,
  CreatePresignedUrlResponse,
  uploadFile,
  UploadFileRequest,
} from "@/services";
import {
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";

export const useCreatePresignedUrl = (
  options?: UseMutationOptions<CreatePresignedUrlResponse, Error, CreatePresignedUrlRequest>,
) => {
  return useMutation({
    mutationFn: createPresignedUrl,
    ...options,
  });
};

export const useUploadFile = (
  options?: UseMutationOptions<boolean, Error, UploadFileRequest>,
) => {
  return useMutation({
    mutationFn: uploadFile,
    ...options,
  });
};
