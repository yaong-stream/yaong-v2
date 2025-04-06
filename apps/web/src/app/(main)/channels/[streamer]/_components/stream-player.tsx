"use client";

import { StreamDto } from "@/services";
import { VideojsPlayer, VideoPlayer } from "./video-player";


interface StreamPlayerProps {
  stream: StreamDto;
}
export const StreamPlayer = ({ stream }: StreamPlayerProps) => {


  const options = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    experimentalSvgIcons: true,
    sources: [
      {
        src: `https://mist.narumir.io/hls/${stream.streamKey}/index.m3u8`,
        type: 'application/x-mpegURL'
      },
    ],
  };

  const onReadyPlayer = (player: VideojsPlayer) => {

    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('playing', () => {
      console.log('player is going now');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });

  }

  return (
    <div className="aspect-video relative bg-muted rounded-md">
      {stream.isLive && <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 rounded-md">
        <span className="text-xs font-semibold text-background">
          LIVE
        </span>
      </div>}
      <VideoPlayer
        options={options}
        onReady={onReadyPlayer}
      />
      <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/60 rounded-md">
        <span className="text-xs font-semibold text-background-foreground">1,244 시청</span>
      </div>
    </div>
  )
}
