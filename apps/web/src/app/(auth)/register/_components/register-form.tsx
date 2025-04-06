'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useSignup } from '@/hooks/api';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';

interface RegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  nickname: string;
}


export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<RegisterFormValues>();
  const { mutateAsync: signup } = useSignup({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          if (error.response?.data?.error?.parameter != null) {
            setError(error.response.data.error.parameter, { message: error.response.data.error.detail })
          }
        }
      }
    },
  });
  const onSubmit = async (data: {
    email: string;
    password: string;
    nickname: string;
  }) => {
    setIsLoading(true);

    try {
      await signup({
        email: data.email,
        password: data.password,
        nickname: data.nickname,
      });

      toast.success('회원가입이 완료되었습니다.');
      router.push('/login');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error('이미 사용 중인 이메일입니다.');
        } else {
          toast.error('회원가입에 실패했습니다. 다시 시도해주세요.');
        }
      } else {
        toast.error('회원가입에 실패했습니다. 다시 시도해주세요.');
      }
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Toaster />

      <div className="space-y-2">
        <Label htmlFor="email">이메일</Label>
        <Input
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 형식을 입력해주세요',
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="nickname">닉네임</Label>
        <Input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력하세요"
          {...register('nickname', {
            required: '닉네임을 입력해주세요',
            minLength: {
              value: 2,
              message: '닉네임은 2자 이상이어야 합니다',
            },
            maxLength: {
              value: 20,
              message: '닉네임은 20자 이하여야 합니다',
            },
          })}
        />
        {errors.nickname && (
          <p className="text-sm text-destructive">{errors.nickname.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">비밀번호</Label>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이어야 합니다',
            },
          })}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="confirmPassword">비밀번호 확인</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          {...register('confirmPassword', {
            required: '비밀번호를 다시 입력해주세요',
            validate: (value) =>
              value === password || '비밀번호가 일치하지 않습니다',
          })}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-destructive">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            처리 중...
          </>
        ) : (
          '회원가입'
        )}
      </Button>
    </form>
  );
}
