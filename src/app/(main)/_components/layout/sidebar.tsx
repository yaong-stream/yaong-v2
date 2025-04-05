import Link from 'next/link';
import {
  useFollowings,
} from '@/hooks/api/stream';
import {
  UserAvatar,
} from '@/components/user-avatar';

export function Sidebar() {
  const followings = useFollowings();
  return (
    <div className="h-full flex flex-col">
      {/* 로고 */}
      <div className="flex-shrink-0">
        <Link
          href="/"
          className={`block p-4 text-xl font-bold hover:bg-accent/50`}
        >
          야옹 스트림
        </Link>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="flex-1 overflow-y-auto">
        <div className="px-2 pt-4">
          <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase">메인</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/" className={`flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50`}>
                <span>팔로잉</span>
              </Link>
            </li>
            <li>
              <Link href="/browse" className={`flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50`}>
                <span>찾아보기</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 팔로잉 중인 채널 */}
        {followings.data && followings.data.length > 0 && (
          <div className="px-2 pt-4">
            <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase">팔로잉 중인 채널</h3>
            <ul className="mt-2 space-y-1">
              {followings.data.map((following) => (
                <li key={following.id}>
                  <Link href={`/channels/${following.stream.streamer.nickname}`}
                    className={`flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50`}>
                    <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0">
                      <UserAvatar
                        className={`${following.stream.isLive ? 'border-2 border-red-600' : ''}`}
                        username={following.stream.streamer.nickname}
                        imageUrl={following.stream.streamer.profileImage}
                        size="md"
                      />
                    </div>
                    <div className="ml-3 overflow-hidden">
                      <div className="font-medium truncate">{following.stream.streamer.nickname}</div>
                      {following.stream.category != null && (
                        <div className="text-xs text-muted-foreground truncate">{following.stream.category.name}</div>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 추천 채널 */}
        <div className="px-2 pt-4">
          <h3 className="px-4 text-sm font-semibold text-muted-foreground uppercase">추천 채널</h3>
          <ul className="mt-2 space-y-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i}>
                <Link href={`/channel/${i}`}
                  className={`flex items-center px-4 py-2 text-sm rounded-md hover:bg-accent/50`}>
                  <div className="w-8 h-8 rounded-full bg-primary flex-shrink-0"></div>

                  <div className="ml-3 overflow-hidden">
                    <div className="font-medium truncate">추천 스트리머 {i + 1}</div>
                    <div className="text-xs text-muted-foreground truncate">음악</div>
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