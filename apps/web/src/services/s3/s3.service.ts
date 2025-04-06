import {
  httpClient,
} from "@/lib";
import {
  CreatePresignedUrlRequest,
  CreatePresignedUrlResponse,
  S3_API_PATHS,
  UploadFileRequest,
} from "./s3.types";

export async function createPresignedUrl(data: CreatePresignedUrlRequest): Promise<CreatePresignedUrlResponse> {
  const response = await httpClient.post<CreatePresignedUrlResponse>(S3_API_PATHS.CREATE_PRESIGNED_URL, data);
  return response.data;
}

export async function uploadFile(data: UploadFileRequest): Promise<boolean> {
  const response = await httpClient.put(data.presignedUrl, data.file, {
    headers: {
      "Content-Type": data.file.type,
    },
  });
  return response.status === 200;
}
