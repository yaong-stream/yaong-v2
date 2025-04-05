'use client';

import Link from 'next/link';
import {
  useState,
} from 'react';
import {
  Search,
  X,
} from 'lucide-react';
import {
  ThemeToggle,
} from '@/components/theme/theme-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  useMe,
} from '@/hooks/api/member/useMember';
import {
  UserAvatar,
} from '@/components/user-avatar';
import {
  useSignout,
} from '@/hooks/api';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { isLoading, data } = useMe();
  const { mutateAsync: signout } = useSignout();
  const signoutHandler = async () => {
    const result = await signout();
    if (result.success) {
      location.reload();
    }
  };

  return (
    <>
      <div className="h-full flex items-center justify-between w-full">
        {/* 검색 */}
        <div className="flex-1 max-w-xl">
          {/* 데스크톱 검색창 */}
          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="스트리머 또는 카테고리 검색"
                className="w-full h-9 px-4 pr-10 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
          {/* 모바일 검색 버튼 */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="md:hidden p-2 hover:bg-accent/50 rounded-md"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* 우측 메뉴 */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {!isLoading && (
            data ? (
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
                <DropdownMenuContent align="end" className="bg-popover text-popover-foreground shadow-md rounded-md py-1">
                  <DropdownMenuItem asChild>
                    <Link href="/mypage" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      마이페이지
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/broadcast" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      방송하기
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
            )
          )}
        </div>
      </div>

      {/* 모바일 검색 모달 */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="h-14 border-b border-border bg-card flex items-center px-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="스트리머 또는 카테고리 검색"
                className="w-full h-9 px-4 pr-10 bg-background rounded-md border border-input focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none text-sm"
                autoFocus
              />
              <button className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground">
                <Search className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => setIsSearchOpen(false)}
              className="ml-4 p-2 hover:bg-accent/50 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
