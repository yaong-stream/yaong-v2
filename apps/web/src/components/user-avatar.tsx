import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps {
  username: string;
  imageUrl: string;
  size?: "default" | "lg" | "md" | "sm";
  className?: string;
}

const sizes = {
  default: "h-8 w-8",
  lg: "h-12 w-12",
  md: "h-8 w-8",
  sm: "h-6 w-6",
}

export const UserAvatar = ({
  username,
  imageUrl,
  size = "default",
  className,
}: UserAvatarProps) => {
  return (
    <Avatar className={cn(sizes[size], className)}>
      <AvatarImage src={imageUrl} alt={username} />
      <AvatarFallback>
        {username[0].toUpperCase()}
      </AvatarFallback>
    </Avatar>
  )
}
