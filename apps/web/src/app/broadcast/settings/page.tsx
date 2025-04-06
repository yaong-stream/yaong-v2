'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { StreamSettings } from './_components/stream-settings';
import { ChatSettings } from './_components/chat-settings';
import { NotificationSettings } from './_components/notification-settings';

export default function SettingsPage() {
  return (
    <div className="p-6 mx-auto">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold">설정</h1>
          <p className="text-sm text-muted-foreground mt-1">
            방송과 관련된 모든 설정을 관리할 수 있습니다.
          </p>
        </div>

        <Tabs defaultValue="stream" className="space-y-6">
          <TabsList>
            <TabsTrigger value="stream">스트림 설정</TabsTrigger>
            <TabsTrigger value="chat">채팅 설정</TabsTrigger>
            <TabsTrigger value="notification">알림 설정</TabsTrigger>
          </TabsList>

          <TabsContent value="stream" className="space-y-4">
            <StreamSettings />
          </TabsContent>

          <TabsContent value="chat" className="space-y-4">
            <ChatSettings />
          </TabsContent>

          <TabsContent value="notification" className="space-y-4">
            <NotificationSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 