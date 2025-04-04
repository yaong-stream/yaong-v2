import { httpClient } from '@/lib';
import { IsFollowingResponse, StreamDto, UpdateStreamInfoRequest } from './stream.types';

const STREAM_API_PATH = '/api/v1/streams';

export async function enableStream(): Promise<{ success: boolean }> {
  const { data } = await httpClient.post(`${STREAM_API_PATH}/enable`);
  return data;
}

export async function disableStream(): Promise<{ success: boolean }> {
  const { data } = await httpClient.delete(`${STREAM_API_PATH}/disable`);
  return data;
}

export async function updateStreamInfo(info: UpdateStreamInfoRequest): Promise<StreamDto> {
  const { data } = await httpClient.patch(STREAM_API_PATH, info);
  return data;
}

export async function getLiveStreams(): Promise<StreamDto[]> {
  const { data } = await httpClient.get(STREAM_API_PATH);
  return data;
}

export async function getStream(streamerName: string): Promise<StreamDto> {
  const { data } = await httpClient.get(`${STREAM_API_PATH}/info?streamer_name=${streamerName}`);
  return data;
}

export async function getFollowings() {
  const { data } = await httpClient.get(`${STREAM_API_PATH}/followings`);
  return data;
}

export async function isFollowingStream(streamId: number) {
  const { data } = await httpClient.get<IsFollowingResponse>(`${STREAM_API_PATH}/${streamId}/following`);
  return data;
}
