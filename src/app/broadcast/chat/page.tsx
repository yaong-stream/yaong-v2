'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MessageSquare,
  Shield,
  Clock,
  Search,
  Ban,
  UserX,
  MessageSquareOff
} from 'lucide-react';

// 임시 채팅 데이터
const chatMessages = [
  {
    id: 1,
    user: '시청자123',
    message: '안녕하세요! 오늘도 좋은 방송 감사합니다 😊',
    time: '1분 전',
    type: 'normal'
  },
  {
    id: 2,
    user: '매니저456',
    message: '채팅 규칙 안내드립니다.',
    time: '3분 전',
    type: 'mod',
    badge: '매니저'
  },
  {
    id: 3,
    user: '구독자789',
    message: '새로운 구독자입니다!',
    time: '5분 전',
    type: 'subscription',
    badge: '구독자'
  }
];

export default function ChatPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">채팅 관리</h1>
            <p className="text-sm text-muted-foreground mt-1">
              실시간 채팅을 모니터링하고 관리하세요.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Clock className="w-4 h-4 mr-2" />
              슬로우 모드
            </Button>
            <Button variant="outline" size="sm">
              <Shield className="w-4 h-4 mr-2" />
              구독자 전용
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquareOff className="w-4 h-4 mr-2" />
              채팅 비활성화
            </Button>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
          {/* 채팅창 */}
          <Card className="lg:col-span-3">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle>실시간 채팅</CardTitle>
                <div className="flex items-center gap-2">
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="필터 선택" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">전체 메시지</SelectItem>
                      <SelectItem value="mod">매니저 메시지</SelectItem>
                      <SelectItem value="sub">구독자 메시지</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="채팅 검색"
                      className="pl-8 w-[200px]"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[calc(100vh-20rem)] overflow-y-auto">
                <div className="divide-y">
                  {chatMessages.map((chat) => (
                    <div key={chat.id} className="p-4 hover:bg-muted/50">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{chat.user}</span>
                            {chat.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {chat.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="mt-1">{chat.message}</p>
                          <span className="text-xs text-muted-foreground">
                            {chat.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Ban className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <UserX className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 채팅 통계 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>채팅 통계</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">총 채팅 수</span>
                  <span className="font-bold">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">분당 채팅 수</span>
                  <span className="font-bold">45</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">차단된 메시지</span>
                  <span className="font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">고유 채팅 참여자</span>
                  <span className="font-bold">789</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>빠른 작업</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Shield className="w-4 h-4 mr-2" />
                  매니저 지정
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserX className="w-4 h-4 mr-2" />
                  차단된 사용자 관리
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  자동 응답 설정
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 