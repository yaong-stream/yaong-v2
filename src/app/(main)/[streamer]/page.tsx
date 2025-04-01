"use client";

import { StreamPlayer } from "./_components/stream-player";
import { StreamChat } from "./_components/stream-chat";
import { useParams } from "next/navigation";
import { useStream } from "@/hooks/api/stream";

interface StreamPageProps {
  params: Promise<{
    streamer: string;
  }>;
}

export default function StreamPage({ params }: StreamPageProps) {
  const { streamer } = useParams();
  const { isLoading, data } = useStream(streamer?.toString() || '');
  if (isLoading || data == null) {
    return <p>loading...</p>
  }
  return (
    <div className="h-full text-foreground">
      <div className="flex h-full">
        {/* 스트림 플레이어 영역 */}
        <div className="flex-1 bg-background">
          <StreamPlayer
            stream={data}
          />
        </div>
        {/* 채팅 영역 */}
        <div className="w-80 bg-muted border-l border-border">
          <StreamChat streamId={data.id} />
        </div>
      </div>
    </div>
  )
} 