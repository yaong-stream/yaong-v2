'use client';

import { BroadcastForm } from './_components/broadcast-form';
import { BroadcastPlayer } from './_components/broadcast-player';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Users, 
  MessageSquare, 
  Copy, 
  Eye, 
  Signal, 
  Timer,
  AlertCircle
} from 'lucide-react';

export default function BroadcastPage() {
  return (
    <div className="p-6 max-w-[1600px] mx-auto">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">방송 화면</h1>
            <p className="text-sm text-muted-foreground mt-1">
              실시간 방송 상태와 설정을 관리하세요
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg">
              <Signal className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">네트워크 상태: 양호</span>
            </div>
            <Badge variant="destructive" className="px-3 py-1">
              LIVE
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
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

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">스트림 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4" />
                    <span className="text-sm font-medium">스트림 키</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <code className="px-2 py-1 bg-background rounded text-sm">
                      xxxx-xxxx-xxxx-xxxx
                    </code>
                    <Button variant="ghost" size="icon">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Signal className="w-4 h-4" />
                    <span className="text-sm font-medium">서버 상태</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="text-sm">지연시간:</span>
                      <span className="text-sm font-medium">0.8s</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm">비트레이트:</span>
                      <span className="text-sm font-medium">6000kbps</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellow-500/10 rounded-lg">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">네트워크 상태</span>
                  </div>
                  <div className="text-sm text-yellow-500">
                    불안정한 네트워크가 감지되었습니다
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Tabs defaultValue="settings" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="settings" className="flex-1">
                  <Settings className="w-4 h-4 mr-2" />
                  설정
                </TabsTrigger>
                <TabsTrigger value="chat" className="flex-1">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  채팅
                </TabsTrigger>
                <TabsTrigger value="viewers" className="flex-1">
                  <Users className="w-4 h-4 mr-2" />
                  시청자
                </TabsTrigger>
              </TabsList>
              <TabsContent value="settings">
                <BroadcastForm />
              </TabsContent>
              <TabsContent value="chat">
                <Card>
                  <CardContent className="p-4">
                    <div className="h-[600px] flex items-center justify-center border-2 border-dashed rounded-lg">
                      <p className="text-muted-foreground">채팅 영역</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="viewers">
                <Card>
                  <CardContent className="p-4">
                    <div className="h-[600px] flex items-center justify-center border-2 border-dashed rounded-lg">
                      <p className="text-muted-foreground">시청자 목록</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
} 