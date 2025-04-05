import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StreamCardProps {
  id: string;
  title: string;
  streamer: {
    id: string;
    nickname: string;
    profileImage: string;
  };
  category: string;
  thumbnailUrl?: string;
  viewerCount: number;
}

export function StreamCard({
  title,
  streamer,
  category,
  thumbnailUrl,
  viewerCount,
}: StreamCardProps) {
  return (
    <Link href={`/channels/${streamer.nickname}`} className="block group">
      <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
        {thumbnailUrl ? (
          <Image
            src={thumbnailUrl}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-muted-foreground">No Thumbnail</span>
          </div>
        )}
        <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-destructive text-destructive-foreground rounded text-xs font-medium">
          LIVE
        </div>
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-background/80 backdrop-blur-sm rounded text-xs">
          시청자 {viewerCount.toLocaleString()}명
        </div>
      </div>
      <div className="mt-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            <Avatar className="w-9 h-9 rounded-full bg-muted overflow-hidden">
              <AvatarImage src={streamer.profileImage} />
              <AvatarFallback>
                {streamer.nickname.slice(0, 1).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium truncate group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm truncate">
              {streamer.nickname}
            </p>
            <p className="text-sm text-muted-foreground">
              {category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
} 