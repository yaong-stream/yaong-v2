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
import { Label } from '@/components/ui/label';
import { MemberInfoResponse } from '@/services';
import { useForm } from 'react-hook-form';
import { Loader2, Pencil, Upload } from 'lucide-react';
import { toast } from 'sonner';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { useCreatePresignedUrl, useUpdateMe, useUploadFile } from '@/hooks/api';

interface EditProfileFormData {
  nickname: string;
  profileImage?: FileList;
}

interface EditProfileDialogProps {
  member: MemberInfoResponse;
}

export function EditProfileDialog({ member }: EditProfileDialogProps) {
  const { mutateAsync: createPresignedUrl } = useCreatePresignedUrl();
  const { mutateAsync: uploadFile } = useUploadFile();
  const { mutateAsync: updateMe } = useUpdateMe();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(member.profileImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<EditProfileFormData>({
    defaultValues: {
      nickname: member.nickname,
    },
  });

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: EditProfileFormData) => {
    setIsLoading(true);
    try {
      let profileImageUrl = member.profileImage;
      if (data.profileImage) {
        const files: File[] = [];
        for (const file of data.profileImage) {
          files.push(file);
        }
        if (files.length > 0) {
          const { key, presignedUrl } = await createPresignedUrl({
            extension: files[0].type.split('/')[1],
          });
          const isUploaded = await uploadFile({ file: files[0], presignedUrl });
          if (!isUploaded) {
            throw new Error('파일 업로드에 실패했습니다.');
          }
          profileImageUrl = key;
        }
      }
      await updateMe({ nickname: data.nickname, profileImage: profileImageUrl });

      toast.success('프로필이 수정되었습니다.');
      setOpen(false);
    } catch (error) {
      toast.error('프로필 수정에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" variant="secondary">
          <Pencil className="mr-2 h-4 w-4" />
          프로필 수정
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>프로필 수정</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-4">
              <div
                onClick={handleImageClick}
                className="relative h-32 w-32 rounded-full overflow-hidden border-2 border-border cursor-pointer hover:opacity-90 transition-opacity group"
              >
                {previewImage ? (
                  <>
                    <Image
                      src={previewImage}
                      alt="Profile preview"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Upload className="h-8 w-8 text-white" />
                    </div>
                  </>
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-muted">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
              <label className="text-sm text-muted-foreground">
                클릭하여 이미지 변경
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register('profileImage')}
                />
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="nickname">닉네임</Label>
            <Input
              id="nickname"
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
          <div className="flex justify-end gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              취소
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  저장 중...
                </>
              ) : (
                '저장'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 