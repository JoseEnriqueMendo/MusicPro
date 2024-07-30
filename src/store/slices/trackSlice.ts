import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idTrack: localStorage.getItem('idTrack') || '1pymWRCuZfCd0zdiBJo0Hj',
  type: localStorage.getItem('type') || 'track',
  isPlaying: false,
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    onPlayTrack: (state, action) => {
      const { idTrack, type } = action.payload;
      state.idTrack = idTrack;
      state.type = type;
      state.isPlaying = true;
      localStorage.setItem('type', type);
      localStorage.setItem('idTrack', idTrack);
    },
    onClearTrack: (state) => {
      state.idTrack = initialState.idTrack;
      state.type = initialState.type;
      state.isPlaying = initialState.isPlaying;
    },

    onPauseTrack: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { onPlayTrack, onClearTrack, onPauseTrack } = trackSlice.actions;
export default trackSlice.reducer;
