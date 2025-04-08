'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useUpdatePassword } from '@/hooks/api';
import { toast } from 'sonner';

interface ChangePasswordFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export function ChangePasswordDialog() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ChangePasswordFormValues>();
  const { mutateAsync: updatePassword } = useUpdatePassword();

  const onSubmit = async (data: ChangePasswordFormValues) => {
    try {
      const { success } = await updatePassword({ previousPassword: data.currentPassword, password: data.newPassword });
      if (success) {
        toast.success('비밀번호가 변경되었습니다.');
        setOpen(false);
        reset();
        return;
      }
      toast.error('비밀번호 변경에 실패했습니다.');
    } catch (error) {
      console.error('비밀번호 변경 실패:', error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">비밀번호 변경</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>비밀번호 변경</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="현재 비밀번호"
              {...register('currentPassword', {
                required: '현재 비밀번호를 입력해주세요',
              })}
            />
            {errors.currentPassword && (
              <p className="text-sm text-destructive">
                {errors.currentPassword.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="새 비밀번호"
              {...register('newPassword', {
                required: '새 비밀번호를 입력해주세요',
                minLength: {
                  value: 8,
                  message: '비밀번호는 최소 8자 이상이어야 합니다',
                },
              })}
            />
            {errors.newPassword && (
              <p className="text-sm text-destructive">
                {errors.newPassword.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="새 비밀번호 확인"
              {...register('confirmPassword', {
                required: '새 비밀번호를 다시 입력해주세요',
                validate: (value) =>
                  value === watch('newPassword') ||
                  '비밀번호가 일치하지 않습니다',
              })}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false);
                reset();
              }}
            >
              취소
            </Button>
            <Button type="submit">변경</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 