'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';

export function BroadcastForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isLive, setIsLive] = useState(false);

  const handleStartBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 방송 시작 로직 구현
    console.log('방송 시작:', { title, category, isLive });
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleStartBroadcast} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">방송 제목</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="방송 제목을 입력하세요"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">카테고리</Label>
          <Input
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="방송 카테고리를 입력하세요"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="live-mode"
            checked={isLive}
            onCheckedChange={setIsLive}
          />
          <Label htmlFor="live-mode">라이브 모드</Label>
        </div>

        <div className="pt-4">
          <Button type="submit" className="w-full">
            방송 시작하기
          </Button>
        </div>
      </form>
    </Card>
  );
} 