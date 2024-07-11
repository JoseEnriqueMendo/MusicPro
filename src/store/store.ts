import { configureStore } from '@reduxjs/toolkit';
import trackingMusic from './slices/trackingMusic';
export const store = configureStore({
  reducer: {
    trackMusic: trackingMusic,
  },
});
