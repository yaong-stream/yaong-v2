'use client';

import Link from "next/link";
import { RegisterForm } from "./_components/register-form";
import { useSignup } from "@/hooks/api/member/mutations";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);
  const signup = useSignup();
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const confirmPassword = formData.get("confirmPassword") as string;
      const nickname = formData.get("username") as string;

      if (password !== confirmPassword) {
        toast.error("비밀번호가 일치하지 않습니다.");
        return;
      }

      await signup.mutateAsync({
        email,
        password,
        nickname,
      });

      toast.success("회원가입이 완료되었습니다.");
      router.push("/login");
    } catch (error) {
      toast.error("회원가입에 실패했습니다. 다시 시도해주세요.");
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
            회원가입
          </h1>
          <p className="text-sm text-muted-foreground">
            야옹 스트림의 새로운 멤버가 되어보세요
          </p>
        </div>
        <RegisterForm isLoading={isLoading} onSubmit={onSubmit} />
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