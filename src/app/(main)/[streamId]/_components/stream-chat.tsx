import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user-avatar"

interface StreamChatProps {
  streamId: string;
}

export const StreamChat = ({ streamId }: StreamChatProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* 채팅 헤더 */}
      <div className="p-4 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">스트림 채팅</h3>
      </div>

      {/* 채팅 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* 채팅 메시지 예시 */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-start gap-2">
            <UserAvatar 
              username={`user${i}`}
              imageUrl="/placeholder.png"
              size="sm"
            />
            <div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">유저{i}</span>
              </p>
              <p className="text-sm text-foreground">
                안녕하세요! 재미있게 보고 있어요 😊
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 채팅 입력 영역 */}
      <div className="p-4 border-t border-border">
        <form className="flex gap-2">
          <Input
            placeholder="메시지 보내기..."
            className="flex-1 bg-muted border-border focus:ring-0 text-foreground"
          />
          <Button size="sm" variant="secondary">
            전송
          </Button>
        </form>
      </div>
    </div>
  )
} 