import { StreamCard } from "./_components/stream-card";

// 더미 데이터
const DUMMY_STREAMS = Array.from({ length: 8 }).map((_, i) => ({
  id: `stream-${i}`,
  title: `즐거운 스트림 ${i + 1}`,
  streamer: {
    id: `streamer-${i}`,
    name: `스트리머 ${i + 1}`,
  },
  category: ["게임", "음악", "일상", "요리"][i % 4],
  viewerCount: Math.floor(Math.random() * 10000),
}));

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* 인기 라이브 스트림 섹션 */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">인기 라이브 스트림</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {DUMMY_STREAMS.map((stream) => (
            <StreamCard
              key={stream.id}
              {...stream}
            />
          ))}
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section>
        <h2 className="text-xl font-bold mb-4">카테고리</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {/* 카테고리 카드 더미 데이터 */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg overflow-hidden hover:bg-accent/50 transition-colors">
              <div className="aspect-square bg-muted"></div>
              <div className="p-3">
                <h3 className="font-medium">카테고리 {i + 1}</h3>
                <p className="text-sm text-muted-foreground">시청자 1.2만명</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
