import Link from 'next/link';
import {
  RegisterForm,
} from './_components/register-form';

export default function RegisterPage() {
  return (
    <div className="bg-card p-8 rounded-lg shadow-sm border">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            회원가입
          </h1>
          <p className="text-sm text-muted-foreground">
            야옹 스트림의 새로운 멤버가 되어보세요
          </p>
        </div>
        <RegisterForm />
        <div className="text-center text-sm">
          <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
          <Link
            href="/login"
            className="text-primary hover:text-primary/90 hover:underline"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
