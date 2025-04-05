import { StateCreator } from 'zustand';
import { RootState } from '../store';
import { initialUIState } from './state';
import { createUIActions, UIActions } from './actions';

export type UIDomain = typeof initialUIState & UIActions;

export const createUIDomain = (
  set: StateCreator<RootState>['setState'],
  get: () => RootState
): UIDomain => ({
  ...initialUIState,
  ...createUIActions(set, get),
});

export * from './state';
export * from './actions';
export * from './selectors'; 