'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Download, Heart, TrendingUp, Users } from 'lucide-react';

// 임시 데이터
const periodStats = [
  {
    label: '총 시청 시간',
    value: '2,345시간',
    change: '+15%',
    icon: Clock,
  },
  {
    label: '평균 시청자',
    value: '1,234명',
    change: '+12%',
    icon: Users,
  },
  {
    label: '최대 시청자',
    value: '3,456명',
    change: '+25%',
    icon: TrendingUp,
  },
  {
    label: '신규 팔로워',
    value: '789명',
    change: '+8%',
    icon: Heart,
  },
];

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">방송 분석</h1>
            <p className="text-sm text-muted-foreground mt-1">
              방송 통계와 성과를 분석하세요.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="7days">
              <SelectTrigger className="w-[180px]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue placeholder="기간 선택" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">최근 7일</SelectItem>
                <SelectItem value="30days">최근 30일</SelectItem>
                <SelectItem value="90days">최근 90일</SelectItem>
                <SelectItem value="year">올해</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              보고서 다운로드
            </Button>
          </div>
        </div>

        {/* 주요 통계 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {periodStats.map((stat) => {
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
                    <span className="text-sm text-green-600">
                      {stat.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 상세 분석 */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="viewers">시청자 분석</TabsTrigger>
            <TabsTrigger value="engagement">참여도 분석</TabsTrigger>
            <TabsTrigger value="revenue">수익 분석</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>시청자 추이</CardTitle>
                  <CardDescription>시간대별 시청자 수 변화</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">시청자 추이 그래프가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>시청 시간 분포</CardTitle>
                  <CardDescription>시청자별 시청 시간 분포</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">시청 시간 분포 차트가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>일별 통계</CardTitle>
                  <CardDescription>최근 7일간의 주요 지표 변화</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">일별 통계 그래프가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="viewers">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>시청자 유형 분포</CardTitle>
                  <CardDescription>시청자 유형별 비율</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">시청자 유형 파이 차트가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>시청자 충성도</CardTitle>
                  <CardDescription>재방문율 및 시청 지속성</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">충성도 분석 차트가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="engagement">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>채팅 참여도</CardTitle>
                  <CardDescription>시간대별 채팅 활성도</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">채팅 활성도 그래프가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>인기 시간대</CardTitle>
                  <CardDescription>시청자가 가장 많은 시간대</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">시간대별 히트맵이 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="revenue">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>수익 추이</CardTitle>
                  <CardDescription>일별 수익 변화</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">수익 추이 그래프가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>수익원 분석</CardTitle>
                  <CardDescription>수익 유형별 비율</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg">
                    <p className="text-muted-foreground">수익원 분석 차트가 표시될 영역</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 