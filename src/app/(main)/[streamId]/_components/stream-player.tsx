import { UserAvatar } from "@/components/user-avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface StreamPlayerProps {
  streamId: string;
}

export const StreamPlayer = ({ streamId }: StreamPlayerProps) => {
  return (
    <div className="space-y-4 p-4">
      {/* 비디오 플레이어 */}
      <div className="aspect-video relative bg-muted rounded-md">
        <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 rounded-md">
          <span className="text-xs font-semibold text-background">LIVE</span>
        </div>
        <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/60 rounded-md">
          <span className="text-xs font-semibold text-background-foreground">1,244 시청</span>
        </div>
      </div>

      {/* 스트림 정보 */}
      <div className="flex gap-4">
        <UserAvatar 
          username="고양이냥보"
          imageUrl="/placeholder.png"
          size="lg"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground">
            고양이와 마인크래프트 서바이벌 모드 - 100일 챌린지 #76
          </h2>
          <p className="text-sm text-muted-foreground">고양이냥보</p>
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
        <Button variant="secondary" size="sm">
          팔로우
        </Button>
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
              <p className="text-sm text-muted-foreground">
                안녕하세요! 고양이와 함께 게임을 즐기는 스트리머 고양이냥보입니다. 
                주로 마인크래프트 서바이벌 모드와 다양한 게임을 플레이하며, 
                시청자분들과 소통하면서 즐거운 방송을 진행하고 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-foreground font-semibold mb-2">채널 통계</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-lg font-semibold text-foreground">12.5K</p>
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