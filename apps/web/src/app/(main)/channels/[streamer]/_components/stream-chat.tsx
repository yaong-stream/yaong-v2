"use client";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserAvatar } from "@/components/user-avatar"
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StreamChatProps {
  streamId: number;
}

type ChatMessageForm = {
  message: string,
};
type ChatMessage = {
  id: string,
  message: string,
  member: {
    id: number,
    nickname: string,
    profileImage: string,
  },
}

export const StreamChat = ({ streamId }: StreamChatProps) => {
  const [isOpen] = useState(true);
  const socketRef = useRef<Socket>(null);
  const [chats, setChats] = useState<ChatMessage[]>([]);
  const { register, handleSubmit, reset, } = useForm<ChatMessageForm>();
  const messageFormSubmit: SubmitHandler<ChatMessageForm> = (data) => {
    if (socketRef.current == null) {
      return;
    }
    socketRef.current.emit('chat-message', { message: data.message });
    reset();
  };

  useEffect(() => {
    socketRef.current = io(`${process.env.NEXT_PUBLIC_API_URL}/chat`, { transports: ['websocket'], withCredentials: true });
    socketRef.current.emit('chat-join', {
      streamId,
    });
    socketRef.current.on('chat-message', (chat: ChatMessage) => {
      setChats((prev) => [...prev, chat]);
    });
    return () => {
      if (socketRef.current) {
        socketRef.current.emit('chat-leave');
        socketRef.current.disconnect();
      }
    };
  }, [streamId]);


  return (
    <div className="flex flex-col h-full">
      {/* 채팅 헤더 */}
      <div className="flex flex-row items-center p-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon">
          {isOpen ? (
            <ChevronLeft className="h-5 w-5" />
          ) : (
            <ChevronRight className="h-5 w-5" />
          )}
        </Button>
        <h3 className="text-lg font-semibold text-foreground">스트림 채팅</h3>
      </div>


      {/* 채팅 메시지 영역 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* 채팅 메시지 예시 */}
        {chats.map((chat) => (
          <div key={chat.id} className="flex items-start gap-2">
            <UserAvatar
              username={chat.member.nickname}
              imageUrl="/placeholder.png"
              size="sm"
            />
            <div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{chat.member.nickname}</span>
              </p>
              <p className="text-sm text-foreground">
                {chat.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 채팅 입력 영역 */}
      <div className="p-4 border-t border-border">
        <form
          className="flex gap-2"
          onSubmit={handleSubmit(messageFormSubmit)}
        >
          <Input
            placeholder="메시지 보내기..."
            className="flex-1 bg-muted border-border focus:ring-0 text-foreground"
            {...register("message")}
          />
          <Button type="submit" size="sm" variant="secondary">
            전송
          </Button>
        </form>
      </div>
    </div>
  )
}
