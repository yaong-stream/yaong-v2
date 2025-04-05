"use client";

import { UserAvatar } from "@/components/user-avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StreamDto } from "@/services";
import { VideojsPlayer, VideoPlayer } from "./video-player";
import { compactNumberFormat } from "@/lib/utils";

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
    <div className="space-y-4 p-4">
      {/* 비디오 플레이어 */}
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

      {/* 스트림 정보 */}
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

      {/* 채널 정보 및 공지사항 탭 */}
      <Tabs defaultValue="about" className="mt-4">
        <TabsList className="bg-muted border-b border-border">
          <TabsTrigger value="about" className="text-sm">채널 정보</TabsTrigger>
          <TabsTrigger value="notice" className="text-sm">공지사항</TabsTrigger>
        </TabsList>
        <TabsContent value="about" className="p-4 bg-muted/50 rounded-md mt-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-foreground font-semibold mb-2">채널 소개</h3>
              <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: stream.description }} />
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-2">채널 통계</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">{compactNumberFormat(stream.followers)}</p>
                  <p className="text-xs text-muted-foreground">팔로워</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">256</p>
                  <p className="text-xs text-muted-foreground">동영상</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">1.2M</p>
                  <p className="text-xs text-muted-foreground">총 시청</p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notice" className="p-4 bg-muted/50 rounded-md mt-2">
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 text-background text-xs px-2 py-0.5 rounded">공지</span>
                <span className="text-xs text-muted-foreground">2024.03.25</span>
              </div>
              <h3 className="text-foreground font-semibold mb-2">
                100일 챌린지 시작합니다!
              </h3>
              <p className="text-sm text-muted-foreground">
                마인크래프트 100일 챌린지를 시작합니다! 매일 저녁 8시에 방송을 진행할 예정이니
                많은 관심과 시청 부탁드립니다. 특별한 이벤트도 준비되어 있으니 기대해주세요! 😊
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-500 text-background text-xs px-2 py-0.5 rounded">공지</span>
                <span className="text-xs text-muted-foreground">2024.03.20</span>
              </div>
              <h3 className="text-foreground font-semibold mb-2">
                새로운 시리즈 예고
              </h3>
              <p className="text-sm text-muted-foreground">
                다음 주부터 새로운 컨텐츠가 시작됩니다. 기대해주세요!
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
