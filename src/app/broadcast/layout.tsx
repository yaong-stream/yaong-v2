'use client';

import { useState } from 'react';
import { BroadcastSidebar } from './_components/broadcast-sidebar';
import { BroadcastHeader } from './_components/broadcast-header';

export default function BroadcastLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <BroadcastHeader onMenuClick={() => setIsSidebarOpen(true)} />
      <div className="flex-1 flex">
        <BroadcastSidebar 
          isOpen={isSidebarOpen} 
          onClose={() => setIsSidebarOpen(false)} 
        />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
} 