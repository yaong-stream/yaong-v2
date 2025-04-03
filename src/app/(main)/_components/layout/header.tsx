'use client';

import Link from 'next/link';
import {
  ThemeToggle,
} from '@/components/theme/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useMe } from '@/hooks/api/member/useMember';
import { UserAvatar } from '@/components/user-avatar';
import { useSignout } from '@/hooks/api';
import { useRouter } from 'next/navigation';

export function Header() {
  const navigation = useRouter();
  const { isLoading, data } = useMe();
  const { mutateAsync: signout } = useSignout();
  const signoutHandler = async () => {
    const result = await signout();
    if (result.success) {
      navigation.refresh();
    }
  };
  return (
    <div className="h-full flex items-center justify-between px-4">
      {/* 검색 */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="스트리머 또는 카테고리 검색"
            className="w-full h-9 px-4 pr-10 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm"
          />
          <button className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      {/* 우측 메뉴 */}
      {!isLoading && (
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          {data ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-8 h-8 rounded-full overflow-hidden">
                  <UserAvatar
                    username={data.nickname}
                    imageUrl={data.profileImage}
                    size="md"
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md py-1">
                <DropdownMenuItem asChild>
                  <Link href="/mypage" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    마이페이지
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onSelect={signoutHandler}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="h-8 px-4 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 flex items-center"
              >
                로그인
              </Link>
              <Link
                href="/register"
                className="h-8 px-4 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 flex items-center"
              >
                회원가입
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 