import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import { onClearTrack, onPauseTrack, onPlayTrack } from '../store/slices/trackSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTrack = () => {
  const { idTrack, isPlaying, type } = useAppSelector((state) => state.trackReducer);
  const dispatch = useAppDispatch();

  const playTrack = (idTrack: string, type: string) => {
    dispatch(onPlayTrack({ idTrack, type }));
  };

  const pauseTrack = () => {
    dispatch(onPauseTrack());
  };

  const clearTrack = () => {
    dispatch(onClearTrack());
  };

  return {
    idTrack,
    type,
    isPlaying,
    playTrack,
    pauseTrack,
    clearTrack,
  };
};
