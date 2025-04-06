'use client';

import {
  useSignin,
} from '@/hooks/api';
import {
  AxiosError,
} from 'axios';
import {
  useRouter,
} from 'next/navigation';
import {
  useState,
} from 'react';
import {
  useForm,
} from 'react-hook-form';
import {
  toast,
} from 'sonner';

interface LoginFormValues {
  email: string;
  password: string;
}
export function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const { mutateAsync: signin } = useSignin({
    onError: (error) => {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast.error('이메일 또는 비밀번호가 일치하지 않습니다.');
        } else {
          toast.error('로그인에 실패했습니다. 다시 시도해주세요.');
        }
      }
      setIsLoading(false);
    },
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    setIsLoading(true);

    await signin({
      email: data.email,
      password: data.password,
    });

    toast.success('로그인이 완료되었습니다.');
    router.push('/');

    setIsLoading(false);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          이메일
        </label>
        <input
          id="email"
          type="email"
          placeholder="name@example.com"
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading}
          {...register('email', { required: '이메일을 입력해주세요.' })}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          비밀번호
        </label>
        <input
          id="password"
          type="password"
          className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
          disabled={isLoading}
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
        />
        {errors.password && (
          <p className="text-sm text-destructive">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </button>
    </form>
  );
}
