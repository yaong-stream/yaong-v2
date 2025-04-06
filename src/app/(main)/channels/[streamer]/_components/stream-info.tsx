import { UserAvatar } from "@/components/user-avatar"
import { Button } from "@/components/ui/button"
import { StreamDto } from "@/services"

interface StreamInfoProps {
  stream: StreamDto;
}

export const StreamInfo = ({ stream }: StreamInfoProps) => {
  return (
    <div className="p-6">
      <div className="flex gap-4">
        <UserAvatar
          username={stream.streamer.nickname}
          imageUrl="/placeholder.png"
          size="lg"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">
            {stream.name}
          </h2>
          <p className="text-sm text-muted-foreground">{stream.streamer.nickname}</p>
        </div>
        <Button variant="secondary" size="sm">
          팔로우
        </Button>
      </div>
      <div className="flex gap-2 mt-2">
        {["마인크래프트", "서바이벌", "힐링"].map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
} 