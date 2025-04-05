import Link from 'next/link';
import { LoginForm } from './_components/login-form';

export default function LoginPage() {
  return (
    <div
      className="bg-card p-8 rounded-lg shadow-sm border"
    >
      <div
        className="space-y-6"
      >
        <div
          className="space-y-2 text-center"
        >
          <h1
            className="text-2xl font-semibold tracking-tight"
          >
            로그인
          </h1>
          <p
            className="text-sm text-muted-foreground"
          >
            야옹 스트림에 오신 것을 환영합니다
          </p>
        </div>
        <LoginForm />
        <div
          className="text-center text-sm"
        >
          <span
            className="text-muted-foreground"
          >
            계정이 없으신가요?
          </span>
          <Link
            href="/register"
            className="text-primary hover:text-primary/90 hover:underline"
          >
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}
