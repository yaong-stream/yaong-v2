'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Gift, Heart, MessageSquare, Users } from 'lucide-react';

// 임시 데이터
const stats = [
  {
    label: '현재 시청자',
    value: '1,234',
    change: '+12%',
    icon: Users,
  },
  {
    label: '방송 시간',
    value: '02:34:15',
    change: '',
    icon: Clock,
  },
  {
    label: '채팅 수',
    value: '8,234',
    change: '+23%',
    icon: MessageSquare,
  },
  {
    label: '팔로워',
    value: '45.2K',
    change: '+5%',
    icon: Heart,
  },
];

const recentActivities = [
  { type: 'follow', user: '시청자123', time: '1분 전' },
  { type: 'subscription', user: '구독자456', time: '5분 전' },
  { type: 'donation', user: '후원자789', amount: '10,000', time: '10분 전' },
  { type: 'follow', user: '시청자321', time: '15분 전' },
];

export default function DashboardPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">대시보드</h1>
            <p className="text-sm text-muted-foreground mt-1">
              방송 현황과 통계를 한눈에 확인하세요.
            </p>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between space-x-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </p>
                        <h3 className="text-2xl font-bold">{stat.value}</h3>
                      </div>
                    </div>
                    {stat.change && (
                      <span className="text-sm text-green-600">
                        {stat.change}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 상세 정보 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 최근 활동 */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>최근 활동</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      {activity.type === 'follow' && <Heart className="h-4 w-4 text-primary" />}
                      {activity.type === 'subscription' && <Users className="h-4 w-4 text-primary" />}
                      {activity.type === 'donation' && <Gift className="h-4 w-4 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {activity.user}
                        {activity.type === 'follow' && '님이 팔로우했습니다'}
                        {activity.type === 'subscription' && '님이 구독했습니다'}
                        {activity.type === 'donation' && `님이 ${activity.amount}원을 후원했습니다`}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 시청자 그래프 */}
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>시청자 통계</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">시청자 그래프가 표시될 영역</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 채팅 분석 */}
        <Card>
          <CardHeader>
            <CardTitle>채팅 분석</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="popular">
              <TabsList>
                <TabsTrigger value="popular">인기 채팅</TabsTrigger>
                <TabsTrigger value="keywords">주요 키워드</TabsTrigger>
                <TabsTrigger value="emotes">자주 사용된 이모티콘</TabsTrigger>
              </TabsList>
              <TabsContent value="popular" className="mt-4">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="font-medium">채팅 내용이 표시될 영역입니다</p>
                    <p className="text-sm text-muted-foreground">시청자123 • 23회 도달</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="keywords" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['키워드1', '키워드2', '키워드3', '키워드4'].map((keyword, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted text-center">
                      <p className="font-medium">{keyword}</p>
                      <p className="text-sm text-muted-foreground">123회</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="emotes" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['😊', '👍', '❤️', '🎉'].map((emote, i) => (
                    <div key={i} className="p-4 rounded-lg bg-muted text-center">
                      <p className="text-2xl">{emote}</p>
                      <p className="text-sm text-muted-foreground mt-2">89회</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 