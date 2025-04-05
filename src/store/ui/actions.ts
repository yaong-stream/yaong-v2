import { StateCreator } from 'zustand';
import { RootState } from '../store';

export interface UIActions {
  toggleSidebar: (value?: boolean) => void;
}

export const createUIActions = (
  set: StateCreator<RootState>['setState'],
  get: () => RootState
): UIActions => ({
  // 버그 수정: 사이드바 토글 함수 최적화
  // 이전 상태를 참조하여 변경하도록 수정하고, state.ui 내부의 값만 업데이트하도록 수정
  toggleSidebar: (value) => 
    set((state) => ({ 
      ui: {
        ...state.ui,
        isSidebarOpen: typeof value === 'boolean' ? value : !state.ui.isSidebarOpen 
      }
    })),
}); 