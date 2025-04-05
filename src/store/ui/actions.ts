import { StateCreator } from 'zustand';
import { RootState } from '../store';

export interface UIActions {
  toggleSidebar: (value?: boolean) => void;
}

export const createUIActions = (
  set: StateCreator<RootState>['setState'],
  get: () => RootState
): UIActions => ({
  toggleSidebar: (value) => 
    set((state) => ({ 
      isSidebarOpen: typeof value === 'boolean' ? value : !state.isSidebarOpen 
    })),
}); 