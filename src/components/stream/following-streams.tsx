'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { useFollowings } from '@/hooks/api';
import { Loader2, UserX } from 'lucide-react';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function FollowingStreams() {
  const { data: followings, isLoading } = useFollowings();

  const onUnfollow = async (memberId: number) => {
    try {
      // TODO: API 연동
      console.log('언팔로우:', memberId);
    } catch (error) {
      console.error('언팔로우 실패:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!followings || followings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground mb-4">아직 팔로우한 스트리머가 없습니다.</p>
        <Link href="/browse">
          <Button>스트리머 찾아보기</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {followings.map((following) => (
        <Card key={following.id} className="p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={following.stream.streamer.profileImage} />
              <AvatarFallback>
                {following.stream.streamer.nickname.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <Link
                href={`/channels/${following.stream.streamer.nickname}`}
                className="font-semibold hover:underline truncate block"
              >
                {following.stream.streamer.nickname}
              </Link>
              <p className="text-sm text-muted-foreground">
                {following.stream.isLive ? '🔴 라이브 중' : '오프라인'}
              </p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                >
                  <UserX className="h-5 w-5" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>팔로우 취소</AlertDialogTitle>
                  <AlertDialogDescription>
                    {following.stream.streamer.nickname} 님의 팔로우를 취소하시겠습니까?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>취소</AlertDialogCancel>
                  <AlertDialogAction
                    className={cn(
                      'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                    )}
                    onClick={() => onUnfollow(following.id)}
                  >
                    팔로우 취소
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </Card>
      ))}
    </div>
  );
} 