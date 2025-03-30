'use client';

import Link from "next/link";
import { LoginForm } from "./_components/login-form";
import { useLogin } from "@/hooks/api/auth/mutations";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const login = useLogin();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      await login.mutateAsync({
        email,
        password,
      });

      toast.success("로그인이 완료되었습니다.");
      router.push("/");
    } catch (error) {
      toast.error("로그인에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-8 rounded-lg shadow-sm border">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            로그인
          </h1>
          <p className="text-sm text-muted-foreground">
            야옹 스트림에 오신 것을 환영합니다
          </p>
        </div>
        <LoginForm isLoading={isLoading} onSubmit={onSubmit} />
        <div className="text-center text-sm">
          <span className="text-muted-foreground">계정이 없으신가요? </span>
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