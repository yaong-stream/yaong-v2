'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CATEGORIES = [
  { value: 'game', label: '게임' },
  { value: 'talk', label: '토크' },
  { value: 'music', label: '음악' },
  { value: 'sports', label: '스포츠' },
  { value: 'education', label: '교육' },
  { value: 'other', label: '기타' },
] as const;

export function BroadcastForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState('');
  const [isLive, setIsLive] = useState(false);

  const handleStartBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 방송 시작 로직 구현
    console.log('방송 시작:', { title, category, description, isLive });
  };

  return (
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
      <Select value={category} onValueChange={setCategory} required>
        <SelectTrigger id="category">
          <SelectValue placeholder="카테고리를 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          {CATEGORIES.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <div className="space-y-2">
      <Label htmlFor="description">방송 설명</Label>
      <Textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="방송에 대한 설명을 입력하세요"
        className="min-h-[100px]"
      />
    </div>

    <div className="pt-4">
      <Button type="submit" className="w-full">
        방송 정보 수정
      </Button>
    </div>
  </form>
  );
} 