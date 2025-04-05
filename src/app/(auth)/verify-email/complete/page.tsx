import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmailCompletePage() {
  return (

    <Card className="bg-card p-8 text-center">
      <CardHeader>
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <CardTitle>이메일 인증 완료</CardTitle>
        <CardDescription>
          이메일 인증이 성공적으로 완료되었습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          이제 모든 서비스를 이용하실 수 있습니다.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button asChild>
          <Link href="/">
            로그인 페이지으로 이동
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 