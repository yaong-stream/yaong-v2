'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Heart, Search, Shield, Star, Users, UserX } from 'lucide-react';

// 임시 시청자 데이터
const viewers = [
  {
    id: 1,
    username: '시청자123',
    watchTime: '2시간 30분',
    status: '시청 중',
    type: 'viewer',
    followedAt: '2024-01-15',
  },
  {
    id: 2,
    username: '매니저456',
    watchTime: '1시간 45분',
    status: '시청 중',
    type: 'moderator',
    followedAt: '2023-12-01',
  },
  {
    id: 3,
    username: '구독자789',
    watchTime: '45분',
    status: '시청 중',
    type: 'subscriber',
    followedAt: '2024-02-01',
  },
];

export default function ViewersPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="p-6">
      <div className="flex flex-col gap-6">
        {/* 헤더 */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">시청자 관리</h1>
            <p className="text-sm text-muted-foreground mt-1">
              실시간 시청자를 관리하고 통계를 확인하세요.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Shield className="w-4 h-4 mr-2" />
              매니저 관리
            </Button>
            <Button variant="outline">
              <UserX className="w-4 h-4 mr-2" />
              차단된 사용자
            </Button>
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">현재 시청자</p>
                  <h3 className="text-2xl font-bold">1,234</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">평균 시청 시간</p>
                  <h3 className="text-2xl font-bold">45분</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">팔로워</p>
                  <h3 className="text-2xl font-bold">45.2K</h3>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">구독자</p>
                  <h3 className="text-2xl font-bold">1.2K</h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 시청자 목록 */}
        <Card>
          <CardHeader className="border-b">
            <div className="flex items-center justify-between">
              <CardTitle>시청자 목록</CardTitle>
              <div className="flex items-center gap-2">
                <Select value={filter} onValueChange={setFilter}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="필터 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="moderator">매니저</SelectItem>
                    <SelectItem value="subscriber">구독자</SelectItem>
                    <SelectItem value="viewer">일반 시청자</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Search
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="시청자 검색"
                    className="pl-8 w-[200px]"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>사용자</TableHead>
                  <TableHead>시청 시간</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>팔로우 날짜</TableHead>
                  <TableHead className="text-right">작업</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {viewers.map((viewer) => (
                  <TableRow key={viewer.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{viewer.username}</span>
                        {viewer.type !== 'viewer' && (
                          <Badge variant="secondary">
                            {viewer.type === 'moderator' ? '매니저' : '구독자'}
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{viewer.watchTime}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50">
                        {viewer.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{viewer.followedAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Shield className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <UserX className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* 시청자 통계 */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>시청자 증감 추이</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">시청자 증감 그래프가 표시될 영역</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>시청자 유형 분포</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center border-2 border-dashed rounded-lg">
                <p className="text-muted-foreground">시청자 유형 차트가 표시될 영역</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 