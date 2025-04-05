'use client';

import Link from 'next/link';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Badge,
} from '@/components/ui/badge';
import {
  FollowingsResponse,
} from '@/services';

interface StreamListProps {
  followings: FollowingsResponse[];
}

export function StreamList({ followings }: StreamListProps) {
  if (followings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
        <p className="text-lg text-muted-foreground">현재 팔로우 중인 스트림이 없습니다.</p>
        <Link
          href="/browse"
          className="text-primary hover:text-primary/90 hover:underline"
        >
          스트리머 둘러보기
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {followings.map((following) => (
        <Link
          key={following.id}
          href={`/channels/${following.stream.streamer.nickname}`}
          className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors"
        >
          <Avatar className="w-16 h-16">
            <AvatarImage src={following.stream.streamer.profileImage} />
            <AvatarFallback>
              {following.stream.streamer.nickname.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-base font-semibold truncate">
                {following.stream.name}
              </h3>
              {following.stream.isLive && (
                <Badge
                  variant="destructive"
                  className="flex items-center gap-1"
                >
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  LIVE
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {following.stream.streamer.nickname}
            </p>
            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <Users className="w-4 h-4" />
              <span>{following.stream.viewerCount.toLocaleString()}</span>
            </div> */}
          </div>
        </Link>
      ))}
    </div>
  );
}
