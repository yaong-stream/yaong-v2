'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function StreamSettings() {
  return (
    <div className="space-y-6">

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
        </CardContent>
      </Card>
    </div>
  );
} 