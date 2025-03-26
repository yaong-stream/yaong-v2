import Link from "next/link";

export function Sidebar() {
  return (
    <div className="h-full flex flex-col">
      {/* 로고 */}
      <Link 
        href="/" 
        className="p-4 text-xl font-bold hover:bg-accent/50"
      >
        야옹 스트림
      </Link>

      {/* 메인 네비게이션 */}
      <nav className="flex-1">
        <div className="px-2 pt-4">
          <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase">메인</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/" className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50">
                <span>팔로잉</span>
              </Link>
            </li>
            <li>
              <Link href="/browse" className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50">
                <span>찾아보기</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 팔로잉 중인 채널 */}
        <div className="px-2 pt-4">
          <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase">팔로잉 중인 채널</h3>
          <ul className="mt-2 space-y-1">
            {/* 더미 데이터 */}
            {Array.from({ length: 5 }).map((_, i) => (
              <li key={i}>
                <Link href={`/channel/${i}`} className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50">
                  <div className="w-8 h-8 rounded-full bg-primary mr-3"></div>
                  <div>
                    <div className="font-medium">스트리머 {i + 1}</div>
                    <div className="text-xs text-muted-foreground">게임</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 추천 채널 */}
        <div className="px-2 pt-4">
          <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase">추천 채널</h3>
          <ul className="mt-2 space-y-1">
            {/* 더미 데이터 */}
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i}>
                <Link href={`/channel/${i}`} className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50">
                  <div className="w-8 h-8 rounded-full bg-primary mr-3"></div>
                  <div>
                    <div className="font-medium">추천 스트리머 {i + 1}</div>
                    <div className="text-xs text-muted-foreground">음악</div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
} 