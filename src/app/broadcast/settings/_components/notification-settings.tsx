'use client';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      {/* 알림 기본 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림 기본 설정</CardTitle>
          <CardDescription>
            방송 알림과 관련된 기본 설정을 관리합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>방송 시작 알림</Label>
              <p className="text-sm text-muted-foreground">
                방송 시작시 팔로워에게 알림을 보냅니다.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>커뮤니티 알림</Label>
              <p className="text-sm text-muted-foreground">
                공지사항이나 이벤트 등록시 알림을 보냅니다.
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notification-delay">알림 지연 시간</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="알림 지연 시간 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">즉시 발송</SelectItem>
                <SelectItem value="300">5분 후</SelectItem>
                <SelectItem value="600">10분 후</SelectItem>
                <SelectItem value="900">15분 후</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              방송 시작 후 알림이 발송되기까지의 지연 시간입니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 알림 메시지 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>알림 메시지 설정</CardTitle>
          <CardDescription>
            알림에 표시될 메시지를 설정합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="live-message">방송 시작 메시지</Label>
            <Textarea
              id="live-message"
              placeholder="{streamer}님이 방송을 시작했습니다! 지금 바로 시청하세요."
              className="h-20"
            />
            <p className="text-sm text-muted-foreground">
              사용 가능한 변수: {'{streamer}'} - 스트리머 이름, {'{title}'} - 방송 제목
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="community-message">커뮤니티 알림 메시지</Label>
            <Textarea
              id="community-message"
              placeholder="{streamer}님이 새로운 공지사항을 등록했습니다."
              className="h-20"
            />
            <p className="text-sm text-muted-foreground">
              사용 가능한 변수: {'{streamer}'} - 스트리머 이름, {'{type}'} - 알림 유형
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 