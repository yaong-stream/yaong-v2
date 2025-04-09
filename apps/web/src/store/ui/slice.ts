import { StateCreator } from 'zustand';

// State
interface UISliceState {
  isSidebarOpen: boolean;
  isMaualSidebarOpen: boolean;
}

// Actions
interface UISliceActions {
  toggleSidebar: (value?: boolean) => void;
  toggleMaualSidebar: (value?: boolean) => void;
}

// Selectors
export const selectIsSidebarOpen = (state: UISliceState) => state.isSidebarOpen;
export const selectToggleSidebar = (state: UISliceActions) => state.toggleSidebar;
export const selectIsMaualSidebarOpen = (state: UISliceState) => state.isMaualSidebarOpen;
export const selectToggleMaualSidebar = (state: UISliceActions) => state.toggleMaualSidebar;
// Slice Type
export type UISlice = UISliceState & UISliceActions;

// Initial State
const initialState: UISliceState = {
  isSidebarOpen: false,
  isMaualSidebarOpen: true,
};

// Slice Creator
export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
  ...initialState,
  toggleSidebar: (value) => set((state) => ({
      isSidebarOpen: typeof value === 'boolean' ? value : !state.isSidebarOpen 
  })),
  toggleMaualSidebar: (value) => set((state) => ({
    isSidebarOpen: typeof value === 'boolean' ? value : !state.isSidebarOpen,
    isMaualSidebarOpen: typeof value === 'boolean' ? value : !state.isMaualSidebarOpen
  })),
}); 