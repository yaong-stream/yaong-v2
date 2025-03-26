import { StreamPlayer } from "./_components/stream-player";
import { StreamChat } from "./_components/stream-chat";

interface StreamPageProps {
  params: Promise<{
    streamId: string;
  }>;
}

export default async function StreamPage({ params }: StreamPageProps) {
  const {streamId} = await params;
  return (
    <div className="h-full text-foreground">
      <div className="flex h-full">
        {/* 스트림 플레이어 영역 */}
        <div className="flex-1 bg-background">
          <StreamPlayer streamId={streamId} />
        </div>
        {/* 채팅 영역 */}
        <div className="w-80 bg-muted border-l border-border">
          <StreamChat streamId={streamId} />
        </div>
      </div>
    </div>
  )
} 