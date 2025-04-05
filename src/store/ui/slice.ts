import { StateCreator } from 'zustand';

// State
interface UISliceState {
  isSidebarOpen: boolean;
}

// Actions
interface UISliceActions {
  toggleSidebar: (value?: boolean) => void;
}

// Selectors
export const selectIsSidebarOpen = (state: UISliceState) => state.isSidebarOpen;
export const selectToggleSidebar = (state: UISliceActions) => state.toggleSidebar;
// Slice Type
export type UISlice = UISliceState & UISliceActions;

// Initial State
const initialState: UISliceState = {
  isSidebarOpen: true,
};

// Slice Creator
export const createUISlice: StateCreator<UISlice, [], [], UISlice> = (set) => ({
  ...initialState,
  toggleSidebar: (value) => set((state) => ({
      isSidebarOpen: typeof value === 'boolean' ? value : !state.isSidebarOpen 
  })),
}); 