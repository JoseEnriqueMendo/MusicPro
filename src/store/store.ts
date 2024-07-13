import { configureStore } from '@reduxjs/toolkit';
import trackReducer from './slices/trackSlice';

export const store = configureStore({
  reducer: {
    trackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
