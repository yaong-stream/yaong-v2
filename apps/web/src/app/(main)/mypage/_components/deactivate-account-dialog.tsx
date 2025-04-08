'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useWithdraw } from '@/hooks/api';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface DeactivateFormValues {
  password: string;
  confirmText: string;
}

export function DeactivateAccountDialog() {
  const [open, setOpen] = useState(false);
  const { mutateAsync: withdraw } = useWithdraw();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<DeactivateFormValues>();

  const onSubmit = async (data: DeactivateFormValues) => {
    try {
      const { success } = await withdraw({ password: data.password });
      if (success) {
        toast.success('계정이 비활성화되었습니다.');
        setOpen(false);
        reset();
        window.location.href = '/';
      } else {
        toast.error('비밀번호가 일치하지 않습니다.');
      }
      setOpen(false);
      reset();
    } catch (error) {
      console.error('계정 비활성화 실패:', error);
    }
  };

  const isConfirmed = watch('confirmText') === '계정 비활성화';

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        setOpen(open);
        if (!open) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button variant="destructive">계정 비활성화</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>계정 비활성화</DialogTitle>
            <DialogDescription>
              계정을 비활성화하면 모든 데이터가 삭제되며 이 작업은 되돌릴 수 없습니다.
              계속하시려면 비밀번호를 입력하고 &apos;계정 비활성화&apos;를 입력해주세요.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="비밀번호"
                {...register('password', {
                  required: '비밀번호를 입력해주세요',
                })}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Input
                placeholder="계정 비활성화"
                {...register('confirmText', {
                  required: '확인 텍스트를 입력해주세요',
                  validate: (value) =>
                    value === '계정 비활성화' ||
                    '정확한 텍스트를 입력해주세요',
                })}
              />
              {errors.confirmText && (
                <p className="text-sm text-destructive">
                  {errors.confirmText.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter>
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
            <Button
              type="submit"
              variant="destructive"
              disabled={!isConfirmed}
            >
              계정 비활성화
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
} 