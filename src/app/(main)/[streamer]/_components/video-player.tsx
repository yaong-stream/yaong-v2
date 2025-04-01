"use client";

import Script from "next/script";
import {
  Fragment,
  useRef,
} from "react";

type VideoPlayerProps = {
  streamKey: string,
};
export const VideoPlayer = ({
  streamKey,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  return (
    <Fragment>
      <div
        className="absolute inset-0 rounded-md overflow-hidden"
        ref={videoRef}
      />
      <Script
        src="https://mist.narumir.io/player.js"
        onLoad={() => {
          (window as any).mistPlay(streamKey, {
            target: videoRef.current,
          })
        }}
      />
    </Fragment>
  );
};
