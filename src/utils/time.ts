import { AlbumObject } from '../interface/album';
import tokenServices from '../apis/token';
// utils/timeFormatter.ts
export const formatDuration = (durationMs: number): string => {
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const formatDurationExplicit = (durationMs: number): string => {
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} s`;
};

export const sumAndFormatDuration = (album: AlbumObject): string => {
  const tracks = album?.tracks?.items || [];
  const totalDurationMs = tracks.reduce((total, track) => total + track.duration_ms, 0);
  const totalSeconds = Math.floor(totalDurationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export const flipDate = (fecha: string): string => {
  const partes = fecha.split('-');
  if (partes.length !== 3) {
    return 'error';
  }
  return `${partes[2]}-${partes[1]}-${partes[0]}`;
};

export const setItemWithExpiry = (key: string, value: string, expiryInHours: number) => {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + expiryInHours * 50 * 60 * 1000,
  };
  localStorage.setItem('token', value);
  localStorage.setItem(key, JSON.stringify(item));
};

export const checkValidToken = async () => {
  const itemStr = localStorage.getItem('time_expired');
  if (!itemStr) {
    await tokenServices.getToken();
    return;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem('time_expired');
    localStorage.removeItem('token');
    await tokenServices.getToken();
    return;
  }
};
