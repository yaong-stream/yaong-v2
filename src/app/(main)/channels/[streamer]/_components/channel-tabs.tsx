import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { compactNumberFormat } from "@/lib/utils";
import { StreamDto } from "@/services";


interface ChannelTabsProps {
  stream: StreamDto;
}

export const ChannelTabs = ({
  stream
}: ChannelTabsProps) => {
  return (
    <Tabs defaultValue="about" className="p-6">
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
  );
}; 