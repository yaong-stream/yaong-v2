'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export function ChatSettings() {
  return (
    <div className="space-y-6">
      {/* 채팅 기본 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>채팅 기본 설정</CardTitle>
          <CardDescription>
            채팅방의 기본적인 설정을 관리합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>채팅방 사용</Label>
              <p className="text-sm text-muted-foreground">
                방송에서 채팅 기능을 사용합니다.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>팔로워 전용 채팅</Label>
              <p className="text-sm text-muted-foreground">
                팔로워만 채팅에 참여할 수 있습니다.
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label htmlFor="slow-mode">슬로우 모드 간격 (초)</Label>
            <Input
              id="slow-mode"
              type="number"
              placeholder="0"
              min="0"
              max="300"
            />
            <p className="text-sm text-muted-foreground">
              시청자가 다음 메시지를 보내기까지 기다려야 하는 시간입니다. 0은 비활성화입니다.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 채팅 필터 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>채팅 필터</CardTitle>
          <CardDescription>
            채팅 내용 필터링 설정을 관리합니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>욕설 필터</Label>
              <p className="text-sm text-muted-foreground">
                부적절한 언어를 자동으로 필터링합니다.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>링크 차단</Label>
              <p className="text-sm text-muted-foreground">
                채팅에서 모든 링크를 차단합니다.
              </p>
            </div>
            <Switch />
          </div>
          <div className="space-y-2">
            <Label htmlFor="blocked-words">차단할 단어</Label>
            <Textarea
              id="blocked-words"
              placeholder="차단할 단어를 쉼표로 구분하여 입력하세요"
              className="h-20"
            />
            <p className="text-sm text-muted-foreground">
              이 단어들이 포함된 메시지는 자동으로 차단됩니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 