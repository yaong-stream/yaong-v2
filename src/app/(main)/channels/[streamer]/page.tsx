"use client";

import { useState } from "react";
import { StreamPlayer } from "./_components/stream-player";
import { StreamChat } from "./_components/stream-chat";
import { useParams } from "next/navigation";
import { useStream } from "@/hooks/api/stream";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function StreamPage() {
  const { streamer } = useParams();
  const { isLoading, data } = useStream(streamer?.toString() || '');
  const [isChatOpen, setIsChatOpen] = useState(true);

  if (isLoading || data == null) {
    return <p>loading...</p>
  }
  return (
    <div className="h-full text-foreground">
      {/* 데스크톱 레이아웃 */}
      <div className="hidden md:flex h-full">
        {/* 스트림 플레이어 영역 */}
        <div className="flex-1 bg-background overflow-y-auto">
          <StreamPlayer
            stream={data}
          />
        </div>
        {/* 채팅 영역 */}
        <div className="w-80 bg-muted border-l border-border flex-shrink-0 h-full">
          <StreamChat streamId={data.id} />
        </div>
      </div>

      {/* 모바일 레이아웃 */}
      <div className="md:hidden flex flex-col h-full">
        {/* 스트림 플레이어 영역 */}
        <div className="flex-1 bg-background overflow-y-auto">
          <StreamPlayer
            stream={data}
          />
        </div>
        {/* 채팅 영역 */}
        <div className={`bg-muted border-t border-border transition-all duration-300 ease-in-out ${
          isChatOpen ? 'h-[300px]' : 'h-12'
        }`}>
          {/* 채팅 토글 버튼 */}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-full h-12 flex items-center justify-center gap-2 hover:bg-accent/50 relative"
          >
            <div className="h-full flex items-center gap-2">
              <h3 className="text-base font-semibold text-foreground">스트림 채팅</h3>
              {isChatOpen ? (
                <ChevronDown className="w-5 h-5 text-muted-foreground" />
              ) : (
                <ChevronUp className="w-5 h-5 text-muted-foreground" />
              )}
            </div>
          </button>
          {/* 채팅 내용 */}
          <div className={`${isChatOpen ? 'block' : 'hidden'} h-[calc(300px-48px)]`}>
            <StreamChat streamId={data.id} />
          </div>
        </div>
      </div>
    </div>
  )
} 