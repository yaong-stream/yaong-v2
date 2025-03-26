import Link from "next/link";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* 우측 메뉴 */}
      <div className="flex items-center space-x-4">
        <ThemeToggle />
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
    </div>
  );
} 