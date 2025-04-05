'use client';

import { create } from 'zustand';
import { createJSONStorage, persist, devtools, PersistOptions } from 'zustand/middleware';
import { UISlice, createUISlice } from './ui';

type Store = UISlice;

type PersistedState = Pick<Store, 'isSidebarOpen'>;

const persistOptions: PersistOptions<Store, PersistedState> = {
  name: 'yaong-storage',
  storage: createJSONStorage(() => localStorage),
  partialize: (state) => ({
    isSidebarOpen: state.isSidebarOpen,
  }),
};

export const useStore = create<Store>()(
  devtools(
    persist(createUISlice, persistOptions),
    {
      name: 'yaong',
      enabled: true,
    }
  )
); 