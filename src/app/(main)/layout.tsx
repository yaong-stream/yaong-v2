'use client';

import { Header } from "./_components/layout/header";
import { Sidebar } from './_components/layout/sidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex h-screen">
            {/* 사이드바 */}
            <aside className="w-60 bg-card border-r border-border flex-shrink-0">
                <Sidebar />
            </aside>

            <div className="flex-1 flex flex-col">
                {/* 헤더 */}
                <header className="h-14 border-b border-border bg-card">
                    <Header />
                </header>

                {/* 메인 컨텐츠 */}
                <main className="flex-1 overflow-y-auto bg-background">
                    {children}
                </main>
            </div>
        </div>
    );
} 