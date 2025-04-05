'use client';

import { useState } from 'react';
import { BroadcastForm } from './_components/broadcast-form';
import { BroadcastPlayer } from './_components/broadcast-player';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronRight, Eye, MessageSquare, Timer, Users } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function BroadcastPage() {
  const [activePanel, setActivePanel] = useState<'chat' | 'viewers' | null>(null);

  const togglePanel = (panel: 'chat' | 'viewers') => {
    setActivePanel(activePanel === panel ? null : panel);
  };

  return (
    <div className="h-full relative">
      <div className={cn(
        'h-full transition-[padding] duration-300',
        activePanel !== null && 'pr-[400px]',
      )}>
        <ScrollArea className="h-full p-6">
          <div className="mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">방송 화면</h1>
                <p className="text-sm text-muted-foreground mt-1">
                  실시간 방송 상태와 설정을 관리하세요
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={activePanel === 'viewers' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => togglePanel('viewers')}
                >
                  <Users className="h-5 w-5" />
                </Button>
                <Button
                  variant={activePanel === 'chat' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => togglePanel('chat')}
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <BroadcastPlayer />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">실시간 시청자</p>
                      <p className="text-xl font-bold">127명</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Timer className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">방송 시간</p>
                      <p className="text-xl font-bold">02:34:15</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MessageSquare className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">채팅 수</p>
                      <p className="text-xl font-bold">2,145</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="w-full">
              <CardHeader>
                <CardTitle>방송 설정</CardTitle>
              </CardHeader>
              <CardContent>
                <BroadcastForm />
              </CardContent>
            </Card>
          </div>
        </ScrollArea>
      </div>

      <div
        className={cn(
          'fixed top-[64px] right-0 w-[400px] h-full bg-background border-l transition-transform duration-300',
          activePanel === null && 'translate-x-full',
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b flex items-center justify-between bg-background sticky top-0">
            <h2 className="font-semibold">
              {activePanel === 'chat' ? '실시간 채팅' : '시청자 목록'}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setActivePanel(null)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <div className="h-full flex items-center justify-center border-2 border-dashed rounded-lg">
              <p className="text-muted-foreground">
                {activePanel === 'chat' ? '채팅 영역' : '시청자 목록'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 