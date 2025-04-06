'use client';

import { ProfileHeader } from './_components/profile-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useMe } from '@/hooks/api/member/useMember';
import { Loader2 } from 'lucide-react';
import { FollowingStreams } from '@/components/stream/following-streams';
import { ChangePasswordDialog } from './_components/change-password-dialog';
import { DeactivateAccountDialog } from './_components/deactivate-account-dialog';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function MyPage() {
  const { data: user, isLoading } = useMe();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)]">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/10">
      <div className="container mx-auto max-w-5xl py-6 px-4 space-y-6">
        <ProfileHeader member={user} />
        <Tabs defaultValue="followings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="followings">팔로우 중인 스트리머</TabsTrigger>
            <TabsTrigger value="history">시청 기록</TabsTrigger>
            <TabsTrigger value="clips">클립</TabsTrigger>
            <TabsTrigger value="security">보안</TabsTrigger>
          </TabsList>
          <TabsContent value="followings" className="space-y-4">
            <FollowingStreams />
          </TabsContent>
          <TabsContent value="history">
            <div className="text-center text-muted-foreground">
              준비 중인 기능입니다.
            </div>
          </TabsContent>
          <TabsContent value="clips">
            <div className="text-center text-muted-foreground">
              준비 중인 기능입니다.
            </div>
          </TabsContent>
          <TabsContent value="security">
            <Card className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold mb-1">비밀번호</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    계정 보안을 위해 정기적으로 비밀번호를 변경하는 것이 좋습니다.
                  </p>
                  <ChangePasswordDialog />
                </div>
                <Separator />
                <div>
                  <h2 className="text-lg font-semibold mb-1">계정 비활성화</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    계정을 비활성화하면 모든 데이터가 삭제되며 이 작업은 되돌릴 수 없습니다.
                  </p>
                  <DeactivateAccountDialog />
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 