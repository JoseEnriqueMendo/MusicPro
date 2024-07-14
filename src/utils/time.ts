import { AlbumObject } from "../interface/album";

// utils/timeFormatter.ts
export const formatDuration = (durationMs: number): string => {
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export const sumAndFormatDuration = (album: AlbumObject): string => {
  const tracks = album?.tracks?.items || [];
  const totalDurationMs = tracks.reduce(
    (total, track) => total + track.duration_ms,
    0
  );
  const totalSeconds = Math.floor(totalDurationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
