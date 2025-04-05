'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  Settings,
  MessageSquare,
  Users,
  BarChart,
  Video,
  X
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const menuItems = [
  {
    label: '방송 화면',
    href: '/broadcast',
    icon: Video
  },
  {
    label: '대시보드',
    href: '/broadcast/dashboard',
    icon: LayoutDashboard
  },
  {
    label: '채팅 관리',
    href: '/broadcast/chat',
    icon: MessageSquare
  },
  {
    label: '시청자 관리',
    href: '/broadcast/viewers',
    icon: Users
  },
  {
    label: '통계',
    href: '/broadcast/analytics',
    icon: BarChart
  },
  {
    label: '설정',
    href: '/broadcast/settings',
    icon: Settings
  }
];

interface BroadcastSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function BroadcastSidebar({ isOpen, onClose }: BroadcastSidebarProps) {
  const pathname = usePathname();

  const SidebarContent = () => (
    <nav className="space-y-1 h-full">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;
        
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors',
              isActive 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-muted'
            )}
          >
            <Icon className="w-4 h-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* 데스크톱 사이드바 */}
      <div className="hidden lg:block w-64 h-full bg-background border-r">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">방송 관리</h2>
          <SidebarContent />
        </div>
      </div>

      {/* 모바일 사이드바 */}
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="p-4 border-b">
            <div className="flex items-center justify-between">
              <SheetTitle>방송 관리</SheetTitle>
            </div>
          </SheetHeader>
          <div className="p-4">
            <SidebarContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
} 