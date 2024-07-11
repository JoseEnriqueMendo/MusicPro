import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idMusic: '',
  token: '',
  time: '',
};

export const trackingMusicSlice = createSlice({
  name: 'trackMusic',
  initialState,
  reducers: {
    trackingMusic: (state, action) => {
      const { idMusic } = action.payload;
      state.idMusic = idMusic;

      if (localStorage.getItem('token') !== null) localStorage.removeItem('token');
      if (localStorage.getItem('timeExpired') !== null) localStorage.removeItem('timeExpired');
    },
  },
});

export const { trackingMusic } = trackingMusicSlice.actions;
export default trackingMusicSlice.reducer;
