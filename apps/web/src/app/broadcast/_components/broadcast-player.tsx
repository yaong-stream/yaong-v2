'use client';

import { useEffect, useRef } from 'react';

interface BroadcastPlayerProps {
  streamUrl?: string;
}

export function BroadcastPlayer({ streamUrl }: BroadcastPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && streamUrl) {
      videoRef.current.srcObject = null; // 기존 스트림 제거
      // TODO: 실제 스트림 연결 로직 구현
    }
  }, [streamUrl]);

  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      {streamUrl ? (
        <video
          ref={videoRef}
          className="w-full h-full object-contain"
          autoPlay
          playsInline
          muted
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <p>방송이 시작되지 않았습니다.</p>
        </div>
      )}
    </div>
  );
} 