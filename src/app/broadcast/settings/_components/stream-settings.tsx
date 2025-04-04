'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function StreamSettings() {
  return (
    <div className="space-y-6">
      {/* 기본 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>기본 설정</CardTitle>
          <CardDescription>
            방송의 기본적인 설정을 관리합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stream-title">기본 방송 제목</Label>
            <Input
              id="stream-title"
              placeholder="방송 제목을 입력하세요"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="stream-category">기본 카테고리</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="카테고리 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="game">게임</SelectItem>
                <SelectItem value="chat">일상대화</SelectItem>
                <SelectItem value="music">음악</SelectItem>
                <SelectItem value="art">예술</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 스트림 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>스트림 설정</CardTitle>
          <CardDescription>
            방송 품질과 관련된 설정을 관리합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="stream-key">스트림 키</Label>
            <div className="flex gap-2">
              <Input
                id="stream-key"
                type="password"
                value="xxxx-xxxx-xxxx-xxxx"
                readOnly
              />
              <Button variant="outline">재발급</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              스트림 키는 방송 송출에 필요한 고유 키입니다. 절대 공개하지 마세요.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="stream-quality">화질 설정</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="화질 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1080p60">1080p 60fps</SelectItem>
                <SelectItem value="1080p30">1080p 30fps</SelectItem>
                <SelectItem value="720p60">720p 60fps</SelectItem>
                <SelectItem value="720p30">720p 30fps</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* 자동화 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>자동화 설정</CardTitle>
          <CardDescription>
            방송 시작/종료시 자동 설정을 관리합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>자동 채팅방 개설</Label>
              <p className="text-sm text-muted-foreground">
                방송 시작시 자동으로 채팅방을 개설합니다.
              </p>
            </div>
            <Switch />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>자동 알림 발송</Label>
              <p className="text-sm text-muted-foreground">
                방송 시작시 팔로워들에게 알림을 발송합니다.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 