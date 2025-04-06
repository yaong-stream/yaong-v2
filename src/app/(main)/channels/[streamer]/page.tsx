"use client";

import { useState } from "react";
import { StreamPlayer } from "./_components/stream-player";
import { StreamChat } from "./_components/stream-chat";
import { useParams } from "next/navigation";
import { useStream } from "@/hooks/api/stream";
import { ChevronUp, ChevronDown } from "lucide-react";
import { StreamInfo } from "./_components/stream-info";
import { ChannelTabs } from "./_components/channel-tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

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
      <div className="flex flex-col md:flex-row h-full">
        {/* 스트림 플레이어 영역 */}
        <ScrollArea className="md:flex-1 bg-background pr-2">
          <StreamPlayer
            stream={data}
          />
          <div className="hidden md:flex flex-col">
            <StreamInfo stream={data} />
            <ChannelTabs stream={data} />
          </div>
        </ScrollArea>
        {/* 채팅 영역 */}
        <div className="flex-1 md:flex-none md:w-80 md:h-full bg-muted border-l border-border flex-shrink-0">
          <StreamChat streamId={data.id}/>
        </div>
      </div>


      {/* <div className="md:hidden flex flex-col h-full overflow-y-hidden">
       
        <div className="flex-1 bg-background overflow-y-auto">
          <StreamPlayer
            stream={data}
          />
        </div>
    
        <div className={`bg-muted border-t border-border transition-all duration-300 ease-in-out ${isChatOpen ? 'h-[300px]' : 'h-12'
          }`}>
    
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
         
          <div className={`${isChatOpen ? 'block' : 'hidden'} h-[calc(300px-48px)]`}>
            <StreamChat streamId={data.id} />
          </div>
        </div>

      </div> */}
    </div>
  )
} 