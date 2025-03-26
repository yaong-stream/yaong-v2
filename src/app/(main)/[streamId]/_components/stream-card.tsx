import Image from "next/image"
import Link from "next/link"

interface StreamCardProps {
  title: string
  thumbnailUrl: string
  username: string
  isLive: boolean
  viewers: number
  duration?: string
  tags?: string[]
}

export const StreamCard = ({
  title,
  thumbnailUrl,
  username,
  isLive,
  viewers,
  duration,
  tags
}: StreamCardProps) => {
  return (
    <Link href="/" className="group block">
      <div className="relative aspect-video rounded-md overflow-hidden bg-zinc-800">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/60 rounded text-[10px] font-medium text-white">
          {duration}
        </div>
      </div>
      <div className="mt-2 flex gap-x-3">
        <div className="h-8 w-8 rounded-full bg-zinc-800 flex-shrink-0" />
        <div className="flex-1">
          <p className="font-medium text-sm text-white truncate">{title}</p>
          <p className="text-xs text-zinc-400">{username}</p>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            {isLive ? (
              <>
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span>LIVE</span>
                <span>•</span>
              </>
            ) : null}
            <span>{viewers} 시청</span>
          </div>
          {tags && tags.length > 0 && (
            <div className="flex gap-1 mt-1">
              {tags.map((tag) => (
                <span key={tag} className="px-1.5 py-0.5 text-[10px] bg-zinc-800 text-white rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
} 