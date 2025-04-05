'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { createUIDomain, UIDomain } from './ui';

export type RootState = UIDomain;

export const useStore = create<RootState>()(
  persist(
    (set, get) => ({
      ...createUIDomain(set, get),
    }),
    {
      name: 'yaong-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        isSidebarOpen: state.isSidebarOpen,
      }),
    }
  )
); 