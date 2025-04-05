import { RootState } from '../store';

// 사이드바 관련 selector
export const selectIsSidebarOpen = (state: RootState) => state.isSidebarOpen;

// 사이드바 토글 함수 selector
export const selectSidebarToggle = (state: RootState) => state.toggleSidebar; 