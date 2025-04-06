'use client';

import { FollowingStreams } from '@/components/stream/following-streams';

export default function FollowingsPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/10">
      <div className="container mx-auto max-w-5xl py-6 px-4 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            팔로우한 스트림
          </h1>
          <p className="text-sm text-muted-foreground">
            팔로우한 스트리머의 라이브 방송을 확인하세요
          </p>
        </div>
        <FollowingStreams />
      </div>
    </div>
  );
} 