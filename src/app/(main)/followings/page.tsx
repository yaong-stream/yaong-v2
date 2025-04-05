'use client';

import {
  StreamList,
} from './_components/stream-list';
import {
  Loader2,
} from 'lucide-react';
import {
  useFollowings,
} from '@/hooks/api';

export default function FollowingsPage() {
  const { isLoading, data: followings } = useFollowings();

  return (
    <div className="container py-6 px-4 mx-auto">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            팔로우한 스트림
          </h1>
          <p className="text-sm text-muted-foreground">
            팔로우한 스트리머의 라이브 방송을 확인하세요
          </p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-[400px]">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <StreamList followings={followings || []} />
        )}
      </div>
    </div>
  );
} 