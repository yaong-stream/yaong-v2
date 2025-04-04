'use client';

import {
  AlertCircle,
} from "lucide-react";
import {
  StreamCard,
} from "./_components/stream-card";
import {
  useCategories,
} from "@/hooks/api/category";
import {
  useLiveStreams,
} from "@/hooks/api/stream";

export default function HomePage() {
  const { data: categories, isLoading: isCategoriesLoading } = useCategories();
  const { data: streams, isLoading: isStreamsLoading } = useLiveStreams();

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      {/* 인기 라이브 스트림 섹션 */}
      <section className="mb-6 sm:mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">인기 라이브 스트림</h2>
        {isStreamsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="aspect-video bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        ) : streams && streams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
            {streams.map((stream) => (
              <StreamCard
                key={stream.id}
                id={stream.id.toString()}
                title={stream.name}
                streamer={{
                  id: stream.streamer.id.toString(),
                  name: stream.streamer.nickname,
                  avatarUrl: stream.streamer.profileImage
                }}
                category={stream.category?.name || "기타"}
                thumbnailUrl={stream.thumbnailImage}
                viewerCount={0}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-10 bg-muted/10 rounded-lg">
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-sm">현재 진행 중인 라이브 스트림이 없습니다.</p>
          </div>
        )}
      </section>

      {/* 카테고리 섹션 */}
      <section>
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">카테고리</h2>
        {isCategoriesLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden animate-pulse">
                <div className="aspect-square bg-muted"></div>
                <div className="p-3">
                  <div className="h-5 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : categories && categories.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-card rounded-lg overflow-hidden hover:bg-accent/50 transition-colors">
                <div className="aspect-square bg-muted relative">
                  {category.thumbnailImage && (
                    <img
                      src={category.thumbnailImage}
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-medium">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-10 bg-muted/10 rounded-lg">
            <AlertCircle className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-sm">등록된 카테고리가 없습니다.</p>
          </div>
        )}
      </section>
    </div>
  );
}
