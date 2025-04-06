
export interface CreatePresignedUrlRequest {
  extension: string;
}

export interface CreatePresignedUrlResponse {
  presignedUrl: string;
  key: string;
}

export interface UploadFileRequest {
  presignedUrl: string;
  file: File;
}

export const S3_API_PATHS = {
  CREATE_PRESIGNED_URL: '/api/v1/s3',
} as const;
