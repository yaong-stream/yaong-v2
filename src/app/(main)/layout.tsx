'use client';

import {
  useState,
} from 'react';
import {
  Menu,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import {
  Header,
} from "./_components/layout/header";
import {
  Sidebar,
} from './_components/layout/sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggle = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen">
      {/* 사이드바 오버레이 */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* 사이드바 */}
      <aside className={`fixed lg:static h-screen bg-card border-r border-border flex-shrink-0 transition-all duration-300 ease-in-out z-50 overflow-y-auto ${isSidebarOpen ? 'translate-x-0 w-64 lg:w-60' : '-translate-x-full lg:translate-x-0 lg:w-0'
        }`}>
        <div className="h-full">
          <Sidebar />
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        {/* 헤더 */}
        <header className="h-14 border-b border-border bg-card">
          <div className="h-full flex items-center px-4 lg:px-6">
            <button
              onClick={() => toggle()}
              className="lg:hidden mr-4 p-2 hover:bg-accent/50 rounded-md"
            >
              <Menu className="h-5 w-5" />
            </button>
            <button
              onClick={() => toggle()}
              className="hidden lg:block mr-4 p-2 hover:bg-accent/50 rounded-md"
            >
              {isSidebarOpen ? (
                <ChevronLeft className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            <Header />
          </div>
        </header>

        {/* 메인 컨텐츠 */}
        <main className="flex-1 overflow-y-auto bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}
