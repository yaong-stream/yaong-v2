'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">페이지를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground max-w-md">
          죄송합니다. 요청하신 페이지를 찾을 수 없습니다. 주소를 다시 한 번 확인해주세요.
        </p>
        <Button asChild>
          <Link href="/">
            홈으로 돌아가기
          </Link>
        </Button>
      </div>
    </div>
  );
} 